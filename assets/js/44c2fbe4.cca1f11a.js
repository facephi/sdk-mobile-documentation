"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7667],{7239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Capture_Component","title":"Capture Component","description":"0. SDK Mobile baseline requirements","source":"@site/ios_versioned_docs/version-2.0.X/Capture_Component.md","sourceDirName":".","slug":"/Capture_Component","permalink":"/sdk-mobile-documentation/docs/ios/2.0.X/Capture_Component","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{}}');var r=t(4848),o=t(8453);const a={},s="Capture Component",l={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:2},{value:"Minimum iOS version: <strong>14</strong>",id:"minimum-ios-version-14",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permissions and settings",id:"22-permissions-and-settings",level:2},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class InvoiceCaptureConfigurationData",id:"51-class-invoicecaptureconfigurationdata",level:3},{value:"5.1.1 vibrationEnabled",id:"511-vibrationenabled",level:4},{value:"5.1.2 showDiagnostic",id:"512-showdiagnostic",level:4},{value:"5.1.3 showTutorial",id:"513-showtutorial",level:4},{value:"5.1.4 timePreview",id:"514-timepreview",level:4},{value:"5.1.5 numUploadPhoto",id:"515-numuploadphoto",level:4},{value:"5.1.6 previewAfterCapture",id:"516-previewaftercapture",level:4},{value:"5.2. Class QrCaptureConfigurationData",id:"52-class-qrcaptureconfigurationdata",level:3},{value:"5.1.1. extractionTimeout",id:"511-extractiontimeout",level:4},{value:"5.1.2. cameraSelected",id:"512-cameraselected",level:4},{value:"5.1.3. cameraShape",id:"513-camerashape",level:4},{value:"5.1.4. vibrationEnabled",id:"514-vibrationenabled",level:4},{value:"5.1.5. showStroke",id:"515-showstroke",level:4},{value:"5.1.6. showDiagnostic",id:"516-showdiagnostic",level:4},{value:"5.1.7. transparentBackground",id:"517-transparentbackground",level:4},{value:"5.3. Class QrGeneratorConfiguration",id:"53-class-qrgeneratorconfiguration",level:3},{value:"5.3.1. source",id:"531-source",level:4},{value:"5.3.2. width",id:"532-width",level:4},{value:"5.3.3. height",id:"533-height",level:4},{value:"5.3.4 showDiagnostic",id:"534-showdiagnostic",level:4},{value:"6. Use of the component",id:"6-use-of-the-component",level:2},{value:"6.1 Invoice capture",id:"61-invoice-capture",level:3},{value:"6.2 QR Capture",id:"62-qr-capture",level:3},{value:"6.3 QR Generation",id:"63-qr-generation",level:3},{value:"7. Reception of the result",id:"7-reception-of-the-result",level:2},{value:"7.1. Error reception",id:"71-error-reception",level:3},{value:"7.2. Successful execution reception - <em>data</em>",id:"72-successful-execution-reception---data",level:3},{value:"7.2.1 Result InvoiceReader",id:"721-result-invoicereader",level:4},{value:"ScannedDocs",id:"scanneddocs",level:5},{value:"8. Component customization",id:"8-component-customization",level:2},{value:"8.1. Texts",id:"81-texts",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"capture-component",children:"Capture Component"})}),"\n",(0,r.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,r.jsx)(n.strong,{children:"Components"}),") that offers a series of functionalities and services\na series of functionalities and services, allowing its integration in a mobile application\nintegration in a Mobile application in a simple and fully scalable way.\nscalable. Depending on the use case required, certain components must be installed. Its high level of modularity allows other new components to be added in the future without affecting those already integrated in the project."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on the base configuration, go to the section on\n",(0,r.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Translated with DeepL.com (free version)"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Capture Component"})}),". It is responsible for the invoice capture and the capture and generation of QRs."]}),"\n",(0,r.jsx)(n.h2,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,r.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,r.jsxs)(n.h2,{id:"minimum-ios-version-14",children:["Minimum iOS version: ",(0,r.jsx)(n.strong,{children:"14"})]}),"\n",(0,r.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the ",(0,r.jsx)("a",{href:"Mobile_SDK",documentation:!0,"data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"})," and follow the instructions indicated in said document."]})}),"\n",(0,r.jsx)(n.p,{children:"This section will explain step by step how to integrate the component\ncurrent in an existing project."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nTo avoid conflicts and compatibility problems, if you want\ninstall the component in a project that contains an old version\nfrom the Facephi libraries (",(0,r.jsx)(n.em,{children:"Widgets"}),"), these must be removed by\ncomplete before installing the components of the\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Currently the FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,r.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (adding them to the project's Podfile file) are:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" pod 'FPHISDKMainComponent', '~> 2.0.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To install the VideoID component, the following entry must be included in the application's Podfile:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  pod 'FPHISDKCaptureComponent', '~>2.0.4'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once the dependencies are installed, you can use the different functionalities of the component."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If developing with ",(0,r.jsx)(n.strong,{children:"xCode15"}),", a post-installation script must be included:\n",(0,r.jsx)(n.img,{alt:"Image",src:t(225).A+"",width:"1834",height:"510"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"22-permissions-and-settings",children:"2.2 Permissions and settings"}),"\n",(0,r.jsxs)(n.p,{children:["In the client application where the components are going to be integrated, it is necessary to incorporate the following elements in the file ",(0,r.jsx)(n.strong,{children:"info.plist"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"It is necessary to allow the use of the camera (Privacy - Camera Usage Description)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,r.jsxs)(n.p,{children:["When you want to perform a certain operation, to generate the associated information correctly on the platform, the ",(0,r.jsx)(n.strong,{children:"newOperation"})," command must be previously executed."]}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been run ",(0,r.jsx)(n.strong,{children:"prior to launching the component"}),"."]}),(0,r.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to consult the ",(0,r.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:" Mobile SDK"})," documentation , which details and explains what this process consists of."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controller"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"InvoiceReaderController"}),(0,r.jsx)(n.td,{children:"Invoice capture controller"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrReaderController"}),(0,r.jsx)(n.td,{children:"QR capture controller"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrGeneratorController"}),(0,r.jsx)(n.td,{children:"QR generator controller"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,r.jsx)(n.p,{children:"The three controllers have independent functionalities so their configurations are also independent:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"InvoiceCaptureConfigurationData"})," and pass it as a parameter to the SDKController during the launch of the component for Invoice."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"QrCaptureConfigurationData"})," and pass it as a parameter to the SDKController during the launch of the QR capture component"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"QrGeneratorConfiguration"})," and pass it as a parameter to the SDKController during the launch of the QR generation component."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following section will show the fields that are part of\nThese classes and what each of them is used for."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-invoicecaptureconfigurationdata",children:"5.1. Class InvoiceCaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-vibrationenabled",children:"5.1.1 vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Enable vibration during the process"}),"\n",(0,r.jsx)(n.h4,{id:"512-showdiagnostic",children:"5.1.2 showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Show diagnostic screens at the end of the process and in case of error"}),"\n",(0,r.jsx)(n.h4,{id:"513-showtutorial",children:"5.1.3 showTutorial"}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether the component activates the tutorial screen. This view explains intuitively how the capture is performed."}),"\n",(0,r.jsx)(n.h4,{id:"514-timepreview",children:"5.1.4 timePreview"}),"\n",(0,r.jsx)(n.p,{children:"The time in milliseconds that the preview lasts after the capture is defined, by default it is 2000"}),"\n",(0,r.jsx)(n.h4,{id:"515-numuploadphoto",children:"5.1.5 numUploadPhoto"}),"\n",(0,r.jsx)(n.p,{children:"Number of images that can be added from the gallery, by default it is 5"}),"\n",(0,r.jsx)(n.h4,{id:"516-previewaftercapture",children:"5.1.6 previewAfterCapture"}),"\n",(0,r.jsx)(n.p,{children:"Preview is enabled after capture"}),"\n",(0,r.jsx)(n.h3,{id:"52-class-qrcaptureconfigurationdata",children:"5.2. Class QrCaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-extractiontimeout",children:"5.1.1. extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Maximum extraction time"}),"\n",(0,r.jsx)(n.h4,{id:"512-cameraselected",children:"5.1.2. cameraSelected"}),"\n",(0,r.jsx)(n.p,{children:"Selected camera: FRONT, BACK"}),"\n",(0,r.jsx)(n.h4,{id:"513-camerashape",children:"5.1.3. cameraShape"}),"\n",(0,r.jsx)(n.p,{children:"Shape of the mask that you want to show on the camera:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQUARE: Square"}),"\n",(0,r.jsx)(n.li,{children:"CIRCULAR: Circle"}),"\n",(0,r.jsx)(n.li,{children:"RECTANGLE_TALL: Rectangle"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"514-vibrationenabled",children:"5.1.4. vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Enable vibration during the process"}),"\n",(0,r.jsx)(n.h4,{id:"515-showstroke",children:"5.1.5. showStroke"}),"\n",(0,r.jsx)(n.p,{children:"Show a line as camera border"}),"\n",(0,r.jsx)(n.h4,{id:"516-showdiagnostic",children:"5.1.6. showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Show diagnostic screens at the end of the process and in case of error"}),"\n",(0,r.jsx)(n.h4,{id:"517-transparentbackground",children:"5.1.7. transparentBackground"}),"\n",(0,r.jsx)(n.p,{children:"Mask over the semi-transparent camera"}),"\n",(0,r.jsx)(n.h3,{id:"53-class-qrgeneratorconfiguration",children:"5.3. Class QrGeneratorConfiguration"}),"\n",(0,r.jsx)(n.h4,{id:"531-source",children:"5.3.1. source"}),"\n",(0,r.jsx)(n.p,{children:"Text to be included in the QR"}),"\n",(0,r.jsx)(n.h4,{id:"532-width",children:"5.3.2. width"}),"\n",(0,r.jsx)(n.p,{children:"Width of the generated QR"}),"\n",(0,r.jsx)(n.h4,{id:"533-height",children:"5.3.3. height"}),"\n",(0,r.jsx)(n.p,{children:"Height of the generated QR"}),"\n",(0,r.jsx)(n.h4,{id:"534-showdiagnostic",children:"5.3.4 showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Show diagnostic screens at the end of the process and in case of error"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-use-of-the-component",children:"6. Use of the component"}),"\n",(0,r.jsx)(n.h3,{id:"61-invoice-capture",children:"6.1 Invoice capture"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created (",(0,r.jsx)(n.strong,{children:"section\n3"}),") the SDK components can be launched. There are two ways to launch\nthe component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows launching the functionality\nof the component normally, but the events will be tracked\ninternal to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows launching the functionality\nof the component normally, but ",(0,r.jsx)(n.strong,{children:"will not be tracked"})," any\nevent to ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,r.jsx)(n.strong,{children:"launch"})," method should be used ",(0,r.jsx)(n.strong,{children:"by default"}),". This method allows\nuse ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," if its component is activated, and do not\nwill be used when it is disabled (or the component is not found\ninstalled)."]}),(0,r.jsxs)(n.p,{children:["On the contrary, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application you do not want to track information.\nIn that case, this method is used to prevent that information from being sent.\nto the platform."]})]}),"\n",(0,r.jsx)(n.h3,{id:"62-qr-capture",children:"6.2 QR Capture"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created (",(0,r.jsx)(n.strong,{children:"section\n3"}),") the SDK components can be launched. There are two ways to launch\nthe component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows launching the functionality\nof the component normally, but the events will be tracked\ninternal to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n\n SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows launching the functionality\nof the component normally, but ",(0,r.jsx)(n.strong,{children:"will not be tracked"})," any\nevent to ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n SDKController.shared.launchMethod(controller: controller)\n\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,r.jsx)(n.strong,{children:"launch"})," method should be used ",(0,r.jsx)(n.strong,{children:"by default"}),". This method allows\nuse ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," if its component is activated, and do not\nwill be used when it is disabled (or the component is not found\ninstalled)."]}),(0,r.jsxs)(n.p,{children:["On the contrary, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application you do not want to track information.\nIn that case, this method is used to prevent that information from being sent.\nto the platform."]})]}),"\n",(0,r.jsx)(n.h3,{id:"63-qr-generation",children:"6.3 QR Generation"}),"\n",(0,r.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created (",(0,r.jsx)(n.strong,{children:"section\n3"}),") the SDK components can be launched. There are two ways to launch\nthe component:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows launching the functionality\nof the component normally, but the events will be tracked\ninternal to the ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows launching the functionality\nof the component normally, but ",(0,r.jsx)(n.strong,{children:"will not be tracked"})," any\nevent to ",(0,r.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n SDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,r.jsx)(n.strong,{children:"launch"})," method should be used ",(0,r.jsx)(n.strong,{children:"by default"}),". This method allows\nuse ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," if its component is activated, and do not\nwill be used when it is disabled (or the component is not found\ninstalled)."]}),(0,r.jsxs)(n.p,{children:["On the contrary, the ",(0,r.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application you do not want to track information.\nIn that case, this method is used to prevent that information from being sent.\nto the platform."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-reception-of-the-result",children:"7. Reception of the result"}),"\n",(0,r.jsxs)(n.p,{children:["The controllers will return the necessary information in SdkResult format. More information in the [",(0,r.jsx)("a",{href:"ES_Mobile_SDK",section:!0,"data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"71-error-reception",children:"7.1. Error reception"}),"\n",(0,r.jsxs)(n.p,{children:["In the error part, we will have the ",(0,r.jsx)(n.em,{children:"CaptureError"})," class."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" NO_DATA_ERROR\n TIMEOUT\n CANCEL_BY_USER\n CANCEL_LAUNCH\n CAMERA_ERROR\n QR_GENERATION_ERROR\n ACTIVITY_RESULT_ERROR\n QR_CAPTURE_ERROR\n PHACTURAS_CAPTURE_ERROR\n CAMERA_PERMISSION_DENIED\n INITIALIZATION_ERROR\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"72-successful-execution-reception---data",children:["7.2. Successful execution reception - ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsx)(n.p,{children:"On successful execution, it simply reports that everything went well\nwith the SdkResult.Success."}),"\n",(0,r.jsx)(n.h4,{id:"721-result-invoicereader",children:"7.2.1 Result InvoiceReader"}),"\n",(0,r.jsx)(n.h5,{id:"scanneddocs",children:"ScannedDocs"}),"\n",(0,r.jsx)(n.p,{children:"Array of scanned documents:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"image: UIImage."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"date: Date."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-component-customization",children:"8. Component customization"}),"\n",(0,r.jsxs)(n.p,{children:["Apart from the changes that can be made at the SDK level (which\nare explained in the ",(0,r.jsx)("a",{href:"ES_Mobile_SDK",document:!0,"data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:(0,r.jsx)("u",{children:" Mobile\nSDK"})})}),"), this particular component allows the\nmodification of specific texts."]}),"\n",(0,r.jsx)(n.h3,{id:"81-texts",children:"8.1. Texts"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value\nof each ",(0,r.jsx)(n.em,{children:"String"})," by the desired one."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'"qr_reader_component_exit_alert_question"="Are you sure you will finish the process?";\n"qr_reader_component_camera_message_circle"="Keep the QR inside the circle";\n"qr_reader_component_camera_message_square"="Keep the QR inside the square";\n"invoice_reader_component_camera_message_circle"="Keep the document inside the circle";\n"invoice_reader_component_camera_message_square"="Keep the document inside the square";\n"capture_component_camera_unauthorized_title"="Camara unauthorized";\n"capture_component_camera_unauthorized_description"="It seems you haven\'t given this app permission to use the camera. Please go to Settings and enable it.";\n"capture_component_image_capture_error"="Image capture error";\n"capture_component_preview_image"="Captured image preview";\n"capture_component_take_again"="Capture again";\n"capture_component_accept"="Accept";\n"capture_component_capture"="Capture";\n"capture_component_ok"="Ok";\n"capture_component_cancel"="Cancel";\n"capture_component_end_confirmation_title" = "Are you sure you will finish the process?";\n"capture_component_text_results_finish_button" = "Finish";\n"capture_component_agree" = "Accept";\n"capture_component_finish" = "FINISH";\n"capture_component_remove_confirmation_title" = "Do you want to delete this document?";\n"capture_component_image" = "Image ";\n"capture_component_retry" = "NO, I WANT TO REPEAT THE PHOTOGRAPH";\n"capture_component_tutorial_tittle" = "Scan your documents";\n"capture_component_tutorial_description" = "Take a picture of the document, or upload an image. /n You can scan several documents before finishing";\n"capture_component_tutorial_button" = "CONTINUE";\n\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},225:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);