"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4933],{6473:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(4848),s=a(8453);const i={},r="Selphid Component",l={id:"SelphID_Component",title:"Selphid Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-2.0.X/SelphID_Component.md",sourceDirName:".",slug:"/SelphID_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/SelphID_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Selphi Component",permalink:"/sdk-mobile-documentation/es/docs/ios/Selphi_Component"},next:{title:"Voice Component",permalink:"/sdk-mobile-documentation/es/docs/ios/Voice_Component"}},d={},c=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1 Class SelphIDConfigurationData",id:"51-class-selphidconfigurationdata",level:3},{value:"5.1.1 Configuraci\xf3n B\xe1sica",id:"511-configuraci\xf3n-b\xe1sica",level:4},{value:"ResourcesPath",id:"resourcespath",level:5},{value:"WizardMode",id:"wizardmode",level:5},{value:"ShowResultAfterCapture",id:"showresultaftercapture",level:5},{value:"ShowTutorial",id:"showtutorial",level:5},{value:"ScanMode",id:"scanmode",level:5},{value:"SpecificData",id:"specificdata",level:5},{value:"DocumentType",id:"documenttype",level:5},{value:"ShowDiagnostic",id:"showdiagnostic",level:5},{value:"5.1.2 Configuraci\xf3n avanzada",id:"512-configuraci\xf3n-avanzada",level:4},{value:"Debug",id:"debug",level:5},{value:"TutorialOnly",id:"tutorialonly",level:5},{value:"TokenImageQuality",id:"tokenimagequality",level:5},{value:"Locale",id:"locale",level:5},{value:"DocumentSide",id:"documentside",level:5},{value:"Timeout",id:"timeout",level:5},{value:"GenerateRawImages",id:"generaterawimages",level:5},{value:"TranslationsContent",id:"translationscontent",level:5},{value:"ViewsContent",id:"viewscontent",level:5},{value:"DocumentModels",id:"documentmodels",level:5},{value:"5.1.3 Otros parametros",id:"513-otros-parametros",level:4},{value:"VideoFilename",id:"videofilename",level:5},{value:"TokenPreviousCaptureData",id:"tokenpreviouscapturedata",level:5},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado.",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - data",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 rawFrontDocumentData / rawFrontDocument / frontDocument / frontDocumentData / tokenFrontDocument / tokenRawFrontDocument:",id:"721-rawfrontdocumentdata--rawfrontdocument--frontdocument--frontdocumentdata--tokenfrontdocument--tokenrawfrontdocument",level:4},{value:"7.2.2 rawBackDocumentData / rawBackDocument / backDocument / backDocumentData / tokenBackDocument / tokenRawBackDocument:",id:"722-rawbackdocumentdata--rawbackdocument--backdocument--backdocumentdata--tokenbackdocument--tokenrawbackdocument",level:4},{value:"7.2.3 faceImage / faceImageData / tokenFaceImage",id:"723-faceimage--faceimagedata--tokenfaceimage",level:4},{value:"7.2.4 documentCaptured",id:"724-documentcaptured",level:4},{value:"7.2.5 matchingSidesScore",id:"725-matchingsidesscore",level:4},{value:"7.2.6 Propiedad captureProgress",id:"726-propiedad-captureprogress",level:4},{value:"7.2.7 ocrResults / tokenOCR",id:"727-ocrresults--tokenocr",level:4},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1 Textos",id:"81-textos",level:3}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"selphid-component",children:"Selphid Component"}),"\n",(0,o.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,o.jsx)(n.strong,{children:"Componentes"}),") que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deber\xe1 realizar la instalaci\xf3n de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan a\xf1adir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto."]}),"\n",(0,o.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,o.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El Componente tratado en el documento actual recibe el nombre de ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"SelphID Component"})}),". \xc9ste se encarga de realizar capturas de documentos y la posterior extracci\xf3n y an\xe1lisis de los datos obtenidos de ellos. Sus principales funcionalidad son las siguientes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Gesti\xf3n interna de c\xe1maras."}),"\n",(0,o.jsx)(n.li,{children:"Gesti\xf3n de permisos."}),"\n",(0,o.jsx)(n.li,{children:"Asistente en los procesos de captura de la parte frontal y trasera del documento."}),"\n",(0,o.jsx)(n.li,{children:"Extracci\xf3n de la informaci\xf3n contenida en el documento."}),"\n",(0,o.jsx)(n.li,{children:"Obtenci\xf3n de las im\xe1genes del dorso y reverso del documento, as\xed como otras imag\xe9nes incluidas en el documento: cara del usuario, firma del usuario,..."}),"\n",(0,o.jsx)(n.li,{children:"Alto nivel de configuraci\xf3n: diferentes pa\xedses, idiomas, tipos de documentos..."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,o.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,o.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,o.jsx)(n.strong,{children:"13"})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,o.jsx)("div",{class:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n relativa a ",(0,o.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),".y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,o.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente actual en un proyecto ya existente."}),"\n",(0,o.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,o.jsx)("div",{class:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versi\xf3n antigua de las librer\xedas de Facephi (Widgets), \xe9stos deber\xe1n eliminarse por completo antes de la instalaci\xf3n de los componentes de la ",(0,o.jsx)(n.strong,{children:"SDKMobile"}),"."]})}),"\n",(0,o.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,o.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 2.0.0'\n  pod 'JWTDecode'\n  pod 'SwiftFormat/CLI'\n  pod 'IQKeyboardManagerSwift'\n  pod 'zipzap'\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Para instalar el componente de SelphID deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  pod 'FPHISDKSelphIDComponent', '~> 2.0.0'\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["En caso de realizar el desarrollo con ",(0,o.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Image",src:a(3585).A+"",width:"1834",height:"510"})}),"\n",(0,o.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Las dependencias obligatorias que deber\xe1n haberse instalado previamente son:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Para instalar el componente de NFC deber\xe1 incluirse en los m\xf3dulos del proyecto:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SelphidComponentLight.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SelphidComponentLight.git\n"})}),"\n",(0,o.jsx)(n.h3,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,o.jsx)(n.p,{children:"En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero info.plist"}),"\n",(0,o.jsx)(n.p,{children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,o.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,o.jsxs)("div",{class:"note",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEste comando debe haberse ejecutado ",(0,o.jsx)(n.strong,{children:"anteriormente al lanzamiento del componente"}),"."]}),(0,o.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda consultar la documentaci\xf3n de ",(0,o.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),". , en el que se detalla y explica en qu\xe9 consiste este proceso."]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Controlador"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SelphIDController"}),(0,o.jsx)(n.td,{children:"Controlador principal de reconocimiento de documentos"})]})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,o.jsxs)(n.p,{children:["Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto ",(0,o.jsx)(n.em,{children:"SelphIDConfigurationData"})," y pasarlo como par\xe1metro al\nSDKController durante el lanzamiento del componente."]}),"\n",(0,o.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,o.jsx)(n.h3,{id:"51-class-selphidconfigurationdata",children:"5.1 Class SelphIDConfigurationData"}),"\n",(0,o.jsx)(n.h4,{id:"511-configuraci\xf3n-b\xe1sica",children:"5.1.1 Configuraci\xf3n B\xe1sica"}),"\n",(0,o.jsx)(n.h5,{id:"resourcespath",children:"ResourcesPath"}),"\n",(0,o.jsx)(n.p,{children:"Es el nombre del bundle de recursos que contiene todos los elementos de la interfaz"}),"\n",(0,o.jsx)(n.h5,{id:"wizardmode",children:"WizardMode"}),"\n",(0,o.jsx)(n.p,{children:"Indica si el widget queda configurado para realizar la captura de ambas partes (frontal y trasera) del documento una a continuaci\xf3n de la otra. En este modo el widget solo se lanzar\xeda una vez y al terminar de capturar el front, continuar\xeda seguidamente con el back."}),"\n",(0,o.jsx)(n.h5,{id:"showresultaftercapture",children:"ShowResultAfterCapture"}),"\n",(0,o.jsx)(n.p,{children:"Indica si mostrar o no una pantalla con la imagen capturada del documento despu\xe9s del proceso de an\xe1lisis. En esta pantalla se le da al usuario la posibilidad de repetir el proceso de captura si la imagen que se obtuvo del documento no fuera correcta."}),"\n",(0,o.jsx)(n.h5,{id:"showtutorial",children:"ShowTutorial"}),"\n",(0,o.jsx)(n.p,{children:"Esta propiedad permite mostrar el tutorial previo al proceso de captura."}),"\n",(0,o.jsx)(n.h5,{id:"scanmode",children:"ScanMode"}),"\n",(0,o.jsx)(n.p,{children:"Indica el modo de escaneo OCR de los documentos. Dependiendo de la elecci\xf3n, se escanear\xe1n y buscar\xe1n varios tipos de documentos o uno en concreto. Este modo puede ser de tres tipos:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDScanMode.MODE_GENERIC:"})," El modo gen\xe9rico que permite escanear cualquier tipo de documento independiente del pa\xeds o el tipo de documento. El resultado de este modo no es tan preciso como los siguientes pero permite escanear varios documentos est\xe1ndar."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDScanMode.MODE_SPECIFIC:"}),' El modo de b\xfasqueda permitir\xe1 utilizar una whitelist y blacklist, y buscar\xe1 en los documentos que cumplan dichas condiciones. Estas condiciones se indican en la variable "specificData". De este modo se permite realizar la b\xfasqueda acotando el n\xfamero de plantillas, y haciendo que la b\xfasqueda sea mucho m\xe1s afinada que en el caso gen\xe9rico.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDScanMode.MODE_SEARCH:"}),' B\xfasqueda de un documento espec\xedfico. Estas condiciones se indican en la propiedad "specificData" que se muestra en lo sucesivo.']}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"specificdata",children:"SpecificData"}),"\n",(0,o.jsx)(n.p,{children:"Esta propiedad permite definir qu\xe9 documentos se escanear\xe1n durante el proceso, en caso de declarar el modo de escaneo (scanMode) a SMSearch o SMSpecific."}),"\n",(0,o.jsx)(n.p,{children:"Un ejemplo de configuraci\xf3n que permita escanear todos los documentos de nacionalidad espa\xf1ola ser\xeda el siguiente:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"// Search mode definition\nconf.scanMode = SelphIDScanMode.MODE_SEARCH\nconf.specificData = \u201cES|<ALL>\u201d // C\xf3digo ISO de Espa\xf1a (ES)\n"})}),"\n",(0,o.jsx)(n.h5,{id:"documenttype",children:"DocumentType"}),"\n",(0,o.jsx)(n.p,{children:"Los valores permitidos son los siguientes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDDocumentType.ID_CARD:"})," El widget queda configurado para realizar la captura de documentos de identidad."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDDocumentType.PASSPORT:"})," El widget queda configurado para realizar la captura de pasaportes."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDDocumentType.DRIVERS_LICENSE:"})," El widget queda configurado para realizar la captura de licencias de conducci\xf3n."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDDocumentType.FOREIGN_CARD:"})," El widget queda configurado para realizar la captura de documentos extranjeros."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDDocumentType.CUSTOM:"})," El widget queda configurado para realizar la captura de otro tipo de documentos que no corresponden a ninguna de las categorias anteriores."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"showdiagnostic",children:"ShowDiagnostic"}),"\n",(0,o.jsx)(n.p,{children:"Si se le da valor true, al producirse un error o una falta de permisos, el sdk mostrar\xe1 una pantalla con el error devuelto por el widget."}),"\n",(0,o.jsx)(n.h4,{id:"512-configuraci\xf3n-avanzada",children:"5.1.2 Configuraci\xf3n avanzada"}),"\n",(0,o.jsx)(n.h5,{id:"debug",children:"Debug"}),"\n",(0,o.jsx)(n.p,{children:"Al poner a true este atributo, aumentamos el n\xfamero de trazas y nos muestra por pantalla t\xe9cnica informaci\xf3n del mismo."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Una vez acabado el desarrollo debe estar a false."})}),"\n",(0,o.jsx)(n.h5,{id:"tutorialonly",children:"TutorialOnly"}),"\n",(0,o.jsxs)(n.p,{children:["Esta propiedad permite mostrar ",(0,o.jsx)(n.strong,{children:"\xfanicamente el tutorial"}),", sin lanzar posteriormente el proceso de captur"]}),"\n",(0,o.jsx)(n.h5,{id:"tokenimagequality",children:"TokenImageQuality"}),"\n",(0,o.jsxs)(n.p,{children:["Se indica la calidad del JPEG que se genera y luego se tokeniza, su valor por defecto y recomendada es ",(0,o.jsx)(n.strong,{children:"\u201c0.5\u201d"}),". Su resultado es meramente informativo, no se recomienda su uso para autenticar."]}),"\n",(0,o.jsx)(n.h5,{id:"locale",children:"Locale"}),"\n",(0,o.jsx)(n.p,{children:"Es un String que permite cambiar la localizaci\xf3n y el idioma del widget. Ejemplos de valores que pueden tener son los siguientes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u201ces\u201d para espa\xf1ol."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u201cen\u201d para ingl\xe9s."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u201cfr\u201d para franc\xe9s."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["En definitiva, depender\xe1 del nombre que aparezca en el fichero strings.xml del lenguaje que se desee seleccionar (",(0,o.jsx)(n.code,{children:"strings-es.xml"}),", ",(0,o.jsx)(n.code,{children:"strings-en.xml"}),", ",(0,o.jsx)(n.code,{children:"strings-fr.xml"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["En el zip de recursos, el cual se encuentra dentro de la carpeta strings, se pueden a\xf1adir los ficheros ",(0,o.jsx)(n.code,{children:"strings-xx.xml"})," correspondientes a cada localizaci\xf3n que se requiere incorporar en el widget."]}),"\n",(0,o.jsx)(n.h5,{id:"documentside",children:"DocumentSide"}),"\n",(0,o.jsx)(n.p,{children:"Los valores permitidos son los siguientes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDDocumentSide.FRONT:"})," El widget queda configurado para realizar la captura de la parte frontal del documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDDocumentSide.BACK:"})," El widget queda configurado para realizar la captura de la parte trasera del documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDDocumentSide.ALL:"})," El widget queda configurado para realizar la captura de ambas partes del documento."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"timeout",children:"Timeout"}),"\n",(0,o.jsx)(n.p,{children:"Es un enumerado que define el timeout de la captura de un lado del documento. Tiene 3 posibles valores:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDTimeout.SHORT:"})," 15 segundos."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDTimeout.MEDIUM:"})," 20 segundos."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SelphIDTimeout.LONG:"})," 25 segundos."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"generaterawimages",children:"GenerateRawImages"}),"\n",(0,o.jsxs)(n.p,{children:["Esta propiedad configura el widget para devolver la imagen completa de la c\xe1mara que se utiliz\xf3 para capturar el documento. Estas im\xe1genes se devuelven en las propiedades  ",(0,o.jsx)(n.code,{children:"rawFrontDocument"}),"  y  ",(0,o.jsx)(n.code,{children:"rawBackDocument"}),"  del objeto ",(0,o.jsx)(n.code,{children:"results respectivamente."})]}),"\n",(0,o.jsx)(n.h5,{id:"translationscontent",children:"TranslationsContent"}),"\n",(0,o.jsx)(n.p,{children:"Esta propiedad admite un xml donde se le proporciona traducciones a los mensajes que est\xe1n definidos en el widget"}),"\n",(0,o.jsx)(n.h5,{id:"viewscontent",children:"ViewsContent"}),"\n",(0,o.jsx)(n.p,{children:"Esta propiedad admite un xml donde se le proporciona modificaciones en la apariencia del widget, colores, proporciones\u2026 que est\xe1n definidos."}),"\n",(0,o.jsx)(n.h5,{id:"documentmodels",children:"DocumentModels"}),"\n",(0,o.jsx)(n.p,{children:"Esta propiedad permite, mediante una cadena en formato xml, configurar modelado de los documentos que el widget va a tratar de capturar. La definici\xf3n de este modelado se encentra, por defecto, en un .xml de modelos que se encuentra en el .zip de recursos. Con esta propiedad se permite a una aplicaci\xf3n actualizar, en caliente, los modelados de los documentos."}),"\n",(0,o.jsx)(n.p,{children:"Nota: Esta propiedad no altera el contenido del archivo de recursos."}),"\n",(0,o.jsx)(n.h4,{id:"513-otros-parametros",children:"5.1.3 Otros parametros"}),"\n",(0,o.jsx)(n.h5,{id:"videofilename",children:"VideoFilename"}),"\n",(0,o.jsx)(n.p,{children:"Establece la ruta absoluta del nombre del archivo en el que se grabar\xe1 un video del proceso de captura. La aplicaci\xf3n es la responsable de solicitar los permisos necesarios al tel\xe9fono en caso de que esa ruta requiera de permisos adicionales. El widget, por defecto, no realizar\xe1 ning\xfan proceso de grabaci\xf3n a menos que se especifique una ruta de archivo mediante este m\xe9todo."}),"\n",(0,o.jsx)(n.h5,{id:"tokenpreviouscapturedata",children:"TokenPreviousCaptureData"}),"\n",(0,o.jsx)(n.p,{children:"Cuando la captura del documento se realiza en 2 llamadas, esta propiedad permite pasar un diccionario con la informaci\xf3n de la captura previa. De esta manera el widget puede combinar los resultados de ambas lecturas de una manera inteligente y as\xed devolver la informaci\xf3n combinada de ambas capturas. Tambi\xe9n permite al widget calcular un grado de similitud de los datos de ambas caras."}),"\n",(0,o.jsx)(n.p,{children:"En el caso que la captura de ambas caras del documento se realice en una \xfanica llamada esto no es necesario ya que el widget internamente hace este proceso."}),"\n",(0,o.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,o.jsx)(n.p,{children:"Si se le da valor true, se activa la vibraci\xf3n en errores y si la respuesta del widget es OK"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,o.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,o.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"let controller = SelphIDController(data: selphIDConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,o.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"let controller = SelphIDController(data: selphIDConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,o.jsxs)("div",{class:"warning",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,o.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,o.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),(0,o.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,o.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado."}),"\n",(0,o.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato SdkResult. M\xe1s informaci\xf3n en la secci\xf3n de [",(0,o.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"finishStatus"}),": Que nos indicar\xe1 si la operaci\xf3n ha finalizado correctamente. Posibles valores:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"errorType"}),": Errores propios del widget."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"case SELPHID_CANCEL_BY_USER\ncase SELPHID_TIMEOUT\ncase SELPHID_INTERNAL_ERROR\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"data"}),": Tendr\xe1 los datos de respuesta de la funci\xf3n del componente ejecutado. En el apartado 7.2 se especifican los campos que se incluyen en este componente."]}),"\n",(0,o.jsx)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - data"}),"\n",(0,o.jsx)(n.p,{children:"El campo data es variable y depender\xe1 de qu\xe9 componente se ha devuelto el resultado. En el caso de este componente, los campos devueltos son los siguientes:"}),"\n",(0,o.jsx)(n.h4,{id:"721-rawfrontdocumentdata--rawfrontdocument--frontdocument--frontdocumentdata--tokenfrontdocument--tokenrawfrontdocument",children:"7.2.1 rawFrontDocumentData / rawFrontDocument / frontDocument / frontDocumentData / tokenFrontDocument / tokenRawFrontDocument:"}),"\n",(0,o.jsx)(n.p,{children:"La imagen frontal del documento procesada, limpiada y recortada por los bordes y su token correspondiente."}),"\n",(0,o.jsx)(n.h4,{id:"722-rawbackdocumentdata--rawbackdocument--backdocument--backdocumentdata--tokenbackdocument--tokenrawbackdocument",children:"7.2.2 rawBackDocumentData / rawBackDocument / backDocument / backDocumentData / tokenBackDocument / tokenRawBackDocument:"}),"\n",(0,o.jsx)(n.p,{children:"La imagen trasera del documento procesada, limpiada y recortada por los bordes y su token asociado."}),"\n",(0,o.jsx)(n.h4,{id:"723-faceimage--faceimagedata--tokenfaceimage",children:"7.2.3 faceImage / faceImageData / tokenFaceImage"}),"\n",(0,o.jsx)(n.p,{children:"La imagen del rostro que se ha encontrado en el documento, en caso de que exista y su token asociado."}),"\n",(0,o.jsx)(n.h4,{id:"724-documentcaptured",children:"7.2.4 documentCaptured"}),"\n",(0,o.jsx)(n.p,{children:"Esta propiedad indica el modelo de documento que se ha capturado cuando se realiza una busqueda en modo SMSearch. De esta forma la aplicaci\xf3n puede conocer qu\xe9 modelo, de entre todos los permitidos, se ha detectado."}),"\n",(0,o.jsx)(n.h4,{id:"725-matchingsidesscore",children:"7.2.5 matchingSidesScore"}),"\n",(0,o.jsx)(n.p,{children:"Esta propiedad devuelve un c\xe1lculo de la similitud de los datos le\xeddos entre el front y el back del documento. El c\xe1lculo se realiza comprobando la similitud entre los campos comunes le\xeddos en ambas caras. El resultado del c\xe1lculo ser\xe1 un valor entre 0.0 y 1.0 para el caso de que existan campos comunes en el documento. Cuanto mayor es el valor, m\xe1s similares son los datos comparados. Si el c\xe1lculo devuelve -1.0 es que el documento no contiene campos comunes o a\xfan no se tiene informaci\xf3n de las dos caras."}),"\n",(0,o.jsx)(n.h4,{id:"726-propiedad-captureprogress",children:"7.2.6 Propiedad captureProgress"}),"\n",(0,o.jsx)(n.p,{children:"Esta propiedad devuelve el estado en el que se encontraba el proceso de captura cuando el widget termin\xf3. Estos son los posibles valores:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Front_Detection_None = 0\nFront_Detection_Uncertain = 1\nFront_Detection_Completed = 2\nFront_Document_Analyzed = 3\nBack_Detection_None = 4\nBack_Detection_Uncertain = 5\nBack_Detection_Completed = 6\nBack_Document_Analyzed = 7\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"0"}),": En la lectura del Front, el widget termino sin poder haber detectado nada. Generalmente cuando no se pone ning\xfan documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"1"}),": En la lectura del Front, el widget termino habiendo detectado parcialmente un documento. En este caso algunos de los elementos esperados se han conseguido detectar, pero no todos los necesarios."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"2"}),": En la lectura del Front, el widget termino habiendo completado la detecci\xf3n de todos los elementos del documento. Si el widget acaba en este estado es porque el an\xe1lisis de OCR no se ha podido completar con \xe9xito."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"3"}),": En la lectura del Front, el widget termino habiendo analizado y extra\xeddo todo el OCR del documento. Este es el estado en el que acabar\xeda una lectura correcta del Front de un documento."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Los estados ",(0,o.jsx)(n.strong,{children:"del 4 al 7"})," son exactamente iguales solo que se refieren al resultado del proceso cuando se analiza el back."]}),"\n",(0,o.jsx)(n.h4,{id:"727-ocrresults--tokenocr",children:"7.2.7 ocrResults / tokenOCR"}),"\n",(0,o.jsx)(n.p,{children:"Este diccionario contiene todos los datos detectados en el documento. Las claves de cada campo est\xe1n codificadas de tal forma que la propia clave contiene informaci\xf3n de donde se ha obtenido el valor. As\xed, por ejemplo, la clave Front/MRZ/DocumentNumber indica el valor del DocumentNumber que se ha le\xeddo en el Front del documento y en la regi\xf3n del MRZ. Estas claves dependen del documento capturado y por tanto ser\xe1n diferentes entre distintos pa\xedses y modelos de documento. El diccionario tambi\xe9n contiene claves con nombres m\xe1s gen\xe9ricos y que no llevan informaci\xf3n relativa a la ubicaci\xf3n. Estas claves contienen el dato m\xe1s completo de todos los le\xeddos para dicho campo."}),"\n",(0,o.jsx)(n.p,{children:"Estas claves son los siguientes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"FirstName"}),": El valor asociado a esta clave contiene el nombre del usuario."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LastName"}),": El valor asociado a esta clave contiene los apellidos del usuario."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DateOfBirth"}),": El valor asociado a esta clave contiene la fecha de nacimiento detectada en el documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Gender"}),": El valor asociado a esta clave contiene el sexo del usuario detectado en el documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nationality"}),": El valor asociado a esta clave contiene la nacionalidad del usuario detectado en el documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DocumentNumber"}),": El valor asociado a esta clave contiene el n\xfamero de documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DateOfExpiry"}),": El valor asociado a esta clave contiene la fecha de expiraci\xf3n del documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Issuer"}),": El valor asociado a esta clave contiene el editor del documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DateofIssue"}),": El valor asociado a esta clave contiene la fecha de expedici\xf3n del documento."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"PlaceOfBirth"}),": El valor asociado a esta clave contiene el lugar de nacimiento del usuario."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Address"}),": El valor asociado a esta clave contiene la direcci\xf3n detectada en el documento."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Adicionalmente se a\xf1aden claves del propio objeto results para hacer m\xe1s f\xe1cil su b\xfasqueda:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DocumentCaptured"}),": Valor del modelo de documento que se ha capturado seg\xfan el .xml de modelos. Corresponde a la propiedad documentCaptured."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MatchingSidesScore"}),": Valor que indica la correspondencia entre las caras le\xeddas del documento. Corresponde a la propiedad matchingSidesScore."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,o.jsx)(n.p,{children:"Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales se explican en el documento de Core Component), este componente en concreto permite la modificaci\xf3n de textos presentes en el tutorial."}),"\n",(0,o.jsx)(n.h3,{id:"81-textos",children:"8.1 Textos"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'"selphid_component_info_1"="Coloca tu cara en el centro de la c\xe1mara";\n"selphid_component_info_2"="Elimina objetos que puedan ocultar tu rostro";\n"selphid_component_info_3"="Comprueba que la iluminaci\xf3n es la correcta";\n"selphid_component_tutorial_message"="Enfoca tu documento dentro del recuadro. La foto se har\xe1 autom\xe1ticamente.";\n"selphid_component_tutorial_title"="Foto del documento";\n"selphid_component_tutorial_button"="Comenzar";\n"selphid_component_more_info"="M\xe1s informaci\xf3n";\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},3585:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>l});var o=a(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);