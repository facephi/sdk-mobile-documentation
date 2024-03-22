"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2995],{4174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(4848),i=t(8453);const o={},a="Capture Component",s={id:"Capture_Component",title:"Capture Component",description:"0. SDK Mobile baseline requirements",source:"@site/android_versioned_docs/version-2.0.0/Capture_Component.md",sourceDirName:".",slug:"/Capture_Component",permalink:"/sdk-mobile-documentation/docs/android/Capture_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Recording Component",permalink:"/sdk-mobile-documentation/docs/android/Video_Recording_Component"},next:{title:"Flow Component",permalink:"/sdk-mobile-documentation/docs/android/Flow_Component"}},l={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class CaptureConfigurationData",id:"51-class-captureconfigurationdata",level:3},{value:"5.1.1. extractionTimeout",id:"511-extractiontimeout",level:4},{value:"5.1.2. cameraSelected",id:"512-cameraselected",level:4},{value:"5.1.3. cameraShape",id:"513-camerashape",level:4},{value:"5.1.4. vibrationEnabled",id:"514-vibrationenabled",level:4},{value:"5.1.5. showStroke",id:"515-showstroke",level:4},{value:"5.1.6. showDiagnostic",id:"516-showdiagnostic",level:4},{value:"5.1.7. showTutorial",id:"517-showtutorial",level:4},{value:"5.1.8. transparentBackground",id:"518-transparentbackground",level:4},{value:"5.2. Class QrGeneratorConfiguration",id:"52-class-qrgeneratorconfiguration",level:3},{value:"5.2.1. source",id:"521-source",level:4},{value:"5.2.2. width",id:"522-width",level:4},{value:"5.2.3. height",id:"523-height",level:4},{value:"6. Component use",id:"6-component-use",level:2},{value:"6.1 Invoice capture",id:"61-invoice-capture",level:3},{value:"6.2 QR capture",id:"62-qr-capture",level:3},{value:"6.3 QR generator",id:"63-qr-generator",level:3},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.1. <em>Receipt of correct execution - data</em>",id:"71-receipt-of-correct-execution---data",level:3},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1. Texts",id:"81-texts",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"capture-component",children:"Capture Component"}),"\n",(0,r.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,r.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"})," section."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Capture Component"})}),". It is responsible for the invoice capture and the capture and generation of QRs."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,r.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:"Mobile SDK"})}),"\nand follow the instructions in that document."]}),"\n",(0,r.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,r.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,r.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,r.jsx)(n.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:capture_component:$sdk_capture_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,r.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,r.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,r.jsxs)(n.p,{children:["This command must have been executed ",(0,r.jsx)(n.strong,{children:"prior to launch"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,r.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:"Mobile SDK"})}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controller"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PhacturasReaderController"}),(0,r.jsx)(n.td,{children:"Invoice capture controller"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrReaderController"}),(0,r.jsx)(n.td,{children:"QR capture controller"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrGeneratorController"}),(0,r.jsx)(n.td,{children:"QR generator controller"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,r.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, you must create a ",(0,r.jsx)(n.em,{children:"CaptureConfigurationData"})," object and pass it as a parameter to the SDKController during the launch of the capture component."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.em,{children:"QrGeneratorConfiguration"})," object shall be created and passed as a parameter to the SDKController during the launch of the QR generation component."]}),"\n",(0,r.jsx)(n.p,{children:"The following section will show the fields that are part of this class and what each of them is used for."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-captureconfigurationdata",children:"5.1. Class CaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-extractiontimeout",children:"5.1.1. extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Maximum extraction time"}),"\n",(0,r.jsx)(n.h4,{id:"512-cameraselected",children:"5.1.2. cameraSelected"}),"\n",(0,r.jsx)(n.p,{children:"Camera selected: FRONT, BACK"}),"\n",(0,r.jsx)(n.h4,{id:"513-camerashape",children:"5.1.3. cameraShape"}),"\n",(0,r.jsx)(n.p,{children:"Shape of the mask to be displayed on the camera:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQUARE: Square"}),"\n",(0,r.jsx)(n.li,{children:"CIRCULAR: Circle"}),"\n",(0,r.jsx)(n.li,{children:"RECTANGLE_TALL: Rectangle"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"514-vibrationenabled",children:"5.1.4. vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Enable in-process vibration"}),"\n",(0,r.jsx)(n.h4,{id:"515-showstroke",children:"5.1.5. showStroke"}),"\n",(0,r.jsx)(n.p,{children:"Show a line as camera border"}),"\n",(0,r.jsx)(n.h4,{id:"516-showdiagnostic",children:"5.1.6. showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Display diagnostic screens at the end of the process"}),"\n",(0,r.jsx)(n.h4,{id:"517-showtutorial",children:"5.1.7. showTutorial"}),"\n",(0,r.jsx)(n.p,{children:"Display tutorial screen at the start of the process (only QR mode)"}),"\n",(0,r.jsx)(n.h4,{id:"518-transparentbackground",children:"5.1.8. transparentBackground"}),"\n",(0,r.jsx)(n.p,{children:"Semi-transparent mask"}),"\n",(0,r.jsx)(n.h3,{id:"52-class-qrgeneratorconfiguration",children:"5.2. Class QrGeneratorConfiguration"}),"\n",(0,r.jsx)(n.h4,{id:"521-source",children:"5.2.1. source"}),"\n",(0,r.jsx)(n.p,{children:"Text to be included in the QR"}),"\n",(0,r.jsx)(n.h4,{id:"522-width",children:"5.2.2. width"}),"\n",(0,r.jsx)(n.p,{children:"Width of the generated QR"}),"\n",(0,r.jsx)(n.h4,{id:"523-height",children:"5.2.3. height"}),"\n",(0,r.jsx)(n.p,{children:"Height of the generated QR"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,r.jsx)(n.h3,{id:"61-invoice-capture",children:"6.1 Invoice capture"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,r.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    PhacturasReaderController(CaptureConfigurationData())\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("PhacturasReader: KO - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("PhacturasReader OK: ${result.data}")\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,r.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launchMethod(\n    PhacturasReaderController(CaptureConfigurationData())\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("PhacturasReader: KO - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("PhacturasReader OK: ${result.data}")\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,r.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,r.jsxs)(n.p,{children:["On the other hand, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,r.jsx)(n.h3,{id:"62-qr-capture",children:"6.2 QR capture"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,r.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    QrReaderController(CaptureConfigurationData())\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("QR: KO - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("QR OK: ${result.data}")\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,r.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launchMethod(\n    QrReaderController(CaptureConfigurationData())\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("QR: KO - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("QR OK: ${result.data}")\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,r.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,r.jsxs)(n.p,{children:["On the other hand, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,r.jsx)(n.h3,{id:"63-qr-generator",children:"6.3 QR generator"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,r.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    QrGeneratorController(QrGeneratorConfiguration(""))\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("QrGenerator: KO - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("QrGenerator OK: ${result.data}")\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,r.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launchMethod(\n    QrGeneratorController(QrGeneratorConfiguration(""))\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("QrGenerator: KO - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("QrGenerator OK: ${result.data}")\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,r.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,r.jsxs)(n.p,{children:["On the other hand, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,r.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. More information in the Android Mobile SDK's ",(0,r.jsx)("a",{href:"Mobile_SDK#6-result-return",rel:"nofollow",children:"6. Result return"})," section."]}),"\n",(0,r.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,r.jsxs)(n.p,{children:["On the error side, we will have the ",(0,r.jsx)(n.em,{children:"CaptureError"})," class."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" NO_DATA_ERROR\n TIMEOUT\n CANCEL_BY_USER\n CANCEL_LAUNCH\n CAMERA_ERROR\n QR_GENERATION_ERROR\n ACTIVITY_RESULT_ERROR\n QR_CAPTURE_ERROR\n PHACTURAS_CAPTURE_ERROR\n CAMERA_PERMISSION_DENIED\n INITIALIZATION_ERROR\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"71-receipt-of-correct-execution---data",children:["7.1. ",(0,r.jsx)(n.em,{children:"Receipt of correct execution - data"})]}),"\n",(0,r.jsx)(n.p,{children:"On successful execution, it simply reports that everything went well\nwith the SdkResult.Success."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,r.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,r.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:"Mobile SDK"})}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,r.jsx)(n.h3,{id:"81-texts",children:"8.1. Texts"}),"\n",(0,r.jsx)(n.p,{children:"If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value of\neach String to the desired one."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'    <string name="capture_component_qr_camera_message">Keep the QR in the center</string>\n    <string name="capture_component_invoice_camera_message">Keep bill in the center</string>\n    <string name="capture_component_button_message">Capture</string>\n    <string name="capture_component_timeout_title">Time exceeded</string>\n    <string name="capture_component_timeout_desc">We apologize. The capture could not be made</string>\n    <string name="capture_component_internal_error_title">There was a technical problem</string>\n    <string name="capture_component_internal_error_desc">We apologize. The capture could not be made</string>\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);