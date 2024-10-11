"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8774],{681:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=i(4848),o=i(8453);const s={},r="Voice Component",l={id:"Voice_Component",title:"Voice Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-android/version-2.1.X/Voice_Component.md",sourceDirName:".",slug:"/Voice_Component",permalink:"/sdk-mobile-documentation/es/docs/android/Voice_Component",draft:!1,unlisted:!1,tags:[],version:"2.1.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Phingers Component",permalink:"/sdk-mobile-documentation/es/docs/android/Phingers_Component"},next:{title:"NFC Component",permalink:"/sdk-mobile-documentation/es/docs/android/NFC_Component"}},c={},d=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class VoiceConfigurationData",id:"51-class-voiceconfigurationdata",level:3},{value:"5.1.1. phrases",id:"511-phrases",level:4},{value:"5.1.2. vibrationEnabled",id:"512-vibrationenabled",level:4},{value:"5.1.3. showTutorial",id:"513-showtutorial",level:4},{value:"5.1.4. extractionTimeout",id:"514-extractiontimeout",level:4},{value:"5.1.5. showDiagnostic",id:"515-showdiagnostic",level:4},{value:"5.1.6. enableQualityCheck",id:"516-enablequalitycheck",level:4},{value:"5.1.7. showPreviousTip",id:"517-showprevioustip",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 <em>audios</em>",id:"721-audios",level:4},{value:"7.2.2 <em>tokenizedAudios</em>",id:"722-tokenizedaudios",level:4},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1 Textos",id:"81-textos",level:3},{value:"8.2. Animaciones",id:"82-animaciones",level:3},{value:"8.3 Vistas externas",id:"83-vistas-externas",level:3},{value:"9. Logs",id:"9-logs",level:2}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"voice-component",children:"Voice Component"})}),"\n",(0,a.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,a.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,a.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"Voice Component"})}),". \xc9ste se encarga de realizar la captura de voz del\nusuario y la posterior extracci\xf3n de las plantillas correspondientes.\nSus principales funcionalidades son las siguientes:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Entrada de cierto n\xfamero de frases para posteriormente leer cada una\nen un paso."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Gesti\xf3n interna del micr\xf3fono."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"An\xe1lisis de los silencios."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"An\xe1lisis del progreso."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Asistente en los procesos de captura."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Generaci\xf3n de las plantillas con las caracter\xedsticas de la voz y\npuntuaciones."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,a.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,a.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,a.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,a.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,a.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:voice_component:$sdk_voice_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,a.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,a.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Controlador"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"VoiceController"}),(0,a.jsx)(n.td,{children:"Controlador principal de captura de voz"})]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,a.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"VoiceConfigurationData"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente."]}),"\n",(0,a.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,a.jsx)(n.h3,{id:"51-class-voiceconfigurationdata",children:"5.1. Class VoiceConfigurationData"}),"\n",(0,a.jsx)(n.h4,{id:"511-phrases",children:"5.1.1. phrases"}),"\n",(0,a.jsx)(n.p,{children:"Indica la/las frases necesarias para capturar."}),"\n",(0,a.jsx)(n.h4,{id:"512-vibrationenabled",children:"5.1.2. vibrationEnabled"}),"\n",(0,a.jsx)(n.p,{children:"Indica la activaci\xf3n de la vibraci\xf3n cuando el widget termine\nsatisfactoriamente."}),"\n",(0,a.jsx)(n.h4,{id:"513-showtutorial",children:"5.1.3. showTutorial"}),"\n",(0,a.jsx)(n.p,{children:"Indica si el componente activa la pantalla de tutorial. En esta vista se\nexplica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,a.jsx)(n.h4,{id:"514-extractiontimeout",children:"5.1.4. extractionTimeout"}),"\n",(0,a.jsx)(n.p,{children:"Establece el tiempo m\xe1ximo que se puede realizar la captura."}),"\n",(0,a.jsx)(n.h4,{id:"515-showdiagnostic",children:"5.1.5. showDiagnostic"}),"\n",(0,a.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso"}),"\n",(0,a.jsx)(n.h4,{id:"516-enablequalitycheck",children:"5.1.6. enableQualityCheck"}),"\n",(0,a.jsx)(n.p,{children:"Activa o desactiva la comprobaci\xf3n de calidad del audio. Se recomienda tenerla siempre activa."}),"\n",(0,a.jsx)(n.h4,{id:"517-showprevioustip",children:"5.1.7. showPreviousTip"}),"\n",(0,a.jsx)(n.p,{children:"Muestra una pantalla previa al lanzamiento de la captura con informaci\xf3n sobre el proceso a realizar y un bot\xf3n para el lanzamiento."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,a.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,a.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    VoiceController(VoiceConfigurationData())\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("Voice: ERROR - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("Voice OK: ${result.data}")\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,a.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,a.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launchMethod(\n    VoiceController(VoiceConfigurationData())\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("Voice: ERROR - ${result.error.name}")\n    is SdkResult.Success -> Napier.d("Voice OK: ${result.data}")\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["El m\xe9todo ",(0,a.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,a.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,a.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,a.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,a.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,a.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK."]}),"\n",(0,a.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,a.jsx)(n.p,{children:"En la parte del error, dispondremos de la clase VoiceError."}),"\n",(0,a.jsx)(n.p,{children:"Listado de errores:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad es incorrecto"}),"\n",(0,a.jsx)(n.li,{children:"APPLICATION_CONTEXT_ERROR: El contexto de aplicaci\xf3n necesario es nulo"}),"\n",(0,a.jsx)(n.li,{children:"CANCEL_BY_USER: El usuario ha cancelado el proceso"}),"\n",(0,a.jsx)(n.li,{children:"CANCEL_LAUNCH: Se ha hecho una cancelaci\xf3n general del SDK"}),"\n",(0,a.jsx)(n.li,{children:"COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta"}),"\n",(0,a.jsx)(n.li,{children:"EMPTY_LICENSE: El String de licencia est\xe1 vac\xedo"}),"\n",(0,a.jsx)(n.li,{children:"FETCH_DATA_ERROR: Error en la recogida del resultado"}),"\n",(0,a.jsx)(n.li,{children:"FLOW_ERROR: Error en el proceso de flow"}),"\n",(0,a.jsx)(n.li,{children:"INITIALIZATION_ERROR: Error de inicializaci\xf3n"}),"\n",(0,a.jsx)(n.li,{children:"INTERNAL_LICENSE_ERROR: Error interno relacionado con la licencia"}),"\n",(0,a.jsx)(n.li,{children:"MANAGER_NOT_INITIALIZED: Los managers son nulos"}),"\n",(0,a.jsx)(n.li,{children:"NO_DATA_ERROR: Los datos de entrada son nulos"}),"\n",(0,a.jsx)(n.li,{children:"OPERATION_NOT_CREATED: No hay ninguna operaci\xf3n en curso"}),"\n",(0,a.jsx)(n.li,{children:"PERMISSION_DENIED: El usuario ha rechazado los permisos"}),"\n",(0,a.jsx)(n.li,{children:"TIMEOUT: Timeout en el proceso"}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,a.jsx)(n.em,{children:"data"})]}),"\n",(0,a.jsxs)(n.p,{children:["En la parte de ",(0,a.jsx)(n.em,{children:"data"}),", dispondremos de la clase ",(0,a.jsx)(n.em,{children:"VoiceResult"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El campo ",(0,a.jsx)(n.em,{children:"data"})," es variable y depender\xe1 de qu\xe9 componente se ha devuelto\nel resultado. En el caso de este componente, los campos devueltos son\nlos siguientes:"]}),"\n",(0,a.jsxs)(n.h4,{id:"721-audios",children:["7.2.1 ",(0,a.jsx)(n.em,{children:"audios"})]}),"\n",(0,a.jsx)(n.p,{children:"Contiene un listado de audios capturados en formato ByteArray."}),"\n",(0,a.jsxs)(n.h4,{id:"722-tokenizedaudios",children:["7.2.2 ",(0,a.jsx)(n.em,{children:"tokenizedAudios"})]}),"\n",(0,a.jsx)(n.p,{children:"Contiene el listado de audios capturados en formato tokenizado de\nFacephi."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"), este componente en concreto permite la\nmodificaci\xf3n de su interfaz."]}),"\n",(0,a.jsx)(n.h3,{id:"81-textos",children:"8.1 Textos"}),"\n",(0,a.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,a.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'    <string name="voice_component_tutorial_message">Habla claro y en voz alta. \\n\\n Aseg\xfarate de estar en un entorno silencioso</string>\n    <string name="voice_component_tutorial_title">Reconocimiento de voz</string>\n    <string name="voice_component_tutorial_button">Comenzar</string>\n    <string name="voice_component_success_message">Grabaci\xf3n registrada</string>\n    <string name="voice_component_speech_message">Habla claro y cercano al micr\xf3fono</string>\n    <string name="voice_component_speech_more_message">Continue hablando</string>\n    <string name="voice_component_read_message">Di en voz alta:</string>\n    <string name="voice_component_speech_noisy_message">Demasiado ruido. Busca un entorno silencioso</string>\n    <string name="voice_component_success_records_message">grabaciones exitosas</string>\n    <string name="voice_component_timeout_title">Tiempo superado</string>\n    <string name="voice_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="voice_component_internal_error_title">Hubo un problema t\xe9cnico</string>\n    <string name="voice_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"82-animaciones",children:"8.2. Animaciones"}),"\n",(0,a.jsx)(n.p,{children:"Si se desea modificar las animaciones (lottie) de la SDK habr\xeda que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicaci\xf3n."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"voice_anim_enroll_ko.json\nvoice_anim_enroll_ok.json\nvoice_anim_enroll_progress.json\nvoice_anim_intro.json\n"})}),"\n",(0,a.jsx)(n.h3,{id:"83-vistas-externas",children:"8.3 Vistas externas"}),"\n",(0,a.jsx)(n.p,{children:"Es posible modificar completamente las pantallas del componente manteniendo su funcionalidad y navegaci\xf3n. Para ello deben implementarse los interfaces siguientes:"}),"\n",(0,a.jsx)(n.p,{children:"Pantalla de tip previo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"\ninterface IVoicePreviousTipView {\n    @Composable\n    fun Content(\n        onContinue: () -> Unit,\n        onClose: () -> Unit\n    )\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Pantalla de diagn\xf3stico de error:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"\ninterface IVoiceErrorDiagnosticView {\n    @Composable\n    fun Content(\n        error: VoiceError,\n        onRetry: () -> Unit,\n        onClose: () -> Unit,\n    )\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Pantallas de captura:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"\ninterface IVoiceEnrollRecordingView {\n    @Composable\n    fun Content(\n        phrase: String,\n        numberRecordedPhrases: Int,\n        numberTotalPhrases: Int,\n        voiceAmplitude: Float,\n        recordingProgress: Int,\n        onClose: () -> Unit,\n    )\n}\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"\ninterface IVoiceEnrollSuccessView {\n    @Composable\n    fun Content(\n        phrase: String,\n        numberRecordedPhrases: Int,\n        numberTotalPhrases: Int,\n        onClose: () -> Unit,\n    )\n}\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"\ninterface IVoiceEnrollErrorView {\n    @Composable\n    fun Content(\n        phrase: String,\n        numberRecordedPhrases: Int,\n        numberTotalPhrases: Int,\n        onClose: () -> Unit,\n    )\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:'Una vez creadas las clases que implementan los interfaces, en el lanzamiento del componente se podr\xe1 a\xf1adir el par\xe1metro "customViews" para que se utilicen en el SDK.'}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"9-logs",children:"9. Logs"}),"\n",(0,a.jsx)(n.p,{children:'Para visualizar en consola los logs de este componente se podr\xe1 usar el filtro: "VOICE:"'})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var a=i(6540);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);