"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8441],{3441:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(4848),s=i(8453);const r={},o=void 0,l={id:"NFC_Component",title:"NFC_Component",description:"0. SDK Mobile Base Requirements",source:"@site/docs/ios/NFC_Component.md",sourceDirName:".",slug:"/NFC_Component",permalink:"/sdk-mobile-documentation/docs/ios/NFC_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Voice Component",permalink:"/sdk-mobile-documentation/docs/ios/Voice_Component"},next:{title:"VideoCall Component",permalink:"/sdk-mobile-documentation/docs/ios/Video_Call_Component"}},a={},d=[{value:"0. SDK Mobile Base Requirements",id:"0-sdk-mobile-base-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"2.2 Permissions and settings",id:"22-permissions-and-settings",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available drivers",id:"4-available-drivers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class NFCConfigurationData",id:"51-class-nfcconfigurationdata",level:3},{value:"5.1.1. Basic Documentation",id:"511-basic-documentation",level:4},{value:"showTutorial",id:"showtutorial",level:5},{value:"vibrationEnabled",id:"vibrationenabled",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"extractionTimeout",id:"extractiontimeout",level:5},{value:"5.1.2. Advanced Documentation",id:"512-advanced-documentation",level:4},{value:"enableDebugMode",id:"enabledebugmode",level:5},{value:"skipPace",id:"skippace",level:5},{value:"5.1.3 Other parameters",id:"513-other-parameters",level:4},{value:"documentNumber",id:"documentnumber",level:5},{value:"birthDate",id:"birthdate",level:5},{value:"expirationDate",id:"expirationdate",level:5},{value:"issuer",id:"issuer",level:5},{value:"documentType",id:"documenttype",level:5},{value:"readableTags",id:"readabletags",level:5},{value:"6. Using the component",id:"6-using-the-component",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Receiving successful execution - <em>data</em>",id:"72-receiving-successful-execution---data",level:3},{value:"7.2.1. nfcRawData",id:"721-nfcrawdata",level:4},{value:"7.2.2. nfcDocumentInformation",id:"722-nfcdocumentinformation",level:4},{value:"7.2.3. nfcPersonalInformation",id:"723-nfcpersonalinformation",level:4},{value:"7.2.4. nfcImages",id:"724-nfcimages",level:4},{value:"7.2.5 nfcSecurityData",id:"725-nfcsecuritydata",level:4},{value:"7.2.6. nfcValidations",id:"726-nfcvalidations",level:4},{value:"8. Component customisation",id:"8-component-customisation",level:2},{value:"8.1 Texts",id:"81-texts",level:3}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"#NFC Component"}),"\n",(0,t.jsx)(n.h2,{id:"0-sdk-mobile-base-requirements",children:"0. SDK Mobile Base Requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,t.jsx)(n.strong,{children:"Components"}),") that offers\na series of functionalities and services, allowing in turn its\nintegration into a Mobile application in a simple and completely\nscalable. Depending on the use case required, it must be\nperform the installation of certain components. Its high level\nModularity allows, in the future, to add other\nnew components without affecting in any way those already integrated into the\nproject."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the base configuration, go to the [1.5.X][ES] section ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK"})})}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"Component"})," discussed in the current document is called\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"NFC Component"})}),". This is responsible for reading NFC from\nidentity documents and passports. Its main functionalities\nare the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Internal management of the NFC sensor."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Permit management."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Document analysis."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Analysis of progress."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assistant in the reading processes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Return of all possible information to read"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Return of images when they are available for reading"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,t.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Minimum iOS version: ",(0,t.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Minimum device: iPhone 6s - the first to have an NFC reader"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,t.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the documentation related to ** TO DO: [1.5.X][ES] iOS Mobile SDK** and follow the instructions indicated in said document."}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the component\ncurrent in an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,t.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, if you want\ninstall the component in a project that contains an old version\nfrom the Facephi libraries (",(0,t.jsx)(n.em,{children:"Widgets"}),"), these must be removed by\ncomplete before installing the components of the\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,t.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (adding them to the project's Podfile file) are:"]}),"\n",(0,t.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,t.jsx)(n.p,{children:"The mandatory dependencies that must have been previously installed (adding them to the project's Podfile file) are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKMainComponent', '~> 1.4.0'\n"})}),"\n",(0,t.jsx)(n.p,{children:"To install the NFC component, the following entry must be included in the application's Podfile:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKNFCComponent', '~>2.6.0'\n"})}),"\n",(0,t.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,t.jsx)(n.p,{children:"The mandatory dependencies that must have been previously installed are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"To install the NFC component, it must be included in the project modules:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-NFC_component-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-NFC_component-SPM.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the dependencies are installed, you can use the different functionalities of the component."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If developing with ",(0,t.jsx)(n.strong,{children:"xCode15"}),", a post-installation script must be included:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(3585).A+"",width:"1834",height:"510"})}),"\n",(0,t.jsx)(n.h3,{id:"22-permissions-and-settings",children:"2.2 Permissions and settings"}),"\n",(0,t.jsxs)(n.p,{children:["In the client application where the components are going to be integrated, it is necessary to incorporate the following elements in the ",(0,t.jsx)(n.strong,{children:"Info.plist"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"It is necessary to allow the use of NFC - (Privacy - NFC Scan Usage Description)\nIndicate NFC identifiers - (ISO7816 application identifiers for NFC Tag Reader Session)\nA0000002471001\nA0000002472001\n00000000000000\nIt is necessary to add the Near Field Communication Tag Reading option in the Signing & Capabilities section of the target\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,t.jsxs)(n.p,{children:["When you want to perform a certain operation, in order to generate the associated information correctly in the\nassociated information correctly in the platform, the ",(0,t.jsx)(n.strong,{children:"newOperation"})," command\nthe ",(0,t.jsx)(n.strong,{children:"newOperation"})," command must be executed beforehand."]}),"\n",(0,t.jsxs)(n.p,{children:["This command must be executed ",(0,t.jsx)(n.strong,{children:"always"}),". To learn more about how to\nto start a new operation, it is recommended to consult the documentation of\n",(0,t.jsx)(n.strong,{children:"Core Component"})," documentation, which details and explains this process.\nprocess."]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to consult the documentation of [1.5.X][EN] ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK"})})}),", which details and explains what this process consists of."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-available-drivers",children:"4. Available drivers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Controller"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NFCController"}),(0,t.jsx)(n.td,{children:"NFC reading main controller"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,t.jsx)(n.p,{children:"To configure the current component, once it has been initialised, create an object"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"NFCConfigurationData"})," object and pass it as a parameter in the initialisation of ",(0,t.jsx)(n.em,{children:"NFCController"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The following section will show the fields that are part of this class and what each of them is used for."}),"\n",(0,t.jsx)(n.h3,{id:"51-class-nfcconfigurationdata",children:"5.1. Class NFCConfigurationData"}),"\n",(0,t.jsx)(n.h4,{id:"511-basic-documentation",children:"5.1.1. Basic Documentation"}),"\n",(0,t.jsx)(n.h5,{id:"showtutorial",children:"showTutorial"}),"\n",(0,t.jsx)(n.p,{children:"Indicates if the component activates the tutorial screen. This view explains intuitively how the capture is performed."}),"\n",(0,t.jsx)(n.h5,{id:"vibrationenabled",children:"vibrationEnabled"}),"\n",(0,t.jsx)(n.p,{children:"iOS does not allow vibration to be added while taking NFC readings."}),"\n",(0,t.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,t.jsx)(n.p,{children:"If set to true, if an error or lack of permissions occurs, the sdk will display a screen with the error returned by the widget."}),"\n",(0,t.jsx)(n.h5,{id:"extractiontimeout",children:"extractionTimeout"}),"\n",(0,t.jsx)(n.p,{children:"Sets the maximum time the readout can be performed."}),"\n",(0,t.jsx)(n.h4,{id:"512-advanced-documentation",children:"5.1.2. Advanced Documentation"}),"\n",(0,t.jsx)(n.h5,{id:"enabledebugmode",children:"enableDebugMode"}),"\n",(0,t.jsx)(n.p,{children:"Enable debug mode for the component."}),"\n",(0,t.jsx)(n.h5,{id:"skippace",children:"skipPace"}),"\n",(0,t.jsx)(n.p,{children:"Indicates that only NFC BAC reading is desired. This is a simpler and faster\nsimpler and faster information that allows reading of a wider variety of documents.\nvariety of documents."}),"\n",(0,t.jsx)(n.h4,{id:"513-other-parameters",children:"5.1.3 Other parameters"}),"\n",(0,t.jsx)(n.h5,{id:"documentnumber",children:"documentNumber"}),"\n",(0,t.jsx)(n.p,{children:"Indicates the document number or media number depending on the document to be read.\ndocument to be read."}),"\n",(0,t.jsx)(n.p,{children:"This field is mandatory."}),"\n",(0,t.jsx)(n.h5,{id:"birthdate",children:"birthDate"}),"\n",(0,t.jsx)(n.p,{children:'Indicates the date of birth appearing in the document\n("dd/MM/yyyy").'}),"\n",(0,t.jsx)(n.p,{children:"This field is mandatory."}),"\n",(0,t.jsx)(n.h5,{id:"expirationdate",children:"expirationDate"}),"\n",(0,t.jsx)(n.p,{children:'Indicates the expiry date as it appears in the document\n("dd/MM/yyyy").'}),"\n",(0,t.jsx)(n.p,{children:"This field is mandatory."}),"\n",(0,t.jsx)(n.h5,{id:"issuer",children:"issuer"}),"\n",(0,t.jsx)(n.p,{children:"Indicates the country of origin of the document to be read."}),"\n",(0,t.jsx)(n.h5,{id:"documenttype",children:"documentType"}),"\n",(0,t.jsx)(n.p,{children:"Indicates the type of document to be read:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ID_CARD"}),"\n",(0,t.jsx)(n.li,{children:"PASSPORT"}),"\n",(0,t.jsx)(n.li,{children:"FOREIGN_CARD"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"readabletags",children:"readableTags"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"6-using-the-component",children:"6. Using the component"}),"\n",(0,t.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created (",(0,t.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways to launch the component:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows the component functionality to be launched normally, but internal events will be tracked to the tracking server:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[NO TRACKING]"})," This call allows the component's functionality to be launched normally, but no events will be tracked to the tracking server:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)\nNFCController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"launch"})," method must be used ",(0,t.jsx)(n.strong,{children:"by default."})," This method allows ",(0,t.jsx)(n.strong,{children:"tracking"}),"* to be used if your component is enabled, and will not use it when it is disabled (or the component is not installed)."]}),"\n",(0,t.jsxs)(n.p,{children:["On the contrary, the ",(0,t.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in which the integrator has tracking installed and activated, but in a certain flow within the application does not want to track information. In that case, this method is used to avoid sending that information to the platform."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,t.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult format\n-more details in the [1.5.X][EN] ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK's"})})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,t.jsxs)(n.p,{children:["En la parte del error, ",(0,t.jsx)(n.strong,{children:"internamente"})," disponemos de la clase NFCPassportReaderError. Este enumerado contiene muchos errores espec\xedficos que no aportan informaci\xf3n \xfatil si son devueltos al integrador, por lo que son transformados a un tipo m\xe1s simple (",(0,t.jsx)(n.strong,{children:"ErrorType"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"extension NFCPassportReaderError {\n    func toErrorType() -> ErrorType {\n        switch self {\n        case .UserCanceled:\n            return .CANCEL_BY_USER\n        case .NFCNotSupported:\n            return .NFC_ERROR\n        case .InvalidMRZKey:\n            return .NFC_INVALID_MRZ_KEY\n        case .Timeout:\n            return .TIMEOUT\n        default:\n            return .UNKNOWN_ERROR\n        }\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"}),": ",(0,t.jsx)(n.code,{children:"NFC_INVALID_MRZ_KEY"})," ",(0,t.jsx)(n.em,{children:"implies that the connection could not be established because the configuration input data (documentNumber, birthDate, expiryDate) is not correct.\nAll read launches for that NFC shall fail as long as a new NFCController is not initialised with the correct data."}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"72-receiving-successful-execution---data",children:["7.2. Receiving successful execution - ",(0,t.jsx)(n.em,{children:"data"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"data"})," part, we will have the ",(0,t.jsx)(n.em,{children:"NfcResult"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"public class NfcResult {\n    public let nfcRawData: NfcRawData\n    public private(set) var nfcDocumentInformation: NfcDocumentInformation?\n    public private(set) var nfcPersonalInformation: NfcPersonalInformation?\n    public let nfcImages: NfcImages?\n    public let nfcSecurityData: NfcSecurityData\n    public private(set) var nfcValidations: NfcValidations?\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the case of this component, the fields returned are the following:"}),"\n",(0,t.jsx)(n.h4,{id:"721-nfcrawdata",children:"7.2.1. nfcRawData"}),"\n",(0,t.jsx)(n.p,{children:"Information obtained for each data type in raw format."}),"\n",(0,t.jsx)(n.h4,{id:"722-nfcdocumentinformation",children:"7.2.2. nfcDocumentInformation"}),"\n",(0,t.jsx)(n.p,{children:"Information retrieved from the document sorted by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"documentNumber"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"expirationDate"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"issuer"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"mrzString"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"type"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"723-nfcpersonalinformation",children:"7.2.3. nfcPersonalInformation"}),"\n",(0,t.jsx)(n.p,{children:"Information obtained from the document sorted by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"address"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"birthdate"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"gender"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"name"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"nationality"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"personalNumber"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"placeOfBirth"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"surname"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"724-nfcimages",children:"7.2.4. nfcImages"}),"\n",(0,t.jsx)(n.p,{children:"Image information obtained from the document ordered by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"facialImage"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"fingerprintImage"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"signatureImage"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"725-nfcsecuritydata",children:"7.2.5 nfcSecurityData"}),"\n",(0,t.jsx)(n.p,{children:"Document security data information sorted by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"dataGroupsHashes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"dataGroupsRead"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"documentSigningCertificateData"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"issuerSigningCertificateData"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ldsVersion"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"726-nfcvalidations",children:"7.2.6. nfcValidations"}),"\n",(0,t.jsx)(n.p,{children:"Information of the document validations sorted by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"accessProtocol"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"activeAuthenticationSupported"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"activeAuthenticationValidation"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"chipAuthenticationValidation"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"dataGroupsHashesValidation"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"documentSigningValidation"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"issuerSigningValidation"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"8-component-customisation",children:"8. Component customisation"}),"\n",(0,t.jsx)(n.p,{children:"The NFC component has parameterisable visual resources that modify the interface, animations, texts and translations,..."}),"\n",(0,t.jsx)(n.p,{children:"The customisation system is based on themes. By default, the component has a theme called ThemeNFC."}),"\n",(0,t.jsx)(n.p,{children:"To modify the visual interface (UX/UI) you can create a new CustomTheme that extends the following protocol:"}),"\n",(0,t.jsx)(n.h3,{id:"81-texts",children:"8.1 Texts"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to modify the SDK texts you would have to include the following\nXML file in the client application, and modify the value of each ",(0,t.jsx)(n.em,{children:"String"})," to\nvalue of each ",(0,t.jsx)(n.em,{children:"String"})," to the desired one."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"public protocol ThemeNFCProtocol {\n    var name: String { get }\n    var fonts: [R.Font: String] { get }\n    var dimensions: [R.Dimension: CGFloat] { get }\n    var images: [R.Image: UIImage?] { get }\n    var colours: [R.Color: UIColor?] { get }\n    var animations: [R.Animation: String] { get }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'class CustomThemeNFC: ThemeNFCProtocol {\n    public var name: String {\n        "customNfc"\n    }\n\n    public var fonts: [R.Font: String] {\n        [.bold: "Arial"] // the font is overrided\n    }\n\n    public var dimensions: [R.Dimension: CGFloat] {\n        [.fontSmall: 7,\n         .fontRegular: 12,\n         .fontBig: 20,\n         .radiusCorner: 16]\n    }\n    ...\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"To apply this custom theme we must use the following instruction before launching the component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ThemeNFCManager.setup(theme: CustomThemeNFC())\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3585:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);