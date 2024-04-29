"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[438],{6078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=t(4848),r=t(8453);const s={},o="Phingers Component",a={id:"Phingers_Component",title:"Phingers Component",description:"0. SDK Mobile base requirements",source:"@site/docs/ios/Phingers_Component.md",sourceDirName:".",slug:"/Phingers_Component",permalink:"/sdk-mobile-documentation/docs/ios/Phingers_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Behavior_Component",permalink:"/sdk-mobile-documentation/docs/ios/Behavior_Component"},next:{title:"Capture Component",permalink:"/sdk-mobile-documentation/docs/ios/Capture_Component"}},l={},h=[{value:"0. SDK Mobile base requirements",id:"0-sdk-mobile-base-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"2.2 Permissions and settings",id:"22-permissions-and-settings",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Component configuration",id:"4-component-configuration",level:2},{value:"4.1 Class PhingersConfigurationData",id:"41-class-phingersconfigurationdata",level:3},{value:"4.1.1 reticleOrientation",id:"411-reticleorientation",level:4},{value:"4.1.2 extractionTimeout",id:"412-extractiontimeout",level:4},{value:"4.1.3 returnWSQ",id:"413-returnwsq",level:4},{value:"4.1.4 returnRawImage",id:"414-returnrawimage",level:4},{value:"4.1.5 returnProcessedImage",id:"415-returnprocessedimage",level:4},{value:"4.1.6 returnFingerprintTemplate",id:"416-returnfingerprinttemplate",level:4},{value:"4.1.7 returnFullFrameImage",id:"417-returnfullframeimage",level:4},{value:"4.1.8 useLiveness",id:"418-useliveness",level:4},{value:"4.1.9 useFlash",id:"419-useflash",level:4},{value:"4.1.10 captureFingersText",id:"4110-capturefingerstext",level:4},{value:"4.1.11 captureThumbText",id:"4111-capturethumbtext",level:4},{value:"4.1.12 thumbNotInFocusText",id:"4112-thumbnotinfocustext",level:4},{value:"4.1.13 captureFingerText",id:"4113-capturefingertext",level:4},{value:"5. Use of the component",id:"5-use-of-the-component",level:2},{value:"6. Receipt of the result",id:"6-receipt-of-the-result",level:2},{value:"6.1 Content of the <em>data</em> field",id:"61-content-of-the-data-field",level:3},{value:"6.1.1 <em>focusQuality</em>.",id:"611-focusquality",level:4},{value:"6.1.2 <em>fullFrameImage</em>",id:"612-fullframeimage",level:4},{value:"6.1.3 <em>livenessConfidence</em>",id:"613-livenessconfidence",level:4},{value:"6.1.4 <em>fingersResult</em>.",id:"614-fingersresult",level:4},{value:"6.1.4.1 wsq",id:"6141-wsq",level:4},{value:"6.1.4.2 fingerprintTemplate",id:"6142-fingerprinttemplate",level:4},{value:"6.1.4.3 rawFingerprintImage",id:"6143-rawfingerprintimage",level:4},{value:"6.1.4.4 processedFingerprintImage",id:"6144-processedfingerprintimage",level:4},{value:"6.1.4.5 nfiqMetrics",id:"6145-nfiqmetrics",level:4},{value:"7. Component customisation",id:"7-component-customisation",level:2},{value:"7.1 Texts",id:"71-texts",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-sdk-mobile-base-requirements",children:"0. SDK Mobile base requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,i.jsx)(n.strong,{children:"Components"}),") that provides a set of functionalities and services\na series of functionalities and services, allowing its integration in a Mobile application in a\nintegration into a Mobile application in a simple and fully scalable way.\nscalable. Depending on the use case that is required, certain components must be installed.\nDepending on the required use case, certain components must be installed. Its high level of\nof modularity means that other new components can be added in the future\nnew components can be added in the future without affecting those already integrated in the project.\nproject."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the base configuration, go to the [1.5.X][EN] ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"SDK m\xf3vil de iOS"})})}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"Component"})," dealt with in the current document is called\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Phingers Component"})}),". It is in charge of the capture of the user's fingerprints and the subsequent\nfingerprints and the subsequent extraction of the subsequent fingerprint templates.\nextraction of the subsequent fingerprint templates. Its main functionalities are\nfunctionalities are as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Two modes of operation: extraction of the four fingers of the hand (except for the thumb), or\n(except the thumb), or extraction of the thumb only."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Internal camera management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Permission management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Built-in vividness detection."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Assistant in fingerprint capture processes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generation of templates with fingerprint characteristics,\nimages and scores."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,i.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Minimum iOS version: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsxs)(n.p,{children:["Before integrating this component, it is recommended that you read the documentation\ndocumentation for the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)("u",{children:"Core Component"})})," and follow the instructions\nindicated in this document."]}),"\n",(0,i.jsx)(n.p,{children:"This section will explain step by step how to integrate the current component into an existing project.\ncomponent into an existing project."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsxs)(n.p,{children:["In order to avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the Facephi libraries.\nof the Facephi libraries (",(0,i.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before the installation of the components.\ncompletely before the installation of the components of the\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Currently the FacePhi libraries are distributed remotely through different dependency managers.\nthrough different dependency managers, in this case\nCocoapods. The ",(0,i.jsx)(n.strong,{children:"required"})," dependencies that must have been previously installed (by adding them in the\npreviously installed (by adding them to the project's wait",(0,i.jsx)(n.em,{children:"Podfile"})," file) are\nproject) are:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKMainComponent', '~> 1.4.0', '~> 1.4.0'.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To install the current component, the following entry must be included in the ",(0,i.jsx)(n.em,{children:"Podfile"})," of the project\nentry in the ",(0,i.jsx)(n.em,{children:"Podfile"})," of the application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKPhingersComponent', '~> 1.4.0'.\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the dependencies have been installed, you will be able to use the different\ndifferent functionalities of the component."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-permissions-and-settings",children:"2.2 Permissions and settings"}),"\n",(0,i.jsxs)(n.p,{children:["In the client application where the components are going to be integrated, it is necessary to incorporate the following elements in the file ",(0,i.jsx)(n.strong,{children:"info.plist"}),".\nthe following elements need to be incorporated in the ",(0,i.jsx)(n.strong,{children:"info.plist"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"It is necessary to allow the use of the camera (Privacy - Camera Usage Description)\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to perform a certain operation, in order to generate the associated information correctly in the\nassociated information correctly in the platform, the ",(0,i.jsx)(n.strong,{children:"newOperation"})," command\nthe ",(0,i.jsx)(n.strong,{children:"newOperation"})," command must be executed beforehand."]}),"\n",(0,i.jsxs)(n.p,{children:["This command must be executed ",(0,i.jsx)(n.strong,{children:"always"}),". To learn more about how to\nto start a new operation, it is recommended to consult the documentation of\n",(0,i.jsx)(n.strong,{children:"Core Component"})," documentation, which details and explains this process.\nprocess."]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to consult the documentation of [1.5.X][EN] ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK"})})}),", which details and explains what this process consists of."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-component-configuration",children:"4. Component configuration"}),"\n",(0,i.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, you need to\ncreate a ",(0,i.jsx)(n.em,{children:"PhingersConfigurationData"})," object and pass it as a parameter to the\nSDKController during the component launch."]}),"\n",(0,i.jsx)(n.p,{children:"The following section will show the fields that are part of this class and what each one is used for.\nclass and what each of them is used for."}),"\n",(0,i.jsx)(n.h3,{id:"41-class-phingersconfigurationdata",children:"4.1 Class PhingersConfigurationData"}),"\n",(0,i.jsx)(n.h4,{id:"411-reticleorientation",children:"4.1.1 reticleOrientation"}),"\n",(0,i.jsx)(n.p,{children:"Sets the fingerprint detection mode and indicates which fingers are to be detected during the process.\ndetected during the process. Allowed values are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LEFT"}),": Capture of the ",(0,i.jsx)(n.strong,{children:"four fingers of the left hand"})," is enabled.\nleft**."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["RIGHT**: The capture of the ",(0,i.jsx)(n.strong,{children:"four fingers of the left hand"})," is activated.\nleft**."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["THUMB**: Activates the capture of ",(0,i.jsx)(n.strong,{children:"one thumb"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"412-extractiontimeout",children:"4.1.2 extractionTimeout"}),"\n",(0,i.jsx)(n.p,{children:"Sets a stabilisation mode prior to any authentication process in the widget.\nauthentication process in the widget. This mode forces the widget to not\nstart any process if the user is not facing forward and not moving his head.\nhead facing forward and not moving it."}),"\n",(0,i.jsx)(n.h4,{id:"413-returnwsq",children:"4.1.3 returnWSQ"}),"\n",(0,i.jsxs)(n.p,{children:["If set to ",(0,i.jsx)(n.strong,{children:"true"})," then in the result of the capture it will\nwill return, for each of the footprints, the compressed data by means of\nWavelet Scalar Quatization_ (WSQ). WSQ is a grey compression algorithm, being a standard (N\nbeing a standard (NIST) for this type of captures. Oriented\nvalidation against the different existing governmental databases.\ndatabases."]}),"\n",(0,i.jsx)(n.h4,{id:"414-returnrawimage",children:"4.1.4 returnRawImage"}),"\n",(0,i.jsxs)(n.p,{children:["If set to ",(0,i.jsx)(n.strong,{children:"true"})," it shall return in the result the images in the same form as they have been captured.\nthe same form in which they have been captured."]}),"\n",(0,i.jsx)(n.h4,{id:"415-returnprocessedimage",children:"4.1.5 returnProcessedImage"}),"\n",(0,i.jsxs)(n.p,{children:["If set to ",(0,i.jsx)(n.strong,{children:"true"})," it shall return the images in the result as they were captured.\nthe same form in which they have been captured."]}),"\n",(0,i.jsx)(n.h4,{id:"416-returnfingerprinttemplate",children:"4.1.6 returnFingerprintTemplate"}),"\n",(0,i.jsxs)(n.p,{children:["Specifies whether the capture process shall return the fingerprint template in the result.\nthe result. It is an enumerated of type ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"FingerprintTemplateType"})}),", and\neach value would be: **"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ISO"}),": This template type refers to the standard ",(0,i.jsx)(n.strong,{children:"ISO/IEC\n19794-4"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"INNOVATRICS**: This type of template is a proprietary template\ntemplate, compatible with scaling change, and very useful for different validation processes.\nvalidation processes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"NONE**: Template return is disabled."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"417-returnfullframeimage",children:"4.1.7 returnFullFrameImage"}),"\n",(0,i.jsx)(n.p,{children:"Specifies whether to return the full image of the camera where the fingers have been detected.\nfingers have been detected."}),"\n",(0,i.jsx)(n.h4,{id:"418-useliveness",children:"4.1.8 useLiveness"}),"\n",(0,i.jsxs)(n.p,{children:["Enables or disables the liveness detector during the fingerprint capture process.\ncapture process. Defaults to ",(0,i.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"419-useflash",children:"4.1.9 useFlash"}),"\n",(0,i.jsxs)(n.p,{children:["Enables or disables the camera flash during the fingerprint capture process.\nprocess. Defaults to ",(0,i.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"4110-capturefingerstext",children:"4.1.10 captureFingersText"}),"\n",(0,i.jsx)(n.p,{children:"Sets the message (string) that is displayed on the screen after the four fingers have been\ndetected and the user shall be instructed not to move them."}),"\n",(0,i.jsx)(n.h4,{id:"4111-capturethumbtext",children:"4.1.11 captureThumbText"}),"\n",(0,i.jsx)(n.p,{children:"Sets the message (string) to be displayed on the screen after the thumb has been detected and the user shall be prompted not to move the thumb.\ndetected and the user shall be prompted not to move it."}),"\n",(0,i.jsx)(n.h4,{id:"4112-thumbnotinfocustext",children:"4.1.12 thumbNotInFocusText"}),"\n",(0,i.jsx)(n.p,{children:"Sets the message (string) that is displayed on the screen while attempting to\nattempted"}),"\n",(0,i.jsx)(n.h4,{id:"4113-capturefingertext",children:"4.1.13 captureFingerText"}),"\n",(0,i.jsx)(n.p,{children:"Sets the message (string) displayed on screen during the thumb capture process.\nthumb capture process."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-use-of-the-component",children:"5. Use of the component"}),"\n",(0,i.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created (",(0,i.jsx)(n.strong,{children:"paragraph\n3"}),") the SDK components can be launched. There are two ways to launch\nthe component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows you to launch the component's functionality as normal, but ",(0,i.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows you to launch the component's functionality as normal.\nfunctionality of the component normally, but ",(0,i.jsx)(n.strong,{children:"no event will be tracked"})," to the ",(0,i.jsx)(n.em,{children:"tracking"})," server.\nevent to the ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows the component's functionality to be launched as normal.\nfunctionality of the component normally, but internal events will be tracked to the ",(0,i.jsx)(n.em,{children:"tracking"})," server.\nevents to the ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"launch"})," method must be used ",(0,i.jsx)(n.strong,{children:"by default"}),". This method allows\nuse ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," if your component is enabled, and will not use it when it is\nwhen it is deactivated (or the component is not installed).\ninstalled)."]}),"\n",(0,i.jsxs)(n.p,{children:["On the other hand, the ",(0,i.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in which the\nwhere the integrator has tracking installed and activated, but in a given flow within the application does not want to use it when it is deactivated.\nflow within the application does not want to track information.\nIn that case this method is used to avoid sending that information to the\nto the platform."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-receipt-of-the-result",children:"6. Receipt of the result"}),"\n",(0,i.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult format\n-more details in the [1.5.X][EN] ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK's"})})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The result is an ",(0,i.jsx)(n.em,{children:"SDKResult"})," object returned by the SDK shall always have\n3 fields:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"finishStatus:"})," which will indicate if the operation has been successfully completed.\ncorrectly. Possible values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"errorType:"})," If the finishStatus indicates that there has been an error, this field shall have a description of the error: `````.\nfield shall contain the description of the error:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"CANCEL_BY_USER: The user has cancelled the operation.\nTIMEOUT: The set time has elapsed without a successful completion of the process.\nCOMPONENT_CONTROLLER_ERROR: The controller has not been initialised correctly. Check the init and setup functions.\nCOMPONENT_CONTROLLER_DATA_ERROR: The init or setup data of the controller is not correct.\nNETWORK_CONNECTION: Internet connection error.\nUNKNOWN_ERROR: Unhandled error.\nACTIVITY_RESULT_ERROR: Error in the internal screen flow of the controller.\nLOW_QUALITY: The captured image is not of sufficient quality.\nNFC_ERROR: NFC reading error.\nQR_ERROROR: QR reading error.\nNO_ERROROR: No error occurred.\nHARDWARE_ERROROROR: Selphi/SelphId widgets hardware error\nEXTRACTION_LICENSE_ERROROR: Selphi/SelphId widgets licensing error\nUNEXPECTED_CAPTURE_ERROR: Error during the capture process of the Selphi/SelphId widgets\nCONTROL_NOT_INITIALIZATED_ERROROR: Internal Selphi/SelphId widgets error\nBAD_EXTRACTOR_CONFIGURATION_ERROR: Selphi/SelphId widgets internal error\nTOKEN_ERROR: Error in the request for the tracking token\nPHINGERS_ERROR_CAPTURE: Fingerprint capture error\nLICENSING_ERROR_PACKAGE_NAME: Licensing error indicating that the package name is incorrect.\nLICENSING_ERROR_APPID_INVALID: Licensing error indicating that the APPID is incorrect.\nLICENSING_ERROR_APIKEY_FORBIDDEN: Licensing error indicating that the APIKEY is incorrect.\nLICENSING_ERROR_ERROR_LICENSE_NOT_FOUND: Licensing error indicating that no license was found.\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"data:"})," Shall contain the response data of the executed component function.\nexecuted. Section 7.1** specifies the fields that are included in this component.\nincluded in this component."]}),"\n",(0,i.jsxs)(n.h3,{id:"61-content-of-the-data-field",children:["6.1 Content of the ",(0,i.jsx)(n.em,{children:"data"})," field"]}),"\n",(0,i.jsxs)(n.p,{children:["The result returns the images in ",(0,i.jsx)(n.strong,{children:"Bitmap"})," format, it is possible to\nconvert the images to ",(0,i.jsx)(n.strong,{children:"Base64"})," as follows:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"data"})," field is variable and will depend on which component the result was returned.\nthe result has been returned. In the case of this component, the returned fields are\nthe following:"]}),"\n",(0,i.jsxs)(n.h4,{id:"611-focusquality",children:["6.1.1 ",(0,i.jsx)(n.em,{children:"focusQuality"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the best image extracted from the authentication process in\nBase64 string format. This image is the original size image\nextracted from the camera. Valid for the ",(0,i.jsx)(n.strong,{children:"liveness"})," process."]}),"\n",(0,i.jsxs)(n.h4,{id:"612-fullframeimage",children:["6.1.2 ",(0,i.jsx)(n.em,{children:"fullFrameImage"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns a cropped image centred on the user's face in Base64 string format.\nstring Base64 format. This image is obtained from the ",(0,i.jsx)(n.em,{children:"bestImage"}),". This\nis the image that shall be used as the characteristic image of the\nuser who performed the process as the ",(0,i.jsx)(n.em,{children:"avatar"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"613-livenessconfidence",children:["6.1.3 ",(0,i.jsx)(n.em,{children:"livenessConfidence"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the best image extracted from the authentication process in\nBitmap format. This image is the original size image extracted from the camera.\nfrom the camera. Valid for the ",(0,i.jsx)(n.strong,{children:"liveness"})," process."]}),"\n",(0,i.jsxs)(n.h4,{id:"614-fingersresult",children:["6.1.4 ",(0,i.jsx)(n.em,{children:"fingersResult"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This is a list of ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"FingerResult"})})," objects, containing all the information associated with each finger.\ninformation associated with each of the captured fingers."]}),"\n",(0,i.jsx)(n.h4,{id:"6141-wsq",children:"6.1.4.1 wsq"}),"\n",(0,i.jsx)(n.p,{children:"The fingerprint capture is returned in WSQ format."}),"\n",(0,i.jsx)(n.h4,{id:"6142-fingerprinttemplate",children:"6.1.4.2 fingerprintTemplate"}),"\n",(0,i.jsx)(n.p,{children:"Returns the fingerprint template, used for further validation."}),"\n",(0,i.jsx)(n.h4,{id:"6143-rawfingerprintimage",children:"6.1.4.3 rawFingerprintImage"}),"\n",(0,i.jsx)(n.p,{children:"Returns the raw, unmodified image of the current fingerprint."}),"\n",(0,i.jsx)(n.h4,{id:"6144-processedfingerprintimage",children:"6.1.4.4 processedFingerprintImage"}),"\n",(0,i.jsx)(n.p,{children:"Returns the processed fingerprint image."}),"\n",(0,i.jsx)(n.h4,{id:"6145-nfiqmetrics",children:"6.1.4.5 nfiqMetrics"}),"\n",(0,i.jsx)(n.p,{children:"These are the metrics of the capture. Currently the following is returned.\nvalue:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"nfiqMetric**: An integer value, between 1 and 5 (inclusive),\nindicating the quality of the fingerprint capture, with 1 indicating the highest quality and 5 the worst quality.\nindicates the highest quality and 5 the worst quality. Fingerprints with the latter value\nThe latter value is usually discarded for further validation."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-component-customisation",children:"7. Component customisation"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the changes that can be made at the SDK level (which are explained in the ",(0,i.jsx)(n.strong,{children:"Core Component"})," document), the\nare explained in the ",(0,i.jsx)(n.strong,{children:"Core Component"})," document), this particular component allows the modification of specific texts.\ncomponent allows the modification of specific texts."]}),"\n",(0,i.jsx)(n.h3,{id:"71-texts",children:"7.1 Texts"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to modify the SDK texts you would have to include the following XML file in the client application\nfollowing XML file in the client application, and modify the value of each ",(0,i.jsx)(n.em,{children:"String"})," to\nvalue of each ",(0,i.jsx)(n.em,{children:"String"})," to the desired one."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\x3c!-- PHINGERS --\x3e\n<string name="phingers_component_left_hand">Prepare your left hand for the catch</string>.\n<string name="phingers_component_right_hand">Prepare your right hand for capture</string>\n<string name="phingers_component_action_text">Take fingerprints</string>\n<string name="phingers_component_capture_phingers">Hold fingers steady</string>\n<string name="phingers_component_capture_thumb">Hold finger steady</string>\n<string name="phingers_component_capture_phingers_not_focus">Move fingers until in focus</string>\n<string name="phingers_component_capture_thumb_not_focus">Move finger until in focus</string>\n'})}),"\n",(0,i.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);