"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5012],{359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var l=t(4848),o=t(8453);const r={},i="Flow Component",s={id:"Flow_Component",title:"Flow Component",description:"0. SDK Mobile baseline requirements",source:"@site/android_versioned_docs/version-2.0.X/Flow_Component.md",sourceDirName:".",slug:"/Flow_Component",permalink:"/sdk-mobile-documentation/docs/android/2.0.X/Flow_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Capture Component",permalink:"/sdk-mobile-documentation/docs/android/2.0.X/Capture_Component"},next:{title:"Changelog",permalink:"/sdk-mobile-documentation/docs/android/2.0.X/Changelog"}},a={},d=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start a new operation",id:"3-start-a-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"4.1. Available controllers for flow",id:"41-available-controllers-for-flow",level:3},{value:"5. SDK initialisation with flow",id:"5-sdk-initialisation-with-flow",level:2},{value:"6. Using the component",id:"6-using-the-component",level:2},{value:"6.1 Launching a published stream",id:"61-launching-a-published-stream",level:4},{value:"6.2 Launching a flow pending publication",id:"62-launching-a-flow-pending-publication",level:4},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.2. Receiving successful execution - <em>data</em>",id:"72-receiving-successful-execution---data",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"flow-component",children:"Flow Component"})}),"\n",(0,l.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,l.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,l.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,l.jsxs)(n.p,{children:["This Flow document is an ",(0,l.jsx)(n.strong,{children:"annex"})," to the common ",(0,l.jsx)(n.strong,{children:"SDK"}),", as this functionality is contained in the ",(0,l.jsx)(n.strong,{children:"SDK"})," component itself.functionality is contained in the SDK component itself."]}),"\n",(0,l.jsxs)(n.p,{children:["Flow is a functionality that connects the ",(0,l.jsx)(n.strong,{children:"Design Studio"})," section of the ",(0,l.jsx)(n.strong,{children:"Platform"})," with the SDK and the implementation done by thethe ",(0,l.jsx)(n.strong,{children:"Platform"})," with the SDK and the client implementation.\nThrough a Flow identifier, you will be able to launch a flow designed on the web, which can contain up to 1which can contain from 1 to N steps of the existing components in the SDK.\nin the SDK."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,l.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to:"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,l.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,l.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,l.jsxs)(n.p,{children:["No ",(0,l.jsx)(n.strong,{children:"any extra dependencies"})," are required to use Flow."]}),"\n",(0,l.jsxs)(n.p,{children:["You ",(0,l.jsx)("u",{children:"must add the required dependencies of each component"}),"\nthat you want to launch within Flow. If you want to launch ",(0,l.jsx)(n.strong,{children:"facial recognition,"})," it should be ",(0,l.jsx)(n.strong,{children:"necessary"})," to install the ",(0,l.jsx)(n.strong,{children:"Selphi component"}),", and so on with the rest of the components.components."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"3-start-a-new-operation",children:"3. Start a new operation"}),"\n",(0,l.jsx)(n.p,{children:"When initiating the launch of a Flow operation, a new operation is generated internally in a fully transparent manner.\ninternally, a new operation is generated in a completely transparent way."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)("u",{children:"It is not necessary"})})," to perform a new operation beforehand.\nbeforehand."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Controller"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Description"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FlowController"}),(0,l.jsx)(n.td,{children:"Flow main controller. Launch of published flows."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FlowPreviewController"}),(0,l.jsx)(n.td,{children:"Driver for the release of flows to be published (testing)"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"41-available-controllers-for-flow",children:"4.1. Available controllers for flow"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Controller"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Description"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FSelphiController"}),(0,l.jsx)(n.td,{children:"Facial recognition"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FSelphIDController"}),(0,l.jsx)(n.td,{children:"Document recognition"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FVoiceController"}),(0,l.jsx)(n.td,{children:"Voice capture"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FPhingersController"}),(0,l.jsx)(n.td,{children:"Capture of footprints"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FNfcController"}),(0,l.jsx)(n.td,{children:"NFC"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FQrReaderController"}),(0,l.jsx)(n.td,{children:"QR Reader"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FPhacturasReaderController"}),(0,l.jsx)(n.td,{children:"Invoice capture"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FVideoIdController"}),(0,l.jsx)(n.td,{children:"Video Identification"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FVideoCallController"}),(0,l.jsx)(n.td,{children:"Video Call"})]})]})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"5-sdk-initialisation-with-flow",children:"5. SDK initialisation with flow"}),"\n",(0,l.jsxs)(n.p,{children:["The SDK initialisation function has the ",(0,l.jsx)(n.em,{children:"activateFlow"})," parameter to manage its activation.\nparameter to manage its activation:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"val sdkConfig = SdkConfigurationData(\n    ...\n    activateFlow = true,\n    ...\n)\n\nval result = SDKController.initSdk(sdkConfig)\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"6-using-the-component",children:"6. Using the component"}),"\n",(0,l.jsx)(n.h4,{id:"61-launching-a-published-stream",children:"6.1 Launching a published stream"}),"\n",(0,l.jsxs)(n.p,{children:["You will use the ",(0,l.jsx)(n.em,{children:"FlowController"})," to launch a flow that the client has\npublished on the platform:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'val flowController = FlowController (\n     FlowConfigurationData(\n            id = "flowId",\n            controllers = listOf(FSelphiController(), FSelphIDController()),\n            customerId = "customerId",\n        ))\n\nviewModelScope.launch {\n     flowController.stateFlow.collect { flowResult ->\n          Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")\n\n          when (flowResult.step?.key) {\n          FlowKeys.EXTERNAL_STEP.name -> {\n               delay(DELAY_EXTERNAL_STEP)\n               flowController.launchNextStep()\n          }\n\n          FlowKeys.SELPHI_COMPONENT.name -> {\n               when (val sdkResult = flowResult.result) {\n                    is SdkResult.Error -> {\n                         Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n                    }\n\n                    is SdkResult.Success -> {\n                         val result = sdkResult.data.getSelphiResult()\n                         Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")\n                    }\n               }\n          }\n\n          FlowKeys.SELPHID_COMPONENT.name -> {\n               when (val sdkResult = flowResult.result) {\n                    is SdkResult.Error -> {\n                         Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n                    }\n\n                    is SdkResult.Success -> {\n                         val result = sdkResult.data.getSelphIDResult()\n                         Napier.d("APP: SelphID OK ${result.documentCaptured}")\n                    }\n               }\n          }\n          }\n\n          if (flowResult.flowFinish) {\n          Napier.d("APP: FLOW FINISH")\n          }\n     }\n}\nviewModelScope.launch {\n     SDKController.launch(flowController)\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"62-launching-a-flow-pending-publication",children:"6.2 Launching a flow pending publication"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"FlowPreviewController"})," shall be used to test a flow that the customer\nhas yet to publish to the platform:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'val flowController = FlowPreviewController (\n     FlowConfigurationData(\n            id = "flowId",\n            controllers = listOf(FSelphiController(), FSelphIDController()),\n            customerId = "customerId",\n        ))\n\nviewModelScope.launch {\n     flowController.stateFlow.collect { flowResult ->\n          Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")\n\n          when (flowResult.step?.key) {\n          FlowKeys.EXTERNAL_STEP.name -> {\n               delay(DELAY_EXTERNAL_STEP)\n               flowController.launchNextStep()\n          }\n\n          FlowKeys.SELPHI_COMPONENT.name -> {\n               when (val sdkResult = flowResult.result) {\n                    is SdkResult.Error -> {\n                         Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n                    }\n\n                    is SdkResult.Success -> {\n                         val result = sdkResult.data.getSelphiResult()\n                         Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")\n                    }\n               }\n          }\n\n          FlowKeys.SELPHID_COMPONENT.name -> {\n               when (val sdkResult = flowResult.result) {\n                    is SdkResult.Error -> {\n                         Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n                    }\n\n                    is SdkResult.Success -> {\n                         val result = sdkResult.data.getSelphIDResult()\n                         Napier.d("APP: SelphID OK ${result.documentCaptured}")\n                    }\n               }\n          }\n          }\n\n          if (flowResult.flowFinish) {\n          Napier.d("APP: FLOW FINISH")\n          }\n     }\n}\nviewModelScope.launch {\n     SDKController.launch(flowController)\n}\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,l.jsx)(n.p,{children:"The flow result will have 3 fields:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'step: Information on the flow step that has been performed. With the\nvalue of "key" it will be possible to identify the component executed in the step.\nstep.'}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["result: The controllers will return the required information in SdkResult format\n-more details in the Android Mobile SDK's ",(0,l.jsx)("a",{href:"Mobile_SDK#6-result-return",rel:"nofollow",children:"6. Result return"})," section-."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"flowFinish: Flag indicating whether the process has finished."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,l.jsxs)(n.p,{children:["In the result, inside ",(0,l.jsx)(n.em,{children:"SdkResult.Error"})," we will have\n",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.em,{children:"flowResult.step.key"})})," to identify which component has failed, and\nthe ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.em,{children:"flowResult.result.error"})})," containing the error that occurred."]}),"\n",(0,l.jsxs)(n.h3,{id:"72-receiving-successful-execution---data",children:["7.2. Receiving successful execution - ",(0,l.jsx)(n.em,{children:"data"})]}),"\n",(0,l.jsx)(n.p,{children:"On successful execution of a stream, the corresponding components shall be launched until completion of the stream or until a\ncomponents shall be launched until completion or until an error occurs.\nerror."}),"\n",(0,l.jsxs)(n.p,{children:["If the result of a launched step is SdkResult.Success, the ",(0,l.jsx)(n.em,{children:"data"})," can be located on the one hand, and on the other hand, the ",(0,l.jsx)(n.em,{children:"data"})," of the flow.\non the one hand, the ",(0,l.jsx)(n.em,{children:"key"})," that identifies the component and on the other hand, the ",(0,l.jsx)(n.em,{children:"data"})," with the ",(0,l.jsx)(n.em,{children:"key"})," that identifies the component."]}),"\n",(0,l.jsxs)(n.p,{children:["On the other hand, the ",(0,l.jsx)(n.em,{children:"data"})," with the result of the component, as it is a generic result, inside the SDK, the ",(0,l.jsx)(n.em,{children:"data"})," with the result of the component will be located\ngeneric, within the SDK, a converter has been created for each type of result.\nresult. Ex:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'flowController.stateFlow.collect { flowResult ->\n     Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")\n\n     when (flowResult.step?.key) {\n     FlowKeys.EXTERNAL_STEP.name -> {\n          delay(DELAY_EXTERNAL_STEP)\n          flowController.launchNextStep()\n     }\n\n     FlowKeys.SELPHI_COMPONENT.name -> {\n          when (val sdkResult = flowResult.result) {\n               is SdkResult.Error -> {\n                    Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n               }\n\n               is SdkResult.Success -> {\n                    val result = sdkResult.data.getSelphiResult()\n                    Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")\n               }\n          }\n     }\n\n     FlowKeys.SELPHID_COMPONENT.name -> {\n          when (val sdkResult = flowResult.result) {\n               is SdkResult.Error -> {\n                    Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n               }\n\n               is SdkResult.Success -> {\n                    val result = sdkResult.data.getSelphIDResult()\n                    Napier.d("APP: SelphID OK ${result.documentCaptured}")\n               }\n          }\n     }\n     }\n\n     if (flowResult.flowFinish) {\n          Napier.d("APP: FLOW FINISH")\n     }\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"After checking the results, we should check whether the flow has been\nfinished or there are still steps left, in order to be able to manage the next steps\noutside the SDK."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'if (flowResult.flowFinish) {\n    Napier.d("APP: FLOW FINISH")\n}\n'})}),"\n",(0,l.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var l=t(6540);const o={},r=l.createContext(o);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);