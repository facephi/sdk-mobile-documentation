"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[6162],{3423:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(4848),t=s(8453);const o={},r="Status Component",a={id:"Status_Component",title:"Status Component",description:"1. Introduction",source:"@site/ios_versioned_docs/version-2.2.X/Status_Component.md",sourceDirName:".",slug:"/Status_Component",permalink:"/sdk-mobile-documentation/docs/ios/Status_Component",draft:!1,unlisted:!1,tags:[],version:"2.2.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Recording Component",permalink:"/sdk-mobile-documentation/docs/ios/Video_Recording_Component"},next:{title:"Sample Applications",permalink:"/sdk-mobile-documentation/docs/ios/Sample_applications_use"}},l={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"3. Available controllers",id:"3-available-controllers",level:2},{value:"4 Customize",id:"4-customize",level:2},{value:"4.1 Colors",id:"41-colors",level:3},{value:"4.1.1 Customize colors with xcassets",id:"411-customize-colors-with-xcassets",level:4},{value:"4.1.2 Customize colors with a Theme",id:"412-customize-colors-with-a-theme",level:4},{value:"4.2 Images",id:"42-images",level:3},{value:"4.2.1 Customize images with xcassets",id:"421-customize-images-with-xcassets",level:4},{value:"4.2.2 Customize images with a Theme",id:"422-customize-images-with-a-theme",level:4},{value:"4.3 Fonts",id:"43-fonts",level:3},{value:"4.3.1 Customize fonts",id:"431-customize-fonts",level:4},{value:"4.4 Dimensions",id:"44-dimensions",level:3},{value:"4.4.1 Customize dimensions",id:"441-customize-dimensions",level:4},{value:"4.5 Full Example",id:"45-full-example",level:3},{value:"5 Working Example",id:"5-working-example",level:2},{value:"5.1 Tip View",id:"51-tip-view",level:3},{value:"5.2 Tutorial Views",id:"52-tutorial-views",level:3},{value:"5.3 Diagnostic View",id:"53-diagnostic-view",level:3},{value:"5.4 Permission View",id:"54-permission-view",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"status-component",children:"Status Component"})}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"Component"})," dealt with in the current document is called ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"StatusComponent"})}),". It is in charge of the common UI used in the components. This ",(0,i.jsx)(n.em,{children:"Component"})," can is completely customizable. The elements you can override/change are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Colors"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Images"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dimensions (size values,...)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fonts"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,i.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,i.jsxs)(n.p,{children:["Minimum iOS version: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsxs)(n.p,{children:["Before integrating this component, it is recommended to read the\ndocumentation related to ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow its instructions."]}),"\n",(0,i.jsx)(n.p,{children:"To use the Status Component with the SDK, it's needed to pass an instance as a param in the initSdk function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SDKController.shared.initSdk(\n        ...,\n        statusController: StatusController()\n    )\n"})}),"\n",(0,i.jsx)(n.p,{children:"When a StatusController's instance is provided, the Component's will show a tutorial UI, diagnostic screen on errors and more when launched."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,i.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (adding them in the Podfile file of the project) are:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 2.0.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To install the Status component, the following entry must be included in the application Podfile:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  pod 'FPHISDKStatusComponent', '~> 2.0.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The mandatory dependencies that must have been previously installed are:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To install the Status component, it must be included in the project modules:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-StatusPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-StatusPackage-SPM.git\n"})}),"\n",(0,i.jsx)(n.h2,{id:"3-available-controllers",children:"3. Available controllers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Controller"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Description"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"StatusController"}),(0,i.jsx)(n.td,{children:"Contains the exposed API methods"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-customize",children:"4 Customize"}),"\n",(0,i.jsx)(n.p,{children:'The component\'s customization is managed with "Themes". This themes implement ThemeStatusProtocol:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"public protocol ThemeStatusProtocol {\n    var name: String { get } // Description of the theme\n    var fonts: [R.Font: String] { get }\n    var dimensions: [R.Dimension: CGFloat] { get }\n    var images: [R.Image: UIImage?] { get }\n    var colors: [R.Color: UIColor?] { get }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"A custom theme can edit any of those values. By default there is a ThemeStatus that is used when a param is not configured."}),"\n",(0,i.jsx)(n.h3,{id:"41-colors",children:"4.1 Colors"}),"\n",(0,i.jsx)(n.p,{children:"Available colors to customize:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"enum Color: String, CaseIterable {\n    case sdkPrimaryColor\n    case sdkSecondaryColor\n    case sdkBackgroundColor\n    case sdkTitleTextColor\n    case sdkBodyTextColor\n    case sdkTopIconsColor\n    case sdkButtonTextColor\n    case sdkErrorColor\n    case sdkSuccessColor\n    case sdkNeutralColor\n    case sdkAccentColor\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"By default:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(5889).A+"",width:"426",height:"448"})}),"\n",(0,i.jsx)(n.h4,{id:"411-customize-colors-with-xcassets",children:"4.1.1 Customize colors with xcassets"}),"\n",(0,i.jsx)(n.p,{children:"When used, the StatusComponent will check first if a color asset with the same name as the enum's case exists in the main app."}),"\n",(0,i.jsx)(n.p,{children:'This option overrides the Theme.\nIf the asset is not found in the main app, it will take the value of the configured "Theme".'}),"\n",(0,i.jsx)(n.h4,{id:"412-customize-colors-with-a-theme",children:"4.1.2 Customize colors with a Theme"}),"\n",(0,i.jsx)(n.p,{children:"The colors can be customized with the creation of a Theme class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"import statusComponent\n...\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    ...\n    var colors: [R.Color: UIColor?] = [\n        R.Color.sdkPrimaryColor: UIColor.red,\n        R.Color.sdkBackgroundColor: UIColor.white,\n        ...\n    ]\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"42-images",children:"4.2 Images"}),"\n",(0,i.jsx)(n.p,{children:"Available images to customize:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"enum Image: String, CaseIterable {\n    case ic_sdk_close\n    case ic_sdk_close_arrow\n    case ic_sdk_error_connection\n    case ic_sdk_error_timeout\n    case ic_sdk_unknown_error\n    case ic_sdk_permission_camera\n    case ic_sdk_permission_micro\n    case ic_sdk_permission_generic\n    case ic_sdk_logo\n    case ic_sdk_info\n    case ic_status_success\n    case ic_status_dot_primary\n    case ic_status_dot_variant\n    case ic_sdk_pager_back\n    case ic_sdk_pager_forward\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"By default:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(9983).A+"",width:"496",height:"598"})}),"\n",(0,i.jsx)(n.h4,{id:"421-customize-images-with-xcassets",children:"4.2.1 Customize images with xcassets"}),"\n",(0,i.jsx)(n.p,{children:"When used, the StatusComponent will check first if an image asset with the same name as the enum's case exists in the main app."}),"\n",(0,i.jsx)(n.p,{children:'This option overrides the Theme.\nIf the asset is not found in the main app, it will take the value of the configured "Theme".'}),"\n",(0,i.jsx)(n.h4,{id:"422-customize-images-with-a-theme",children:"4.2.2 Customize images with a Theme"}),"\n",(0,i.jsx)(n.p,{children:"The images can be customized with the creation of a Theme class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'import statusComponent\n...\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    ...\n    var images: [R.Image: UIImage?] = [\n        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),\n        ...\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"43-fonts",children:"4.3 Fonts"}),"\n",(0,i.jsx)(n.p,{children:"Available fonts to customize:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"enum Font: String {\n    case regular\n    case bold\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"By default:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'public var fonts: [R.Font: String] {\n    [.bold: "Poppins-SemiBold",\n     .regular: "Poppins-Regular"]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Poppins-Regular"})}),"\n",(0,i.jsx)(n.img,{alt:"Image",src:s(207).A+"",width:"1950",height:"556"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Poppins-SemiBold"})}),"\n",(0,i.jsx)(n.img,{alt:"Image",src:s(4932).A+"",width:"1946",height:"520"})]}),"\n",(0,i.jsx)(n.h4,{id:"431-customize-fonts",children:"4.3.1 Customize fonts"}),"\n",(0,i.jsx)(n.p,{children:"The fonts can be customized with the creation of a Theme class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'import statusComponent\n...\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    ...\n    var fonts: [R.Font: String] = [\n        .bold: "Comic Sans Bold"\n    ]\n}\n'})}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\n",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"If using a custom font:"})})," The font needs to be registered before launching the component. Every ThemeManager registers its fonts, but this operation is asynchronous and can cause race conditions. While using custom fonts, it's advised to call to the ThemeManager.setup(...) as soon as possible."]})}),"\n",(0,i.jsx)(n.h3,{id:"44-dimensions",children:"4.4 Dimensions"}),"\n",(0,i.jsx)(n.p,{children:"Available dimensions to customize:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"enum Dimension: CGFloat {\n    case fontExtraSmall\n    case fontSmall\n    case fontRegular\n    case fontLarge\n    case fontExtraLarge\n    case radiusCorner\n    case radiusCornerSmall\n    case outlinedBorderWidth\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"By default:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"public var dimensions: [R.Dimension : CGFloat] {\n        [.fontExtraSmall: 16,\n         .fontSmall: 18,\n         .fontRegular: 20,\n         .fontLarge: 24,\n         .fontExtraLarge: 32,\n         .radiusCorner: 30,\n         .radiusCornerSmall: 12,\n         .outlinedBorderWidth: 1]\n"})}),"\n",(0,i.jsx)(n.h4,{id:"441-customize-dimensions",children:"4.4.1 Customize dimensions"}),"\n",(0,i.jsx)(n.p,{children:"The dimensions can be customized with the creation of a Theme class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"import statusComponent\n...\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    ...\n    var dimensions: [R.Dimension: CGFloat] = [\n        .fontBig: 8,\n        R.Dimension.radiusCorner: 5,\n        ...\n    ]\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"45-full-example",children:"4.5 Full Example"}),"\n",(0,i.jsx)(n.p,{children:"A full example of a CustomThemeStatus could be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'import statusComponent\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    var name: String {\n        "custom"\n    }\n\n    var images: [R.Image: UIImage?] = [\n        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),\n        // If the rest is not configured, only the ic_sdk_close_arrow is overrided and customized\n    ]\n\n    var colors: [R.Color: UIColor?] = [\n        R.Color.sdkPrimaryColor: UIColor.red,\n        R.Color.sdkBackgroundColor: UIColor.white,\n    ]\n\n    var dimensions: [R.Dimension: CGFloat] = [\n        .fontBig: 8,\n        R.Dimension.radiusCorner: 5,\n    ]\n    var fonts: [R.Font: String] = [\n        .bold: "Comic Sans Bold"\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Once implemented, we set the instance of our custom theme like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"import statusComponent\n...\nThemeStatusManager.setup(theme: CustomThemeStatus())\n...\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-working-example",children:"5 Working Example"}),"\n",(0,i.jsx)(n.p,{children:"There are four different views inside Status that can be configured."}),"\n",(0,i.jsx)(n.p,{children:"Aside from using a theme, the customization can be done with the assets approach. In this example, we can see the result of creating the following keys and values:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(8980).A+"",width:"1332",height:"672"})}),"\n",(0,i.jsx)(n.h3,{id:"51-tip-view",children:"5.1 Tip View"}),"\n",(0,i.jsxs)(n.p,{children:["The tip is activated by default but can be skipped with the controller's configuration parameter ",(0,i.jsx)(n.em,{children:"showTutorial"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Usually it's the first page the user will see after launching the Controller."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"MobileCapture",src:s(6783).A+"",width:"1020",height:"1942"})}),"\n",(0,i.jsx)(n.h3,{id:"52-tutorial-views",children:"5.2 Tutorial Views"}),"\n",(0,i.jsxs)(n.p,{children:["The tutorial is accessed by the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"More Information"})})," button in the Tip. It's a set of views that further explain the process to the user."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"MobileCapture",src:s(1079).A+"",width:"1020",height:"1942"})}),"\n",(0,i.jsx)(n.h3,{id:"53-diagnostic-view",children:"5.3 Diagnostic View"}),"\n",(0,i.jsx)(n.p,{children:"The Diagnostic view is shown to the user when there is information needed to continue the process."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"MobileCapture",src:s(9708).A+"",width:"1020",height:"1942"})}),"\n",(0,i.jsx)(n.h3,{id:"54-permission-view",children:"5.4 Permission View"}),"\n",(0,i.jsx)(n.p,{children:"Similar to Diagnostic view. It's shown when the capture process needs the user's approval to access some of the device's features. The difference is that this view contains a button that navigates to the device settings."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Missing Camera Permissions"})})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"MobileCapture",src:s(8241).A+"",width:"1020",height:"1942"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Missing Microphone Permissions"})})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"MobileCapture",src:s(9258).A+"",width:"1020",height:"1942"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8980:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_assets_customization-001-b0d3027fb48985a363ea7df7081dd345.png"},5889:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_colors-001-3ff6549ff454d4c3123fd180560da882.png"},9708:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_diagnostic-001-93f1d2377ee6094b8ea2178b5fda8226.png"},207:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_fonts-001-158b84aef2a3be3f6ec73ea51a7d21a3.png"},4932:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_fonts-002-ebe58bb716c786d1a5ee3f82a9e3c929.png"},9983:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_images-001-ab589a77f1644a8afb9d39d94dc2ee6e.png"},8241:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_permissions-001-4d1192d30c1c8f9863306dc02eedade6.png"},9258:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_permissions-002-f3f7b55ebbb28a10c09b154812e9c2cb.png"},6783:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_tips-001-3900628172d91dc132be39913c5a5b41.png"},1079:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/status_tutorial-001-8fb9d5c339858d00a2213aa569c3486c.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);