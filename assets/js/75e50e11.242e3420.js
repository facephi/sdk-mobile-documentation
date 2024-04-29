"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5630],{507:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(4848),o=i(8453);const r={},s="Tracking Component",l={id:"Tracking_Component",title:"Tracking Component",description:"0. SDK Mobile basic requirements",source:"@site/docs/ios/Tracking_Component.md",sourceDirName:".",slug:"/Tracking_Component",permalink:"/sdk-mobile-documentation/docs/ios/Tracking_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Capture Component",permalink:"/sdk-mobile-documentation/docs/ios/Capture_Component"},next:{title:"Selphi Component",permalink:"/sdk-mobile-documentation/docs/ios/Selphi_Component"}},c={},a=[{value:"0. SDK Mobile basic requirements",id:"0-sdk-mobile-basic-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"4. Use of the component",id:"4-use-of-the-component",level:2},{value:"5. Reception of the result",id:"5-reception-of-the-result",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tracking-component",children:"Tracking Component"}),"\n",(0,t.jsx)(n.h2,{id:"0-sdk-mobile-basic-requirements",children:"0. SDK Mobile basic requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,t.jsx)(n.strong,{children:"Components"}),") that provides a set of functionalities and services\na series of functionalities and services, allowing its integration in a Mobile application in a\nintegration into a Mobile application in a simple and fully scalable way.\nscalable. Depending on the use case that is required, certain components must be installed.\nDepending on the required use case, certain components must be installed. Its high level of\nof modularity means that other new components can be added in the future\nnew components can be added in the future without affecting those already integrated in the project.\nproject."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the base configuration, go to the [1.5.X][EN] ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"SDK m\xf3vil de iOS"})})}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,t.jsx)(n.strong,{children:"Components"}),") that offers a series of functionalities and services, allowing its integration in a Mobile application in a simple and totally scalable way. Depending on the use case required, certain components must be installed. Its high level of modularity allows other new components to be added in the future without affecting those already integrated in the project."]}),"\n",(0,t.jsxs)(n.p,{children:["The component dealt with in the current document is called ",(0,t.jsx)(n.strong,{children:"Tracking Component"}),". It is in charge of tracking and monitoring the information obtained during the execution of the rest of the ",(0,t.jsx)(n.strong,{children:"SDKMobile"})," components, sending it to the ",(0,t.jsx)(n.strong,{children:"Platform"})," services. This data can be tracked in real time on the ",(0,t.jsx)(n.strong,{children:"Platform"}),", while the process is running on the client's device."]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the rest, this component does not work individually, it works transversally to the rest of the components installed in the ",(0,t.jsx)(n.em,{children:"SDKMobile"}),". To track the information, it is kept in the background while the ",(0,t.jsx)(n.strong,{children:"SDKMobile"})," process is running."]}),"\n",(0,t.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,t.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,t.jsxs)(n.p,{children:["Minimum iOS version: ",(0,t.jsx)(n.strong,{children:"13"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,t.jsxs)(n.p,{children:["Before integrating this component, it is recommended to read the documentation related to [1.5.X][EN] ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)("a",{href:"Mobile_SDK","data-linked-resource-id":"2605678593","data-linked-resource-version":"15","data-linked-resource-type":"page",children:"iOS Mobile SDK"})})})," and follow the instructions given in that document."]}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the current component into an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,t.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to install the component in a project containing an old version of the Facephi libraries (Widgets), these must be completely removed before the installation of the ",(0,t.jsx)(n.strong,{children:"SDKMobile"})," components."]}),"\n",(0,t.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,t.jsx)(n.strong,{children:"mandatory"})," dependencies that must be previously installed (by adding them in the Podfile file of the project) are:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKMainComponent', '~> 1.4.0'\n"})}),"\n",(0,t.jsx)(n.p,{children:"To install the Selphi component, the following entry must be included in the application Podfile:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pod 'FPHISDKTrackingComponent', '~> 1.4.0'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In case of development with ",(0,t.jsx)(n.strong,{children:"xCode15"})," a post-installation script must be included:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(3585).A+"",width:"1834",height:"510"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,t.jsx)(n.p,{children:"The TrackingController controller will only be added in case of having the sdkMobile tracking."}),"\n",(0,t.jsx)(n.p,{children:"The import is added:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"import trackingComponent\n"})}),"\n",(0,t.jsx)(n.p,{children:"trackingController: trackingController"}),"\n",(0,t.jsx)(n.p,{children:"Initialize:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'let trackingController = TrackingController(trackingError: { trackingError in\n      print("TRACKING ERROR: \\(trackingError)")\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:"It is added in the initSDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'//AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n     if sdkResult.finishStatus == .STATUS_OK {\n         self.log("Automatic license set correctly")\n     } else {\n         self.log("An error occurred while attempting to obtain the license: \\(sdkResult.errorType)")\n     }\n}, trackingController: trackingController)\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-use-of-the-component",children:"4. Use of the component"}),"\n",(0,t.jsxs)(n.p,{children:["As previously mentioned, once initialized and configured the\n",(0,t.jsx)(n.strong,{children:"tracking"})," component will not need to be launched, since it will\nwill keep running in the background while the rest of the\ncomponents."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-reception-of-the-result",children:"5. Reception of the result"}),"\n",(0,t.jsxs)(n.p,{children:["The result is an ",(0,t.jsx)(n.em,{children:"SDKResult"})," object that is returned by the SDK and will always have 3 fields:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"finishStatus"}),": Which will tell us if the operation has completed correctly. Possible values:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"errorType"}),": If the finishStatus indicates that there has been an error, this field will have the description of the error:"]}),"\n",(0,t.jsxs)(n.p,{children:["Tracking errors come in the ",(0,t.jsx)(n.em,{children:"TrackingError"})," enum:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"INIT_DATA_ERROR\nASSET_UPLOAD\nINIT_IDS_ERROR\nASSET_LINK\nSTEP_CHANGE\nOCR_DATA\nINIT_OPERATION\nEXTERNAL_EVENT\nOPERATION_RESULT\nCUSTOMER_ID\nTOKEN_ERROR\n"})}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3585:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);