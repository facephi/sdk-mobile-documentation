"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[6968],{702:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Video_Recording_Component","title":"Video Recording Component","description":"0. SDK Mobile baseline requirements","source":"@site/android_versioned_docs/version-1.5.2/Video_Recording_Component.md","sourceDirName":".","slug":"/Video_Recording_Component","permalink":"/sdk-mobile-documentation/docs/android/1.5.2/Video_Recording_Component","draft":false,"unlisted":false,"tags":[],"version":"1.5.2","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Video Id Component","permalink":"/sdk-mobile-documentation/docs/android/1.5.2/Video_Id_Component"},"next":{"title":"Changelog","permalink":"/sdk-mobile-documentation/docs/android/1.5.2/Changelog"}}');var r=o(4848),t=o(8453);const s={},d="Video Recording Component",l={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class VideoRecordingConfigurationData",id:"51-class-videorecordingconfigurationdata",level:3},{value:"5.1.1. url",id:"511-url",level:4},{value:"5.1.2. apiKey",id:"512-apikey",level:4},{value:"5.1.3. tenantId",id:"513-tenantid",level:4},{value:"6. Component use",id:"6-component-use",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.1. <em>Receipt of correct execution - data</em>",id:"71-receipt-of-correct-execution---data",level:3},{value:"10. Additional Controllers",id:"10-additional-controllers",level:2},{value:"10.1. StopVideoRecordingController",id:"101-stopvideorecordingcontroller",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"video-recording-component",children:"Video Recording Component"})}),"\n",(0,r.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"Component"})," discussed in the current document is called\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"VideoRecording Component"})}),". It is responsible for capturing the\nscreen of the device in the background. It is mainly oriented towards\nthe recording of the onboarding process."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,r.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,r.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,r.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,r.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,r.jsx)(n.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:video_recording_component:$sdk_video_recording_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,r.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,r.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,r.jsxs)(n.p,{children:["This command must have been executed ",(0,r.jsx)(n.strong,{children:"prior to launch"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Controller"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Description"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VideoRecordingController"}),(0,r.jsx)(n.td,{children:"VideoRecording main controller"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"StopVideoRecordingController"}),(0,r.jsx)(n.td,{children:"Controller to stop the video recording."})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,r.jsx)(n.p,{children:"To configure the current component, once it has been initialised, a\nVideoRecordingConfigurationData object must be created and passed as a\nparameter to the SDKController when the component is launched."}),"\n",(0,r.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each of them is used for."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-videorecordingconfigurationdata",children:"5.1. Class VideoRecordingConfigurationData"}),"\n",(0,r.jsxs)(n.p,{children:["The fields included in the configuration, normally ",(0,r.jsx)(n.strong,{children:"do not need to be\nreported"})," as they are filled internally through the licence used."]}),"\n",(0,r.jsxs)(n.p,{children:["These fields are usually reported only when the server is ",(0,r.jsx)(n.strong,{children:"OnPremise"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"511-url",children:"5.1.1. url"}),"\n",(0,r.jsx)(n.p,{children:"Path to the video socket"}),"\n",(0,r.jsx)(n.h4,{id:"512-apikey",children:"5.1.2. apiKey"}),"\n",(0,r.jsx)(n.p,{children:"ApiKey needed for connection to the video socket"}),"\n",(0,r.jsx)(n.h4,{id:"513-tenantid",children:"5.1.3. tenantId"}),"\n",(0,r.jsx)(n.p,{children:"Tenant identifier referring to the current client, required for the\nconnection to the video service."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,r.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    VideoRecordingController(VideoRecordingConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("VideoRecording: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("VideoRecording OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,r.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    VideoRecordingController(VideoRecordingConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("VideoRecording: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("VideoRecording OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,r.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,r.jsxs)(n.p,{children:["On the other hand, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,r.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. More information in the Android Mobile SDK's ",(0,r.jsx)("a",{href:"Mobile_SDK#6-result-return",rel:"nofollow",children:"6. Result return"})," section."]}),"\n",(0,r.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,r.jsxs)(n.p,{children:["On the error side, we will have the ",(0,r.jsx)(n.em,{children:"VideoRecordingError"})," class."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val message = when(it.error){\n    VideoRecordingError.CANCEL_BY_USER -> "CANCEL_BY_USER"\n    is VideoRecordingError.INITIALIZATION_ERROR ->\n        "INITIALIZATION_ERROR: ${(it.error as VideoRecordingError.INITIALIZATION_ERROR).error}"\n    VideoRecordingError.NETWORK_CONNECTION -> "NETWORK_CONNECTION"\n    VideoRecordingError.NO_DATA_ERROR -> "NO_DATA_ERROR"\n    VideoRecordingError.PERMISSION_DENIED -> "PERMISSION_DENIED"\n    VideoRecordingError.TIMEOUT -> "TIMEOUT"\n    VideoRecordingError.UNKNOWN_ERROR -> "UNKNOWN_ERROR"\n    VideoRecordingError.VIDEO_ERROR -> "VIDEO_ERROR"\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"71-receipt-of-correct-execution---data",children:["7.1. ",(0,r.jsx)(n.em,{children:"Receipt of correct execution - data"})]}),"\n",(0,r.jsx)(n.p,{children:"On successful execution, it simply reports that everything went well\nwith the SdkResult.Success."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"10-additional-controllers",children:"10. Additional Controllers"}),"\n",(0,r.jsx)(n.h3,{id:"101-stopvideorecordingcontroller",children:"10.1. StopVideoRecordingController"}),"\n",(0,r.jsx)(n.p,{children:"This controller allows stopping a recording in progress."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    StopVideoRecordingController {\n        when (it) {\n            is SdkResult.Error -> Napier.d(\n                "VideoRecording-STOP: KO - ${it.error.javaClass.simpleName}"\n            )\n            is SdkResult.Success -> Napier.d("VideoRecording-STOP: OK")\n        }\n    }\n)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var i=o(6540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);