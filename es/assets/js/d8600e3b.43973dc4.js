"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7919],{8081:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>t});var r=a(5893),o=a(1151);const i={},l="Capture Component",s={id:"Capture_Component",title:"Capture Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/current/Capture_Component.md",sourceDirName:".",slug:"/Capture_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Capture_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:2},{value:"Versi\xf3n m\xednima de iOS: <strong>14</strong>",id:"versi\xf3n-m\xednima-de-ios-14",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:2},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class InvoiceCaptureConfigurationData",id:"51-class-invoicecaptureconfigurationdata",level:3},{value:"5.1.1 vibrationEnabled",id:"511-vibrationenabled",level:4},{value:"5.1.2 showDiagnostic",id:"512-showdiagnostic",level:4},{value:"5.1.3 showTutorial",id:"513-showtutorial",level:4},{value:"5.1.4 timePreview",id:"514-timepreview",level:4},{value:"5.1.6 previewAfterCapture",id:"516-previewaftercapture",level:4},{value:"5.1.7 maxScannedDocs",id:"517-maxscanneddocs",level:4},{value:"5.1.8 showPreviousTip",id:"518-showprevioustip",level:4},{value:"5.1.9 autoCapture",id:"519-autocapture",level:4},{value:"5.2. Class QrCaptureConfigurationData",id:"52-class-qrcaptureconfigurationdata",level:3},{value:"5.2.1. extractionTimeout",id:"521-extractiontimeout",level:4},{value:"5.2.2. cameraSelected",id:"522-cameraselected",level:4},{value:"5.2.3. cameraShape",id:"523-camerashape",level:4},{value:"5.2.4. vibrationEnabled",id:"524-vibrationenabled",level:4},{value:"5.2.5. showStroke",id:"525-showstroke",level:4},{value:"5.2.6. showDiagnostic",id:"526-showdiagnostic",level:4},{value:"5.2.7. transparentBackground",id:"527-transparentbackground",level:4},{value:"5.3. Class QrGeneratorConfiguration",id:"53-class-qrgeneratorconfiguration",level:3},{value:"5.3.1. source",id:"531-source",level:4},{value:"5.3.2. width",id:"532-width",level:4},{value:"5.3.3. height",id:"533-height",level:4},{value:"5.3.4 showDiagnostic",id:"534-showdiagnostic",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"6.1 Captura de factura",id:"61-captura-de-factura",level:3},{value:"6.2 Captura de QR",id:"62-captura-de-qr",level:3},{value:"6.3 Generaci\xf3n de QR",id:"63-generaci\xf3n-de-qr",level:3},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 Result InvoiceReader",id:"721-result-invoicereader",level:4},{value:"ScannedDocs",id:"scanneddocs",level:5},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1. Textos",id:"81-textos",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"capture-component",children:"Capture Component"}),"\n",(0,r.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,r.jsx)(n.a,{href:"./Mobile_SDK#11-requisitos-m%C3%ADnimos",children:"Primeros Pasos"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Capture Component"})}),". \xc9ste se encarga de realizar la captura de facturas y la captura y generaci\xf3n de QRs."]}),"\n",(0,r.jsx)(n.h2,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,r.jsxs)(n.h2,{id:"versi\xf3n-m\xednima-de-ios-14",children:["Versi\xf3n m\xednima de iOS: ",(0,r.jsx)(n.strong,{children:"14"})]}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#2-integraci%C3%B3n-inicial",children:"Integraci\xf3n"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,r.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,r.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 2.2.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Para instalar el componente de VideoID deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  pod 'FPHISDKCaptureComponent', '~> 2.2.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["En caso de realizar el desarrollo con ",(0,r.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:\n",(0,r.jsx)(n.img,{alt:"Image",src:a(9232).Z+"",width:"1834",height:"510"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,r.jsxs)(n.p,{children:["En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero ",(0,r.jsx)(n.strong,{children:"info.plist"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,r.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEste comando debe haberse ejecutado ",(0,r.jsx)(n.strong,{children:"anteriormente al lanzamiento del componente"}),"."]}),(0,r.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda consultar la documentaci\xf3n de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#4-iniciar-nueva-operacion",children:"Iniciar nueva operaci\xf3n"}),", en el que se detalla y explica en qu\xe9 consiste este proceso."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controlador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"InvoiceReaderController"}),(0,r.jsx)(n.td,{children:"Controlador para la captura de facturas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrReaderController"}),(0,r.jsx)(n.td,{children:"Controlador para la captura de QRs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrGeneratorController"}),(0,r.jsx)(n.td,{children:"Controlador para la generaci\xf3n de QRs"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Los tres controladores tienen funcionalidades independientes por lo que sus configuraciones tambi\xe9n lo son:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"InvoiceCaptureConfigurationData"})," y pasarlo como par\xe1metro al SDKController durante el lanzamiento del componente para Invoice."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"QrCaptureConfigurationData"})," y pasarlo como par\xe1metro al SDKController durante el lanzamiento del componente de captura de QR"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"QrGeneratorConfiguration"})," y pasarlo como par\xe1metro al SDKController durante el lanzamiento del componente para generaci\xf3n de QRs."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de estas clased y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-invoicecaptureconfigurationdata",children:"5.1. Class InvoiceCaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-vibrationenabled",children:"5.1.1 vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Habilitar vibraci\xf3n durante el proceso"}),"\n",(0,r.jsx)(n.h4,{id:"512-showdiagnostic",children:"5.1.2 showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso y en caso de error"}),"\n",(0,r.jsx)(n.h4,{id:"513-showtutorial",children:"5.1.3 showTutorial"}),"\n",(0,r.jsx)(n.p,{children:"Indica si el componente activa la pantalla de tutorial. En esta vista se explica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,r.jsx)(n.h4,{id:"514-timepreview",children:"5.1.4 timePreview"}),"\n",(0,r.jsx)(n.p,{children:"Se define el tiempo en milisegundos que dura la preview tras la captura, por defecto est\xe1 en 2000"}),"\n",(0,r.jsx)(n.h4,{id:"516-previewaftercapture",children:"5.1.6 previewAfterCapture"}),"\n",(0,r.jsx)(n.p,{children:"Se habilita la preview tras la captura"}),"\n",(0,r.jsx)(n.h4,{id:"517-maxscanneddocs",children:"5.1.7 maxScannedDocs"}),"\n",(0,r.jsx)(n.p,{children:"N\xfamero m\xe1ximo de documentos capturados"}),"\n",(0,r.jsx)(n.h4,{id:"518-showprevioustip",children:"5.1.8 showPreviousTip"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar la pantalla de Tips previos"}),"\n",(0,r.jsx)(n.h4,{id:"519-autocapture",children:"5.1.9 autoCapture"}),"\n",(0,r.jsx)(n.p,{children:"Habilitar la captura autom\xe1tica"}),"\n",(0,r.jsx)(n.h3,{id:"52-class-qrcaptureconfigurationdata",children:"5.2. Class QrCaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"521-extractiontimeout",children:"5.2.1. extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Tiempo de extracci\xf3n m\xe1ximo"}),"\n",(0,r.jsx)(n.h4,{id:"522-cameraselected",children:"5.2.2. cameraSelected"}),"\n",(0,r.jsx)(n.p,{children:"C\xe1mara seleccionada: FRONT, BACK"}),"\n",(0,r.jsx)(n.h4,{id:"523-camerashape",children:"5.2.3. cameraShape"}),"\n",(0,r.jsx)(n.p,{children:"Forma de la m\xe1scara que se quiere mostrar sobre la c\xe1mara:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQUARE: Cuadrado"}),"\n",(0,r.jsx)(n.li,{children:"CIRCULAR: C\xedrculo"}),"\n",(0,r.jsx)(n.li,{children:"RECTANGLE_TALL: Rect\xe1ngulo"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"524-vibrationenabled",children:"5.2.4. vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Habilitar vibraci\xf3n durante el proceso"}),"\n",(0,r.jsx)(n.h4,{id:"525-showstroke",children:"5.2.5. showStroke"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar una l\xednea como borde de la c\xe1mara"}),"\n",(0,r.jsx)(n.h4,{id:"526-showdiagnostic",children:"5.2.6. showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso y en caso de error"}),"\n",(0,r.jsx)(n.h4,{id:"527-transparentbackground",children:"5.2.7. transparentBackground"}),"\n",(0,r.jsx)(n.p,{children:"M\xe1scara sobre la c\xe1mara semitransparente"}),"\n",(0,r.jsx)(n.h3,{id:"53-class-qrgeneratorconfiguration",children:"5.3. Class QrGeneratorConfiguration"}),"\n",(0,r.jsx)(n.h4,{id:"531-source",children:"5.3.1. source"}),"\n",(0,r.jsx)(n.p,{children:"Texto que se va a incluir en el QR"}),"\n",(0,r.jsx)(n.h4,{id:"532-width",children:"5.3.2. width"}),"\n",(0,r.jsx)(n.p,{children:"Ancho del QR generado"}),"\n",(0,r.jsx)(n.h4,{id:"533-height",children:"5.3.3. height"}),"\n",(0,r.jsx)(n.p,{children:"Alto del QR generado"}),"\n",(0,r.jsx)(n.h4,{id:"534-showdiagnostic",children:"5.3.4 showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso y en caso de error"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,r.jsx)(n.h3,{id:"61-captura-de-factura",children:"6.1 Captura de factura"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]})]}),"\n",(0,r.jsx)(n.h3,{id:"62-captura-de-qr",children:"6.2 Captura de QR"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n\n  SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n  SDKController.shared.launchMethod(controller: controller)\n\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]})]}),"\n",(0,r.jsx)(n.h3,{id:"63-generaci\xf3n-de-qr",children:"6.3 Generaci\xf3n de QR"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n  SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n  SDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,r.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato SdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#6-retorno-de-resultado",children:"Retorno de Resultado"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,r.jsxs)(n.p,{children:["En la parte del error, dispondremos de la clase ",(0,r.jsx)(n.em,{children:"CaptureError"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" NO_DATA_ERROR\n TIMEOUT\n CANCEL_BY_USER\n CANCEL_LAUNCH\n CAMERA_ERROR\n QR_GENERATION_ERROR\n ACTIVITY_RESULT_ERROR\n QR_CAPTURE_ERROR\n PHACTURAS_CAPTURE_ERROR\n CAMERA_PERMISSION_DENIED\n INITIALIZATION_ERROR\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsx)(n.p,{children:"En la ejecuci\xf3n correcta, simplemente se informa de que todo ha ido bien\ncon el SdkResult.Success."}),"\n",(0,r.jsx)(n.h4,{id:"721-result-invoicereader",children:"7.2.1 Result InvoiceReader"}),"\n",(0,r.jsx)(n.h5,{id:"scanneddocs",children:"ScannedDocs"}),"\n",(0,r.jsx)(n.p,{children:"Array de documentos escaneados:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"image: UIImage."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"date: Date."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:(0,r.jsx)("u",{children:" Mobile\nSDK"})})}),"), este componente en concreto permite la\nmodificaci\xf3n de textos espec\xedficos."]}),"\n",(0,r.jsx)(n.h3,{id:"81-textos",children:"8.1. Textos"}),"\n",(0,r.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,r.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'"capture_component_qr_camera_message" = "Mant\xe9n el QR en el centro";\n"capture_component_qr_tutorial_title" = "Escanea el c\xf3digo QR";\n"capture_component_qr_tutorial_desc" = "Enfoca el c\xf3digo QR dentro del recuadro";\n"capture_component_qr_tutorial_button_message" = "COMENZAR";\n"capture_component_qr_tutorial_1" = "Aseg\xfarate de que el c\xf3digo QR tiene luz suficiente y no hay reflejos o destellos sobre el c\xf3digo.";\n"capture_component_qr_tutorial_2" = "Encaja los bordes del c\xf3digo QR dentro del recuadro. ";\n"capture_component_invoice_tip_button_message" = "COMENZAR";\n"capture_component_exit_alert_question" = "\xbfSeguro que quiere finalizar el proceso? ";\n"capture_component_exit_alert_accept" = "Aceptar";\n"capture_component_exit_alert_cancel" = "Cancelar";\n"capture_component_invoice_finish_button_message" = "Finalizar";\n"capture_component_invoice_preview_finish_button_message" = "FINALIZAR";\n"capture_component_invoice_remove_question" = "\xbfQuieres eliminar este documento?";\n"capture_component_invoice_image_count_label" = "Imagen";\n"capture_component_invoice_retry_button_message" = "NO, QUIERO REPETIR LA FOTOGRAF\xcdA";\n"capture_component_invoice_retry_add_image_message" = "A\xd1ADIR NUEVA FOTOGRAF\xcdA";\n"capture_component_invoice_tip_title" = "Escanea tus documentos";\n"capture_component_invoice_tip_desc" = "Haz una foto al documento, o sube una imagen. \\nPuedes escanear varios documentos antes de finalizar";\n"capture_component_invoice_close_alt" = "Cerrar";\n"capture_component_invoice_upload_alt" = "Subir foto";\n"capture_component_invoice_capture_alt" = "Capturar";\n"capture_component_invoice_remove_alt" = "Eliminar";\n"capture_component_invoice_back_image_alt" = "Imagen anterior";\n"capture_component_invoice_forward_image_alt" = "Siguiente imagen";\n"capture_component_timeout_title"="Tiempo superado";\n"capture_component_timeout_desc"="Pedimos disculpas. No se ha podido hacer la captura.";\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9232:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>l});var r=a(7294);const o={},i=r.createContext(o);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);