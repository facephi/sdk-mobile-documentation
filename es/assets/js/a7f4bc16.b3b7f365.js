"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5677],{6999:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=a(4848),r=a(8453);const o={},s="Tracking Component",c={id:"Tracking_Component",title:"Tracking Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-2.0.X/Tracking_Component.md",sourceDirName:".",slug:"/Tracking_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/Tracking_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Phingers Component",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/Phingers_Component"},next:{title:"Selphi Component",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/Selphi_Component"}},l={},d=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Configuraci\xf3n del componente",id:"4-configuraci\xf3n-del-componente",level:2},{value:"5. Uso del componente",id:"5-uso-del-componente",level:2},{value:"5.1. Obtenci\xf3n del ExtraData para comunicaci\xf3n con la Plataforma",id:"51-obtenci\xf3n-del-extradata-para-comunicaci\xf3n-con-la-plataforma",level:3},{value:"6. Recepci\xf3n del resultado",id:"6-recepci\xf3n-del-resultado",level:2}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"tracking-component",children:"Tracking Component"})}),"\n",(0,i.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,i.jsx)(n.strong,{children:"Componentes"}),") que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deber\xe1 realizar la instalaci\xf3n de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan a\xf1adir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto."]}),"\n",(0,i.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Mobile SDK"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El ",(0,i.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Tracking Component"})}),". \xc9ste se encarga de realizar el trackeo y\nmonitorizaci\xf3n de la informaci\xf3n obtenida durante la ejecuci\xf3n del resto\nde componentes de la ",(0,i.jsx)(n.strong,{children:"SDKMobile"}),", envi\xe1ndola a los servicios de la\n",(0,i.jsx)(n.strong,{children:"Plataforma"}),". Se podr\xe1 realizar el seguimiento en tiempo real de estos\ndatos en la ",(0,i.jsx)(n.strong,{children:"Plataforma"}),", mientras se est\xe1 ejecutando el proceso en el\ndispositivo del cliente."]}),"\n",(0,i.jsxs)(n.p,{children:["Al contrario que ocurre con el resto, este componente no funciona\nindividualmente, trabaja de forma transversal al resto de componentes\ninstalados en la ",(0,i.jsx)(n.em,{children:"SDKMobile"}),". Para trackear la informaci\xf3n se mantiene\nen segundo plano mientras se ejecuta el proceso de la ",(0,i.jsx)(n.strong,{children:"SDKMobile"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,i.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,i.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,i.jsxs)("div",{class:"warning",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:(0,i.jsx)("u",{children:"Mobile\nSDK"})})})," y seguir las instrucciones indicadas en dicho\ndocumento."]})]}),"\n",(0,i.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente actual en un proyecto ya existente."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versi\xf3n antigua de las librer\xedas de Facephi (Widgets), \xe9stos deber\xe1n eliminarse por completo antes de la instalaci\xf3n de los componentes de la ",(0,i.jsx)(n.strong,{children:"SDKMobile"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,i.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pod 'FPHISDKMainComponent', '~> 2.0.0'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Para instalar el componente de Tracking deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pod 'FPHISDKTrackingComponent', '~> 2.0.0'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En caso de realizar el desarrollo con ",(0,i.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:a(225).A+"",width:"1834",height:"510"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,i.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,i.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,i.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,i.jsx)("strong",{children:(0,i.jsx)("u",{children:"Mobile\nSDK"})})}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-configuraci\xf3n-del-componente",children:"4. Configuraci\xf3n del componente"}),"\n",(0,i.jsx)(n.p,{children:"El controlador de TrackingController solo se a\xf1adir\xe1 en caso de tener el tracking de la sdkMobile."}),"\n",(0,i.jsx)(n.p,{children:"Se a\xf1ade el import:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import trackingComponent\n"})}),"\n",(0,i.jsx)(n.p,{children:"trackingController: trackingController"}),"\n",(0,i.jsx)(n.p,{children:"Inicializamos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'let trackingController = TrackingController(trackingError: { trackingError in\n      print("TRACKING ERROR: \\(trackingError)")\n})\n'})}),"\n",(0,i.jsx)(n.p,{children:"Se a\xf1ade en el initSDK:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia autom\xe1tica seteada correctamente")\n    } else {\n        self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n    }\n}, trackingController: trackingController)\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-uso-del-componente",children:"5. Uso del componente"}),"\n",(0,i.jsxs)(n.p,{children:["Como se ha comentado previamente, una vez inicializado y configurado el\ncomponente de ",(0,i.jsx)(n.strong,{children:"tracking"})," no ser\xe1 necesario lanzarlo, ya que se\nmantendr\xe1 funcionando en segundo plano mientras se ejecutan el resto de\ncomponentes."]}),"\n",(0,i.jsx)(n.h3,{id:"51-obtenci\xf3n-del-extradata-para-comunicaci\xf3n-con-la-plataforma",children:"5.1. Obtenci\xf3n del ExtraData para comunicaci\xf3n con la Plataforma"}),"\n",(0,i.jsx)(n.p,{children:"Este m\xe9todo permite obtener un array con\nlos identificadores de la operaci\xf3n actual. Este dato se enviar\xe1 con al\nbackend donde se realizar\xe1n las verificaciones pertinentes."}),"\n",(0,i.jsxs)(n.p,{children:["La llamada para obtener al extraData, ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)("u",{children:"necesita la informaci\xf3n de la\noperaci\xf3n en curso"}),","]})," lo cual ",(0,i.jsx)(n.strong,{children:"obliga"})," a que se haya ",(0,i.jsx)(n.strong,{children:"realizado"}),"\ncon anterioridad un ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"newOperation"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'    public func launchExtradata() -> SdkResult<String> {\n        log("LAUNCH EXTRADATA")\n        return SDKController.shared.getExtraData()\n    }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"6-recepci\xf3n-del-resultado",children:"6. Recepci\xf3n del resultado"}),"\n",(0,i.jsxs)(n.p,{children:["El resultado es un objeto ",(0,i.jsx)(n.em,{children:"SDKResult"})," que devuelve el SDK tendr\xe1 siempre 3 campos:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"finishStatus"}),": Que nos indicar\xe1 si la operaci\xf3n ha finalizado correctamente. Posibles valores:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"errorType"}),": Si el finishStatus indica que ha habido un error, este campo tendr\xe1 la descripci\xf3n del mismo:"]}),"\n",(0,i.jsxs)(n.p,{children:["Los errores de tracking vienen en el enum ",(0,i.jsx)(n.em,{children:"TrackingError"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"INIT_DATA_ERROR\nASSET_UPLOAD\nINIT_IDS_ERROR\nASSET_LINK\nSTEP_CHANGE\nOCR_DATA\nINIT_OPERATION\nEXTERNAL_EVENT\nOPERATION_RESULT\nCUSTOMER_ID\nTOKEN_ERROR\nSIGNATURE_RESULT\nSESSION_ID\nOPERATION_ID\nFLOW\n"})}),"\n",(0,i.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},225:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>c});var i=a(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);