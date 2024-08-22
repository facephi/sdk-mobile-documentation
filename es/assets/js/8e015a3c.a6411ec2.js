"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[879],{5005:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(4848),r=a(8453);const o={},l="Video Call Component",s={id:"Video_Call_Component",title:"Video Call Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-android/version-1.5.5/Video_Call_Component.md",sourceDirName:".",slug:"/Video_Call_Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.5/Video_Call_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.5",frontMatter:{},sidebar:"sidebar",previous:{title:"NFC Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.5/NFC_Component"},next:{title:"Video Id Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.5/Video_Id_Component"}},c={},d=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class VideoCallConfigurationData",id:"51-class-videocallconfigurationdata",level:3},{value:"5.1.1. url",id:"511-url",level:4},{value:"5.1.2. apiKey",id:"512-apikey",level:4},{value:"5.1.3. tenantId",id:"513-tenantid",level:4},{value:"5.1.4. activateScreenSharing",id:"514-activatescreensharing",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"8. Compartir pantalla",id:"8-compartir-pantalla",level:2},{value:"9. Personalizaci\xf3n del componente",id:"9-personalizaci\xf3n-del-componente",level:2},{value:"9.1. Textos",id:"91-textos",level:3},{value:"9.2. Colores",id:"92-colores",level:3}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"video-call-component",children:"Video Call Component"})}),"\n",(0,i.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,i.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,i.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El ",(0,i.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"VideoCall Component"})}),". \xc9ste se encarga de gestionar la comunicaci\xf3n\nentre un usuario y un agente de forma remota, a trav\xe9s de un canal de\ncomunicaci\xf3n. Est\xe1 orientado principalmente para casos de uso de\nvideoasistencia."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,i.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,i.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,i.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,i.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:videocall_component:$sdk_videocall_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,i.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,i.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Controlador"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VideoCallController"}),(0,i.jsx)(n.td,{children:"Controlador principal de videollamada"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,i.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"VideoCallConfigurationData"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente."]}),"\n",(0,i.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-videocallconfigurationdata",children:"5.1. Class VideoCallConfigurationData"}),"\n",(0,i.jsxs)(n.p,{children:["Los campos incluidos en la configuraci\xf3n, normalmente ",(0,i.jsx)(n.strong,{children:"no es necesario\nque sean informados"})," ya que se completan internamente a trav\xe9s de la\nlicencia usada."]}),"\n",(0,i.jsxs)(n.p,{children:["Estos campos suelen informarse ",(0,i.jsx)(n.strong,{children:"solo"})," cuando el ",(0,i.jsx)(n.strong,{children:"servidor"})," es\n",(0,i.jsx)(n.strong,{children:"OnPremise"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"511-url",children:"5.1.1. url"}),"\n",(0,i.jsx)(n.p,{children:"Ruta al socket de video"}),"\n",(0,i.jsx)(n.h4,{id:"512-apikey",children:"5.1.2. apiKey"}),"\n",(0,i.jsx)(n.p,{children:"ApiKey necesaria para la conexi\xf3n con el socket de video"}),"\n",(0,i.jsx)(n.h4,{id:"513-tenantid",children:"5.1.3. tenantId"}),"\n",(0,i.jsx)(n.p,{children:"Identificador del tenant que hace referencia al cliente actual,\nnecesario para la conexi\xf3n con el servicio de video."}),"\n",(0,i.jsx)(n.h4,{id:"514-activatescreensharing",children:"5.1.4. activateScreenSharing"}),"\n",(0,i.jsx)(n.p,{children:"Activar la opci\xf3n de compartir pantalla en la llamada."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,i.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    VideoCallController(VideoCallConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("VideoCall: ERROR - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("VideoCall: OK - ScreenSharing: ${it.data.sharingScreen}")\n        }\n    }\n)\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,i.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    VideoCallController(VideoCallConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("VideoCall: ERROR - ${it.error.name}")\n            is SdkResult.Success -> Napier.d("VideoCall: OK - ScreenSharing: ${it.data.sharingScreen}")\n        }\n    }\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["El m\xe9todo ",(0,i.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,i.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,i.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,i.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,i.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,i.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK"]}),"\n",(0,i.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,i.jsxs)(n.p,{children:["En la parte del error, dispondremos de la clase ",(0,i.jsx)(n.em,{children:"VideoCallError"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"NO_DATA_ERROR\nTIMEOUT\nCANCEL_BY_USER\nCANCEL_LAUNCH\nNETWORK_CONNECTION\nSOCKET_ERROR\nVIDEO_ERROR\nACTIVITY_RESULT_ERROR\nINITIALIZATION_ERROR -> it.error\nUNKNOWN_ERROR\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsx)(n.p,{children:"En la ejecuci\xf3n correcta, simplemente se informa de que todo ha ido bien\ncon el SdkResult.Success."}),"\n",(0,i.jsxs)(n.p,{children:["Cuando el resultado sea Success y est\xe9 activo el flag ",(0,i.jsx)(n.em,{children:"sharingScreen"})," se podr\xe1 activar compartir pantalla."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-compartir-pantalla",children:"8. Compartir pantalla"}),"\n",(0,i.jsxs)(n.p,{children:["La funcionalidad de compartir pantalla se podr\xe1 ejecutar haciendo uso de la clase ",(0,i.jsx)(n.em,{children:"VideoCallScreenSharingManager"}),".\nCon ella se podr\xe1 tanto comenzar y finalizar la compartici\xf3n de pantalla como recoger los estados en los que se encuentra."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val videoCallScreenSharingManager = VideoCallScreenSharingManager(\n            SdkApplication(application)\n        )\n\nvideoCallScreenSharingManager.setOutput { state ->\n            Napier.d("SCREEN SHARING STATE: ${state.name}")\n        }\n'})}),"\n",(0,i.jsx)(n.p,{children:"Los posibles estados son:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"    AGENT_HANGUP,\n    PERMISSION_ERROR,\n    UNKNOWN_ERROR,\n    SHARING,\n    FINISH\n"})}),"\n",(0,i.jsx)(n.p,{children:"Donde SHARING indica que se est\xe1 grabando la pantalla y FINISH que ha finalizado el proceso."}),"\n",(0,i.jsxs)(n.p,{children:["Si se quiere habilitar la opci\xf3n de compartir pantalla se deber\xe1 lanzar el controlador de video llamada con el flag ",(0,i.jsx)(n.em,{children:"activateScreenSharing"})," de su configuraci\xf3n activo. En la salida del lanzamiento de la video llamada se indicar\xe1 si el usuario ha solicitado compartir pantalla con el flag ",(0,i.jsx)(n.em,{children:"sharingScreen"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    VideoCallController(VideoCallConfigurationData(activateScreenSharing = true)) {\n         when (it) {\n              is SdkResult.Error -> {\n                    Napier.d("VideoCall: ERROR - ${it.error.name}")\n              }\n\n              is SdkResult.Success -> {\n                      Napier.d("VideoCall: OK - ScreenSharing: ${it.data.sharingScreen}")\n                      if (it.data.sharingScreen) {\n                          videoCallScreenSharingManager.startScreenSharingService()\n                      }\n                   }\n              }\n        }\n    )\n'})}),"\n",(0,i.jsx)(n.p,{children:"Para comenzar y finalizar la compartici\xf3n de pantalla en la llamada:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// START\nvideoCallScreenSharingManager.startScreenSharingService()\n\n// STOP\nvideoCallScreenSharingManager.stopScreenSharingService()\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"9-personalizaci\xf3n-del-componente",children:"9. Personalizaci\xf3n del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"), este componente en concreto permite la\nmodificaci\xf3n de textos espec\xedficos."]}),"\n",(0,i.jsx)(n.h3,{id:"91-textos",children:"9.1. Textos"}),"\n",(0,i.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,i.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'    <string name="video_call_text_waiting_agent_title">Conectando con un agente\u2026</string>\n    <string name="video_call_agent">Agente</string>\n    <string name="video_call_exit">Salir</string>\n    <string name="video_call_text_finish">La video asistencia ha finalizado</string>\n    <string name="video_call_accesibility_phone">Tel\xe9fono</string>\n    <string name="video_call_restart">Repetir llamada</string>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"92-colores",children:"9.2. Colores"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'<color name="colorVideoCallActionsBackground">#30333d</color>\n<color name="colorVideoCallButtonBackground">#FF526080</color>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var i=a(6540);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);