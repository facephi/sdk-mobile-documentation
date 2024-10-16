"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5291],{9839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(4848),i=t(8453);const o={},s="Capture Component",a={id:"Capture_Component",title:"Capture Component",description:"0. SDK Mobile base requirements",source:"@site/ios_versioned_docs/version-2.2.X/Capture_Component.md",sourceDirName:".",slug:"/Capture_Component",permalink:"/sdk-mobile-documentation/docs/ios/Capture_Component",draft:!1,unlisted:!1,tags:[],version:"2.2.X",frontMatter:{}},l={},c=[{value:"0. SDK Mobile base requirements",id:"0-sdk-mobile-base-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permissions and configurations",id:"22-permissions-and-configurations",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class CaptureConfigurationData",id:"51-class-captureconfigurationdata",level:3},{value:"5.1.1 Basic Configuration",id:"511-basic-configuration",level:4},{value:"extractionTimeout",id:"extractiontimeout",level:5},{value:"cameraSelected",id:"cameraselected",level:5},{value:"vibrationEnabled",id:"vibrationenabled",level:5},{value:"cameraShape",id:"camerashape",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"5.1.2 Advanced Settings",id:"512-advanced-settings",level:4},{value:"showStroke",id:"showstroke",level:5},{value:"showDiagnostic",id:"showdiagnostic-1",level:5},{value:"transparentBackground",id:"transparentbackground",level:5},{value:"5.2. Class QrGeneratorConfiguration",id:"52-class-qrgeneratorconfiguration",level:3},{value:"source",id:"source",level:5},{value:"width",id:"width",level:5},{value:"height",id:"height",level:5},{value:"6. Use of the component",id:"6-use-of-the-component",level:2},{value:"6.1 Invoice capture",id:"61-invoice-capture",level:3},{value:"6.2 QR capture",id:"62-qr-capture",level:3},{value:"6.3 QR generation",id:"63-qr-generation",level:3},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Error reception",id:"71-error-reception",level:3},{value:"7.2. Successful execution reception - <em>data</em>",id:"72-successful-execution-reception---data",level:3},{value:"8. Component customization",id:"8-component-customization",level:2},{value:"8.1. text",id:"81-text",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"capture-component",children:"Capture Component"})}),"\n",(0,r.jsx)(n.h2,{id:"0-sdk-mobile-base-requirements",children:"0. SDK Mobile base requirements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on the base configuration, go to the ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#11-minimum-requirements",children:"Getting Started"})," section."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Capture Component"})}),". It is responsible for the invoice capture and the capture and generation of QRs."]}),"\n",(0,r.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,r.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,r.jsxs)(n.p,{children:["Minimum iOS version: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the\ndocumentation related to ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#2-initial-integration",children:"Initial Integration"})," and follow the instructions given in that document."]})}),"\n",(0,r.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,r.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,r.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,r.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,r.jsx)(n.strong,{children:"required"})," dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To install the Capture component, the following entry must be included in the Podfile of the application:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  pod 'FPHISDKCaptureComponent', '~> 1.5.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In case of development with ",(0,r.jsx)(n.strong,{children:"xCode15"})," a post-installation script must be included:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:t(225).A+"",width:"1834",height:"510"})}),"\n",(0,r.jsx)(n.h3,{id:"22-permissions-and-configurations",children:"2.2 Permissions and configurations"}),"\n",(0,r.jsx)(n.p,{children:"In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"It is necessary to allow the use of the camera (Privacy - Camera Usage Description)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,r.jsxs)(n.p,{children:["In order to generate the associated information correctly in the platform, the ",(0,r.jsx)(n.strong,{children:"newOperation"})," command must be executed first."]}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,r.jsx)(n.strong,{children:"before launch"}),".\nTo learn more about how to start a new operation, it is recommended to consult the ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#4-start-a-new-operation",children:"Start a new operation"})," documentation, which details and explains what this process consists of."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controller"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PhacturasReaderController"}),(0,r.jsx)(n.td,{children:"Invoice capture controller"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrReaderController"}),(0,r.jsx)(n.td,{children:"QR capture controller"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrGeneratorController"}),(0,r.jsx)(n.td,{children:"QR generator controller"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,r.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, the following must be done\nCreate a ",(0,r.jsx)(n.em,{children:"CaptureConfigurationData"})," object and pass it as a parameter to the SDKController during the launch of the capture component."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.em,{children:"QrGeneratorConfiguration"})," object shall be created and passed as a parameter to the SDKController\nduring the launch of the QR generation component."]}),"\n",(0,r.jsx)(n.p,{children:"The following section will show the fields that are part of these classes and what they are used for.\nand what each of them is used for."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-captureconfigurationdata",children:"5.1. Class CaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-basic-configuration",children:"5.1.1 Basic Configuration"}),"\n",(0,r.jsx)(n.h5,{id:"extractiontimeout",children:"extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Maximum extraction time"}),"\n",(0,r.jsx)(n.h5,{id:"cameraselected",children:"cameraSelected"}),"\n",(0,r.jsx)(n.p,{children:"Camera selected: FRONT, BACK"}),"\n",(0,r.jsx)(n.h5,{id:"vibrationenabled",children:"vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Enable vibration during processing"}),"\n",(0,r.jsx)(n.h5,{id:"camerashape",children:"cameraShape"}),"\n",(0,r.jsx)(n.p,{children:"Shape of the mask to be displayed on the camera:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQUARE: Square"}),"\n",(0,r.jsx)(n.li,{children:"CIRCULAR: Circle"}),"\n",(0,r.jsx)(n.li,{children:"RECTANGLE_TALL: Rectangle"}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Show diagnostic screens at the end of the process"}),"\n",(0,r.jsx)(n.h4,{id:"512-advanced-settings",children:"5.1.2 Advanced Settings"}),"\n",(0,r.jsx)(n.h5,{id:"showstroke",children:"showStroke"}),"\n",(0,r.jsx)(n.p,{children:"Show a line as camera border"}),"\n",(0,r.jsx)(n.h5,{id:"showdiagnostic-1",children:"showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Display diagnostic screens at the end of the process"}),"\n",(0,r.jsx)(n.h5,{id:"transparentbackground",children:"transparentBackground"}),"\n",(0,r.jsx)(n.p,{children:"Semi-transparent mask"}),"\n",(0,r.jsx)(n.h3,{id:"52-class-qrgeneratorconfiguration",children:"5.2. Class QrGeneratorConfiguration"}),"\n",(0,r.jsx)(n.h5,{id:"source",children:"source"}),"\n",(0,r.jsx)(n.p,{children:"Text to be included in the QR"}),"\n",(0,r.jsx)(n.h5,{id:"width",children:"width"}),"\n",(0,r.jsx)(n.p,{children:"Width of the generated QR"}),"\n",(0,r.jsx)(n.h5,{id:"height",children:"height"}),"\n",(0,r.jsx)(n.p,{children:"Height of the generated QR"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-use-of-the-component",children:"6. Use of the component"}),"\n",(0,r.jsx)(n.h3,{id:"61-invoice-capture",children:"6.1 Invoice capture"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,r.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"   let controller = InvoiceReaderController(output: output, viewController: viewController)\n   SDKController.shared.launch(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,r.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"   let controller = InvoiceReaderController(output: output, viewController: viewController)\n   SDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,r.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,r.jsxs)(n.p,{children:["On the other hand, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,r.jsx)(n.h3,{id:"62-qr-capture",children:"6.2 QR capture"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,r.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n        SDKController.shared.launch(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,r.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n        SDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,r.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,r.jsxs)(n.p,{children:["On the other hand, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,r.jsx)(n.h3,{id:"63-qr-generation",children:"6.3 QR generation"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,r.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n        SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,r.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n        SDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,r.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,r.jsxs)(n.p,{children:["On the other hand, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,r.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult format. More details in the ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#6-result-return",children:"Result Return"})," section."]}),"\n",(0,r.jsx)(n.h3,{id:"71-error-reception",children:"7.1. Error reception"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"NO_OPERATION_CREATED_ERROR\nCAMERA_PERMISSION_DENIED\nCANCEL_BY_USER\nTIMEOUT\nINTERNAL_ERROR\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"72-successful-execution-reception---data",children:["7.2. Successful execution reception - ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsx)(n.p,{children:"On successful execution, it simply reports that everything went well\nwith the SdkResult.Success."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-component-customization",children:"8. Component customization"}),"\n",(0,r.jsx)(n.h3,{id:"81-text",children:"8.1. text"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'"qr_reader_component_exit_alert_question"="Are you sure you will finish the process?";\n"qr_reader_component_camera_message_circle"="Keep the QR inside the circle";\n"qr_reader_component_camera_message_square"="Keep the QR inside the square";\n"invoice_reader_component_camera_message_circle"="Keep the document inside the circle";\n"invoice_reader_component_camera_message_square"="Keep the document inside the square";\n"capture_component_camera_unauthorized_title"="Camara unauthorized";\n"capture_component_camera_unauthorized_description"="It seems you haven\'t given this app permission to use the camera. Please go to Settings and enable it.";\n"capture_component_image_capture_error"="Image capture error";\n"capture_component_preview_image"="Captured image preview";\n"capture_component_take_again"="Capture again";\n"capture_component_accept"="Accept";\n"capture_component_capture"="Capture";\n"capture_component_ok"="Ok";\n"capture_component_cancel"="Cancel";\n"capture_component_end_confirmation_title" = "Are you sure you will finish the process?";\n"capture_component_text_results_finish_button" = "Finish";\n"capture_component_agree" = "Accept";\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},225:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);