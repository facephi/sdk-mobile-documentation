"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[9104],{4199:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var a=i(4848),o=i(8453);const s={},r="Video Recording Component",d={id:"Video_Recording_Component",title:"Video Recording Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-2.0.X/Video_Recording_Component.md",sourceDirName:".",slug:"/Video_Recording_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/Video_Recording_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Id Component",permalink:"/sdk-mobile-documentation/es/docs/ios/Video_Id_Component"},next:{title:"Aplicaciones de ejemplo",permalink:"/sdk-mobile-documentation/es/docs/ios/Sample_applications_use"}},c={},l=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1 Creando la extensi\xf3n",id:"21-creando-la-extensi\xf3n",level:3},{value:"2.2 Asignando el NSMicrophoneUsageDescription",id:"22-asignando-el-nsmicrophoneusagedescription",level:3},{value:"2.3 Crando el App Group compartido",id:"23-crando-el-app-group-compartido",level:3},{value:"2.4 Dependencias requeridas para la integraci\xf3n",id:"24-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"2.4.1 Cocoapods",id:"241-cocoapods",level:3},{value:"2.4.2 SPM",id:"242-spm",level:4},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Uso de componente",id:"4-uso-de-componente",level:2},{value:"4.1 Creando la instancia",id:"41-creando-la-instancia",level:3},{value:"4.2 Configurando la instancia",id:"42-configurando-la-instancia",level:3},{value:"4.3 Lanzando el componente",id:"43-lanzando-el-componente",level:3},{value:"5. Personalizaci\xf3n del componente",id:"5-personalizaci\xf3n-del-componente",level:2},{value:"6. Errores y problemas frecuentes",id:"6-errores-y-problemas-frecuentes",level:2},{value:"6.1 En tiempo de compilaci\xf3n",id:"61-en-tiempo-de-compilaci\xf3n",level:3},{value:"6.1.1 Permisos de escritura - Sandbox: rsync.samba(67364) deny(1) file-write-create",id:"611-permisos-de-escritura---sandbox-rsyncsamba67364-deny1-file-write-create",level:4},{value:"6.2 En tiempo de ejecuci\xf3n",id:"62-en-tiempo-de-ejecuci\xf3n",level:3},{value:"6.2.1 Starscream - EXC_BAD_ACCESS",id:"621-starscream---exc_bad_access",level:4}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"video-recording-component",children:"Video Recording Component"}),"\n",(0,a.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,a.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,a.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,a.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"VideoRecording Component"})}),". \xc9ste se encarga de capturar la pantalla\ndel dispositivo en segundo plano. Est\xe1 orientado principalmente para la\ngrabaci\xf3n del proceso de onboarding."]}),"\n",(0,a.jsx)(n.h2,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,a.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,a.jsxs)(n.p,{children:["Minimum iOS version: ",(0,a.jsx)(n.strong,{children:"13"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,a.jsxs)("div",{class:"warning",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,a.jsx)("strong",{children:(0,a.jsx)("u",{children:"Mobile SDK"})})}),"\ny seguir las instrucciones indicadas en dichodocumento."]})]}),"\n",(0,a.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,a.jsx)(n.h3,{id:"21-creando-la-extensi\xf3n",children:"2.1 Creando la extensi\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Para el ejemplo documentado se ha utilizado una app con SwiftUI pero el componente y la documentaci\xf3n son v\xe1lidos independientemente de que se use UIKit o SwiftUI."}),"\n",(0,a.jsxs)(n.p,{children:["En nuestro proyecto a\xf1adimos un nuevo target de tipo ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Broadcast Upload Extension:"})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(4017).A+"",width:"1648",height:"1392"})}),"\n",(0,a.jsx)(n.p,{children:"Configuramos el nombre de la extensi\xf3n, en este ejemplo ser\xe1 VideoRecording:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(9354).A+"",width:"1456",height:"1040"})}),"\n",(0,a.jsx)(n.p,{children:"Si aparece el siguiente modal, pulsamos en activate:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(931).A+"",width:"556",height:"738"})}),"\n",(0,a.jsx)(n.p,{children:"Esto genera la siguiente estructura:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(764).A+"",width:"1988",height:"592"})}),"\n",(0,a.jsxs)(n.p,{children:["Por defecto, un archivo llamado ",(0,a.jsx)(n.code,{children:"SampleHandler"})," es creado. Este archivo contiene la clase principal de la extensi\xf3n."]}),"\n",(0,a.jsxs)(n.p,{children:["Para hacer uso de la funcionalidad de Facephi para compartir pantalla debemos modificar la clave ",(0,a.jsx)(n.code,{children:"NSExtensionPrincipalClass"})," del Info.plist y asignar en su lugar:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"videoRecordingComponent.VideoRecordingHandler\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(1395).A+"",width:"1464",height:"290"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NOTA: Es importante tener en cuenta que el n\xfamero de la version (MARKETING_VERSION) y el n\xfamero de versi\xf3n del proyecto debe ser siempre el mismo en ambos targets:"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(3653).A+"",width:"2824",height:"420"})}),"\n",(0,a.jsx)(n.h3,{id:"22-asignando-el-nsmicrophoneusagedescription",children:"2.2 Asignando el NSMicrophoneUsageDescription"}),"\n",(0,a.jsx)(n.p,{children:"La funcionalidad de Video Recording tambi\xe9n puede compartir los datos recogidos por el micr\xf3fono del dispositivo. Por esa raz\xf3n, es necesario a\xf1adir:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"NSMicrophoneUsageDescription\n"})}),"\n",(0,a.jsx)(n.p,{children:"Al Info.plist de nuestra app, detallando por qu\xe9 es necesario que el usuario permita el acceso al micr\xf3fono."}),"\n",(0,a.jsx)(n.h3,{id:"23-crando-el-app-group-compartido",children:"2.3 Crando el App Group compartido"}),"\n",(0,a.jsxs)(n.p,{children:["Ahora necesitamos crear una nueva capability de tipo ",(0,a.jsx)(n.code,{children:"App Group"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Esto servir\xe1 para crear el contenedor compartido entre nuestra extensi\xf3n y el target de la aplicaci\xf3n."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(1550).A+"",width:"754",height:"460"})}),"\n",(0,a.jsxs)(n.p,{children:["Tras hacer click en el icono ",(0,a.jsx)(n.code,{children:"+"})," para a\xf1adir."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Es importante que el valor asignado al App Group sea siempre:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"group.com.facephi.videoRecording\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(9239).A+"",width:"876",height:"552"})}),"\n",(0,a.jsx)(n.p,{children:"Seleccionamos el mismo identificador en nuestra extensi\xf3n. De este modo ambos tendr\xe1n chequeado el App Group que acabamos de crear:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(5616).A+"",width:"776",height:"214"})}),"\n",(0,a.jsx)(n.p,{children:"XCode generar\xe1 o actualizar\xe1 autom\xe1ticamente los archivos de tipo entitlement implicados para a\xf1adir la capability a cada target:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(6793).A+"",width:"2830",height:"452"})}),"\n",(0,a.jsx)(n.h3,{id:"24-dependencias-requeridas-para-la-integraci\xf3n",children:"2.4 Dependencias requeridas para la integraci\xf3n"}),"\n",(0,a.jsx)("div",{class:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versi\xf3n antigua de las librer\xedas de Facephi (Widgets), \xe9stos deber\xe1n eliminarse por completo antes de la instalaci\xf3n de los componentes de la SDKMobile."]})}),"\n",(0,a.jsx)(n.p,{children:"Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias."}),"\n",(0,a.jsx)(n.h3,{id:"241-cocoapods",children:"2.4.1 Cocoapods"}),"\n",(0,a.jsxs)(n.p,{children:["Las dependencias ",(0,a.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pod 'FPHISDKMainComponent' , '~> 2.0.0'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Se recomienda utilizar tambi\xe9n el componente de VideoRecording con el de tracking (",(0,a.jsx)(n.code,{children:"FPHISDKTrackingComponent"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Para instalar el componente actual deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pod 'FPHISDKVideoRecordingComponent' , '~> 2.0.0'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Se debe declarar esta dependencia dentro del target de la app y de la extensi\xf3n (esto \xfaltimo se explicar\xe1 a continuaci\xf3n)"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Un ejemplo de c\xf3mo se ver\xeda el Podfile:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"target 'demoApp' do\n...\n  pod 'FPHISDKMainComponent', 'X.Y.Z'\n  pod 'FPHISDKVideoRecordingComponent', 'A.B.C'\n  pod 'FPHISDKTrackingComponent', 'D.E.F' ### Optional, recommended\n...\nend\ntarget 'VideoRecording' do ### Our extension target\n  use_frameworks! ### We want to use frameworks instead of Static Libs\n  pod 'FPHISDKVideoRecordingComponent', 'A.B.C'\nend\n"})}),"\n",(0,a.jsx)(n.p,{children:"NOTA: Hay que tener cuidado de poner el target de la extensi\xf3n fuera del target de la aplicaci\xf3n. De no hacerlo as\xed, los pods de la aplicaci\xf3n se compilar\xedan tambi\xe9n en la extensi\xf3n, dando como resultado problemas colaterales."}),"\n",(0,a.jsx)(n.h4,{id:"242-spm",children:"2.4.2 SPM"}),"\n",(0,a.jsx)(n.p,{children:"A\xf1adimos nuestra dependencia al proyecto y la asignamos al target de VideoRecording:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(3251).A+"",width:"2170",height:"1218"})}),"\n",(0,a.jsx)(n.p,{children:"Debemos luego a\xf1adirlo tambi\xe9n al target de la app en General \u2192 Framework, Libraries and Embedded Content:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(8042).A+"",width:"1260",height:"1012"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,a.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,a.jsx)("div",{class:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEste comando debe ejecutarse siempre. Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda consultar la documentaci\xf3n de Core Component, en el que se detalla y explica en qu\xe9 consiste este proceso."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"4-uso-de-componente",children:"4. Uso de componente"}),"\n",(0,a.jsx)(n.h3,{id:"41-creando-la-instancia",children:"4.1 Creando la instancia"}),"\n",(0,a.jsxs)(n.p,{children:["Esta funcionalidad es configurada y lanzada gracias a la clase ",(0,a.jsx)(n.code,{children:"VideoRecordingController"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Para crear una instancia utilizamos su m\xe9todo ",(0,a.jsx)(n.code,{children:"init()"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"init(data: VideoRecordingConfigurationData?, extensionName: String?, output: @escaping (SdkResult<String>) -> Void)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"data"}),": El objeto de configuraci\xf3n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"extensionName"}),": El nombre que le pusimos a la ",(0,a.jsx)(n.code,{children:"Broadcast Upload Extension"})," que creamos anteriormente."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"output"}),": El ",(0,a.jsx)(n.em,{children:"callback"})," al que se llama cuando el inicio de la instancia se resuelve (ya sea con un \xe9xito o un fracaso). En el caso de este componente, el \xe9xito es reportado cuando se consigue establecer una conexi\xf3n con el backend y se est\xe1 compartiendo la pantalla."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"42-configurando-la-instancia",children:"4.2 Configurando la instancia"}),"\n",(0,a.jsxs)(n.p,{children:["Se puede modificar el comportamiento de la instancia a trav\xe9s de la clase (",(0,a.jsx)(n.em,{children:"VideoRecordingConfigurationData"}),"):"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Par\xe1metros opcionales que normalmente se incluyen dentro de la licencia"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"url"}),": direcci\xf3n del socket de video."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"apiKey"}),": clave requerida para la conexi\xf3n con socket de video."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"tenantId"}),": identificador que referencia al cliente que est\xe1 lanzando la funcionalidad."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"extractionTimeout"}),": Tiempo en milisegundos que tarda el componente en devolver un error de tipo ",(0,a.jsx)(n.code,{children:"TIMEOUT"}),"si no se establece conexi\xf3n con el socket."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"showDiagnostic"}),": Booleano que indica si se desea que el usuario vea una pantalla de diagn\xf3stico cuando ocurre un error antes de llamar al ",(0,a.jsx)(n.code,{children:"output"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"43-lanzando-el-componente",children:"4.3 Lanzando el componente"}),"\n",(0,a.jsxs)(n.p,{children:["Una vez hemos tenemos una operaci\xf3n v\xe1lida (",(0,a.jsx)(n.a,{href:"#3-start-new-operation",children:"Secci\xf3n 3"}),") y hemos generado una instancia de nuestro controlador, podemos lanzarlo."]}),"\n",(0,a.jsx)(n.p,{children:"Hay dos formas de hacerlo:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero ",(0,a.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan evento al servidor de tracking:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), extensionName: "VideoRecording", output: { _ in })\nSDKController.shared.launchMethod(controller: controller)\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero s\xed se trackear\xe1n los eventos internos al servidor de tracking:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), extensionName: "VideoRecording", output: { _ in })\nSDKController.shared.launch(controller: controller)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Nota:"})}),"\n",(0,a.jsxs)("div",{class:"warning",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,a.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,a.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite utilizar ",(0,a.jsx)(n.strong,{children:"tracking"})," en caso de estar su componente activado, y no lo usar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente instalado)."]}),(0,a.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,a.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en el cual el integrador tiene instalado y activado el tracking, pero en un flujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n. En ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n a la plataforma."]})]}),"\n",(0,a.jsxs)(n.p,{children:["En los datos de configuraci\xf3n (",(0,a.jsx)(n.em,{children:"VideoRecordingConfigurationData"}),") tambi\xe9n se podr\xe1n modificar:"]}),"\n",(0,a.jsx)(n.h2,{id:"5-personalizaci\xf3n-del-componente",children:"5. Personalizaci\xf3n del componente"}),"\n",(0,a.jsx)(n.p,{children:"Ahora mismo no existen recursos que configurar en el componente."}),"\n",(0,a.jsx)(n.h2,{id:"6-errores-y-problemas-frecuentes",children:"6. Errores y problemas frecuentes"}),"\n",(0,a.jsx)(n.h3,{id:"61-en-tiempo-de-compilaci\xf3n",children:"6.1 En tiempo de compilaci\xf3n"}),"\n",(0,a.jsx)(n.h4,{id:"611-permisos-de-escritura---sandbox-rsyncsamba67364-deny1-file-write-create",children:"6.1.1 Permisos de escritura - Sandbox: rsync.samba(67364) deny(1) file-write-create"}),"\n",(0,a.jsx)(n.p,{children:"Si aparece un error de compilaci\xf3n en referencia a permisos de escritura:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(7025).A+"",width:"1570",height:"282"})}),"\n",(0,a.jsxs)(n.p,{children:["Revisar el estado en Build Settings del par\xe1metro ",(0,a.jsx)(n.strong,{children:"ENABLE_USER_SCRIPT_SANDBOXING"}),", su valor debe ser ",(0,a.jsx)(n.strong,{children:"NO"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(8760).A+"",width:"1580",height:"484"})}),"\n",(0,a.jsx)(n.h3,{id:"62-en-tiempo-de-ejecuci\xf3n",children:"6.2 En tiempo de ejecuci\xf3n"}),"\n",(0,a.jsx)(n.h4,{id:"621-starscream---exc_bad_access",children:"6.2.1 Starscream - EXC_BAD_ACCESS"}),"\n",(0,a.jsx)(n.p,{children:"Al lanzar el componente puede aparecer un error en la dependencia Starscream:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(3927).A+"",width:"1510",height:"660"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Workaround"})})," - Subir la versi\xf3n del Pod m\xednima de iOS11 a iOS12:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:i(910).A+"",width:"1588",height:"250"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},4017:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-001-e2d7a316b1aaefbe41102de4a2c6ba0a.png"},9354:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-002-1e32a36560668a16c1f13b5133ed52a1.png"},931:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-003-50b0a3656841b43e169675d51c41b3e7.png"},764:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-004-b0670f978445e45d85718b624c5ad29f.png"},3653:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-005-9b6c1727c54bad4af74e2738c0a548f2.png"},1550:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-006-561a9dd21dbd96a080937d1a105bf362.png"},9239:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-007-237a65d9cd46cdcb915e22e9ea193021.png"},5616:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-008-3e67e7e122a24be3226632d390a61842.png"},6793:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-009-03f21d5dc6d9066b91050adf7fabe7df.png"},3251:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-010-305c0dc6e8ba588fae482db4b1ff817d.png"},8042:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-011-4dbde20e070d491c2ddc17a7cb98fa89.png"},7025:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-012-754d49db4b70295687ba933874acda8f.png"},8760:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-013-ac369fe2aaeeb1149ac7a0cf63b425f6.png"},3927:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-014-2a25737a313f66bb30fbfaf0db333706.png"},910:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-015-bb86fd0a9e0835fd15cfc2d56e50099a.png"},1395:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/videoRecording-2.1.InfoPList-ba48049205587b19f2fe4e2c7e9467f6.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var a=i(6540);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);