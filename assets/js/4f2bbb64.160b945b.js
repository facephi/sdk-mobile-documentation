"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[9637],{8988:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=i(5893),t=i(1151);const r={},s=void 0,l={id:"Behavior_Component",title:"Behavior_Component",description:"Behavior Component",source:"@site/ios_versioned_docs/version-1.5.X/Behavior_Component.md",sourceDirName:".",slug:"/Behavior_Component",permalink:"/sdk-mobile-documentation/docs/ios/1.5.X/Behavior_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{}},a={},c=[{value:"Behavior Component",id:"behavior-component",level:2},{value:"0. SDK Mobile base requirements",id:"0-sdk-mobile-base-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"4. Use of the component",id:"4-use-of-the-component",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"behavior-component",children:"Behavior Component"}),"\n",(0,o.jsx)(n.h2,{id:"0-sdk-mobile-base-requirements",children:"0. SDK Mobile base requirements"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,o.jsx)(n.strong,{children:"Components"}),") that offers a series of functionalities and services, allowing its integration in a Mobile application in a simple and totally scalable way. Depending on the use case required, certain components must be installed. Its high level of modularity allows other new components to be added in the future without affecting those already integrated in the project"]}),"\n",(0,o.jsxs)(n.p,{children:["For more information on the base configuration, go to the ",(0,o.jsx)(n.a,{href:"./Mobile_SDK#1-introduction",children:"Getting Started"})," section."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.em,{children:"Component"})," dealt with in the current document is called the\n",(0,o.jsx)(n.strong,{children:"*Behaviour"})," Component. It is responsible for\nis in charge of tracking and analysing the user's behaviour\nthrough the ",(0,o.jsx)(n.strong,{children:"SDKMobile"})," components, sending it to the ",(0,o.jsx)(n.strong,{children:"Feedzai"})," services.\nservices of ",(0,o.jsx)(n.strong,{children:"Feedzai"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Unlike the rest, this component does not work individually, it works transversally.\nindividually, it works transversally to the rest of the components installed in the ",(0,o.jsx)(n.strong,{children:"SDKMobile"}),", sending it to the ",(0,o.jsx)(n.strong,{children:"Feedzai"})," services.\ncomponents installed in the ",(0,o.jsx)(n.em,{children:"SDKMobile"}),". In order to track the information, it is kept in the background while the process is running.\nin the background while the ",(0,o.jsx)(n.strong,{children:"SDKMobile"})," process is running."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,o.jsx)(n.p,{children:"This section will explain step by step how to integrate the current component into an existing project."}),"\n",(0,o.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,o.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to install the component in a project containing an old version of the Facephi libraries (Widgets), these must be completely removed before the installation of the ",(0,o.jsx)(n.strong,{children:"SDKMobile"})," components."]}),"\n",(0,o.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,o.jsx)(n.strong,{children:"mandatory"})," dependencies that must be previously installed (by adding them in the Podfile file of the project) are:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,o.jsx)(n.p,{children:"To install the Behaviorcomponent, the following entry must be included in the Podfile of the application:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pod 'FPHISDKBehaviorComponent', '~> 1.5.0'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In case of development with ",(0,o.jsx)(n.strong,{children:"xCode15"})," a post-installation script must be included:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Image",src:i(9232).Z+"",width:"1834",height:"510"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,o.jsx)(n.p,{children:"The BehaviorController will only be added in case of having the sdkMobile behaviour."}),"\n",(0,o.jsx)(n.p,{children:"The import is added:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"import behaviorComponent\n"})}),"\n",(0,o.jsx)(n.p,{children:"Initialise:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\nbehaviorController = BehaviorController(autoLogoutAction: {\n                      print("ACTIVE DEFENSE")\n                      return true\n                    },\n                    behaviorError: { behaviorError in\n                      print("BEHAVIOR ERROR: \\(behaviorError)")\n                    }, debugMode: false)\n'})}),"\n",(0,o.jsx)(n.p,{children:"It is added in the initSDK:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\n// AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia autom\xe1tica seteada correctamente")\n    } else {\n        self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n    }\n}, behaviorController: behaviorController\n\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"4-use-of-the-component",children:"4. Use of the component"}),"\n",(0,o.jsxs)(n.p,{children:["As previously mentioned, once the ",(0,o.jsx)(n.strong,{children:"behaviour/behaviour"})," component has been initialised and configured, it will not be necessary to launch it.\nbehaviour component is initialised and configured, it will not be necessary to launch it, as it will keep running in the background while the\nit will keep running in the background while the rest of the components are running.\nother components are running."]}),"\n",(0,o.jsx)(n.p,{children:"Once the application already has a user identifier, it will have to\ncall the next process to register the user."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'       behaviorController = BehaviorController(autoLogoutAction: {\n                self.mainVC.showAlert(msg: "ACTIVE DEFENSE")\n                return true\n            },\n            behaviorError: { behaviorError in\n                self.log("BEHAVIOR ERROR: \\(behaviorError)")\n            }, debugMode: false)\n\n'})}),"\n",(0,o.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9232:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var o=i(7294);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);