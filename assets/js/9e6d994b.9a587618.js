"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[3903],{6648:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"Video_Id_Component","title":"Video Id Component","description":"0. SDK Mobile baseline requirements","source":"@site/android_versioned_docs/version-2.2.X/Video_Id_Component.md","sourceDirName":".","slug":"/Video_Id_Component","permalink":"/sdk-mobile-documentation/docs/android/Video_Id_Component","draft":false,"unlisted":false,"tags":[],"version":"2.2.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Video Call Component","permalink":"/sdk-mobile-documentation/docs/android/Video_Call_Component"},"next":{"title":"Video Recording Component","permalink":"/sdk-mobile-documentation/docs/android/Video_Recording_Component"}}');var o=i(4848),r=i(8453);const s={},d="Video Id Component",l={},a=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class VideoIdConfigurationData",id:"51-class-videoidconfigurationdata",level:3},{value:"5.1.1. url",id:"511-url",level:4},{value:"5.1.2. apiKey",id:"512-apikey",level:4},{value:"5.1.3. tenantId",id:"513-tenantid",level:4},{value:"5.1.4. sectionTime",id:"514-sectiontime",level:4},{value:"5.1.5. mode",id:"515-mode",level:4},{value:"5.1.6. showCompletedTutorial",id:"516-showcompletedtutorial",level:4},{value:"6. Component use",id:"6-component-use",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.2. Receipt of correct execution - <em>data</em>",id:"72-receipt-of-correct-execution---data",level:3},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1. Texts",id:"81-texts",level:3},{value:"8.2. Animations",id:"82-animations",level:3},{value:"8.3 External custom views",id:"83-external-custom-views",level:3},{value:"9. Logs",id:"9-logs",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"video-id-component",children:"Video Id Component"})}),"\n",(0,o.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,o.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,o.jsx)(n.p,{children:"The Component discussed in the current document is called VideoID\nComponent. It is responsible for the recording of a user identifying\nhimself, showing his face and his identity document."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,o.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,o.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,o.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,o.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,o.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,o.jsx)(n.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:video_id_component:$sdk_videoid_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,o.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,o.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,o.jsx)("div",{class:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,o.jsx)(n.strong,{children:"before launch"}),".\nTo learn more about how to start a new operation, it is recommended to consult the ",(0,o.jsx)(n.a,{href:"./Mobile_SDK#4-start-a-new-operation",children:"Start a new operation"})," documentation, which details and explains what this process consists of."]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Controller"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Description"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"VideoIdController"}),(0,o.jsx)(n.td,{children:"Video identification main controller"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SignatureVideoIdController"}),(0,o.jsx)(n.td,{children:"Driver to sign a process with a Capture"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, a\n",(0,o.jsx)(n.em,{children:"VideoIdConfigurationData"})," object must be created and passed as a\nparameter to the SDKController when the component is launched."]}),"\n",(0,o.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each of them is used for."}),"\n",(0,o.jsx)(n.h3,{id:"51-class-videoidconfigurationdata",children:"5.1. Class VideoIdConfigurationData"}),"\n",(0,o.jsxs)(n.p,{children:["The fields included in the configuration ",(0,o.jsx)(n.strong,{children:"(url, apiKey, tenantId)"}),",\nusually ",(0,o.jsx)(n.strong,{children:"do not need to be reported"})," as they are filled internally\nthrough the licence used."]}),"\n",(0,o.jsxs)(n.p,{children:["These fields are usually ",(0,o.jsx)(n.strong,{children:"reported only"})," when the server is\n",(0,o.jsx)(n.strong,{children:"OnPremise"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"511-url",children:"5.1.1. url"}),"\n",(0,o.jsx)(n.p,{children:"Path to the video socket"}),"\n",(0,o.jsx)(n.h4,{id:"512-apikey",children:"5.1.2. apiKey"}),"\n",(0,o.jsx)(n.p,{children:"ApiKey needed for connection to the video socket"}),"\n",(0,o.jsx)(n.h4,{id:"513-tenantid",children:"5.1.3. tenantId"}),"\n",(0,o.jsx)(n.p,{children:"Tenant identifier referring to the current client, required for the\nconnection to the video service."}),"\n",(0,o.jsx)(n.h4,{id:"514-sectiontime",children:"5.1.4. sectionTime"}),"\n",(0,o.jsx)(n.p,{children:"Indicates the duration of each of the sections in which the recording\nmessage is displayed."}),"\n",(0,o.jsx)(n.h4,{id:"515-mode",children:"5.1.5. mode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"ONLY_FACE: process is necessarily performed by showing only the\nface."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT: The process is performed using both the face\nand the front of the identity document."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT_BACK: The process is performed using the face,\nthe front of the identity document and the back of the document."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"516-showcompletedtutorial",children:"5.1.6. showCompletedTutorial"}),"\n",(0,o.jsx)(n.p,{children:"Indicates if you want to show the complete initial tutorial. If not, a\nprogress indicator will be shown."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,o.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,o.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,o.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    VideoIdController(VideoIdConfigurationData())\n)\nwhen (it) {\n    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,o.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,o.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launchMethod(\n    VideoIdController(VideoIdConfigurationData())\n)\nwhen (it) {\n    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,o.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,o.jsxs)(n.p,{children:["On the other hand, the ",(0,o.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,o.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. More information in the Android Mobile SDK's ",(0,o.jsx)("a",{href:"Mobile_SDK#6-result-return",rel:"nofollow",children:"6. Result return"})," section."]}),"\n",(0,o.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,o.jsxs)(n.p,{children:["On the error side, we will have the ",(0,o.jsx)(n.em,{children:"VideoIdError"})," class."]}),"\n",(0,o.jsx)(n.p,{children:"Error list:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"ACTIVITY_RESULT_MSG_ERROR: The result of the activity is incorrect."}),"\n",(0,o.jsx)(n.li,{children:"APPLICATION_CONTEXT_ERROR: Required application context is null"}),"\n",(0,o.jsx)(n.li,{children:"CANCEL_BY_USER: User has cancelled the process"}),"\n",(0,o.jsx)(n.li,{children:"CANCEL_LAUNCH: A general cancellation of the SDK has been done."}),"\n",(0,o.jsx)(n.li,{children:"COMPONENT_LICENSE_ERROR: The license of the component is not correct"}),"\n",(0,o.jsx)(n.li,{children:"EMPTY_LICENSE: License String is empty"}),"\n",(0,o.jsx)(n.li,{children:"FACE_DETECTION_TIMEOUT: No face detected"}),"\n",(0,o.jsx)(n.li,{children:"FETCH_DATA_ERROR: Error in the result collection"}),"\n",(0,o.jsx)(n.li,{children:"FLOW_ERROR: Error in the flow process"}),"\n",(0,o.jsx)(n.li,{children:"INITIALIZATION_ERROR: Initialisation error"}),"\n",(0,o.jsx)(n.li,{children:"MANAGER_NOT_INITIALIZED: Managers are nil"}),"\n",(0,o.jsx)(n.li,{children:"NETWORK_CONNECTION: Error in internet connection"}),"\n",(0,o.jsx)(n.li,{children:"NO_DATA_ERROR: Input data is null"}),"\n",(0,o.jsx)(n.li,{children:"OPERATION_NOT_CREATED: No operation in progress"}),"\n",(0,o.jsx)(n.li,{children:"PERMISSION_DENIED: User has denied permissions"}),"\n",(0,o.jsx)(n.li,{children:"SOCKET_ERROR: Error in the connection of services"}),"\n",(0,o.jsx)(n.li,{children:"TIMEOUT: Timeout in the process"}),"\n",(0,o.jsx)(n.li,{children:"VIDEO_ERROR: Error in video processing"}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"72-receipt-of-correct-execution---data",children:["7.2. Receipt of correct execution - ",(0,o.jsx)(n.em,{children:"data"})]}),"\n",(0,o.jsx)(n.p,{children:"On successful execution, it simply reports that everything went well\nwith the SdkResult.Success."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,o.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,o.jsx)(n.h3,{id:"81-texts",children:"8.1. Texts"}),"\n",(0,o.jsx)(n.p,{children:"If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value of\neach String to the desired one."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'    <string name="video_id_component_text_waiting_agent_title">Video ID</string>\n    <string name="video_id_component_first_message">Place your face and the front of your document within the frame</string>\n    <string name="video_id_component_init_message_face_content_desc">Place your face in front of the camera and start recording</string>\n    <string name="video_id_component_init_message_face_docu_content_desc">Place your face and your document in front of the camera and start recording</string>\n    <string name="video_id_component_second_message">Now place the back of your document</string>\n    <string name="video_id_component_third_message">Now please say out loud "I (name and surname) accept the terms and conditions".</string>\n    <string name="video_id_component_finish_message">Video recording finished!</string>\n    <string name="video_id_component_record_init_button">Start recording</string>\n    <string name="video_id_component_ready_button">Ready</string>\n    <string name="video_id_component_first_message_face">Place your face within the frame</string>\n    <string name="video_id_component_restart">Repeat recording</string>\n    <string name="video_id_component_timeout_title">Time exceeded</string>\n    <string name="video_id_component_timeout_desc">We apologize. The capture could not be made</string>\n    <string name="video_id_component_internal_error_title">There was a technical problem</string>\n    <string name="video_id_component_internal_error_desc">We apologize. The capture could not be made</string>\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"82-animations",children:"8.2. Animations"}),"\n",(0,o.jsx)(n.p,{children:"If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"video_id_anim_doc_and_face.json\nvideo_id_anim_face.json\nvideo_id_anim_loading.json\n"})}),"\n",(0,o.jsx)(n.h3,{id:"83-external-custom-views",children:"8.3 External custom views"}),"\n",(0,o.jsx)(n.p,{children:"It is possible to completely modify the component screens while maintaining their functionality and navigation. To do so, the following interfaces must be implemented:"}),"\n",(0,o.jsx)(n.p,{children:"Error diagnosis screen:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"\ninterface IVideoIdErrorDiagnosticView {\n    @Composable\n    fun Content(\n        error: VideoIdError,\n        onRetry: () -> Unit,\n        onClose: () -> Unit,\n    )\n}\n\n"})}),"\n",(0,o.jsx)(n.p,{children:'Once the classes that implement the interfaces have been created, the "customViews" parameter can be added at component launch to be used in the SDK.'}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"9-logs",children:"9. Logs"}),"\n",(0,o.jsx)(n.p,{children:'To display the logs of this component on the console, you can use the filter: "VIDEO_ID:"'})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);