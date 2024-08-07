"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[38],{9796:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=a(4848),r=a(8453);const s={},l="Phingers Component",o={id:"Phingers_Component",title:"Phingers Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/current/Phingers_Component.md",sourceDirName:".",slug:"/Phingers_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Phingers_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Mobile_SDK"},next:{title:"Tracking Component",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Tracking_Component"}},d={},c=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class PhingersConfigurationData",id:"51-class-phingersconfigurationdata",level:3},{value:"5.1.1. Configuraci\xf3n B\xe1sica",id:"511-configuraci\xf3n-b\xe1sica",level:4},{value:"showTutorial",id:"showtutorial",level:5},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"reticleOrientation",id:"reticleorientation",level:5},{value:"extractionTimeout",id:"extractiontimeout",level:5},{value:"useFlash",id:"useflash",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"5.1.2. Configuraci\xf3n Avanzada",id:"512-configuraci\xf3n-avanzada",level:4},{value:"returnProcessedImage",id:"returnprocessedimage",level:5},{value:"returnRawImage",id:"returnrawimage",level:5},{value:"useLiveness",id:"useliveness",level:5},{value:"returnWSQ",id:"returnwsq",level:5},{value:"returnFullFrameImage",id:"returnfullframeimage",level:5},{value:"showSpinner",id:"showspinner",level:4},{value:"cropWidth",id:"cropwidth",level:5},{value:"cropHeight",id:"cropheight",level:5},{value:"cropFactor",id:"cropfactor",level:5},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 <em>fingersResult</em>",id:"721-fingersresult",level:4},{value:"7.2.1.1 <em>fullFrameImage</em>",id:"7211-fullframeimage",level:5},{value:"7.2.1.2 <em>focusQuality</em>",id:"7212-focusquality",level:4},{value:"7.2.1.3 <em>livenessConfidence</em>",id:"7213-livenessconfidence",level:4},{value:"7.2.1.4. rawFingerprintImage",id:"7214-rawfingerprintimage",level:5},{value:"7.2.1.5. processedFingerprintImage",id:"7215-processedfingerprintimage",level:5},{value:"7.2.1.6. wsqDataArray",id:"7216-wsqdataarray",level:5},{value:"7.2.1.7. fingerprintTemplate",id:"7217-fingerprinttemplate",level:5},{value:"7.2.1.8. nfiqMetrics",id:"7218-nfiqmetrics",level:5},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1 Textos",id:"81-textos",level:3}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,i.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,i.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,i.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El ",(0,i.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Phingers Component"})}),". \xc9ste se encarga de realizar la captura de las\nhuellas de los dedos (fingerprints) del usuario y la posterior\nextracci\xf3n de las plantillas de las huellas posteriores. Sus principales\nfuncionalidades son las siguientes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dos modos de funcionamiento: extracci\xf3n de los cuatro dedos de la\nmano (excepto el pulgar), o extracci\xf3n \xfanicamente del pulgar."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Gesti\xf3n interna de c\xe1mara."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Detecci\xf3n de vivacidad incorporada."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Asistente en los procesos de captura de las huellas."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generaci\xf3n de las plantillas con las caracter\xedsticas de las huellas,\nim\xe1genes y puntuaciones."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,i.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,i.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Antes de integrar este componente se recomienda leer la documentaci\xf3n relativa a ",(0,i.jsx)("u",{children:(0,i.jsx)(n.strong,{children:"Core Component"})})," y seguir las instrucciones indicadas en dicho documento."]}),"\n",(0,i.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente actual en un proyecto ya existente."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versi\xf3n antigua de las librer\xedas de Facephi (",(0,i.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por completo antes de la instalaci\xf3n de los componentes de la ",(0,i.jsx)(n.strong,{children:"SDKMobile"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,i.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero ",(0,i.jsx)(n.em,{children:"Podfile"})," del proyecto) son:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKMainComponent', '~> 1.4.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Para instalar el componente actual deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKPhingersComponent', '~> 1.4.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,i.jsxs)(n.p,{children:["En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero ",(0,i.jsx)(n.strong,{children:"info.plist"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,i.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,i.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,i.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Controlador"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PhingersController"}),(0,i.jsx)(n.td,{children:"Controlador principal de captura de huellas"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,i.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"PhingersConfigurationData"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente."]}),"\n",(0,i.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-phingersconfigurationdata",children:"5.1. Class PhingersConfigurationData"}),"\n",(0,i.jsx)(n.h4,{id:"511-configuraci\xf3n-b\xe1sica",children:"5.1.1. Configuraci\xf3n B\xe1sica"}),"\n",(0,i.jsx)(n.h5,{id:"showtutorial",children:"showTutorial"}),"\n",(0,i.jsx)(n.p,{children:"Indica si el componente activa la pantalla de tutorial. En esta vista se\nexplica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,i.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,i.jsx)(n.p,{children:"Si se le da valor true, se activa la vibraci\xf3n en errores y si la respuesta del widget es OK"}),"\n",(0,i.jsx)(n.h5,{id:"reticleorientation",children:"reticleOrientation"}),"\n",(0,i.jsx)(n.p,{children:"Establece el modo de detecci\xf3n de huellas e indica qu\xe9 dedos se van a\ndetectar durante el proceso. Los valores permitidos son:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LEFT"}),": Se activa la captura de los ",(0,i.jsx)(n.strong,{children:"cuatro dedos de la mano\nizquierda"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RIGHT"}),": Se activa la captura de los ",(0,i.jsx)(n.strong,{children:"cuatro dedos de la mano\nizquierda"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"THUMB"}),": Se activa la captura de ",(0,i.jsx)(n.strong,{children:"un pulgar"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"extractiontimeout",children:"extractionTimeout"}),"\n",(0,i.jsx)(n.p,{children:"Establece el tiempo m\xe1ximo que se puede realizar la lectura."}),"\n",(0,i.jsx)(n.h5,{id:"useflash",children:"useFlash"}),"\n",(0,i.jsxs)(n.p,{children:["Activa o desactiva el flash de la c\xe1mara durante el proceso de captura\nde huellas. Por defecto se encuentra a ",(0,i.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,i.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso"}),"\n",(0,i.jsx)(n.h4,{id:"512-configuraci\xf3n-avanzada",children:"5.1.2. Configuraci\xf3n Avanzada"}),"\n",(0,i.jsx)(n.h5,{id:"returnprocessedimage",children:"returnProcessedImage"}),"\n",(0,i.jsxs)(n.p,{children:["Si se establece a ",(0,i.jsx)(n.strong,{children:"true"})," se devolver\xe1 en el resultado las im\xe1genes de\nla misma forma en que se han capturado."]}),"\n",(0,i.jsx)(n.h5,{id:"returnrawimage",children:"returnRawImage"}),"\n",(0,i.jsxs)(n.p,{children:["Si se establece a ",(0,i.jsx)(n.strong,{children:"true"})," se devolver\xe1 en el resultado las im\xe1genes de\nla misma forma en que se han capturado."]}),"\n",(0,i.jsx)(n.h5,{id:"useliveness",children:"useLiveness"}),"\n",(0,i.jsxs)(n.p,{children:["Activa o desactiva el detector de vivacidad durante el proceso de\ncaptura de huellas. Por defecto se encuentra a ",(0,i.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"returnwsq",children:"returnWSQ"}),"\n",(0,i.jsxs)(n.p,{children:["Si se establece a ",(0,i.jsx)(n.strong,{children:"true"})," entonces en el resultado de la captura se\ndevolver\xe1, para cada una de las huellas, el dato comprimido mediante\n",(0,i.jsx)(n.em,{children:"Wavelet Scalar Quatization"})," (WSQ). WSQ es un algortimo de compresi\xf3n en\ngrises, siendo un est\xe1ndar (NIST) para este tipo de capturas. Orientado\na la validaci\xf3n contra las diferentes bases de datos gubernamentales\nexistentes."]}),"\n",(0,i.jsx)(n.h5,{id:"returnfullframeimage",children:"returnFullFrameImage"}),"\n",(0,i.jsx)(n.p,{children:"Especifica si se debe devolver la imagen completa de la c\xe1mara en la que\nse han detectado los dedos."}),"\n",(0,i.jsx)(n.h4,{id:"showspinner",children:"showSpinner"}),"\n",(0,i.jsx)(n.p,{children:"Indica si se quiere mostrar el spinner de carga."}),"\n",(0,i.jsx)(n.h5,{id:"cropwidth",children:"cropWidth"}),"\n",(0,i.jsx)(n.p,{children:"Indica un ancho para realizar un recorte de la captura."}),"\n",(0,i.jsx)(n.h5,{id:"cropheight",children:"cropHeight"}),"\n",(0,i.jsx)(n.p,{children:"Indica una altura para realizar un recorte de la captura."}),"\n",(0,i.jsx)(n.h5,{id:"cropfactor",children:"cropFactor"}),"\n",(0,i.jsx)(n.p,{children:"Indica la relaci\xf3n para el recorte de la captura."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,i.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,i.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["El m\xe9todo ",(0,i.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,i.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,i.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,i.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,i.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato SdkResult.\nM\xe1s informaci\xf3n en la secci\xf3n de ",(0,i.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK's"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"NO_OPERATION_CREATED_ERROR\nCOMPONENT_CONTROLLER_DATA_ERROR\nCAMERA_PERMISSION_DENIED\nLICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE\nERROR_CAPTURE_SUCCESS_WITHOUT_RESULT\nCAMERA_PERMISSION_DENIED\nCANCEL_BY_USER\nTIMEOUT\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsxs)(n.p,{children:["En la parte de ",(0,i.jsx)(n.em,{children:"data"}),", dispondremos de la clase ",(0,i.jsx)(n.em,{children:"PhingersResult"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["El campo ",(0,i.jsx)(n.em,{children:"data"})," es variable y depender\xe1 de qu\xe9 componente se ha devuelto\nel resultado. En el caso de este componente, los campos devueltos son\nlos siguientes:"]}),"\n",(0,i.jsxs)(n.h4,{id:"721-fingersresult",children:["7.2.1 ",(0,i.jsx)(n.em,{children:"fingersResult"})]}),"\n",(0,i.jsxs)(n.h5,{id:"7211-fullframeimage",children:["7.2.1.1 ",(0,i.jsx)(n.em,{children:"fullFrameImage"})]}),"\n",(0,i.jsxs)(n.p,{children:["Devuelve una imagen recortada centrada en la cara del usuarioen formato\nstring Base64. Esta imagen se obtiene a partir de la ",(0,i.jsx)(n.em,{children:"bestImage"}),". \xc9sta\nes la imagen que se deber\xe1 utilizar como imagen caracter\xedstica del\nusuario que realiz\xf3 el proceso a modo de ",(0,i.jsx)(n.em,{children:"avatar"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"7212-focusquality",children:["7.2.1.2 ",(0,i.jsx)(n.em,{children:"focusQuality"})]}),"\n",(0,i.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso de autenticaci\xf3n en\nformato string Base64. Esta imagen es la imagen con el tama\xf1o original\nextra\xedda de la c\xe1mara. V\xe1lido para el proceso de ",(0,i.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"7213-livenessconfidence",children:["7.2.1.3 ",(0,i.jsx)(n.em,{children:"livenessConfidence"})]}),"\n",(0,i.jsx)(n.p,{children:"Devuelve un indicador del nivel de confianza de la captura."}),"\n",(0,i.jsx)(n.h5,{id:"7214-rawfingerprintimage",children:"7.2.1.4. rawFingerprintImage"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve el array de las imagenes de la huella actual en crudo, sin modificar."}),"\n",(0,i.jsx)(n.h5,{id:"7215-processedfingerprintimage",children:"7.2.1.5. processedFingerprintImage"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve el array de las imagenes de la huella procesada."}),"\n",(0,i.jsx)(n.h5,{id:"7216-wsqdataarray",children:"7.2.1.6. wsqDataArray"}),"\n",(0,i.jsx)(n.p,{children:"Se devuelve el array de las capturas de huella en formato WSQ."}),"\n",(0,i.jsx)(n.h5,{id:"7217-fingerprinttemplate",children:"7.2.1.7. fingerprintTemplate"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve la plantilla en bruto que se genera despu\xe9s del proceso de\nextracci\xf3n. V\xe1lida para el proceso de AUTHENTICATION."}),"\n",(0,i.jsx)(n.h5,{id:"7218-nfiqmetrics",children:"7.2.1.8. nfiqMetrics"}),"\n",(0,i.jsx)(n.p,{children:"Son las m\xe9tricas de la captura. Actualmente se devuelve el siguiente\nvalor:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"nfiqMetric: Es un valor entero, entre 1 y 5 (ambos inclusive), que\nindica la calidad de la captura de huella, siendo 1 el valor que\nindica la calidad m\xe1s alta y 5 la peor calidad. Las huellas con este\n\xfaltimo valor suelen ser descartadas para posteriores validaciones."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,i.jsx)(n.p,{children:"Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales se explican en el documento de Core Component), este componente en concreto permite la modificaci\xf3n de textos espec\xedficos."}),"\n",(0,i.jsx)(n.h3,{id:"81-textos",children:"8.1 Textos"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\x3c!-- PHINGERS --\x3e\n"phingers_component_tutorial_title_left" = "Huellas mano izquierda.";\n"phingers_component_tutorial_title_right" = "Huellas mano derecha.";\n"phingers_component_tutorial_title_thumb" = "Huellas dedo pulgar.";\n"phingers_component_action_text" = "Comenzar";\n"phingers_component_tutorial_description" = "Junta tus dedos. Acerca o aleja la mano hasta que se enfoquen tus huellas.";\n"phingers_component_capture_phingers" = "Mantenga los dedos firmes";\n"phingers_component_capture_thumb" = "Mantenga el dedo firme";\n"phingers_component_capture_phingers_not_focus" = "Mueva los dedos hasta que est\xe9n enfocados";\n"phingers_component_capture_thumb_not_focus" = "Mueva el dedo hasta que est\xe9 enfocado";\n"phingers_component_ok"="Ok";\n"phingers_component_cancel"="Cancel";\n"phingers_component_end_confirmation_title" = "\xbfSeguro que finalizar el proceso?";\n"phingers_component_text_results_finish_button" = "Finalizar";\n"phingers_component_agree" = "Aceptar";\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var i=a(6540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);