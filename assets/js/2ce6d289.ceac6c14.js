"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[108],{5010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(4848),r=t(8453);const s={},o="Phingers Component",a={id:"Phingers_Component",title:"Phingers Component",description:"0. SDK Mobile base requirements",source:"@site/ios_versioned_docs/version-1.5.x/Phingers_Component.md",sourceDirName:".",slug:"/Phingers_Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.x/Phingers_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.x",frontMatter:{},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/sdk-mobile-documentation/docs/ios/1.5.x/Mobile_SDK"},next:{title:"Tracking Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.x/Tracking_Component"}},l={},c=[{value:"0. SDK Mobile base requirements",id:"0-sdk-mobile-base-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"2.2 Permissions and settings",id:"22-permissions-and-settings",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1 Class PhingersConfigurationData",id:"51-class-phingersconfigurationdata",level:3},{value:"5.1.1 reticleOrientation",id:"511-reticleorientation",level:4},{value:"5.1.2 extractionTimeout",id:"512-extractiontimeout",level:4},{value:"5.1.3 returnWSQ",id:"513-returnwsq",level:4},{value:"5.1.4 returnRawImage",id:"514-returnrawimage",level:4},{value:"5.1.5 returnProcessedImage",id:"515-returnprocessedimage",level:4},{value:"5.1.6 returnFingerprintTemplate",id:"516-returnfingerprinttemplate",level:4},{value:"5.1.7 returnFullFrameImage",id:"517-returnfullframeimage",level:4},{value:"5.1.8 useLiveness",id:"518-useliveness",level:4},{value:"5.1.9 useFlash",id:"519-useflash",level:4},{value:"5.1.10 captureFingersText",id:"5110-capturefingerstext",level:4},{value:"5.1.11 captureThumbText",id:"5111-capturethumbtext",level:4},{value:"5.1.12 thumbNotInFocusText",id:"5112-thumbnotinfocustext",level:4},{value:"5.1.13 captureFingerText",id:"5113-capturefingertext",level:4},{value:"6. Use of the component",id:"6-use-of-the-component",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.2 Receipt of correct execution - <em>data</em>",id:"72-receipt-of-correct-execution---data",level:3},{value:"7.2.1 <em>focusQuality</em>.",id:"721-focusquality",level:4},{value:"7.2.2 <em>fullFrameImage</em>",id:"722-fullframeimage",level:4},{value:"7.2.3 <em>livenessConfidence</em>",id:"723-livenessconfidence",level:4},{value:"7.2.4 <em>fingersResult</em>.",id:"724-fingersresult",level:4},{value:"7.2.4.1 wsq",id:"7241-wsq",level:4},{value:"7.2.4.2 fingerprintTemplate",id:"7242-fingerprinttemplate",level:4},{value:"7.2.4.3 rawFingerprintImage",id:"7243-rawfingerprintimage",level:4},{value:"7.2.4.4 processedFingerprintImage",id:"7244-processedfingerprintimage",level:4},{value:"7.2.4.5 nfiqMetrics",id:"7245-nfiqmetrics",level:4},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1 Texts",id:"81-texts",level:3}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-sdk-mobile-base-requirements",children:"0. SDK Mobile base requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,i.jsx)(n.strong,{children:"Components"}),") that provides a set of functionalities and services\na series of functionalities and services, allowing its integration in a Mobile application in a\nintegration into a Mobile application in a simple and fully scalable way.\nscalable. Depending on the use case that is required, certain components must be installed.\nDepending on the required use case, certain components must be installed. Its high level of\nof modularity means that other new components can be added in the future\nnew components can be added in the future without affecting those already integrated in the project.\nproject."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"})," section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The component discussed in the current document is called ",(0,i.jsx)(n.strong,{children:"Phingers\nComponent"}),". It is in charge of capturing the user's fingerprints and\nthe subsequent extraction of the subsequent fingerprint templates. Its\nmain functionalities are as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Two modes of operation: extraction of the four fingers of the hand (except for the thumb), or\n(except the thumb), or extraction of the thumb only."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Internal camera management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Permission management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Built-in vividness detection."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Assistant in fingerprint capture processes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generation of templates with fingerprint characteristics, images and\nscores."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,i.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Minimum iOS version: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended that you read the documentation\ndocumentation for the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)("u",{children:"Core Component"})})," and follow the instructions\nindicated in this document."]})}),"\n",(0,i.jsx)(n.p,{children:"This section will explain step by step how to integrate the current component into an existing project.\ncomponent into an existing project."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nTo avoid conflicts and compatibility problems, if you want to install\nthe component in a project containing an old Facephi libraries\n(",(0,i.jsx)(n.em,{children:"Widgets"}),") version, these must be removed entirely before installing\nthe ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," components."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Currently FacePhi libraries are distributed remotely through\ndifferent dependency managers, in this case Cocoapods.\nThe ",(0,i.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed\n(adding them to the project's Podfile file) are:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The mandatory dependencies that must have been previously installed (adding them to the project's Podfile file) are:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To install the current component, the following entry must be included in the ",(0,i.jsx)(n.em,{children:"Podfile"})," of the project\nentry in the ",(0,i.jsx)(n.em,{children:"Podfile"})," of the application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKPhingersComponent', '~> 1.5.0'\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the dependencies have been installed, you will be able to use the different\ndifferent functionalities of the component."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-permissions-and-settings",children:"2.2 Permissions and settings"}),"\n",(0,i.jsxs)(n.p,{children:["In the client application where the components are going to be integrated, it is necessary to incorporate the following elements in the file ",(0,i.jsx)(n.strong,{children:"info.plist"}),".\nthe following elements need to be incorporated in the ",(0,i.jsx)(n.strong,{children:"info.plist"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"It is necessary to allow the use of the camera (Privacy - Camera Usage Description)\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,i.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,i.jsxs)("div",{class:"note",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,i.jsx)(n.strong,{children:"before launch"}),"."]}),(0,i.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"}),", which details and explains what this process consists of."]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Controller"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Description"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PhingersController"}),(0,i.jsx)(n.td,{children:"Main fingerprint capture controller"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,i.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, you need to\ncreate a ",(0,i.jsx)(n.em,{children:"PhingersConfigurationData"})," object and pass it as a parameter to the\nSDKController during the component launch."]}),"\n",(0,i.jsx)(n.p,{children:"The following section will show the fields that are part of this class and what each one is used for.\nclass and what each of them is used for."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-phingersconfigurationdata",children:"5.1 Class PhingersConfigurationData"}),"\n",(0,i.jsx)(n.h4,{id:"511-reticleorientation",children:"5.1.1 reticleOrientation"}),"\n",(0,i.jsx)(n.p,{children:"Sets the fingerprint detection mode and indicates which fingers are to\nbe detected during the process. The allowed values are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LEFT"}),": Enables the capture of the ",(0,i.jsx)(n.strong,{children:"four"})," ",(0,i.jsx)(n.strong,{children:"fingers"})," of the\n",(0,i.jsx)(n.strong,{children:"left"})," ",(0,i.jsx)(n.strong,{children:"hand"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RIGHT"}),": Enables the capture of the ",(0,i.jsx)(n.strong,{children:"four"})," ",(0,i.jsx)(n.strong,{children:"fingers"})," of the\n",(0,i.jsx)(n.strong,{children:"left"})," ",(0,i.jsx)(n.strong,{children:"hand"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"THUMB"}),": The capture of a ",(0,i.jsx)(n.strong,{children:"thumb"})," is activated."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"512-extractiontimeout",children:"5.1.2 extractionTimeout"}),"\n",(0,i.jsx)(n.p,{children:"Sets a stabilisation mode prior to any authentication process in the widget.\nauthentication process in the widget. This mode forces the widget to not\nstart any process if the user is not facing forward and not moving his head.\nhead facing forward and not moving it."}),"\n",(0,i.jsx)(n.h4,{id:"513-returnwsq",children:"5.1.3 returnWSQ"}),"\n",(0,i.jsxs)(n.p,{children:["If set to ",(0,i.jsx)(n.strong,{children:"true"})," then in the result of the capture it will\nwill return, for each of the footprints, the compressed data by means of\nWavelet Scalar Quatization_ (WSQ). WSQ is a grey compression algorithm, being a standard (N\nbeing a standard (NIST) for this type of captures. Oriented\nvalidation against the different existing governmental databases.\ndatabases."]}),"\n",(0,i.jsx)(n.h4,{id:"514-returnrawimage",children:"5.1.4 returnRawImage"}),"\n",(0,i.jsxs)(n.p,{children:["If set to ",(0,i.jsx)(n.strong,{children:"true"})," it shall return in the result the images in the same form as they have been captured.\nthe same form in which they have been captured."]}),"\n",(0,i.jsx)(n.h4,{id:"515-returnprocessedimage",children:"5.1.5 returnProcessedImage"}),"\n",(0,i.jsxs)(n.p,{children:["If set to ",(0,i.jsx)(n.strong,{children:"true"})," it shall return the images in the result as they were captured.\nthe same form in which they have been captured."]}),"\n",(0,i.jsx)(n.h4,{id:"516-returnfingerprinttemplate",children:"5.1.6 returnFingerprintTemplate"}),"\n",(0,i.jsxs)(n.p,{children:["Specifies whether the capture process shall return the fingerprint template in the result.\nthe result. It is an enumerated of type ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"FingerprintTemplateType"})}),", and\neach value would be:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ISO"}),": This template type refers to the standard ",(0,i.jsx)(n.strong,{children:"ISO/IEC\n19794-4"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"INNOVATRICS"}),": This type of template is a proprietary template\ntemplate, compatible with scaling change, and very useful for different validation processes.\nvalidation processes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NONE"}),": Template return is disabled."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"517-returnfullframeimage",children:"5.1.7 returnFullFrameImage"}),"\n",(0,i.jsx)(n.p,{children:"Specifies whether to return the full image of the camera where the fingers have been detected.\nfingers have been detected."}),"\n",(0,i.jsx)(n.h4,{id:"518-useliveness",children:"5.1.8 useLiveness"}),"\n",(0,i.jsxs)(n.p,{children:["Enables or disables the liveness detector during the fingerprint capture process.\ncapture process. Defaults to ",(0,i.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"519-useflash",children:"5.1.9 useFlash"}),"\n",(0,i.jsxs)(n.p,{children:["Enables or disables the camera flash during the fingerprint capture process.\nprocess. Defaults to ",(0,i.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"5110-capturefingerstext",children:"5.1.10 captureFingersText"}),"\n",(0,i.jsx)(n.p,{children:"Sets the message (string) that is displayed on the screen after the four fingers have been\ndetected and the user shall be instructed not to move them."}),"\n",(0,i.jsx)(n.h4,{id:"5111-capturethumbtext",children:"5.1.11 captureThumbText"}),"\n",(0,i.jsx)(n.p,{children:"Sets the message (string) to be displayed on the screen after the thumb has been detected and the user shall be prompted not to move the thumb.\ndetected and the user shall be prompted not to move it."}),"\n",(0,i.jsx)(n.h4,{id:"5112-thumbnotinfocustext",children:"5.1.12 thumbNotInFocusText"}),"\n",(0,i.jsx)(n.p,{children:"Sets the message (string) that is displayed on the screen while attempting to\nattempted"}),"\n",(0,i.jsx)(n.h4,{id:"5113-capturefingertext",children:"5.1.13 captureFingerText"}),"\n",(0,i.jsx)(n.p,{children:"Sets the message (string) displayed on screen during the thumb capture process.\nthumb capture process."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-use-of-the-component",children:"6. Use of the component"}),"\n",(0,i.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,i.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,i.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,i.jsxs)("div",{class:"warning",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,i.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,i.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),(0,i.jsxs)(n.p,{children:["On the other hand, the ",(0,i.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,i.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. More information in the ",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK's"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"NO_OPERATION_CREATED_ERROR\nCOMPONENT_CONTROLLER_DATA_ERROR\nCAMERA_PERMISSION_DENIED\nLICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE\nERROR_CAPTURE_SUCCESS_WITHOUT_RESULT\nCAMERA_PERMISSION_DENIED\nCANCEL_BY_USER\nTIMEOUT\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"72-receipt-of-correct-execution---data",children:["7.2 Receipt of correct execution - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsxs)(n.p,{children:["The result returns the images in ",(0,i.jsx)(n.strong,{children:"Bitmap"})," format, it is possible to\nconvert the images to ",(0,i.jsx)(n.strong,{children:"Base64"})," as follows:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"data"})," field is variable and will depend on which component the result was returned.\nthe result has been returned. In the case of this component, the returned fields are\nthe following:"]}),"\n",(0,i.jsxs)(n.h4,{id:"721-focusquality",children:["7.2.1 ",(0,i.jsx)(n.em,{children:"focusQuality"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the best image extracted from the authentication process in\nBase64 string format. This image is the original size image\nextracted from the camera. Valid for the ",(0,i.jsx)(n.strong,{children:"liveness"})," process."]}),"\n",(0,i.jsxs)(n.h4,{id:"722-fullframeimage",children:["7.2.2 ",(0,i.jsx)(n.em,{children:"fullFrameImage"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns a cropped image centred on the user's face in Base64 string format.\nstring Base64 format. This image is obtained from the ",(0,i.jsx)(n.em,{children:"bestImage"}),". This\nis the image that shall be used as the characteristic image of the\nuser who performed the process as the ",(0,i.jsx)(n.em,{children:"avatar"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"723-livenessconfidence",children:["7.2.3 ",(0,i.jsx)(n.em,{children:"livenessConfidence"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the best image extracted from the authentication process in\nBitmap format. This image is the original size image extracted from the camera.\nfrom the camera. Valid for the ",(0,i.jsx)(n.strong,{children:"liveness"})," process."]}),"\n",(0,i.jsxs)(n.h4,{id:"724-fingersresult",children:["7.2.4 ",(0,i.jsx)(n.em,{children:"fingersResult"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This is a list of ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"FingerResult"})})," objects, containing all the information associated with each finger.\ninformation associated with each of the captured fingers."]}),"\n",(0,i.jsx)(n.h4,{id:"7241-wsq",children:"7.2.4.1 wsq"}),"\n",(0,i.jsx)(n.p,{children:"The fingerprint capture is returned in WSQ format."}),"\n",(0,i.jsx)(n.h4,{id:"7242-fingerprinttemplate",children:"7.2.4.2 fingerprintTemplate"}),"\n",(0,i.jsx)(n.p,{children:"Returns the fingerprint template, used for further validation."}),"\n",(0,i.jsx)(n.h4,{id:"7243-rawfingerprintimage",children:"7.2.4.3 rawFingerprintImage"}),"\n",(0,i.jsx)(n.p,{children:"Returns the raw, unmodified image of the current fingerprint."}),"\n",(0,i.jsx)(n.h4,{id:"7244-processedfingerprintimage",children:"7.2.4.4 processedFingerprintImage"}),"\n",(0,i.jsx)(n.p,{children:"Returns the processed fingerprint image."}),"\n",(0,i.jsx)(n.h4,{id:"7245-nfiqmetrics",children:"7.2.4.5 nfiqMetrics"}),"\n",(0,i.jsx)(n.p,{children:"These are the metrics of the capture. Currently the following is returned.\nvalue:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"nfiqMetric**: An integer value, between 1 and 5 (inclusive),\nindicating the quality of the fingerprint capture, with 1 indicating the highest quality and 5 the worst quality.\nindicates the highest quality and 5 the worst quality. Fingerprints with the latter value\nThe latter value is usually discarded for further validation."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:"Mobile SDK"})}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,i.jsx)(n.h3,{id:"81-texts",children:"8.1 Texts"}),"\n",(0,i.jsx)(n.p,{children:"If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value of\neach String to the desired one."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\x3c!-- PHINGERS --\x3e\n"phingers_component_tutorial_title_left" = "Left hand prints.";\n"phingers_component_tutorial_title_right" = "Right hand prints.";\n"phingers_component_tutorial_title_thumb" = "Thumbprints.";\n"phingers_component_action_text" = "Begin";\n"phingers_component_tutorial_description" = "Put your fingers together. Move your hand closer or lower until your fingerprints are in focus.";\n"phingers_component_capture_phingers" = "Hold fingers steady";\n"phingers_component_capture_thumb" = "Hold finger steady";\n"phingers_component_capture_phingers_not_focus" = "Move fingers until in focus";\n"phingers_component_capture_thumb_not_focus" = "Move finger until in focus";\n"phingers_component_ok"="Ok";\n"phingers_component_cancel"="Cancel";\n"phingers_component_end_confirmation_title" = "Are you sure you will finish the process?";\n"phingers_component_text_results_finish_button" = "Finish";\n"phingers_component_agree" = "Accept";\n---\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);