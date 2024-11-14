"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4555],{5599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(5893),s=t(1151);const o={},r="SelphID Component",a={id:"SelphID_Component",title:"SelphID Component",description:"0. SDK Mobile baseline requirements",source:"@site/ios_versioned_docs/version-1.5.X/SelphID_Component.md",sourceDirName:".",slug:"/SelphID_Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/SelphID_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Selphi Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/Selphi_Component"},next:{title:"Voice Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/Voice_Component"}},c={},l=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"2.2 Permissions and configurations",id:"22-permissions-and-configurations",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1 Class SelphIDConfigurationData",id:"51-class-selphidconfigurationdata",level:3},{value:"5.1.1 Basic Configuration",id:"511-basic-configuration",level:4},{value:"ResourcesPath",id:"resourcespath",level:5},{value:"WizardMode",id:"wizardmode",level:5},{value:"ShowResultAfterCapture",id:"showresultaftercapture",level:5},{value:"ShowTutorial",id:"showtutorial",level:5},{value:"ScanMode",id:"scanmode",level:5},{value:"SpecificData",id:"specificdata",level:5},{value:"DocumentType",id:"documenttype",level:5},{value:"ShowDiagnostic",id:"showdiagnostic",level:5},{value:"5.1.2 Advanced configuration",id:"512-advanced-configuration",level:4},{value:"Debug",id:"debug",level:5},{value:"TutorialOnly",id:"tutorialonly",level:5},{value:"TokenImageQuality",id:"tokenimagequality",level:5},{value:"Locale",id:"locale",level:5},{value:"DocumentSide",id:"documentside",level:5},{value:"Timeout",id:"timeout",level:5},{value:"GenerateRawImages",id:"generaterawimages",level:5},{value:"TranslationsContent",id:"translationscontent",level:5},{value:"ViewsContent",id:"viewscontent",level:5},{value:"DocumentModels",id:"documentmodels",level:5},{value:"5.1.3 Other parameters",id:"513-other-parameters",level:4},{value:"VideoFilename",id:"videofilename",level:5},{value:"TokenPreviousCaptureData",id:"tokenpreviouscapturedata",level:5},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Using the component",id:"6-using-the-component",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receiving errors",id:"71-receiving-errors",level:3},{value:"7.2. Receiving successful execution - data",id:"72-receiving-successful-execution---data",level:3},{value:"7.2.1 rawFrontDocumentData / rawFrontDocument / frontDocument / frontDocumentData / tokenFrontDocument / tokenRawFrontDocument:",id:"721-rawfrontdocumentdata--rawfrontdocument--frontdocument--frontdocumentdata--tokenfrontdocument--tokenrawfrontdocument",level:4},{value:"7.2.2 rawBackDocumentData / rawBackDocument / backDocument / backDocumentData / tokenBackDocument / tokenRawBackDocument:",id:"722-rawbackdocumentdata--rawbackdocument--backdocument--backdocumentdata--tokenbackdocument--tokenrawbackdocument",level:4},{value:"7.2.3 faceImage / faceImageData / tokenFaceImage.",id:"723-faceimage--faceimagedata--tokenfaceimage",level:4},{value:"7.2.4 documentCaptured",id:"724-documentcaptured",level:4},{value:"7.2.5 matchingSidesScore",id:"725-matchingsidesscore",level:4},{value:"7.2.6 Property captureProgress",id:"726-property-captureprogress",level:4},{value:"7.2.7 ocrResults / tokenOCR",id:"727-ocrresults--tokenocr",level:4}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"selphid-component",children:"SelphID Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"})," section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"Component"})," dealt with in the current document is called ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SelphID\nComponent"})}),". It is in charge of capturing documents and the subsequent\nextraction and analysis of their data. Its main functionalities are the\nfollowing:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Internal management of cameras."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Permits management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Assistant in the processes of capturing the front and back of the\ndocument. Extraction of the information contained in the document."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Obtain the images of the back and reverse side of the document, as\nwell as other images included in the document: user's face, user's\nsignature, etc."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"High level of configuration: different countries, languages,\ndocument types..."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,i.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,i.jsxs)(n.p,{children:["Minimum iOS version: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the\ndocumentation related to ",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:"Mobile SDK"})}),"\nand follow its instructions."]})}),"\n",(0,i.jsx)(n.p,{children:"This section will explain step by step how to integrate the current component into an existing project.\ncomponent into an existing project."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nIn order to avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the Facephi libraries.\nof the Facephi libraries (",(0,i.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before the installation of the components.\ncompletely before the installation of the components of the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," components."]})}),"\n",(0,i.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,i.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (adding them in the Podfile file of the project) are:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 1.5.0'\n  pod 'JWTDecode'\n  pod 'SwiftFormat/CLI'\n  pod 'IQKeyboardManagerSwift'\n  pod 'zipzap'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To install the SelphID component, the following entry must be included in the application Podfile:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  pod 'FPHISDKSelphIDComponent', '~> 1.5.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In case of development with ",(0,i.jsx)(n.strong,{children:"xCode15"})," a post-installation script must be included:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(9232).Z+"",width:"1834",height:"510"})}),"\n",(0,i.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The mandatory dependencies that must have been previously installed are:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To install the SelphID component, it must be included in the project modules:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SelphidComponentLight.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SelphidComponentLight.git\n"})}),"\n",(0,i.jsx)(n.h3,{id:"22-permissions-and-configurations",children:"2.2 Permissions and configurations"}),"\n",(0,i.jsx)(n.p,{children:"In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file"}),"\n",(0,i.jsx)(n.p,{children:"It is necessary to allow the use of the camera (Privacy - Camera Usage Description)."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,i.jsxs)(n.p,{children:["In order to generate the associated information correctly in the platform, the ",(0,i.jsx)(n.strong,{children:"newOperation"})," command must be executed first."]}),"\n",(0,i.jsxs)("div",{class:"note",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,i.jsx)(n.strong,{children:"before launch"}),"."]}),(0,i.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:"Mobile SDK"})}),"\ndocumentation, which details and explains what this process consists of."]})]}),"\n",(0,i.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Controller"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Description"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SelphIDController"}),(0,i.jsx)(n.td,{children:"Document recognition main controller"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Once initialized, a ",(0,i.jsx)(n.em,{children:"SelphIDConfigurationData"})," object must be created\nand passed as a parameter to the SDKController during component launch\nto configure the current component."]}),"\n",(0,i.jsx)(n.p,{children:"The following section will show the fields part of this class and what\neach is used for."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-selphidconfigurationdata",children:"5.1 Class SelphIDConfigurationData"}),"\n",(0,i.jsx)(n.h4,{id:"511-basic-configuration",children:"5.1.1 Basic Configuration"}),"\n",(0,i.jsx)(n.h5,{id:"resourcespath",children:"ResourcesPath"}),"\n",(0,i.jsx)(n.p,{children:"This is the name of the resource bundle that contains all the elements of the interface"}),"\n",(0,i.jsx)(n.h5,{id:"wizardmode",children:"WizardMode"}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether the widget is configured to capture both parts (front and back) of the document one after the other. In this mode the widget would only be launched once and when it finishes capturing the front, it would continue with the back."}),"\n",(0,i.jsx)(n.h5,{id:"showresultaftercapture",children:"ShowResultAfterCapture"}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether or not to show a screen with the captured image of the document after the analysis process. This screen gives the user the possibility to repeat the capture process if the image obtained from the document is not correct."}),"\n",(0,i.jsx)(n.h5,{id:"showtutorial",children:"ShowTutorial"}),"\n",(0,i.jsx)(n.p,{children:"This property allows to show the tutorial prior to the capture process."}),"\n",(0,i.jsx)(n.h5,{id:"scanmode",children:"ScanMode"}),"\n",(0,i.jsx)(n.p,{children:"Specifies the OCR scanning mode of the documents. Depending on the choice, several types of documents or a specific one will be scanned and searched. This mode can be of three types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDScanMode.MODE_GENERIC:"})," The generic mode that allows scanning any type of document independent of country or document type. The output of this mode is not as accurate as the following but it allows to scan several standard documents."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDScanMode.MODE_SPECIFIC:"}),' The search mode will allow to use a whitelist and blacklist, and will search the documents that meet these conditions. These conditions are indicated in the variable "specificData". This allows the search to be performed by narrowing the number of templates, and making the search much more refined than in the generic case.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDScanMode.MODE_SEARCH:"}),' Search for a specific document. These conditions are indicated in the "specificData" property shown below.']}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"specificdata",children:"SpecificData"}),"\n",(0,i.jsx)(n.p,{children:"This property allows to define which documents will be scanned during the process, in case of declaring the scan mode (scanMode) to SMSearch or SMSpecific."}),"\n",(0,i.jsx)(n.p,{children:"An example configuration allowing to scan all documents of Spanish nationality would be the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// Search mode definition\nconf.scanMode = SelphIDScanMode.MODE_SEARCH\nconf.specificData = \u201cES|<ALL>\u201d // C\xf3digo ISO de Espa\xf1a (ES)\n"})}),"\n",(0,i.jsx)(n.h5,{id:"documenttype",children:"DocumentType"}),"\n",(0,i.jsx)(n.p,{children:"The allowed values are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDDocumentType.ID_CARD:"})," The widget is configured to perform ID document capture."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDDocumentType.PASSPORT:"})," The widget is configured to capture passports."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDDocumentType.DRIVERS_LICENSE:"})," The widget is configured to capture driver's licenses."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDDocumentType.FOREIGN_CARD:"})," The widget is configured to capture foreign documents."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The widget is configured to perform the capture of credit cards."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDDocumentType.CUSTOM:"})," The widget is configured to capture other types of documents that do not fall into any of the above categories."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"showdiagnostic",children:"ShowDiagnostic"}),"\n",(0,i.jsx)(n.p,{children:"If set to true, when an error or lack of permissions occurs, the sdk will display a screen with the error returned by the widget."}),"\n",(0,i.jsx)(n.h4,{id:"512-advanced-configuration",children:"5.1.2 Advanced configuration"}),"\n",(0,i.jsx)(n.h5,{id:"debug",children:"Debug"}),"\n",(0,i.jsx)(n.p,{children:"When this attribute is set to true, the number of traces is increased and technical information is displayed on the screen."}),"\n",(0,i.jsx)(n.p,{children:"**Once the development is finished, it must be set to false."}),"\n",(0,i.jsx)(n.h5,{id:"tutorialonly",children:"TutorialOnly"}),"\n",(0,i.jsxs)(n.p,{children:["This property allows to show ",(0,i.jsx)(n.strong,{children:"only the tutorial"}),", without launching later the capture process."]}),"\n",(0,i.jsx)(n.h5,{id:"tokenimagequality",children:"TokenImageQuality"}),"\n",(0,i.jsxs)(n.p,{children:["It indicates the quality of the JPEG that is generated and then tokenized, its default and recommended value is ",(0,i.jsx)(n.strong,{children:'"0.5"'}),". Its result is merely informative, its use is not recommended for authentication."]}),"\n",(0,i.jsx)(n.h5,{id:"locale",children:"Locale"}),"\n",(0,i.jsx)(n.p,{children:"It is a String that allows to change the locale and language of the widget. Examples of values it can have are the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'"es" for Spanish.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'en" for English.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'fr" for French.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In short, it will depend on the name that appears in the strings.xml file of the language you want to select (",(0,i.jsx)(n.code,{children:"strings-es.xml"}),", ",(0,i.jsx)(n.code,{children:"strings-en.xml"}),", ",(0,i.jsx)(n.code,{children:"strings-fr.xml"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["In the resources zip, which is located inside the strings folder, you can add the ",(0,i.jsx)(n.code,{children:"strings-xx.xml"})," files corresponding to each localization you need to incorporate in the widget."]}),"\n",(0,i.jsx)(n.h5,{id:"documentside",children:"DocumentSide"}),"\n",(0,i.jsx)(n.p,{children:"The allowed values are the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDDocumentSide.FRONT:"})," The widget is configured to capture the front side of the document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDDocumentSide.BACK:"})," The widget is configured to capture the back side of the document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDDocumentSide.ALL:"})," The widget is configured to capture both sides of the document."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"timeout",children:"Timeout"}),"\n",(0,i.jsx)(n.p,{children:"It is an enumerated that defines the timeout of the capture of one side of the document. It has 3 possible values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDTimeout.SHORT:"})," 15 seconds."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDTimeout.MEDIUM:"})," 20 seconds."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphIDTimeout.LONG:"})," 25 seconds."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"generaterawimages",children:"GenerateRawImages"}),"\n",(0,i.jsxs)(n.p,{children:["This property configures the widget to return the full image from the camera that was used to capture the document. These images are returned in the ",(0,i.jsx)(n.code,{children:"rawFrontDocument"})," and ",(0,i.jsx)(n.code,{children:"rawBackDocument"})," properties of the ",(0,i.jsx)(n.code,{children:"results"})," object respectively."]}),"\n",(0,i.jsx)(n.h5,{id:"translationscontent",children:"TranslationsContent"}),"\n",(0,i.jsx)(n.p,{children:"This property supports an xml where you provide translations to the messages that are defined in the widget"}),"\n",(0,i.jsx)(n.h5,{id:"viewscontent",children:"ViewsContent"}),"\n",(0,i.jsx)(n.p,{children:"This property supports an xml where you provide modifications to the widget appearance, colors, proportions... that are defined."}),"\n",(0,i.jsx)(n.h5,{id:"documentmodels",children:"DocumentModels"}),"\n",(0,i.jsx)(n.p,{children:"This property allows, by means of a string in xml format, to configure the modeling of the documents that the widget will try to capture. The definition of this modeling is contained, by default, in a .xml of models that is in the .zip of resources. This property allows an application to update, in hot, the modeling of the documents."}),"\n",(0,i.jsx)(n.p,{children:"Note: This property does not alter the content of the resource file."}),"\n",(0,i.jsx)(n.h4,{id:"513-other-parameters",children:"5.1.3 Other parameters"}),"\n",(0,i.jsx)(n.h5,{id:"videofilename",children:"VideoFilename"}),"\n",(0,i.jsx)(n.p,{children:"Sets the absolute path to the filename where a video of the capture process will be recorded. The application is responsible for requesting the necessary permissions from the phone in case that path requires additional permissions. The widget, by default, will not perform any recording process unless a file path is specified using this method."}),"\n",(0,i.jsx)(n.h5,{id:"tokenpreviouscapturedata",children:"TokenPreviousCaptureData"}),"\n",(0,i.jsx)(n.p,{children:"When the document capture is performed in 2 calls, this property allows to pass a dictionary with the information from the previous capture. This way the widget can combine the results of both reads in a smart way and thus return the combined information from both captures. It also allows the widget to calculate a degree of similarity of the data from both sides."}),"\n",(0,i.jsx)(n.p,{children:"In case both sides of the document are captured in a single call this is not necessary as the widget internally does this process."}),"\n",(0,i.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,i.jsx)(n.p,{children:"If true, vibration is enabled on errors and if the widget response is OK, the following is true"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-using-the-component",children:"6. Using the component"}),"\n",(0,i.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,i.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component, but internal events will be tracked to the\n",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"let controller = SelphIDController(data: selphIDConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component, but ",(0,i.jsx)(n.strong,{children:"no event will be tracked"})," to\nthe ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"let controller = SelphIDController(data: selphIDConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,i.jsxs)("div",{class:"warning",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,i.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,i.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," if your component is enabled and will not be used when it\nis disabled (or the component is not installed)."]}),(0,i.jsxs)(n.p,{children:["On the other hand, the ",(0,i.jsx)(n.strong,{children:"launchMethod"})," method covers a particular case\nin which the integrator has tracking installed and activated but, in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]})]}),"\n",(0,i.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,i.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult format\n-more details in the ",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK's"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"71-receiving-errors",children:"7.1. Receiving errors"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"finishStatus"}),": Which will tell us if the operation has finished successfully. Possible values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"errorType"}),": Errors specific to the widget."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"case SELPHID_CANCEL_BY_USER\ncase SELPHID_TIMEOUT\ncase SELPHID_INTERNAL_ERROR\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"data"}),": It will have the response data of the executed component function. The fields included in this component are specified in section 7.2."]}),"\n",(0,i.jsx)(n.h3,{id:"72-receiving-successful-execution---data",children:"7.2. Receiving successful execution - data"}),"\n",(0,i.jsx)(n.p,{children:"The data field is variable and will depend on which component the result was returned. In the case of this component, the fields returned are as follows:"}),"\n",(0,i.jsx)(n.h4,{id:"721-rawfrontdocumentdata--rawfrontdocument--frontdocument--frontdocumentdata--tokenfrontdocument--tokenrawfrontdocument",children:"7.2.1 rawFrontDocumentData / rawFrontDocument / frontDocument / frontDocumentData / tokenFrontDocument / tokenRawFrontDocument:"}),"\n",(0,i.jsx)(n.p,{children:"The front image of the processed document, cleaned and trimmed by the edges and its corresponding token."}),"\n",(0,i.jsx)(n.h4,{id:"722-rawbackdocumentdata--rawbackdocument--backdocument--backdocumentdata--tokenbackdocument--tokenrawbackdocument",children:"7.2.2 rawBackDocumentData / rawBackDocument / backDocument / backDocumentData / tokenBackDocument / tokenRawBackDocument:"}),"\n",(0,i.jsx)(n.p,{children:"The back image of the processed, cleaned and edge-trimmed document and its associated token."}),"\n",(0,i.jsx)(n.h4,{id:"723-faceimage--faceimagedata--tokenfaceimage",children:"7.2.3 faceImage / faceImageData / tokenFaceImage."}),"\n",(0,i.jsx)(n.p,{children:"The image of the face found in the document, if any, and its associated token."}),"\n",(0,i.jsx)(n.h4,{id:"724-documentcaptured",children:"7.2.4 documentCaptured"}),"\n",(0,i.jsx)(n.p,{children:"This property indicates the document model that has been captured when a search is performed in SMSearch mode. In this way the application can know which model, among all the allowed ones, has been detected."}),"\n",(0,i.jsx)(n.h4,{id:"725-matchingsidesscore",children:"7.2.5 matchingSidesScore"}),"\n",(0,i.jsx)(n.p,{children:"This property returns a calculation of the similarity of the data read between the front and the back of the document. The calculation is performed by checking the similarity between the common fields read on both sides. The result of the calculation will be a value between 0.0 and 1.0 if there are common fields in the document. The higher the value, the more similar the data compared. If the calculation returns -1.0 then the document does not contain common fields or there is no information from the two sides yet."}),"\n",(0,i.jsx)(n.h4,{id:"726-property-captureprogress",children:"7.2.6 Property captureProgress"}),"\n",(0,i.jsx)(n.p,{children:"This property returns the state in which the capture process was when the widget finished. These are the possible values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Front_Detection_None = 0\nFront_Detection_Uncertain = 1\nFront_Detection_Completed = 2\nFront_Document_Analyzed = 3\nBack_Detection_None = 4\nBack_Detection_Uncertain = 5\nBack_Detection_Completed = 6\nBack_Document_Analyzed = 7\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0"}),": When reading the Front, the widget ended without being able to detect anything. Generally when no document is put in."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1"}),": In the Front reading, the widget ended up having partially detected a document. In this case some of the expected elements have been detected, but not all the necessary ones."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2"}),": In the Front reading, the widget ended up having completed the detection of all the elements of the document. If the widget ends up in this state, it is because the OCR analysis could not be completed successfully."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3"}),": In the Front reading, the widget ended up having analyzed and extracted all the OCR from the document. This is the state in which a successful Front reading of a document would end."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The states ",(0,i.jsx)(n.strong,{children:"4 to 7"})," are exactly the same but refer to the result of the process when the back is analyzed."]}),"\n",(0,i.jsx)(n.h4,{id:"727-ocrresults--tokenocr",children:"7.2.7 ocrResults / tokenOCR"}),"\n",(0,i.jsx)(n.p,{children:"This dictionary contains all the data detected in the document. The keys of each field are encoded in such a way that the key itself contains information on where the value was obtained from. Thus, for example, the key Front/MRZ/DocumentNumber indicates the value of the DocumentNumber that has been read in the Front of the document and in the MRZ region. These keys depend on the captured document and will therefore be different between different countries and document models. The dictionary also contains keys with more generic names and which do not carry location information. These keys contain the most complete data of all those read for that field."}),"\n",(0,i.jsx)(n.p,{children:"These keys are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FirstName"}),": The value associated with this key contains the user's first name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LastName"}),": The value associated with this key contains the user's last name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DateOfBirth"}),": The value associated with this key contains the date of birth detected in the document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Gender"}),": The value associated to this key contains the user's gender detected in the document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nationality"}),": The value associated to this key contains the nationality of the user detected in the document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DocumentNumber"}),": The value associated with this key contains the document number."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DateOfExpiry"}),": The value associated with this key contains the expiry date of the document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Issuer"}),": The value associated with this key contains the publisher of the document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DateofIssue"}),": The value associated with this key contains the date of issue of the document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PlaceOfBirth"}),": The value associated with this key contains the user's place of birth."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Address"}),": The value associated to this key contains the address detected in the document."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, keys of the results object itself are added to make it easier to search for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DocumentCaptured"}),": Value of the document template that has been captured according to the .xml of templates. Corresponds to the documentCaptured property."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MatchingSidesScore"}),": Value that indicates the correspondence between the read sides of the document. It corresponds to the matchingSidesScore property."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9232:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);