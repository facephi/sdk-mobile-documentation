"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[813],{3884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(5893),o=t(1151);const i={sidebar_position:2},s="Tracking Component",a={id:"Tracking_Component",title:"Tracking Component",description:"This document refers to version 1.5.X of the component",source:"@site/docs/android/Tracking_Component.md",sourceDirName:".",slug:"/Tracking_Component",permalink:"/docs/android/next/Tracking_Component",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"androidSidebar",previous:{title:"SelphID Component",permalink:"/docs/android/next/SelphID_Component"},next:{title:"Video Call Component",permalink:"/docs/android/next/Video_Call_Component"}},l={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start a new operation",id:"3-start-a-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. TrackingController configuration",id:"51-trackingcontroller-configuration",level:3},{value:"5.2. Error control settings",id:"52-error-control-settings",level:3},{value:"5.3. Obtaining the ExtraData for communication with the Platform",id:"53-obtaining-the-extradata-for-communication-with-the-platform",level:3},{value:"6. Use of the component",id:"6-use-of-the-component",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tracking-component",children:"Tracking Component"}),"\n",(0,r.jsx)(n.p,{children:"This document refers to version 1.5.X of the component"}),"\n",(0,r.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,r.jsx)("a",{href:"EN_Android_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Android Mobile SDK"})," section."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The component dealt with in the current document is called ",(0,r.jsx)(n.strong,{children:"Tracking\nComponent"}),". It tracks and monitors the information obtained while\nexecuting the rest of the ",(0,r.jsx)(n.strong,{children:"SDKMobile"})," components, sending it to the\n",(0,r.jsx)(n.strong,{children:"Platform"})," services. This data can be tracked in real-time on the\nPlatform, while the process is running on the client's device."]}),"\n",(0,r.jsxs)(n.p,{children:["Unlike the rest, this component does not work individually, it works\ntransversally with the rest of the components installed in the\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),". To track the information, it is kept in the background\nwhile the SDKMobile process is running."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,r.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("a",{href:"EN_Android_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:"Android Mobile SDK"})}),"\nand follow the instructions in that document."]}),"\n",(0,r.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,r.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, if you want to install\nthe component in a project containing an old Facephi libraries\n(",(0,r.jsx)(n.em,{children:"Widgets"}),") version, these must be removed entirely before installing\nthe ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Currently, FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,r.jsx)(n.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:tracking_component:$sdk_tracking_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-start-a-new-operation",children:"3. Start a new operation"}),"\n",(0,r.jsxs)(n.p,{children:["When you want to perform a specific operation to generate the associated\ninformation correctly in the platform, the ",(0,r.jsx)(n.strong,{children:"newOperation"})," command must\nfirst be executed."]}),"\n",(0,r.jsxs)(n.p,{children:["This command must have been executed ",(0,r.jsx)(n.strong,{children:"before launch"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,r.jsx)("a",{href:"EN_Android_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:"Android Mobile SDK"})}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Controller"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Description"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TrackingController"}),(0,r.jsx)(n.td,{children:"Tracking the main controller"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TrackingErrorController"}),(0,r.jsx)(n.td,{children:"Controller to handle any errors that occur"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ExtraDataController"}),(0,r.jsx)(n.td,{children:"Driver to get the ExtraData that allows communication from client to server with SelphIDSdk installed."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,r.jsxs)(n.p,{children:["To configure the current component, see the initialisation section in\n",(0,r.jsx)("a",{href:"EN_Android_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:"Android Mobile SDK"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"51-trackingcontroller-configuration",children:"5.1. TrackingController configuration"}),"\n",(0,r.jsx)(n.p,{children:"This parameter must be included"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"SDKController.initSdk(\n    ...\n    trackingController = TrackingController(),\n)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"52-error-control-settings",children:"5.2. Error control settings"}),"\n",(0,r.jsx)(n.p,{children:"The callback can be configured to control tracking errors:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n     TrackingErrorController {\n        Napier.d("Tracking Error: ${it.name}")\n     }\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Section 7"})," shows the possible error values that exist."]}),"\n",(0,r.jsx)(n.h3,{id:"53-obtaining-the-extradata-for-communication-with-the-platform",children:"5.3. Obtaining the ExtraData for communication with the Platform"}),"\n",(0,r.jsxs)(n.p,{children:["The call to get the extraData needs information on the current\noperation, forcing it to have ",(0,r.jsx)(n.strong,{children:"previously performed a newOperation"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    ExtraDataController {\n        when (it) {\n            is SdkResult.Success -> logs.add("ExtraData: OK")\n            is SdkResult.Error -> logs.add(\n                "ExtraData: KO - ${it.error.javaClass.simpleName}"\n            )\n        }\n    }\n)\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-use-of-the-component",children:"6. Use of the component"}),"\n",(0,r.jsx)(n.p,{children:"As previously mentioned, once the tracking component has been\ninitialised and configured, launching it will not be necessary, as it\nwill keep running in the background while the rest of the components are\nrunning."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,r.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,r.jsx)(n.p,{children:"In the error part, we will have the TrackingError class."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"INIT_IDS_ERROR,\nLICENSE_ERROR,\nAPPLICATION_CONTEXT_ERROR,\nOPERATION_RESULT,\nOPERATION_ID,\nSESSION_ID,\nCUSTOMER_ID,\nSTEP_CHANGE,\nASSET_LINK,\nASSET_UPLOAD,\nOCR_DATA,\nINIT_OPERATION,\nNO_OPERATION_CREATED_ERROR,\nTOKEN_ERROR,\nNETWORK_CONNECTION,\nSEND_BYTEARRAY\n"})}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);