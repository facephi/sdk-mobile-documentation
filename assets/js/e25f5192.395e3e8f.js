"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7122],{9815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(5893),o=t(1151);const r={sidebar_position:7},l="Video Call Component",s={id:"android/Video_Call_Component",title:"Video Call Component",description:"0. SDK Mobile baseline requirements",source:"@site/docs/android/Video_Call_Component.md",sourceDirName:"android",slug:"/android/Video_Call_Component",permalink:"/docs/next/android/Video_Call_Component",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tracking Component",permalink:"/docs/next/android/Tracking_Component"},next:{title:"Video Id Component",permalink:"/docs/next/android/Video_Id_Component"}},a={},d=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class VideoCallConfigurationData",id:"51-class-videocallconfigurationdata",level:3},{value:"5.1.1. url",id:"511-url",level:4},{value:"5.1.2. apiKey",id:"512-apikey",level:4},{value:"5.1.3. tenantId",id:"513-tenantid",level:4},{value:"6. Component use",id:"6-component-use",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"<em>7.1. Receipt of correct execution - data</em>",id:"71-receipt-of-correct-execution---data",level:3},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1. Texts",id:"81-texts",level:3},{value:"8.2. Colors",id:"82-colors",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"video-call-component",children:"Video Call Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,i.jsx)("a",{href:"EN_Android_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Android Mobile SDK"})," section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsx)(n.p,{children:"The component discussed in the current document is called VideoCall\nComponent. It is in charge of managing the communication between a user\nand an agent remotely, through a communication channel. It is mainly\noriented to video assistance use cases."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("a",{href:"EN_Android_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:"Android Mobile SDK"})}),"\nand follow the instructions in that document."]}),"\n",(0,i.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,i.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,i.jsx)(n.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:videocall_component:$sdk_videocall_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,i.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,i.jsxs)(n.p,{children:["This command must have been executed ",(0,i.jsx)(n.strong,{children:"prior to launch"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,i.jsx)("a",{href:"EN_Android_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:"Android Mobile SDK"})}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Controller"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Description"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VideoCallController"}),(0,i.jsx)(n.td,{children:"Videocall main controller"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,i.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, a\n",(0,i.jsx)(n.em,{children:"VideoCallConfigurationData"})," object must be created and passed as a\nparameter to the SDKController when the component is launched."]}),"\n",(0,i.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each of them is used for."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-videocallconfigurationdata",children:"5.1. Class VideoCallConfigurationData"}),"\n",(0,i.jsxs)(n.p,{children:["The fields included in the configuration, normally ",(0,i.jsx)(n.strong,{children:"do not need to be\nreported"})," as they are filled internally through the licence used."]}),"\n",(0,i.jsxs)(n.p,{children:["These fields are usually reported only when the server is ",(0,i.jsx)(n.strong,{children:"OnPremise"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"511-url",children:"5.1.1. url"}),"\n",(0,i.jsx)(n.p,{children:"Path to the video socket"}),"\n",(0,i.jsx)(n.h4,{id:"512-apikey",children:"5.1.2. apiKey"}),"\n",(0,i.jsx)(n.p,{children:"ApiKey needed for connection to the video socket"}),"\n",(0,i.jsx)(n.h4,{id:"513-tenantid",children:"5.1.3. tenantId"}),"\n",(0,i.jsx)(n.p,{children:"Tenant identifier referring to the current client, required for the\nconnection to the video service."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,i.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,i.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    VideoCallController(VideoCallConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("VideoCall: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("VideoCall OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,i.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    VideoCallController(VideoCallConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("VideoCall: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("VideoCall OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,i.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,i.jsxs)(n.p,{children:["On the other hand, the ",(0,i.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,i.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. More information in the Android Mobile SDK's ",(0,i.jsx)("a",{href:"https://facephicorporative.atlassian.net/wiki/spaces/DD/pages/2605678593#6.-Result-return",rel:"nofollow",children:"6. Result return"})," section."]}),"\n",(0,i.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,i.jsxs)(n.p,{children:["On the error side, we will have the ",(0,i.jsx)(n.em,{children:"VideoCallError"})," class."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"val message = when(it.error){\n    is VideoCallError.ACTIVITY_RESULT_ERROR -> it.error.name\n    is VideoCallError.CANCEL_BY_USER -> it.error.name\n    is VideoCallError.INITIALIZATION_ERROR -> it.error.name\n    is VideoCallError.NETWORK_CONNECTION -> it.error.name\n    is VideoCallError.NO_DATA_ERROR -> it.error.name\n    is VideoCallError.TIMEOUT -> it.error.name\n    is VideoCallError.VIDEO_ERROR -> it.error.name\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"71-receipt-of-correct-execution---data",children:(0,i.jsx)(n.em,{children:"7.1. Receipt of correct execution - data"})}),"\n",(0,i.jsx)(n.p,{children:"On successful execution, it simply reports that everything went well\nwith the SdkResult.Success."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,i.jsx)("a",{href:"EN_Android_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:"Android Mobile SDK"})}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,i.jsx)(n.h3,{id:"81-texts",children:"8.1. Texts"}),"\n",(0,i.jsx)(n.p,{children:"If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value of\neach String to the desired one."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'<string name="video_call_text_waiting_agent_title">Connecting with an assistant\u2026</string>\n<string name="video_call_agent">Agent</string>\n<string name="video_call_exit">Exit</string>\n<string name="video_call_text_finish">Video assistance is complete</string>\n<string name="video_call_accesibility_phone">Phone</string>\n<string name="video_call_restart">Repeat recording</string>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"82-colors",children:"8.2. Colors"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'<color name="colorVideoCallActionsBackground">#30333d</color>\n<color name="colorVideoCallButtonBackground">#FF526080</color>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var i=t(7294);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);