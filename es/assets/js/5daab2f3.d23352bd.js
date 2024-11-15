"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2219],{7654:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"NFC_Component","title":"NFC Component","description":"0. Requisitos base de SDK Mobile","source":"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-1.5.X/NFC_Component.md","sourceDirName":".","slug":"/NFC_Component","permalink":"/sdk-mobile-documentation/es/docs/ios/1.5.X/NFC_Component","draft":false,"unlisted":false,"tags":[],"version":"1.5.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Voice Component","permalink":"/sdk-mobile-documentation/es/docs/ios/1.5.X/Voice_Component"},"next":{"title":"Video Call Component","permalink":"/sdk-mobile-documentation/es/docs/ios/1.5.X/Video_Call_Component"}}');var r=i(4848),o=i(8453);const s={},l="NFC Component",c={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class NFCConfigurationData",id:"51-class-nfcconfigurationdata",level:3},{value:"5.1.1. Documentaci\xf3n B\xe1sica",id:"511-documentaci\xf3n-b\xe1sica",level:4},{value:"showTutorial",id:"showtutorial",level:5},{value:"vibrationEnabled",id:"vibrationenabled",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"extractionTimeout",id:"extractiontimeout",level:5},{value:"5.1.2. Documentaci\xf3n Avanzada",id:"512-documentaci\xf3n-avanzada",level:4},{value:"enableDebugMode",id:"enabledebugmode",level:5},{value:"skipPace",id:"skippace",level:5},{value:"5.1.3 Otros parametros",id:"513-otros-parametros",level:4},{value:"documentNumber",id:"documentnumber",level:5},{value:"birthDate",id:"birthdate",level:5},{value:"expirationDate",id:"expirationdate",level:5},{value:"issuer",id:"issuer",level:5},{value:"documentType",id:"documenttype",level:5},{value:"readableTags",id:"readabletags",level:5},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1. nfcRawData",id:"721-nfcrawdata",level:4},{value:"7.2.2. nfcDocumentInformation",id:"722-nfcdocumentinformation",level:4},{value:"7.2.3. nfcPersonalInformation",id:"723-nfcpersonalinformation",level:4},{value:"7.2.4. nfcImages",id:"724-nfcimages",level:4},{value:"7.2.5 nfcSecurityData",id:"725-nfcsecuritydata",level:4},{value:"7.2.6. nfcValidations",id:"726-nfcvalidations",level:4},{value:"7.2.7 personalData",id:"727-personaldata",level:4},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1 Textos",id:"81-textos",level:3},{value:"9. Troubleshooting",id:"9-troubleshooting",level:2},{value:"9.1 OpenSSL contains bitcode",id:"91-openssl-contains-bitcode",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"nfc-component",children:"NFC Component"})}),"\n",(0,r.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,r.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"NFC Component"})}),". \xc9ste se encarga de realizar la lectura de nfc de\ndocumentos de identidad y pasaportes. Sus principales funcionalidades\nson las siguientes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Gesti\xf3n interna del sensor de NFC."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"An\xe1lisis de documento."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"An\xe1lisis del progreso."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Asistente en los procesos de lectura."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Devoluci\xf3n de toda la informaci\xf3n posible a leer"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Devoluci\xf3n de im\xe1genes cuando est\xe9n disponible para su lectura"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dispositivo m\xednimo: iPhone 6s - el primero en llevar lector NFC"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#2-integraci%C3%B3n-inicial",children:"Integraci\xf3n"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,r.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,r.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n",(0,r.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,r.jsx)(n.p,{children:"Las dependencias obligatorias que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Para instalar el componente de NFC deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKNFCComponent', '~> 2.6.0'\n"})}),"\n",(0,r.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,r.jsx)(n.p,{children:"Las dependencias obligatorias que deber\xe1n haberse instalado previamente son:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Para instalar el componente de NFC deber\xe1 incluirse en los m\xf3dulos del proyecto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-NFC_component-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-NFC_component-SPM.git\n"})}),"\n",(0,r.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En caso de realizar el desarrollo con ",(0,r.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:i(225).A+"",width:"1834",height:"510"})}),"\n",(0,r.jsx)(n.h3,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,r.jsxs)(n.p,{children:["En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero ",(0,r.jsx)(n.strong,{children:"Info.plist"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Es necesario permitir el uso de NFC - (Privacy - NFC Scan Usage Description)\nIndicar identificadores NFC - (ISO7816 application identifiers for NFC Tag Reader Session)\nA0000002471001\nA0000002472001\n00000000000000\nEs necesario a\xf1adir en el apartado Signing & Capabilities del target la opci\xf3n Near Field Communication Tag Reading\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,r.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,r.jsx)(n.strong,{children:"anteriormente al lanzamiento del componente"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,r.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:"Mobile SDK"})}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controlador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"NFCController"}),(0,r.jsx)(n.td,{children:"Controlador principal de lectura NFC"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1 crear un objeto"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"NFCConfigurationData"})," y pasarlo como par\xe1metro en la inicializaci\xf3n de ",(0,r.jsx)(n.em,{children:"NFCController"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de esta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-nfcconfigurationdata",children:"5.1. Class NFCConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-documentaci\xf3n-b\xe1sica",children:"5.1.1. Documentaci\xf3n B\xe1sica"}),"\n",(0,r.jsx)(n.h5,{id:"showtutorial",children:"showTutorial"}),"\n",(0,r.jsx)(n.p,{children:"Indica si el componente activa la pantalla de tutorial. En esta vista se explica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,r.jsx)(n.h5,{id:"vibrationenabled",children:"vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"iOS no permite a\xf1adir vibraci\xf3n mientras se hacen lecturas de NFC."}),"\n",(0,r.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Si se le da valor true, al producirse un error o una falta de permisos, el sdk mostrar\xe1 una pantalla con el error devuelto por el widget."}),"\n",(0,r.jsx)(n.h5,{id:"extractiontimeout",children:"extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Establece el tiempo m\xe1ximo que se puede realizar la lectura."}),"\n",(0,r.jsx)(n.h4,{id:"512-documentaci\xf3n-avanzada",children:"5.1.2. Documentaci\xf3n Avanzada"}),"\n",(0,r.jsx)(n.h5,{id:"enabledebugmode",children:"enableDebugMode"}),"\n",(0,r.jsx)(n.p,{children:"Activaci\xf3n del modo depuraci\xf3n del componente."}),"\n",(0,r.jsx)(n.h5,{id:"skippace",children:"skipPace"}),"\n",(0,r.jsx)(n.p,{children:"Indica que solo se desea realizar la lectura BAC de NFC. Es una lectura\ncon informaci\xf3n m\xe1s simple y r\xe1pida que permite la lectura de m\xe1s\nvariedad de documentos."}),"\n",(0,r.jsx)(n.h4,{id:"513-otros-parametros",children:"5.1.3 Otros parametros"}),"\n",(0,r.jsx)(n.h5,{id:"documentnumber",children:"documentNumber"}),"\n",(0,r.jsx)(n.p,{children:"Indica el n\xfamero de documento o n\xfamero de soporte dependiendo del\ndocumento a realizar la lectura."}),"\n",(0,r.jsx)(n.p,{children:"\xc9ste campo es obligatorio."}),"\n",(0,r.jsx)(n.h5,{id:"birthdate",children:"birthDate"}),"\n",(0,r.jsx)(n.p,{children:'Indica la fecha de nacimiento que aparece en el documento\n("dd/MM/yyyy").'}),"\n",(0,r.jsx)(n.p,{children:"\xc9ste campo es obligatorio."}),"\n",(0,r.jsx)(n.h5,{id:"expirationdate",children:"expirationDate"}),"\n",(0,r.jsx)(n.p,{children:'Indica la fecha de expiraci\xf3n que aparece en el documento\n("dd/MM/yyyy").'}),"\n",(0,r.jsx)(n.p,{children:"\xc9ste campo es obligatorio."}),"\n",(0,r.jsx)(n.h5,{id:"issuer",children:"issuer"}),"\n",(0,r.jsx)(n.p,{children:"Indicamos el pais de origen del documento a leer."}),"\n",(0,r.jsx)(n.h5,{id:"documenttype",children:"documentType"}),"\n",(0,r.jsx)(n.p,{children:"Indica el tipo de documento que se va a leer: - ID_CARD - PASSPORT - FOREIGN_CARD"}),"\n",(0,r.jsx)(n.h5,{id:"readabletags",children:"readableTags"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado 3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar el componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero s\xed se trackear\xe1n los eventos internos al servidor de tracking:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero no se trackear\xe1 ning\xfan evento al servidor de tracking:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)\nNFCController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto."})," Este m\xe9todo permite utilizar* ",(0,r.jsx)(n.strong,{children:"tracking*"})," en caso de estar su componente activado, y no lo usar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente instalado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en el cual el integrador tiene instalado y activado el tracking, pero en un flujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n. En ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n a la plataforma."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,r.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato SdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#6-result-return",children:"Retorno de Resultado"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,r.jsxs)(n.p,{children:["En la parte del error, ",(0,r.jsx)(n.strong,{children:"internamente"})," disponemos de la clase NFCPassportReaderError. Este enumerado contiene muchos errores espec\xedficos que no aportan informaci\xf3n \xfatil si son devueltos al integrador, por lo que son transformados a un tipo m\xe1s simple (",(0,r.jsx)(n.strong,{children:"ErrorType"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"    CANCEL_BY_USER\n    TIMEOUT\n    UNKNOWN_ERROR\n    NFC_INVALID_MRZ_KEY\n    NFC_NOT_SUPPORTED\n    TAG_CONNECTION_LOST\n    SECURITY_STATUS_NOT_SATISFIED\n    SYSTEM_RESOURCE_UNAVAILABLE\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTA"}),": ",(0,r.jsx)(n.code,{children:"NFC_INVALID_MRZ_KEY"})," ",(0,r.jsx)(n.em,{children:"implica que la conexi\xf3n no se ha podido establecer por culpa de que los datos de entrada de la configuraci\xf3n (documentNumber, birthDate, expiryDate) no son correctos.\nTodos los lanzamientos de lectura para ese NFC fallar\xe1n mientras no se inicialice un NFCController nuevo con los datos correctos."})]}),"\n",(0,r.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsxs)(n.p,{children:["En la parte de ",(0,r.jsx)(n.em,{children:"data"}),", dispondremos de la clase ",(0,r.jsx)(n.em,{children:"NfcResult"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"public class NfcResult {\n    public let nfcRawData: NfcRawData\n    public private(set) var nfcDocumentInformation: NfcDocumentInformation?\n    public private(set) var nfcPersonalInformation: NfcPersonalInformation?\n    public let nfcImages: NfcImages?\n    public let nfcSecurityData: NfcSecurityData\n    public private(set) var nfcValidations: NfcValidations?\n}\n\nextension NfcResult {\n    public var personalData: [String: String]\n    {\n        ...\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"En el caso de este componente, los campos devueltos son los siguientes:"}),"\n",(0,r.jsx)(n.h4,{id:"721-nfcrawdata",children:"7.2.1. nfcRawData"}),"\n",(0,r.jsx)(n.p,{children:"Informaci\xf3n obtenida por cada tipo de dato en formato crudo."}),"\n",(0,r.jsx)(n.h4,{id:"722-nfcdocumentinformation",children:"7.2.2. nfcDocumentInformation"}),"\n",(0,r.jsx)(n.p,{children:"Informaci\xf3n obtenida del documento ordenada por:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"type"}),"\n",(0,r.jsx)(n.li,{children:"documentNumber"}),"\n",(0,r.jsx)(n.li,{children:"issuer"}),"\n",(0,r.jsx)(n.li,{children:"expirationDate"}),"\n",(0,r.jsx)(n.li,{children:"mrzString"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"723-nfcpersonalinformation",children:"7.2.3. nfcPersonalInformation"}),"\n",(0,r.jsx)(n.p,{children:"Informaci\xf3n obtenida del documento ordenada por:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name"}),"\n",(0,r.jsx)(n.li,{children:"surname"}),"\n",(0,r.jsx)(n.li,{children:"address"}),"\n",(0,r.jsx)(n.li,{children:"nationality"}),"\n",(0,r.jsx)(n.li,{children:"personalNumber"}),"\n",(0,r.jsx)(n.li,{children:"birthdate"}),"\n",(0,r.jsx)(n.li,{children:"placeOfBirth"}),"\n",(0,r.jsx)(n.li,{children:"gender"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"724-nfcimages",children:"7.2.4. nfcImages"}),"\n",(0,r.jsx)(n.p,{children:"Informaci\xf3n de im\xe1genes obtenida del documento ordenada por:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"facialImage"}),"\n",(0,r.jsx)(n.li,{children:"fingerprintImage"}),"\n",(0,r.jsx)(n.li,{children:"signatureImage"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"725-nfcsecuritydata",children:"7.2.5 nfcSecurityData"}),"\n",(0,r.jsx)(n.p,{children:"Informaci\xf3n de datos de seguridad del documento ordenada por:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ldsVersion"}),"\n",(0,r.jsx)(n.li,{children:"dataGroupsHashes"}),"\n",(0,r.jsx)(n.li,{children:"dataGroupsRead"}),"\n",(0,r.jsx)(n.li,{children:"documentSigningCertificateData"}),"\n",(0,r.jsx)(n.li,{children:"issuerSigningCertificateData"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"726-nfcvalidations",children:"7.2.6. nfcValidations"}),"\n",(0,r.jsx)(n.p,{children:"Informaci\xf3n de las validaciones del documento ordenada por:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"accessProtocol"}),"\n",(0,r.jsx)(n.li,{children:"activeAuthenticationSupported"}),"\n",(0,r.jsx)(n.li,{children:"activeAuthenticationValidation"}),"\n",(0,r.jsx)(n.li,{children:"chipAuthenticationValidation"}),"\n",(0,r.jsx)(n.li,{children:"dataGroupsHashesValidation"}),"\n",(0,r.jsx)(n.li,{children:"documentSigningValidation"}),"\n",(0,r.jsx)(n.li,{children:"issuerSigningValidation"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"727-personaldata",children:"7.2.7 personalData"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"issuer"}),"\n",(0,r.jsx)(n.li,{children:"documentNumber"}),"\n",(0,r.jsx)(n.li,{children:"issueDate"}),"\n",(0,r.jsx)(n.li,{children:"expiryDate"}),"\n",(0,r.jsx)(n.li,{children:"name"}),"\n",(0,r.jsx)(n.li,{children:"surname"}),"\n",(0,r.jsx)(n.li,{children:"fullName"}),"\n",(0,r.jsx)(n.li,{children:"gender"}),"\n",(0,r.jsx)(n.li,{children:"birthDate"}),"\n",(0,r.jsx)(n.li,{children:"birthPlace"}),"\n",(0,r.jsx)(n.li,{children:"nationality"}),"\n",(0,r.jsx)(n.li,{children:"address"}),"\n",(0,r.jsx)(n.li,{children:"nfcKey"}),"\n",(0,r.jsx)(n.li,{children:"numSupport"}),"\n",(0,r.jsx)(n.li,{children:"mrz"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"El componente de NFC dispone de recursos visuales parametrizables que modifican la interfaz, animaciones, textos y traducciones,\u2026"}),"\n",(0,r.jsx)(n.p,{children:"El sistema de personalizaci\xf3n se basa en temas (themes). Por defecto, el componente tiene un tema llamado ThemeNFC."}),"\n",(0,r.jsx)(n.p,{children:"Para modificar la interfaz visual (UX/UI) se puede crear un nuevo CustomTheme que extienda el siguiente protocolo:"}),"\n",(0,r.jsx)(n.h3,{id:"81-textos",children:"8.1 Textos"}),"\n",(0,r.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,r.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'"text_intro_chip_state_waiting_tag_text" = "Desliza lentamente el documento hasta que el sensor lo detecte";\n"text_chip_security_enable_nfc_title" = "Por favor habilita NFC para poder continuar";\n"text_error_retrieving_document_data" = "Ha ocurrido un error durante la captura de los datos del documento";\n"text_nfc_read_successfull_title" = "NFC le\xeddo exitosamente";\n"text_intro_chip_state_fail" = "\xa1Ups! El NFC no ha podido ser le\xeddo";\n"text_diagnostic_NFC_timeout_description" = "Has excedido el tiempo de lectura de NFC. Por favor intenta de nuevo";\n"text_chip_duplicated_session_error" = "El proceso de captura se ha duplicado, por favor vuelva a intentarlo tras desaparecer este mensaje";\n"text_chip_security_serial_number_title" = "N\xfamero de serie";\n"text_chip_security_algorithm_sign_title" = "Algoritmo de firma";\n"text_chip_security_algorithm_public_key_title" = "Algoritmo de clave p\xfablica";\n"text_chip_security_certificated_impress_title" = "Impresi\xf3n de certificado";\n"text_chip_security_editor_title" = "Editor";\n"text_chip_security_subject_title" = "Sujeto";\n"text_chip_security_valid_from_title" = "V\xe1lido desde";\n"text_chip_security_valid_still_title" = "V\xe1lido hasta";\n"text_loading_optional_description" = "Leyendo, por favor, no mueva el documento\\n\\n";\n"icon_loading_filled_circle" = "\ud83d\udfe2";\n"icon_loading_void_circle" = "\u26aa\ufe0f";\n"nfc_component_cancel" = "Cancelar";\n"nfc_component_end_confirmation_title" = "\xbfSeguro que finalizar el proceso?";\n"nfc_component_agree" = "Aceptar";\n"nfc_component_tutorial" = "Junta el documento a la parte trasera de tu dispositivo";\n"nfc_component_tutorial_button" = "Comenzar";\n"nfc_component_tutorial_button_info" = "M\xe1s informaci\xf3n";\n"nfc_component_tutorial_title" = "Escanear NFC";\n"nfc_component_tutorial_1" = "Cuando pasamos una tarjeta por un sensor, hay un intercambio de informaci\xf3n llamado NFC.";\n"nfc_component_tutorial_2" = "En tu m\xf3vil, el sensor est\xe1 en la zona marcada. Aqu\xed deber\xe1s juntar tu documento.";\n"nfc_component_tutorial_3" = "Para una mejor lectura, quita la funda de tu m\xf3vil.";\n"nfc_component_skip" = "Omitir";\n"diagnostic_tag_connection_lost_title" = "La lectura no finaliz\xf3";\n"diagnostic_tag_connection_lost_description" = "Mant\xe9n la posici\xf3n hasta que finalice la lectura";\n"diagnostic_invaliz_mrz_error_title" = "Hubo un problema t\xe9cnico";\n"diagnostic_invalid_mrz_error_description" = "Pedimos disculpas. Necesitamos una nueva foto del documento";\n\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public protocol ThemeNFCProtocol {\n    var name: String { get }\n    var fonts: [R.Font: String] { get }\n    var dimensions: [R.Dimension: CGFloat] { get }\n    var images: [R.Image: UIImage?] { get }\n    var colors: [R.Color: UIColor?] { get }\n    var animations: [R.Animation: String] { get }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Por ejemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'class CustomThemeNFC: ThemeNFCProtocol {\n    public var name: String {\n        "customNfc"\n    }\n\n    public var fonts: [R.Font: String] {\n        [.bold: "Arial"] // the font is overrided\n    }\n\n    public var dimensions: [R.Dimension: CGFloat] {\n        [.fontSmall: 7,\n         .fontRegular: 12,\n         .fontBig: 20,\n         .radiusCorner: 16]\n    }\n    ...\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Para aplicar este custom theme debemos usar la siguiente instrucci\xf3n antes de lanzar el componente:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ThemeNFCManager.setup(theme: CustomThemeNFC())\n"})}),"\n",(0,r.jsx)(n.h2,{id:"9-troubleshooting",children:"9. Troubleshooting"}),"\n",(0,r.jsx)(n.h3,{id:"91-openssl-contains-bitcode",children:"9.1 OpenSSL contains bitcode"}),"\n",(0,r.jsx)(n.p,{children:"El error espec\xedfico puede verse al intentar subir un IPA. Ocurre en XCode 16."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Asset validation failed (90482) Invalid Executable. The executable 'Runner.app/Frameworks/OpenSSL.framework/OpenSSL' contains bitcode. (ID: 769a1928-0b74-4b3d-b58a-0cb36799d1df)\n"})}),"\n",(0,r.jsx)(n.p,{children:"El error puede evitarse copiando el siguiente script dentro del Podfile:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'post_install do |installer|\n  ### XCode 16 fix\n  bitcode_strip_path = `xcrun --find bitcode_strip`.chop!\n  def strip_bitcode_from_framework(bitcode_strip_path, framework_relative_path)\n  framework_path = File.join(Dir.pwd, framework_relative_path)\n  command = "#{bitcode_strip_path} #{framework_path} -r -o #{framework_path}"\n  puts "Stripping bitcode: #{command}"\n  system(command)\n  end\n  framework_paths = [\n  "Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/ios-arm64_armv7/OpenSSL.framework/OpenSSL",\n  "Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/ios-arm64_i386_x86_64-simulator/OpenSSL.framework/OpenSSL",\n  "Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/ios-arm64_x86_64-maccatalyst/OpenSSL.framework/OpenSSL",\n  "Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/macos-arm64_x86_64/OpenSSL.framework/OpenSSL",\n  ]\n\n  framework_paths.each do |framework_relative_path|\n    strip_bitcode_from_framework(bitcode_strip_path, framework_relative_path)\n  end\nend\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Tras pegar el script y ejecutar ",(0,r.jsx)(n.code,{children:"pod install"})," el error deber\xeda desaparecer."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},225:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var a=i(6540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);