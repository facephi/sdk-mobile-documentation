"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2533],{2518:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(4848),o=r(8453);const i={},s="Tracking Component",l={id:"Tracking_Component",title:"Tracking Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-android/version-1.5.2/Tracking_Component.md",sourceDirName:".",slug:"/Tracking_Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.2/Tracking_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.2",frontMatter:{},sidebar:"sidebar",previous:{title:"Primeros Pasos",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.2/Mobile_SDK"},next:{title:"Selphi Component",permalink:"/sdk-mobile-documentation/es/docs/android/1.5.2/Selphi_Component"}},c={},d=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"5. Configuraci\xf3n del componente",id:"5-configuraci\xf3n-del-componente",level:2},{value:"5.1. Configuraci\xf3n de TrackingController",id:"51-configuraci\xf3n-de-trackingcontroller",level:3},{value:"5.2. Configuraci\xf3n de control de errores",id:"52-configuraci\xf3n-de-control-de-errores",level:3},{value:"5.3. Obtenci\xf3n del ExtraData para comunicaci\xf3n con la Plataforma",id:"53-obtenci\xf3n-del-extradata-para-comunicaci\xf3n-con-la-plataforma",level:3},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"tracking-component",children:"Tracking Component"}),"\n",(0,a.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,a.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,a.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"Tracking Component"})}),". \xc9ste se encarga de realizar el trackeo y\nmonitorizaci\xf3n de la informaci\xf3n obtenida durante la ejecuci\xf3n del resto\nde componentes de la ",(0,a.jsx)(n.strong,{children:"SDKMobile"}),", envi\xe1ndola a los servicios de la\n",(0,a.jsx)(n.strong,{children:"Plataforma"}),". Se podr\xe1 realizar el seguimiento en tiempo real de estos\ndatos en la ",(0,a.jsx)(n.strong,{children:"Plataforma"}),", mientras se est\xe1 ejecutando el proceso en el\ndispositivo del cliente."]}),"\n",(0,a.jsxs)(n.p,{children:["Al contrario que ocurre con el resto, este componente no funciona\nindividualmente, trabaja de forma transversal al resto de componentes\ninstalados en la ",(0,a.jsx)(n.em,{children:"SDKMobile"}),". Para trackear la informaci\xf3n se mantiene\nen segundo plano mientras se ejecuta el proceso de la ",(0,a.jsx)(n.strong,{children:"SDKMobile"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,a.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,a.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,a.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,a.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias. Las dependencias\n",(0,a.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:tracking_component:$sdk_tracking_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,a.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,a.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),", en el que se detalla y explica en qu\xe9 consiste\neste proceso."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Controlador"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TrackingController"}),(0,a.jsx)(n.td,{children:"Controlador principal de tracking"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TrackingErrorController"}),(0,a.jsxs)(n.td,{children:["Controlador para ",(0,a.jsx)(n.strong,{children:"gestionar"})," los posibles ",(0,a.jsx)(n.strong,{children:"errores"})," que ocurran"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ExtraDataController"}),(0,a.jsxs)(n.td,{children:["Controlador para obtener el ",(0,a.jsx)(n.strong,{children:"ExtraData"})," que permite la ",(0,a.jsx)(n.strong,{children:"comunicaci\xf3n"})," desde cliente con el servidor con ",(0,a.jsx)(n.strong,{children:"SelphIDSdk"})," instalado."]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"5-configuraci\xf3n-del-componente",children:"5. Configuraci\xf3n del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Para configurar el componente actual, se realiza en el ",(0,a.jsx)(n.em,{children:"initSdk"}),",\nrevisar el apartado de inicializaci\xf3n en\n",(0,a.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"51-configuraci\xf3n-de-trackingcontroller",children:"5.1. Configuraci\xf3n de TrackingController"}),"\n",(0,a.jsx)(n.p,{children:"Se debe incluir este par\xe1metro durante la inicializaci\xf3n de la SDK."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"SDKController.initSdk(\n    ...\n    trackingController = TrackingController(),\n)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"52-configuraci\xf3n-de-control-de-errores",children:"5.2. Configuraci\xf3n de control de errores"}),"\n",(0,a.jsx)(n.p,{children:"Se podr\xe1 configurar el callback para controlar los errores de tracking:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n     TrackingErrorController {\n        Napier.d("Tracking Error: ${it.name}")\n     }\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["En el ",(0,a.jsx)(n.strong,{children:"apartado 7"})," se muestran los posibles valores de error que\nexisten."]}),"\n",(0,a.jsx)(n.h3,{id:"53-obtenci\xf3n-del-extradata-para-comunicaci\xf3n-con-la-plataforma",children:"5.3. Obtenci\xf3n del ExtraData para comunicaci\xf3n con la Plataforma"}),"\n",(0,a.jsxs)(n.p,{children:["Este controlador (",(0,a.jsx)(n.em,{children:"ExtraDataController"}),") permite obtener un array con\nlos identificadores de la operaci\xf3n actual. Este dato se enviar\xe1 con al\nbackend donde se realizar\xe1n las verificaciones pertinentes."]}),"\n",(0,a.jsxs)(n.p,{children:["La llamada para obtener al extraData, ",(0,a.jsxs)(n.strong,{children:[(0,a.jsx)("u",{children:"necesita la informaci\xf3n de la\noperaci\xf3n en curso"}),","]})," lo cual ",(0,a.jsx)(n.strong,{children:"obliga"})," a que se haya ",(0,a.jsx)(n.strong,{children:"realizado"}),"\ncon anterioridad un ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"newOperation"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    ExtraDataController {\n        when (it) {\n            is SdkResult.Success -> logs.add("ExtraData: OK")\n            is SdkResult.Error -> logs.add(\n                "ExtraData: KO - ${it.error.javaClass.simpleName}"\n            )\n        }\n    }\n)\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Como se ha comentado previamente, una vez inicializado y configurado el\ncomponente de ",(0,a.jsx)(n.strong,{children:"tracking"})," no ser\xe1 necesario lanzarlo, ya que se\nmantendr\xe1 funcionando en segundo plano mientras se ejecutan el resto de\ncomponentes."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,a.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,a.jsx)(n.p,{children:"En la parte del error, dispondremos de la clase TrackingError."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"INIT_IDS_ERROR,\nLICENSE_ERROR,\nAPPLICATION_CONTEXT_ERROR,\nOPERATION_RESULT,\nOPERATION_ID,\nSESSION_ID,\nCUSTOMER_ID,\nSTEP_CHANGE,\nASSET_LINK,\nASSET_UPLOAD,\nOCR_DATA,\nINIT_OPERATION,\nNO_OPERATION_CREATED_ERROR,\nTOKEN_ERROR,\nNETWORK_CONNECTION,\nSEND_BYTEARRAY\n"})}),"\n",(0,a.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var a=r(6540);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);