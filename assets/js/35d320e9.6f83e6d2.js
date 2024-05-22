"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5116],{2907:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(4848),o=i(8453);const s={},r="Video Id Component",l={id:"Video_Id_Component",title:"Video Id Component",description:"0. SDK Mobile baseline requirements",source:"@site/docs/ios/Video_Id_Component.md",sourceDirName:".",slug:"/Video_Id_Component",permalink:"/sdk-mobile-documentation/docs/ios/next/Video_Id_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Call Component",permalink:"/sdk-mobile-documentation/docs/ios/next/Video_Call_Component"},next:{title:"Video recording component",permalink:"/sdk-mobile-documentation/docs/ios/next/Video_Recording_Component"}},a={},d=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:2},{value:"Minimum iOS version: <strong>13</strong>",id:"minimum-ios-version-13",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permissions and configurations",id:"22-permissions-and-configurations",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class VideoIdConfigurationData",id:"51-class-videoidconfigurationdata",level:3},{value:"5.1.1. Basic Configuration",id:"511-basic-configuration",level:4},{value:"sectionTime",id:"sectiontime",level:5},{value:"showCompletedTutorial",id:"showcompletedtutorial",level:5},{value:"mode",id:"mode",level:5},{value:"5.1.2 Advanced Configuration",id:"512-advanced-configuration",level:4},{value:"url",id:"url",level:5},{value:"apiKey",id:"apikey",level:5},{value:"tenantId",id:"tenantid",level:5},{value:"5.1.3. Other parameters",id:"513-other-parameters",level:4},{value:"extractionTimeout",id:"extractiontimeout",level:5},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Use of the component",id:"6-use-of-the-component",level:2},{value:"7. Reception of the result",id:"7-reception-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1 Colors and images",id:"81-colors-and-images",level:3},{value:"8.2 Fonts",id:"82-fonts",level:3},{value:"8.3 Customizing the time between screens",id:"83-customizing-the-time-between-screens",level:3},{value:"8.4 Texts - Multi-Language",id:"84-texts---multi-language",level:3},{value:"8.4.1 Default language settings",id:"841-default-language-settings",level:4},{value:"8.4.2 Customized Language Configuration",id:"842-customized-language-configuration",level:4},{value:"8.4.3 Keys for multi-languages",id:"843-keys-for-multi-languages",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"video-id-component",children:"Video Id Component"}),"\n",(0,t.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,t.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"Component"})," discussed in the current document is called\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"VideoID Component"})}),". This is responsible for recording a\nuser identifying themselves, showing their face and their identity document."]}),"\n",(0,t.jsx)(n.h2,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,t.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,t.jsxs)(n.h2,{id:"minimum-ios-version-13",children:["Minimum iOS version: ",(0,t.jsx)(n.strong,{children:"13"})]}),"\n",(0,t.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,t.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,t.jsxs)(n.p,{children:["In order to avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the Facephi libraries.\nof the Facephi libraries (",(0,t.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before the installation of the components.\ncompletely before the installation of the components of the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,t.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Currently the FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,t.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (adding them to the project's Podfile file) are:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"   pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To install the VideoID component, the following entry must be included in the application's Podfile:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKVideoIDComponent', '~> 1.5.0'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once the dependencies are installed, you can use the different functionalities of the component."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If developing with ",(0,t.jsx)(n.strong,{children:"xCode15"}),", a post-installation script must be included:\n",(0,t.jsx)(n.img,{alt:"Image",src:i(3585).A+"",width:"1834",height:"510"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"22-permissions-and-configurations",children:"2.2 Permissions and configurations"}),"\n",(0,t.jsx)(n.p,{children:"In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file"}),"\n",(0,t.jsx)(n.p,{children:"It is necessary to allow the use of the camera (Privacy - Camera Usage Description)."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,t.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,t.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,t.jsxs)(n.p,{children:["This command must have been executed ",(0,t.jsx)(n.strong,{children:"prior to launch"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,t.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Controller"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VideoIdController"}),(0,t.jsx)(n.td,{children:"Video identification main controller"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SignatureVideoIdController"}),(0,t.jsx)(n.td,{children:"Driver to sign a process with a Capture"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,t.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, a\n",(0,t.jsx)(n.em,{children:"VideoIdConfigurationData"})," object must be created and passed as a\nparameter to the SDKController when the component is launched."]}),"\n",(0,t.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each of them is used for."}),"\n",(0,t.jsx)(n.h3,{id:"51-class-videoidconfigurationdata",children:"5.1. Class VideoIdConfigurationData"}),"\n",(0,t.jsxs)(n.p,{children:["The fields included in the configuration ",(0,t.jsx)(n.strong,{children:"(url, apiKey, tenantId)"}),",\nusually ",(0,t.jsx)(n.strong,{children:"do not need to be reported"})," as they are filled internally\nthrough the licence used."]}),"\n",(0,t.jsxs)(n.p,{children:["These fields are usually ",(0,t.jsx)(n.strong,{children:"reported only"})," when the server is\n",(0,t.jsx)(n.strong,{children:"OnPremise"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"511-basic-configuration",children:"5.1.1. Basic Configuration"}),"\n",(0,t.jsx)(n.h5,{id:"sectiontime",children:"sectionTime"}),"\n",(0,t.jsx)(n.p,{children:"Indicates the duration of each of the sections in which the\nrecording message."}),"\n",(0,t.jsx)(n.h5,{id:"showcompletedtutorial",children:"showCompletedTutorial"}),"\n",(0,t.jsx)(n.p,{children:"Indicates whether you want to show the complete initial tutorial. If I dont know\nwill show a progress indicator."}),"\n",(0,t.jsx)(n.h5,{id:"mode",children:"mode"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ONLY_FACE: The process is carried out being necessarily only\nshowing face."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT: The process is carried out using both the face and\nthe front of the identity document."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT_BACK: The process is carried out using the face, the\nfront of the identity document and the back of the document."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"512-advanced-configuration",children:"5.1.2 Advanced Configuration"}),"\n",(0,t.jsx)(n.h5,{id:"url",children:"url"}),"\n",(0,t.jsx)(n.p,{children:"Path to video socket"}),"\n",(0,t.jsx)(n.h5,{id:"apikey",children:"apiKey"}),"\n",(0,t.jsx)(n.p,{children:"ApiKey required for connection to video socket"}),"\n",(0,t.jsx)(n.h5,{id:"tenantid",children:"tenantId"}),"\n",(0,t.jsx)(n.p,{children:"Tenant identifier that refers to the current client,\nnecessary for connection to the video service."}),"\n",(0,t.jsx)(n.h4,{id:"513-other-parameters",children:"5.1.3. Other parameters"}),"\n",(0,t.jsx)(n.h5,{id:"extractiontimeout",children:"extractionTimeout"}),"\n",(0,t.jsx)(n.p,{children:"Sets the maximum time that the reading can be performed."}),"\n",(0,t.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,t.jsx)(n.p,{children:"If the value is set to true, the vibration is activated on errors and if the widget response is OK"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"6-use-of-the-component",children:"6. Use of the component"}),"\n",(0,t.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,t.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,t.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,t.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,t.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,t.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,t.jsxs)(n.p,{children:["On the other hand, the ",(0,t.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,t.jsx)(n.p,{children:"In the configuration data (VideoIDConfigurationData) you can also modify:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"sectionTime"}),": Time that will remain on each screen of the process in ms"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"mode"}),": Mode that will be applied for recording. The possible VideoIdMode values will be:"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ONLY_FACE: You only have to show your face during the process."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT: You have to show the face and front of the document."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT_BACK: You have to show the face, front and back of the document."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"showCompletedTutorial"}),": Indicates whether you want to show the complete tutorial of the process or only the simplified version."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:[(0,t.jsx)("u",{children:"optional"})," data that is normally included within the license"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"tenantId"}),": Tenant identifier that refers to the current client, necessary for the connection to the video service."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"url"}),": Path to the video socket."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"apiKey"}),": ApiKey required for connection to the video socket."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"7-reception-of-the-result",children:"7. Reception of the result"}),"\n",(0,t.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. More information in the ",(0,t.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})]}),"\n",(0,t.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,t.jsxs)(n.p,{children:["On the error side, we will have the ",(0,t.jsx)(n.em,{children:"VideoIdError"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"NO_DATA_ERROR\nTIMEOUT\nCANCEL_BY_USER\nCANCEL_LAUNCH\nNETWORK_CONNECTION\nSOCKET_ERROR\nVIDEO_ERROR\nACTIVITY_RESULT_ERROR\nINITIALIZATION_ERROR -> it.error\nUNKNOWN_ERROR\nPERMISSION_DENIED\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,t.jsxs)(n.p,{children:["To customize the component, ThemeVideoIdManager.setup(theme:",(0,t.jsx)(n.code,{children:"CustomThemeVideoId()"})," ) must be called after initializing the videoIdController:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"let videoidController = VideoIdController(data: data, output: output, viewController: viewController)\nThemeVideoIdManager.setup(theme: CustomThemeVideoId())\nSDKController.launchVideoId(controller: videoidController)\n"})}),"\n",(0,t.jsx)(n.p,{children:"An example of the CustomThemeVideoId class would be this (you must implement ThemeVideoIdProtocol):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'class CustomThemeVideoId: ThemeVideoIdProtocol {\n     var images: [R.Image: UIImage?] = [:]\n\n     var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]\n\n     // var animations: [R.Animation: String] = [:]\n\n     var name: String {\n         "custom"\n     }\n\n     var fonts: [R.Font: String] = [:]\n\n     var dimensions: [R.Dimension: CGFloat] {\n         [.fontBig: 8]\n     }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"81-colors-and-images",children:"8.1 Colors and images"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The images initialize in the variable images , passing it a dictionary, being the key one of the enumerated ones that represent the different images of the screen, and the value the customized image to be shown."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"case ic_video_id_back_id\ncase ic_video_id_check\ncase ic_video_id_close\ncase ic_video_id_front_id\ncase ic_video_id_record_back\ncase ic_video_id_record_face\ncase ic_video_id_record_front_id_case ic_video_id_user_id\ncase ic_video_id_user\ncase intro\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The colors are initialized similarly in the colors variable with a dictionary, having as value a UIColor of your choice."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"case MainBackground\ncase TitleText\ncase MessageText\ncase PrimaryButtonText\ncase Button\ncase CheckText\ncase Primary\n"})}),"\n",(0,t.jsx)(n.h3,{id:"82-fonts",children:"8.2 Fonts"}),"\n",(0,t.jsxs)(n.p,{children:["Fonts are similarly initialized in the ",(0,t.jsx)(n.code,{children:"fonts"})," variable with a dictionary, having as value a ",(0,t.jsx)(n.strong,{children:"String"})," with the name of the desired ",(0,t.jsx)(n.strong,{children:"UIFont"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"case regular\ncase bold\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The size of the texts is similarly initialized in the dimensions variable with a dictionary, having as value a ",(0,t.jsx)(n.strong,{children:"CGFloat"})," with the desired size."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"83-customizing-the-time-between-screens",children:"8.3 Customizing the time between screens"}),"\n",(0,t.jsx)(n.p,{children:"To modify the time spent on each recording screen, the value of the time parameter (in ms) of the VideoIDConfigurationData must be modified:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"VideoIDConfigurationData(time = TIME IN MS)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It will always be the minimum 5000."}),"\n",(0,t.jsx)(n.p,{children:"This object will be passed during the setup of the video ID."}),"\n",(0,t.jsx)(n.h3,{id:"84-texts---multi-language",children:"8.4 Texts - Multi-Language"}),"\n",(0,t.jsx)(n.h4,{id:"841-default-language-settings",children:"8.4.1 Default language settings"}),"\n",(0,t.jsxs)(n.p,{children:["If the package is installed via ",(0,t.jsx)(n.strong,{children:"SPM"}),", for text localization to work, the following needs to be added to the ",(0,t.jsx)(n.strong,{children:"Info.plist"})," file of the integrator app:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CFBundleAllowMixedLocalizations = YES"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It would look like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(3963).A+"",width:"1410",height:"586"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"English - Spain"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Spanish - Spain"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Portuguese - Portugal"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The language of the component is selected according to the language that the cell phone has set."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the language is any language whose root is Spanish (e.g. Spanish - Mexico), by default, it will use Spanish - Spain."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the language is any language whose root is Portuguese (e.g. Portuguese - Brazil), by default, it will use Portuguese - Portugal."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For any other case, English will be used."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"842-customized-language-configuration",children:"8.4.2 Customized Language Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The component allows the customization of texts according to the language, which as in the previous case, will be defined by the language that is selected on the device."}),"\n",(0,t.jsxs)(n.p,{children:["This customization applies to new localizations as well as to the case of the default languages (es, en and pt-PT). It is done through the use of ",(0,t.jsx)(n.strong,{children:"Localizable.strings."})," files."]}),"\n",(0,t.jsx)(n.h4,{id:"843-keys-for-multi-languages",children:"8.4.3 Keys for multi-languages"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Localizable.strings"})," file in the ",(0,t.jsx)(n.strong,{children:"es.lproj"})," folder of the component is the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"video_id_text_waiting_agent_title"="Video grabaci\xf3n";\n"video_id_permission_denied"="Permiso denegado";\n"video_id_network_connection_error"="Revise su conexi\xf3n a internet";\n"video_id_exit_alert_question"="\xbfQuieres abandonar la identificaci\xf3n?";\n"video_id_exit_alert_exit"="Abandonar";\n"video_id_exit_alert_cancel"="Cancelar";\n"video_id_exit_alert_ok"="Ok";\n"video_id_exit"="Salir";\n"video_id_tip_message_face_document"="Coloca tu rostro y el frente de tu documento en las marcas e inicia la grabaci\xf3n";\n"video_id_tip_message_only_face"="Coloca tu rostro en las marcas e inicia la grabaci\xf3n";\n"video_id_info_message_back"="Ahora coloca el reverso de tu documento en la marca correspondiente"; // DOCUMENTO? DNI?\n"video_id_info_message_face_old"="Coloca tu rostro y en voz alta di los datos de tu domicilio y nombre completo";\n"video_id_finish_message"="\xa1Videograbaci\xf3n finalizada!";\n"video_id_finish_button"="Finalizar";\n"video_id_record_retry_button"="Repetir grabaci\xf3n";\n"video_id_record_init_button"="Iniciar grabaci\xf3n";\n"video_id_ready_button"="CONTINUAR";\n"video_id_generic_error"="Ha habido un error en la grabaci\xf3n";\n"video_id_tip_info_message"="En la parte inferior de la pantalla aparecer\xe1n las instrucciones y el tiempo para llevar a cabo la grabaci\xf3n";\n"video_id_face_instructions"="Ahora en voz alta di \\"Yo (nombre y apellidos)  acepto los t\xe9rminos y condiciones\\".";\n"video_id_face_document_instructions"="Coloca tu rostro y el frente de tu documento en las marcas";\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:['Thus, if you want to modify for example the text "',(0,t.jsx)(n.em,{children:"Finish"}),'" of the key ',(0,t.jsx)(n.code,{children:"video_id_finish_button"})," for the language ",(0,t.jsx)(n.strong,{children:"es-MX"}),", you must go to the file ",(0,t.jsx)(n.strong,{children:"Localizable.strings"})," in the folder ",(0,t.jsx)(n.strong,{children:"es-MX.lproj"})," if it exists (if not, you must create it) and there, add:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"video_id_finish_button"="Finish";'}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If a message is not specified in the language file, it will be filled with the default message."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3585:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},3963:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sdkVideo-infoplist-image-dfd92b23a51da4dd640cb2fc95eff2cf.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);