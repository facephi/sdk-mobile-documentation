"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8817],{7545:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(5893),o=i(1151);const r={},a="Video recording component",s={id:"Video_Recording_Component",title:"Video recording component",description:"0. Mobile SDK base requirements",source:"@site/ios_versioned_docs/version-1.5.X/Video_Recording_Component.md",sourceDirName:".",slug:"/Video_Recording_Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/Video_Recording_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Id Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/Video_Id_Component"},next:{title:"Example applications",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/Sample_applications_use"}},d={},c=[{value:"0. Mobile SDK base requirements",id:"0-mobile-sdk-base-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:2},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1 Creating the extension",id:"21-creating-the-extension",level:3},{value:"2.2 Creating the shared App Group",id:"22-creating-the-shared-app-group",level:3},{value:"2.3 Dependencies required for integration",id:"23-dependencies-required-for-integration",level:3},{value:"2.3.1 Cocoapods",id:"231-cocoapods",level:3},{value:"2.3.2 SPM",id:"232-spm",level:4},{value:"2.4 Implement the extension",id:"24-implement-the-extension",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Use of component",id:"4-use-of-component",level:2},{value:"5. Component customization",id:"5-component-customization",level:2},{value:"6. Common errors and problems",id:"6-common-errors-and-problems",level:2},{value:"6.1 At compile time",id:"61-at-compile-time",level:3},{value:"6.1.1 Write permissions - Sandbox: rsync.samba(67364) deny(1) file-write-create",id:"611-write-permissions---sandbox-rsyncsamba67364-deny1-file-write-create",level:4},{value:"6.2 At runtime",id:"62-at-runtime",level:3},{value:"6.2.1 Starscream - EXC_BAD_ACCESS",id:"621-starscream---exc_bad_access",level:4}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"video-recording-component",children:"Video recording component"}),"\n",(0,t.jsx)(n.h2,{id:"0-mobile-sdk-base-requirements",children:"0. Mobile SDK base requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,t.jsx)(n.strong,{children:"Components"}),") that offers\na series of functionalities and services, allowing in turn its\nintegration into a mobile application in a simple and completely\nscalable. Depending on the use case required, it must be\nperform the installation of certain components. Its high level\nModularity allows, in the future, to add other\nnew components without affecting in any way those already integrated into the\nproject."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the base configuration, go to the section\n",(0,t.jsx)("a",{href:"ES_Mobile_SDK","linked-data-resource-id":"2605285492","linked-data-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"Component"})," discussed in the current document is called\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"VideoRecording Component"})}),". This is responsible for capturing the screen\nof the device in the background. It is mainly oriented for\nrecording of the onboarding process."]}),"\n",(0,t.jsx)(n.h2,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,t.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,t.jsxs)(n.p,{children:["Minimum iOS version: ",(0,t.jsx)(n.strong,{children:"13"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,t.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the documentation\nRelative to:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,t.jsx)("strong",{children:(0,t.jsx)("u",{children:"Mobile SDK"})})}),"\nand follow the instructions indicated in said document."]}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the component\ncurrent in an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-creating-the-extension",children:"2.1 Creating the extension"}),"\n",(0,t.jsx)(n.p,{children:"For the documented example, an app with SwiftUI has been used, but the component and documentation are valid regardless of whether UIKit or SwiftUI is used."}),"\n",(0,t.jsxs)(n.p,{children:["In our project we add a new target of type ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Broadcast Upload Extension:"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(5708).Z+"",width:"1648",height:"1392"})}),"\n",(0,t.jsx)(n.p,{children:"We configure the name of the extension, in this example it will be VideoRecording:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(5813).Z+"",width:"1456",height:"1040"})}),"\n",(0,t.jsx)(n.p,{children:"If the following modal appears, click activate:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(2988).Z+"",width:"556",height:"738"})}),"\n",(0,t.jsx)(n.p,{children:"This generates the following structure:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(3382).Z+"",width:"1988",height:"592"})}),"\n",(0,t.jsx)(n.p,{children:"Where SampleHandler is the main class of the extension."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE: It is important to keep in mind that the version number (MARKETING_VERSION) and the project version number must always be the same in both targets:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(5303).Z+"",width:"2824",height:"420"})}),"\n",(0,t.jsx)(n.h3,{id:"22-creating-the-shared-app-group",children:"2.2 Creating the shared App Group"}),"\n",(0,t.jsx)(n.p,{children:"If we don't already have it in our app, we can create a new Capability of type App Group."}),"\n",(0,t.jsx)(n.p,{children:"This will serve to create the shared container between our extension and the application target."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(2022).Z+"",width:"754",height:"460"})}),"\n",(0,t.jsx)(n.p,{children:"We assign a name to the new App Group after clicking on the + icon:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(1377).Z+"",width:"1224",height:"750"})}),"\n",(0,t.jsx)(n.p,{children:"We select the same identifier in our extension. In this way both will have checked the App Group that we just created:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(188).Z+"",width:"1328",height:"578"})}),"\n",(0,t.jsx)(n.p,{children:"XCode will automatically generate or update the entitlement files involved to add the capability to each target:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(6751).Z+"",width:"2880",height:"460"})}),"\n",(0,t.jsx)(n.h3,{id:"23-dependencies-required-for-integration",children:"2.3 Dependencies required for integration"}),"\n",(0,t.jsx)("div",{class:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nTo avoid conflicts and compatibility problems, if you want to install the component in a project that contains an old version of the Facephi libraries (Widgets), these must be completely removed before installing the SDKMobile components."]})}),"\n",(0,t.jsx)(n.p,{children:"Currently FacePhi libraries are distributed remotely through different dependency managers."}),"\n",(0,t.jsx)(n.h3,{id:"231-cocoapods",children:"2.3.1 Cocoapods"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (adding them to the project's Podfile file) are:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKMainComponent' , '~> 2.0.0'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["It is recommended to also use the VideoRecording component with the tracking component (",(0,t.jsx)(n.code,{children:"FPHISDKTrackingComponent"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To install the current component, the following entry must be included in the application's Podfile:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKVideoRecordingComponent' , '~> 2.0.0'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This dependency must be declared within the target of the app and the extension (the latter will be explained below)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"An example of what the Podfile would look like:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"target 'demoApp' do\n...\n   pod 'FPHISDKMainComponent', 'X.Y.Z'\n   pod 'FPHISDKVideoRecordingComponent', 'A.B.C'\n   pod 'FPHISDKTrackingComponent', 'D.E.F' ### Optional, recommended\n...\nend\ntarget 'VideoRecording' do ### Our extension target\n   use_frameworks! ### We want to use frameworks instead of Static Libs\n   pod 'FPHISDKVideoRecordingComponent', 'A.B.C'\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"NOTE: You have to be careful to put the extension target outside the application target. Failure to do so would cause the application pods to also be compiled into the extension, resulting in collateral problems."}),"\n",(0,t.jsx)(n.h4,{id:"232-spm",children:"2.3.2 SPM"}),"\n",(0,t.jsx)(n.p,{children:"We add our dependency to the project and assign it to the VideoRecording target:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(7692).Z+"",width:"2170",height:"1218"})}),"\n",(0,t.jsx)(n.p,{children:"We must then also add it to the target of the app in General \u2192 Framework, Libraries and Embedded Content:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(4857).Z+"",width:"1260",height:"1012"})}),"\n",(0,t.jsx)(n.h3,{id:"24-implement-the-extension",children:"2.4 Implement the extension"}),"\n",(0,t.jsx)(n.p,{children:"At this point we must develop the functionality in our newly created SampleHandler.swift. To do this, we copy/replace the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'class SampleHandler: RPBroadcastSampleHandler {\n     var bufferCopy: CMSampleBuffer?\n     var lastSendTs = Int64(Date().timeIntervalSince1970 * 1000)\n     var timer: Timer?\n     // Shared info between app and extension\n     private let kAppGroupName = "group.com.facephi.sdk.demo" // SET YOUR APP_GROUP_NAME, you can get it from your entitlements\' file\n     override func broadcastStarted(withSetupInfo setupInfo: [String: NSObject]?) {\n         // Load shared info from app\n         let sharedContainer = UserDefaults(suiteName: kAppGroupName)!\n         let uid = sharedContainer.string(forKey: "UID")!\n         let token = sharedContainer.string(forKey: "TOKEN")!\n         let channel = sharedContainer.string(forKey: "CHANNEL")!\n         // Passing data to app\n         sharedContainer.setValue(true, forKey: "BROADCASTSTARTED")\n         sharedContainer.synchronize()\n         print("uid: \\(uid)")\n         print("token: \\(token)")\n         print("channelName: \\(channel)")\n         // In-App Screen Capture\n         AgoraUploader.startBroadcast(uid: uid, token: token, channel: channel)\n         AgoraUploader.sharedAgoraEngine.delegate = self\n         DispatchQueue.main.async {\n             self.timer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { [weak self] (_: Timer) in\n                 guard let weakSelf = self else { return }\n                 let elapsed = Int64(Date().timeIntervalSince1970 * 1000) - weakSelf.lastSendTs\n                 print("elapse: \\(elapse)")\n                 // if frame stopped sending for too long time, resend the last frame\n                 // to avoid stream being frozen when viewed from remote\n                 if elapsed > 300 {\n                     if let buffer = weakSelf.bufferCopy {\n                         weakSelf.processSampleBuffer(buffer, with: .video)\n                     }\n                 }\n             }\n         }\n     }\n     override func broadcastPaused() {\n         // User has requested to pause the broadcast. Samples will stop being delivered.\n     }\n     override func broadcastResumed() {\n         // User has requested to resume the broadcast. Samples delivery will resume.\n     }\n     override func broadcastFinished() {\n         timer?.invalidate()\n         timer = nil\n         AgoraUploader.stopBroadcast()\n     }\n     override func processSampleBuffer(_ sampleBuffer: CMSampleBuffer, with sampleBufferType: RPSampleBufferType) {\n         DispatchQueue.main.async { [weak self] in\n             switch sampleBufferType {\n             case .video:\n                 if let weakSelf = self {\n                     weakSelf.bufferCopy = sampleBuffer\n                     weakSelf.lastSendTs = Int64(Date().timeIntervalSince1970 * 1000)\n                 }\n                 AgoraUploader.sendVideoBuffer(sampleBuffer)\n             @unknown default:\n                 break\n             }\n         }\n     }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE: Make sure you enter the correct App Group Name on line 6. In our example it was group.com.facephi.demosdk-videoRecording."})}),"\n",(0,t.jsxs)(n.p,{children:["You can optionally listen to the various events that occur when the user interacts with the recording functionality by making the SampleHandler class extend ",(0,t.jsx)(n.code,{children:"AgoraRtcEngineDelegate"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import AgoraRtcKit\n\nextension SampleHandler: AgoraRtcEngineDelegate {\n     /// callback when warning occurs for agora sdk, warning can usually be ignored, still it\'s nice to check out\n     /// what is happening\n     /// Warning code description can be found at:\n     /// at: https://docs.agora.io/en/Voice/API%20Reference/oc/Constants/AgoraWarningCode.html\n     /// cn: https://docs.agora.io/cn/Voice/API%20Reference/oc/Constants/AgoraWarningCode.html\n     /// @param warningCode warning code of the problem\n     func rtcEngine(_ engine: AgoraRtcEngineKit, didOccurWarning warningCode: AgoraWarningCode) {}\n    \n     /// callback when error occured for agora sdk, you are recommended to display the error descriptions on demand\n     /// to let user know something wrong is happening\n     /// Error code description can be found at:\n     /// at: https://docs.agora.io/en/Voice/API%20Reference/oc/Constants/AgoraErrorCode.html\n     /// cn: https://docs.agora.io/cn/Voice/API%20Reference/oc/Constants/AgoraErrorCode.html\n     /// @param errorCode error code of the problem\n     func rtcEngine(_ engine: AgoraRtcEngineKit, didOccurError errorCode: AgoraErrorCode) {}\n    \n     /// callback when the local user joins a specified channel.\n     /// @param channel\n     /// @param uid uid of local user\n     /// @param elapsed time elapse since current sdk instance join the channel in ms\n     func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinChannel channel: String, withUid uid: UInt, elapsed: Int) {}\n    \n     /// callback when a remote user is joining the channel, note audience in live broadcast mode will NOT trigger this event\n     /// @param uid uid of remote joined user\n     /// @param elapsed time elapse since current sdk instance join the channel in ms\n     func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinedOfUid uid: UInt, elapsed: Int) {}\n    \n     /// callback when a remote user is leaving the channel, note audience in live broadcast mode will NOT trigger this event\n     /// @param uid uid of remote joined user\n     /// @param reason why this user left, note this event may be triggered when the remote user\n     /// become an audience in live broadcasting profile\n     func rtcEngine(_ engine: AgoraRtcEngineKit, didOfflineOfUid uid: UInt, reason: AgoraUserOfflineReason) {\n         // Replace domain\'s value with your Bundle Identifier\n         let error = NSError(domain: "com.facephi.demosdk-videoRecording", code: 0, userInfo: [NSLocalizedDescriptionKey: NSLocalizedString("Call ended", comment: "")])\n        \n         finishBroadcastWithError(error)\n     }\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,t.jsxs)(n.p,{children:["When you want to perform a certain operation, to generate the associated information correctly on the platform, the ",(0,t.jsx)(n.strong,{children:"newOperation"})," command must be previously executed."]}),"\n",(0,t.jsx)("div",{class:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThis command must always be executed. To learn more about how to start a new operation, it is recommended to consult the Core Component documentation, which details and explains what this process entails."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-use-of-component",children:"4. Use of component"}),"\n",(0,t.jsx)(n.p,{children:"Once the component has been started and a new operation has been created (section 3), the SDK components can be launched. There are two ways to launch the component:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows the component's functionality to be launched normally, but ",(0,t.jsx)(n.strong,{children:"no event will be tracked"})," to the tracking server:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), appGroupName: "group.com.facephi.demosdk-videoRecording", extensionName: "VideoRecording", output: { _ in })\nSDKController.shared.launchMethod(controller: controller)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows the component's functionality to be launched normally, but internal events to the tracking server will be tracked:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), appGroupName: "group.com.facephi.demosdk-videoRecording", extensionName: "VideoRecording", output: { _ in })\nSDKController.shared.launch(controller: controller)\n'})}),"\n",(0,t.jsxs)("div",{class:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,t.jsx)(n.strong,{children:"launch"})," method should be used ",(0,t.jsx)(n.strong,{children:"by default"}),". This method allows you to use ",(0,t.jsx)(n.strong,{children:"tracking"})," if your component is activated, and will not use it when it is deactivated (or the component is not installed)."]}),(0,t.jsxs)(n.p,{children:["On the contrary, the ",(0,t.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in which the integrator has tracking installed and activated, but in a given flow within the application they do not want to track information. In that case, this method is used to prevent that information from being sent to the platform."]})]}),"\n",(0,t.jsxs)(n.p,{children:["In the configuration data (",(0,t.jsx)(n.em,{children:"VideoRecordingConfigurationData"}),") you can also modify:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional data that is normally included within the license"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"url"}),": Path to the video socket."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"apiKey"}),": ApiKey required for connection to the video socket."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"tenantId"}),": Tenant identifier that refers to the current client, necessary for the connection to the video service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"extractionTimeout"}),": How long (milliseconds) will the component wait for the socket before generating a timeout error."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"showDiagnostic"}),": If an error occurs, the error will be displayed on the screen in addition to being sent with the output."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-component-customization",children:"5. Component customization"}),"\n",(0,t.jsx)(n.p,{children:"Right now there are no resources to configure in the component."}),"\n",(0,t.jsx)(n.h2,{id:"6-common-errors-and-problems",children:"6. Common errors and problems"}),"\n",(0,t.jsx)(n.h3,{id:"61-at-compile-time",children:"6.1 At compile time"}),"\n",(0,t.jsx)(n.h4,{id:"611-write-permissions---sandbox-rsyncsamba67364-deny1-file-write-create",children:"6.1.1 Write permissions - Sandbox: rsync.samba(67364) deny(1) file-write-create"}),"\n",(0,t.jsx)(n.p,{children:"If you see a compilation error regarding write permissions:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(9465).Z+"",width:"1570",height:"282"})}),"\n",(0,t.jsxs)(n.p,{children:["Check the status in Build Settings of the parameter ",(0,t.jsx)(n.strong,{children:"ENABLE_USER_SCRIPT_SANDBOXING"}),", its value must be ",(0,t.jsx)(n.strong,{children:"NO"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(1757).Z+"",width:"1580",height:"484"})}),"\n",(0,t.jsx)(n.h3,{id:"62-at-runtime",children:"6.2 At runtime"}),"\n",(0,t.jsx)(n.h4,{id:"621-starscream---exc_bad_access",children:"6.2.1 Starscream - EXC_BAD_ACCESS"}),"\n",(0,t.jsx)(n.p,{children:"When launching the component an error may appear in the Starscream dependency:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(8820).Z+"",width:"1510",height:"660"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Workaround"})})," - Upload the minimum Pod version from iOS11 to iOS12:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(6263).Z+"",width:"1588",height:"250"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5708:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-001-e2d7a316b1aaefbe41102de4a2c6ba0a.png"},5813:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-002-1e32a36560668a16c1f13b5133ed52a1.png"},2988:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-003-50b0a3656841b43e169675d51c41b3e7.png"},3382:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-004-b0670f978445e45d85718b624c5ad29f.png"},5303:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-005-9b6c1727c54bad4af74e2738c0a548f2.png"},2022:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-006-561a9dd21dbd96a080937d1a105bf362.png"},1377:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-007-f1694162b5f899e58a8aa5ce8ac19b5a.png"},188:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-008-4c8b0f00a3e68c71b8a9e660aa66e423.png"},6751:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-009-9b698b5da86c9059adeca6928e2382f8.png"},7692:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-010-305c0dc6e8ba588fae482db4b1ff817d.png"},4857:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-011-4dbde20e070d491c2ddc17a7cb98fa89.png"},9465:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-012-754d49db4b70295687ba933874acda8f.png"},1757:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-013-ac369fe2aaeeb1149ac7a0cf63b425f6.png"},8820:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-014-2a25737a313f66bb30fbfaf0db333706.png"},6263:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/videoRecording-015-bb86fd0a9e0835fd15cfc2d56e50099a.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var t=i(7294);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);