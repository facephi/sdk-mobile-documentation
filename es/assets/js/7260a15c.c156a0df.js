"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[9628],{1400:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>t});var r=a(4848),i=a(8453);const s={},l="Phingers Component",o={id:"Phingers_Component",title:"Phingers Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-android/version-1.5.5/Phingers_Component.md",sourceDirName:".",slug:"/Phingers_Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.5/Phingers_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.5",frontMatter:{},sidebar:"sidebar",previous:{title:"SelphID Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.5/SelphID_Component"},next:{title:"Voice Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.5/Voice_Component"}},d={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class PhingersConfigurationData",id:"51-class-phingersconfigurationdata",level:3},{value:"5.1.1. reticleOrientation",id:"511-reticleorientation",level:4},{value:"5.1.2. useFlash",id:"512-useflash",level:4},{value:"5.1.3. returnProcessedImage",id:"513-returnprocessedimage",level:4},{value:"5.1.4. returnRawImage",id:"514-returnrawimage",level:4},{value:"5.1.5. useLiveness",id:"515-useliveness",level:4},{value:"5.1.6. returnWSQ",id:"516-returnwsq",level:4},{value:"5.1.7. returnFullFrameImage",id:"517-returnfullframeimage",level:4},{value:"5.1.8. extractionTimeout",id:"518-extractiontimeout",level:4},{value:"5.1.9. showTutorial",id:"519-showtutorial",level:4},{value:"5.1.10. threshold",id:"5110-threshold",level:4},{value:"5.1.11. showSpinner",id:"5111-showspinner",level:4},{value:"5.1.12. cropWidth",id:"5112-cropwidth",level:4},{value:"5.1.13. cropHeight",id:"5113-cropheight",level:4},{value:"5.1.14. cropFactor",id:"5114-cropfactor",level:4},{value:"5.1.15. showDiagnostic",id:"5115-showdiagnostic",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 <em>fingersResult</em>",id:"721-fingersresult",level:4},{value:"7.2.1.1. rawFingerprintImage",id:"7211-rawfingerprintimage",level:5},{value:"7.2.1.2. processedFingerprintImage",id:"7212-processedfingerprintimage",level:5},{value:"7.2.1.3. wsq",id:"7213-wsq",level:5},{value:"7.2.1.4. fingerprintTemplate",id:"7214-fingerprinttemplate",level:5},{value:"7.2.1.5. nfiqMetrics",id:"7215-nfiqmetrics",level:5},{value:"7.2.2 <em>fullFrameImage</em>",id:"722-fullframeimage",level:5},{value:"7.2.3 <em>focusQuality</em>",id:"723-focusquality",level:4},{value:"7.2.4 <em>livenessConfidence</em>",id:"724-livenessconfidence",level:4},{value:"8. Personalizaci\xf3n del componente",id:"8-personalizaci\xf3n-del-componente",level:2},{value:"8.1 Textos",id:"81-textos",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"}),"\n",(0,r.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Android Mobile SDK"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Phingers Component"})}),". \xc9ste se encarga de realizar la captura de las\nhuellas de los dedos (fingerprints) del usuario y la posterior\nextracci\xf3n de las plantillas de las huellas posteriores. Sus principales\nfuncionalidades son las siguientes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dos modos de funcionamiento: extracci\xf3n de los cuatro dedos de la\nmano (excepto el pulgar), o extracci\xf3n \xfanicamente del pulgar."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Gesti\xf3n interna de c\xe1mara."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Detecci\xf3n de vivacidad incorporada."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Asistente en los procesos de captura de las huellas."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Generaci\xf3n de las plantillas con las caracter\xedsticas de las huellas,\nim\xe1genes y puntuaciones."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:(0,r.jsx)("u",{children:"Android Mobile\nSDK"})})})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,r.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,r.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:phingers_component:$sdk_phingers_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,r.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,r.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:(0,r.jsx)("u",{children:"Android Mobile\nSDK"})})}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controlador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PhingersController"}),(0,r.jsx)(n.td,{children:"Controlador principal de captura de huellas"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"PhingersConfigurationData"})," y pasarlo como par\xe1metro al SDKController\ndurante el lanzamiento del componente."]}),"\n",(0,r.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,r.jsx)(n.h3,{id:"51-class-phingersconfigurationdata",children:"5.1. Class PhingersConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"511-reticleorientation",children:"5.1.1. reticleOrientation"}),"\n",(0,r.jsx)(n.p,{children:"Establece el modo de detecci\xf3n de huellas e indica qu\xe9 dedos se van a\ndetectar durante el proceso. Los valores permitidos son:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LEFT"}),": Se activa la captura de los ",(0,r.jsx)(n.strong,{children:"cuatro dedos de la mano\nizquierda"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RIGHT"}),": Se activa la captura de los ",(0,r.jsx)(n.strong,{children:"cuatro dedos de la mano\nizquierda"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"THUMB"}),": Se activa la captura de ",(0,r.jsx)(n.strong,{children:"un pulgar"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"512-useflash",children:"5.1.2. useFlash"}),"\n",(0,r.jsxs)(n.p,{children:["Activa o desactiva el flash de la c\xe1mara durante el proceso de captura\nde huellas. Por defecto se encuentra a ",(0,r.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"513-returnprocessedimage",children:"5.1.3. returnProcessedImage"}),"\n",(0,r.jsxs)(n.p,{children:["Si se establece a ",(0,r.jsx)(n.strong,{children:"true"})," se devolver\xe1 en el resultado las im\xe1genes de\nla misma forma en que se han capturado."]}),"\n",(0,r.jsx)(n.h4,{id:"514-returnrawimage",children:"5.1.4. returnRawImage"}),"\n",(0,r.jsxs)(n.p,{children:["Si se establece a ",(0,r.jsx)(n.strong,{children:"true"})," se devolver\xe1 en el resultado las im\xe1genes de\nla misma forma en que se han capturado."]}),"\n",(0,r.jsx)(n.h4,{id:"515-useliveness",children:"5.1.5. useLiveness"}),"\n",(0,r.jsxs)(n.p,{children:["Activa o desactiva el detector de vivacidad durante el proceso de\ncaptura de huellas. Por defecto se encuentra a ",(0,r.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"516-returnwsq",children:"5.1.6. returnWSQ"}),"\n",(0,r.jsxs)(n.p,{children:["Si se establece a ",(0,r.jsx)(n.strong,{children:"true"})," entonces en el resultado de la captura se\ndevolver\xe1, para cada una de las huellas, el dato comprimido mediante\n",(0,r.jsx)(n.em,{children:"Wavelet Scalar Quatization"})," (WSQ). WSQ es un algortimo de compresi\xf3n en\ngrises, siendo un est\xe1ndar (NIST) para este tipo de capturas. Orientado\na la validaci\xf3n contra las diferentes bases de datos gubernamentales\nexistentes."]}),"\n",(0,r.jsx)(n.h4,{id:"517-returnfullframeimage",children:"5.1.7. returnFullFrameImage"}),"\n",(0,r.jsx)(n.p,{children:"Especifica si se debe devolver la imagen completa de la c\xe1mara en la que\nse han detectado los dedos."}),"\n",(0,r.jsx)(n.h4,{id:"518-extractiontimeout",children:"5.1.8. extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Establece un modo de estabilizaci\xf3n previo a cualquier proceso de\nautenticaci\xf3n en el widget. Con este modo se obliga al widget a no\nempezar ning\xfan proceso si el usuario no se encuentra con la cabeza\nmirando al frente y sin moverla."}),"\n",(0,r.jsx)(n.h4,{id:"519-showtutorial",children:"5.1.9. showTutorial"}),"\n",(0,r.jsx)(n.p,{children:"Indica si el componente activa la pantalla de tutorial. En esta vista se\nexplica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,r.jsx)(n.h4,{id:"5110-threshold",children:"5.1.10. threshold"}),"\n",(0,r.jsx)(n.p,{children:"El par\xe1metro configura un captureQualityThreshold, para definir un\nthreshold de calidad para realizar la captura."}),"\n",(0,r.jsx)(n.h4,{id:"5111-showspinner",children:"5.1.11. showSpinner"}),"\n",(0,r.jsx)(n.p,{children:"Indica si se quiere mostrar el spinner de carga."}),"\n",(0,r.jsx)(n.h4,{id:"5112-cropwidth",children:"5.1.12. cropWidth"}),"\n",(0,r.jsx)(n.p,{children:"Indica un ancho para realizar un recorte de la captura."}),"\n",(0,r.jsx)(n.h4,{id:"5113-cropheight",children:"5.1.13. cropHeight"}),"\n",(0,r.jsx)(n.p,{children:"Indica una altura para realizar un recorte de la captura."}),"\n",(0,r.jsx)(n.h4,{id:"5114-cropfactor",children:"5.1.14. cropFactor"}),"\n",(0,r.jsx)(n.p,{children:"Indica la relaci\xf3n para el recorte de la captura."}),"\n",(0,r.jsx)(n.h4,{id:"5115-showdiagnostic",children:"5.1.15. showDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    PhingersController(PhingersConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("Phingers: ERROR - ${it.error.javaClass.simpleName}")\n            is SdkResult.Success -> Napier.d("Phingers OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    PhingersController(PhingersConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("Phingers: ERROR - ${it.error.javaClass.simpleName}")\n            is SdkResult.Success -> Napier.d("Phingers OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,r.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,r.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK."]}),"\n",(0,r.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,r.jsx)(n.p,{children:"En la parte del error, dispondremos de la clase PhingersError."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"INTERNAL_ERROR\nTIMEOUT\nCANCEL_BY_USER\nCANCEL_LAUNCH\nPERMISSION_DENIED\nACTIVITY_RESULT_ERROR\nPHINGERS_FINGERPRINT_CAPTURE_FAILURE\nLOW_QUALITY\nPHINGERS_LIVENESS_FAILURE\nPHINGERS_CONFIGURATION_FAILURE\nPHINGERS_FINGERPRINT_TEMPLATE_IO_ERROR\nPHINGERS_UNIQUE_USER_ID_NOT_SPECIFIED\nPHINGERS_NO_FINGERS_DETECTED\nPHINGERS_AUTOFOCUS_FAILURE\nPHINGERS_CAMERA_FAILURE\nPHINGERS_CAPTURE_FAILURE\nPHINGERS_LICENSING_FAILURE\nINITIALIZATION_ERROR -> it.error // More info\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsxs)(n.p,{children:["En la parte de ",(0,r.jsx)(n.em,{children:"data"}),", dispondremos de la clase ",(0,r.jsx)(n.em,{children:"PhingersResult"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El resultado devuelve las im\xe1genes en formato ",(0,r.jsx)(n.strong,{children:"Bitmap"}),", es posible\nconvertir las im\xe1genes a ",(0,r.jsx)(n.strong,{children:"Base64"})," de la siguiente manera:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)"})}),"\n",(0,r.jsxs)(n.p,{children:["El campo ",(0,r.jsx)(n.em,{children:"data"})," es variable y depender\xe1 de qu\xe9 componente se ha devuelto\nel resultado. En el caso de este componente, los campos devueltos son\nlos siguientes:"]}),"\n",(0,r.jsxs)(n.h4,{id:"721-fingersresult",children:["7.2.1 ",(0,r.jsx)(n.em,{children:"fingersResult"})]}),"\n",(0,r.jsx)(n.h5,{id:"7211-rawfingerprintimage",children:"7.2.1.1. rawFingerprintImage"}),"\n",(0,r.jsx)(n.p,{children:"Devuelve la imagen de la huella actual en crudo, sin modificar."}),"\n",(0,r.jsx)(n.h5,{id:"7212-processedfingerprintimage",children:"7.2.1.2. processedFingerprintImage"}),"\n",(0,r.jsx)(n.p,{children:"Devuelve la imagen de la huella procesada."}),"\n",(0,r.jsx)(n.h5,{id:"7213-wsq",children:"7.2.1.3. wsq"}),"\n",(0,r.jsx)(n.p,{children:"Se devuelve la captura de huella en formato WSQ."}),"\n",(0,r.jsx)(n.h5,{id:"7214-fingerprinttemplate",children:"7.2.1.4. fingerprintTemplate"}),"\n",(0,r.jsx)(n.p,{children:"Devuelve la plantilla en bruto que se genera despu\xe9s del proceso de\nextracci\xf3n. V\xe1lida para el proceso de AUTHENTICATION."}),"\n",(0,r.jsx)(n.h5,{id:"7215-nfiqmetrics",children:"7.2.1.5. nfiqMetrics"}),"\n",(0,r.jsx)(n.p,{children:"Son las m\xe9tricas de la captura. Actualmente se devuelve el siguiente\nvalor:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"nfiqMetric: Es un valor entero, entre 1 y 5 (ambos inclusive), que\nindica la calidad de la captura de huella, siendo 1 el valor que\nindica la calidad m\xe1s alta y 5 la peor calidad. Las huellas con este\n\xfaltimo valor suelen ser descartadas para posteriores validaciones."}),"\n"]}),"\n",(0,r.jsxs)(n.h5,{id:"722-fullframeimage",children:["7.2.2 ",(0,r.jsx)(n.em,{children:"fullFrameImage"})]}),"\n",(0,r.jsxs)(n.p,{children:["Devuelve una imagen recortada centrada en la cara del usuarioen formato\nstring Base64. Esta imagen se obtiene a partir de la ",(0,r.jsx)(n.em,{children:"bestImage"}),". \xc9sta\nes la imagen que se deber\xe1 utilizar como imagen caracter\xedstica del\nusuario que realiz\xf3 el proceso a modo de ",(0,r.jsx)(n.em,{children:"avatar"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"723-focusquality",children:["7.2.3 ",(0,r.jsx)(n.em,{children:"focusQuality"})]}),"\n",(0,r.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso de autenticaci\xf3n en\nformato string Base64. Esta imagen es la imagen con el tama\xf1o original\nextra\xedda de la c\xe1mara. V\xe1lido para el proceso de ",(0,r.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"724-livenessconfidence",children:["7.2.4 ",(0,r.jsx)(n.em,{children:"livenessConfidence"})]}),"\n",(0,r.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso de autenticaci\xf3n en\nformato Bitmap. Esta imagen es la imagen con el tama\xf1o original extra\xedda\nde la c\xe1mara. V\xe1lido para el proceso de ",(0,r.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-personalizaci\xf3n-del-componente",children:"8. Personalizaci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:(0,r.jsx)("u",{children:"Android Mobile\nSDK"})})}),"), este componente en concreto permite la\nmodificaci\xf3n de textos espec\xedficos."]}),"\n",(0,r.jsx)(n.h3,{id:"81-textos",children:"8.1 Textos"}),"\n",(0,r.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,r.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'    <string name="phingers_component_tutorial_left_message">Prepara tu mano izquierda para la captura</string>\n    <string name="phingers_component_tutorial_left_title">Huellas mano izquierda</string>\n    <string name="phingers_component_turorial_right_message">Prepara tu mano derecha para la captura</string>\n    <string name="phingers_component_tutorial_right_title">Huellas mano derecha</string>\n    <string name="phingers_component_tutorial_button">Tomar huellas</string>\n    <string name="phingers_component_capture_phingers">Mantenga los dedos firmes</string>\n    <string name="phingers_component_capture_thumb">Mantenga el dedo firme</string>\n    <string name="phingers_component_capture_phingers_not_focus">Mueva los dedos hasta que est\xe9n enfocados</string>\n    <string name="phingers_component_capture_thumb_not_focus">Mueva el dedo hasta que est\xe9 enfocado</string>\n    <string name="phingers_component_timeout_title">Tiempo superado</string>\n    <string name="phingers_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="phingers_component_internal_error_title">Hubo un problema t\xe9cnico</string>\n    <string name="phingers_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var r=a(6540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);