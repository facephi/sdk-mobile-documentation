"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2913],{194:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=i(5893),t=i(1151);const a={},o="Sample Applications",l={id:"Sample_applications_use",title:"Sample Applications",description:"Introduction",source:"@site/ios_versioned_docs/version-2.2.X/Sample_applications_use.md",sourceDirName:".",slug:"/Sample_applications_use",permalink:"/sdk-mobile-documentation/docs/ios/Sample_applications_use",draft:!1,unlisted:!1,tags:[],version:"2.2.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Flow Component",permalink:"/sdk-mobile-documentation/docs/ios/Flow_Component"}},r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Steps to Set Up and Run the Applications",id:"steps-to-set-up-and-run-the-applications",level:3},{value:"SdkConfigurationManager - Necessary Data for SDK Use",id:"sdkconfigurationmanager---necessary-data-for-sdk-use",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sample-applications",children:"Sample Applications"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"IOS sample applications can be found in the GitHub repository:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/facephi/sdk-mobile-ios-samples/tree/2.2.X",children:(0,s.jsx)(n.img,{alt:"IOS Repository",src:i(54).Z+"",width:"50",height:"50"})}),(0,s.jsx)("a",{href:"https://github.com/facephi/sdk-mobile-ios-samples/tree/2.2.X",rel:"nofollow",children:" IOS Repository"})]}),"\n",(0,s.jsx)(n.h3,{id:"steps-to-set-up-and-run-the-applications",children:"Steps to Set Up and Run the Applications"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["To access our remote repository, you must install Cocoapods on the computer as indicated in ",(0,s.jsx)(n.a,{href:"Mobile_SDK#21-add-private-repository",children:"documentation"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The applicationId from the license provided by Facephi must be included in the application's Bundle Identifier."}),"\n",(0,s.jsx)(n.li,{children:"Fill in the SdkConfigurationManager details."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sdkconfigurationmanager---necessary-data-for-sdk-use",children:"SdkConfigurationManager - Necessary Data for SDK Use"}),"\n",(0,s.jsx)(n.p,{children:"To ensure the application functions correctly, the following data must be filled in."}),"\n",(0,s.jsx)(n.p,{children:"In the SdkConfigurationManager class:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Necessary data if a service is going to be used to obtain the licenses:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'static let APIKEY_LICENSING = "..."\nstatic let LICENSING_URL = URL(string: "...")!\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"License string if a service is not to be used:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'static let license = ""\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Depending on how the license was added adapt the value of the variable:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"static let onlineLicensing = true\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Client identifier and type of operation to be used in the initialization:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'static let CUSTOMER_ID = "sdk-full-ios@ejemplo"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For Selphi, in the selphiConfiguration class, the name of the resource ZIP file (which will be in the application's assets folder) and the configuration data:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'var configSelphi = SelphiConfigurationData()\n\nlet resourcesSelphi: String = {\n    let selphiZipName = "fphi-selphi-widget-resources-sdk"\n    return Bundle.main.path(\n        forResource: selphiZipName,\n        ofType: "zip") ?? ""\n}()\n\n...\nconfigSelphi.resourcesPath = resourcesSelphi\n...\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For SelphID, in the selphIDConfiguration class, the name of the ZIP file of resources (which will be in the application's assets folder) and the configuration data:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'var configSelphID = SelphIDConfigurationData()\n\nlet resourcesSelphID: String = {\n    let selphiZipName = "fphi-selphid-widget-resources-sdk"\n    return Bundle.main.path(\n        forResource: selphiZipName,\n        ofType: "zip") ?? ""\n}()\n\n...\nconfigSelphID.resourcesPath = resourcesSelphID\n...\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To make use of the verification services, the BASE_URL must be included:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'static let BASE_URL = ""\nstatic let METHOD_PASSIVE_LIVENES = ""\nstatic let METHOD_AUTH_FACIAL = ""\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"IMPORTANT: The applicationId of the application must match the one requested in the license"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},54:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE10lEQVR4nO1ZW6xcYxTeblHEParu4k5EH4aTufzrW7PWnnMcVHg5BIkXIigqgteKB0GlNJVIPIoHb4qUUh6J4KFH1Kn2EHFPVFP3Uxxk7dnTMzN7Zs+/Z2bPETkr+ZPJzOz1/99a379uOwiW5H8qzrlj1blrFVinRJsV2KHAHgH22bLPSjQT/7auSnQNMx8T/BdkcnLy0JDoJgVeF6K/FPgny7JnhOg1AW40XcGopVgsHhYC9wnwddbDp4D6SonuZeZlIwGhwBVKNDssAIlFtKtKdHluAMz1SrQhNwBJQM+Z54cKQlVPVOCDkYHAfrq9N14qLR8KCGY+09w9ahC6AGannWEgEM65E+IwuiggdIFms8y8ol9PLFsMOmkKzfoK0QI8s9iH13YwwMbsITZd6YNGO2a+VIG1SvT5ALSZEaIHpFJZGVUHwPoenpnwAmEhr1eeYOZTO9DQAP2uwJsKrKkxuxpw7vj4+BG2QufOs++qwJ1K9JIS/SzO3T01NXVQCxMqlZU9gOz0ophl7F5W7JZ9C4XCIV7WSvkvEZ3k4ck1qcoNqU/ZMfRE1STMvMKDjl+meiUuAHvympkvyAtI1bmK18VnvqGrEqtiPaPHdXkBUaLVXmcgerWjAosYGUrxh3ME8qxntPtzcmzsqKSCelPk440f7ULmBaQGXKjAH54GvTqhQIie8Hx4fV4gGiLAC55neTxol7gF9XHpWJCzKPOU5z15OfGwJRofXjLzwXkDkXL5fE+P7OgEZLeHBXYHI5AJotM82fF9Ekh90tHrou8LguCAvIEw88XNLIgmMPX1d5th5xIPNyJFyFy1eid07qyJYvG4Wrl8sn1urFEAaRajsqUGW7Z3VAuqntJk2FYRor0x0ncV2CbApxHdiL6NPscrJLo+yFkE2JjCil+brsGeTg9/Ev/4loXYKnCPxWmrWNW5S6zdbFglbyBrg+BA26tWqZyuzl1kkbJKdJVVzkL0qM3CYtrNJB5WYEsM5BGrLgV4UoAXFXhbgOnYIz/Ek8Ob8/SGEM3FU8rPBNiuRO8L8IoAT1sv1Mh5HcsUKzs8Q54p+MU8lQOI29ovdI9zPJRQUnUu9FUQr9+U6JZhUC1qH4geywIiXpJQtqpQONwnBHewyjt2l9o7PR+xztGMYbTtY9+5rn1R0z1pWVGfQnSrJaAUxd8J8Lww32GWEpGza7Xa0Q3dYRgeb32MjUOF6H4rL6zdzQpAF/LL5q4WMst2C3nW8FgPbgf2oZ0d1iaU+61fKi2PvjNK9nt4tJzpytSwZ5Giy4PT9nsIXKbAT2kgDHSPDnAwMES77CypvLXQ202BxfKmEmJLNAmJX+II8IUQbQ2dW5W6Qb3Svn1AIKu9phtC9GFmXmaQyPPd9kDPtc27AheisgDzHeg1P6z8EQeFrPdinpmL2TaqZ9FO0WmvDdZsSNeTpynCzOf0QakNmTcyisV1l/dGWXJJrN/fG0RvZBkAtohNKbJwOav+DJTaPvAbYBE5Q4g+XkQgH1nHGAxDyuXykVZpjhqIEG0d+rv4KCxbid0hmg0biADzQvRUroMOca5g/UFeQASYDoFSMAoxS1kIbn6PYi/8s+pR4Jum0DqrRHeNYtyUEMsjVrYosKlRvmSRuEjdZAXgIDlpSZYkyE/+BcW+JVjSStXbAAAAAElFTkSuQmCC"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(7294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);