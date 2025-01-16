"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8402],{6037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=i(5893),o=i(1151);const r={},s="Video Id Component",l={id:"Video_Id_Component",title:"Video Id Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/current/Video_Id_Component.md",sourceDirName:".",slug:"/Video_Id_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Video_Id_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Call Component",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Video_Call_Component"},next:{title:"Video Recording Component",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Video_Recording_Component"}},d={},c=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:2},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class VideoIdConfigurationData",id:"51-class-videoidconfigurationdata",level:3},{value:"5.1.1. Configuraci\xf3n B\xe1sica",id:"511-configuraci\xf3n-b\xe1sica",level:4},{value:"sectionTime",id:"sectiontime",level:5},{value:"showCompletedTutorial",id:"showcompletedtutorial",level:5},{value:"mode",id:"mode",level:5},{value:"5.1.2 Configuraci\xf3n Avanzada",id:"512-configuraci\xf3n-avanzada",level:4},{value:"url",id:"url",level:5},{value:"apiKey",id:"apikey",level:5},{value:"tenantId",id:"tenantid",level:5},{value:"5.1.3. Otros",id:"513-otros",level:4},{value:"extractionTimeout",id:"extractiontimeout",level:5},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1 Colores e im\xe1genes",id:"81-colores-e-im\xe1genes",level:3},{value:"8.2 Fuentes",id:"82-fuentes",level:3},{value:"8.3 Personalizar el tiempo entre pantallas",id:"83-personalizar-el-tiempo-entre-pantallas",level:3},{value:"8.4 Textos - Multiidioma",id:"84-textos---multiidioma",level:3},{value:"8.4.1 Configuraci\xf3n de idiomas por defecto",id:"841-configuraci\xf3n-de-idiomas-por-defecto",level:4},{value:"8.4.2 Configuraci\xf3n de idiomas personalizada",id:"842-configuraci\xf3n-de-idiomas-personalizada",level:4},{value:"8.4.3 Keys para multiidioma",id:"843-keys-para-multiidioma",level:4}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"video-id-component",children:"Video Id Component"}),"\n",(0,a.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,a.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,a.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,a.jsx)(n.a,{href:"./Mobile_SDK#11-requisitos-m%C3%ADnimos",children:"Primeros Pasos"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"VideoID Component"})}),". \xc9ste se encarga de realizar la grabaci\xf3n de un\nusuario identific\xe1ndose, mostrando la cara y su documento de identidad."]}),"\n",(0,a.jsx)(n.h2,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,a.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,a.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,a.jsx)(n.strong,{children:"13"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,a.jsx)("div",{class:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK#2-integraci%C3%B3n-inicial",children:"Integraci\xf3n"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,a.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,a.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,a.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,a.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Para instalar el componente de VideoID deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\tpod 'VideoIdController', '~> 1.5.0'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["En caso de realizar el desarrollo con ",(0,a.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:\n",(0,a.jsx)(n.img,{alt:"Image",src:i(9232).Z+"",width:"1834",height:"510"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,a.jsxs)(n.p,{children:["En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero ",(0,a.jsx)(n.strong,{children:"info.plist"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,a.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,a.jsx)(n.strong,{children:"anteriormente al lanzamiento del componente"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda consultar la documentaci\xf3n de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK#4-iniciar-nueva-operacion",children:"Iniciar nueva operaci\xf3n"}),", en el que se detalla y explica en qu\xe9 consiste este proceso."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Controlador"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"VideoIdController"}),(0,a.jsx)(n.td,{children:"Controlador principal de video identificaci\xf3n"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SignatureVideoIdController"}),(0,a.jsx)(n.td,{children:"Controlador para firmar un proceso con una Captura"})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Los campos incluidos en la configuraci\xf3n (",(0,a.jsx)(n.strong,{children:"url, apiKey, tenantId"}),"),\nnormalmente ",(0,a.jsx)(n.strong,{children:"no es necesario que sean informados"})," ya que se completan\ninternamente a trav\xe9s de la licencia usada."]}),"\n",(0,a.jsxs)(n.p,{children:["Estos campos suelen informarse ",(0,a.jsx)(n.strong,{children:"solo"})," cuando el ",(0,a.jsx)(n.strong,{children:"servidor"})," es\n",(0,a.jsx)(n.strong,{children:"OnPremise"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"51-class-videoidconfigurationdata",children:"5.1. Class VideoIdConfigurationData"}),"\n",(0,a.jsx)(n.h4,{id:"511-configuraci\xf3n-b\xe1sica",children:"5.1.1. Configuraci\xf3n B\xe1sica"}),"\n",(0,a.jsx)(n.h5,{id:"sectiontime",children:"sectionTime"}),"\n",(0,a.jsx)(n.p,{children:"Indica la duraci\xf3n de cada una de las secciones en las que se muestra el\nmensaje de grabaci\xf3n."}),"\n",(0,a.jsx)(n.h5,{id:"showcompletedtutorial",children:"showCompletedTutorial"}),"\n",(0,a.jsx)(n.p,{children:"Indica si se quiere mostrar el tutorial inicial completo. Si no, se\nmostrar\xe1 un progress indicator."}),"\n",(0,a.jsx)(n.h5,{id:"mode",children:"mode"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ONLY_FACE: El proceso se realiza siendo necesariamente solo\nmostrando la cara."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT: El proceso se realiza usando tanto la cara como\nel frontal del documento de identidad."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT_BACK: El proceso se realiza usando la cara, el\nfrontal del documento de identidad y la parte trasera del documento."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"512-configuraci\xf3n-avanzada",children:"5.1.2 Configuraci\xf3n Avanzada"}),"\n",(0,a.jsx)(n.h5,{id:"url",children:"url"}),"\n",(0,a.jsx)(n.p,{children:"Ruta al socket de video"}),"\n",(0,a.jsx)(n.h5,{id:"apikey",children:"apiKey"}),"\n",(0,a.jsx)(n.p,{children:"ApiKey necesaria para la conexi\xf3n con el socket de video"}),"\n",(0,a.jsx)(n.h5,{id:"tenantid",children:"tenantId"}),"\n",(0,a.jsx)(n.p,{children:"Identificador del tenant que hace referencia al cliente actual,\nnecesario para la conexi\xf3n con el servicio de video."}),"\n",(0,a.jsx)(n.h4,{id:"513-otros",children:"5.1.3. Otros"}),"\n",(0,a.jsx)(n.h5,{id:"extractiontimeout",children:"extractionTimeout"}),"\n",(0,a.jsx)(n.p,{children:"Establece el tiempo m\xe1ximo que se puede realizar la lectura."}),"\n",(0,a.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,a.jsx)(n.p,{children:"Si se le da valor true, se activa la vibraci\xf3n en errores y si la respuesta del widget es OK"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,a.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,a.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,a.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,a.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["El m\xe9todo ",(0,a.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,a.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,a.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,a.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,a.jsx)(n.p,{children:"En los datos de configuraci\xf3n (VideoIDConfigurationData) tambi\xe9n se podr\xe1n modificar:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"sectionTime"}),": Tiempo que se permanecer\xe1 en cada pantalla del proceso en ms"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"mode"}),": Modo que se aplicar\xe1 para la grabaci\xf3n. Los posibles valores de VideoIdMode ser\xe1n:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ONLY_FACE: S\xf3lo tienes que mostrar la cara durante el proceso."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT: Tienes que mostrar la cara y la parte frontal del documento."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT_BACK: Tienes que mostrar la cara, la parte frontal y el dorso del documento."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"showCompletedTutorial"}),": Indica si se desea mostrar el tutorial completo del proceso o s\xf3lo la versi\xf3n simplificada."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Datos ",(0,a.jsx)("u",{children:"opcionales"})," que normalmente se incluyen dentro de la licencia"]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"tenantId"}),": Identificador del tenant que hace referencia al cliente actual, necesario para la conexi\xf3n con el servicio de video."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"url"}),": Ruta al socket de video."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"apiKey"}),": ApiKey necesaria para la conexi\xf3n con el socket de video."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,a.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en ",(0,a.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:(0,a.jsx)("strong",{children:"Mobile SDK"})})]}),"\n",(0,a.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,a.jsxs)(n.p,{children:["En la parte del error, dispondremos de la clase ",(0,a.jsx)(n.em,{children:"VideoIdError"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"NO_DATA_ERROR\nTIMEOUT\nCANCEL_BY_USER\nCANCEL_LAUNCH\nNETWORK_CONNECTION\nSOCKET_ERROR\nVIDEO_ERROR\nACTIVITY_RESULT_ERROR\nINITIALIZATION_ERROR -> it.error\nUNKNOWN_ERROR\nPERMISSION_DENIED\n"})}),"\n",(0,a.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,a.jsxs)(n.p,{children:["Para personalizar el componente, se debe llamar a ThemeVideoIdManager.setup(theme:",(0,a.jsx)(n.code,{children:"CustomThemeVideoId()"})," ) antes de lanzar el videoIdController:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"let videoidController = VideoIdController(data: data, output: output, viewController: viewController)\nThemeVideoIdManager.setup(theme: CustomThemeVideoId())\nSDKController.launchVideoId(controller: videoidController)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Un ejemplo de la clase CustomThemeVideoId ser\xeda este (debe implementar ThemeVideoIdProtocol):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'class CustomThemeVideoId: ThemeVideoIdProtocol {\n    var images: [R.Image: UIImage?] = [:]\n\n    var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]\n\n    // var animations: [R.Animation: String] = [:]\n\n    var name: String {\n        "custom"\n    }\n\n    var fonts: [R.Font: String] = [:]\n\n    var dimensions: [R.Dimension: CGFloat] {\n        [.fontBig: 8]\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"81-colores-e-im\xe1genes",children:"8.1 Colores e im\xe1genes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Las im\xe1genes inicializan en la variable images , pas\xe1ndole un diccionario, siendo la clave uno de los enumerados que representan las distintas im\xe1genes de la pantalla, y el valor la imagen personalizada que se deba mostrar."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"case ic_video_id_back_id\ncase ic_video_id_check\ncase ic_video_id_close\ncase ic_video_id_front_id\ncase ic_video_id_record_back\ncase ic_video_id_record_face\ncase ic_video_id_record_front\ncase ic_video_id_user\ncase intro\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Los colores se inicializan similarmente en la variable colors con un diccionario, teniendo como valor un UIColor que se desee."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"case MainBackground\ncase TitleText\ncase MessageText\ncase PrimaryButtonText\ncase Button\ncase CheckText\ncase Primary\n"})}),"\n",(0,a.jsx)(n.h3,{id:"82-fuentes",children:"8.2 Fuentes"}),"\n",(0,a.jsxs)(n.p,{children:["Las fuentes se inicializan similarmente en la variable ",(0,a.jsx)(n.code,{children:"fonts"})," con un diccionario, teniendo como valor un ",(0,a.jsx)(n.strong,{children:"String"})," con el nombre de la ",(0,a.jsx)(n.strong,{children:"UIFont"})," que se desee."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"case regular\ncase bold\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["El tama\xf1o de los textos se inicializa similarmente en la variable dimensions con un diccionario, teniendo como valor un ",(0,a.jsx)(n.strong,{children:"CGFloat"})," con el tama\xf1o deseado."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"83-personalizar-el-tiempo-entre-pantallas",children:"8.3 Personalizar el tiempo entre pantallas"}),"\n",(0,a.jsx)(n.p,{children:"Para modificar el tiempo que se permanece en cada pantalla de grabaci\xf3n hay que modificar el valor del par\xe1metro time (en ms) del VideoIDConfigurationData:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"VideoIDConfigurationData(time = TIEMPO EN MS)"})}),"\n",(0,a.jsx)(n.p,{children:"Siempre ser\xe1 el m\xednimo 5000."}),"\n",(0,a.jsx)(n.p,{children:"Este objeto se pasar\xe1 al hacer el setup del video ID."}),"\n",(0,a.jsx)(n.h3,{id:"84-textos---multiidioma",children:"8.4 Textos - Multiidioma"}),"\n",(0,a.jsx)(n.h4,{id:"841-configuraci\xf3n-de-idiomas-por-defecto",children:"8.4.1 Configuraci\xf3n de idiomas por defecto"}),"\n",(0,a.jsxs)(n.p,{children:["Si se instala el paquete mediante ",(0,a.jsx)(n.strong,{children:"SPM"}),", para que funcione la localizaci\xf3n de textos, es necesario a\xf1adir en el archivo ",(0,a.jsx)(n.strong,{children:"Info.plist"})," de la app integradora lo siguiente:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"CFBundleAllowMixedLocalizations = YES"})}),"\n",(0,a.jsx)(n.p,{children:"Quedar\xeda as\xed:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(45).Z+"",width:"1410",height:"586"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Ingl\xe9s"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Espa\xf1ol - Espa\xf1a"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Portugu\xe9s - Portugal"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"El idioma del componente se selecciona en funci\xf3n del idioma que tenga el m\xf3vil establecido."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Si el idioma es cualquiera cuya ra\xedz es el Espa\xf1ol (p.e Espa\xf1ol - M\xe9xico), por defecto, usar\xe1 Espa\xf1ol - Espa\xf1a."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Si el idioma es cualquiera cuya ra\xedz es el Portugu\xe9s (p.e Portugu\xe9s - Brasil), por defecto, usar\xe1 Portugu\xe9s - Portugal."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Para cualquier otro caso, se har\xe1 uso del Ingl\xe9s."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"842-configuraci\xf3n-de-idiomas-personalizada",children:"8.4.2 Configuraci\xf3n de idiomas personalizada"}),"\n",(0,a.jsx)(n.p,{children:"El componente permite la personalizaci\xf3n de los textos seg\xfan el idioma, el cual al igual que en el anterior caso, ser\xe1 definido por el lenguaje que est\xe9 seleccionado en el dispositivo."}),"\n",(0,a.jsxs)(n.p,{children:["Esta personalizaci\xf3n se aplica tanto a nuevas localizaciones como al caso de los idiomas predeterminados (es, en y pt-PT). Se hace a trav\xe9s del uso de los archivos ",(0,a.jsx)(n.strong,{children:"Localizable.strings."})]}),"\n",(0,a.jsx)(n.h4,{id:"843-keys-para-multiidioma",children:"8.4.3 Keys para multiidioma"}),"\n",(0,a.jsxs)(n.p,{children:["El archivo ",(0,a.jsx)(n.strong,{children:"Localizable.strings"})," de la carpeta ",(0,a.jsx)(n.strong,{children:"es.lproj"})," del componente es el siguiente:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'"video_id_text_waiting_agent_title"="Video grabaci\xf3n";\n"video_id_permission_denied"="Permiso denegado";\n"video_id_network_connection_error"="Revise su conexi\xf3n a internet";\n"video_id_exit_alert_question"="\xbfQuieres abandonar la identificaci\xf3n?";\n"video_id_exit_alert_exit"="Abandonar";\n"video_id_exit_alert_cancel"="Cancelar";\n"video_id_exit_alert_ok"="Ok";\n"video_id_exit"="Salir";\n"video_id_tip_message_face_document"="Coloca tu rostro y el frente de tu documento en las marcas e inicia la grabaci\xf3n";\n"video_id_tip_message_only_face"="Coloca tu rostro en las marcas e inicia la grabaci\xf3n";\n"video_id_info_message_back"="Ahora coloca el reverso de tu documento en la marca correspondiente"; // DOCUMENTO? DNI?\n"video_id_info_message_face_old"="Coloca tu rostro y en voz alta di los datos de tu domicilio y nombre completo";\n"video_id_finish_message"="\xa1Videograbaci\xf3n finalizada!";\n"video_id_finish_button"="Finalizar";\n"video_id_record_retry_button"="Repetir grabaci\xf3n";\n"video_id_record_init_button"="Iniciar grabaci\xf3n";\n"video_id_ready_button"="CONTINUAR";\n"video_id_generic_error"="Ha habido un error en la grabaci\xf3n";\n"video_id_tip_info_message"="En la parte inferior de la pantalla aparecer\xe1n las instrucciones y el tiempo para llevar a cabo la grabaci\xf3n";\n"video_id_face_instructions"="Ahora en voz alta di \\"Yo (nombre y apellidos)  acepto los t\xe9rminos y condiciones\\".";\n"video_id_face_document_instructions"="Coloca tu rostro y el frente de tu documento en las marcas";\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["De este modo, si se desea modificar por ejemplo el texto \u201c",(0,a.jsx)(n.em,{children:"Finalizar"}),"\u201d de la clave ",(0,a.jsx)(n.code,{children:"video_id_finish_button"})," para el idioma ",(0,a.jsx)(n.strong,{children:"es-MX"}),", se deber\xe1 ir al archivo ",(0,a.jsx)(n.strong,{children:"Localizable.strings"})," de la carpeta ",(0,a.jsx)(n.strong,{children:"es-MX.lproj"})," si es que existe (si no, se deber\xe1 crear) y ah\xed, a\xf1adir:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'"video_id_finish_button"="Terminar";'})}),"\n",(0,a.jsx)(n.p,{children:"Si un mensaje no se especifica en el fichero del idioma, este se rellenar\xe1 con el mensaje por defecto."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},9232:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},45:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/sdkVideo-infoplist-image-dfd92b23a51da4dd640cb2fc95eff2cf.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var a=i(7294);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);