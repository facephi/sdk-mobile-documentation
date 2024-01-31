"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2616],{4623:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(5893),i=a(1151);const s={},l="Phingers Component",o={id:"Phingers_Component",title:"Phingers Component",description:"Este documento hace referencia la versi\xf3n 1.4.X del componente",source:"@site/docs/ios/Phingers_Component.md",sourceDirName:".",slug:"/Phingers_Component",permalink:"/es/docs/ios/Phingers_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Primeros pasos",permalink:"/es/docs/ios/Mobile_SDK"},next:{title:"VideoCall Component",permalink:"/es/docs/ios/VideoCall_Component"}},t={},d=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Configuraci\xf3n del componente",id:"4-configuraci\xf3n-del-componente",level:2},{value:"4.1 Class PhingersConfigurationData",id:"41-class-phingersconfigurationdata",level:3},{value:"4.1.1 reticleOrientation",id:"411-reticleorientation",level:4},{value:"4.1.2 extractionTimeout",id:"412-extractiontimeout",level:4},{value:"4.1.3 returnWSQ",id:"413-returnwsq",level:4},{value:"4.1.4 returnRawImage",id:"414-returnrawimage",level:4},{value:"4.1.5 returnProcessedImage",id:"415-returnprocessedimage",level:4},{value:"4.1.6 returnFingerprintTemplate",id:"416-returnfingerprinttemplate",level:4},{value:"4.1.7 returnFullFrameImage",id:"417-returnfullframeimage",level:4},{value:"4.1.8 useLiveness",id:"418-useliveness",level:4},{value:"4.1.9 useFlash",id:"419-useflash",level:4},{value:"4.1.10 captureFingersText",id:"4110-capturefingerstext",level:4},{value:"4.1.11 captureThumbText",id:"4111-capturethumbtext",level:4},{value:"4.1.12 thumbNotInFocusText",id:"4112-thumbnotinfocustext",level:4},{value:"4.1.13 captureFingerText",id:"4113-capturefingertext",level:4},{value:"5. Uso del componente",id:"5-uso-del-componente",level:2},{value:"6. Recepci\xf3n del resultado.",id:"6-recepci\xf3n-del-resultado",level:2},{value:"6.1 Contenido del campo <em>data</em>",id:"61-contenido-del-campo-data",level:3},{value:"6.1.1 <em>focusQuality</em>",id:"611-focusquality",level:4},{value:"6.1.2 <em>fullFrameImage</em>",id:"612-fullframeimage",level:4},{value:"6.1.3 <em>livenessConfidence</em>",id:"613-livenessconfidence",level:4},{value:"6.1.4 <em>fingersResult</em>",id:"614-fingersresult",level:4},{value:"6.1.4.1 wsq",id:"6141-wsq",level:4},{value:"6.1.4.2 fingerprintTemplate",id:"6142-fingerprinttemplate",level:4},{value:"6.1.4.3 rawFingerprintImage",id:"6143-rawfingerprintimage",level:4},{value:"6.1.4.4 processedFingerprintImage",id:"6144-processedfingerprintimage",level:4},{value:"6.1.4.5 nfiqMetrics",id:"6145-nfiqmetrics",level:4},{value:"7. Personalizaci\xf3n del componente",id:"7-personalizaci\xf3n-del-componente",level:2},{value:"7.1 Textos",id:"71-textos",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"}),"\n",(0,r.jsxs)(n.p,{children:["Este documento hace referencia la ",(0,r.jsx)(n.strong,{children:"versi\xf3n 1.4.X"})," del componente"]}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Phingers Component"})}),". \xc9ste se encarga de realizar la captura de las\nhuellas de los dedos (fingerprints) del usuario y la posterior\nextracci\xf3n de las plantillas de las huellas posteriores. Sus principales\nfuncionalidades son las siguientes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dos modos de funcionamiento: extracci\xf3n de los cuatro dedos de la\nmano (excepto el pulgar), o extracci\xf3n \xfanicamente del pulgar."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Gesti\xf3n interna de c\xe1mara."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Detecci\xf3n de vivacidad incorporada."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Asistente en los procesos de captura de las huellas."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Generaci\xf3n de las plantillas con las caracter\xedsticas de las huellas,\nim\xe1genes y puntuaciones."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Versi\xf3n m\xednima de iOS:\xa0",(0,r.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a ",(0,r.jsx)(n.strong,{children:(0,r.jsx)("u",{children:"Core Component"})})," y seguir las instrucciones\nindicadas en dicho documento."]}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,r.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias, en este caso\nCocoapods. Las dependencias\xa0",(0,r.jsx)(n.strong,{children:"obligatorias"}),"\xa0que deber\xe1n haberse\ninstalado previamente (a\xf1adi\xe9ndolas en el fichero\xa0",(0,r.jsx)(n.em,{children:"Podfile"}),"\xa0del\nproyecto) son:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKMainComponent', '~> 1.4.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Para instalar el componente actual deber\xe1 incluirse la siguiente\nentrada en el\xa0",(0,r.jsx)(n.em,{children:"Podfile"}),"\xa0de la aplicaci\xf3n:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKPhingersComponent', '~> 1.4.0'\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las\ndiferentes funcionalidades del componente."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,r.jsxs)(n.p,{children:["En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es\nnecesario incorporar el siguiente elementos en el fichero\xa0",(0,r.jsx)(n.strong,{children:"info.plist"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,r.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando debe ejecutarse ",(0,r.jsx)(n.strong,{children:"siempre"}),". Para saber m\xe1s acerca de c\xf3mo\niniciar una nueva operaci\xf3n, se recomienda consultar la documentaci\xf3n de\n",(0,r.jsx)(n.strong,{children:"Core Component"}),", en el que se detalla y explica en qu\xe9 consiste este\nproceso."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-configuraci\xf3n-del-componente",children:"4. Configuraci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto ",(0,r.jsx)(n.em,{children:"PhingersConfigurationData"})," y pasarlo como par\xe1metro al\nSDKController durante el lanzamiento del componente."]}),"\n",(0,r.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,r.jsx)(n.h3,{id:"41-class-phingersconfigurationdata",children:"4.1 Class PhingersConfigurationData"}),"\n",(0,r.jsx)(n.h4,{id:"411-reticleorientation",children:"4.1.1 reticleOrientation"}),"\n",(0,r.jsx)(n.p,{children:"Establece el modo de detecci\xf3n de huellas e indica qu\xe9 dedos se van a\ndetectar durante el proceso. Los valores permitidos son:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LEFT"}),": Se activa la captura de los ",(0,r.jsx)(n.strong,{children:"cuatro dedos de la mano\nizquierda"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RIGHT"}),": Se activa la captura de los ",(0,r.jsx)(n.strong,{children:"cuatro dedos de la mano\nizquierda"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"THUMB"}),": Se activa la captura de ",(0,r.jsx)(n.strong,{children:"un pulgar"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"412-extractiontimeout",children:"4.1.2 extractionTimeout"}),"\n",(0,r.jsx)(n.p,{children:"Establece un modo de estabilizaci\xf3n previo a cualquier proceso de\nautenticaci\xf3n en el widget. Con este modo se obliga al widget a no\nempezar ning\xfan proceso si el usuario no se encuentra con la cabeza\nmirando al frente y sin moverla."}),"\n",(0,r.jsx)(n.h4,{id:"413-returnwsq",children:"4.1.3 returnWSQ"}),"\n",(0,r.jsxs)(n.p,{children:["Si se establece a ",(0,r.jsx)(n.strong,{children:"true"})," entonces en el resultado de la captura se\ndevolver\xe1, para cada una de las huellas, el dato comprimido mediante\n",(0,r.jsx)(n.em,{children:"Wavelet Scalar Quatization"})," (WSQ). WSQ es un algortimo de compresi\xf3n en\ngrises, siendo un est\xe1ndar (NIST) para este tipo de capturas. Orientado\na la validaci\xf3n contra las diferentes bases de datos gubernamentales\nexistentes."]}),"\n",(0,r.jsx)(n.h4,{id:"414-returnrawimage",children:"4.1.4 returnRawImage"}),"\n",(0,r.jsxs)(n.p,{children:["Si se establece a ",(0,r.jsx)(n.strong,{children:"true"})," se devolver\xe1 en el resultado las im\xe1genes de\nla misma forma en que se han capturado."]}),"\n",(0,r.jsx)(n.h4,{id:"415-returnprocessedimage",children:"4.1.5 returnProcessedImage"}),"\n",(0,r.jsxs)(n.p,{children:["Si se establece a ",(0,r.jsx)(n.strong,{children:"true"})," se devolver\xe1 en el resultado las im\xe1genes de\nla misma forma en que se han capturado."]}),"\n",(0,r.jsx)(n.h4,{id:"416-returnfingerprinttemplate",children:"4.1.6 returnFingerprintTemplate"}),"\n",(0,r.jsxs)(n.p,{children:["Especifica si el proceso de captura retornar\xe1 el template de huellas en\nel resultado. Es un enumerado del tipo ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"FingerprintTemplateType"})}),", y\ncada valor ser\xeda: **"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ISO"}),": Este tipo de plantilla se refiere al est\xe1ndar ",(0,r.jsx)(n.strong,{children:"ISO/IEC\n19794-4"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"INNOVATRICS"}),": Este tipo de plantilla es una plantilla propietaria\ncompatible con el cambio de escalado, y muy \xfatil para los diferentes\nprocesos de validaci\xf3n."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NONE"}),": Desactivado el retorno del template."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"417-returnfullframeimage",children:"4.1.7 returnFullFrameImage"}),"\n",(0,r.jsx)(n.p,{children:"Especifica si se debe devolver la imagen completa de la c\xe1mara en la que\nse han detectado los dedos."}),"\n",(0,r.jsx)(n.h4,{id:"418-useliveness",children:"4.1.8 useLiveness"}),"\n",(0,r.jsxs)(n.p,{children:["Activa o desactiva el detector de vivacidad durante el proceso de\ncaptura de huellas. Por defecto se encuentra a ",(0,r.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"419-useflash",children:"4.1.9 useFlash"}),"\n",(0,r.jsxs)(n.p,{children:["Activa o desactiva el flash de la c\xe1mara durante el proceso de captura\nde huellas. Por defecto se encuentra a ",(0,r.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"4110-capturefingerstext",children:"4.1.10 captureFingersText"}),"\n",(0,r.jsx)(n.p,{children:"Establece el mensaje (string) que se muestra en pantalla una vez se han\ndetectado los cuatro dedos y debe indicarse al usuario que no los mueva."}),"\n",(0,r.jsx)(n.h4,{id:"4111-capturethumbtext",children:"4.1.11 captureThumbText"}),"\n",(0,r.jsx)(n.p,{children:"Establece el mensaje (string) que se muestra en pantalla una vez se ha\ndetectado el dedo pulgar y debe indicarse al usuario que no lo mueva."}),"\n",(0,r.jsx)(n.h4,{id:"4112-thumbnotinfocustext",children:"4.1.12 thumbNotInFocusText"}),"\n",(0,r.jsx)(n.p,{children:"Establece el mensaje (string) que se muestra en pantalla mientras se\nintenta"}),"\n",(0,r.jsx)(n.h4,{id:"4113-capturefingertext",children:"4.1.13 captureFingerText"}),"\n",(0,r.jsx)(n.p,{children:"Establece el mensaje (string) que se muestra en pantalla durante el\nproceso de captura del dedo pulgar."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-uso-del-componente",children:"5. Uso del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,r.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,r.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-recepci\xf3n-del-resultado",children:"6. Recepci\xf3n del resultado."}),"\n",(0,r.jsxs)(n.p,{children:["El resultado es un objeto ",(0,r.jsx)(n.em,{children:"SDKResult"})," que devuelve el SDK tendr\xe1 siempre\n3 campos:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"finishStatus:"})," Que nos indicar\xe1 si la operaci\xf3n ha finalizado\ncorrectamente. Posibles valores:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"errorType:"})," Si el finishStatus indica que ha habido un error, este\ncampo tendr\xe1 la descripci\xf3n del mismo:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"CANCEL_BY_USER: El usuario ha cancelado la operaci\xf3n\nTIMEOUT: Ha finalizado el tiempo establecido sin que se termine correctamente el proceso.\nCOMPONENT_CONTROLLER_ERROR: No se ha inicializado correctamente el controlador. Revisar las funciones de init y setup.\nCOMPONENT_CONTROLLER_DATA_ERROR: Los datos de inicio o configuraci\xf3n del controlador no son correctos.\nNETWORK_CONNECTION: Error de conexi\xf3n a internet\nUNKNOWN_ERROR: Error no gestionado\nACTIVITY_RESULT_ERROR: Error en el flujo de pantallas interno del controlador.\nLOW_QUALITY: La imagen capturada no tiene la calidad suficiente.\nNFC_ERROR: Error de lectura de NFC\nQR_ERROR: Error de lectura de QR\nNO_ERROR: No se ha producido ning\xfan error\nHARDWARE_ERROR: Error de hardware de los widgets de Selphi/SelphId\nEXTRACTION_LICENSE_ERROR: Error de licenciade los widgets de Selphi/SelphId\nUNEXPECTED_CAPTURE_ERROR: Error durante el proceso de captura de los widgets de Selphi/SelphId\nCONTROL_NOT_INITIALIZATED_ERROR: Error interno de los widgets de Selphi/SelphId\nBAD_EXTRACTOR_CONFIGURATION_ERROR: Error interno de los widgets de Selphi/SelphId\nTOKEN_ERROR: Error en la petici\xf3n del token para tracking\nPHINGERS_ERROR_CAPTURE: Error de captura de huellas\nLICENSING_ERROR_PACKAGE_NAME: Error de licencia que indica que el package name es incorrecto.\nLICENSING_ERROR_APPID_INVALID: Error de licencia que indica que el APPID es incorrecto.\nLICENSING_ERROR_APIKEY_FORBIDDEN: Error de licencia que indica que el APIKEY es incorrecto.\nLICENSING_ERROR_LICENSE_NOT_FOUND: Error de licencia que indica que no se ha encontrado ninguna licencia.\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"data:"})," Tendr\xe1 los datos de respuesta de la funci\xf3n del componente\nejecutado. En el ",(0,r.jsx)(n.strong,{children:"apartado 7.1"})," se especifican los campos que se\nincluyen en este componente."]}),"\n",(0,r.jsxs)(n.h3,{id:"61-contenido-del-campo-data",children:["6.1 Contenido del campo ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsxs)(n.p,{children:["El resultado devuelve las im\xe1genes en formato ",(0,r.jsx)(n.strong,{children:"Bitmap"}),", es posible\nconvertir las im\xe1genes a ",(0,r.jsx)(n.strong,{children:"Base64"})," de la siguiente manera:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)"})}),"\n",(0,r.jsxs)(n.p,{children:["El campo ",(0,r.jsx)(n.em,{children:"data"})," es variable y depender\xe1 de qu\xe9 componente se ha devuelto\nel resultado. En el caso de este componente, los campos devueltos son\nlos siguientes:"]}),"\n",(0,r.jsxs)(n.h4,{id:"611-focusquality",children:["6.1.1 ",(0,r.jsx)(n.em,{children:"focusQuality"})]}),"\n",(0,r.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso de autenticaci\xf3n en\nformato string Base64. Esta imagen es la imagen con el tama\xf1o original\nextra\xedda de la c\xe1mara. V\xe1lido para el proceso de ",(0,r.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"612-fullframeimage",children:["6.1.2 ",(0,r.jsx)(n.em,{children:"fullFrameImage"})]}),"\n",(0,r.jsxs)(n.p,{children:["Devuelve una imagen recortada centrada en la cara del usuarioen formato\nstring Base64. Esta imagen se obtiene a partir de la ",(0,r.jsx)(n.em,{children:"bestImage"}),". \xc9sta\nes la imagen que se deber\xe1 utilizar como imagen caracter\xedstica del\nusuario que realiz\xf3 el proceso a modo de ",(0,r.jsx)(n.em,{children:"avatar"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"613-livenessconfidence",children:["6.1.3 ",(0,r.jsx)(n.em,{children:"livenessConfidence"})]}),"\n",(0,r.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso de autenticaci\xf3n en\nformato Bitmap. Esta imagen es la imagen con el tama\xf1o original extra\xedda\nde la c\xe1mara. V\xe1lido para el proceso de ",(0,r.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"614-fingersresult",children:["6.1.4 ",(0,r.jsx)(n.em,{children:"fingersResult"})]}),"\n",(0,r.jsxs)(n.p,{children:["Es una lista de objetos ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"FingerResult"})}),", que contiene toda la\ninformaci\xf3n asociada a cada uno de los dedos capturados."]}),"\n",(0,r.jsx)(n.h4,{id:"6141-wsq",children:"6.1.4.1 wsq"}),"\n",(0,r.jsx)(n.p,{children:"Se devuelve la captura de huella en formato WSQ."}),"\n",(0,r.jsx)(n.h4,{id:"6142-fingerprinttemplate",children:"6.1.4.2 fingerprintTemplate"}),"\n",(0,r.jsx)(n.p,{children:"Devuelve la plantilla de la huella, usada para posteriores validaciones."}),"\n",(0,r.jsx)(n.h4,{id:"6143-rawfingerprintimage",children:"6.1.4.3 rawFingerprintImage"}),"\n",(0,r.jsx)(n.p,{children:"Devuelve la imagen de la huella actual en crudo, sin modificar."}),"\n",(0,r.jsx)(n.h4,{id:"6144-processedfingerprintimage",children:"6.1.4.4 processedFingerprintImage"}),"\n",(0,r.jsx)(n.p,{children:"Devuelve la imagen de la huella procesada."}),"\n",(0,r.jsx)(n.h4,{id:"6145-nfiqmetrics",children:"6.1.4.5 nfiqMetrics"}),"\n",(0,r.jsx)(n.p,{children:"Son las m\xe9tricas de la captura. Actualmente se devuelve el siguiente\nvalor:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"nfiqMetric"}),": Es un valor entero, entre 1 y 5 (ambos inclusive),\nque indica la calidad de la captura de huella, siendo 1 el valor que\nindica la calidad m\xe1s alta y 5 la peor calidad. Las huellas con este\n\xfaltimo valor suelen ser descartadas para posteriores validaciones."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-personalizaci\xf3n-del-componente",children:"7. Personalizaci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,r.jsx)(n.strong,{children:"Core Component"}),"), este componente en\nconcreto permite la modificaci\xf3n de textos espec\xedficos."]}),"\n",(0,r.jsx)(n.h3,{id:"71-textos",children:"7.1 Textos"}),"\n",(0,r.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,r.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\x3c!-- PHINGERS --\x3e\n<string name="phingers_component_left_hand">Prepare your left hand for the catch</string>\n<string name="phingers_component_right_hand">Prepare your right hand for capture</string>\n<string name="phingers_component_action_text">Take fingerprints</string>\n<string name="phingers_component_capture_phingers">Hold fingers steady</string>\n<string name="phingers_component_capture_thumb">Hold finger steady</string>\n<string name="phingers_component_capture_phingers_not_focus">Move fingers until in focus</string>\n<string name="phingers_component_capture_thumb_not_focus">Move finger until in focus</string>\n'})}),"\n",(0,r.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>l});var r=a(7294);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);