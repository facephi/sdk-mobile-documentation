"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8957],{8183:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"Video_Id_Component","title":"Video Id Component","description":"0. Requisitos base de SDK Mobile","source":"@site/i18n/es/docusaurus-plugin-content-docs-android/current/Video_Id_Component.md","sourceDirName":".","slug":"/Video_Id_Component","permalink":"/sdk-mobile-documentation/es/docs/android/next/Video_Id_Component","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Video Call Component","permalink":"/sdk-mobile-documentation/es/docs/android/next/Video_Call_Component"},"next":{"title":"Video Recording Component","permalink":"/sdk-mobile-documentation/es/docs/android/next/Video_Recording_Component"}}');var o=i(4848),r=i(8453);const s={},d="Video Id Component",l={},c=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class VideoIdConfigurationData",id:"51-class-videoidconfigurationdata",level:3},{value:"5.1.1. url",id:"511-url",level:4},{value:"5.1.2. apiKey",id:"512-apikey",level:4},{value:"5.1.3. tenantId",id:"513-tenantid",level:4},{value:"5.1.4. sectionTime",id:"514-sectiontime",level:4},{value:"5.1.5. mode",id:"515-mode",level:4},{value:"5.1.6. showCompletedTutorial",id:"516-showcompletedtutorial",level:4},{value:"5.1.7. timeoutServerConnection",id:"517-timeoutserverconnection",level:4},{value:"5.1.8. timeoutFaceDetection",id:"518-timeoutfacedetection",level:4},{value:"5.1.9. cameraPreferred",id:"519-camerapreferred",level:4},{value:"5.1.10. autoFaceDetection",id:"5110-autofacedetection",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1. Textos",id:"81-textos",level:3},{value:"8.2. Animaciones",id:"82-animaciones",level:3},{value:"8.3 Vistas externas",id:"83-vistas-externas",level:3},{value:"9. Logs",id:"9-logs",level:2}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"video-id-component",children:"Video Id Component"})}),"\n",(0,o.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,o.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,o.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El ",(0,o.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"VideoID Component"})}),". \xc9ste se encarga de realizar la grabaci\xf3n de un\nusuario identific\xe1ndose, mostrando la cara y su documento de identidad."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,o.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,o.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,o.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,o.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,o.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:video_id_component:$sdk_videoid_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,o.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,o.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Controlador"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"VideoIdController"}),(0,o.jsx)(n.td,{children:"Controlador principal de video identificaci\xf3n"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SignatureVideoIdController"}),(0,o.jsx)(n.td,{children:"Controlador para firmar un proceso con una Captura"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,o.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"VideoIdConfigurationData"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente."]}),"\n",(0,o.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,o.jsx)(n.h3,{id:"51-class-videoidconfigurationdata",children:"5.1. Class VideoIdConfigurationData"}),"\n",(0,o.jsxs)(n.p,{children:["Los campos incluidos en la configuraci\xf3n (",(0,o.jsx)(n.strong,{children:"url, apiKey, tenantId"}),"),\nnormalmente ",(0,o.jsx)(n.strong,{children:"no es necesario que sean informados"})," ya que se completan\ninternamente a trav\xe9s de la licencia usada."]}),"\n",(0,o.jsxs)(n.p,{children:["Estos campos suelen informarse ",(0,o.jsx)(n.strong,{children:"solo"})," cuando el ",(0,o.jsx)(n.strong,{children:"servidor"})," es\n",(0,o.jsx)(n.strong,{children:"OnPremise"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"511-url",children:"5.1.1. url"}),"\n",(0,o.jsx)(n.p,{children:"Ruta al socket de video"}),"\n",(0,o.jsx)(n.h4,{id:"512-apikey",children:"5.1.2. apiKey"}),"\n",(0,o.jsx)(n.p,{children:"ApiKey necesaria para la conexi\xf3n con el socket de video"}),"\n",(0,o.jsx)(n.h4,{id:"513-tenantid",children:"5.1.3. tenantId"}),"\n",(0,o.jsx)(n.p,{children:"Identificador del tenant que hace referencia al cliente actual,\nnecesario para la conexi\xf3n con el servicio de video."}),"\n",(0,o.jsx)(n.h4,{id:"514-sectiontime",children:"5.1.4. sectionTime"}),"\n",(0,o.jsx)(n.p,{children:"Indica la duraci\xf3n de cada una de las secciones en las que se muestra el\nmensaje de grabaci\xf3n."}),"\n",(0,o.jsx)(n.h4,{id:"515-mode",children:"5.1.5. mode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"ONLY_FACE: El proceso se realiza siendo necesariamente solo\nmostrando la cara."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT: El proceso se realiza usando tanto la cara como\nel frontal del documento de identidad."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"FACE_DOCUMENT_FRONT_BACK: El proceso se realiza usando la cara, el\nfrontal del documento de identidad y la parte trasera del documento."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"516-showcompletedtutorial",children:"5.1.6. showCompletedTutorial"}),"\n",(0,o.jsx)(n.p,{children:"Indica si se quiere mostrar el tutorial inicial completo. Si no, se\nmostrar\xe1 un progress indicator."}),"\n",(0,o.jsx)(n.h4,{id:"517-timeoutserverconnection",children:"5.1.7. timeoutServerConnection"}),"\n",(0,o.jsx)(n.p,{children:"Tiempo de espera en ms para la respuesta del servidor."}),"\n",(0,o.jsx)(n.h4,{id:"518-timeoutfacedetection",children:"5.1.8. timeoutFaceDetection"}),"\n",(0,o.jsx)(n.p,{children:"Tiempo de espera en ms para detectar si hay una cara y comenzar la grabaci\xf3n."}),"\n",(0,o.jsx)(n.h4,{id:"519-camerapreferred",children:"5.1.9. cameraPreferred"}),"\n",(0,o.jsx)(n.p,{children:"C\xe1mara con la que se quiere realizar el proceso: FRONT, BACK"}),"\n",(0,o.jsx)(n.h4,{id:"5110-autofacedetection",children:"5.1.10. autoFaceDetection"}),"\n",(0,o.jsx)(n.p,{children:"Activa/Desactiva la detecci\xf3n autom\xe1tica de cara"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,o.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,o.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    VideoIdController(VideoIdConfigurationData())\n)\nwhen (it) {\n    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,o.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launchMethod(\n    VideoIdController(VideoIdConfigurationData())\n)\nwhen (it) {\n    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo ",(0,o.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,o.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,o.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,o.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,o.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,o.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK"]}),"\n",(0,o.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,o.jsxs)(n.p,{children:["En la parte del error, dispondremos de la clase ",(0,o.jsx)(n.em,{children:"VideoIdError"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Lista de errores:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad es incorrecto"}),"\n",(0,o.jsx)(n.li,{children:"APPLICATION_CONTEXT_ERROR: El contexto de aplicaci\xf3n necesario es nulo"}),"\n",(0,o.jsx)(n.li,{children:"CANCEL_BY_USER: El usuario ha cancelado el proceso"}),"\n",(0,o.jsx)(n.li,{children:"CANCEL_LAUNCH: Se ha hecho una cancelaci\xf3n general del SDK"}),"\n",(0,o.jsx)(n.li,{children:"COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta"}),"\n",(0,o.jsx)(n.li,{children:"EMPTY_LICENSE: El String de licencia est\xe1 vac\xedo"}),"\n",(0,o.jsx)(n.li,{children:"FACE_DETECTION_TIMEOUT: No se ha detectado cara"}),"\n",(0,o.jsx)(n.li,{children:"FETCH_DATA_ERROR: Error en la recogida del resultado"}),"\n",(0,o.jsx)(n.li,{children:"FLOW_ERROR: Error en el proceso de flow"}),"\n",(0,o.jsx)(n.li,{children:"INITIALIZATION_ERROR: Error de inicializaci\xf3n"}),"\n",(0,o.jsx)(n.li,{children:"MANAGER_NOT_INITIALIZED: Los managers son nulos"}),"\n",(0,o.jsx)(n.li,{children:"NETWORK_CONNECTION: Error en la conexi\xf3n a internet"}),"\n",(0,o.jsx)(n.li,{children:"NO_DATA_ERROR: Los datos de entrada son nulos"}),"\n",(0,o.jsx)(n.li,{children:"OPERATION_NOT_CREATED: No hay ninguna operaci\xf3n en curso"}),"\n",(0,o.jsx)(n.li,{children:"PERMISSION_DENIED: El usuario ha rechazado los permisos"}),"\n",(0,o.jsx)(n.li,{children:"SOCKET_ERROR: Error en la conexi\xf3nde los servicios"}),"\n",(0,o.jsx)(n.li,{children:"TIMEOUT: Timeout en el proceso"}),"\n",(0,o.jsx)(n.li,{children:"VIDEO_ERROR: Error en el procesamiento del v\xeddeo"}),"\n",(0,o.jsx)(n.li,{children:"VIDEO_RECORDING_ACTIVE: No se puede iniciar porque el proceso de v\xeddeo grabaci\xf3n est\xe1 activo"}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,o.jsx)(n.em,{children:"data"})]}),"\n",(0,o.jsx)(n.p,{children:"En la ejecuci\xf3n correcta, simplemente se informa de que todo ha ido bien\ncon el SdkResult.Success."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,o.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"), este componente en concreto permite la\nmodificaci\xf3n de su interfaz."]}),"\n",(0,o.jsx)(n.h3,{id:"81-textos",children:"8.1. Textos"}),"\n",(0,o.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,o.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'    \x3c!-- Waiting --\x3e\n    <string name="video_id_component_text_waiting_agent_title">Video ID</string>\n    \x3c!-- Process --\x3e\n    <string name="video_id_component_first_message">Coloca tu rostro y el frente de tu documento en las marcas</string>\n    <string name="video_id_component_init_message_face_content_desc">Coloca tu rostro en frente de la c\xe1mara e inicia la grabaci\xf3n</string>\n    <string name="video_id_component_init_message_face_docu_content_desc">Coloca tu rostro y tu documento en frente de la c\xe1mara e inicia la grabaci\xf3n</string>\n    <string name="video_id_component_second_message">Ahora coloca el reverso de tu documento</string>\n    <string name="video_id_component_third_message">Di en voz alta \u201cYo (nombre y apellidos) acepto los t\xe9rminos y condiciones\u201d.</string>\n    <string name="video_id_component_finish_message">Videograbaci\xf3n\\ncompletada</string>\n    <string name="video_id_component_record_init_button">Iniciar grabaci\xf3n</string>\n    <string name="video_id_component_ready_button">Continuar</string>\n    <string name="video_id_component_first_message_face">Coloque su cara dentro del marco</string>\n    \x3c!-- Diagnostic --\x3e\n    <string name="video_id_component_restart">Repetir grabaci\xf3n</string>\n    <string name="video_id_component_timeout_title">Tiempo superado</string>\n    <string name="video_id_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="video_id_component_face_timeout_desc">Por favor, col\xf3cate en las marcas para que empiece la grabaci\xf3n.</string>\n    <string name="video_id_component_internal_error_title">Hubo un problema t\xe9cnico</string>\n    <string name="video_id_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"82-animaciones",children:"8.2. Animaciones"}),"\n",(0,o.jsx)(n.p,{children:"Si se desea modificar las animaciones (lottie) de la SDK habr\xeda que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicaci\xf3n."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"video_id_anim_doc_and_face.json\nvideo_id_anim_face.json\nvideo_id_anim_loading.json\n"})}),"\n",(0,o.jsx)(n.h3,{id:"83-vistas-externas",children:"8.3 Vistas externas"}),"\n",(0,o.jsx)(n.p,{children:"Es posible modificar completamente las pantallas del componente manteniendo su funcionalidad y navegaci\xf3n. Para ello deben implementarse los interfaces siguientes:"}),"\n",(0,o.jsx)(n.p,{children:"Pantalla de diagn\xf3stico de error:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"\ninterface IVideoIdErrorDiagnosticView {\n    @Composable\n    fun Content(\n        error: VideoIdError,\n        onRetry: () -> Unit,\n        onClose: () -> Unit,\n    )\n}\n\n"})}),"\n",(0,o.jsx)(n.p,{children:'Una vez creadas las clases que implementan los interfaces, en el lanzamiento del componente se podr\xe1 a\xf1adir el par\xe1metro "customViews" para que se utilicen en el SDK.'}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"9-logs",children:"9. Logs"}),"\n",(0,o.jsx)(n.p,{children:'Para visualizar en consola los logs de este componente se podr\xe1 usar el filtro: "VIDEO_ID:"'})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var a=i(6540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);