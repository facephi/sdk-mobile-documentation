"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2114],{959:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(4848),o=a(8453);const r={},l="Video Call Component",s={id:"Video_Call_Component",title:"Video Call Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/current/Video_Call_Component.md",sourceDirName:".",slug:"/Video_Call_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/Video_Call_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"NFC Component",permalink:"/sdk-mobile-documentation/es/docs/ios/NFC_Component"},next:{title:"Video Id Component",permalink:"/sdk-mobile-documentation/es/docs/ios/Video_Id_Component"}},c={},d=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:2},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class VideoCallConfigurationData",id:"51-class-videocallconfigurationdata",level:3},{value:"5.1.1. Configuraci\xf3n B\xe1sica",id:"511-configuraci\xf3n-b\xe1sica",level:4},{value:"activateScreenSharing",id:"activatescreensharing",level:5},{value:"5.1.2. Configuraci\xf3n Avanzada",id:"512-configuraci\xf3n-avanzada",level:4},{value:"5.1.2.1. url",id:"5121-url",level:4},{value:"5.1.2.2 apiKey",id:"5122-apikey",level:4},{value:"5.1.2.3 tenantId",id:"5123-tenantid",level:4},{value:"5.1.3. Otros parametros",id:"513-otros-parametros",level:4},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"Ejemplo de configuraci\xf3n",id:"ejemplo-de-configuraci\xf3n",level:3},{value:"IMPORTANTE",id:"importante",level:4},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1 Colores e im\xe1genes",id:"81-colores-e-im\xe1genes",level:3},{value:"8.2 Fuentes",id:"82-fuentes",level:3},{value:"8.4 Colores",id:"84-colores",level:3}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"video-call-component",children:"Video Call Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,i.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,i.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de [1.5.X][ES] ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK"})})}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"El Componente tratado en el documento actual recibe el nombre de VideoCall Component. \xc9ste se encarga de gestionar la comunicaci\xf3n entre un usuario y un agente de forma remota. Est\xe1 orientado principalmente para casos de uso de videoasistencia."}),"\n",(0,i.jsx)(n.p,{children:"##1.1 Requisitos m\xednimos\nLa versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,i.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Antes de integrar este componente se recomienda leer la documentaci\xf3n relativa a [1.5.X][ES] ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK"})})})," y seguir las instrucciones indicadas en dicho documento."]}),"\n",(0,i.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,i.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,i.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Para instalar el componente de SelphID deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  pod 'FPHISDKVideoCallComponent', '~> 1.5.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["En caso de realizar el desarrollo con ",(0,i.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:a(3585).A+"",width:"1834",height:"510"})}),"\n",(0,i.jsx)(n.h2,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,i.jsxs)(n.p,{children:["En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero ",(0,i.jsx)(n.strong,{children:"info.plist"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,i.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,i.jsx)(n.strong,{children:"anteriormente al lanzamiento del componente"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda consultar la documentaci\xf3n de [1.5.X][ES] ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK"})})}),", en el que se detalla y explica en qu\xe9 consiste este proceso."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Controlador"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VideoCallController"}),(0,i.jsx)(n.td,{children:"Controlador principal de videollamada"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,i.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"VideoCallConfigurationData"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente."]}),"\n",(0,i.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-videocallconfigurationdata",children:"5.1. Class VideoCallConfigurationData"}),"\n",(0,i.jsxs)(n.p,{children:["Los campos incluidos en la configuraci\xf3n, normalmente ",(0,i.jsx)(n.strong,{children:"no es necesario\nque sean informados"})," ya que se completan internamente a trav\xe9s de la\nlicencia usada."]}),"\n",(0,i.jsx)(n.h4,{id:"511-configuraci\xf3n-b\xe1sica",children:"5.1.1. Configuraci\xf3n B\xe1sica"}),"\n",(0,i.jsx)(n.h5,{id:"activatescreensharing",children:"activateScreenSharing"}),"\n",(0,i.jsx)(n.p,{children:"Activar la opci\xf3n de compartir pantalla en la llamada."}),"\n",(0,i.jsx)(n.h4,{id:"512-configuraci\xf3n-avanzada",children:"5.1.2. Configuraci\xf3n Avanzada"}),"\n",(0,i.jsx)(n.h4,{id:"5121-url",children:"5.1.2.1. url"}),"\n",(0,i.jsx)(n.p,{children:"Ruta al socket de video"}),"\n",(0,i.jsx)(n.h4,{id:"5122-apikey",children:"5.1.2.2 apiKey"}),"\n",(0,i.jsx)(n.p,{children:"ApiKey necesaria para la conexi\xf3n con el socket de video"}),"\n",(0,i.jsx)(n.h4,{id:"5123-tenantid",children:"5.1.2.3 tenantId"}),"\n",(0,i.jsx)(n.p,{children:"Identificador del tenant que hace referencia al cliente actual,\nnecesario para la conexi\xf3n con el servicio de video."}),"\n",(0,i.jsx)(n.h4,{id:"513-otros-parametros",children:"5.1.3. Otros parametros"}),"\n",(0,i.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,i.jsx)(n.p,{children:"Si se le da valor true, se activa la vibraci\xf3n en errores y si la respuesta del widget es OK"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,i.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = VideoCallController(data: videoCallConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,i.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = VideoCallController(data: videoCallConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["El m\xe9todo ",(0,i.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,i.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,i.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,i.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,i.jsxs)(n.p,{children:["En los datos de configuraci\xf3n (",(0,i.jsx)(n.code,{children:"EnvironmentVideoCallData"}),") tambi\xe9n se podr\xe1n modificar:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Datos opcionales que normalmente se incluyen dentro de la licencia"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"tenantId"}),": Identificador del tenant que hace referencia al cliente actual, necesario para la conexi\xf3n con el servicio de video."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"url"}),": Ruta al socket de video."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"apiKey"}),": ApiKey necesaria para la conexi\xf3n con el socket de video."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo-de-configuraci\xf3n",children:"Ejemplo de configuraci\xf3n"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  log("LAUNCH VIDEO CALL")\n  \n  let videocallController = VideoCallController(data: EnvironmentVideoCallData(\n                                                          url: "Enter URL",\n                                                          apikey: "Enter the ApiKey",\n                                                          tenantId: "Enter the tenantId"),\n                                                output: output, viewController: viewController)\n  SDKController.shared.launchMethod(controller: videocallController)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"importante",children:"IMPORTANTE"}),"\n",(0,i.jsxs)(n.p,{children:["Los valores se asignan por defecto. ",(0,i.jsx)(n.strong,{children:"SOLO"})," se debe configurar en caso de usar una plataforma externa a la proporcionada por Facephi, dentro de la licencia."]}),"\n",(0,i.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,i.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato SdkResult. M\xe1s informaci\xf3n en la secci\xf3n de [1.5.X][ES] ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK"})})})," | 7. Retorno de resultado  del iOS Mobile SDK."]}),"\n",(0,i.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,i.jsxs)(n.p,{children:["En la parte del error, dispondremos de la clase ",(0,i.jsx)(n.em,{children:"VideoCallError"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"VIDEO_CALL_CANCEL_BY_USER\nVIDEO_CALL_TIMEOUT\nVIDEO_CALL_INTERNAL_ERROR\nVIDEO_CALL_DECODER_ERROR\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsx)(n.p,{children:"En la ejecuci\xf3n correcta, simplemente se informa de que todo ha ido bien\ncon el SdkResult.Success."}),"\n",(0,i.jsxs)(n.p,{children:["Cuando el resultado sea Success y est\xe9 activo el flag ",(0,i.jsx)(n.em,{children:"sharingScreen"})," se podr\xe1 activar compartir pantalla."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Para personalizar el componente, e debe llamar a ThemeVideoCallManager.setup(theme",":CustomThemeVideoCall","() ) despu\xe9s de inicializar el videocallController:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"let videocallController = VideoCallController(data: EnvironmentVideoCallData(), output: output, viewController: viewController)\nThemeVideoCallManager.setup(theme: CustomThemeVideoCall())\nSDKController.shared.launch(controller: videocallController)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Un ejemplo de la clase CustomThemeVideoCall ser\xeda este (debe implementar ThemeVideoCallProtocol):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'class CustomThemeVideoCall: ThemeVideoCallProtocol {\n    var images: [R.Image: UIImage?] = [:]\n    \n    var colors: [R.Color: UIColor?] = [R.Color.TitleText: UIColor.red]\n    \n    var animations: [R.Animation: String] = [:]\n    \n    var name: String {\n        "custom"\n    }\n    \n    var fonts: [R.Font: String] = [:]\n    \n    var dimensions: [R.Dimension: CGFloat] {\n        [.fontBig: 8]\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"81-colores-e-im\xe1genes",children:"8.1 Colores e im\xe1genes"}),"\n",(0,i.jsx)(n.p,{children:"Las imagenes inicializan en la variable images , pas\xe1ndole un diccionario, siendo la clave uno de los enumerados que representan las distintas im\xe1genes de la pantalla, y el valor la imagen personalizada que se deba mostrar."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"case close\n"})}),"\n",(0,i.jsx)(n.p,{children:"Los colores se inicializan similarmente en la variable colors con un diccionario, teniendo como valor un UIColor que se desee."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"case ButtonBackground\ncase ButtonBackgroundDisabled\ncase CardBackground\ncase CardText\ncase MainBackground\ncase PhoneButtonBackground\ncase Primary\ncase TitleText\n"})}),"\n",(0,i.jsx)(n.h3,{id:"82-fuentes",children:"8.2 Fuentes"}),"\n",(0,i.jsx)(n.p,{children:"Las fuentes se inicializan similarmente en la variable fonts con un diccionario, teniendo como valor un String con el nombre de la UIFont que se desee."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"case regular\ncase bold\n"})}),"\n",(0,i.jsx)(n.p,{children:"Las animaciones a usar se inicializan similarmente en la variable animations con un diccionario, teniendo como valor una string con el nombre de la animaci\xf3n que se encuentre en xcassets que se desee usar."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'case phone_calling\n``\nEl tama\xf1o de los textos se inicializa similarmente en la variable dimensions con un diccionario, teniendo como valor un CGFloat con el tama\xf1o deseado.\n\n### 8.3 Textos\n\nIf you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value\nof each _String_ by the desired one.\n\n```java\n \x3c!-- VIDEO CALL --\x3e\n    <string name="video_call_text_waiting_agent_title">Connecting with an assistant\u2026</string>\n    <string name="video_call_agent">Agent</string>\n    <string name="video_call_exit_alert_title">Cancel process</string>\n    <string name="video_call_exit_alert_question">Are you sure you want to leave the video assistance?</string>\n    <string name="video_call_exit_alert_exit">Quit</string>\n    <string name="video_call_exit_alert_cancel">Cancel</string>\n    <string name="video_call_exit">Exit</string>\n    <string name="video_call_network_connection_error">Check your internet connection.</string>\n    <string name="video_call_image_description">Phone</string>\n    <string name="video_call_text_finish">Video assistance is complete</string>\n    <string name="video_call_text_finish_button">Exit</string>\n    <string name="video_call_accesibility_phone">Phone</string>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"84-colores",children:"8.4 Colores"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\x3c!-- VIDEO CALL --\x3e\n<color name="colorVideoCallPhoneButtonBackground">#F44336</color>\n<color name="colorVideoCallActionsBackground">#30333d</color>\n<color name="colorVideoCallCardText">#ffffff</color>\n<color name="colorVideoCallButtonBackground">#FF526080</color>\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},3585:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var i=a(6540);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);