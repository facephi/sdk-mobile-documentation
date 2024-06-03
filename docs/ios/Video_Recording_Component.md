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
<a href="Mobile_SDK"
linked-data-resource-id="2605285492" linked-data-resource-version="11"
data-linked-resource-type="page">Mobile SDK</a>.

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

In our project we add a new target of type ***Broadcast Upload Extension:***

![Image](/iOS/videoRecording-001.png)

We configure the name of the extension, in this example it will be VideoRecording:

![Image](/iOS/videoRecording-002.png)

If the following modal appears, click activate:

![Image](/iOS/videoRecording-003.png)

This generates the following structure:

![Image](/iOS/videoRecording-004.png)

By default, a file called `SampleHandler` is created. This file contains the main class of the extension.

To make use of Facephi's screen sharing functionality we should modify the key `NSExtensionPrincipalClass` and set it to:

```
videoRecordingComponent.VideoRecordingHandler
```

![Image](/iOS/videoRecording-2.1.InfoPList.png)

**NOTE: It is important to keep in mind that the version number (MARKETING_VERSION) and the project version number must always be the same in both targets:**

![Image](/iOS/videoRecording-005.png)

### 2.2 Setting the NSMicrophoneUsageDescription

The Video Recording functionality can also share the microphone's input. For that reason, we need to add the key:

```
NSMicrophoneUsageDescription
```

To our target's Info.plist, detailing why do we use this functionality.


### 2.3 Creating the shared App Group

Now we need to create a new App Group's Capability.

This will serve to create the shared container between our extension and the application target.

![Image](/iOS/videoRecording-006.png)

After clicking on the + icon.

**It's important to set the app group's value to:**

```
group.com.facephi.videoRecording
```


![Image](/iOS/videoRecording-007.png)

We select the same identifier in our extension. In this way both will have checked the App Group that we just created:

![Image](/iOS/videoRecording-008.png)

XCode will automatically generate or update the entitlement files involved to add the capability to each target:

![Image](/iOS/videoRecording-009.png)

### 2.4 Dependencies required for integration

<blockquote>
     <p>
To avoid conflicts and compatibility problems, if you want to install the component in a project that contains an old version of the Facephi libraries (Widgets), these must be completely removed before installing the **_SDKMobile_** components.
     </p>
</blockquote>

Currently FacePhi libraries are distributed remotely through different dependency managers.

#### 2.4.1 Cocoapods

The **mandatory** dependencies that must have been previously installed (adding them to the project's Podfile file) are:

```
pod 'FPHISDKMainComponent'
```

- It is recommended to also use the VideoRecording component with the tracking component (`FPHISDKTrackingComponent`).

- To install the current component, the following entry must be included in the application's Podfile:
```
pod 'FPHISDKVideoRecordingComponent'
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

#### 2.4.2 SPM

We add our dependency to the project and assign it to the VideoRecording target:

![Image](/iOS/videoRecording-010.png)

We must then also add it to the target of the app in General → Framework, Libraries and Embedded Content:

![Image](/iOS/videoRecording-011.png)

---

## 3. Start new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.
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

### 4.1 Creating the instance

The functionality is configured and launched with a class called `VideoRecordingController`.

To create an instance we need to use its `init()` method:

```swift
init(data: VideoRecordingConfigurationData?, extensionName: String?, output: @escaping (SdkResult<String>) -> Void)
```

- `data`: The configuration object
- `extensionName`: The name of the `Broadcast Upload Extension` we created.
- `output`: The callback that is called when the instance's start is resolved (either with success or failure). For this component, the success is called when the connection with the backend is established and the screenshare has started.

### 4.2 Configuring the instance

With the configuration data (*VideoRecordingConfigurationData*) you can also modify:

- **Optional data that is normally included within the license**
     - **url**: Path to the video socket.
     - **apiKey**: ApiKey required for connection to the video socket.
     - **tenantId**: Tenant identifier that refers to the current client, necessary for the connection to the video service.
     - **extractionTimeout**: How long (milliseconds) will the component wait for the socket before generating a timeout error.
     - **showDiagnostic**: If an error occurs, the error will be displayed on the screen in addition to being sent with the output.

### 4.3 Launching the component

Once we have set a new operation ([Section 3](#3-start-new-operation)) and have an instance of our controller, we can start it.
There are two ways to launch it:

- **[NO TRACKING]** This call allows the component's functionality to be launched normally, but **no event will be tracked** to the tracking server:

```swift
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), extensionName: "VideoRecording", output: { _ in })
SDKController.shared.launchMethod(controller: controller)
```

- **[WITH TRACKING]** This call allows the component's functionality to be launched normally, but internal events to the tracking server will be tracked:

```swift
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), extensionName: "VideoRecording", output: { _ in })
SDKController.shared.launch(controller: controller)
```

**Note:**

<blockquote>
     <p>
The **launch** method should be used **by default**. This method allows you to use **tracking** if your component is activated, and will not use it when it is deactivated (or the component is not installed).

On the contrary, the **launchMethod** method covers a special case, in which the integrator has tracking installed and activated, but in a given flow within the application they do not want to track information. In that case, this method is used to prevent that information from being sent to the platform.
     </p>
</blockquote>

## 5. Component customization

Right now there are no resources to configure in the component.

## 6. Common errors and problems

### 6.1 At compile time

#### 6.1.1 Write permissions - Sandbox: rsync.samba(67364) deny(1) file-write-create
If you see a compilation error regarding write permissions:

![Image](/iOS/videoRecording-012.png)

Check the status in Build Settings of the parameter **ENABLE_USER_SCRIPT_SANDBOXING**, its value must be **NO**.

![Image](/iOS/videoRecording-013.png)

### 6.2 At runtime

#### 6.2.1 Starscream - EXC_BAD_ACCESS

When launching the component an error may appear in the Starscream dependency:

![Image](/iOS/videoRecording-014.png)

***Workaround*** - Upload the minimum Pod version from iOS11 to iOS12:

![Image](/iOS/videoRecording-015.png)
