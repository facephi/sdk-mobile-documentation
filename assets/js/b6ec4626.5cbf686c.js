"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5769],{4496:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(4848),o=i(8453);const r={},s="NFC Component",a={id:"NFC_Component",title:"NFC Component",description:"0. SDK Mobile Base Requirements",source:"@site/ios_versioned_docs/version-1.5.X/NFC_Component.md",sourceDirName:".",slug:"/NFC_Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/NFC_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Voice Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/Voice_Component"},next:{title:"Video Call Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/Video_Call_Component"}},l={},c=[{value:"0. SDK Mobile Base Requirements",id:"0-sdk-mobile-base-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"2.2 Permissions and settings",id:"22-permissions-and-settings",level:3},{value:"3. Start a new operation",id:"3-start-a-new-operation",level:2},{value:"4. Available drivers",id:"4-available-drivers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class NFCConfigurationData",id:"51-class-nfcconfigurationdata",level:3},{value:"5.1.1. Basic Documentation",id:"511-basic-documentation",level:4},{value:"showTutorial",id:"showtutorial",level:5},{value:"vibrationEnabled",id:"vibrationenabled",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"extractionTimeout",id:"extractiontimeout",level:5},{value:"5.1.2. Advanced Documentation",id:"512-advanced-documentation",level:4},{value:"enableDebugMode",id:"enabledebugmode",level:5},{value:"skipPace",id:"skippace",level:5},{value:"5.1.3 Other parameters",id:"513-other-parameters",level:4},{value:"documentNumber",id:"documentnumber",level:5},{value:"birthDate",id:"birthdate",level:5},{value:"expirationDate",id:"expirationdate",level:5},{value:"issuer",id:"issuer",level:5},{value:"documentType",id:"documenttype",level:5},{value:"readableTags",id:"readabletags",level:5},{value:"6. Component use",id:"6-component-use",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.2. Receiving successful execution - <em>data</em>",id:"72-receiving-successful-execution---data",level:3},{value:"7.2.1. nfcRawData",id:"721-nfcrawdata",level:4},{value:"7.2.2. nfcDocumentInformation",id:"722-nfcdocumentinformation",level:4},{value:"7.2.3. nfcPersonalInformation",id:"723-nfcpersonalinformation",level:4},{value:"7.2.4. nfcImages",id:"724-nfcimages",level:4},{value:"7.2.5 nfcSecurityData",id:"725-nfcsecuritydata",level:4},{value:"7.2.6. nfcValidations",id:"726-nfcvalidations",level:4},{value:"7.2.7 personalData",id:"727-personaldata",level:4},{value:"8. Component customisation",id:"8-component-customisation",level:2},{value:"8.1 Texts",id:"81-texts",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nfc-component",children:"NFC Component"}),"\n",(0,t.jsx)(n.h2,{id:"0-sdk-mobile-base-requirements",children:"0. SDK Mobile Base Requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,t.jsx)(n.strong,{children:"NFC\nComponent"}),". It is responsible for NFC reading of ID cards and\npassports. Its main functionalities are the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Internal management of the NFC sensor."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Permission management."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Document analysis."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Progress analysis."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assistant in reading processes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Return all possible information to be read"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Return of images when they are available for reading."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,t.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Minimum iOS version: ",(0,t.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Minimum device: iPhone 6s - the first to have an NFC reader"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,t.jsx)("div",{class:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the documentation related to\n",(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,t.jsx)("strong",{children:"Mobile SDK"})}),"\nand follow the instructions indicated in said document."]})}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the component\ncurrent in an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,t.jsx)("div",{class:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nTo avoid conflicts and compatibility problems, if you want to install\nthe component in a project containing an old Facephi libraries\n(",(0,t.jsx)(n.em,{children:"Widgets"}),") version, these must be removed entirely before installing\nthe ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"SDKMobile"})})," components."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Currently FacePhi libraries are distributed remotely through\ndifferent dependency managers, in this case Cocoapods.\nThe ",(0,t.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed\n(adding them to the project's Podfile file) are:"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,t.jsx)(n.p,{children:"The mandatory dependencies that must have been previously installed (adding them to the project's Podfile file) are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,t.jsx)(n.p,{children:"To install the NFC component, the following entry must be included in the application's Podfile:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKNFCComponent', '~>2.6.0'\n"})}),"\n",(0,t.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,t.jsx)(n.p,{children:"The mandatory dependencies that must have been previously installed are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"To install the NFC component, it must be included in the project modules:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-NFC_component-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-NFC_component-SPM.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the dependencies are installed, you can use the different functionalities of the component."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If developing with ",(0,t.jsx)(n.strong,{children:"xCode15"}),", a post-installation script must be included:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(3585).A+"",width:"1834",height:"510"})}),"\n",(0,t.jsx)(n.h3,{id:"22-permissions-and-settings",children:"2.2 Permissions and settings"}),"\n",(0,t.jsxs)(n.p,{children:["In the client application where the components are going to be integrated, it is necessary to incorporate the following elements in the ",(0,t.jsx)(n.strong,{children:"Info.plist"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"It is necessary to allow the use of NFC - (Privacy - NFC Scan Usage Description)\nIndicate NFC identifiers - (ISO7816 application identifiers for NFC Tag Reader Session)\nA0000002471001\nA0000002472001\n00000000000000\nIt is necessary to add the Near Field Communication Tag Reading option in the Signing & Capabilities section of the target\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-start-a-new-operation",children:"3. Start a new operation"}),"\n",(0,t.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,t.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,t.jsxs)("div",{class:"note",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,t.jsx)(n.strong,{children:"before launch"}),"."]}),(0,t.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,t.jsx)("strong",{children:"Mobile SDK"})})," documentation, which details and explains what this process consists of."]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-available-drivers",children:"4. Available drivers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Controller"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NFCController"}),(0,t.jsx)(n.td,{children:"NFC reading main controller"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Once initialized, a ",(0,t.jsx)(n.em,{children:"NFCConfigurationData"})," object must be created and\npassed as a parameter to the SDKController during component launch to\nconfigure the current component."]}),"\n",(0,t.jsx)(n.p,{children:"The following section will show the fields part of this class and what\neach is used for."}),"\n",(0,t.jsx)(n.h3,{id:"51-class-nfcconfigurationdata",children:"5.1. Class NFCConfigurationData"}),"\n",(0,t.jsx)(n.h4,{id:"511-basic-documentation",children:"5.1.1. Basic Documentation"}),"\n",(0,t.jsx)(n.h5,{id:"showtutorial",children:"showTutorial"}),"\n",(0,t.jsx)(n.p,{children:"Indicates if the component activates the tutorial screen. This view explains intuitively how the capture is performed."}),"\n",(0,t.jsx)(n.h5,{id:"vibrationenabled",children:"vibrationEnabled"}),"\n",(0,t.jsx)(n.p,{children:"iOS does not allow vibration to be added while taking NFC readings."}),"\n",(0,t.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,t.jsx)(n.p,{children:"If set to true, if an error or lack of permissions occurs, the sdk will display a screen with the error returned by the widget."}),"\n",(0,t.jsx)(n.h5,{id:"extractiontimeout",children:"extractionTimeout"}),"\n",(0,t.jsx)(n.p,{children:"Sets the maximum time the readout can be performed."}),"\n",(0,t.jsx)(n.h4,{id:"512-advanced-documentation",children:"5.1.2. Advanced Documentation"}),"\n",(0,t.jsx)(n.h5,{id:"enabledebugmode",children:"enableDebugMode"}),"\n",(0,t.jsx)(n.p,{children:"Enable debug mode for the component."}),"\n",(0,t.jsx)(n.h5,{id:"skippace",children:"skipPace"}),"\n",(0,t.jsx)(n.p,{children:"Indicates that only NFC BAC reading is desired. This is a simpler and faster\nsimpler and faster information that allows reading of a wider variety of documents.\nvariety of documents."}),"\n",(0,t.jsx)(n.h4,{id:"513-other-parameters",children:"5.1.3 Other parameters"}),"\n",(0,t.jsx)(n.h5,{id:"documentnumber",children:"documentNumber"}),"\n",(0,t.jsx)(n.p,{children:"Indicates the document number or media number depending on the document to be read.\ndocument to be read."}),"\n",(0,t.jsx)(n.p,{children:"This field is mandatory."}),"\n",(0,t.jsx)(n.h5,{id:"birthdate",children:"birthDate"}),"\n",(0,t.jsx)(n.p,{children:'Indicates the date of birth appearing in the document\n("dd/MM/yyyy").'}),"\n",(0,t.jsx)(n.p,{children:"This field is mandatory."}),"\n",(0,t.jsx)(n.h5,{id:"expirationdate",children:"expirationDate"}),"\n",(0,t.jsx)(n.p,{children:'Indicates the expiry date as it appears in the document\n("dd/MM/yyyy").'}),"\n",(0,t.jsx)(n.p,{children:"This field is mandatory."}),"\n",(0,t.jsx)(n.h5,{id:"issuer",children:"issuer"}),"\n",(0,t.jsx)(n.p,{children:"Indicates the country of origin of the document to be read."}),"\n",(0,t.jsx)(n.h5,{id:"documenttype",children:"documentType"}),"\n",(0,t.jsx)(n.p,{children:"Indicates the type of document to be read:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ID_CARD"}),"\n",(0,t.jsx)(n.li,{children:"PASSPORT"}),"\n",(0,t.jsx)(n.li,{children:"FOREIGN_CARD"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"readabletags",children:"readableTags"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,t.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,t.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component, but internal events will be tracked to the\n",(0,t.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component, but ",(0,t.jsx)(n.strong,{children:"no event will be tracked"})," to\nthe ",(0,t.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)\nNFCController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,t.jsxs)("div",{class:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe ",(0,t.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,t.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled and will not be\nused when it is disabled (or the component is not installed)."]}),(0,t.jsxs)(n.p,{children:["On the other hand, the ",(0,t.jsx)(n.strong,{children:"launchMethod"})," method covers a particular case\nin which the integrator has tracking installed and activated but, in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,t.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult format\n-more details in the ",(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK's"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,t.jsxs)(n.p,{children:["On the error side, ",(0,t.jsx)(n.strong,{children:"internally"})," we have the NFCPassportReaderError class. This enumeration contains many specific errors that do not provide useful information if returned to the integrator, so they are transformed to a simpler type (",(0,t.jsx)(n.strong,{children:"ErrorType"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"    CANCEL_BY_USER\n    TIMEOUT\n    UNKNOWN_ERROR\n    NFC_INVALID_MRZ_KEY\n    NFC_NOT_SUPPORTED\n    TAG_CONNECTION_LOST\n    SECURITY_STATUS_NOT_SATISFIED\n    SYSTEM_RESOURCE_UNAVAILABLE\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"}),": ",(0,t.jsx)(n.code,{children:"NFC_INVALID_MRZ_KEY"})," ",(0,t.jsx)(n.em,{children:"implies that the connection could not be established because the configuration input data (documentNumber, birthDate, expiryDate) is not correct.\nAll read launches for that NFC shall fail as long as a new NFCController is not initialised with the correct data."}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"72-receiving-successful-execution---data",children:["7.2. Receiving successful execution - ",(0,t.jsx)(n.em,{children:"data"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"data"})," part, we will have the ",(0,t.jsx)(n.em,{children:"NfcResult"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"public class NfcResult {\n    public let nfcRawData: NfcRawData\n    public private(set) var nfcDocumentInformation: NfcDocumentInformation?\n    public private(set) var nfcPersonalInformation: NfcPersonalInformation?\n    public let nfcImages: NfcImages?\n    public let nfcSecurityData: NfcSecurityData\n    public private(set) var nfcValidations: NfcValidations?\n}\n\nextension NfcResult {\n    public var personalData: [String: String]\n    {\n        ...\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the case of this component, the fields returned are the following:"}),"\n",(0,t.jsx)(n.h4,{id:"721-nfcrawdata",children:"7.2.1. nfcRawData"}),"\n",(0,t.jsx)(n.p,{children:"Information obtained for each data type in raw format."}),"\n",(0,t.jsx)(n.h4,{id:"722-nfcdocumentinformation",children:"7.2.2. nfcDocumentInformation"}),"\n",(0,t.jsx)(n.p,{children:"Information retrieved from the document sorted by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"type"}),"\n",(0,t.jsx)(n.li,{children:"documentNumber"}),"\n",(0,t.jsx)(n.li,{children:"issuer"}),"\n",(0,t.jsx)(n.li,{children:"expirationDate"}),"\n",(0,t.jsx)(n.li,{children:"mrzString"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"723-nfcpersonalinformation",children:"7.2.3. nfcPersonalInformation"}),"\n",(0,t.jsx)(n.p,{children:"Information obtained from the document sorted by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"name"}),"\n",(0,t.jsx)(n.li,{children:"surname"}),"\n",(0,t.jsx)(n.li,{children:"address"}),"\n",(0,t.jsx)(n.li,{children:"nationality"}),"\n",(0,t.jsx)(n.li,{children:"personalNumber"}),"\n",(0,t.jsx)(n.li,{children:"birthdate"}),"\n",(0,t.jsx)(n.li,{children:"placeOfBirth"}),"\n",(0,t.jsx)(n.li,{children:"gender"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"724-nfcimages",children:"7.2.4. nfcImages"}),"\n",(0,t.jsx)(n.p,{children:"Image information obtained from the document ordered by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"facialImage"}),"\n",(0,t.jsx)(n.li,{children:"fingerprintImage"}),"\n",(0,t.jsx)(n.li,{children:"signatureImage"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"725-nfcsecuritydata",children:"7.2.5 nfcSecurityData"}),"\n",(0,t.jsx)(n.p,{children:"Document security data information sorted by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ldsVersion"}),"\n",(0,t.jsx)(n.li,{children:"dataGroupsHashes"}),"\n",(0,t.jsx)(n.li,{children:"dataGroupsRead"}),"\n",(0,t.jsx)(n.li,{children:"documentSigningCertificateData"}),"\n",(0,t.jsx)(n.li,{children:"issuerSigningCertificateData"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"726-nfcvalidations",children:"7.2.6. nfcValidations"}),"\n",(0,t.jsx)(n.p,{children:"Information of the document validations sorted by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"accessProtocol"}),"\n",(0,t.jsx)(n.li,{children:"activeAuthenticationSupported"}),"\n",(0,t.jsx)(n.li,{children:"activeAuthenticationValidation"}),"\n",(0,t.jsx)(n.li,{children:"chipAuthenticationValidation"}),"\n",(0,t.jsx)(n.li,{children:"dataGroupsHashesValidation"}),"\n",(0,t.jsx)(n.li,{children:"documentSigningValidation"}),"\n",(0,t.jsx)(n.li,{children:"issuerSigningValidation"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"727-personaldata",children:"7.2.7 personalData"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"issuer"}),"\n",(0,t.jsx)(n.li,{children:"documentNumber"}),"\n",(0,t.jsx)(n.li,{children:"issueDate"}),"\n",(0,t.jsx)(n.li,{children:"expiryDate"}),"\n",(0,t.jsx)(n.li,{children:"name"}),"\n",(0,t.jsx)(n.li,{children:"surname"}),"\n",(0,t.jsx)(n.li,{children:"fullName"}),"\n",(0,t.jsx)(n.li,{children:"gender"}),"\n",(0,t.jsx)(n.li,{children:"birthDate"}),"\n",(0,t.jsx)(n.li,{children:"birthPlace"}),"\n",(0,t.jsx)(n.li,{children:"nationality"}),"\n",(0,t.jsx)(n.li,{children:"address"}),"\n",(0,t.jsx)(n.li,{children:"nfcKey"}),"\n",(0,t.jsx)(n.li,{children:"numSupport"}),"\n",(0,t.jsx)(n.li,{children:"mrz"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"8-component-customisation",children:"8. Component customisation"}),"\n",(0,t.jsx)(n.p,{children:"The NFC component has parameterisable visual resources that modify the interface, animations, texts and translations,..."}),"\n",(0,t.jsx)(n.p,{children:"The customisation system is based on themes. By default, the component has a theme called ThemeNFC."}),"\n",(0,t.jsx)(n.p,{children:"To modify the visual interface (UX/UI) you can create a new CustomTheme that extends the following protocol:"}),"\n",(0,t.jsx)(n.h3,{id:"81-texts",children:"8.1 Texts"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to modify the SDK texts you would have to include the following\nXML file in the client application, and modify the value of each ",(0,t.jsx)(n.em,{children:"String"})," to\nvalue of each ",(0,t.jsx)(n.em,{children:"String"})," to the desired one."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'"text_intro_chip_state_waiting_tag_text" = "Slowly slide the document until the sensor detects it";\n"text_chip_security_enable_nfc_title" = "Please enable NFC to continue";\n"text_error_retrieving_document_data" = "An error happened while trying to retrieve the document\'s data";\n"text_nfc_read_successfull_title" = "NFC read successfully";\n"text_intro_chip_state_fail" = "The NFC could not be read";\n"text_diagnostic_NFC_timeout_description" = "You have exceeded the NFC read time. Please try again";\n"text_chip_duplicated_session_error" = "Duplicated scan session, please try again after this message is dismissed";\n"text_chip_security_serial_number_title" = "Serial number";\n"text_chip_security_algorithm_sign_title" = "Signature algorithm";\n"text_chip_security_algorithm_public_key_title" = "Public key algorithm";\n"text_chip_security_certificated_impress_title" = "Printout of certificate";\n"text_chip_security_editor_title" = "Editor";\n"text_chip_security_subject_title" = "Subject";\n"text_chip_security_valid_from_title" = "Valid from";\n"text_chip_security_valid_still_title" = "Valid to";\n"text_loading_optional_description" = "Reading, please don\'t move the document\\n\\n";\n"icon_loading_filled_circle" = "\ud83d\udfe2";\n"icon_loading_void_circle" = "\u26aa\ufe0f";\n"nfc_component_cancel"="Cancel";\n"nfc_component_end_confirmation_title" = "Are you sure you will finish the process?";\n"nfc_component_agree" = "Accept";\n"nfc_component_tutorial"="Attach the document to the back of your device.";\n"nfc_component_tutorial_button"= "Start";\n"nfc_component_tutorial_button_info"= "More information";\n"nfc_component_tutorial_title"="Scan NFC";\n"nfc_component_tutorial_1"="When we pass a card through a sensor, there is an exchange of information called NFC.";\n"nfc_component_tutorial_2"="On your mobile, the sensor is in the marked area. Here you must gather your document.";\n"nfc_component_tutorial_3"="For a better reading, remove the cover of your mobile.";\n"nfc_component_skip" = "Skip";\n"diagnostic_tag_connection_lost_title" = "Reading not finished";\n"diagnostic_tag_connection_lost_description" = "Hold the position until the end of the reading";\n"diagnostic_invaliz_mrz_error_title" = "There was a technical problem";\n"diagnostic_invalid_mrz_error_description" = "We\u2019re sorry. We need a new photo of the document";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public protocol ThemeNFCProtocol {\n    var name: String { get }\n    var fonts: [R.Font: String] { get }\n    var dimensions: [R.Dimension: CGFloat] { get }\n    var images: [R.Image: UIImage?] { get }\n    var colours: [R.Color: UIColor?] { get }\n    var animations: [R.Animation: String] { get }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'class CustomThemeNFC: ThemeNFCProtocol {\n    public var name: String {\n        "customNfc"\n    }\n\n    public var fonts: [R.Font: String] {\n        [.bold: "Arial"] // the font is overrided\n    }\n\n    public var dimensions: [R.Dimension: CGFloat] {\n        [.fontSmall: 7,\n         .fontRegular: 12,\n         .fontBig: 20,\n         .radiusCorner: 16]\n    }\n    ...\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"To apply this custom theme we must use the following instruction before launching the component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ThemeNFCManager.setup(theme: CustomThemeNFC())\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3585:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);