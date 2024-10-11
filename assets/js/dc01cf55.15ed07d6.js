"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7008],{6135:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(4848),o=i(8453);const r={},l="Video Call Component",s={id:"Video_Call_Component",title:"Video Call Component",description:"0. SDK Mobile baseline requirements",source:"@site/ios_versioned_docs/version-2.0.X/Video_Call_Component.md",sourceDirName:".",slug:"/Video_Call_Component",permalink:"/sdk-mobile-documentation/docs/ios/2.0.X/Video_Call_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"NFC Component",permalink:"/sdk-mobile-documentation/docs/ios/2.0.X/NFC_Component"},next:{title:"Video Id Component",permalink:"/sdk-mobile-documentation/docs/ios/2.0.X/Video_Id_Component"}},a={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permissions and configurations",id:"22-permissions-and-configurations",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class VideoCallConfigurationData",id:"51-class-videocallconfigurationdata",level:3},{value:"5.1.1. Basic Configuration",id:"511-basic-configuration",level:4},{value:"activateScreenSharing",id:"activatescreensharing",level:5},{value:"5.1.2. Advanced Settings",id:"512-advanced-settings",level:4},{value:"5.1.2.1. url",id:"5121-url",level:4},{value:"5.1.2.2 apiKey",id:"5122-apikey",level:4},{value:"5.1.2.3 tenantId",id:"5123-tenantid",level:4},{value:"5.1.3. Other parameters",id:"513-other-parameters",level:4},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Use of the component",id:"6-use-of-the-component",level:2},{value:"Example configuration",id:"example-configuration",level:3},{value:"IMPORTANT",id:"important",level:4},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receiving errors",id:"71-receiving-errors",level:3},{value:"7.2. Receiving successful execution - <em>data</em>",id:"72-receiving-successful-execution---data",level:3},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1 Colours and images",id:"81-colours-and-images",level:3},{value:"8.2 Fonts",id:"82-fonts",level:3},{value:"8.3 Texts",id:"83-texts",level:3},{value:"8.4 Colors repetido?",id:"84-colors-repetido",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"video-call-component",children:"Video Call Component"})}),"\n",(0,t.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"})," section."]}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The component discussed in the current document is called VideoCall\nComponent. It is in charge of managing the communication between a user\nand an agent remotely, through a communication channel. It is mainly\noriented to video assistance use cases."}),"\n",(0,t.jsx)(n.h2,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,t.jsx)(n.p,{children:"The minimum iOS SDK version required is the following:"}),"\n",(0,t.jsxs)(n.p,{children:["Minimum iOS version: ",(0,t.jsx)(n.strong,{children:"13"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,t.jsxs)("div",{class:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the\ndocumentation related to:"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,t.jsx)("strong",{children:"Mobile SDK"})}),"\nand follow the instructions in that document."]})]}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,t.jsx)("div",{class:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nTo avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,t.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"SDKMobile"})})," components."]})}),"\n",(0,t.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,t.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKMainComponent', '~> 2.0.0'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To install the VideoCall component, the following entry must be included in the application Podfile:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKVideoCallComponent', '~> 2.0.0'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In case of development with ",(0,t.jsx)(n.strong,{children:"xCode15"})," a post-installation script must be included:\n",(0,t.jsx)(n.img,{alt:"Image",src:i(225).A+"",width:"1834",height:"510"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"22-permissions-and-configurations",children:"2.2 Permissions and configurations"}),"\n",(0,t.jsx)(n.p,{children:"In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file"}),"\n",(0,t.jsx)(n.p,{children:"It is necessary to allow the use of the camera (Privacy - Camera Usage Description)."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,t.jsxs)(n.p,{children:["In order to generate the associated information correctly in the platform, the ",(0,t.jsx)(n.strong,{children:"newOperation"})," command must be executed first."]}),"\n",(0,t.jsx)("div",{class:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,t.jsx)(n.strong,{children:"before launch"}),".\nTo learn more about how to start a new operation, it is recommended to consult the ",(0,t.jsx)(n.a,{href:"./Mobile_SDK#4-start-a-new-operation",children:"Start a new operation"})," documentation, which details and explains what this process consists of."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Controller"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VideoCallController"}),(0,t.jsx)(n.td,{children:"Videocall main controller"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,t.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, a\n",(0,t.jsx)(n.em,{children:"VideoCallConfigurationData"})," object must be created and passed as a\nparameter to the SDKController when the component is launched."]}),"\n",(0,t.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each of them is used for."}),"\n",(0,t.jsx)(n.h3,{id:"51-class-videocallconfigurationdata",children:"5.1. Class VideoCallConfigurationData"}),"\n",(0,t.jsxs)(n.p,{children:["The fields included in the configuration, normally ",(0,t.jsx)(n.strong,{children:"do not need to be\nbe reported"})," as they are filled internally through the license used.\nlicense used."]}),"\n",(0,t.jsx)(n.h4,{id:"511-basic-configuration",children:"5.1.1. Basic Configuration"}),"\n",(0,t.jsx)(n.h5,{id:"activatescreensharing",children:"activateScreenSharing"}),"\n",(0,t.jsx)(n.p,{children:"Activate the screen sharing option in the call."}),"\n",(0,t.jsx)(n.h4,{id:"512-advanced-settings",children:"5.1.2. Advanced Settings"}),"\n",(0,t.jsx)(n.h4,{id:"5121-url",children:"5.1.2.1. url"}),"\n",(0,t.jsx)(n.p,{children:"Path to video socket"}),"\n",(0,t.jsx)(n.h4,{id:"5122-apikey",children:"5.1.2.2 apiKey"}),"\n",(0,t.jsx)(n.p,{children:"ApiKey needed for the connection to the video socket"}),"\n",(0,t.jsx)(n.h4,{id:"5123-tenantid",children:"5.1.2.3 tenantId"}),"\n",(0,t.jsx)(n.p,{children:"Tenant identifier referring to the current client,\nrequired for the connection to the video service."}),"\n",(0,t.jsx)(n.h4,{id:"513-other-parameters",children:"5.1.3. Other parameters"}),"\n",(0,t.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,t.jsx)(n.p,{children:"If set to true, vibration is enabled on errors and if the widget response is OK."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"6-use-of-the-component",children:"6. Use of the component"}),"\n",(0,t.jsxs)("div",{class:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nFor version 2.0.2 or higher, you must include the parameter extensionName: \u2018\u2019.\nThis new parameter is for screen sharing, if not used it must be an empty string."]}),(0,t.jsx)(n.p,{children:'let videocallController = VideoCallController(data: data, extensionName: "videoRecording", output: output, viewController: viewController)'})]}),"\n",(0,t.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created (",(0,t.jsx)(n.strong,{children:"section\n3"}),") the SDK components can be launched. There are two ways to launch\nthe component:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows launching the functionality\nof the component normally, but ",(0,t.jsx)(n.strong,{children:"the events will be tracked"}),"\ninternal to the ",(0,t.jsx)(n.em,{children:"tracking"})," server in the event that the component\ntracking is installed and active:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"SDKController.shared.launch(controller: videocallController)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows launching the functionality\nof the component normally, but ",(0,t.jsx)(n.strong,{children:"will not be tracked"})," any\nevent to the ",(0,t.jsx)(n.em,{children:"tracking"})," server in case the\ntracking:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"SDKController.shared.launchMethod(controller: videocallController)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)("div",{class:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,t.jsx)(n.strong,{children:"launch"})," method should be used ",(0,t.jsx)(n.strong,{children:"by default"}),". This method allows\nuse ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"tracking"})})," if its component is activated, and do not\nwill be used when it is disabled (or the component is not found\ninstalled)."]}),(0,t.jsxs)(n.p,{children:["On the contrary, the ",(0,t.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application you do not want to track information.\nIn that case, this method is used to prevent that information from being sent.\nto the platform."]})]}),"\n",(0,t.jsxs)(n.p,{children:["The configuration data (",(0,t.jsx)(n.code,{children:"VideoCallConfigurationData"}),") also contains\nThey will be able to modify:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)("u",{children:"optional"})," data that is normally included within the license"]})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"tenantId"}),": Tenant identifier that refers to the\ncurrent client, necessary for connection with the service\nvideo."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"url"}),": Path to the video socket."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"apiKey"}),": ApiKey necessary for the connection with the socket\nvideo."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"example-configuration",children:"Example configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'  log("LAUNCH VIDEO CALL")\n\n  let videocallController = VideoCallController(data: VideoCallConfigurationData(\n                                                          url: "Enter URL",\n                                                          apikey: "Enter the ApiKey",\n                                                          tenantId: "Enter the tenantId"),\n                                                output: output, viewController: viewController)\n  SDKController.shared.launchMethod(controller: videocallController)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"important",children:"IMPORTANT"}),"\n",(0,t.jsxs)(n.p,{children:["The values are assigned by default. ",(0,t.jsx)(n.strong,{children:"ONLY"})," must be configured in case of using an external platform to the one provided by Facephi, within the license."]}),"\n",(0,t.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,t.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult format\n-more details in the ",(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"}),"-."]}),"\n",(0,t.jsx)(n.h3,{id:"71-receiving-errors",children:"7.1. Receiving errors"}),"\n",(0,t.jsx)(n.p,{children:"On the error side, we will have the VideoCallError class."}),"\n",(0,t.jsx)(n.p,{children:"VIDEO_CALL_CANCEL_BY_USER\nVIDEO_CALL_TIMEOUT\nVIDEO_CALL_INTERNAL_ERROR\nVIDEO_CALL_DECODER_ERROR"}),"\n",(0,t.jsxs)(n.h3,{id:"72-receiving-successful-execution---data",children:["7.2. Receiving successful execution - ",(0,t.jsx)(n.em,{children:"data"})]}),"\n",(0,t.jsx)(n.p,{children:"On successful execution, simply report that everything went well with the SdkResult.Success.\nwith the SdkResult.Success."}),"\n",(0,t.jsxs)(n.p,{children:["When the result is Success and the ",(0,t.jsx)(n.em,{children:"sharingScreen"})," flag is active, screen sharing can be enabled."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,t.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,t.jsx)("strong",{children:"Mobile SDK"})}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,t.jsxs)(n.p,{children:["To customise the component, ThemeVideoCallManager.setup(theme",":CustomThemeVideoCall","() ) must be called after initialising the videocallController:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"let videocallController = VideoCallController(data: VideoCallConfigurationData(), output: output, viewController: viewController)\nThemeVideoCallManager.setup(theme: CustomThemeVideoCall())\nSDKController.shared.launch(controller: videocallController)\n"})}),"\n",(0,t.jsx)(n.p,{children:"An example of the CustomThemeVideoCall class would be this (must implement ThemeVideoCallProtocol):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'class CustomThemeVideoCall: ThemeVideoCallProtocol {\n    var images: [R.Image: UIImage?] = [:]\n\n    var colours: [R.Color: UIColor?] = [R.Color.TitleText: UIColor.red] = [R.Color.TitleText: UIColor.red].\n\n    var animations: [R.Animation: String] = [:] var animations: [R.Animation: String] = [:]\n\n    var name: String {\n        "custom"\n    }\n\n    var fonts: [R.Font: String] = [:] var fonts: [R.Font: String] = [:] var font: [R.Font: String] = [:]\n\n    var dimensions: [R.Dimension: CGFloat] {\n        [.fontBig: 8]\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"81-colours-and-images",children:"8.1 Colours and images"}),"\n",(0,t.jsx)(n.p,{children:"Images are initialised in the variable images , passing it a dictionary, the key being one of the enumerated ones representing the different images on the screen, and the value being the custom image to be displayed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"case close\n"})}),"\n",(0,t.jsx)(n.p,{children:"Colours are similarly initialised in the colours variable with a dictionary, with the value being a UIColor of your choice."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"case ButtonBackground\ncase ButtonBackgroundDisabled\ncase CardBackground\ncase CardText\ncase MainBackground\ncase PhoneButtonBackground\ncase Primary\ncase TitleText\n"})}),"\n",(0,t.jsx)(n.h3,{id:"82-fonts",children:"8.2 Fonts"}),"\n",(0,t.jsx)(n.p,{children:"Fonts are initialised similarly in the fonts variable with a dictionary, having as value a String with the name of the desired UIFont."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"case regular\ncase bold\n"})}),"\n",(0,t.jsx)(n.p,{children:"The animations to be used are similarly initialised in the animations variable with a dictionary, having as value a String with the name of the animation found in the xcassets to be used."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"case phone_calling\n"})}),"\n",(0,t.jsx)(n.p,{children:"The size of the texts is initialised similarly in the dimensions variable with a dictionary, having as value a CGFloat with the desired size."}),"\n",(0,t.jsx)(n.h3,{id:"83-texts",children:"8.3 Texts"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value\nof each ",(0,t.jsx)(n.em,{children:"String"})," by the desired one."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:' \x3c!-- VIDEO CALL --\x3e\n    <string name="video_call_text_waiting_agent_title">Connecting with an assistant\u2026</string>\n    <string name="video_call_agent">Agent</string>\n    <string name="video_call_exit_alert_title">Cancel process</string>\n    <string name="video_call_exit_alert_question">Are you sure you want to leave the video assistance?</string>\n    <string name="video_call_exit_alert_exit">Quit</string>\n    <string name="video_call_exit_alert_cancel">Cancel</string>\n    <string name="video_call_exit">Exit</string>\n    <string name="video_call_network_connection_error">Check your internet connection.</string>\n    <string name="video_call_image_description">Phone</string>\n    <string name="video_call_text_finish">Video assistance is complete</string>\n    <string name="video_call_text_finish_button">Exit</string>\n    <string name="video_call_accesibility_phone">Phone</string>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"84-colors-repetido",children:"8.4 Colors repetido?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\x3c!-- VIDEO CALL --\x3e\n<color name="colorVideoCallPhoneButtonBackground">#F44336</color>\n<color name="colorVideoCallActionsBackground">#30333d</color>\n<color name="colorVideoCallCardText">#ffffff</color>\n<color name="colorVideoCallButtonBackground">#FF526080</color>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},225:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var t=i(6540);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);