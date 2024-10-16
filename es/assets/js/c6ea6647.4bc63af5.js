"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7749],{4117:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=a(4848),r=a(8453);const l={},s="Selphi Component",o={id:"Selphi_Component",title:"Selphi Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-2.0.X/Selphi_Component.md",sourceDirName:".",slug:"/Selphi_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/Selphi_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Tracking Component",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/Tracking_Component"},next:{title:"SelphID Component",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/SelphID_Component"}},d={},c=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"2.2 Permisos y configuraciones",id:"22-permisos-y-configuraciones",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Class SelphiConfigurationData",id:"51-class-selphiconfigurationdata",level:3},{value:"5.1.1 Configuraci\xf3n B\xe1sica",id:"511-configuraci\xf3n-b\xe1sica",level:4},{value:"resourcesPath",id:"resourcespath",level:5},{value:"showTutorial",id:"showtutorial",level:5},{value:"showDiagnostic",id:"showdiagnostic",level:5},{value:"showResultAfterCapture",id:"showresultaftercapture",level:5},{value:"5.1.2 Configuraci\xf3n Avanzada",id:"512-configuraci\xf3n-avanzada",level:4},{value:"debug",id:"debug",level:5},{value:"fullscreen",id:"fullscreen",level:5},{value:"cropPercent",id:"croppercent",level:5},{value:"locale",id:"locale",level:5},{value:"livenessMode",id:"livenessmode",level:5},{value:"stabilizationMode",id:"stabilizationmode",level:5},{value:"templateRawOptimized",id:"templaterawoptimized",level:5},{value:"qrMode",id:"qrmode",level:5},{value:"videoFilename",id:"videofilename",level:5},{value:"cameraFlashEnabled",id:"cameraflashenabled",level:5},{value:"translationsContent",id:"translationscontent",level:5},{value:"viewsContent",id:"viewscontent",level:5},{value:"logImages",id:"logimages",level:5},{value:"5.1.3 Otros parametros",id:"513-otros-parametros",level:4},{value:"VibrationEnabled",id:"vibrationenabled",level:5},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado.",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3},{value:"7.2.1 template",id:"721-template",level:4},{value:"7.2.2 templateRaw",id:"722-templateraw",level:4},{value:"7.2.3 bestImageData",id:"723-bestimagedata",level:4},{value:"7.2.4 bestImageCroppedData",id:"724-bestimagecroppeddata",level:4},{value:"7.2.5 QrData",id:"725-qrdata",level:4},{value:"7.2.6 logImages",id:"726-logimages",level:4},{value:"8. Controladores Adicionales",id:"8-controladores-adicionales",level:2},{value:"8.1. RawTemplateController",id:"81-rawtemplatecontroller",level:3}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"selphi-component",children:"Selphi Component"})}),"\n",(0,i.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,i.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,i.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El ",(0,i.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Selphi Component"})}),". \xc9ste se encarga de realizar la captura de un\nselfie del usuario y la posterior extracci\xf3n de las caracter\xedsticas\nfaciales m\xe1s importantes. Sus principales funcionalidades son las\nsiguientes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Gesti\xf3n interna de c\xe1maras."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Gesti\xf3n de permisos."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Asistente en los procesos de captura de la cara del usuario."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generaci\xf3n de las plantillas con las caracter\xedsticas faciales y de\nla imagen de la cara del usuario para el proceso de detecci\xf3n de\nvivacidad (Liveness)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,i.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,i.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n relativa a ",(0,i.jsx)(n.a,{href:"./Mobile_SDK#2-integraci%C3%B3n-inicial",children:"Integraci\xf3n Inicial"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,i.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,i.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})}),"."]})}),"\n",(0,i.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,i.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKMainComponent', '~> 2.0.0'\n  pod 'zipzap'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Para instalar el componente de SelphID deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"  pod 'FPHISDKSelphiComponent', '~> 2.0.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["En caso de realizar el desarrollo con ",(0,i.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:a(225).A+"",width:"1834",height:"510"})}),"\n",(0,i.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Las dependencias obligatorias que deber\xe1n haberse instalado previamente son:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Para instalar el componente de NFC deber\xe1 incluirse en los m\xf3dulos del proyecto:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-Selphi_component-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-Selphi_component-SPM.git\n"})}),"\n",(0,i.jsx)(n.h3,{id:"22-permisos-y-configuraciones",children:"2.2 Permisos y configuraciones"}),"\n",(0,i.jsx)(n.p,{children:"En la aplicaci\xf3n cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero info.plist"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Es necesario permitir el uso de la c\xe1mara (Privacy - Camera Usage Description)\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,i.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,i.jsxs)("div",{class:"note",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEste comando debe haberse ejecutado ",(0,i.jsx)(n.strong,{children:"anteriormente al lanzamiento del componente"}),"."]}),(0,i.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,i.jsx)(n.a,{href:"./Mobile_SDK#4-iniciar-nueva-operacion",children:"Iniciar nueva operaci\xf3n"}),", en el que se detalla y explica en qu\xe9 consiste este proceso."]})]}),"\n",(0,i.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Controlador"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SelphiController"}),(0,i.jsx)(n.td,{children:"Controlador principal de reconocimiento facial"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RawTemplateController"}),(0,i.jsx)(n.td,{children:"Controlador para generar un RawTemplate a partir de una imagen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SignatureSelphiController"}),(0,i.jsx)(n.td,{children:"Controlador para firmar un proceso con una Captura"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Para configurar el componente actual, una vez inicializado, se deber\xe1\ncrear un objeto ",(0,i.jsx)(n.em,{children:"SelphiConfigurationData"})," y pasarlo como par\xe1metro al\nSDKController durante el lanzamiento del componente."]}),"\n",(0,i.jsx)(n.p,{children:"En el siguiente apartado se mostrar\xe1n los campos que forman parte de\nesta clase y para qu\xe9 se utiliza cada uno de ellos."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"51-class-selphiconfigurationdata",children:"5.1. Class SelphiConfigurationData"}),"\n",(0,i.jsx)(n.h4,{id:"511-configuraci\xf3n-b\xe1sica",children:"5.1.1 Configuraci\xf3n B\xe1sica"}),"\n",(0,i.jsx)(n.h5,{id:"resourcespath",children:"resourcesPath"}),"\n",(0,i.jsx)(n.p,{children:"Establece la ruta donde se encuentra el archivo de recursos del widget. Este archivo contiene tanto los recursos gr\xe1ficos como los recursos de localizaci\xf3n. Esta ruta debe especificarse relativa a la carpeta \u2018assets\u2019 de la aplicaci\xf3n principal."}),"\n",(0,i.jsx)(n.h5,{id:"showtutorial",children:"showTutorial"}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad permite mostrar el tutorial previo al proceso de captura."}),"\n",(0,i.jsx)(n.h5,{id:"showdiagnostic",children:"showDiagnostic"}),"\n",(0,i.jsx)(n.p,{children:"Si se le da valor true, al producirse un error o una falta de permisos, el sdk mostrar\xe1 una pantalla con el error devuelto por el widget."}),"\n",(0,i.jsx)(n.h5,{id:"showresultaftercapture",children:"showResultAfterCapture"}),"\n",(0,i.jsx)(n.p,{children:"Indica si mostrar o no una pantalla con la imagen capturada del documento despu\xe9s del proceso de an\xe1lisis. En esta pantalla se le da al usuario la posibilidad de repetir el proceso de captura si la imagen que se obtuvo del documento no fuera correcta."}),"\n",(0,i.jsx)(n.h4,{id:"512-configuraci\xf3n-avanzada",children:"5.1.2 Configuraci\xf3n Avanzada"}),"\n",(0,i.jsx)(n.h5,{id:"debug",children:"debug"}),"\n",(0,i.jsx)(n.p,{children:"Activaci\xf3n del modo depuraci\xf3n del componente."}),"\n",(0,i.jsx)(n.h5,{id:"fullscreen",children:"fullscreen"}),"\n",(0,i.jsx)(n.p,{children:"Indica si la vista va a tener prioridad para mostrarse en pantalla\ncompleta, si el sistema lo permite."}),"\n",(0,i.jsx)(n.h5,{id:"croppercent",children:"cropPercent"}),"\n",(0,i.jsx)(n.p,{children:"Permite modificar el porcentaje de recortado de la cara. Cuanto mayor\nsea el n\xfamero mayor ser\xe1 el recorte del rect\xe1ngulo con respecto a la\ncara."}),"\n",(0,i.jsx)(n.h5,{id:"locale",children:"locale"}),"\n",(0,i.jsx)(n.p,{children:"Fuerza al widget a utilizar la configuraci\xf3n de idioma indicado por el\npar\xe1metro locale. Este par\xe1metro acepta tanto un c\xf3digo de idioma (p.\nej. \u2018en\u2019) como un c\xf3digo de identificaci\xf3n regional (p. ej. \u2018en_US\u2019). Si\nel archivo de recursos del widget no tuviera una localizaci\xf3n para el\n\u2018locale\u2019 seleccionado su configuraci\xf3n pasar\xeda a utilizar el idioma por\ndefecto."}),"\n",(0,i.jsx)(n.h5,{id:"livenessmode",children:"livenessMode"}),"\n",(0,i.jsx)(n.p,{children:"Establece el modo liveness del widget. Los valores permitidos son:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphiFaceLivenessMode.NONE"}),": Indica que no debe activarse el modo detecci\xf3n de foto en los procesos de autenticaci\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphiFaceLivenessMode.PASSIVE"}),": Indica que la prueba de vida pasiva se realiza en el servidor, enviando para tal fin la \u201cBestImage\u201d o el \u201cTemplateRaw\u201d correspondiente."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SelphiFaceLivenessMode.MOVE"}),": Indica que el test de liveness es activo, mostrando unas instrucciones durante la captura, y devolviendo el correspondiente resultado del proceso."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"stabilizationmode",children:"stabilizationMode"}),"\n",(0,i.jsx)(n.p,{children:"Establece un modo de estabilizaci\xf3n previo a cualquier proceso de autenticaci\xf3n en el widget. Con este modo se obliga al widget a no empezar ning\xfan proceso si el usuario no se encuentra con la cabeza mirando al frente y sin moverla."}),"\n",(0,i.jsx)(n.h5,{id:"templaterawoptimized",children:"templateRawOptimized"}),"\n",(0,i.jsx)(n.p,{children:"Indica si el template (templateRaw) generado tras el selfie debe optimizarse o no."}),"\n",(0,i.jsx)(n.h5,{id:"qrmode",children:"qrMode"}),"\n",(0,i.jsx)(n.p,{children:"Booleano que indica si se quiere o no activar la lectura de QR previo al proceso de autenticaci\xf3n."}),"\n",(0,i.jsx)(n.h5,{id:"videofilename",children:"videoFilename"}),"\n",(0,i.jsx)(n.p,{children:"Establece la ruta absoluta del nombre del archivo en el que se grabar\xe1\nun video del proceso de captura. La aplicaci\xf3n es la responsable de\nsolicitar los permisos necesarios al tel\xe9fono en caso de que esa ruta\nrequiera de permisos adicionales. El widget, por defecto, no realizar\xe1\nning\xfan proceso de grabaci\xf3n a menos que se especifique una ruta de\narchivo mediante este m\xe9todo."}),"\n",(0,i.jsx)(n.h5,{id:"cameraflashenabled",children:"cameraFlashEnabled"}),"\n",(0,i.jsx)(n.p,{children:"Indica si se activa el flash de la c\xe1mara del dispositivo."}),"\n",(0,i.jsx)(n.h5,{id:"translationscontent",children:"translationsContent"}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad avanzada permite, mediante una cadena en formato xml,\nconfigurar la traducci\xf3n de los literales que se muestran durante el\nproceso."}),"\n",(0,i.jsx)(n.h5,{id:"viewscontent",children:"viewsContent"}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad avanzada permite, mediante una cadena en formato xml,\nconfigurar las vistas del widget."}),"\n",(0,i.jsx)(n.h5,{id:"logimages",children:"logImages"}),"\n",(0,i.jsx)(n.p,{children:"Al activarlo se devuelve una lista con las 5 mejores im\xe1genes tomadas del usuario"}),"\n",(0,i.jsx)(n.h4,{id:"513-otros-parametros",children:"5.1.3 Otros parametros"}),"\n",(0,i.jsx)(n.h5,{id:"vibrationenabled",children:"VibrationEnabled"}),"\n",(0,i.jsx)(n.p,{children:"Si se le da valor true, se activa la vibraci\xf3n en errores y si la respuesta del widget es OK"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Una vez iniciado el componente y creada una nueva operaci\xf3n (",(0,i.jsx)(n.strong,{children:"apartado\n3"}),") se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar\nel componente:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero s\xed se trackear\xe1n los eventos\ninternos al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad\ndel componente con normalidad, pero ",(0,i.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan\nevento al servidor de ",(0,i.jsx)(n.em,{children:"tracking"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,i.jsxs)("div",{class:"warning",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl m\xe9todo ",(0,i.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,i.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite\nutilizar ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," en caso de estar su componente activado, y no lo\nusar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente\ninstalado)."]}),(0,i.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,i.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en\nel cual el integrador tiene instalado y activado el tracking, pero en un\nflujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n.\nEn ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n\na la plataforma."]})]}),"\n",(0,i.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado."}),"\n",(0,i.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,i.jsx)(n.a,{href:"./Mobile_SDK#6-result-return",children:"Retorno de Resultado"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"finishStatus"}),": Que nos indicar\xe1 si la operaci\xf3n ha finalizado correctamente. Posibles valores:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"errorType"}),": Errores propios del widget."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CANCEL_BY_USER\nTIMEOUT\nINTERNAL_ERROR\nEXTRACTION_FINISHED_WITH_NO_RESULTS\nCOULD_NOT_CREATE_WIDGET_INSTANCE\nRESOURCES_FILE_NOT_FOUND\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsx)(n.p,{children:"El campo data es variable y depender\xe1 de qu\xe9 componente se ha devuelto el resultado. En el caso de este componente, los campos devueltos son los siguientes:"}),"\n",(0,i.jsx)(n.h4,{id:"721-template",children:"7.2.1 template"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve la plantilla que se genera despu\xe9s del proceso de extracci\xf3n. V\xe1lida para el proceso de AUTHENTICATION."}),"\n",(0,i.jsx)(n.h4,{id:"722-templateraw",children:"7.2.2 templateRaw"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve la plantilla en bruto que se genera despu\xe9s del proceso de extracci\xf3n. V\xe1lida para el proceso de AUTHENTICATION."}),"\n",(0,i.jsx)(n.h4,{id:"723-bestimagedata",children:"7.2.3 bestImageData"}),"\n",(0,i.jsxs)(n.p,{children:["Devuelve la mejor imagen extra\xedda del proceso de autenticaci\xf3n en formato array de bytes. Esta imagen es la imagen con el tama\xf1o original extra\xedda de la c\xe1mara. V\xe1lido para el proceso de ",(0,i.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"724-bestimagecroppeddata",children:"7.2.4 bestImageCroppedData"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve una imagen recortada centrada en la cara del usuario en formato array de bytes. Esta imagen se obtiene a partir de la bestImage. \xc9sta es la imagen que se deber\xe1 utilizar como imagen caracter\xedstica del usuario que realiz\xf3 el proceso a modo de avatar."}),"\n",(0,i.jsx)(n.h4,{id:"725-qrdata",children:"7.2.5 QrData"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve la informaci\xf3n proveniente de la lectura del QR en formato String"}),"\n",(0,i.jsx)(n.h4,{id:"726-logimages",children:"7.2.6 logImages"}),"\n",(0,i.jsx)(n.p,{children:'Lista con las 5 mejores im\xe1genes capturadas. Se devuelve si se activa el flag "logImages" en la configuraci\xf3n.'}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-controladores-adicionales",children:"8. Controladores Adicionales"}),"\n",(0,i.jsx)(n.h3,{id:"81-rawtemplatecontroller",children:"8.1. RawTemplateController"}),"\n",(0,i.jsx)(n.p,{children:"Controlador para generar un RawTemplate se puede usar tanto la imagen en base64 como en data. ."}),"\n",(0,i.jsx)(n.p,{children:"Ejemplo de uso:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = RawTemplateController(\n\tbase64: bestImageData.base64EncodedString(),\n\toutput: { sdkResult in\n\t\tguard let result = sdkResult.data else {return}\n\t\tprint(result.base64EncodedString())\n\t})\nSDKController.shared.launchMethod(controller: controller)\n"})}),"\n",(0,i.jsx)(n.p,{children:"o"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = RawTemplateController(\n\tdata: bestImageData,\n\toutput: { sdkResult in\n\t\tguard let result = sdkResult.data else {return}\n\t\tprint(result.base64EncodedString())\n\t})\nSDKController.shared.launchMethod(controller: controller)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},225:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var i=a(6540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);