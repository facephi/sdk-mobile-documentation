# Video Recording Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offers
a series of functionalities and services, allowing in turn its
integration into a mobile application in a simple and completely
scalable. Depending on the use case required, it must be
perform the installation of certain components. Its high level
Modularity allows, in the future, to add other
new components without affecting in any way those already integrated into the
project.

For more information on the base configuration, go to the section
<a href='Mobile_SDK'
linked-data-resource-id='2605285492' linked-data-resource-version='11'
data-linked-resource-type='page'>Mobile SDK</a>.

---

## 1. Introduction

The _Component_ discussed in the current document is called
**_VideoRecording Component_**. This is responsible for capturing the screen
of the device in the background. It is mainly oriented for
recording of the onboarding process.

## 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Component integration

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the
documentation related to:

<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
and follow the instructions in that document.

</div>
This section will explain step by step how to integrate the current
component into an existing project.

### 2.1 Creating the extension

For the documented example, an app with SwiftUI has been used, but the component and documentation are valid regardless of whether UIKit or SwiftUI is used.

In our project we add a new target of type **_Broadcast Upload Extension:_**

![Image](/ios/VideoRecording/videoRecording-001.png)

We configure the name of the extension, in this example it will be VideoRecording:

![Image](/ios/VideoRecording/videoRecording-002.png)

If the following modal appears, click activate:

![Image](/ios/VideoRecording/videoRecording-003.png)

This generates the following structure:

![Image](/ios/VideoRecording/videoRecording-004.png)

Where SampleHandler is the main class of the extension.

**NOTE: It is important to keep in mind that the version number (MARKETING_VERSION) and the project version number must always be the same in both targets:**

![Image](/ios/VideoRecording/videoRecording-005.png)

### 2.2 Creating the shared App Group

If we don't already have it in our app, we can create a new Capability of type App Group.

This will serve to create the shared container between our extension and the application target.

![Image](/ios/VideoRecording/videoRecording-006.png)

We assign a name to the new App Group after clicking on the + icon:

![Image](/ios/VideoRecording/videoRecording-007.png)

We select the same identifier in our extension. In this way both will have checked the App Group that we just created:

![Image](/ios/VideoRecording/videoRecording-008.png)

XCode will automatically generate or update the entitlement files involved to add the capability to each target:

![Image](/ios/VideoRecording/videoRecording-009.png)

### 2.3 Dependencies required for integration

<div class="warning">
<span class="warning">:warning:</span>
To avoid conflicts and compatibility problems, if you want to install the component in a project that contains an old version of the Facephi libraries (Widgets), these must be completely removed before installing the **_SDKMobile_** components.
</div>

Currently FacePhi libraries are distributed remotely through different dependency managers.

### 2.3.1 Cocoapods

