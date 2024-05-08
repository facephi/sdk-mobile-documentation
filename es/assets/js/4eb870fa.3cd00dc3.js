"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7794],{4685:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>t});var r=a(4848),o=a(8453);const i={},s="Capture Component",l={id:"Capture_Component",title:"Capture Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-android/version-1.5.6/Capture_Component.md",sourceDirName:".",slug:"/Capture_Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.6/Capture_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.6",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Recording Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.6/Video_Recording_Component"},next:{title:"Flow Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.6/Flow_Component"}},d={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class CaptureConfigurationData",id:"51-class-captureconfigurationdata",level:3},{value:"5.1.1. extractionTimeout",id:"511-extractiontimeout",level:4},{value:"5.1.2. cameraSelected",id:"512-cameraselected",level:4},{value:"5.1.3. cameraShape",id:"513-camerashape",level:4},{value:"5.1.4. vibrationEnabled",id:"514-vibrationenabled",level:4},{value:"5.1.5. showStroke",id:"515-showstroke",level:4},{value:"5.1.6. showDiagnostic",id:"516-showdiagnostic",level:4},{value:"5.1.6. transparentBackground",id:"516-transparentbackground",level:4},{value:"5.2. Class QrGeneratorConfiguration",id:"52-class-qrgeneratorconfiguration",level:3},{value:"5.2.1. source",id:"521-source",level:4},{value:"5.2.2. width",id:"522-width",level:4},{value:"5.2.3. height",id:"523-height",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"6.1 Captura de factura",id:"61-captura-de-factura",level:3},{value:"6.2 Captura de QR",id:"62-captura-de-qr",level:3},{value:"6.3 Generaci\xf3n de QR",id:"63-generaci\xf3n-de-qr",level:3},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1. Textos",id:"81-textos",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"capture-component",children:"Capture Component"}),"\n",(0,r.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Capture Component"})}),". \xc9ste se encarga de realizar la captura de facturas y la captura y generaci\xf3n de QRs."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,r.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,r.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:capture_component:$sdk_capture_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,r.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,r.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controlador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PhacturasReaderController"}),(0,r.jsx)(n.td,{children:"Controlador para la captura de facturas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrReaderController"}),(0,r.jsx)(n.td,{children:"Controlador para la captura de QRs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QrGeneratorController"}),(0,r.jsx)(n.td,{children:"Controlador para la generaci\xf3n de QRs"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto ",(0,r.jsx)(n.em,{children:"CaptureConfigurationData"})," y pasarlo como par\xe1metro al SDKController durante el lanzamiento del componente para capturas."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"QrGeneratorConfiguration"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente para generaci\xf3n de QRs."]}),"\n",(0,r.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nestas clased y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-captureconfigurationdata",children:"5.1. Class CaptureConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-extractiontimeout",children:"5.1.1. extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Tiempo de extracci\xf3n m\xe1ximo"}),"\n",(0,r.jsx)(n.h4,{id:"512-cameraselected",children:"5.1.2. cameraSelected"}),"\n",(0,r.jsx)(n.p,{children:"C\xe1mara seleccionada: FRONT, BACK"}),"\n",(0,r.jsx)(n.h4,{id:"513-camerashape",children:"5.1.3. cameraShape"}),"\n",(0,r.jsx)(n.p,{children:"Forma de la m\xe1scara que se quiere mostrar sobre la c\xe1mara:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQUARE: Cuadrado"}),"\n",(0,r.jsx)(n.li,{children:"CIRCULAR: C\xedrculo"}),"\n",(0,r.jsx)(n.li,{children:"RECTANGLE_TALL: Rect\xe1ngulo"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"514-vibrationenabled",children:"5.1.4. vibrationEnabled"}),"\n",(0,r.jsx)(n.p,{children:"Habilitar vibraci\xf3n durante el proceso"}),"\n",(0,r.jsx)(n.h4,{id:"515-showstroke",children:"5.1.5. showStroke"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar una l\xednea como borde de la c\xe1mara"}),"\n",(0,r.jsx)(n.h4,{id:"516-showdiagnostic",children:"5.1.6. showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso"}),"\n",(0,r.jsx)(n.h4,{id:"516-transparentbackground",children:"5.1.6. transparentBackground"}),"\n",(0,r.jsx)(n.p,{children:"M\xe1scara sobre la c\xe1mara semitransparente"}),"\n",(0,r.jsx)(n.h3,{id:"52-class-qrgeneratorconfiguration",children:"5.2. Class QrGeneratorConfiguration"}),"\n",(0,r.jsx)(n.h4,{id:"521-source",children:"5.2.1. source"}),"\n",(0,r.jsx)(n.p,{children:"Texto que se va a incluir en el QR"}),"\n",(0,r.jsx)(n.h4,{id:"522-width",children:"5.2.2. width"}),"\n",(0,r.jsx)(n.p,{children:"Ancho del QR generado"}),"\n",(0,r.jsx)(n.h4,{id:"523-height",children:"5.2.3. height"}),"\n",(0,r.jsx)(n.p,{children:"Alto del QR generado"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,r.jsx)(n.h3,{id:"61-captura-de-factura",children:"6.1 Captura de factura"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    PhacturasReaderController(CaptureConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("PhacturasReader: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("PhacturasReader OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    PhacturasReaderController(CaptureConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("PhacturasReader: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("PhacturasReader OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,r.jsx)(n.h3,{id:"62-captura-de-qr",children:"6.2 Captura de QR"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    QrReaderController(CaptureConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("QR: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("QR OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    QrReaderController(CaptureConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("QR: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("QR OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,r.jsx)(n.h3,{id:"63-generaci\xf3n-de-qr",children:"6.3 Generaci\xf3n de QR"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    QrGeneratorController(QrGeneratorConfiguration("")) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("QrGenerator: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("QrGenerator OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    QrGeneratorController(QrGeneratorConfiguration("")) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("QrGenerator: KO - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("QrGenerator OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,r.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,r.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK"]}),"\n",(0,r.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,r.jsxs)(n.p,{children:["En la parte del error, dispondremos de la clase ",(0,r.jsx)(n.em,{children:"CaptureError"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" NO_DATA_ERROR\n TIMEOUT\n CANCEL_BY_USER\n CANCEL_LAUNCH\n CAMERA_ERROR\n QR_GENERATION_ERROR\n ACTIVITY_RESULT_ERROR\n QR_CAPTURE_ERROR\n PHACTURAS_CAPTURE_ERROR\n CAMERA_PERMISSION_DENIED\n INITIALIZATION_ERROR\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsx)(n.p,{children:"En la ejecuci\xf3n correcta, simplemente se informa de que todo ha ido bien\ncon el SdkResult.Success."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"), este componente en concreto permite la\nmodificaci\xf3n de textos espec\xedficos."]}),"\n",(0,r.jsx)(n.h3,{id:"81-textos",children:"8.1. Textos"}),"\n",(0,r.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,r.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'    <string name="capture_component_qr_camera_message">Mant\xe9n el QR en el centro</string>\n    <string name="capture_component_invoice_camera_message">Manten la factura en el centro</string>\n    <string name="capture_component_button_message">Capturar</string>\n    <string name="capture_component_timeout_title">Tiempo superado</string>\n    <string name="capture_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="capture_component_internal_error_title">Hubo un problema t\xe9cnico</string>\n    <string name="capture_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>l});var r=a(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);