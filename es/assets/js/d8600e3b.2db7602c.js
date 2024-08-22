"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[3339],{4788:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>t});var r=a(4848),o=a(8453);const i={},s="Capture Component",l={id:"Capture_Component",title:"Capture Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/current/Capture_Component.md",sourceDirName:".",slug:"/Capture_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Capture_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:2},{value:"Versi\xf3n m\xednima de iOS: <strong>14</strong>",id:"versi\xf3n-m\xednima-de-ios-14",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:2},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class InvoiceCaptureConfigurationData",id:"51-class-invoicecaptureconfigurationdata",level:3},{value:"5.1.1 vibrationEnabled",id:"511-vibrationenabled",level:4},{value:"5.1.2 showDiagnostic",id:"512-showdiagnostic",level:4},{value:"5.1.3 showTutorial",id:"513-showtutorial",level:4},{value:"5.1.4 timePreview",id:"514-timepreview",level:4},{value:"5.1.5 numUploadPhoto",id:"515-numuploadphoto",level:4},{value:"5.1.6 previewAfterCapture",id:"516-previewaftercapture",level:4},{value:"5.2. Class QrCaptureConfigurationData",id:"52-class-qrcaptureconfigurationdata",level:3},{value:"5.1.1. extractionTimeout",id:"511-extractiontimeout",level:4},{value:"5.1.2. cameraSelected",id:"512-cameraselected",level:4},{value:"5.1.3. cameraShape",id:"513-camerashape",level:4},{value:"5.1.4. vibrationEnabled",id:"514-vibrationenabled",level:4},{value:"5.1.5. showStroke",id:"515-showstroke",level:4},{value:"5.1.6. showDiagnostic",id:"516-showdiagnostic",level:4},{value:"5.1.7. transparentBackground",id:"517-transparentbackground",level:4},{value:"5.3. Class QrGeneratorConfiguration",id:"53-class-qrgeneratorconfiguration",level:3},{value:"5.2.1. source",id:"521-source",level:4},{value:"5.2.2. width",id:"522-width",level:4},{value:"5.2.3. height",id:"523-height",level:4},{value:"5.2.4 showDiagnostic",id:"524-showdiagnostic",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"6.1 Captura de factura",id:"61-captura-de-factura",level:3},{value:"6.2 Captura de QR",id:"62-captura-de-qr",level:3},{value:"6.3 Generaci\xf3n de QR",id:"63-generaci\xf3n-de-qr",level:3},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 Result InvoiceReader",id:"721-result-invoicereader",level:4},{value:"ScannedDocs",id:"scanneddocs",level:5},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1. Textos",id:"81-textos",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"capture-component",children:"Capture Component"})}),"\n",(0,r.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Capture Component"})}),". \xc9ste se encarga de realizar la captura de facturas y la captura y generaci\xf3n de QRs."]}),"\n",(0,r.jsx)(n.h2,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,r.jsxs)(n.h2,{id:"versi\xf3n-m\xednima-de-ios-14",children:["Versi\xf3n m\xednima de iOS: ",(0,r.jsx)(n.strong,{children:"14"})]}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n de ",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,r.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,r.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 2.0.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Para instalar el componente de VideoID deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\tpod 'FPHISDKCaptureComponent', '~> 2.0.4'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["En caso de realizar el desarrollo con ",(0,r.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:\n",(0,r.jsx)(n.img,{alt:"Image",src:a(3585).A+"",width:"1834",height:"510"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,r.jsxs)(n.p,{children:["En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero ",(0,r.jsx)(n.strong,{children:"info.plist"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,r.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEste comando debe haberse ejecutado ",(0,r.jsx)(n.strong,{children:"anteriormente al lanzamiento del componente"}),"."]}),(0,r.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda consultar la documentaci\xf3n de ",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),", en el que se detalla y explica en qu\xe9 consiste este proceso."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controlador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"InvoiceReaderController"}),(0,r.jsx)(n.td,{children:"Controlador para la captura de facturas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrReaderController"}),(0,r.jsx)(n.td,{children:"Controlador para la captura de QRs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrGeneratorController"}),(0,r.jsx)(n.td,{children:"Controlador para la generaci\xf3n de QRs"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Los tres controladores tienen funcionalidades independientes por lo que sus configuraciones tambi\xe9n lo son:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"InvoiceCaptureConfigurationData"})," y pasarlo como par\xe1metro al SDKController durante el lanzamiento del componente para Invoice."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"QrCaptureConfigurationData"})," y pasarlo como par\xe1metro al SDKController durante el lanzamiento del componente de captura de QR"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"QrGeneratorConfiguration"})," y pasarlo como par\xe1metro al SDKController durante el lanzamiento del componente para generaci\xf3n de QRs."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nestas clased y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-invoicecaptureconfigurationdata",children:"5.1. Class InvoiceCaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-vibrationenabled",children:"5.1.1 vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Habilitar vibraci\xf3n durante el proceso"}),"\n",(0,r.jsx)(n.h4,{id:"512-showdiagnostic",children:"5.1.2 showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso y en caso de error"}),"\n",(0,r.jsx)(n.h4,{id:"513-showtutorial",children:"5.1.3 showTutorial"}),"\n",(0,r.jsx)(n.p,{children:"Indica si el componente activa la pantalla de tutorial. En esta vista se explica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,r.jsx)(n.h4,{id:"514-timepreview",children:"5.1.4 timePreview"}),"\n",(0,r.jsx)(n.p,{children:"Se define el tiempo en milisegundos que dura la preview tras la captura, por defecto est\xe1 en 2000"}),"\n",(0,r.jsx)(n.h4,{id:"515-numuploadphoto",children:"5.1.5 numUploadPhoto"}),"\n",(0,r.jsx)(n.p,{children:"N\xfamero de imagenes que se pueden a\xf1adir desde la galer\xeda, por defecto est\xe1 en 5"}),"\n",(0,r.jsx)(n.h4,{id:"516-previewaftercapture",children:"5.1.6 previewAfterCapture"}),"\n",(0,r.jsx)(n.p,{children:"Se habilita la preview tras la captura"}),"\n",(0,r.jsx)(n.h3,{id:"52-class-qrcaptureconfigurationdata",children:"5.2. Class QrCaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-extractiontimeout",children:"5.1.1. extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Tiempo de extracci\xf3n m\xe1ximo"}),"\n",(0,r.jsx)(n.h4,{id:"512-cameraselected",children:"5.1.2. cameraSelected"}),"\n",(0,r.jsx)(n.p,{children:"C\xe1mara seleccionada: FRONT, BACK"}),"\n",(0,r.jsx)(n.h4,{id:"513-camerashape",children:"5.1.3. cameraShape"}),"\n",(0,r.jsx)(n.p,{children:"Forma de la m\xe1scara que se quiere mostrar sobre la c\xe1mara:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQUARE: Cuadrado"}),"\n",(0,r.jsx)(n.li,{children:"CIRCULAR: C\xedrculo"}),"\n",(0,r.jsx)(n.li,{children:"RECTANGLE_TALL: Rect\xe1ngulo"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"514-vibrationenabled",children:"5.1.4. vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Habilitar vibraci\xf3n durante el proceso"}),"\n",(0,r.jsx)(n.h4,{id:"515-showstroke",children:"5.1.5. showStroke"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar una l\xednea como borde de la c\xe1mara"}),"\n",(0,r.jsx)(n.h4,{id:"516-showdiagnostic",children:"5.1.6. showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso y en caso de error"}),"\n",(0,r.jsx)(n.h4,{id:"517-transparentbackground",children:"5.1.7. transparentBackground"}),"\n",(0,r.jsx)(n.p,{children:"M\xe1scara sobre la c\xe1mara semitransparente"}),"\n",(0,r.jsx)(n.h3,{id:"53-class-qrgeneratorconfiguration",children:"5.3. Class QrGeneratorConfiguration"}),"\n",(0,r.jsx)(n.h4,{id:"521-source",children:"5.2.1. source"}),"\n",(0,r.jsx)(n.p,{children:"Texto que se va a incluir en el QR"}),"\n",(0,r.jsx)(n.h4,{id:"522-width",children:"5.2.2. width"}),"\n",(0,r.jsx)(n.p,{children:"Ancho del QR generado"}),"\n",(0,r.jsx)(n.h4,{id:"523-height",children:"5.2.3. height"}),"\n",(0,r.jsx)(n.p,{children:"Alto del QR generado"}),"\n",(0,r.jsx)(n.h4,{id:"524-showdiagnostic",children:"5.2.4 showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso y en caso de error"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,r.jsx)(n.h3,{id:"61-captura-de-factura",children:"6.1 Captura de factura"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]})]}),"\n",(0,r.jsx)(n.h3,{id:"62-captura-de-qr",children:"6.2 Captura de QR"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n\n  SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n  SDKController.shared.launchMethod(controller: controller)\n\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]})]}),"\n",(0,r.jsx)(n.h3,{id:"63-generaci\xf3n-de-qr",children:"6.3 Generaci\xf3n de QR"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n  SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n  SDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,r.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato SdkResult. M\xe1s informaci\xf3n en la secci\xf3n de [",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,r.jsxs)(n.p,{children:["En la parte del error, dispondremos de la clase ",(0,r.jsx)(n.em,{children:"CaptureError"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" NO_DATA_ERROR\n TIMEOUT\n CANCEL_BY_USER\n CANCEL_LAUNCH\n CAMERA_ERROR\n QR_GENERATION_ERROR\n ACTIVITY_RESULT_ERROR\n QR_CAPTURE_ERROR\n PHACTURAS_CAPTURE_ERROR\n CAMERA_PERMISSION_DENIED\n INITIALIZATION_ERROR\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsx)(n.p,{children:"En la ejecuci\xf3n correcta, simplemente se informa de que todo ha ido bien\ncon el SdkResult.Success."}),"\n",(0,r.jsx)(n.h4,{id:"721-result-invoicereader",children:"7.2.1 Result InvoiceReader"}),"\n",(0,r.jsx)(n.h5,{id:"scanneddocs",children:"ScannedDocs"}),"\n",(0,r.jsx)(n.p,{children:"Array de documentos escaneados:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"image: UIImage."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"date: Date."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:(0,r.jsx)("u",{children:" Mobile\nSDK"})})}),"), este componente en concreto permite la\nmodificaci\xf3n de textos espec\xedficos."]}),"\n",(0,r.jsx)(n.h3,{id:"81-textos",children:"8.1. Textos"}),"\n",(0,r.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,r.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'"qr_reader_component_exit_alert_question"="Are you sure you will finish the process?";\n"qr_reader_component_camera_message_circle"="Keep the QR inside the circle";\n"qr_reader_component_camera_message_square"="Keep the QR inside the square";\n"invoice_reader_component_camera_message_circle"="Keep the document inside the circle";\n"invoice_reader_component_camera_message_square"="Keep the document inside the square";\n"capture_component_camera_unauthorized_title"="Camara unauthorized";\n"capture_component_camera_unauthorized_description"="It seems you haven\'t given this app permission to use the camera. Please go to Settings and enable it.";\n"capture_component_image_capture_error"="Image capture error";\n"capture_component_preview_image"="Captured image preview";\n"capture_component_take_again"="Capture again";\n"capture_component_accept"="Accept";\n"capture_component_capture"="Capture";\n"capture_component_ok"="Ok";\n"capture_component_cancel"="Cancel";\n"capture_component_end_confirmation_title" = "Are you sure you will finish the process?";\n"capture_component_text_results_finish_button" = "Finish";\n"capture_component_agree" = "Accept";\n"capture_component_finish" = "FINISH";\n"capture_component_remove_confirmation_title" = "Do you want to delete this document?";\n"capture_component_image" = "Image ";\n"capture_component_retry" = "NO, I WANT TO REPEAT THE PHOTOGRAPH";\n"capture_component_tutorial_tittle" = "Scan your documents"; \n"capture_component_tutorial_description" = "Take a picture of the document, or upload an image. /n You can scan several documents before finishing";\n"capture_component_tutorial_button" = "CONTINUE";\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3585:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>l});var r=a(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);