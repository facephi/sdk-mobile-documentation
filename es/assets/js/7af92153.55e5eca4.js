"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4842],{4202:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>t});var i=a(5893),r=a(1151);const l={},s="Selphi Component",o={id:"Selphi_Component",title:"Selphi Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-android/current/Selphi_Component.md",sourceDirName:".",slug:"/Selphi_Component",permalink:"/sdk-mobile-documentation/es/docs/android/next/Selphi_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tracking Component",permalink:"/sdk-mobile-documentation/es/docs/android/next/Tracking_Component"},next:{title:"SelphID Component",permalink:"/sdk-mobile-documentation/es/docs/android/next/SelphID_Component"}},d={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class SelphiConfigurationData",id:"51-class-selphiconfigurationdata",level:3},{value:"5.1.0. <em>debug</em>",id:"510-debug",level:4},{value:"5.1.1. <em>resourcesPath</em>",id:"511-resourcespath",level:4},{value:"5.1.2. <em>cropPercent</em>",id:"512-croppercent",level:4},{value:"5.1.3. <em>showResultAfterCapture</em>",id:"513-showresultaftercapture",level:4},{value:"5.1.4. <em>showTutorial</em>",id:"514-showtutorial",level:4},{value:"5.1.5. <em>livenessMode</em>",id:"515-livenessmode",level:4},{value:"5.1.6. <em>stabilizationMode</em>",id:"516-stabilizationmode",level:4},{value:"5.1.7. <em>cameraFlashEnabled</em>",id:"517-cameraflashenabled",level:4},{value:"5.1.8 <em>locale</em>",id:"518-locale",level:4},{value:"5.1.9 <em>fullscreen</em>",id:"519-fullscreen",level:4},{value:"5.1.10. <em>templateRawOptimized</em>",id:"5110-templaterawoptimized",level:4},{value:"5.1.11. <em>qrMode</em>",id:"5111-qrmode",level:4},{value:"5.1.12 <em>videoFilename</em>",id:"5112-videofilename",level:4},{value:"5.1.13 <em>translationsContent</em>",id:"5113-translationscontent",level:4},{value:"5.1.14 <em>viewsContent</em>",id:"5114-viewscontent",level:4},{value:"5.1.15. <em>showDiagnostic</em>",id:"5115-showdiagnostic",level:4},{value:"5.1.15. <em>logImages</em>",id:"5115-logimages",level:4},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 <em>templateRaw</em>",id:"721-templateraw",level:4},{value:"7.2.2 <em>template</em>",id:"722-template",level:4},{value:"7.2.3 <em>bestImage</em>",id:"723-bestimage",level:4},{value:"7.2.4 <em>bestImageCropped</em>",id:"724-bestimagecropped",level:4},{value:"7.2.5 <em>logImages</em>",id:"725-logimages",level:4},{value:"7.2.6 <em>bestImageTokenized</em>",id:"726-bestimagetokenized",level:4},{value:"8. Controladores Adicionales",id:"8-controladores-adicionales",level:2},{value:"8.1. RawTemplateController",id:"81-rawtemplatecontroller",level:3},{value:"9. Personalizaci\xf3n del componente",id:"9-personalizaci\xf3n-del-componente",level:2},{value:"9.1 Textos",id:"91-textos",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"selphi-component",children:"Selphi Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,i.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,i.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,i.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Android Mobile SDK"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El ",(0,i.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Selphi Component"})}),". \xc9ste se encarga de realizar la captura de un\nselfie del usuario y la posterior extracci\xf3n de las caracter\xedsticas\nfaciales m\xe1s importantes. Sus principales funcionalidades son las\nsiguientes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Gesti\xf3n interna de c\xe1maras."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Asistente en los procesos de captura de la cara del usuario."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generaci\xf3n de las plantillas con las caracter\xedsticas faciales y de\nla imagen de la cara del usuario para el proceso de detecci\xf3n de\nvivacidad (Liveness)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,i.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:(0,i.jsx)("u",{children:"Android Mobile\nSDK"})})})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,i.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,i.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,i.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:selphi_component:$sdk_selphi_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,i.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,i.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,i.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:(0,i.jsx)("u",{children:"Android Mobile\nSDK"})})}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Controlador"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SelphiController"}),(0,i.jsx)(n.td,{children:"Controlador principal de reconocimiento facial"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RawTemplateController"}),(0,i.jsx)(n.td,{children:"Controlador para generar un RawTemplate a partir de una imagen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SignatureSelphiController"}),(0,i.jsx)(n.td,{children:"Controlador para firmar un proceso con una Captura"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto ",(0,i.jsx)(n.em,{children:"SelphiConfigurationData"})," y pasarlo como par\xe1metro al\nSDKController durante el lanzamiento del componente."]}),"\n",(0,i.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-selphiconfigurationdata",children:"5.1. Class SelphiConfigurationData"}),"\n",(0,i.jsxs)(n.h4,{id:"510-debug",children:["5.1.0. ",(0,i.jsx)(n.em,{children:"debug"})]}),"\n",(0,i.jsx)(n.p,{children:"Activaci\xf3n del modo depuraci\xf3n del componente."}),"\n",(0,i.jsxs)(n.h4,{id:"511-resourcespath",children:["5.1.1. ",(0,i.jsx)(n.em,{children:"resourcesPath"})]}),"\n",(0,i.jsx)(n.p,{children:"Indica el nombre de los recursos en formato zip del componente. Ejemplo:\n\u201cresources-selphi-2-0.zip\u201c."}),"\n",(0,i.jsxs)(n.p,{children:["Este nombre ir\xe1 a buscar el fichero a la ruta de ",(0,i.jsx)(n.em,{children:"assets"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:a(8894).Z+"",width:"283",height:"146"})}),"\n",(0,i.jsxs)(n.h4,{id:"512-croppercent",children:["5.1.2. ",(0,i.jsx)(n.em,{children:"cropPercent"})]}),"\n",(0,i.jsx)(n.p,{children:"Permite modificar el porcentaje de recortado de la cara. Cuanto mayor\nsea el n\xfamero mayor ser\xe1 el recorte del rect\xe1ngulo con respecto a la\ncara."}),"\n",(0,i.jsxs)(n.h4,{id:"513-showresultaftercapture",children:["5.1.3. ",(0,i.jsx)(n.em,{children:"showResultAfterCapture"})]}),"\n",(0,i.jsx)(n.p,{children:"Indica si mostrar o no una pantalla con la imagen capturada despu\xe9s del\nproceso de an\xe1lisis. En esta pantalla se le da al usuario la posibilidad\nde repetir el proceso de captura si la imagen que se obtuvo no fuera\ncorrecta."}),"\n",(0,i.jsxs)(n.h4,{id:"514-showtutorial",children:["5.1.4. ",(0,i.jsx)(n.em,{children:"showTutorial"})]}),"\n",(0,i.jsx)(n.p,{children:"Indica si el widget activa la pantalla de tutorial. En esta vista se\nexplica de forma intuitiva c\xf3mo se realiza la captura."}),"\n",(0,i.jsxs)(n.h4,{id:"515-livenessmode",children:["5.1.5. ",(0,i.jsx)(n.em,{children:"livenessMode"})]}),"\n",(0,i.jsx)(n.p,{children:"Establece el modo liveness del widget. Los valores permitidos son:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"LIVENESS_NONE: Indica que no debe activarse el modo detecci\xf3n de\nfoto en los procesos de autenticaci\xf3n."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"LIVENESS_PASSIVE: Indica que la prueba de vida pasiva se realiza en\nel servidor, enviando para tal fin la \u201cBestImage\u201d o el \u201cTemplateRaw\u201d\ncorrespondiente."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"516-stabilizationmode",children:["5.1.6. ",(0,i.jsx)(n.em,{children:"stabilizationMode"})]}),"\n",(0,i.jsx)(n.p,{children:"Establece un modo de estabilizaci\xf3n previo a cualquier proceso de\nautenticaci\xf3n en el widget. Con este modo se obliga al widget a no\nempezar ning\xfan proceso si el usuario no se encuentra con la cabeza,\nmirando al frente y sin moverla."}),"\n",(0,i.jsxs)(n.h4,{id:"517-cameraflashenabled",children:["5.1.7. ",(0,i.jsx)(n.em,{children:"cameraFlashEnabled"})]}),"\n",(0,i.jsx)(n.p,{children:"Indica si se activa el flash de la c\xe1mara del dispositivo."}),"\n",(0,i.jsxs)(n.h4,{id:"518-locale",children:["5.1.8 ",(0,i.jsx)(n.em,{children:"locale"})]}),"\n",(0,i.jsx)(n.p,{children:"Fuerza al widget a utilizar la configuraci\xf3n de idioma indicado por el\npar\xe1metro locale. Este par\xe1metro acepta tanto un c\xf3digo de idioma (p.\nej. \u2018en\u2019) como un c\xf3digo de identificaci\xf3n regional (p. ej. \u2018en_US\u2019). Si\nel archivo de recursos del widget no tuviera una localizaci\xf3n para el\n\u2018locale\u2019 seleccionado su configuraci\xf3n pasar\xeda a utilizar el idioma por\ndefecto."}),"\n",(0,i.jsxs)(n.h4,{id:"519-fullscreen",children:["5.1.9 ",(0,i.jsx)(n.em,{children:"fullscreen"})]}),"\n",(0,i.jsx)(n.p,{children:"Indica si la vista va a tener prioridad para mostrarse en pantalla\ncompleta, si el sistema lo permite."}),"\n",(0,i.jsxs)(n.h4,{id:"5110-templaterawoptimized",children:["5.1.10. ",(0,i.jsx)(n.em,{children:"templateRawOptimized"})]}),"\n",(0,i.jsx)(n.p,{children:"Indica si el template (templateRaw) generado tras el selfie debe\noptimizarse o no."}),"\n",(0,i.jsxs)(n.h4,{id:"5111-qrmode",children:["5.1.11. ",(0,i.jsx)(n.em,{children:"qrMode"})]}),"\n",(0,i.jsx)(n.p,{children:"Booleano que indica si se quiere o no activar la lectura de QR previo al\nproceso de autenticaci\xf3n."}),"\n",(0,i.jsxs)(n.h4,{id:"5112-videofilename",children:["5.1.12 ",(0,i.jsx)(n.em,{children:"videoFilename"})]}),"\n",(0,i.jsx)(n.p,{children:"Establece la ruta absoluta del nombre del archivo en el que se grabar\xe1\nun video del proceso de captura. La aplicaci\xf3n es la responsable de\nsolicitar los permisos necesarios al tel\xe9fono en caso de que esa ruta\nrequiera de permisos adicionales. El widget, por defecto, no realizar\xe1\nning\xfan proceso de grabaci\xf3n a menos que se especifique una ruta de\narchivo mediante este m\xe9todo."}),"\n",(0,i.jsxs)(n.h4,{id:"5113-translationscontent",children:["5.1.13 ",(0,i.jsx)(n.em,{children:"translationsContent"})]}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad avanzada permite, mediante una cadena en formato xml,\nconfigurar la traducci\xf3n de los literales que se muestran durante el\nproceso."}),"\n",(0,i.jsx)(n.p,{children:"Nota: Esta propiedad no altera el contenido del archivo de recursos."}),"\n",(0,i.jsxs)(n.h4,{id:"5114-viewscontent",children:["5.1.14 ",(0,i.jsx)(n.em,{children:"viewsContent"})]}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad avanzada permite, mediante una cadena en formato xml,\nconfigurar las vistas del widget."}),"\n",(0,i.jsx)(n.p,{children:"Nota: Esta propiedad no altera el contenido del archivo de recursos."}),"\n",(0,i.jsxs)(n.h4,{id:"5115-showdiagnostic",children:["5.1.15. ",(0,i.jsx)(n.em,{children:"showDiagnostic"})]}),"\n",(0,i.jsx)(n.p,{children:"Mostrar pantallas de diagn\xf3stico al final del proceso"}),"\n",(0,i.jsxs)(n.h4,{id:"5115-logimages",children:["5.1.15. ",(0,i.jsx)(n.em,{children:"logImages"})]}),"\n",(0,i.jsx)(n.p,{children:"Al activarlo se devuelve una lista con las 5 mejores im\xe1genes tomadas del usuario"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,i.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val response = SDKController.launch(\n    SelphiController(SelphiConfigurationData(...))\n)\nwhen (response) {\n    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")\n    is SdkResult.Success -> response.data\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,i.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val response = SDKController.launchMethod(\n    SelphiController(SelphiConfigurationData(...))\n)\nwhen (response) {\n    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")\n    is SdkResult.Success -> response.data\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["El m\xe9todo ",(0,i.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,i.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,i.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,i.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,i.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,i.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK"]}),"\n",(0,i.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,i.jsx)(n.p,{children:"En la parte del error, dispondremos de la clase SelphiError."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"    SelphiError.ACTIVITY_RESULT_ERROR\n    SelphiError.BAD_EXTRACTOR_CONFIGURATION_ERROR\n    SelphiError.CAMERA_PERMISSION_DENIED\n    SelphiError.CANCEL_BY_USER\n    SelphiError.CONTROL_NOT_INITIALIZATED_ERROR\n    SelphiError.EXTRACTION_LICENSE_ERROR\n    SelphiError.HARDWARE_ERROR\n    is SelphiError.INITIALIZATION_ERROR -> it.error //Para m\xe1s detalles\n    SelphiError.NO_ERROR\n    SelphiError.RESOURCES_NOT_FOUND\n    SelphiError.SETTINGS_PERMISSION_ERROR\n    SelphiError.TIMEOUT\n    SelphiError.UNEXPECTED_CAPTURE_ERROR\n    SelphiError.UNKNOWN_ERROR\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsxs)(n.p,{children:["En la parte de ",(0,i.jsx)(n.em,{children:"data"}),", dispondremos de la clase SelphiResult."]}),"\n",(0,i.jsxs)(n.p,{children:["El resultado devuelve las im\xe1genes en formato ",(0,i.jsx)(n.strong,{children:"Bitmap"}),", es posible\nconvertir las im\xe1genes a ",(0,i.jsx)(n.strong,{children:"Base64"})," de la siguiente manera:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)"})}),"\n",(0,i.jsxs)(n.p,{children:["El campo ",(0,i.jsx)(n.em,{children:"data"})," es variable y depender\xe1 de qu\xe9 componente se ha devuelto\nel resultado. En el caso de este componente, los campos devueltos son\nlos siguientes:"]}),"\n",(0,i.jsxs)(n.h4,{id:"721-templateraw",children:["7.2.1 ",(0,i.jsx)(n.em,{children:"templateRaw"})]}),"\n",(0,i.jsxs)(n.p,{children:["Devuelve la plantilla en bruto que se genera despu\xe9s del proceso de\nextracci\xf3n. V\xe1lida para el proceso de ",(0,i.jsx)(n.strong,{children:"matching"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"722-template",children:["7.2.2 ",(0,i.jsx)(n.em,{children:"template"})]}),"\n",(0,i.jsxs)(n.p,{children:["Devuelve la plantilla que se genera despu\xe9s del proceso de extracci\xf3n.\nV\xe1lida para el proceso de ",(0,i.jsx)(n.strong,{children:"matching"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"723-bestimage",children:["7.2.3 ",(0,i.jsx)(n.em,{children:"bestImage"})]}),"\n",(0,i.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso de autenticaci\xf3n en\nformato SdkImage (Se puede extraer el bitmap de dentro). Esta imagen es\nla imagen con el tama\xf1o original extra\xedda de la c\xe1mara. V\xe1lido para el\nproceso de ",(0,i.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"724-bestimagecropped",children:["7.2.4 ",(0,i.jsx)(n.em,{children:"bestImageCropped"})]}),"\n",(0,i.jsxs)(n.p,{children:["Devuelve una imagen recortada centrada en la cara del usuario en formato\nSdkImage (Se puede extraer el bitmap de dentro). Esta imagen se obtiene\na partir de la ",(0,i.jsx)(n.em,{children:"bestImage"}),". \xc9sta es la imagen que se podr\xe1 utilizar como\nimagen caracter\xedstica del usuario que realiz\xf3 el proceso a modo de\n",(0,i.jsx)(n.em,{children:"avatar"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"725-logimages",children:["7.2.5 ",(0,i.jsx)(n.em,{children:"logImages"})]}),"\n",(0,i.jsx)(n.p,{children:'Lista con las 5 mejores im\xe1genes capturadas. Se devuelve si se activa el flag "logImages" en la configuraci\xf3n.'}),"\n",(0,i.jsxs)(n.h4,{id:"726-bestimagetokenized",children:["7.2.6 ",(0,i.jsx)(n.em,{children:"bestImageTokenized"})]}),"\n",(0,i.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso cifrada. V\xe1lido para el proceso de ",(0,i.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-controladores-adicionales",children:"8. Controladores Adicionales"}),"\n",(0,i.jsx)(n.h3,{id:"81-rawtemplatecontroller",children:"8.1. RawTemplateController"}),"\n",(0,i.jsx)(n.p,{children:"Controlador para generar un RawTemplate a partir de una imagen (bitmap)."}),"\n",(0,i.jsx)(n.p,{children:"Ejemplo de uso:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(\n    RawTemplateController(SdkImage(image))\n)\nwhen (result) {\n    is SdkResult.Error -> Napier.d("GenerateRaw: KO - ${result.error}")\n    is SdkResult.Success -> result.data\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"9-personalizaci\xf3n-del-componente",children:"9. Personalizaci\xf3n del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales\nse explican en el documento de ",(0,i.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:(0,i.jsx)("u",{children:"Android Mobile\nSDK"})})}),"), este componente en concreto permite la\nmodificaci\xf3n de textos espec\xedficos."]}),"\n",(0,i.jsx)(n.h3,{id:"91-textos",children:"9.1 Textos"}),"\n",(0,i.jsxs)(n.p,{children:["Si se desea modificar los textos de la SDK habr\xeda que incluir el\nsiguiente fichero XML en la aplicaci\xf3n del cliente, y modificar el valor\nde cada ",(0,i.jsx)(n.em,{children:"String"})," por el deseado."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'    <string name="selphi_component_timeout_title">Tiempo superado</string>\n    <string name="selphi_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="selphi_component_internal_error_title">Hubo un problema t\xe9cnico</string>\n    <string name="selphi_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>\n    <string name="selphi_component_tutorial_message">Permanece quieto,\\ncon tu cara\\nen el centro del c\xedrculo</string>\n    <string name="selphi_component_tutorial_title">T\xf3mate una selfie</string>\n    <string name="selphi_component_tutorial_button">Comenzar</string>\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8894:(e,n,a)=>{a.d(n,{Z:()=>i});const i="data:image/png;base64,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"},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var i=a(7294);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);