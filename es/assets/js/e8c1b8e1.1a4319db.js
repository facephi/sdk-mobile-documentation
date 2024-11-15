"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8268],{1833:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"Capture_Component","title":"Capture Component","description":"0. Requisitos base de SDK Mobile","source":"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-1.5.X/Capture_Component.md","sourceDirName":".","slug":"/Capture_Component","permalink":"/sdk-mobile-documentation/es/docs/ios/1.5.X/Capture_Component","draft":false,"unlisted":false,"tags":[],"version":"1.5.X","frontMatter":{}}');var o=a(4848),i=a(8453);const l={},s="Capture Component",c={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class CaptureConfigurationData",id:"51-class-captureconfigurationdata",level:3},{value:"5.1.1 Configuraci\xf3n B\xe1sica",id:"511-configuraci\xf3n-b\xe1sica",level:4},{value:"cameraSelected",id:"cameraselected",level:5},{value:"vibrationEnabled",id:"vibrationenabled",level:5},{value:"cameraShape",id:"camerashape",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"extractionTimeout",id:"extractiontimeout",level:5},{value:"5.1.2 Configuraci\xf3n Avanzada",id:"512-configuraci\xf3n-avanzada",level:4},{value:"showStroke",id:"showstroke",level:5},{value:"transparentBackground",id:"transparentbackground",level:5},{value:"5.2. Class QrGeneratorConfiguration",id:"52-class-qrgeneratorconfiguration",level:3},{value:"source",id:"source",level:5},{value:"width",id:"width",level:5},{value:"height",id:"height",level:5},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"6.1 Captura de factura",id:"61-captura-de-factura",level:3},{value:"6.2 Captura de QR",id:"62-captura-de-qr",level:3},{value:"6.3 Generaci\xf3n de QR",id:"63-generaci\xf3n-de-qr",level:3},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1. Textos",id:"81-textos",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"capture-component",children:"Capture Component"})}),"\n",(0,o.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,o.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,o.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de ",(0,o.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El ",(0,o.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"Capture Component"})}),". \xc9ste se encarga de realizar la captura de facturas y la captura y generaci\xf3n de QRs."]}),"\n",(0,o.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,o.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,o.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,o.jsx)(n.strong,{children:"13"})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,o.jsx)("div",{class:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n de ",(0,o.jsx)(n.a,{href:"./Mobile_SDK#2-integraci%C3%B3n-inicial",children:"Integraci\xf3n"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,o.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,o.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,o.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,o.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Para instalar el componente de Capture deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  pod 'FPHISDKCaptureComponent', '~> 1.5.0'\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["En caso de realizar el desarrollo con ",(0,o.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Image",src:a(225).A+"",width:"1834",height:"510"})}),"\n",(0,o.jsx)(n.h3,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,o.jsx)(n.p,{children:"En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero info.plist"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,o.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,o.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,o.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"Mobile SDK"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Controlador"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"InvoiceReaderController"}),(0,o.jsx)(n.td,{children:"Controlador para la captura de facturas"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"QrReaderController"}),(0,o.jsx)(n.td,{children:"Controlador para la captura de QRs"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"QrGeneratorController"}),(0,o.jsx)(n.td,{children:"Controlador para la generaci\xf3n de QRs"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,o.jsxs)(n.p,{children:["Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto ",(0,o.jsx)(n.em,{children:"CaptureConfigurationData"})," y pasarlo como par\xe1metro al SDKController durante el lanzamiento del componente para capturas."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"QrGeneratorConfiguration"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente para generaci\xf3n de QRs."]}),"\n",(0,o.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nestas clased y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,o.jsx)(n.h3,{id:"51-class-captureconfigurationdata",children:"5.1. Class CaptureConfigurationData"}),"\n",(0,o.jsx)(n.h4,{id:"511-configuraci\xf3n-b\xe1sica",children:"5.1.1 Configuraci\xf3n B\xe1sica"}),"\n",(0,o.jsx)(n.h5,{id:"cameraselected",children:"cameraSelected"}),"\n",(0,o.jsx)(n.p,{children:"C\xe1mara seleccionada: FRONT, BACK"}),"\n",(0,o.jsx)(n.h5,{id:"vibrationenabled",children:"vibrationEnabled"}),"\n",(0,o.jsx)(n.p,{children:"Habilitar vibraci\xf3n durante el proceso"}),"\n",(0,o.jsx)(n.h5,{id:"camerashape",children:"cameraShape"}),"\n",(0,o.jsx)(n.p,{children:"Forma de la m\xe1scara que se quiere mostrar sobre la c\xe1mara:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"SQUARE: Cuadrado"}),"\n",(0,o.jsx)(n.li,{children:"CIRCULAR: C\xedrculo"}),"\n",(0,o.jsx)(n.li,{children:"RECTANGLE_TALL: Rect\xe1ngulo"}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,o.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso"}),"\n",(0,o.jsx)(n.h5,{id:"extractiontimeout",children:"extractionTimeout"}),"\n",(0,o.jsx)(n.p,{children:"Tiempo de extracci\xf3n m\xe1ximo"}),"\n",(0,o.jsx)(n.h4,{id:"512-configuraci\xf3n-avanzada",children:"5.1.2 Configuraci\xf3n Avanzada"}),"\n",(0,o.jsx)(n.h5,{id:"showstroke",children:"showStroke"}),"\n",(0,o.jsx)(n.p,{children:"Mostrar una l\xednea como borde de la c\xe1mara"}),"\n",(0,o.jsx)(n.h5,{id:"transparentbackground",children:"transparentBackground"}),"\n",(0,o.jsx)(n.p,{children:"M\xe1scara sobre la c\xe1mara semitransparente"}),"\n",(0,o.jsx)(n.h3,{id:"52-class-qrgeneratorconfiguration",children:"5.2. Class QrGeneratorConfiguration"}),"\n",(0,o.jsx)(n.h5,{id:"source",children:"source"}),"\n",(0,o.jsx)(n.p,{children:"Texto que se va a incluir en el QR"}),"\n",(0,o.jsx)(n.h5,{id:"width",children:"width"}),"\n",(0,o.jsx)(n.p,{children:"Ancho del QR generado"}),"\n",(0,o.jsx)(n.h5,{id:"height",children:"height"}),"\n",(0,o.jsx)(n.p,{children:"Alto del QR generado"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,o.jsx)(n.h3,{id:"61-captura-de-factura",children:"6.1 Captura de factura"}),"\n",(0,o.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,o.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"   let controller = InvoiceReaderController(output: output, viewController: viewController)\n   SDKController.shared.launch(controller: controller)\n)\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,o.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"   let controller = InvoiceReaderController(output: output, viewController: viewController)\n   SDKController.shared.launchMethod(controller: controller)\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo ",(0,o.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,o.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,o.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,o.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,o.jsx)(n.h3,{id:"62-captura-de-qr",children:"6.2 Captura de QR"}),"\n",(0,o.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,o.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n        SDKController.shared.launch(controller: controller)\n)\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,o.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)\n        SDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo ",(0,o.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,o.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,o.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,o.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,o.jsx)(n.h3,{id:"63-generaci\xf3n-de-qr",children:"6.3 Generaci\xf3n de QR"}),"\n",(0,o.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,o.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n        SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,o.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)\n        SDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo ",(0,o.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,o.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,o.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,o.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,o.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,o.jsx)(n.a,{href:"./Mobile_SDK#6-result-return",children:"Retorno de Resultado"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"NO_OPERATION_CREATED_ERROR\nCAMERA_PERMISSION_DENIED\nCANCEL_BY_USER\nTIMEOUT\nINTERNAL_ERROR\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,o.jsx)(n.em,{children:"data"})]}),"\n",(0,o.jsx)(n.p,{children:"En la ejecuci\xf3n correcta, simplemente se informa de que todo ha ido bien\ncon el SdkResult.Success."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,o.jsx)(n.h3,{id:"81-textos",children:"8.1. Textos"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'"qr_reader_component_exit_alert_question"="Are you sure you will finish the process?";\n"qr_reader_component_camera_message_circle"="Keep the QR inside the circle";\n"qr_reader_component_camera_message_square"="Keep the QR inside the square";\n"invoice_reader_component_camera_message_circle"="Keep the document inside the circle";\n"invoice_reader_component_camera_message_square"="Keep the document inside the square";\n"capture_component_camera_unauthorized_title"="Camara unauthorized";\n"capture_component_camera_unauthorized_description"="It seems you haven\'t given this app permission to use the camera. Please go to Settings and enable it.";\n"capture_component_image_capture_error"="Image capture error";\n"capture_component_preview_image"="Captured image preview";\n"capture_component_take_again"="Capture again";\n"capture_component_accept"="Accept";\n"capture_component_capture"="Capture";\n"capture_component_ok"="Ok";\n"capture_component_cancel"="Cancel";\n"capture_component_end_confirmation_title" = "Are you sure you will finish the process?";\n"capture_component_text_results_finish_button" = "Finish";\n"capture_component_agree" = "Accept";\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},225:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var r=a(6540);const o={},i=r.createContext(o);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);