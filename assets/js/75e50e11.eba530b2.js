"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5630],{225:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}},9368:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Tracking_Component","title":"Tracking Component","description":"0. SDK Mobile baseline requirements","source":"@site/docs/ios/Tracking_Component.md","sourceDirName":".","slug":"/Tracking_Component","permalink":"/sdk-mobile-documentation/docs/ios/next/Tracking_Component","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Phingers Component","permalink":"/sdk-mobile-documentation/docs/ios/next/Phingers_Component"},"next":{"title":"Selphi Component","permalink":"/sdk-mobile-documentation/docs/ios/next/Selphi_Component"}}');var o=i(4848),r=i(8453);const s={},l="Tracking Component",a={},c=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start a new operation",id:"3-start-a-new-operation",level:2},{value:"4. Component configuration",id:"4-component-configuration",level:2},{value:"5. Use of the component",id:"5-use-of-the-component",level:2},{value:"6. Reception of the result",id:"6-reception-of-the-result",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"tracking-component",children:"Tracking Component"})}),"\n",(0,o.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,o.jsxs)(n.p,{children:["For more information on the base configuration, go to the ",(0,o.jsx)(n.a,{href:"./Mobile_SDK#11-minimum-requirements",children:"Getting Started"})," section."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["The component dealt with in the current document is called ",(0,o.jsx)(n.strong,{children:"Tracking\nComponent"}),". It tracks and monitors the information obtained while\nexecuting the rest of the ",(0,o.jsx)(n.strong,{children:"SDKMobile"})," components, sending it to the\n",(0,o.jsx)(n.strong,{children:"Platform"})," services. This data can be tracked in real-time on the\nPlatform, while the process is running on the client's device."]}),"\n",(0,o.jsxs)(n.p,{children:["Unlike the rest, this component does not work individually, it works\ntransversally with the rest of the components installed in the\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"SDKMobile"})}),". To track the information, it is kept in the background\nwhile the SDKMobile process is running."]}),"\n",(0,o.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,o.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,o.jsxs)(n.p,{children:["Minimum iOS version: ",(0,o.jsx)(n.strong,{children:"13"})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,o.jsx)("div",{class:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the\ndocumentation related to ",(0,o.jsx)(n.a,{href:"./Mobile_SDK#2-initial-integration",children:"Initial Integration"})," and follow its instructions."]})}),"\n",(0,o.jsx)(n.p,{children:"To use the Tracking Component with the SDK, it's needed to pass an instance as a param in the initSdk function:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"SDKController.shared.initSdk(\n        ...,\n        trackingController: TrackingController()\n    )\n"})}),"\n",(0,o.jsx)(n.p,{children:"When a TrackingController's instance is provided, the Components will track the SDK process."}),"\n",(0,o.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,o.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, if you want to install\nthe component in a project containing an old Facephi libraries\n(",(0,o.jsx)(n.em,{children:"Widgets"}),") version, these must be removed entirely before installing\nthe ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,o.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,o.jsx)(n.strong,{children:"mandatory"})," dependencies that must be previously installed (by adding them in the Podfile file of the project) are:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,o.jsx)(n.p,{children:"To install the Tracking component, the following entry must be included in the application Podfile:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pod 'FPHISDKTrackingComponent', '~> 1.5.0'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In case of development with ",(0,o.jsx)(n.strong,{children:"xCode15"})," a post-installation script must be included:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Image",src:i(225).A+"",width:"1834",height:"510"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"3-start-a-new-operation",children:"3. Start a new operation"}),"\n",(0,o.jsxs)(n.p,{children:["In order to generate the associated information correctly in the platform, the ",(0,o.jsx)(n.strong,{children:"newOperation"})," command must be executed first."]}),"\n",(0,o.jsx)("div",{class:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,o.jsx)(n.strong,{children:"before launch"}),".\nTo learn more about how to start a new operation, it is recommended to consult the ",(0,o.jsx)(n.a,{href:"./Mobile_SDK#4-start-a-new-operation",children:"Start a new operation"})," documentation, which details and explains what this process consists of."]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"4-component-configuration",children:"4. Component configuration"}),"\n",(0,o.jsx)(n.p,{children:"The TrackingController controller will only be added in case of having the sdkMobile tracking."}),"\n",(0,o.jsx)(n.p,{children:"The import is added:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"import trackingComponent\n"})}),"\n",(0,o.jsx)(n.p,{children:"trackingController: trackingController"}),"\n",(0,o.jsx)(n.p,{children:"Initialize:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'let trackingController = TrackingController(trackingError: { trackingError in\n      print("TRACKING ERROR: \\(trackingError)")\n})\n'})}),"\n",(0,o.jsx)(n.p,{children:"It is added in the initSDK:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'//AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n     if sdkResult.finishStatus == .STATUS_OK {\n         self.log("Automatic license set correctly")\n     } else {\n         self.log("An error occurred while attempting to obtain the license: \\(sdkResult.errorType)")\n     }\n}, trackingController: trackingController)\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"5-use-of-the-component",children:"5. Use of the component"}),"\n",(0,o.jsxs)(n.p,{children:["As previously mentioned, once initialized and configured the\n",(0,o.jsx)(n.strong,{children:"tracking"})," component will not need to be launched, since it will\nwill keep running in the background while the rest of the\ncomponents."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"6-reception-of-the-result",children:"6. Reception of the result"}),"\n",(0,o.jsxs)(n.p,{children:["The result is an ",(0,o.jsx)(n.em,{children:"SDKResult"})," object that is returned by the SDK and will always have 3 fields:"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"finishStatus"}),": Which will tell us if the operation has completed correctly. Possible values:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"FinishStatus.STATUS_OK\nFinishStatus.STATUS_ERROR\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"errorType"}),": If the finishStatus indicates that there has been an error, this field will have the description of the error:"]}),"\n",(0,o.jsxs)(n.p,{children:["Tracking errors come in the ",(0,o.jsx)(n.em,{children:"TrackingError"})," enum:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"INIT_DATA_ERROR\nASSET_UPLOAD\nINIT_IDS_ERROR\nASSET_LINK\nSTEP_CHANGE\nOCR_DATA\nINIT_OPERATION\nEXTERNAL_EVENT\nOPERATION_RESULT\nCUSTOMER_ID\nTOKEN_ERROR\n"})}),"\n",(0,o.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);