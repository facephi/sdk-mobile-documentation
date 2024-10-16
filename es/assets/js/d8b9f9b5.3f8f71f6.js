"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4684],{2318:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var a=o(4848),r=o(8453);const i={},s="Behavior Component",c={id:"Behavior_Component",title:"Behavior Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/current/Behavior_Component.md",sourceDirName:".",slug:"/Behavior_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/next/Behavior_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Configuraci\xf3n del componente",id:"4-configuraci\xf3n-del-componente",level:2},{value:"5. Uso del componente",id:"5-uso-del-componente",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"behavior-component",children:"Behavior Component"})}),"\n",(0,a.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,a.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,a.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK#1-introducci%C3%B3n",children:"Primeros Pasos"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,a.jsx)(n.strong,{children:"Behavior"})," Component / Componente de ",(0,a.jsx)(n.strong,{children:"comportamiento"}),". \xc9ste se\nencarga de realizar el trakeo y an\xe1lisis del comportamiento del usuario\na trav\xe9s de los componentes de la ",(0,a.jsx)(n.strong,{children:"SDKMobile"}),", envi\xe1ndola a los\nservicios de ",(0,a.jsx)(n.strong,{children:"Feedzai"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Al contrario que ocurre con el resto, este componente no funciona\nindividualmente, trabaja de forma transversal al resto de componentes\ninstalados en la ",(0,a.jsx)(n.em,{children:"SDKMobile"}),". Para trackear la informaci\xf3n se mantiene\nen segundo plano mientras se ejecuta el proceso de la ",(0,a.jsx)(n.strong,{children:"SDKMobile"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,a.jsx)("div",{class:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK#2-integraci%C3%B3n-inicial",children:"Integraci\xf3n"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,a.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,a.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,a.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Actualmente las librer\xedas de FacePhi se distribuyen de forma remota\na trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods.\nLas dependencias ",(0,a.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente\n(a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Para instalar el componente de Behavior deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"pod 'FPHISDKBehaviorComponent', '~> 1.5.0'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Una vez instaladas las dependencias, se podr\xe1 hacer uso de las diferentes funcionalidades del componente."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["En caso de realizar el desarrollo con ",(0,a.jsx)(n.strong,{children:"xCode15"})," se deber\xe1 incluir un script de post-instalacion:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:o(225).A+"",width:"1834",height:"510"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la\ninformaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse\npreviamente el comando ",(0,a.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Este comando debe haberse ejecutado ",(0,a.jsx)(n.strong,{children:"anteriormente al lanzamiento del\ncomponente"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda\nconsultar la documentaci\xf3n de ",(0,a.jsx)(n.a,{href:"./Mobile_SDK#4-iniciar-nueva-operaci%C3%B3n",children:"Primeros Pasos"}),", en el que se detalla\ny explica en qu\xe9 consiste este proceso."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"4-configuraci\xf3n-del-componente",children:"4. Configuraci\xf3n del componente"}),"\n",(0,a.jsx)(n.p,{children:"El controlador de BehaviorController solo se a\xf1adir\xe1 en caso de tener el comportamiento de la sdkMobile."}),"\n",(0,a.jsx)(n.p,{children:"Se a\xf1ade el import:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"import behaviorComponent\n"})}),"\n",(0,a.jsx)(n.p,{children:"Inicializamos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\nbehaviorController = BehaviorController(autoLogoutAction: {\n                      print("ACTIVE DEFENSE")\n                      return true\n                    },\n                    behaviorError: { behaviorError in\n                      print("BEHAVIOR ERROR: \\(behaviorError)")\n                    }, debugMode: false)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Se a\xf1ade en el initSDK:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\n// AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia autom\xe1tica seteada correctamente")\n    } else {\n        self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n    }\n}, behaviorController: behaviorController\n\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"5-uso-del-componente",children:"5. Uso del componente"}),"\n",(0,a.jsxs)(n.p,{children:["Como se ha comentado previamente, una vez inicializado y configurado el\ncomponente de ",(0,a.jsx)(n.strong,{children:"behavior/comportamiento"})," no ser\xe1 necesario lanzarlo, ya\nque se mantendr\xe1 funcionando en segundo plano mientras se ejecutan el\nresto de componentes."]}),"\n",(0,a.jsx)(n.p,{children:"Una vez la aplicaci\xf3n ya tenga un identificador de usuario, deber\xe1\nllamar al siguiente proceso para registrar el usuario."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'       behaviorController = BehaviorController(autoLogoutAction: {\n                self.mainVC.showAlert(msg: "ACTIVE DEFENSE")\n                return true\n            },\n            behaviorError: { behaviorError in\n                self.log("BEHAVIOR ERROR: \\(behaviorError)")\n            }, debugMode: false)\n\n'})}),"\n",(0,a.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},225:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var a=o(6540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);