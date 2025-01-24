"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4098],{7328:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Voice_Component","title":"Voice Component","description":"0. Requisitos base de SDK Mobile","source":"@site/i18n/es/docusaurus-plugin-content-docs-android/version-1.5.5/Voice_Component.md","sourceDirName":".","slug":"/Voice_Component","permalink":"/sdk-mobile-documentation/es/docs/android/1.5.5/Voice_Component","draft":false,"unlisted":false,"tags":[],"version":"1.5.5","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Phingers Component","permalink":"/sdk-mobile-documentation/es/docs/android/1.5.5/Phingers_Component"},"next":{"title":"NFC Component","permalink":"/sdk-mobile-documentation/es/docs/android/1.5.5/NFC_Component"}}');var o=a(4848),s=a(8453);const r={},c="Voice Component",l={},d=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class VoiceConfigurationData",id:"51-class-voiceconfigurationdata",level:3},{value:"5.1.1. phrases",id:"511-phrases",level:4},{value:"5.1.2. vibrationEnabled",id:"512-vibrationenabled",level:4},{value:"5.1.3. showTutorial",id:"513-showtutorial",level:4},{value:"5.1.4. extractionTimeout",id:"514-extractiontimeout",level:4},{value:"5.1.5. showDiagnostic",id:"515-showdiagnostic",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 <em>audios</em>",id:"721-audios",level:4},{value:"7.2.2 <em>tokenizedAudios</em>",id:"722-tokenizedaudios",level:4},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1 Textos",id:"81-textos",level:3}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"voice-component",children:"Voice Component"})}),"\n",(0,o.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,o.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,o.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El ",(0,o.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"Voice Component"})}),". \xc9ste se encarga de realizar la captura de voz del\nusuario y la posterior extracci\xf3n de las plantillas correspondientes.\nSus principales funcionalidades son las siguientes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Entrada de cierto n\xfamero de frases para posteriormente leer cada una\nen un paso."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Gesti\xf3n interna del micr\xf3fono."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"An\xe1lisis de los silencios."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"An\xe1lisis del progreso."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Asistente en los procesos de captura."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Generaci\xf3n de las plantillas con las caracter\xedsticas de la voz y\npuntuaciones."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,o.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,o.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,o.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,o.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,o.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:voice_component:$sdk_voice_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,o.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,o.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Controlador"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"VoiceController"}),(0,o.jsx)(n.td,{children:"Controlador principal de captura de voz"})]})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,o.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"VoiceConfigurationData"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente."]}),"\n",(0,o.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,o.jsx)(n.h3,{id:"51-class-voiceconfigurationdata",children:"5.1. Class VoiceConfigurationData"}),"\n",(0,o.jsx)(n.h4,{id:"511-phrases",children:"5.1.1. phrases"}),"\n",(0,o.jsx)(n.p,{children:"Indica la/las frases necesarias para capturar."}),"\n",(0,o.jsx)(n.h4,{id:"512-vibrationenabled",children:"5.1.2. vibrationEnabled"}),"\n",(0,o.jsx)(n.p,{children:"Indica la activaci\xf3n de la vibraci\xf3n cuando el widget termine\nsatisfactoriamente."}),"\n",(0,o.jsx)(n.h4,{id:"513-showtutorial",children:"5.1.3. showTutorial"}),"\n",(0,o.jsx)(n.p,{children:"Indica si el componente activa la pantalla de tutorial. En esta vista se\nexplica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,o.jsx)(n.h4,{id:"514-extractiontimeout",children:"5.1.4. extractionTimeout"}),"\n",(0,o.jsx)(n.p,{children:"Establece el tiempo m\xe1ximo que se puede realizar la captura."}),"\n",(0,o.jsx)(n.h4,{id:"515-showdiagnostic",children:"5.1.5. showDiagnostic"}),"\n",(0,o.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,o.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,o.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    VoiceController(VoiceConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("Voice: ERROR - ${it.error.javaClass.simpleName}")\n            is SdkResult.Success -> Napier.d("Voice OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,o.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,o.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    VoiceController(VoiceConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("Voice: ERROR - ${it.error.javaClass.simpleName}")\n            is SdkResult.Success -> Napier.d("Voice OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo ",(0,o.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,o.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,o.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,o.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,o.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,o.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK."]}),"\n",(0,o.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,o.jsx)(n.p,{children:"En la parte del error, dispondremos de la clase VoiceError."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"NO_DATA_ERROR\nTIMEOUT\nINTERNAL_LICENSE_ERROR\nCANCEL_BY_USER\nCANCEL_LAUNCH\nPERMISSION_DENIED\nACTIVITY_RESULT_ERROR\nINITIALIZATION_ERROR -> it.error\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,o.jsx)(n.em,{children:"data"})]}),"\n",(0,o.jsxs)(n.p,{children:["En la parte de ",(0,o.jsx)(n.em,{children:"data"}),", dispondremos de la clase ",(0,o.jsx)(n.em,{children:"VoiceResult"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["El campo ",(0,o.jsx)(n.em,{children:"data"})," es variable y depender\xe1 de qu\xe9 componente se ha devuelto\nel resultado. En el caso de este componente, los campos devueltos son\nlos siguientes:"]}),"\n",(0,o.jsxs)(n.h4,{id:"721-audios",children:["7.2.1 ",(0,o.jsx)(n.em,{children:"audios"})]}),"\n",(0,o.jsx)(n.p,{children:"Contiene un listado de audios capturados en formato ByteArray."}),"\n",(0,o.jsxs)(n.h4,{id:"722-tokenizedaudios",children:["7.2.2 ",(0,o.jsx)(n.em,{children:"tokenizedAudios"})]}),"\n",(0,o.jsx)(n.p,{children:"Contiene el listado de audios capturados en formato tokenizado de\nFacephi."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,o.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,o.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"), este componente en concreto permite la\nmodificaci\xf3n de textos espec\xedficos."]}),"\n",(0,o.jsx)(n.h3,{id:"81-textos",children:"8.1 Textos"}),"\n",(0,o.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,o.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'    <string name="voice_component_tutorial_message">Habla claro y en voz alta. \\n\\n Aseg\xfarate de estar en un entorno silencioso</string>\n    <string name="voice_component_tutorial_title">Reconocimiento de voz</string>\n    <string name="voice_component_tutorial_button">Comenzar</string>\n    <string name="voice_component_success_message">Grabaci\xf3n registrada</string>\n    <string name="voice_component_speech_message">Habla claro y cercano al micr\xf3fono</string>\n    <string name="voice_component_speech_more_message">Continue hablando</string>\n    <string name="voice_component_read_message">Di en voz alta:</string>\n    <string name="voice_component_speech_noisy_message">Demasiado ruido. Busca un entorno silencioso</string>\n    <string name="voice_component_success_records_message">grabaciones exitosas</string>\n    <string name="voice_component_timeout_title">Tiempo superado</string>\n    <string name="voice_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="voice_component_internal_error_title">Hubo un problema t\xe9cnico</string>\n    <string name="voice_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var i=a(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);