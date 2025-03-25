"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4782],{97:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Selphi_Component","title":"Selphi Component","description":"0. Requisitos base de SDK Mobile","source":"@site/i18n/es/docusaurus-plugin-content-docs-ios/current/Selphi_Component.md","sourceDirName":".","slug":"/Selphi_Component","permalink":"/sdk-mobile-documentation/es/docs/ios/next/Selphi_Component","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Tracking Component","permalink":"/sdk-mobile-documentation/es/docs/ios/next/Tracking_Component"},"next":{"title":"SelphID Component","permalink":"/sdk-mobile-documentation/es/docs/ios/next/SelphID_Component"}}');var s=a(4848),l=a(8453);const o={},r="Selphi Component",t={},c=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class SelphiConfigurationData",id:"51-class-selphiconfigurationdata",level:3},{value:"5.1.1 Configuraci\xf3n B\xe1sica",id:"511-configuraci\xf3n-b\xe1sica",level:4},{value:"resourcesPath",id:"resourcespath",level:5},{value:"showTutorial",id:"showtutorial",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"showResultAfterCapture",id:"showresultaftercapture",level:5},{value:"5.1.2 Configuraci\xf3n Avanzada",id:"512-configuraci\xf3n-avanzada",level:4},{value:"debug",id:"debug",level:5},{value:"fullscreen",id:"fullscreen",level:5},{value:"cropPercent",id:"croppercent",level:5},{value:"locale",id:"locale",level:5},{value:"livenessMode",id:"livenessmode",level:5},{value:"stabilizationMode",id:"stabilizationmode",level:5},{value:"templateRawOptimized",id:"templaterawoptimized",level:5},{value:"qrMode",id:"qrmode",level:5},{value:"videoFilename",id:"videofilename",level:5},{value:"cameraFlashEnabled",id:"cameraflashenabled",level:5},{value:"translationsContent",id:"translationscontent",level:5},{value:"viewsContent",id:"viewscontent",level:5},{value:"5.1.3 Otros parametros",id:"513-otros-parametros",level:4},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado.",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 template",id:"721-template",level:4},{value:"7.2.2 templateRaw",id:"722-templateraw",level:4},{value:"7.2.3 bestImageData",id:"723-bestimagedata",level:4},{value:"7.2.4 bestImageCroppedData",id:"724-bestimagecroppeddata",level:4},{value:"7.2.5 QrData",id:"725-qrdata",level:4},{value:"7.2.6 bestImageTokenized",id:"726-bestimagetokenized",level:4},{value:"8. Controladores Adicionales",id:"8-controladores-adicionales",level:2},{value:"8.1. RawTemplateController",id:"81-rawtemplatecontroller",level:3},{value:"9. Personalizando el componente",id:"9-personalizando-el-componente",level:2},{value:"9.1 Personalizando las animaciones",id:"91-personalizando-las-animaciones",level:3},{value:"9.1.1 Gu\xeda de animaciones",id:"911-gu\xeda-de-animaciones",level:4},{value:"9.2 Colores, im\xe1genes, tama\xf1os y fuentes",id:"92-colores-im\xe1genes-tama\xf1os-y-fuentes",level:3},{value:"9.3 Textos",id:"93-textos",level:3},{value:"9.4 Personalizaci\xf3n del Widget",id:"94-personalizaci\xf3n-del-widget",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"selphi-component",children:"Selphi Component"})}),"\n",(0,s.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,s.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,s.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,s.jsx)(n.a,{href:"./Mobile_SDK#11-requisitos-m%C3%ADnimos",children:"Primeros Pasos"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El ",(0,s.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Selphi Component"})}),". \xc9ste se encarga de realizar la captura de un\nselfie del usuario y la posterior extracci\xf3n de las caracter\xedsticas\nfaciales m\xe1s importantes. Sus principales funcionalidades son las\nsiguientes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Gesti\xf3n interna de c\xe1maras."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Asistente en los procesos de captura de la cara del usuario."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Generaci\xf3n de las plantillas con las caracter\xedsticas faciales y de\nla imagen de la cara del usuario para el proceso de detecci\xf3n de\nvivacidad (Liveness)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,s.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,s.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,s.jsx)(n.strong,{children:"13"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n de ",(0,s.jsx)(n.a,{href:"./Mobile_SDK#2-integraci%C3%B3n-inicial",children:"Integraci\xf3n"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,s.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,s.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,s.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,s.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKMainComponent', '~> 1.5.0'\n  pod 'zipzap'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Para instalar el componente de Selphi deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKSelphiComponent', '~> 1.5.0'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["En caso de realizar el desarrollo con ",(0,s.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Image",src:a(225).A+"",width:"1834",height:"510"})}),"\n",(0,s.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Las dependencias obligatorias que deber\xe1n haberse instalado previamente son:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Para instalar el componente de NFC deber\xe1 incluirse en los m\xf3dulos del proyecto:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-Selphi_component-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-Selphi_component-SPM.git\n"})}),"\n",(0,s.jsx)(n.h3,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,s.jsx)(n.p,{children:"En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero info.plist"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,s.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,s.jsx)(n.strong,{children:"anteriormente al lanzamiento del componente"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,s.jsx)(n.a,{href:"./Mobile_SDK#4-iniciar-nueva-operacion",children:"Iniciar nueva operaci\xf3n"}),", en el que se detalla y explica en qu\xe9 consiste este proceso."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Controlador"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SelphiController"}),(0,s.jsx)(n.td,{children:"Controlador principal de reconocimiento facial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RawTemplateController"}),(0,s.jsx)(n.td,{children:"Controlador para generar un RawTemplate a partir de una imagen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SignatureSelphiController"}),(0,s.jsx)(n.td,{children:"Controlador para firmar un proceso con una Captura"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,s.jsxs)(n.p,{children:["Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto ",(0,s.jsx)(n.em,{children:"SelphiConfigurationData"})," y pasarlo como par\xe1metro al\nSDKController durante el lanzamiento del componente."]}),"\n",(0,s.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,s.jsx)(n.h3,{id:"51-class-selphiconfigurationdata",children:"5.1. Class SelphiConfigurationData"}),"\n",(0,s.jsx)(n.h4,{id:"511-configuraci\xf3n-b\xe1sica",children:"5.1.1 Configuraci\xf3n B\xe1sica"}),"\n",(0,s.jsx)(n.h5,{id:"resourcespath",children:"resourcesPath"}),"\n",(0,s.jsx)(n.p,{children:"Establece la ruta donde se encuentra el archivo de recursos del widget. Este archivo contiene tanto los recursos gr\xe1ficos como los recursos de localizaci\xf3n. Esta ruta debe especificarse relativa a la carpeta \u2018assets\u2019 de la aplicaci\xf3n principal."}),"\n",(0,s.jsx)(n.h5,{id:"showtutorial",children:"showTutorial"}),"\n",(0,s.jsx)(n.p,{children:"Esta propiedad permite mostrar el tutorial previo al proceso de captura."}),"\n",(0,s.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,s.jsx)(n.p,{children:"Si se le da valor true, al producirse un error o una falta de permisos, el sdk mostrar\xe1 una pantalla con el error devuelto por el widget."}),"\n",(0,s.jsx)(n.h5,{id:"showresultaftercapture",children:"showResultAfterCapture"}),"\n",(0,s.jsx)(n.p,{children:"Indica si mostrar o no una pantalla con la imagen capturada del documento despu\xe9s del proceso de an\xe1lisis. En esta pantalla se le da al usuario la posibilidad de repetir el proceso de captura si la imagen que se obtuvo del documento no fuera correcta."}),"\n",(0,s.jsx)(n.h4,{id:"512-configuraci\xf3n-avanzada",children:"5.1.2 Configuraci\xf3n Avanzada"}),"\n",(0,s.jsx)(n.h5,{id:"debug",children:"debug"}),"\n",(0,s.jsx)(n.p,{children:"Activaci\xf3n del modo depuraci\xf3n del componente."}),"\n",(0,s.jsx)(n.h5,{id:"fullscreen",children:"fullscreen"}),"\n",(0,s.jsx)(n.p,{children:"Indica si la vista va a tener prioridad para mostrarse en pantalla\ncompleta, si el sistema lo permite."}),"\n",(0,s.jsx)(n.h5,{id:"croppercent",children:"cropPercent"}),"\n",(0,s.jsx)(n.p,{children:"Permite modificar el porcentaje de recortado de la cara. Cuanto mayor\nsea el n\xfamero mayor ser\xe1 el recorte del rect\xe1ngulo con respecto a la\ncara."}),"\n",(0,s.jsx)(n.h5,{id:"locale",children:"locale"}),"\n",(0,s.jsx)(n.p,{children:"Fuerza al widget a utilizar la configuraci\xf3n de idioma indicado por el\npar\xe1metro locale. Este par\xe1metro acepta tanto un c\xf3digo de idioma (p.\nej. \u2018en\u2019) como un c\xf3digo de identificaci\xf3n regional (p. ej. \u2018en_US\u2019). Si\nel archivo de recursos del widget no tuviera una localizaci\xf3n para el\n\u2018locale\u2019 seleccionado su configuraci\xf3n pasar\xeda a utilizar el idioma por\ndefecto."}),"\n",(0,s.jsx)(n.h5,{id:"livenessmode",children:"livenessMode"}),"\n",(0,s.jsx)(n.p,{children:"Establece el modo liveness del widget. Los valores permitidos son:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SelphiFaceLivenessMode.NONE"}),": Indica que no debe activarse el modo detecci\xf3n de foto en los procesos de autenticaci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SelphiFaceLivenessMode.PASSIVE"}),": Indica que la prueba de vida pasiva se realiza en el servidor, enviando para tal fin la \u201cBestImage\u201d o el \u201cTemplateRaw\u201d correspondiente."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SelpiFaceLivenessMode.MOVE"}),": Indica que el test de liveness es activo, mostrando unas instrucciones durante la captura, y devolviendo el correspondiente resultado del proceso."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"stabilizationmode",children:"stabilizationMode"}),"\n",(0,s.jsx)(n.p,{children:"Establece un modo de estabilizaci\xf3n previo a cualquier proceso de autenticaci\xf3n en el widget. Con este modo se obliga al widget a no empezar ning\xfan proceso si el usuario no se encuentra con la cabeza mirando al frente y sin moverla."}),"\n",(0,s.jsx)(n.h5,{id:"templaterawoptimized",children:"templateRawOptimized"}),"\n",(0,s.jsx)(n.p,{children:"Indica si el template (templateRaw) generado tras el selfie debe optimizarse o no."}),"\n",(0,s.jsx)(n.h5,{id:"qrmode",children:"qrMode"}),"\n",(0,s.jsx)(n.p,{children:"Booleano que indica si se quiere o no activar la lectura de QR previo al proceso de autenticaci\xf3n."}),"\n",(0,s.jsx)(n.h5,{id:"videofilename",children:"videoFilename"}),"\n",(0,s.jsx)(n.p,{children:"Establece la ruta absoluta del nombre del archivo en el que se grabar\xe1\nun video del proceso de captura. La aplicaci\xf3n es la responsable de\nsolicitar los permisos necesarios al tel\xe9fono en caso de que esa ruta\nrequiera de permisos adicionales. El widget, por defecto, no realizar\xe1\nning\xfan proceso de grabaci\xf3n a menos que se especifique una ruta de\narchivo mediante este m\xe9todo."}),"\n",(0,s.jsx)(n.h5,{id:"cameraflashenabled",children:"cameraFlashEnabled"}),"\n",(0,s.jsx)(n.p,{children:"Indica si se activa el flash de la c\xe1mara del dispositivo."}),"\n",(0,s.jsx)(n.h5,{id:"translationscontent",children:"translationsContent"}),"\n",(0,s.jsx)(n.p,{children:"Esta propiedad avanzada permite, mediante una cadena en formato xml,\nconfigurar la traducci\xf3n de los literales que se muestran durante el\nproceso."}),"\n",(0,s.jsx)(n.h5,{id:"viewscontent",children:"viewsContent"}),"\n",(0,s.jsx)(n.p,{children:"Esta propiedad avanzada permite, mediante una cadena en formato xml,\nconfigurar las vistas del widget."}),"\n",(0,s.jsx)(n.h4,{id:"513-otros-parametros",children:"5.1.3 Otros parametros"}),"\n",(0,s.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,s.jsx)(n.p,{children:"Si se le da valor true, se activa la vibraci\xf3n en errores y si la respuesta del widget es OK"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,s.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,s.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,s.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,s.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,s.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["El m\xe9todo ",(0,s.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,s.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),"\n",(0,s.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,s.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado."}),"\n",(0,s.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,s.jsx)(n.a,{href:"./Mobile_SDK#6-result-return",children:"Retorno de Resultado"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"finishStatus"}),": Que nos indicar\xe1 si la operaci\xf3n ha finalizado correctamente. Posibles valores:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"errorType"}),": Errores propios del widget."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SELPHID_CANCEL_BY_USER\nSELPHID_TIMEOUT\nSELPHID_INTERNAL_ERROR\nEXTRACTION_FINISHED_WITH_NO_RESULTS\nCOULD_NOT_CREATE_WIDGET_INSTANCE\nRESOURCES_FILE_NOT_FOUND\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,s.jsx)(n.em,{children:"data"})]}),"\n",(0,s.jsx)(n.p,{children:"El campo data es variable y depender\xe1 de qu\xe9 componente se ha devuelto el resultado. En el caso de este componente, los campos devueltos son los siguientes:"}),"\n",(0,s.jsx)(n.h4,{id:"721-template",children:"7.2.1 template"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve la plantilla que se genera despu\xe9s del proceso de extracci\xf3n. V\xe1lida para el proceso de AUTHENTICATION."}),"\n",(0,s.jsx)(n.h4,{id:"722-templateraw",children:"7.2.2 templateRaw"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve la plantilla en bruto que se genera despu\xe9s del proceso de extracci\xf3n. V\xe1lida para el proceso de AUTHENTICATION."}),"\n",(0,s.jsx)(n.h4,{id:"723-bestimagedata",children:"7.2.3 bestImageData"}),"\n",(0,s.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso de autenticaci\xf3n en formato array de bytes. Esta imagen es la imagen con el tama\xf1o original extra\xedda de la c\xe1mara. V\xe1lido para el proceso de ",(0,s.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"724-bestimagecroppeddata",children:"7.2.4 bestImageCroppedData"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve una imagen recortada centrada en la cara del usuario en formato array de bytes. Esta imagen se obtiene a partir de la bestImage. \xc9sta es la imagen que se deber\xe1 utilizar como imagen caracter\xedstica del usuario que realiz\xf3 el proceso a modo de avatar."}),"\n",(0,s.jsx)(n.h4,{id:"725-qrdata",children:"7.2.5 QrData"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve la informaci\xf3n proveniente de la lectura del QR en formato String"}),"\n",(0,s.jsx)(n.h4,{id:"726-bestimagetokenized",children:"7.2.6 bestImageTokenized"}),"\n",(0,s.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso cifrada. V\xe1lido para el proceso de ",(0,s.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"8-controladores-adicionales",children:"8. Controladores Adicionales"}),"\n",(0,s.jsx)(n.h3,{id:"81-rawtemplatecontroller",children:"8.1. RawTemplateController"}),"\n",(0,s.jsx)(n.p,{children:"Controlador para generar un RawTemplate se puede usar tanto la imagen en base64 como en data. ."}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo de uso:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"let controller = RawTemplateController(\n\tbase64: bestImageData.base64EncodedString(),\n\toutput: { sdkResult in\n\t\tguard let result = sdkResult.data else {return}\n\t\tprint(result.base64EncodedString())\n\t})\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,s.jsx)(n.p,{children:"o"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"let controller = RawTemplateController(\n\tdata: bestImageData,\n\toutput: { sdkResult in\n\t\tguard let result = sdkResult.data else {return}\n\t\tprint(result.base64EncodedString())\n\t})\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"9-personalizando-el-componente",children:"9. Personalizando el componente"}),"\n",(0,s.jsxs)(n.p,{children:["Adem\xe1s de los cambios a nivel de SDK (que se explican en ",(0,s.jsx)(n.a,{href:"./Mobile_SDK",children:"Mobile SDK"}),"), este componente espec\xedfico permite la modificaci\xf3n de sus animaciones."]}),"\n",(0,s.jsx)(n.h3,{id:"91-personalizando-las-animaciones",children:"9.1 Personalizando las animaciones"}),"\n",(0,s.jsx)(n.p,{children:"El componente de Selphi utiliza las siguientes animaciones:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"public enum Animation : String, CaseIterable {\n\tcase selphi_anim_tip\n\tcase selphi_anim_tip_move\n\tcase selphi_anim_tuto_1\n\tcase selphi_anim_tuto_2\n\tcase selphi_anim_tuto_3\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Las animaciones configuradas por defecto pueden sobreescribirse creando un archivo en el proyecto con el mismo nombre y extensi\xf3n (.json en este caso)."}),"\n",(0,s.jsxs)(n.p,{children:['Tambi\xe9n pueden configurarse de forma dinamica en tiempo de ejecuci\xf3n. Para hacer esto, es necesario crear una clase "tema custom" (custom "theme") que implemente la interfaz ',(0,s.jsx)(n.strong,{children:"ThemeSelphiProtocol"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'import selphiComponent\nclass CustomThemeSelphi: ThemeSelphiProtocol {\n\tvar name: String = "custom"\n\n\tpublic var customBoolean: Bool = true\n\tvar animations: [R.Animation : String] {\n\t\t[.selphi_anim_tip: customBoolean ? "primary_custom_selphi_anim_tip": "secondary_custom_selphi_anim_tip",\n\t\t .selphi_anim_tip_move: customBoolean ? "primary_custom_selphi_anim_tip_move": "secondary_custom_selphi_anim_tip_move",\n\t\t .selphi_anim_tuto_1: customBoolean ? "primary_custom_selphi_anim_tuto_1": "secondary_custom_selphi_anim_tuto_1",\n\t\t .selphi_anim_tuto_2: customBoolean ? "primary_custom_selphi_anim_tuto_2": "secondary_custom_selphi_anim_tuto_2",\n\t\t .selphi_anim_tuto_3: customBoolean ? "primary_custom_selphi_anim_tuto_3": "secondary_custom_selphi_anim_tuto_3"]\n\t}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Para que la personalizaci\xf3n se aplique al componente, se debe ejecutar ",(0,s.jsx)(n.strong,{children:"ThemeSelphiManager.setup(theme: CustomThemeSelphi())"})," antes de lanzar el selphidController."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"let selphiController = SelphiController(data: SelphiConfigurationData(), output: output, viewController: viewController)\nThemeSelphiManager.setup(theme: CustomThemeSelphi())\nSDKController.shared.launch(controller: selphiController)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"911-gu\xeda-de-animaciones",children:"9.1.1 Gu\xeda de animaciones"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tip"})}),"\nEsta animaci\xf3n se muestra si el livenessMode ",(0,s.jsx)(n.strong,{children:"NO"})," es ",(0,s.jsx)(n.em,{children:"MOVE"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"var configSelphi = SelphiConfigurationData()\n...\nconfigSelphi.livenessMode = SelphiFaceLivenessMode.PASSIVE\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:a(3817).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tip_move"})}),"\nEsta animaci\xf3n se muestra si el livenessMode es ",(0,s.jsx)(n.em,{children:"MOVE"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"var configSelphi = SelphiConfigurationData()\n...\nconfigSelphi.livenessMode = SelphiFaceLivenessMode.MOVE\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:a(5634).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tuto_1"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:a(8229).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tuto_2"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:a(6750).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selphi_anim_tuto_3"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:a(9895).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsx)(n.h3,{id:"92-colores-im\xe1genes-tama\xf1os-y-fuentes",children:"9.2 Colores, im\xe1genes, tama\xf1os y fuentes"}),"\n",(0,s.jsxs)(n.p,{children:["Al contrario que con las animaciones, la personalizaci\xf3n de estos elementos se hace desde el ",(0,s.jsx)(n.a,{href:"./Status_Component",children:"Componente de Status"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"93-textos",children:"9.3 Textos"}),"\n",(0,s.jsxs)(n.p,{children:["Los textos pueden ser customizados sobreescribiendo el valor de las siguientes claves en un Localizable.strings.\nLas claves que contienen el sufijo ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"_alt"})})," son los literales utilizados en las etiquetas de accesibilidad necesarias para la funcionalidad de ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"voice over"})}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"selphi_component_tutorial_1"="Place your face in the centre and look straight into the camera.";\n"selphi_component_tutorial_2"="Remove any object that covers your face.";\n"selphi_component_tutorial_3"="Look for a well-lit environment, without shadows on your face.";\n"selphi_component_tip_desc"="Place your face in the center of the circle";\n"selphi_component_tip_title"="Face Recognition";\n"selphi_component_tip_button_message"="START";\n"selphi_component_tip_alt"="Animation of a mobile screen with the front camera activated. A circle appears in the center of the screen. A person shows their face inside the circle and the application takes a photo.";\n"selphi_component_tip_move_alt"="Animation of a mobile screen with the front camera activated. A circle appears in the center of the screen. A person shows their face inside the circle, moves it slightly to the side and the application takes a photo of it. ";\n"selphi_component_tutorial_1_alt"="A circle appears in the center of the screen. A person shows their face. Their entire head can be seen inside the circle. When they are correctly positioned, the application takes a photo of them.";\n"selphi_component_tutorial_2_alt"="A circle appears in the center of the screen. Inside the circle there is a person, wearing sunglasses, and his hair covering part of his face. He takes off his glasses and removes his hair from his face. The application detects your entire face and takes a photo.";\n"selphi_component_tutorial_3_alt"="A dark circle appears in the center of the screen. Inside the circle, it is difficult to see a person\'s face. A light turns on and their face can be clearly seen. After this, the application makes a photo.";\n"selphi_component_tutorial_move_desc"="Place your face in the center of the circle and follow the directions.";\n"selphi_component_timeout_title" = "Timeout";\n"selphi_component_timeout_desc" = "We were unable to identify you. Please try again";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"94-personalizaci\xf3n-del-widget",children:"9.4 Personalizaci\xf3n del Widget"}),"\n",(0,s.jsx)(n.p,{children:'Selphi est\xe1 dividido en dos partes, la primera es la espeicifcada en las secciones previas y contiene las pantallas de "tutorial" y "M\xe1s informaci\xf3n". La segunda es el widget de captura con c\xe1mara.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MobileCapture",src:a(2777).A+"",width:"1020",height:"1942"})}),"\n",(0,s.jsx)(n.p,{children:"Este widget puede ser personalizado tambi\xe9n, pero para hacerlo se deben modificar los recursos de Selphi."})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},225:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},2777:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/capture-001-66e1ea24bb9a85f4d69045004872eb7e.png"},3817:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/tips-001-31b3efdf8fcf76f163ce05415a267dad.png"},5634:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/tips-002-3b64273af839783af1b1294a3ba7d605.png"},6750:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/tutorial-002-ed90af26ed2f78e71bd6a79471069841.png"},8229:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/tutorial-001-06e92da0b8ac08d45a277c6517af113e.png"},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var i=a(6540);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}},9895:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/tutorial-003-043b959a452e6ba2b791d127405dc82c.png"}}]);