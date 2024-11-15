"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[6602],{1789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Selphi_Component","title":"Selphi Component","description":"0. SDK Mobile baseline requirements","source":"@site/docs/ios/Selphi_Component.md","sourceDirName":".","slug":"/Selphi_Component","permalink":"/sdk-mobile-documentation/docs/ios/next/Selphi_Component","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Tracking Component","permalink":"/sdk-mobile-documentation/docs/ios/next/Tracking_Component"},"next":{"title":"SelphID Component","permalink":"/sdk-mobile-documentation/docs/ios/next/SelphID_Component"}}');var s=t(4848),o=t(8453);const r={},a="Selphi Component",l={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1 Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"2.1.1 Cocoapods",id:"211-cocoapods",level:4},{value:"2.2.2 SPM",id:"222-spm",level:4},{value:"2.2 Permissions and configurations",id:"22-permissions-and-configurations",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class SelphiConfigurationData",id:"51-class-selphiconfigurationdata",level:3},{value:"5.1.1 Basic Configuration",id:"511-basic-configuration",level:4},{value:"resourcesPath",id:"resourcespath",level:5},{value:"showTutorial",id:"showtutorial",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"showResultAfterCapture",id:"showresultaftercapture",level:5},{value:"5.1.2 Advanced Settings",id:"512-advanced-settings",level:4},{value:"debug",id:"debug",level:5},{value:"fullscreen",id:"fullscreen",level:5},{value:"cropPercent",id:"croppercent",level:5},{value:"locale",id:"locale",level:5},{value:"livenessMode",id:"livenessmode",level:5},{value:"stabilizationMode",id:"stabilizationmode",level:5},{value:"templateRawOptimized",id:"templaterawoptimized",level:5},{value:"qrMode",id:"qrmode",level:5},{value:"videoFilename",id:"videofilename",level:5},{value:"cameraFlashEnabled",id:"cameraflashenabled",level:5},{value:"translationsContent",id:"translationscontent",level:5},{value:"viewsContent",id:"viewscontent",level:5},{value:"5.1.3 Otros parametros",id:"513-otros-parametros",level:4},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Use of the component",id:"6-use-of-the-component",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receiving errors",id:"71-receiving-errors",level:3},{value:"7.2. Receiving successful execution - <em>data</em>",id:"72-receiving-successful-execution---data",level:3},{value:"7.2.1 template",id:"721-template",level:4},{value:"7.2.2 templateRaw",id:"722-templateraw",level:4},{value:"7.2.3 bestImageData",id:"723-bestimagedata",level:4},{value:"7.2.4 bestImageCroppedData",id:"724-bestimagecroppeddata",level:4},{value:"7.2.5 QrData",id:"725-qrdata",level:4},{value:"7.2.6 bestImageTokenized",id:"726-bestimagetokenized",level:4},{value:"8. Additional Drivers",id:"8-additional-drivers",level:2},{value:"8.1. RawTemplateController &amp; RawTemplateWidgetController",id:"81-rawtemplatecontroller--rawtemplatewidgetcontroller",level:3},{value:"9. Customizing the component",id:"9-customizing-the-component",level:2},{value:"9.1 Customizing the animations",id:"91-customizing-the-animations",level:3},{value:"9.1.1 Animations guide",id:"911-animations-guide",level:4},{value:"9.2 Colors, images, dimensions and fonts",id:"92-colors-images-dimensions-and-fonts",level:3},{value:"9.3 Texts",id:"93-texts",level:3},{value:"9.4 Widget Customization",id:"94-widget-customization",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"selphi-component",children:"Selphi Component"})}),"\n",(0,s.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on the base configuration, go to the ",(0,s.jsx)(n.a,{href:"./Mobile_SDK#11-minimum-requirements",children:"Getting Started"})," section."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,s.jsx)(n.strong,{children:"Selphi\nComponent"}),". It is responsible for capturing a selfie of the user and\nthen extracting the most important facial features. Its main\nfunctionalities are the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Internal camera management."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Permission management."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Assistant in the process of capturing the user's face."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Generation of the templates with the facial characteristics and the\nimage of the user's face for the liveness detection process."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,s.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,s.jsxs)(n.p,{children:["Minimum iOS version: ",(0,s.jsx)(n.strong,{children:"13"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the\ndocumentation related to ",(0,s.jsx)(n.a,{href:"./Mobile_SDK#2-initial-integration",children:"Initial Integration"})," and follow the instructions given in that document."]})}),"\n",(0,s.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,s.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1 Dependencies required for integration"}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nIn order to avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the Facephi libraries.\nof the Facephi libraries (",(0,s.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before the installation of the components.\ncompletely before the installation of the components of the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SDKMobile"})})," components."]})}),"\n",(0,s.jsx)(n.h4,{id:"211-cocoapods",children:"2.1.1 Cocoapods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,s.jsx)(n.strong,{children:"required"})," dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 2.0.0'\n  pod 'zipzap'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To install the current component, the following entry must be included in the ",(0,s.jsx)(n.em,{children:"Podfile"})," of the project\nentry in the ",(0,s.jsx)(n.em,{children:"Podfile"})," of the application:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  pod 'FPHISDKSelphiComponent', '~> 2.0.0'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In case of development with ",(0,s.jsx)(n.strong,{children:"xCode15"})," a post-installation script must be included:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Image",src:t(225).A+"",width:"1834",height:"510"})}),"\n",(0,s.jsx)(n.h4,{id:"222-spm",children:"2.2.2 SPM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The mandatory dependencies that must have been previously installed are:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To install the Selphi component, it must be included in the project modules:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-Selphi_component-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-Selphi_component-SPM.git\n"})}),"\n",(0,s.jsx)(n.h3,{id:"22-permissions-and-configurations",children:"2.2 Permissions and configurations"}),"\n",(0,s.jsx)(n.p,{children:"In the client application where the components are to be integrated, it is necessary to incorporate the following elements in the info.plist file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"It is necessary to allow the use of the camera (Privacy - Camera Usage Description)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,s.jsxs)(n.p,{children:["In order to generate the associated information correctly in the platform, the ",(0,s.jsx)(n.strong,{children:"newOperation"})," command must be executed first."]}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,s.jsx)(n.strong,{children:"before launch"}),".\nTo learn more about how to start a new operation, it is recommended to consult the ",(0,s.jsx)(n.a,{href:"./Mobile_SDK#4-start-a-new-operation",children:"Start a new operation"})," documentation, which details and explains what this process consists of."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Controller"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SelphiController"}),(0,s.jsx)(n.td,{children:"Facial recognition main controller"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RawTemplateWidgetController"}),(0,s.jsx)(n.td,{children:"Driver to generate a RawTemplate from an image with the Selphi Widget's function"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RawTemplateController"}),(0,s.jsx)(n.td,{children:"Driver to generate a RawTemplate from an image with the FPBTokenizer function"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SignatureSelphiController"}),(0,s.jsx)(n.td,{children:"Driver to sign a process with a Capture"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,s.jsx)(n.p,{children:"To configure the current component, once it has been initialized, a\nSelphiConfigurationData object must be created and passed as a parameter\nto the SDKController when the component is launched."}),"\n",(0,s.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each is used for."}),"\n",(0,s.jsx)(n.h3,{id:"51-class-selphiconfigurationdata",children:"5.1. Class SelphiConfigurationData"}),"\n",(0,s.jsx)(n.h4,{id:"511-basic-configuration",children:"5.1.1 Basic Configuration"}),"\n",(0,s.jsx)(n.h5,{id:"resourcespath",children:"resourcesPath"}),"\n",(0,s.jsx)(n.p,{children:"Sets the path to the widget's resource file. This file contains both the graphics resources and the localisation resources. This path must be specified relative to the 'assets' folder of the main application."}),"\n",(0,s.jsx)(n.h5,{id:"showtutorial",children:"showTutorial"}),"\n",(0,s.jsx)(n.p,{children:"This property allows to show the tutorial before the capture process."}),"\n",(0,s.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,s.jsx)(n.p,{children:"If set to true, when an error or lack of permissions occurs, the sdk will display a screen with the error returned by the widget."}),"\n",(0,s.jsx)(n.h5,{id:"showresultaftercapture",children:"showResultAfterCapture"}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether or not to display a screen with the captured image of the document after the analysis process. This screen gives the user the possibility to repeat the capture process if the image obtained from the document is not correct."}),"\n",(0,s.jsx)(n.h4,{id:"512-advanced-settings",children:"5.1.2 Advanced Settings"}),"\n",(0,s.jsx)(n.h5,{id:"debug",children:"debug"}),"\n",(0,s.jsx)(n.p,{children:"Activation of the debug mode of the component."}),"\n",(0,s.jsx)(n.h5,{id:"fullscreen",children:"fullscreen"}),"\n",(0,s.jsx)(n.p,{children:"Indicates if the view will have priority to be displayed in fullscreen, if the system allows it.\nfullscreen, if the system allows it."}),"\n",(0,s.jsx)(n.h5,{id:"croppercent",children:"cropPercent"}),"\n",(0,s.jsx)(n.p,{children:"Allows to modify the crop percentage of the face. The higher the\nthe higher the number, the more the rectangle is cropped with respect to the face.\nface."}),"\n",(0,s.jsx)(n.h5,{id:"locale",children:"locale"}),"\n",(0,s.jsx)(n.p,{children:"Forces the widget to use the language setting indicated by the\nlocale parameter. This parameter accepts both a language code (e.g. 'en') and a regional identification code (e.g. 'en_US').\ne.g. 'en') and a regional identification code (e.g. 'en_US'). If\nthe widget's resource file did not have a locale for the selected\nlocale' selected, its configuration will fall back to the default language.\nlanguage."}),"\n",(0,s.jsx)(n.h5,{id:"livenessmode",children:"livenessMode"}),"\n",(0,s.jsx)(n.p,{children:"Sets the liveness mode of the widget. Allowed values are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SelphiFaceLivenessMode.NONE"}),": Indicates that photo detection mode should not be enabled in authentication processes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SelphiFaceLivenessMode.PASSIVE"}),': Indicates that the passive liveness test is performed on the server, by sending the corresponding "BestImage" or "TemplateRaw" for this purpose.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SelphiFaceLivenessMode.MOVE"}),": Indicates that the liveness test is active by displaying instructions during the capture, and returning the corresponding result of the process."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"stabilizationmode",children:"stabilizationMode"}),"\n",(0,s.jsx)(n.p,{children:"Sets a stabilisation mode prior to any authentication process in the widget. This mode forces the widget not to start any process if the user is not facing forward and not moving his head."}),"\n",(0,s.jsx)(n.h5,{id:"templaterawoptimized",children:"templateRawOptimized"}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether the template (templateRaw) generated after the selfie should be optimised or not."}),"\n",(0,s.jsx)(n.h5,{id:"qrmode",children:"qrMode"}),"\n",(0,s.jsx)(n.p,{children:"Boolean indicating whether or not to activate QR reading prior to the authentication process."}),"\n",(0,s.jsx)(n.h5,{id:"videofilename",children:"videoFilename"}),"\n",(0,s.jsx)(n.p,{children:"Sets the absolute path to the filename where a video of the capture process will be recorded.\na video of the capture process will be recorded. The application is responsible for\nrequesting the necessary permissions from the phone in case that path requires additional permissions.\nrequires additional permissions. The widget, by default, will not perform\nrecording process unless a file path is specified using this method.\nfile path is specified using this method."}),"\n",(0,s.jsx)(n.h5,{id:"cameraflashenabled",children:"cameraFlashEnabled"}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether the device's camera flash is enabled."}),"\n",(0,s.jsx)(n.h5,{id:"translationscontent",children:"translationsContent"}),"\n",(0,s.jsx)(n.p,{children:"This advanced property allows, by means of a string in xml format,\nto configure the translation of the literals displayed during the process.\nprocess."}),"\n",(0,s.jsx)(n.h5,{id:"viewscontent",children:"viewsContent"}),"\n",(0,s.jsx)(n.p,{children:"This advanced property allows, by means of a string in xml format,\nto configure the views of the widget."}),"\n",(0,s.jsx)(n.h4,{id:"513-otros-parametros",children:"5.1.3 Otros parametros"}),"\n",(0,s.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,s.jsx)(n.p,{children:"If true, vibration is enabled on errors and if the response of the widget is OK"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"6-use-of-the-component",children:"6. Use of the component"}),"\n",(0,s.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,s.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component, but internal events will be tracked to the\n",(0,s.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component, but ",(0,s.jsx)(n.strong,{children:"no event will be tracked"})," to\nthe ",(0,s.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,s.jsxs)("div",{class:"warning",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,s.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,s.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"tracking"})})," if your component is enabled and will not be used when it\nis disabled (or the component is not installed)."]}),(0,s.jsxs)(n.p,{children:["On the other hand, the ",(0,s.jsx)(n.strong,{children:"launchMethod"})," method covers a particular case\nin which the integrator has tracking installed and activated but, in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]})]}),"\n",(0,s.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,s.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult format (more details in the ",(0,s.jsx)(n.a,{href:"./Mobile_SDK",children:"Mobile SDK"}),")"]}),"\n",(0,s.jsx)(n.h3,{id:"71-receiving-errors",children:"7.1. Receiving errors"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"finishStatus"}),": Which will tell us if the operation has finished successfully. Possible values:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"errorType"}),": Widget's own errors"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SELPHID_CANCEL_BY_USER\nSELPHID_TIMEOUT\nSELPHID_INTERNAL_ERROR\nEXTRACTION_FINISHED_WITH_NO_RESULTS\nCOULD_NOT_CREATE_WIDGET_INSTANCE\nRESOURCES_FILE_NOT_FOUND\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"72-receiving-successful-execution---data",children:["7.2. Receiving successful execution - ",(0,s.jsx)(n.em,{children:"data"})]}),"\n",(0,s.jsx)(n.p,{children:"The data field is variable and will depend on which component the result was returned. In the case of this component, the fields returned are as follows:"}),"\n",(0,s.jsx)(n.h4,{id:"721-template",children:"7.2.1 template"}),"\n",(0,s.jsx)(n.p,{children:"Returns the template that is generated after the extraction process. Valid for the AUTHENTICATION process."}),"\n",(0,s.jsx)(n.h4,{id:"722-templateraw",children:"7.2.2 templateRaw"}),"\n",(0,s.jsx)(n.p,{children:"Returns the raw template that is generated after the extraction process. Valid for the AUTHENTICATION process."}),"\n",(0,s.jsx)(n.h4,{id:"723-bestimagedata",children:"7.2.3 bestImageData"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the best image extracted from the authentication process in byte array format. This image is the image with the original size extracted from the camera. Valid for the ",(0,s.jsx)(n.strong,{children:"liveness"})," process."]}),"\n",(0,s.jsx)(n.h4,{id:"724-bestimagecroppeddata",children:"7.2.4 bestImageCroppedData"}),"\n",(0,s.jsx)(n.p,{children:"Returns a cropped image centered on the user's face in byte array format. This image is obtained from the bestImage. This is the image to be used as the characteristic image of the user who performed the process as an avatar."}),"\n",(0,s.jsx)(n.h4,{id:"725-qrdata",children:"7.2.5 QrData"}),"\n",(0,s.jsx)(n.p,{children:"Returns the information from the QR reading in String format."}),"\n",(0,s.jsx)(n.h4,{id:"726-bestimagetokenized",children:"7.2.6 bestImageTokenized"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the best image tokenized. Valid for the ",(0,s.jsx)(n.strong,{children:"liveness"})," process."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"8-additional-drivers",children:"8. Additional Drivers"}),"\n",(0,s.jsx)(n.h3,{id:"81-rawtemplatecontroller--rawtemplatewidgetcontroller",children:"8.1. RawTemplateController & RawTemplateWidgetController"}),"\n",(0,s.jsx)(n.p,{children:"Controller to generate a RawTemplate, you can use both the image in base64 and in data ."}),"\n",(0,s.jsx)(n.p,{children:"Example of use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"let controller = RawTemplateController(\n\tbase64: bestImageData.base64EncodedString(),\n\toutput: { sdkResult in\n\t\tguard let result = sdkResult.data else {return}\n\t\tprint(result.base64EncodedString())\n\t})\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"let controller = RawTemplateController(\n\tdata: bestImageData,\n\toutput: { sdkResult in\n\t\tguard let result = sdkResult.data else {return}\n\t\tprint(result.base64EncodedString())\n\t})\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"9-customizing-the-component",children:"9. Customizing the component"}),"\n",(0,s.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,s.jsx)(n.a,{href:"./Mobile_SDK",children:"Mobile SDK"})," document), this particular component allows the modification of specific\nanimations."]}),"\n",(0,s.jsx)(n.h3,{id:"91-customizing-the-animations",children:"9.1 Customizing the animations"}),"\n",(0,s.jsx)(n.p,{children:"The Selphi Component uses these animations:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"public enum Animation : String, CaseIterable {\n\tcase selphi_anim_tip\n\tcase selphi_anim_tip_move\n\tcase selphi_anim_tuto_1\n\tcase selphi_anim_tuto_2\n\tcase selphi_anim_tuto_3\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The default animations can be overrided by creating a file with the same name and extension (.json for animations) in the app's project."}),"\n",(0,s.jsx)(n.p,{children:'In addition, the animations can also be decided dynamically on runtime. To do this, you need to create a custom "theme" class that implements ThemeSelphiProtocol\'s interface:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'import selphiComponent\nclass CustomThemeSelphi: ThemeSelphiProtocol {\n\tvar name: String = "custom"\n\n\tpublic var customBoolean: Bool = true\n\tvar animations: [R.Animation : String] {\n\t\t[.selphi_anim_tip: customBoolean ? "primary_custom_selphi_anim_tip": "secondary_custom_selphi_anim_tip",\n\t\t .selphi_anim_tip_move: customBoolean ? "primary_custom_selphi_anim_tip_move": "secondary_custom_selphi_anim_tip_move",\n\t\t .selphi_anim_tuto_1: customBoolean ? "primary_custom_selphi_anim_tuto_1": "secondary_custom_selphi_anim_tuto_1",\n\t\t .selphi_anim_tuto_2: customBoolean ? "primary_custom_selphi_anim_tuto_2": "secondary_custom_selphi_anim_tuto_2",\n\t\t .selphi_anim_tuto_3: customBoolean ? "primary_custom_selphi_anim_tuto_3": "secondary_custom_selphi_anim_tuto_3"]\n\t}\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"To customise the component, ThemeSelphiManager.setup(theme: CustomThemeSelphi() ) must be called before launching the selphiController:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"let selphiController = SelphiController(data: SelphiConfigurationData(), output: output, viewController: viewController)\nThemeSelphiManager.setup(theme: CustomThemeSelphi())\nSDKController.shared.launch(controller: selphiController)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"911-animations-guide",children:"9.1.1 Animations guide"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tip"})}),"\nThis animation is shown if the livenessMode configuration parameter is ",(0,s.jsx)(n.strong,{children:"not"})," MOVE."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"var configSelphi = SelphiConfigurationData()\n...\nconfigSelphi.livenessMode = SelphiFaceLivenessMode.PASSIVE\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:t(3817).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tip_move"})}),"\nThis animation is shown if the livenessMode configuration parameter is MOVE."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"var configSelphi = SelphiConfigurationData()\n...\nconfigSelphi.livenessMode = SelphiFaceLivenessMode.MOVE\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:t(5634).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tuto_1"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:t(8229).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tuto_2"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:t(6750).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tuto_3"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:t(9895).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsx)(n.h3,{id:"92-colors-images-dimensions-and-fonts",children:"9.2 Colors, images, dimensions and fonts"}),"\n",(0,s.jsxs)(n.p,{children:["The customization of the other elements from previous images is done inside the ",(0,s.jsx)(n.a,{href:"./Status_Component",children:"Status Component"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"93-texts",children:"9.3 Texts"}),"\n",(0,s.jsxs)(n.p,{children:["The texts can be customized by overriding the value of these keys inside a Localizable.strings. The ones with an ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"_alt"})})," suffix are the accesibility label's needed for the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"voice over"})})," functionality to work."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"selphi_component_tutorial_1"="Place your face in the centre and look straight into the camera.";\n"selphi_component_tutorial_2"="Remove any object that covers your face.";\n"selphi_component_tutorial_3"="Look for a well-lit environment, without shadows on your face.";\n"selphi_component_tip_desc"="Place your face in the center of the circle";\n"selphi_component_tip_title"="Face Recognition";\n"selphi_component_tip_button_message"="START";\n"selphi_component_tip_alt"="Animation of a mobile screen with the front camera activated. A circle appears in the center of the screen. A person shows their face inside the circle and the application takes a photo.";\n"selphi_component_tip_move_alt"="Animation of a mobile screen with the front camera activated. A circle appears in the center of the screen. A person shows their face inside the circle, moves it slightly to the side and the application takes a photo of it. ";\n"selphi_component_tutorial_1_alt"="A circle appears in the center of the screen. A person shows their face. Their entire head can be seen inside the circle. When they are correctly positioned, the application takes a photo of them.";\n"selphi_component_tutorial_2_alt"="A circle appears in the center of the screen. Inside the circle there is a person, wearing sunglasses, and his hair covering part of his face. He takes off his glasses and removes his hair from his face. The application detects your entire face and takes a photo.";\n"selphi_component_tutorial_3_alt"="A dark circle appears in the center of the screen. Inside the circle, it is difficult to see a person\'s face. A light turns on and their face can be clearly seen. After this, the application makes a photo.";\n"selphi_component_tutorial_move_desc"="Place your face in the center of the circle and follow the directions.";\n"selphi_component_timeout_title" = "Timeout";\n"selphi_component_timeout_desc" = "We were unable to identify you. Please try again";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"94-widget-customization",children:"9.4 Widget Customization"}),"\n",(0,s.jsx)(n.p,{children:"Selphi has two different parts, the first one is the tips and tutorial pages as stated in previous sections.\nThe second one is the capture widget."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:t(2777).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsx)(n.p,{children:"This widget can also be customized by following the instructions inside Selphi Resources."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2777:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/capture-001-66e1ea24bb9a85f4d69045004872eb7e.png"},3817:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tips-001-31b3efdf8fcf76f163ce05415a267dad.png"},5634:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tips-002-3b64273af839783af1b1294a3ba7d605.png"},8229:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tutorial-001-06e92da0b8ac08d45a277c6517af113e.png"},6750:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tutorial-002-ed90af26ed2f78e71bd6a79471069841.png"},9895:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tutorial-003-043b959a452e6ba2b791d127405dc82c.png"},225:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);