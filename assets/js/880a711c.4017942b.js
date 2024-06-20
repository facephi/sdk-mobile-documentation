"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7634],{9462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=t(4848),r=t(8453);const s={},o="Selphi Component",l={id:"Selphi_Component",title:"Selphi Component",description:"0. SDK Mobile baseline requirements",source:"@site/docs/android/Selphi_Component.md",sourceDirName:".",slug:"/Selphi_Component",permalink:"/sdk-mobile-documentation/docs/android/next/Selphi_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tracking Component",permalink:"/sdk-mobile-documentation/docs/android/next/Tracking_Component"},next:{title:"SelphID Component",permalink:"/sdk-mobile-documentation/docs/android/next/SelphID_Component"}},a={},h=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start a new operation",id:"3-start-a-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class SelphiConfigurationData",id:"51-class-selphiconfigurationdata",level:3},{value:"5.1.0. <em>debug</em>",id:"510-debug",level:4},{value:"5.1.1. <em>resourcesPath</em>",id:"511-resourcespath",level:4},{value:"5.1.2. <em>cropPercent</em>",id:"512-croppercent",level:4},{value:"5.1.3. <em>showResultAfterCapture</em>",id:"513-showresultaftercapture",level:4},{value:"5.1.4. <em>showTutorial</em>",id:"514-showtutorial",level:4},{value:"5.1.5. <em>livenessMode</em>",id:"515-livenessmode",level:4},{value:"5.1.6. <em>stabilizationMode</em>",id:"516-stabilizationmode",level:4},{value:"5.1.7. <em>cameraFlashEnabled</em>",id:"517-cameraflashenabled",level:4},{value:"5.1.8 <em>locale</em>",id:"518-locale",level:4},{value:"5.1.9 <em>fullscreen</em>",id:"519-fullscreen",level:4},{value:"5.1.10. <em>templateRawOptimized</em>",id:"5110-templaterawoptimized",level:4},{value:"5.1.11. <em>qrMode</em>",id:"5111-qrmode",level:4},{value:"5.1.13 <em>videoFilename</em>",id:"5113-videofilename",level:4},{value:"5.1.14 <em>viewsContent</em>",id:"5114-viewscontent",level:4},{value:"5.1.15. <em>showDiagnostic</em>",id:"5115-showdiagnostic",level:4},{value:"5.1.15. <em>logImages</em>",id:"5115-logimages",level:4},{value:"6. Component use",id:"6-component-use",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.2. Receipt of correct execution - <em>data</em>",id:"72-receipt-of-correct-execution---data",level:3},{value:"7.2.1 <em>templateRaw</em>",id:"721-templateraw",level:4},{value:"7.2.2 <em>template</em>",id:"722-template",level:4},{value:"7.2.3 <em>bestImage</em>",id:"723-bestimage",level:4},{value:"7.2.4 <em>bestImageCropped</em>",id:"724-bestimagecropped",level:4},{value:"7.2.5 <em>logImages</em>",id:"725-logimages",level:4},{value:"7.2.6 <em>bestImageTokenized</em>",id:"726-bestimagetokenized",level:4},{value:"8. Additional Controllers",id:"8-additional-controllers",level:2},{value:"8.1. RawTemplateController",id:"81-rawtemplatecontroller",level:3},{value:"9. Customizing the component",id:"9-customizing-the-component",level:2},{value:"9.1 Texts",id:"91-texts",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"selphi-component",children:"Selphi Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,i.jsx)(n.strong,{children:"Selphi\nComponent"}),". It is responsible for capturing a selfie of the user and\nthen extracting the most important facial features. Its main\nfunctionalities are the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Internal camera management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Permission management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Assistant in the process of capturing the user's face."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generation of the templates with the facial characteristics and the\nimage of the user's face for the liveness detection process."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,i.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, if you want to install\nthe component in a project containing an old Facephi libraries\n(",(0,i.jsx)(n.em,{children:"Widgets"}),") version, these must be removed entirely before installing\nthe ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," components. Currently, FacePhi libraries are\ndistributed remotely through different dependency managers.\n",(0,i.jsx)(n.strong,{children:"Mandatory"})," dependencies that must be installed beforehand:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:selphi_component:$sdk_selphi_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-start-a-new-operation",children:"3. Start a new operation"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,i.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,i.jsxs)(n.p,{children:["This command must have been executed ",(0,i.jsx)(n.strong,{children:"before launch"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Controller"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SelphiController"}),(0,i.jsx)(n.td,{children:"Facial recognition main controller"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RawTemplateController"}),(0,i.jsx)(n.td,{children:"Driver to generate a RawTemplate from an image"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SignatureSelphiController"}),(0,i.jsx)(n.td,{children:"Driver to sign a process with a Capture"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,i.jsx)(n.p,{children:"To configure the current component, once it has been initialized, a\nSelphiConfigurationData object must be created and passed as a parameter\nto the SDKController when the component is launched."}),"\n",(0,i.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each is used for."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-selphiconfigurationdata",children:"5.1. Class SelphiConfigurationData"}),"\n",(0,i.jsxs)(n.h4,{id:"510-debug",children:["5.1.0. ",(0,i.jsx)(n.em,{children:"debug"})]}),"\n",(0,i.jsx)(n.p,{children:"Activation of the component's debugging mode."}),"\n",(0,i.jsxs)(n.h4,{id:"511-resourcespath",children:["5.1.1. ",(0,i.jsx)(n.em,{children:"resourcesPath"})]}),"\n",(0,i.jsxs)(n.p,{children:["Indicates the name of the resources in zip format. Example:\n",(0,i.jsx)(n.em,{children:'"resources-selphi-2-0.zip"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This name will fetch the file from the assets path."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(328).A+"",width:"283",height:"146"})}),"\n",(0,i.jsxs)(n.h4,{id:"512-croppercent",children:["5.1.2. ",(0,i.jsx)(n.em,{children:"cropPercent"})]}),"\n",(0,i.jsx)(n.p,{children:"Allows you to change the percentage of cropping of the face. The higher\nthe number, the more the rectangle is cropped concerning the face."}),"\n",(0,i.jsxs)(n.h4,{id:"513-showresultaftercapture",children:["5.1.3. ",(0,i.jsx)(n.em,{children:"showResultAfterCapture"})]}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether or not to display a screen with the captured image\nafter the analysis process. This screen allows the user to repeat the\ncapture process if the image obtained is incorrect."}),"\n",(0,i.jsxs)(n.h4,{id:"514-showtutorial",children:["5.1.4. ",(0,i.jsx)(n.em,{children:"showTutorial"})]}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether the widget activates the tutorial screen. This view\nintuitively explains how the capture is performed."}),"\n",(0,i.jsxs)(n.h4,{id:"515-livenessmode",children:["5.1.5. ",(0,i.jsx)(n.em,{children:"livenessMode"})]}),"\n",(0,i.jsx)(n.p,{children:"Sets the liveness mode of the widget. Allowed values are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"LIVENESS_NONE: Indicates that the photodetection mode should not be\nenabled in the authentication processes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'LIVENESS_PASSIVE: Indicates that the passive liveness test is\nperformed in the server, sending the corresponding "BestImage" or\n"TemplateRaw" for this purpose.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"516-stabilizationmode",children:["5.1.6. ",(0,i.jsx)(n.em,{children:"stabilizationMode"})]}),"\n",(0,i.jsx)(n.p,{children:"Sets a stabilization mode before any authentication process in the\nwidget. This mode forces the widget not to start any process if the user\nis not facing forward and not moving his head."}),"\n",(0,i.jsxs)(n.h4,{id:"517-cameraflashenabled",children:["5.1.7. ",(0,i.jsx)(n.em,{children:"cameraFlashEnabled"})]}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether the device's camera flash is activated."}),"\n",(0,i.jsxs)(n.h4,{id:"518-locale",children:["5.1.8 ",(0,i.jsx)(n.em,{children:"locale"})]}),"\n",(0,i.jsx)(n.p,{children:"Forces the widget to use the language setting indicated by the locale\nparameter. This parameter accepts a language code (e.g. 'en') and a\nregional identification code (e.g. 'en_US'). If the widget resource file\ndoes not have a locale for the selected 'locale', its configuration will\nfall back to the default language."}),"\n",(0,i.jsxs)(n.h4,{id:"519-fullscreen",children:["5.1.9 ",(0,i.jsx)(n.em,{children:"fullscreen"})]}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether the view will prioritize for full-screen display if\nthe system allows it."}),"\n",(0,i.jsxs)(n.h4,{id:"5110-templaterawoptimized",children:["5.1.10. ",(0,i.jsx)(n.em,{children:"templateRawOptimized"})]}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether the template (templateRaw) generated after the selfie\nshould be optimized or not."}),"\n",(0,i.jsxs)(n.h4,{id:"5111-qrmode",children:["5.1.11. ",(0,i.jsx)(n.em,{children:"qrMode"})]}),"\n",(0,i.jsx)(n.p,{children:"Sets whether or not to activate QR reading before the authentication\nprocess."}),"\n",(0,i.jsxs)(n.h4,{id:"5113-videofilename",children:["5.1.13 ",(0,i.jsx)(n.em,{children:"videoFilename"})]}),"\n",(0,i.jsx)(n.p,{children:"Sets the absolute path to the filename where a video of the capture\nprocess will be recorded. The application is responsible for requesting\nthe necessary permissions from the phone if that path requires\nadditional permissions. The widget, by default, will not perform any\nrecording process unless a file path is specified using this method."}),"\n",(0,i.jsxs)(n.h4,{id:"5114-viewscontent",children:["5.1.14 ",(0,i.jsx)(n.em,{children:"viewsContent"})]}),"\n",(0,i.jsx)(n.p,{children:"This advanced property allows, through a string in XML format, to\nconfigure the widget views."}),"\n",(0,i.jsx)(n.p,{children:"Note: This property does not alter the content of the resource file."}),"\n",(0,i.jsxs)(n.h4,{id:"5115-showdiagnostic",children:["5.1.15. ",(0,i.jsx)(n.em,{children:"showDiagnostic"})]}),"\n",(0,i.jsx)(n.p,{children:"Display diagnostic screens at the end of the process"}),"\n",(0,i.jsxs)(n.h4,{id:"5115-logimages",children:["5.1.15. ",(0,i.jsx)(n.em,{children:"logImages"})]}),"\n",(0,i.jsx)(n.p,{children:"When activated, a list of the 5 best images taken of the user is returned."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,i.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,i.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component, but internal events will be tracked to the\n",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val response = SDKController.launch(\n    SelphiController(SelphiConfigurationData(...))\n)\nwhen (response) {\n    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")\n    is SdkResult.Success -> response.data\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component, but ",(0,i.jsx)(n.strong,{children:"no event will be tracked"})," to\nthe ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val response = SDKController.launchMethod(\n    SelphiController(SelphiConfigurationData(...))\n)\nwhen (response) {\n    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")\n    is SdkResult.Success -> response.data\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,i.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," if your component is enabled and will not be used when it\nis disabled (or the component is not installed)."]}),"\n",(0,i.jsxs)(n.p,{children:["On the other hand, the ",(0,i.jsx)(n.strong,{children:"launchMethod"})," method covers a particular case\nin which the integrator has tracking installed and activated but, in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,i.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. -more details in the Android Mobile SDK's ",(0,i.jsx)("a",{href:"Mobile_SDK#6-result-return",rel:"nofollow",children:"6. Result return"})," section-."]}),"\n",(0,i.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,i.jsx)(n.p,{children:"On the error side, we will have the SelphiError class."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"    SelphiError.ACTIVITY_RESULT_ERROR\n    SelphiError.BAD_EXTRACTOR_CONFIGURATION_ERROR\n    SelphiError.CAMERA_PERMISSION_DENIED\n    SelphiError.CANCEL_BY_USER\n    SelphiError.CONTROL_NOT_INITIALIZATED_ERROR\n    SelphiError.EXTRACTION_LICENSE_ERROR\n    SelphiError.HARDWARE_ERROR\n    is SelphiError.INITIALIZATION_ERROR -> it.error // More info\n    SelphiError.NO_ERROR\n    SelphiError.RESOURCES_NOT_FOUND\n    SelphiError.SETTINGS_PERMISSION_ERROR\n    SelphiError.TIMEOUT\n    SelphiError.UNEXPECTED_CAPTURE_ERROR\n    SelphiError.UNKNOWN_ERROR\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"72-receipt-of-correct-execution---data",children:["7.2. Receipt of correct execution - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsx)(n.p,{children:"In the data part, we have the SelphiResult class."}),"\n",(0,i.jsxs)(n.p,{children:["The result returns the images in ",(0,i.jsx)(n.strong,{children:"Bitmap"})," format. It is possible to\nconvert the images to ",(0,i.jsx)(n.strong,{children:"Base64"})," as follows:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)"})}),"\n",(0,i.jsx)(n.p,{children:"The data field is variable and will depend on which component has\nreturned the result. In the case of this component, the fields returned\nare the following:"}),"\n",(0,i.jsxs)(n.h4,{id:"721-templateraw",children:["7.2.1 ",(0,i.jsx)(n.em,{children:"templateRaw"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the raw template generated after the extraction process. Valid\nfor the ",(0,i.jsx)(n.strong,{children:"matching"})," process."]}),"\n",(0,i.jsxs)(n.h4,{id:"722-template",children:["7.2.2 ",(0,i.jsx)(n.em,{children:"template"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the template that is generated after the extraction process.\nValid for the ",(0,i.jsx)(n.strong,{children:"matching"})," process."]}),"\n",(0,i.jsxs)(n.h4,{id:"723-bestimage",children:["7.2.3 ",(0,i.jsx)(n.em,{children:"bestImage"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the best image extracted from the authentication process in\nSdkImage format. This image is the original size image extracted from\nthe camera. Valid for the ",(0,i.jsx)(n.strong,{children:"liveness"})," process."]}),"\n",(0,i.jsxs)(n.h4,{id:"724-bestimagecropped",children:["7.2.4 ",(0,i.jsx)(n.em,{children:"bestImageCropped"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns a cropped image centred on the user's face in SdkImage format.\nThis image is obtained from the bestImage. This image will be used as\nthe characteristic image of the user who carried out the process as an\navatar."}),"\n",(0,i.jsxs)(n.h4,{id:"725-logimages",children:["7.2.5 ",(0,i.jsx)(n.em,{children:"logImages"})]}),"\n",(0,i.jsx)(n.p,{children:'List of the top 5 captured images returned if the "logImages" flag is set in the configuration.'}),"\n",(0,i.jsxs)(n.h4,{id:"726-bestimagetokenized",children:["7.2.6 ",(0,i.jsx)(n.em,{children:"bestImageTokenized"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the best image tokenized. Valid for the ",(0,i.jsx)(n.strong,{children:"liveness"})," process."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-additional-controllers",children:"8. Additional Controllers"}),"\n",(0,i.jsx)(n.h3,{id:"81-rawtemplatecontroller",children:"8.1. RawTemplateController"}),"\n",(0,i.jsx)(n.p,{children:"Controller to generate a RawTemplate from an image (bitmap)."}),"\n",(0,i.jsx)(n.p,{children:"Example of use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    RawTemplateController(SdkImage(image))\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("GenerateRaw: KO - ${result.error}")\n    is SdkResult.Success -> result.data\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"9-customizing-the-component",children:"9. Customizing the component"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the changes that can be made at the SDK level (explained in\nthe ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,i.jsx)(n.h3,{id:"91-texts",children:"9.1 Texts"}),"\n",(0,i.jsx)(n.p,{children:"If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application and change the value of\neach String to the desired one."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'    <string name="selphi_component_timeout_title">Time exceeded</string>\n    <string name="selphi_component_timeout_desc">We apologize. The capture could not be made</string>\n    <string name="selphi_component_internal_error_title">There was a technical problem</string>\n    <string name="selphi_component_internal_error_desc">We apologize. The capture could not be made</string>\n    <string name="selphi_component_tutorial_message">Stay still,\\nwith your face\\nin the center of the circle</string>\n    <string name="selphi_component_tutorial_title">Take a selfie</string>\n    <string name="selphi_component_tutorial_button">Continue</string>\n\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},328:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);