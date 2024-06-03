"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2910],{8855:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(4848),t=i(8453);const o={},a="Example applications",r={id:"Sample_applications_use",title:"Example applications",description:"Introduction",source:"@site/ios_versioned_docs/version-2.0.X/Sample_applications_use.md",sourceDirName:".",slug:"/Sample_applications_use",permalink:"/sdk-mobile-documentation/docs/ios/Sample_applications_use",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Video recording component",permalink:"/sdk-mobile-documentation/docs/ios/Video_Recording_Component"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Steps to configure and run applications",id:"steps-to-configure-and-run-applications",level:3},{value:"1.Initial integration",id:"1initial-integration",level:4},{value:"Add private repository",id:"add-private-repository",level:5},{value:"2. License",id:"2-license",level:4},{value:"3. Configuration",id:"3-configuration",level:4},{value:"SdkData - Data required to use the SDK",id:"sdkdata---data-required-to-use-the-sdk",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"example-applications",children:"Example applications"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Example applications can be found in the GitHub repository:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/facephi/sdk-mobile-ios-samples/tree/2.0.x",children:(0,s.jsx)(n.img,{alt:"IOS Repository",src:i(1692).A+"",width:"50",height:"50"})}),(0,s.jsx)("a",{href:"https://github.com/facephi/sdk-mobile-ios-samples/tree/2.0.x",rel:"nofollow",children:"IOS Repository"})]}),"\n",(0,s.jsx)(n.h3,{id:"steps-to-configure-and-run-applications",children:"Steps to configure and run applications"}),"\n",(0,s.jsx)(n.h4,{id:"1initial-integration",children:"1.Initial integration"}),"\n",(0,s.jsx)(n.p,{children:"This section will explain step by step how to integrate the current component into an existing project."}),"\n",(0,s.jsx)(n.h5,{id:"add-private-repository",children:"Add private repository"}),"\n",(0,s.jsxs)("div",{class:"warning",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nTo have access to our private repository, it is required to have previously installed ",(0,s.jsx)(n.strong,{children:"Cocoapods"})," on the machine."]}),(0,s.jsxs)(n.p,{children:["For security and maintenance reasons, the new ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SDKMobile"})})," components are stored in private repositories that require specific credentials to access them. These credentials must be obtained through the Facephi support team. Here is how to prepare the environment to consume the components:"]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["First we install the command that will give us access to use cocoapods with ",(0,s.jsx)(n.strong,{children:"Artifactory"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sudo gem install cocoapods-art\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you are using a Mac with ",(0,s.jsx)(n.strong,{children:"M1 chip"}),", errors may occur during installation and errors may arise in the future, if so, it is recommended to use the following command instead:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sudo arch -arm64 gem install ffi; sudo arch -arm64 gem install cocoapods-art\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you have problems with the installation, completely uninstall cocoapods and all its dependencies to do a clean installation."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We will need to add the repository to the list of the ",(0,s.jsx)(n.strong,{children:"netrc"})," file. To do this, from a Terminal, execute the following command:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"$ nano ~/.netrc\n"})}),"\n",(0,s.jsx)(n.p,{children:"And we copy the following fragment with the corresponding data to the end of the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"machine facephicorp.jfrog.io\n   login <USERNAME>\n   password <TOKEN>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It is important to copy ",(0,s.jsx)(n.strong,{children:"exactly"})," the previous code fragment. The indentation before the words ",(0,s.jsx)(n.strong,{children:"login"})," and ",(0,s.jsx)(n.strong,{children:"password"})," is made up of two spaces."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Finally the repository containing private dependencies will be added:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"2-license",children:"2. License"}),"\n",(0,s.jsx)(n.p,{children:"It is necessary to include the applicationId of the license provided by Facephi in the application's Gradle."}),"\n",(0,s.jsx)(n.h4,{id:"3-configuration",children:"3. Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Fill in the SdkData data."}),"\n",(0,s.jsx)(n.h3,{id:"sdkdata---data-required-to-use-the-sdk",children:"SdkData - Data required to use the SDK"}),"\n",(0,s.jsx)(n.p,{children:"For the application to work correctly, the following information must be filled out."}),"\n",(0,s.jsx)(n.p,{children:"In the SdkData class:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Necessary data if a service is going to be used to obtain licenses:\n-licensingUrl"}),"\n",(0,s.jsx)(n.li,{children:"apiKey"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'         SDKController.shared.initSdk(\n             licensingUrl: SdkConfigurationManager.LICENSING_URL,\n             apiKey: SdkConfigurationManager.APIKEY_LICENSING,\n             output: { sdkResult in\n                 if sdkResult.finishStatus == .STATUS_OK {\n                     self.sdkData = sdkResult.data ?? ""\n                     self.log("Automatic license set correctly")\n                 } else {\n                     self.log("An error occurred while attempting to obtain the license: \\(sdkResult.errorType)")\n                 }\n             })\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"String of the license if a service is not going to be used:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'         SDKController.shared.initSdk(\n             license: SdkConfigurationManager.license,\n             output: { sdkResult in\n                 if sdkResult.finishStatus == .STATUS_OK {\n                     self.log("Manual license set correctly")\n                 } else {\n                     self.log("Manual license is not correct")\n                 }\n             })\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Client identifier and type of operation to be used in initialization:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'const val CUSTOMER_ID = "...."\nval OPERATION_TYPE = OperationType.ONBOARDING\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For Selphi the name of the resource ZIP file (which will be in the application's assets folder) and the configuration data:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'var configSelphi = SelphiConfigurationData()\n\nlet resourcesSelphi: String = {\n     let selfhiZipName = "fphi-selphi-widget-resources-sdk"\n     return Bundle.main.path(\n         forResource: selfhiZipName,\n         ofType: "zip") ?? ""\n}()\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For SelphID the name of the resource ZIP file (which will be in the application's assets folder) and the configuration data:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'var configSelphID = SelphIDConfigurationData()\n\nlet resourcesSelphID: String = {\n     let selfhiZipName = "fphi-selphid-widget-resources-sdk"\n     return Bundle.main.path(\n         forResource: selfhiZipName,\n         ofType: "zip") ?? ""\n}()\n        \n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"IMPORTANT: The applicationId of the application must match the one requested in the license"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1692:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE10lEQVR4nO1ZW6xcYxTeblHEParu4k5EH4aTufzrW7PWnnMcVHg5BIkXIigqgteKB0GlNJVIPIoHb4qUUh6J4KFH1Kn2EHFPVFP3Uxxk7dnTMzN7Zs+/Z2bPETkr+ZPJzOz1/99a379uOwiW5H8qzrlj1blrFVinRJsV2KHAHgH22bLPSjQT/7auSnQNMx8T/BdkcnLy0JDoJgVeF6K/FPgny7JnhOg1AW40XcGopVgsHhYC9wnwddbDp4D6SonuZeZlIwGhwBVKNDssAIlFtKtKdHluAMz1SrQhNwBJQM+Z54cKQlVPVOCDkYHAfrq9N14qLR8KCGY+09w9ahC6AGannWEgEM65E+IwuiggdIFms8y8ol9PLFsMOmkKzfoK0QI8s9iH13YwwMbsITZd6YNGO2a+VIG1SvT5ALSZEaIHpFJZGVUHwPoenpnwAmEhr1eeYOZTO9DQAP2uwJsKrKkxuxpw7vj4+BG2QufOs++qwJ1K9JIS/SzO3T01NXVQCxMqlZU9gOz0ophl7F5W7JZ9C4XCIV7WSvkvEZ3k4ck1qcoNqU/ZMfRE1STMvMKDjl+meiUuAHvympkvyAtI1bmK18VnvqGrEqtiPaPHdXkBUaLVXmcgerWjAosYGUrxh3ME8qxntPtzcmzsqKSCelPk440f7ULmBaQGXKjAH54GvTqhQIie8Hx4fV4gGiLAC55neTxol7gF9XHpWJCzKPOU5z15OfGwJRofXjLzwXkDkXL5fE+P7OgEZLeHBXYHI5AJotM82fF9Ekh90tHrou8LguCAvIEw88XNLIgmMPX1d5th5xIPNyJFyFy1eid07qyJYvG4Wrl8sn1urFEAaRajsqUGW7Z3VAuqntJk2FYRor0x0ncV2CbApxHdiL6NPscrJLo+yFkE2JjCil+brsGeTg9/Ev/4loXYKnCPxWmrWNW5S6zdbFglbyBrg+BA26tWqZyuzl1kkbJKdJVVzkL0qM3CYtrNJB5WYEsM5BGrLgV4UoAXFXhbgOnYIz/Ek8Ob8/SGEM3FU8rPBNiuRO8L8IoAT1sv1Mh5HcsUKzs8Q54p+MU8lQOI29ovdI9zPJRQUnUu9FUQr9+U6JZhUC1qH4geywIiXpJQtqpQONwnBHewyjt2l9o7PR+xztGMYbTtY9+5rn1R0z1pWVGfQnSrJaAUxd8J8Lww32GWEpGza7Xa0Q3dYRgeb32MjUOF6H4rL6zdzQpAF/LL5q4WMst2C3nW8FgPbgf2oZ0d1iaU+61fKi2PvjNK9nt4tJzpytSwZ5Giy4PT9nsIXKbAT2kgDHSPDnAwMES77CypvLXQ202BxfKmEmJLNAmJX+II8IUQbQ2dW5W6Qb3Svn1AIKu9phtC9GFmXmaQyPPd9kDPtc27AheisgDzHeg1P6z8EQeFrPdinpmL2TaqZ9FO0WmvDdZsSNeTpynCzOf0QakNmTcyisV1l/dGWXJJrN/fG0RvZBkAtohNKbJwOav+DJTaPvAbYBE5Q4g+XkQgH1nHGAxDyuXykVZpjhqIEG0d+rv4KCxbid0hmg0biADzQvRUroMOca5g/UFeQASYDoFSMAoxS1kIbn6PYi/8s+pR4Jum0DqrRHeNYtyUEMsjVrYosKlRvmSRuEjdZAXgIDlpSZYkyE/+BcW+JVjSStXbAAAAAElFTkSuQmCC"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);