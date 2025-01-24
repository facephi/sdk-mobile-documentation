"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2423],{8548:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Video_Recording_Component","title":"Video Recording Component","description":"0. Requisitos base de SDK Mobile","source":"@site/i18n/es/docusaurus-plugin-content-docs-android/version-1.5.4/Video_Recording_Component.md","sourceDirName":".","slug":"/Video_Recording_Component","permalink":"/sdk-mobile-documentation/es/docs/android/1.5.4/Video_Recording_Component","draft":false,"unlisted":false,"tags":[],"version":"1.5.4","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Video Id Component","permalink":"/sdk-mobile-documentation/es/docs/android/1.5.4/Video_Id_Component"},"next":{"title":"Capture Component","permalink":"/sdk-mobile-documentation/es/docs/android/1.5.4/Capture_Component"}}');var r=a(4848),i=a(8453);const d={},s="Video Recording Component",l={},c=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class VideoRecordingConfigurationData",id:"51-class-videorecordingconfigurationdata",level:3},{value:"5.1.1. url",id:"511-url",level:4},{value:"5.1.2. apiKey",id:"512-apikey",level:4},{value:"5.1.3. tenantId",id:"513-tenantid",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"6.1 Iniciar grabaci\xf3n",id:"61-iniciar-grabaci\xf3n",level:3},{value:"6.2 Parar grabaci\xf3n",id:"62-parar-grabaci\xf3n",level:3},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"video-recording-component",children:"Video Recording Component"})}),"\n",(0,r.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"VideoRecording Component"})}),". \xc9ste se encarga de capturar la pantalla\ndel dispositivo en segundo plano. Est\xe1 orientado principalmente para la\ngrabaci\xf3n del proceso de onboarding."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,r.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,r.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:video_recording_component:$sdk_video_recording_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,r.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,r.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controlador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VideoRecordingController"}),(0,r.jsx)(n.td,{children:"Controlador principal de video grabaci\xf3n."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"StopVideoRecordingController"}),(0,r.jsx)(n.td,{children:"Controlador para realizar la parada de la video grabaci\xf3n."})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"VideoRecordingConfigurationData"})," y pasarlo como par\xe1metro al\nSDKController durante el lanzamiento del componente."]}),"\n",(0,r.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-videorecordingconfigurationdata",children:"5.1. Class VideoRecordingConfigurationData"}),"\n",(0,r.jsxs)(n.p,{children:["Los campos incluidos en la configuraci\xf3n, normalmente ",(0,r.jsx)(n.strong,{children:"no es necesario\nque sean informados"})," ya que se completan internamente a trav\xe9s de la\nlicencia usada."]}),"\n",(0,r.jsxs)(n.p,{children:["Estos campos suelen informarse ",(0,r.jsx)(n.strong,{children:"solo"})," cuando el ",(0,r.jsx)(n.strong,{children:"servidor"})," es\n",(0,r.jsx)(n.strong,{children:"OnPremise"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"511-url",children:"5.1.1. url"}),"\n",(0,r.jsx)(n.p,{children:"Ruta al socket de video"}),"\n",(0,r.jsx)(n.h4,{id:"512-apikey",children:"5.1.2. apiKey"}),"\n",(0,r.jsx)(n.p,{children:"ApiKey necesaria para la conexi\xf3n con el socket de video"}),"\n",(0,r.jsx)(n.h4,{id:"513-tenantid",children:"5.1.3. tenantId"}),"\n",(0,r.jsx)(n.p,{children:"Identificador del tenant que hace referencia al cliente actual,\nnecesario para la conexi\xf3n con el servicio de video."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,r.jsx)(n.h3,{id:"61-iniciar-grabaci\xf3n",children:"6.1 Iniciar grabaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK."]}),"\n",(0,r.jsx)(n.p,{children:"Los controladores de grabaci\xf3n devolver\xe1n estados para indicar la evoluci\xf3n del proceso."}),"\n",(0,r.jsx)(n.p,{children:"Hay dos formas de lanzar el componente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val videoRecordingController = VideoRecordingController(\n      VideoRecordingConfigurationData()\n)\n\nvideoRecordingController.setState {\n     Napier.d("APP: VIDEO RECORDING STATE (start): ${it.name}")\n}\n\nSDKController.launch(videoRecordingController)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val videoRecordingController = VideoRecordingController(\n      VideoRecordingConfigurationData()\n)\n\nvideoRecordingController.setState {\n     Napier.d("APP: VIDEO RECORDING STATE (start): ${it.name}")\n}\n\nSDKController.launchMethod(videoRecordingController)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,r.jsx)(n.h3,{id:"62-parar-grabaci\xf3n",children:"6.2 Parar grabaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK."]}),"\n",(0,r.jsx)(n.p,{children:"Los controladores de grabaci\xf3n devolver\xe1n estados para indicar la evoluci\xf3n del proceso."}),"\n",(0,r.jsx)(n.p,{children:"Hay dos formas de lanzar el componente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val stopVideoRecordingController = StopVideoRecordingController()\n\nstopVideoRecordingController.setState {\n    Napier.d("APP: VIDEO RECORDING STATE (stop): ${it.name}")\n}\n\nSDKController.launch(stopVideoRecordingController)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val stopVideoRecordingController = StopVideoRecordingController()\n\nstopVideoRecordingController.setState {\n    Napier.d("APP: VIDEO RECORDING STATE (stop): ${it.name}")\n}\n\nSDKController.launchMethod(stopVideoRecordingController)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,r.jsx)(n.p,{children:"La evoluci\xf3n del proceso vendr\xe1 indicada a trav\xe9s de los estados:"}),"\n",(0,r.jsx)(n.p,{children:"Los controladores de grabaci\xf3n devolver\xe1n estados para indicar la evoluci\xf3n del proceso:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"    AGENT_HANGUP,\n    FINISH,\n    SHARING,\n    INITIALIZATION_ERROR,\n    NETWORK_CONNECTION_ERROR,\n    PERMISSION_ERROR,\n    VIDEO_ERROR,\n    SOCKET_ERROR,\n    UNKNOWN_ERROR,\n"})}),"\n",(0,r.jsx)(n.p,{children:"Donde SHARING indica que se est\xe1 grabando la pantalla y FINISH que ha finalizado el proceso."}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>s});var o=a(6540);const r={},i=o.createContext(r);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);