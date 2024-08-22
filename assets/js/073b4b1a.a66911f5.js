"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5891],{5398:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=i(4848),o=i(8453);const s={},r="Video Recording Component",d={id:"Video_Recording_Component",title:"Video Recording Component",description:"0. SDK Mobile baseline requirements",source:"@site/docs/ios/Video_Recording_Component.md",sourceDirName:".",slug:"/Video_Recording_Component",permalink:"/sdk-mobile-documentation/docs/ios/next/Video_Recording_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Id Component",permalink:"/sdk-mobile-documentation/docs/ios/next/Video_Id_Component"},next:{title:"Sample Applications",permalink:"/sdk-mobile-documentation/docs/ios/next/Sample_applications_use"}},a={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:2},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1 Creating the extension",id:"21-creating-the-extension",level:3},{value:"2.2 Setting the NSMicrophoneUsageDescription",id:"22-setting-the-nsmicrophoneusagedescription",level:3},{value:"2.3 Creating the shared App Group",id:"23-creating-the-shared-app-group",level:3},{value:"2.4 Dependencies required for integration",id:"24-dependencies-required-for-integration",level:3},{value:"2.4.1 Cocoapods",id:"241-cocoapods",level:4},{value:"2.4.2 SPM",id:"242-spm",level:4},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Use of component",id:"4-use-of-component",level:2},{value:"4.1 Creating the instance",id:"41-creating-the-instance",level:3},{value:"4.2 Configuring the instance",id:"42-configuring-the-instance",level:3},{value:"4.3 Launching the component",id:"43-launching-the-component",level:3},{value:"5. Component customization",id:"5-component-customization",level:2},{value:"6. Common errors and problems",id:"6-common-errors-and-problems",level:2},{value:"6.1 At compile time",id:"61-at-compile-time",level:3},{value:"6.1.1 Write permissions - Sandbox: rsync.samba(67364) deny(1) file-write-create",id:"611-write-permissions---sandbox-rsyncsamba67364-deny1-file-write-create",level:4},{value:"6.2 At runtime",id:"62-at-runtime",level:3},{value:"6.2.1 Starscream - EXC_BAD_ACCESS",id:"621-starscream---exc_bad_access",level:4},{value:"6.2.2 QuickTime Player",id:"622-quicktime-player",level:4},{value:"6.2.3 Screen Sharing doesn&#39;t get started",id:"623-screen-sharing-doesnt-get-started",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"video-recording-component",children:"Video Recording Component"})}),"\n",(0,t.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,t.jsx)(n.strong,{children:"Components"}),") that offers\na series of functionalities and services, allowing in turn its\nintegration into a mobile application in a simple and completely\nscalable. Depending on the use case required, it must be\nperform the installation of certain components. Its high level\nModularity allows, in the future, to add other\nnew components without affecting in any way those already integrated into the\nproject."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the base configuration, go to the section\n",(0,t.jsx)("a",{href:"Mobile_SDK","linked-data-resource-id":"2605285492","linked-data-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"Component"})," discussed in the current document is called\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"VideoRecording Component"})}),". This is responsible for capturing the screen\nof the device in the background. It is mainly oriented for\nrecording of the onboarding process."]}),"\n",(0,t.jsx)(n.h2,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,t.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,t.jsxs)(n.p,{children:["Minimum iOS version: ",(0,t.jsx)(n.strong,{children:"13"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,t.jsxs)("div",{class:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the\ndocumentation related to:"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,t.jsx)("strong",{children:"Mobile SDK"})}),"\nand follow the instructions in that document."]})]}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-creating-the-extension",children:"2.1 Creating the extension"}),"\n",(0,t.jsx)(n.p,{children:"For the documented example, an app with SwiftUI has been used, but the component and documentation are valid regardless of whether UIKit or SwiftUI is used."}),"\n",(0,t.jsxs)(n.p,{children:["In our project we add a new target of type ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Broadcast Upload Extension:"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(4017).A+"",width:"1648",height:"1392"})}),"\n",(0,t.jsx)(n.p,{children:"We configure the name of the extension, in this example it will be VideoRecording:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(9354).A+"",width:"1456",height:"1040"})}),"\n",(0,t.jsx)(n.p,{children:"If the following modal appears, click activate:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(931).A+"",width:"556",height:"738"})}),"\n",(0,t.jsx)(n.p,{children:"This generates the following structure:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(764).A+"",width:"1988",height:"592"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, a file called ",(0,t.jsx)(n.code,{children:"SampleHandler"})," is created. This file contains the main class of the extension."]}),"\n",(0,t.jsxs)(n.p,{children:["To make use of Facephi's screen sharing functionality we should modify the key ",(0,t.jsx)(n.code,{children:"NSExtensionPrincipalClass"})," and set it to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"videoRecordingComponent.VideoRecordingHandler\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(1395).A+"",width:"1464",height:"290"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE: It is important to keep in mind that the version number (MARKETING_VERSION) and the project version number must always be the same in both targets:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(3653).A+"",width:"2824",height:"420"})}),"\n",(0,t.jsx)(n.h3,{id:"22-setting-the-nsmicrophoneusagedescription",children:"2.2 Setting the NSMicrophoneUsageDescription"}),"\n",(0,t.jsx)(n.p,{children:"The Video Recording functionality can also share the microphone's input. For that reason, we need to add the key:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"NSMicrophoneUsageDescription\n"})}),"\n",(0,t.jsx)(n.p,{children:"To our target's Info.plist, detailing why do we use this functionality."}),"\n",(0,t.jsx)(n.h3,{id:"23-creating-the-shared-app-group",children:"2.3 Creating the shared App Group"}),"\n",(0,t.jsx)(n.p,{children:"Now we need to create a new App Group's Capability."}),"\n",(0,t.jsx)(n.p,{children:"This will serve to create the shared container between our extension and the application target."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(1550).A+"",width:"754",height:"460"})}),"\n",(0,t.jsx)(n.p,{children:"After clicking on the + icon."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"It's important to set the app group's value to:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"group.com.facephi.videoRecording\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(9239).A+"",width:"876",height:"552"})}),"\n",(0,t.jsx)(n.p,{children:"We select the same identifier in our extension. In this way both will have checked the App Group that we just created:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(5616).A+"",width:"776",height:"214"})}),"\n",(0,t.jsx)(n.p,{children:"XCode will automatically generate or update the entitlement files involved to add the capability to each target:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(6793).A+"",width:"2830",height:"452"})}),"\n",(0,t.jsx)(n.h3,{id:"24-dependencies-required-for-integration",children:"2.4 Dependencies required for integration"}),"\n",(0,t.jsx)("blockquote",{children:(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, if you want to install the component in a project that contains an old version of the Facephi libraries (Widgets), these must be completely removed before installing the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"SDKMobile"})})," components."]})})}),"\n",(0,t.jsx)(n.p,{children:"Currently FacePhi libraries are distributed remotely through different dependency managers."}),"\n",(0,t.jsx)(n.h4,{id:"241-cocoapods",children:"2.4.1 Cocoapods"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (adding them to the project's Podfile file) are:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKMainComponent'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["It is recommended to also use the VideoRecording component with the tracking component (",(0,t.jsx)(n.code,{children:"FPHISDKTrackingComponent"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To install the current component, the following entry must be included in the application's Podfile:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKVideoRecordingComponent'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This dependency must be declared within the target of the app and the extension (the latter will be explained below)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"An example of what the Podfile would look like:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"target 'demoApp' do\n...\n   pod 'FPHISDKMainComponent', 'X.Y.Z'\n   pod 'FPHISDKVideoRecordingComponent', 'A.B.C'\n   pod 'FPHISDKTrackingComponent', 'D.E.F' ### Optional, recommended\n...\nend\ntarget 'VideoRecording' do ### Our extension target\n   use_frameworks! ### We want to use frameworks instead of Static Libs\n   pod 'FPHISDKVideoRecordingComponent', 'A.B.C'\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"NOTE: You have to be careful to put the extension target outside the application target. Failure to do so would cause the application pods to also be compiled into the extension, resulting in collateral problems."}),"\n",(0,t.jsx)(n.h4,{id:"242-spm",children:"2.4.2 SPM"}),"\n",(0,t.jsx)(n.p,{children:"We add our dependency to the project and assign it to the VideoRecording target:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(3251).A+"",width:"2170",height:"1218"})}),"\n",(0,t.jsx)(n.p,{children:"We must then also add it to the target of the app in General \u2192 Framework, Libraries and Embedded Content:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(8042).A+"",width:"1260",height:"1012"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,t.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,t.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,t.jsxs)("div",{class:"note",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,t.jsx)(n.strong,{children:"prior to launch"}),"."]}),(0,t.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,t.jsx)("strong",{children:"Mobile SDK"})}),"\ndocumentation, which details and explains what this process consists of."]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-use-of-component",children:"4. Use of component"}),"\n",(0,t.jsx)(n.h3,{id:"41-creating-the-instance",children:"4.1 Creating the instance"}),"\n",(0,t.jsxs)(n.p,{children:["The functionality is configured and launched with a class called ",(0,t.jsx)(n.code,{children:"VideoRecordingController"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To create an instance we need to use its ",(0,t.jsx)(n.code,{children:"init()"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"init(data: VideoRecordingConfigurationData?, extensionName: String?, output: @escaping (SdkResult<String>) -> Void)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data"}),": The configuration object"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"extensionName"}),": The name of the ",(0,t.jsx)(n.code,{children:"Broadcast Upload Extension"})," we created."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"output"}),": The callback that is called when the instance's start is resolved (either with success or failure). For this component, the success is called when the connection with the backend is established and the screenshare has started."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"42-configuring-the-instance",children:"4.2 Configuring the instance"}),"\n",(0,t.jsxs)(n.p,{children:["With the configuration data (",(0,t.jsx)(n.em,{children:"VideoRecordingConfigurationData"}),") you can also modify:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optional data that is normally included within the license"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"url"}),": Path to the video socket."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"apiKey"}),": ApiKey required for connection to the video socket."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"tenantId"}),": Tenant identifier that refers to the current client, necessary for the connection to the video service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"extractionTimeout"}),": How long (milliseconds) will the component wait for the socket before generating a timeout error."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"showDiagnostic"}),": If an error occurs, the error will be displayed on the screen in addition to being sent with the output."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"43-launching-the-component",children:"4.3 Launching the component"}),"\n",(0,t.jsxs)(n.p,{children:["Once we have set a new operation (",(0,t.jsx)(n.a,{href:"#3-start-new-operation",children:"Section 3"}),") and have an instance of our controller, we can start it.\nThere are two ways to launch it:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows the component's functionality to be launched normally, but ",(0,t.jsx)(n.strong,{children:"no event will be tracked"})," to the tracking server:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), extensionName: "VideoRecording", output: { _ in })\nSDKController.shared.launchMethod(controller: controller)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows the component's functionality to be launched normally, but internal events to the tracking server will be tracked:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), extensionName: "VideoRecording", output: { _ in })\nSDKController.shared.launch(controller: controller)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note:"})}),"\n",(0,t.jsx)("blockquote",{children:(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"launch"})," method should be used ",(0,t.jsx)(n.strong,{children:"by default"}),". This method allows you to use ",(0,t.jsx)(n.strong,{children:"tracking"})," if your component is activated, and will not use it when it is deactivated (or the component is not installed)."]}),(0,t.jsxs)(n.p,{children:["On the contrary, the ",(0,t.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in which the integrator has tracking installed and activated, but in a given flow within the application they do not want to track information. In that case, this method is used to prevent that information from being sent to the platform."]})]})}),"\n",(0,t.jsx)(n.h2,{id:"5-component-customization",children:"5. Component customization"}),"\n",(0,t.jsx)(n.p,{children:"Right now there are no resources to configure in the component."}),"\n",(0,t.jsx)(n.h2,{id:"6-common-errors-and-problems",children:"6. Common errors and problems"}),"\n",(0,t.jsx)(n.h3,{id:"61-at-compile-time",children:"6.1 At compile time"}),"\n",(0,t.jsx)(n.h4,{id:"611-write-permissions---sandbox-rsyncsamba67364-deny1-file-write-create",children:"6.1.1 Write permissions - Sandbox: rsync.samba(67364) deny(1) file-write-create"}),"\n",(0,t.jsx)(n.p,{children:"If you see a compilation error regarding write permissions:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(7025).A+"",width:"1570",height:"282"})}),"\n",(0,t.jsxs)(n.p,{children:["Check the status in Build Settings of the parameter ",(0,t.jsx)(n.strong,{children:"ENABLE_USER_SCRIPT_SANDBOXING"}),", its value must be ",(0,t.jsx)(n.strong,{children:"NO"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(8760).A+"",width:"1580",height:"484"})}),"\n",(0,t.jsx)(n.h3,{id:"62-at-runtime",children:"6.2 At runtime"}),"\n",(0,t.jsx)(n.h4,{id:"621-starscream---exc_bad_access",children:"6.2.1 Starscream - EXC_BAD_ACCESS"}),"\n",(0,t.jsx)(n.p,{children:"When launching the component an error may appear in the Starscream dependency:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(3927).A+"",width:"1510",height:"660"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Workaround"})})," - Upload the minimum Pod version from iOS11 to iOS12:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(910).A+"",width:"1588",height:"250"})}),"\n",(0,t.jsx)(n.h4,{id:"622-quicktime-player",children:"6.2.2 QuickTime Player"}),"\n",(0,t.jsx)(n.p,{children:"When launching the component, if the iPhone is connected and already sharing screen through a QuickTime Player recording session, it won't work."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Solution"})})," - Close the QuickTime Player session."]}),"\n",(0,t.jsx)(n.h4,{id:"623-screen-sharing-doesnt-get-started",children:"6.2.3 Screen Sharing doesn't get started"}),"\n",(0,t.jsx)(n.p,{children:"When launching the component, we can't see the native prompt for screen sharing or we see it but it doesn't get started."}),"\n",(0,t.jsx)(n.p,{children:"Possible Cause: The extension created in your app has a Bundle Identifier. If that identifier has changed, maybe the old one is still persisted in the cache."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Possible Solution"})})," - Remove the app, and install it again. Restart the device if needed."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4017:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-001-e2d7a316b1aaefbe41102de4a2c6ba0a.png"},9354:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-002-1e32a36560668a16c1f13b5133ed52a1.png"},931:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-003-50b0a3656841b43e169675d51c41b3e7.png"},764:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-004-b0670f978445e45d85718b624c5ad29f.png"},3653:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-005-9b6c1727c54bad4af74e2738c0a548f2.png"},1550:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-006-561a9dd21dbd96a080937d1a105bf362.png"},9239:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-007-237a65d9cd46cdcb915e22e9ea193021.png"},5616:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-008-3e67e7e122a24be3226632d390a61842.png"},6793:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-009-03f21d5dc6d9066b91050adf7fabe7df.png"},3251:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-010-305c0dc6e8ba588fae482db4b1ff817d.png"},8042:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-011-4dbde20e070d491c2ddc17a7cb98fa89.png"},7025:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-012-754d49db4b70295687ba933874acda8f.png"},8760:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-013-ac369fe2aaeeb1149ac7a0cf63b425f6.png"},3927:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-014-2a25737a313f66bb30fbfaf0db333706.png"},910:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-015-bb86fd0a9e0835fd15cfc2d56e50099a.png"},1395:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/videoRecording-2.1.InfoPList-ba48049205587b19f2fe4e2c7e9467f6.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);