"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2507],{607:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),r=t(8453);const o={},s="NFC Component",a={id:"NFC_Component",title:"NFC Component",description:"0. SDK Mobile baseline requirements",source:"@site/android_versioned_docs/version-1.5.5/NFC_Component.md",sourceDirName:".",slug:"/NFC_Component",permalink:"/sdk-mobile-documentation/docs/android/1.5.5/NFC_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.5",frontMatter:{},sidebar:"sidebar",previous:{title:"Voice Component",permalink:"/sdk-mobile-documentation/docs/android/1.5.5/Voice_Component"},next:{title:"Video Call Component",permalink:"/sdk-mobile-documentation/docs/android/1.5.5/Video_Call_Component"}},l={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start a new operation",id:"3-start-a-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class NFCConfigurationData",id:"51-class-nfcconfigurationdata",level:3},{value:"5.1.1. documentNumber",id:"511-documentnumber",level:4},{value:"5.1.2. birthDate",id:"512-birthdate",level:4},{value:"5.1.3. expirationDate",id:"513-expirationdate",level:4},{value:"5.1.4. extractionTimeout",id:"514-extractiontimeout",level:4},{value:"5.1.5. showReadingScreen",id:"515-showreadingscreen",level:4},{value:"5.1.6. showTutorial",id:"516-showtutorial",level:4},{value:"5.1.7. vibrationEnabled",id:"517-vibrationenabled",level:4},{value:"5.1.8. enableDebugMode",id:"518-enabledebugmode",level:4},{value:"5.1.9. skipPace",id:"519-skippace",level:4},{value:"5.1.10. showDiagnostic",id:"5110-showdiagnostic",level:4},{value:"6. Component use",id:"6-component-use",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.2. Receipt of correct execution - <em>data</em>",id:"72-receipt-of-correct-execution---data",level:3},{value:"7.2.1. nfcRawData",id:"721-nfcrawdata",level:4},{value:"7.2.2. nfcDocumentInformation",id:"722-nfcdocumentinformation",level:4},{value:"7.2.3. nfcPersonalInformation",id:"723-nfcpersonalinformation",level:4},{value:"7.2.4. nfcImages",id:"724-nfcimages",level:4},{value:"7.2.5 nfcSecurityData",id:"725-nfcsecuritydata",level:4},{value:"7.2.6. nfcValidations",id:"726-nfcvalidations",level:4},{value:"7.2.7. nfcCertificateData",id:"727-nfccertificatedata",level:4},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1 Texts",id:"81-texts",level:3}];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"nfc-component",children:"NFC Component"})}),"\n",(0,i.jsx)(e.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,i.jsxs)(e.p,{children:["For more information on the base configuration, go to the\n",(0,i.jsx)(e.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(e.p,{children:["The Component discussed in the current document is called ",(0,i.jsx)(e.strong,{children:"NFC\nComponent"}),". It is responsible for NFC reading of ID cards and\npassports. Its main functionalities are the following:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Internal management of the NFC sensor."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Permission management."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Document analysis."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Progress analysis."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Assistant in reading processes."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Return all possible information to be read"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Return of images when they are available for reading."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsx)(e.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,i.jsx)(e.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,i.jsx)(e.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsxs)(e.p,{children:["To avoid conflicts and compatibility problems, if you want to install\nthe component in a project containing an old Facephi libraries\n(",(0,i.jsx)(e.em,{children:"Widgets"}),") version, these must be removed entirely before installing\nthe ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.em,{children:"SDKMobile"})})," components."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Currently, FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,i.jsx)(e.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:nfc_component:$sdk_nfc_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"3-start-a-new-operation",children:"3. Start a new operation"}),"\n",(0,i.jsxs)(e.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,i.jsx)(e.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,i.jsxs)(e.p,{children:["This command must have been executed ",(0,i.jsx)(e.strong,{children:"before launch"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,i.jsx)(e.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"Controller"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"Description"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"NFCController"}),(0,i.jsx)(e.td,{children:"NFC main reader controller"})]})]})]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,i.jsxs)(e.p,{children:["Once initialized, a ",(0,i.jsx)(e.em,{children:"NFCConfigurationData"})," object must be created and\npassed as a parameter to the SDKController during component launch to\nconfigure the current component."]}),"\n",(0,i.jsx)(e.p,{children:"The following section will show the fields part of this class and what\neach is used for."}),"\n",(0,i.jsx)(e.h3,{id:"51-class-nfcconfigurationdata",children:"5.1. Class NFCConfigurationData"}),"\n",(0,i.jsx)(e.h4,{id:"511-documentnumber",children:"5.1.1. documentNumber"}),"\n",(0,i.jsx)(e.p,{children:"Indicates the document or media number depending on the document to be\nread."}),"\n",(0,i.jsx)(e.p,{children:"This field is mandatory."}),"\n",(0,i.jsx)(e.h4,{id:"512-birthdate",children:"5.1.2. birthDate"}),"\n",(0,i.jsx)(e.p,{children:'Indicates the date of birth that appears on the document ("dd/MM/yyyy").'}),"\n",(0,i.jsx)(e.p,{children:"This field is mandatory."}),"\n",(0,i.jsx)(e.h4,{id:"513-expirationdate",children:"5.1.3. expirationDate"}),"\n",(0,i.jsx)(e.p,{children:'Indicates the expiry date that appears on the document ("dd/MM/yyyy").'}),"\n",(0,i.jsx)(e.p,{children:"This field is mandatory."}),"\n",(0,i.jsx)(e.h4,{id:"514-extractiontimeout",children:"5.1.4. extractionTimeout"}),"\n",(0,i.jsx)(e.p,{children:"Sets the maximum time the reading can be done."}),"\n",(0,i.jsx)(e.h4,{id:"515-showreadingscreen",children:"5.1.5. showReadingScreen"}),"\n",(0,i.jsx)(e.p,{children:"Sets whether to display the lower modal display with the reading being\ntaken. If disabled, no view is displayed, and you must listen to the\nstatuses returned by the controller."}),"\n",(0,i.jsx)(e.h4,{id:"516-showtutorial",children:"5.1.6. showTutorial"}),"\n",(0,i.jsx)(e.p,{children:"Indicates whether the component activates the tutorial screen. This view\nintuitively explains how the capture is performed."}),"\n",(0,i.jsx)(e.h4,{id:"517-vibrationenabled",children:"5.1.7. vibrationEnabled"}),"\n",(0,i.jsx)(e.p,{children:"Indicates whether vibration feedback is desired at the end of the\nprocess."}),"\n",(0,i.jsx)(e.h4,{id:"518-enabledebugmode",children:"5.1.8. enableDebugMode"}),"\n",(0,i.jsx)(e.p,{children:"Activation of the component's debug mode."}),"\n",(0,i.jsx)(e.h4,{id:"519-skippace",children:"5.1.9. skipPace"}),"\n",(0,i.jsx)(e.p,{children:"Indicates that only NFC BAC reading is desired. It is a simple and fast\nreader."}),"\n",(0,i.jsx)(e.h4,{id:"5110-showdiagnostic",children:"5.1.10. showDiagnostic"}),"\n",(0,i.jsx)(e.p,{children:"Display diagnostic screens at the end of the process"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,i.jsxs)(e.p,{children:["Once the component has been started and a new operation has been created\n(",(0,i.jsx)(e.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component, but internal events will be tracked to the\n",(0,i.jsx)(e.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'SDKController.launch(\n    NfcController(\n        componentData = NfcConfigurationData(\n            documentNumber = NFC_SUPPORT_NUMBER, // Num soport.\n            birthDate = NFC_BIRTH_DATE, // "dd/MM/yyyy"\n            expirationDate = NFC_EXPIRATION_DATE, // "dd/MM/yyyy",\n            ),\n        state = { state ->\n            Napier.d("NFC: State: ${state.name}")\n        },\n        debugLogs = {\n            Napier.d("NFC Logs: $it")\n        }\n    ) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("APP: NFC: ERROR - ${it.error.name}")\n            is SdkResult.Success -> {\n                Napier.d("APP: NFC: OK")\n                Napier.d("DOCUMENT: ${it.data.nfcDocumentInformation}")\n                Napier.d("PERSONAL: ${it.data.nfcPersonalInformation}")\n            }\n        }\n    }\n)\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component, but ",(0,i.jsx)(e.strong,{children:"no event will be tracked"})," to\nthe ",(0,i.jsx)(e.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'SDKController.launchMethod(\n    NfcController(\n        componentData = NfcConfigurationData(\n            documentNumber = NFC_SUPPORT_NUMBER, // Num soport.\n            birthDate = NFC_BIRTH_DATE, // "dd/MM/yyyy"\n            expirationDate = NFC_EXPIRATION_DATE, // "dd/MM/yyyy",\n            ),\n        state = { state ->\n            Napier.d("NFC: State: ${state.name}")\n        },\n        debugLogs = {\n            Napier.d("NFC Logs: $it")\n        }\n    ) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("APP: NFC: ERROR - ${it.error.name}")\n            is SdkResult.Success -> {\n                Napier.d("APP: NFC: OK")\n                Napier.d("DOCUMENT: ${it.data.nfcDocumentInformation}")\n                Napier.d("PERSONAL: ${it.data.nfcPersonalInformation}")\n            }\n        }\n    }\n)\n'})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"launch"})," method must be used by ",(0,i.jsx)(e.strong,{children:"default"}),". This method allows\n",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.em,{children:"tracking"})})," to be used if your component is enabled and will not be\nused when it is disabled (or the component is not installed)."]}),"\n",(0,i.jsxs)(e.p,{children:["On the other hand, the ",(0,i.jsx)(e.strong,{children:"launchMethod"})," method covers a particular case\nin which the integrator has tracking installed and activated but, in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,i.jsxs)(e.p,{children:["The controllers will return the required information in SdkResult format\n-more details in the Android Mobile SDK's ",(0,i.jsx)("a",{href:"Mobile_SDK#6-result-return",rel:"nofollow",children:"6. Result return"})," section-."]}),"\n",(0,i.jsx)(e.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,i.jsxs)(e.p,{children:["On the error side, we will have the ",(0,i.jsx)(e.em,{children:"NfcError"})," class."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"    NfcError.ACTIVITY_RESULT_ERROR\n    NfcError.CANCEL_BY_USER\n    NfcError.INITIALIZATION_ERROR -> it.error // More info\n    NfcError.NFC_ERROR\n    NfcError.NFC_ERROR_DATA\n    NfcError.NFC_ERROR_DISABLED\n    NfcError.NFC_ERROR_ILLEGAL_ARGUMENT\n    NfcError.NFC_ERROR_IO\n    NfcError.NFC_ERROR_NOT_SUPPORTED\n    NfcError.NFC_ERROR_READING\n    NfcError.NFC_ERROR_TAG_LOST\n    NfcError.NO_DATA_ERROR\n    NfcError.TIMEOUT\n    NfcError.LAST_COMMAND_EXPECTED\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"72-receipt-of-correct-execution---data",children:["7.2. Receipt of correct execution - ",(0,i.jsx)(e.em,{children:"data"})]}),"\n",(0,i.jsxs)(e.p,{children:["In the data part, we have the ",(0,i.jsx)(e.em,{children:"NfcResult class"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"The data field is variable and will depend on which component has\nreturned the result. In the case of this component, the fields returned\nare the following:"}),"\n",(0,i.jsx)(e.h4,{id:"721-nfcrawdata",children:"7.2.1. nfcRawData"}),"\n",(0,i.jsx)(e.p,{children:"Information obtained for each data type in raw format."}),"\n",(0,i.jsx)(e.h4,{id:"722-nfcdocumentinformation",children:"7.2.2. nfcDocumentInformation"}),"\n",(0,i.jsx)(e.p,{children:"Information obtained from the document ordered by:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"documentNumber"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"expirationDate"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"issuer"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"mrzString"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"type"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"723-nfcpersonalinformation",children:"7.2.3. nfcPersonalInformation"}),"\n",(0,i.jsx)(e.p,{children:"Information obtained from the document ordered by:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"address"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"birthdate"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"city"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"gender"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"name"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"nationality"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"personalNumber"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"placeOfBirth"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"surname"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"724-nfcimages",children:"7.2.4. nfcImages"}),"\n",(0,i.jsx)(e.p,{children:"Image information obtained from the document sorted by:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"facialImage"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"fingerprintImage"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"signatureImage"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"725-nfcsecuritydata",children:"7.2.5 nfcSecurityData"}),"\n",(0,i.jsx)(e.p,{children:"Document security data information sorted by:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"dataGroupsHashes"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"dataGroupsRead"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"documentSigningCertificateData"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"issuerSigningCertificateData"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"ldsVersion"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"726-nfcvalidations",children:"7.2.6. nfcValidations"}),"\n",(0,i.jsx)(e.p,{children:"Document validation information sorted by:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"accessType"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"activeAuthenticationSupported"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"activeAuthenticationValidation"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"chipAuthenticationValidation"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"dataGroupsHashesValidation"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"documentSigningValidation"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"issuerSigningValidation"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"727-nfccertificatedata",children:"7.2.7. nfcCertificateData"}),"\n",(0,i.jsx)(e.p,{children:"X509 certificate information obtained from the document ordered by."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"X509Certificate"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,i.jsxs)(e.p,{children:["Apart from the changes that can be made at the SDK level (explained in\nthe ",(0,i.jsx)(e.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,i.jsx)(e.h3,{id:"81-texts",children:"8.1 Texts"}),"\n",(0,i.jsx)(e.p,{children:"If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application and change the value of\neach String to the desired one."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    <string name="nfc_component_start_message">Attach the chip to your mobile.\\nWhen it detects it, hold it still.</string>\n    <string name="nfc_component_ready_to_scan">Ready to scan</string>\n    <string name="nfc_component_reading_device">Reading device</string>\n    <string name="nfc_component_in_progress">In progress:</string>\n    <string name="nfc_component_connector_of">in</string>\n    <string name="nfc_component_error">The NFC could not be\\nread correctly</string>\n    <string name="nfc_component_tutorial">Attach the document to the back of your device.</string>\n    <string name="nfc_component_tutorial_button">Continue</string>\n    <string name="nfc_component_tutorial_title">Scan NFC</string>\n    <string name="nfc_component_tutorial_1">When we pass a card through a sensor, there is an exchange of information called NFC.</string>\n    <string name="nfc_component_tutorial_2">On your mobile, the sensor is in the marked area. Here you must gather your document.</string>\n    <string name="nfc_component_tutorial_3">For a better reading, remove the cover of your mobile.</string>\n    <string name="nfc_component_tutorial_more_info_button">More info</string>\n    <string name="nfc_component_timeout_title">Time exceeded</string>\n    <string name="nfc_component_timeout_desc">We apologize. The capture could not be made</string>\n    <string name="nfc_component_internal_error_title">There was a technical problem</string>\n    <string name="nfc_component_internal_error_desc">We apologize. The capture could not be made</string>\n    <string name="nfc_component_data_error_title">Document could not be read</string>\n    <string name="nfc_component_data_error_desc">Review the data entered</string>\n    <string name="nfc_component_read_not_finish_title">Reading not finished</string>\n    <string name="nfc_component_read_not_finish_desc">Hold the position until the end of the reading</string>\n\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>a});var i=t(6540);const r={},o=i.createContext(r);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);