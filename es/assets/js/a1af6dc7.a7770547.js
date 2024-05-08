"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[6640],{5441:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=i(4848),r=i(8453);const o={},s="NFC Component",d={id:"NFC_Component",title:"NFC Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-android/version-1.5.3/NFC_Component.md",sourceDirName:".",slug:"/NFC_Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.3/NFC_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.3",frontMatter:{},sidebar:"sidebar",previous:{title:"Voice Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.3/Voice_Component"},next:{title:"Video Call Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.3/Video_Call_Component"}},c={},l=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class NFCConfigurationData",id:"51-class-nfcconfigurationdata",level:3},{value:"5.1.1. documentNumber",id:"511-documentnumber",level:4},{value:"5.1.2. birthDate",id:"512-birthdate",level:4},{value:"5.1.3. expirationDate",id:"513-expirationdate",level:4},{value:"5.1.4. extractionTimeout",id:"514-extractiontimeout",level:4},{value:"5.1.5. showReadingScreen",id:"515-showreadingscreen",level:4},{value:"5.1.6. showTutorial",id:"516-showtutorial",level:4},{value:"5.1.7. vibrationEnabled",id:"517-vibrationenabled",level:4},{value:"5.1.8. enableDebugMode",id:"518-enabledebugmode",level:4},{value:"5.1.9. skipPace",id:"519-skippace",level:4},{value:"5.1.10. showDiagnostic",id:"5110-showdiagnostic",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1. nfcRawData",id:"721-nfcrawdata",level:4},{value:"7.2.2. nfcDocumentInformation",id:"722-nfcdocumentinformation",level:4},{value:"7.2.3. nfcPersonalInformation",id:"723-nfcpersonalinformation",level:4},{value:"7.2.4. nfcImages",id:"724-nfcimages",level:4},{value:"7.2.5 nfcSecurityData",id:"725-nfcsecuritydata",level:4},{value:"7.2.6. nfcValidations",id:"726-nfcvalidations",level:4},{value:"7.2.7. nfcCertificateData",id:"727-nfccertificatedata",level:4},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1 Textos",id:"81-textos",level:3}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"nfc-component",children:"NFC Component"}),"\n",(0,a.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,a.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,a.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"NFC Component"})}),". \xc9ste se encarga de realizar la lectura de nfc de\ndocumentos de identidad y pasaportes. Sus principales funcionalidades\nson las siguientes:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Gesti\xf3n interna del sensor de NFC."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"An\xe1lisis de documento."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"An\xe1lisis del progreso."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Asistente en los procesos de lectura."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Devoluci\xf3n de toda la informaci\xf3n posible a leer"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Devoluci\xf3n de im\xe1genes cuando est\xe9n disponible para su lectura"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,a.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,a.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,a.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,a.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,a.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:nfc_component:$sdk_nfc_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,a.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,a.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Controlador"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"NFCController"}),(0,a.jsx)(n.td,{children:"Controlador principal de lectura NFC"})]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,a.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"NFCConfigurationData"})," y pasarlo como par\xe1metro al SDKController durante\nel lanzamiento del componente."]}),"\n",(0,a.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,a.jsx)(n.h3,{id:"51-class-nfcconfigurationdata",children:"5.1. Class NFCConfigurationData"}),"\n",(0,a.jsx)(n.h4,{id:"511-documentnumber",children:"5.1.1. documentNumber"}),"\n",(0,a.jsx)(n.p,{children:"Indica el n\xfamero de documento o n\xfamero de soporte dependiendo del\ndocumento a realizar la lectura."}),"\n",(0,a.jsx)(n.p,{children:"\xc9ste campo es obligatorio."}),"\n",(0,a.jsx)(n.h4,{id:"512-birthdate",children:"5.1.2. birthDate"}),"\n",(0,a.jsx)(n.p,{children:'Indica la fecha de nacimiento que aparece en el documento\n("dd/MM/yyyy").'}),"\n",(0,a.jsx)(n.p,{children:"\xc9ste campo es obligatorio."}),"\n",(0,a.jsx)(n.h4,{id:"513-expirationdate",children:"5.1.3. expirationDate"}),"\n",(0,a.jsx)(n.p,{children:'Indica la fecha de expiraci\xf3n que aparece en el documento\n("dd/MM/yyyy").'}),"\n",(0,a.jsx)(n.p,{children:"\xc9ste campo es obligatorio."}),"\n",(0,a.jsx)(n.h4,{id:"514-extractiontimeout",children:"5.1.4. extractionTimeout"}),"\n",(0,a.jsx)(n.p,{children:"Establece el tiempo m\xe1ximo que se puede realizar la lectura."}),"\n",(0,a.jsx)(n.h4,{id:"515-showreadingscreen",children:"5.1.5. showReadingScreen"}),"\n",(0,a.jsx)(n.p,{children:"Establece si se desea mostrar la pantalla modal inferior con la lectura\nque se est\xe1 realizando. Si se desactiva, no se muestra ninguna vista y\nse deber\xe1n escuchar los estados que devuelve el controlador."}),"\n",(0,a.jsx)(n.h4,{id:"516-showtutorial",children:"5.1.6. showTutorial"}),"\n",(0,a.jsx)(n.p,{children:"Indica si el componente activa la pantalla de tutorial. En esta vista se\nexplica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,a.jsx)(n.h4,{id:"517-vibrationenabled",children:"5.1.7. vibrationEnabled"}),"\n",(0,a.jsx)(n.p,{children:"Indica si se desea un feedback de vibraci\xf3n al acabar el proceso."}),"\n",(0,a.jsx)(n.h4,{id:"518-enabledebugmode",children:"5.1.8. enableDebugMode"}),"\n",(0,a.jsx)(n.p,{children:"Activaci\xf3n del modo depuraci\xf3n del componente."}),"\n",(0,a.jsx)(n.h4,{id:"519-skippace",children:"5.1.9. skipPace"}),"\n",(0,a.jsx)(n.p,{children:"Indica que solo se desea realizar la lectura BAC de NFC. Es una lectura\ncon informaci\xf3n m\xe1s simple y r\xe1pida que permite la lectura de m\xe1s\nvariedad de documentos."}),"\n",(0,a.jsx)(n.h4,{id:"5110-showdiagnostic",children:"5.1.10. showDiagnostic"}),"\n",(0,a.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,a.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,a.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    NfcController(\n        componentData = NfcConfigurationData(\n            documentNumber = NFC_SUPPORT_NUMBER, // Num soport.\n            birthDate = NFC_BIRTH_DATE, // "dd/MM/yyyy"\n            expirationDate = NFC_EXPIRATION_DATE, // "dd/MM/yyyy",\n            ),\n        state = { state ->\n            Napier.d("NFC: State: ${state.name}")\n        },\n        debugLogs = {\n            Napier.d("NFC Logs: $it")\n        }\n    ) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("APP: NFC: ERROR - ${it.error.name}")\n            is SdkResult.Success -> {\n                Napier.d("APP: NFC: OK")\n                Napier.d("DOCUMENT: ${it.data.nfcDocumentInformation}")\n                Napier.d("PERSONAL: ${it.data.nfcPersonalInformation}")\n            }\n        }\n    }\n)\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,a.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,a.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    NfcController(\n        componentData = NfcConfigurationData(\n            documentNumber = NFC_SUPPORT_NUMBER, // Num soport.\n            birthDate = NFC_BIRTH_DATE, // "dd/MM/yyyy"\n            expirationDate = NFC_EXPIRATION_DATE, // "dd/MM/yyyy",\n            ),\n        state = { state ->\n            Napier.d("NFC: State: ${state.name}")\n        },\n        debugLogs = {\n            Napier.d("NFC Logs: $it")\n        }\n    ) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("APP: NFC: ERROR - ${it.error.name}")\n            is SdkResult.Success -> {\n                Napier.d("APP: NFC: OK")\n                Napier.d("DOCUMENT: ${it.data.nfcDocumentInformation}")\n                Napier.d("PERSONAL: ${it.data.nfcPersonalInformation}")\n            }\n        }\n    }\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["El m\xe9todo ",(0,a.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,a.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,a.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,a.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,a.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,a.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK."]}),"\n",(0,a.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,a.jsx)(n.p,{children:"En la parte del error, dispondremos de la clase NfcError."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"    NfcError.ACTIVITY_RESULT_ERROR\n    NfcError.CANCEL_BY_USER\n    NfcError.INITIALIZATION_ERROR -> it.error // Para m\xe1s detalles\n    NfcError.NFC_ERROR\n    NfcError.NFC_ERROR_DATA\n    NfcError.NFC_ERROR_DISABLED\n    NfcError.NFC_ERROR_ILLEGAL_ARGUMENT\n    NfcError.NFC_ERROR_IO\n    NfcError.NFC_ERROR_NOT_SUPPORTED\n    NfcError.NFC_ERROR_READING\n    NfcError.NFC_ERROR_TAG_LOST\n    NfcError.NO_DATA_ERROR\n    NfcError.TIMEOUT\n    NfcError.LAST_COMMAND_EXPECTED\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,a.jsx)(n.em,{children:"data"})]}),"\n",(0,a.jsxs)(n.p,{children:["En la parte de ",(0,a.jsx)(n.em,{children:"data"}),", dispondremos de la clase ",(0,a.jsx)(n.em,{children:"NfcResult"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El campo ",(0,a.jsx)(n.em,{children:"data"})," es variable y depender\xe1 de qu\xe9 componente se ha devuelto\nel resultado. En el caso de este componente, los campos devueltos son\nlos siguientes:"]}),"\n",(0,a.jsx)(n.h4,{id:"721-nfcrawdata",children:"7.2.1. nfcRawData"}),"\n",(0,a.jsx)(n.p,{children:"Informaci\xf3n obtenida por cada tipo de dato en formato crudo."}),"\n",(0,a.jsx)(n.h4,{id:"722-nfcdocumentinformation",children:"7.2.2. nfcDocumentInformation"}),"\n",(0,a.jsx)(n.p,{children:"Informaci\xf3n obtenida del documento ordenada por:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"documentNumber"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"expirationDate"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"issuer"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"mrzString"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"type"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"723-nfcpersonalinformation",children:"7.2.3. nfcPersonalInformation"}),"\n",(0,a.jsx)(n.p,{children:"Informaci\xf3n obtenida del documento ordenada por:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"address"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"birthdate"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"city"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"gender"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"name"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"nationality"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"personalNumber"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"placeOfBirth"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"surname"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"724-nfcimages",children:"7.2.4. nfcImages"}),"\n",(0,a.jsx)(n.p,{children:"Informaci\xf3n de im\xe1genes obtenida del documento ordenada por:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"facialImage"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"fingerprintImage"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"signatureImage"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"725-nfcsecuritydata",children:"7.2.5 nfcSecurityData"}),"\n",(0,a.jsx)(n.p,{children:"Informaci\xf3n de datos de seguridad del documento ordenada por:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"dataGroupsHashes"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"dataGroupsRead"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"documentSigningCertificateData"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"issuerSigningCertificateData"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ldsVersion"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"726-nfcvalidations",children:"7.2.6. nfcValidations"}),"\n",(0,a.jsx)(n.p,{children:"Informaci\xf3n de las validaciones del documento ordenada por:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"accessType"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"activeAuthenticationSupported"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"activeAuthenticationValidation"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"chipAuthenticationValidation"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"dataGroupsHashesValidation"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"documentSigningValidation"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"issuerSigningValidation"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"727-nfccertificatedata",children:"7.2.7. nfcCertificateData"}),"\n",(0,a.jsx)(n.p,{children:"Informaci\xf3n del certificado X509 obtenido del documento ordenada por."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"X509Certificate"}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"), este componente en concreto permite la\nmodificaci\xf3n de textos espec\xedficos."]}),"\n",(0,a.jsx)(n.h3,{id:"81-textos",children:"8.1 Textos"}),"\n",(0,a.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,a.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    <string name="nfc_component_start_message">Desliza el documento\\nhasta que el sensor lo detecte.</string>\n    <string name="nfc_component_ready_to_scan">Listo para escanear</string>\n    <string name="nfc_component_reading_device">Leyendo dispositivo</string>\n    <string name="nfc_component_in_progress">En progreso:</string>\n    <string name="nfc_component_connector_of">de</string>\n    <string name="nfc_component_error">El NFC no se ha podido\\nleer correctamente</string>\n    <string name="nfc_component_tutorial">Junta el documento a la parte trasera de tu dispositivo.</string>\n    <string name="nfc_component_tutorial_button">Continuar</string>\n    <string name="nfc_component_tutorial_title">Escanear NFC</string>\n    <string name="nfc_component_tutorial_1">Cuando pasamos una tarjeta por un sensor, hay un intercambio de informaci\xf3n llamado NFC.</string>\n    <string name="nfc_component_tutorial_2">En tu m\xf3vil, el sensor est\xe1 en la zona marcada. Aqu\xed deber\xe1s juntar tu documento.</string>\n    <string name="nfc_component_tutorial_3">Para una mejor lectura, quita la funda de tu m\xf3vil.</string>\n    <string name="nfc_component_tutorial_more_info_button">M\xe1s informaci\xf3n</string>\n    <string name="nfc_component_timeout_title">Tiempo superado</string>\n    <string name="nfc_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="nfc_component_internal_error_title">Hubo un problema t\xe9cnico</string>\n    <string name="nfc_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="nfc_component_data_error_title">No se pudo leer el documento</string>\n    <string name="nfc_component_data_error_desc">Revisa los datos introducidos</string>\n    <string name="nfc_component_read_not_finish_title">La lectura no finaliz\xf3</string>\n    <string name="nfc_component_read_not_finish_desc">Mant\xe9n la posici\xf3n hasta que finalice la lectura.</string>\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var a=i(6540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);