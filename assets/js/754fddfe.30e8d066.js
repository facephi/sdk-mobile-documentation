"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[1498],{2519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=t(4848),r=t(8453);const s={},o="Phingers Component",l={id:"Phingers_Component",title:"Phingers Component",description:"0. SDK Mobile baseline requirements",source:"@site/android_versioned_docs/version-2.0.X/Phingers_Component.md",sourceDirName:".",slug:"/Phingers_Component",permalink:"/sdk-mobile-documentation/docs/android/2.0.X/Phingers_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"SelphID Component",permalink:"/sdk-mobile-documentation/docs/android/2.0.X/SelphID_Component"},next:{title:"Voice Component",permalink:"/sdk-mobile-documentation/docs/android/2.0.X/Voice_Component"}},a={},h=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class PhingersConfigurationData",id:"51-class-phingersconfigurationdata",level:3},{value:"5.1.1. reticleOrientation",id:"511-reticleorientation",level:4},{value:"5.1.2. useFlash",id:"512-useflash",level:4},{value:"5.1.3. returnProcessedImage",id:"513-returnprocessedimage",level:4},{value:"5.1.4. returnRawImage",id:"514-returnrawimage",level:4},{value:"5.1.5. useLiveness",id:"515-useliveness",level:4},{value:"5.1.6. returnFullFrameImage",id:"516-returnfullframeimage",level:4},{value:"5.1.7. extractionTimeout",id:"517-extractiontimeout",level:4},{value:"5.1.8. showTutorial",id:"518-showtutorial",level:4},{value:"5.1.9. threshold",id:"519-threshold",level:4},{value:"5.1.10. showSpinner",id:"5110-showspinner",level:4},{value:"5.1.11. cropWidth",id:"5111-cropwidth",level:4},{value:"5.1.12. cropHeight",id:"5112-cropheight",level:4},{value:"5.1.13. cropFactor",id:"5113-cropfactor",level:4},{value:"5.1.14. showDiagnostic",id:"5114-showdiagnostic",level:4},{value:"5.1.15. showPreviousTip",id:"5115-showprevioustip",level:4},{value:"6. Component use",id:"6-component-use",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.1. Receipt of correct execution - <em>data</em>",id:"71-receipt-of-correct-execution---data",level:3},{value:"7.1.1 <em>fingersResult</em>",id:"711-fingersresult",level:4},{value:"7.1.1.1. rawFingerprintImage",id:"7111-rawfingerprintimage",level:5},{value:"7.1.1.2. processedFingerprintImage",id:"7112-processedfingerprintimage",level:5},{value:"7.1.1.3. wsq",id:"7113-wsq",level:5},{value:"7.1.1.4. fingerprintTemplate",id:"7114-fingerprinttemplate",level:5},{value:"7.1.1.5. nfiqMetrics",id:"7115-nfiqmetrics",level:5},{value:"7.1.2 fullFrameImage",id:"712-fullframeimage",level:5},{value:"7.1.3 focusQuality",id:"713-focusquality",level:5},{value:"7.1.4 livenessConfidence",id:"714-livenessconfidence",level:5},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1 Texts",id:"81-texts",level:3},{value:"9. Logs",id:"9-logs",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"})}),"\n",(0,i.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The component discussed in the current document is called ",(0,i.jsx)(n.strong,{children:"Phingers\nComponent"}),". It is in charge of capturing the user's fingerprints and\nthe subsequent extraction of the subsequent fingerprint templates. Its\nmain functionalities are as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Two modes of operation: extraction of all four fingers of the hand\n(except the thumb), or extraction of the thumb only."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Internal camera management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Permission management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Built-in vividness detection."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Assistant in fingerprint capture processes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generation of templates with fingerprint characteristics, images and\nscores."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,i.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,i.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,i.jsx)(n.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:phingers_component:$sdk_phingers_component_version"\xa0\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,i.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,i.jsxs)(n.p,{children:["This command must have been executed ",(0,i.jsx)(n.strong,{children:"prior to launch"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Controller"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Description"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PhingersController"}),(0,i.jsx)(n.td,{children:"Main fingerprint capture controller"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,i.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, a\n",(0,i.jsx)(n.em,{children:"PhingersConfigurationData"})," object must be created and passed as a\nparameter to the SDKController when the component is launched."]}),"\n",(0,i.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each of them is used for."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-phingersconfigurationdata",children:"5.1. Class PhingersConfigurationData"}),"\n",(0,i.jsx)(n.h4,{id:"511-reticleorientation",children:"5.1.1. reticleOrientation"}),"\n",(0,i.jsx)(n.p,{children:"Sets the fingerprint detection mode and indicates which fingers are to\nbe detected during the process. The allowed values are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LEFT"}),": Enables the capture of the ",(0,i.jsx)(n.strong,{children:"four"})," ",(0,i.jsx)(n.strong,{children:"fingers"})," of the\n",(0,i.jsx)(n.strong,{children:"left"})," ",(0,i.jsx)(n.strong,{children:"hand"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RIGHT"}),": Enables the capture of the ",(0,i.jsx)(n.strong,{children:"four"})," ",(0,i.jsx)(n.strong,{children:"fingers"})," of the\n",(0,i.jsx)(n.strong,{children:"left"})," ",(0,i.jsx)(n.strong,{children:"hand"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"THUMB"}),": The capture of a ",(0,i.jsx)(n.strong,{children:"thumb"})," is activated."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"512-useflash",children:"5.1.2. useFlash"}),"\n",(0,i.jsxs)(n.p,{children:["Enables or disables the camera flash during the fingerprint capture\nprocess. Default is set to ",(0,i.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"513-returnprocessedimage",children:"5.1.3. returnProcessedImage"}),"\n",(0,i.jsxs)(n.p,{children:["If set to ",(0,i.jsx)(n.strong,{children:"true"})," it will return in the result the processed images."]}),"\n",(0,i.jsx)(n.h4,{id:"514-returnrawimage",children:"5.1.4. returnRawImage"}),"\n",(0,i.jsxs)(n.p,{children:["If set to ",(0,i.jsx)(n.strong,{children:"true"})," it will return in the result the images in the same\nform as they have been captured."]}),"\n",(0,i.jsx)(n.h4,{id:"515-useliveness",children:"5.1.5. useLiveness"}),"\n",(0,i.jsxs)(n.p,{children:["Enables or disables the liveness detector during the fingerprint capture\nprocess. Default is set to ",(0,i.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"516-returnfullframeimage",children:"5.1.6. returnFullFrameImage"}),"\n",(0,i.jsx)(n.p,{children:"Specifies whether to return the full image of the camera in which the\nfingers have been detected."}),"\n",(0,i.jsx)(n.h4,{id:"517-extractiontimeout",children:"5.1.7. extractionTimeout"}),"\n",(0,i.jsx)(n.p,{children:"Set an extraction time."}),"\n",(0,i.jsx)(n.h4,{id:"518-showtutorial",children:"5.1.8. showTutorial"}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether the component activates the tutorial screen. This view\nintuitively explains how the capture is performed."}),"\n",(0,i.jsx)(n.h4,{id:"519-threshold",children:"5.1.9. threshold"}),"\n",(0,i.jsx)(n.p,{children:"The parameter configures a captureQualityThreshold, to define a quality\nthreshold to perform the capture."}),"\n",(0,i.jsx)(n.h4,{id:"5110-showspinner",children:"5.1.10. showSpinner"}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether to show the load spinner."}),"\n",(0,i.jsx)(n.h4,{id:"5111-cropwidth",children:"5.1.11. cropWidth"}),"\n",(0,i.jsx)(n.p,{children:"Indicates a width to perform a cropping of the capture."}),"\n",(0,i.jsx)(n.h4,{id:"5112-cropheight",children:"5.1.12. cropHeight"}),"\n",(0,i.jsx)(n.p,{children:"Indicates a height to perform a cropping of the capture."}),"\n",(0,i.jsx)(n.h4,{id:"5113-cropfactor",children:"5.1.13. cropFactor"}),"\n",(0,i.jsx)(n.p,{children:"Indicates the relation to perform a cropping of the capture."}),"\n",(0,i.jsx)(n.h4,{id:"5114-showdiagnostic",children:"5.1.14. showDiagnostic"}),"\n",(0,i.jsx)(n.p,{children:"Display diagnostic screens at the end of the process"}),"\n",(0,i.jsx)(n.h4,{id:"5115-showprevioustip",children:"5.1.15. showPreviousTip"}),"\n",(0,i.jsx)(n.p,{children:"Displays a pre-launch screen with information about the process to be performed and a launch button."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,i.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,i.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    PhingersController(PhingersConfigurationData())\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("Phingers: ERROR - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("Phingers OK: ${result.data}")\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,i.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launchMethod(\n    PhingersController(PhingersConfigurationData())\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("Phingers: ERROR - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("Phingers OK: ${result.data}")\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,i.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,i.jsxs)(n.p,{children:["On the other hand, the ",(0,i.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,i.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. More information in the Android Mobile SDK's ",(0,i.jsx)("a",{href:"Mobile_SDK#6-result-return",rel:"nofollow",children:"6. Result return"})," section."]}),"\n",(0,i.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,i.jsx)(n.p,{children:"On the error side, we will have the PhingersError class."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"INTERNAL_ERROR\nTIMEOUT\nCANCEL_BY_USER\nCANCEL_LAUNCH\nPERMISSION_DENIED\nACTIVITY_RESULT_ERROR\nPHINGERS_FINGERPRINT_CAPTURE_FAILURE\nLOW_QUALITY\nPHINGERS_LIVENESS_FAILURE\nPHINGERS_CONFIGURATION_FAILURE\nPHINGERS_FINGERPRINT_TEMPLATE_IO_ERROR\nPHINGERS_UNIQUE_USER_ID_NOT_SPECIFIED\nPHINGERS_NO_FINGERS_DETECTED\nPHINGERS_AUTOFOCUS_FAILURE\nPHINGERS_CAMERA_FAILURE\nPHINGERS_CAPTURE_FAILURE\nPHINGERS_LICENSING_FAILURE\nINITIALIZATION_ERROR -> it.error // More info\nFETCH_DATA_ERROR -> it.error\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"71-receipt-of-correct-execution---data",children:["7.1. Receipt of correct execution - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the data part, we have the ",(0,i.jsx)(n.em,{children:"PhingersResult"})," class."]}),"\n",(0,i.jsxs)(n.p,{children:["The result returns the images in ",(0,i.jsx)(n.strong,{children:"Bitmap"})," format, it is possible to\nconvert the images to ",(0,i.jsx)(n.strong,{children:"Base64"})," as follows:"]}),"\n",(0,i.jsx)(n.p,{children:"Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)"}),"\n",(0,i.jsx)(n.p,{children:"The data field is variable and will depend on which component has\nreturned the result. In the case of this component, the fields returned\nare the following:"}),"\n",(0,i.jsxs)(n.h4,{id:"711-fingersresult",children:["7.1.1 ",(0,i.jsx)(n.em,{children:"fingersResult"})]}),"\n",(0,i.jsx)(n.h5,{id:"7111-rawfingerprintimage",children:"7.1.1.1. rawFingerprintImage"}),"\n",(0,i.jsx)(n.p,{children:"Returns the raw, unmodified image of the current fingerprint."}),"\n",(0,i.jsx)(n.h5,{id:"7112-processedfingerprintimage",children:"7.1.1.2. processedFingerprintImage"}),"\n",(0,i.jsx)(n.p,{children:"Returns the processed fingerprint image."}),"\n",(0,i.jsx)(n.h5,{id:"7113-wsq",children:"7.1.1.3. wsq"}),"\n",(0,i.jsx)(n.p,{children:"The fingerprint capture in WSQ format is returned."}),"\n",(0,i.jsx)(n.h5,{id:"7114-fingerprinttemplate",children:"7.1.1.4. fingerprintTemplate"}),"\n",(0,i.jsx)(n.p,{children:"Returns the raw template generated after the extraction process. Valid\nfor the AUTHENTICATION process."}),"\n",(0,i.jsx)(n.h5,{id:"7115-nfiqmetrics",children:"7.1.1.5. nfiqMetrics"}),"\n",(0,i.jsx)(n.p,{children:"These are the metrics of the capture. Currently the following value is\nreturned:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"nfiqMetric: This is an integer value, between 1 and 5 (inclusive),\nindicating the quality of the fingerprint capture, with 1 indicating\nthe highest quality and 5 indicating the worst quality. Fingerprints\nwith the latter value are usually discarded for further validation."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"712-fullframeimage",children:"7.1.2 fullFrameImage"}),"\n",(0,i.jsx)(n.p,{children:"Returns the full image captured by the camera. No processes are applied to this image yet."}),"\n",(0,i.jsx)(n.h5,{id:"713-focusquality",children:"7.1.3 focusQuality"}),"\n",(0,i.jsx)(n.p,{children:"Returns the camera focus quality. A low value can affect the capture process."}),"\n",(0,i.jsx)(n.h5,{id:"714-livenessconfidence",children:"7.1.4 livenessConfidence"}),"\n",(0,i.jsx)(n.p,{children:"Returns an indicator of the confidence level of the catch."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,i.jsx)(n.h3,{id:"81-texts",children:"8.1 Texts"}),"\n",(0,i.jsx)(n.p,{children:"If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value of\neach String to the desired one."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'    <string name="phingers_component_tutorial_left_message">Prepare your left hand for the catch</string>\n    <string name="phingers_component_tutorial_left_title">Prepare your left hand for the catch</string>\n    <string name="phingers_component_turorial_right_message">Prepare your right hand for capture</string>\n    <string name="phingers_component_tutorial_right_title">Prepare your right hand for capture</string>\n    <string name="phingers_component_tutorial_button">Take fingerprints</string>\n    <string name="phingers_component_capture_phingers">Hold fingers steady</string>\n    <string name="phingers_component_capture_thumb">Hold finger steady</string>\n    <string name="phingers_component_capture_phingers_not_focus">Move fingers until in focus</string>\n    <string name="phingers_component_capture_thumb_not_focus">Move finger until in focus</string>\n    <string name="phingers_component_timeout_title">Time exceeded</string>\n    <string name="phingers_component_timeout_desc">We apologize. The capture could not be made</string>\n    <string name="phingers_component_internal_error_title">There was a technical problem</string>\n    <string name="phingers_component_internal_error_desc">We apologize. The capture could not be made</string>\n\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"9-logs",children:"9. Logs"}),"\n",(0,i.jsx)(n.p,{children:'To display the logs of this component on the console, you can use the filter: "PHINGERS:"'})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);