The **mandatory** dependencies that must have been previously installed (adding them to the project's Podfile file) are:

```
pod 'FPHISDKMainComponent' , '~> 2.0.0'
```

- It is recommended to also use the VideoRecording component with the tracking component (`FPHISDKTrackingComponent`).

- To install the current component, the following entry must be included in the application's Podfile:

```
pod 'FPHISDKVideoRecordingComponent' , '~> 2.0.0'
```

- This dependency must be declared within the target of the app and the extension (the latter will be explained below)

- An example of what the Podfile would look like:

```
target 'demoApp' do
...
   pod 'FPHISDKMainComponent', 'X.Y.Z'
   pod 'FPHISDKVideoRecordingComponent', 'A.B.C'
   pod 'FPHISDKTrackingComponent', 'D.E.F' ### Optional, recommended
...
end
target 'VideoRecording' do ### Our extension target
   use_frameworks! ### We want to use frameworks instead of Static Libs
   pod 'FPHISDKVideoRecordingComponent', 'A.B.C'
end
```

NOTE: You have to be careful to put the extension target outside the application target. Failure to do so would cause the application pods to also be compiled into the extension, resulting in collateral problems.

#### 2.3.2 SPM

We add our dependency to the project and assign it to the VideoRecording target:

![Image](/ios/VideoRecording/videoRecording-010.png)

We must then also add it to the target of the app in General → Framework, Libraries and Embedded Content:

![Image](/ios/VideoRecording/videoRecording-011.png)

### 2.4 Implement the extension

At this point we must develop the functionality in our newly created SampleHandler.swift. To do this, we copy/replace the following code:

```java
class SampleHandler: RPBroadcastSampleHandler {
     var bufferCopy: CMSampleBuffer?
     var lastSendTs = Int64(Date().timeIntervalSince1970 * 1000)
     var timer: Timer?
     // Shared info between app and extension
     private let kAppGroupName = "group.com.facephi.sdk.demo" // SET YOUR APP_GROUP_NAME, you can get it from your entitlements' file
     override func broadcastStarted(withSetupInfo setupInfo: [String: NSObject]?) {
         // Load shared info from app
         let sharedContainer = UserDefaults(suiteName: kAppGroupName)!
         let uid = sharedContainer.string(forKey: "UID")!
         let token = sharedContainer.string(forKey: "TOKEN")!
         let channel = sharedContainer.string(forKey: "CHANNEL")!
         // Passing data to app
         sharedContainer.setValue(true, forKey: "BROADCASTSTARTED")
         sharedContainer.synchronize()
         print("uid: \(uid)")
         print("token: \(token)")
         print("channelName: \(channel)")
         // In-App Screen Capture
         AgoraUploader.startBroadcast(uid: uid, token: token, channel: channel)
         AgoraUploader.sharedAgoraEngine.delegate = self
         DispatchQueue.main.async {
             self.timer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { [weak self] (_: Timer) in
                 guard let weakSelf = self else { return }
                 let elapsed = Int64(Date().timeIntervalSince1970 * 1000) - weakSelf.lastSendTs
                 print("elapse: \(elapse)")
                 // if frame stopped sending for too long time, resend the last frame
                 // to avoid stream being frozen when viewed from remote
                 if elapsed > 300 {
                     if let buffer = weakSelf.bufferCopy {
                         weakSelf.processSampleBuffer(buffer, with: .video)
                     }
                 }
             }
         }
     }
     override func broadcastPaused() {
         // User has requested to pause the broadcast. Samples will stop being delivered.
     }
     override func broadcastResumed() {
         // User has requested to resume the broadcast. Samples delivery will resume.
     }
     override func broadcastFinished() {
         timer?.invalidate()
         timer = nil
         AgoraUploader.stopBroadcast()
     }
     override func processSampleBuffer(_ sampleBuffer: CMSampleBuffer, with sampleBufferType: RPSampleBufferType) {
         DispatchQueue.main.async { [weak self] in
             switch sampleBufferType {
             case .video:
                 if let weakSelf = self {
                     weakSelf.bufferCopy = sampleBuffer
                     weakSelf.lastSendTs = Int64(Date().timeIntervalSince1970 * 1000)
                 }
                 AgoraUploader.sendVideoBuffer(sampleBuffer)
             @unknown default:
                 break
             }
         }
     }
}
```

**NOTE: Make sure you enter the correct App Group Name on line 6. In our example it was group.com.facephi.demosdk-videoRecording.**

You can optionally listen to the various events that occur when the user interacts with the recording functionality by making the SampleHandler class extend `AgoraRtcEngineDelegate`:

```java
import AgoraRtcKit

extension SampleHandler: AgoraRtcEngineDelegate {
     /// callback when warning occurs for agora sdk, warning can usually be ignored, still it's nice to check out
     /// what is happening
     /// Warning code description can be found at:
     /// at: https://docs.agora.io/en/Voice/API%20Reference/oc/Constants/AgoraWarningCode.html
     /// cn: https://docs.agora.io/cn/Voice/API%20Reference/oc/Constants/AgoraWarningCode.html
     /// @param warningCode warning code of the problem
     func rtcEngine(_ engine: AgoraRtcEngineKit, didOccurWarning warningCode: AgoraWarningCode) {}

     /// callback when error occured for agora sdk, you are recommended to display the error descriptions on demand
     /// to let user know something wrong is happening
     /// Error code description can be found at:
     /// at: https://docs.agora.io/en/Voice/API%20Reference/oc/Constants/AgoraErrorCode.html
     /// cn: https://docs.agora.io/cn/Voice/API%20Reference/oc/Constants/AgoraErrorCode.html
     /// @param errorCode error code of the problem
     func rtcEngine(_ engine: AgoraRtcEngineKit, didOccurError errorCode: AgoraErrorCode) {}

     /// callback when the local user joins a specified channel.
     /// @param channel
     /// @param uid uid of local user
     /// @param elapsed time elapse since current sdk instance join the channel in ms
     func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinChannel channel: String, withUid uid: UInt, elapsed: Int) {}

     /// callback when a remote user is joining the channel, note audience in live broadcast mode will NOT trigger this event
     /// @param uid uid of remote joined user
     /// @param elapsed time elapse since current sdk instance join the channel in ms
     func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinedOfUid uid: UInt, elapsed: Int) {}

     /// callback when a remote user is leaving the channel, note audience in live broadcast mode will NOT trigger this event
     /// @param uid uid of remote joined user
     /// @param reason why this user left, note this event may be triggered when the remote user
     /// become an audience in live broadcasting profile
     func rtcEngine(_ engine: AgoraRtcEngineKit, didOfflineOfUid uid: UInt, reason: AgoraUserOfflineReason) {
         // Replace domain's value with your Bundle Identifier
         let error = NSError(domain: "com.facephi.demosdk-videoRecording", code: 0, userInfo: [NSLocalizedDescriptionKey: NSLocalizedString("Call ended", comment: "")])

         finishBroadcastWithError(error)
     }
}
```

---

## 3. Start new operation

In order to generate the associated information correctly in the platform, the **newOperation** command must be executed first.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **prior to launch**.

To learn more about how to start a new operation, it is recommended to
consult the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
documentation, which details and explains what this process consists of.

</div>

---

## 4. Use of component

Once the component has been started and a new operation has been created (section 3), the SDK components can be launched. There are two ways to launch the component:

- **[WITHOUT TRACKING]** This call allows the component's functionality to be launched normally, but **no event will be tracked** to the tracking server:

```java
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), appGroupName: "group.com.facephi.demosdk-videoRecording", extensionName: "VideoRecording", output: { _ in })
SDKController.shared.launchMethod(controller: controller)
```

- **[WITH TRACKING]** This call allows the component's functionality to be launched normally, but internal events to the tracking server will be tracked:

```java
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), appGroupName: "group.com.facephi.demosdk-videoRecording", extensionName: "VideoRecording", output: { _ in })
SDKController.shared.launch(controller: controller)
```

<div class="warning">
<span class="warning">:warning:</span>
The **launch** method should be used **by default**. This method allows you to use **tracking** if your component is activated, and will not use it when it is deactivated (or the component is not installed).

On the contrary, the **launchMethod** method covers a special case, in which the integrator has tracking installed and activated, but in a given flow within the application they do not want to track information. In that case, this method is used to prevent that information from being sent to the platform.

</div>

In the configuration data (_VideoRecordingConfigurationData_) you can also modify:

- **Optional data that is normally included within the license**

  - **url**: Path to the video socket.
  - **apiKey**: ApiKey required for connection to the video socket.
  - **tenantId**: Tenant identifier that refers to the current client, necessary for the connection to the video service.
  - **extractionTimeout**: How long (milliseconds) will the component wait for the socket before generating a timeout error.
  - **showDiagnostic**: If an error occurs, the error will be displayed on the screen in addition to being sent with the output.

---

## 5. Component customization

Right now there are no resources to configure in the component.

## 6. Common errors and problems

### 6.1 At compile time

#### 6.1.1 Write permissions - Sandbox: rsync.samba(67364) deny(1) file-write-create

If you see a compilation error regarding write permissions:

![Image](/ios/VideoRecording/videoRecording-012.png)

Check the status in Build Settings of the parameter **ENABLE_USER_SCRIPT_SANDBOXING**, its value must be **NO**.

![Image](/ios/VideoRecording/videoRecording-013.png)

### 6.2 At runtime

#### 6.2.1 Starscream - EXC_BAD_ACCESS

When launching the component an error may appear in the Starscream dependency:

![Image](/ios/VideoRecording/videoRecording-014.png)

**_Solution_** - Upload the minimum Pod version from iOS11 to iOS12:

![Image](/ios/VideoRecording/videoRecording-015.png)

#### 6.2.2 QuickTime Player

When launching the component, if the iPhone is connected and already sharing screen through a QuickTime Player recording session, it won't work.

**_Solution_** - Close the QuickTime Player session.

#### 6.2.3 Screen Sharing doesn't get started

When launching the component, we can't see the native prompt for screen sharing or we see it but it doesn't get started.

Possible Cause: The extension created in your app has a Bundle Identifier. If that identifier has changed, maybe the old one is still persisted in the cache.

**_Possible Solution_** - Remove the app, and install it again. Restart the device if needed.
