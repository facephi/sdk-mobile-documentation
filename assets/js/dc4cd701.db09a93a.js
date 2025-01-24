"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[1781],{1605:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Sample_applications_use","title":"Sample Applications","description":"Introduction","source":"@site/docs/android/Sample_applications_use.md","sourceDirName":".","slug":"/Sample_applications_use","permalink":"/sdk-mobile-documentation/docs/android/next/Sample_applications_use","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"FAQ","permalink":"/sdk-mobile-documentation/docs/android/next/FAQ"}}');var t=i(4848),a=i(8453);const l={},o="Sample Applications",r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Steps to Set Up and Run the Applications",id:"steps-to-set-up-and-run-the-applications",level:3},{value:"SdkData - Necessary Data for SDK Use",id:"sdkdata---necessary-data-for-sdk-use",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sample-applications",children:"Sample Applications"})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Android sample applications can be found in the GitHub repository:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facephi/sdk-mobile-android-samples/tree/2.2.X",children:(0,t.jsx)(n.img,{alt:"Android Repository v.2.2.X",src:i(1692).A+"",width:"50",height:"50"})}),(0,t.jsx)("a",{href:"https://github.com/facephi/sdk-mobile-android-samples/tree/2.2.X",rel:"nofollow",children:" Android Repository v.2.2.X"})]}),"\n",(0,t.jsx)(n.h3,{id:"steps-to-set-up-and-run-the-applications",children:"Steps to Set Up and Run the Applications"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["It's necessary to include the user and token provided by Facephi in the local.properties file as indicated in ",(0,t.jsx)(n.a,{href:"Mobile_SDK#21-add-private-repository",children:"documentation"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"The applicationId from the license provided by Facephi must be included in the application's Gradle."}),"\n",(0,t.jsx)(n.li,{children:"Fill in the SdkData details."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sdkdata---necessary-data-for-sdk-use",children:"SdkData - Necessary Data for SDK Use"}),"\n",(0,t.jsx)(n.p,{children:"To ensure the application functions correctly, the following data must be filled in."}),"\n",(0,t.jsx)(n.p,{children:"In the SdkData class:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Necessary data if a service is going to be used to obtain the licenses:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val environmentLicensingData: EnvironmentLicensingData = EnvironmentLicensingData(\n        apiKey = "....."\n    )\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"License string if a service is not to be used:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'const val LICENSE = "...."\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Depending on how the license was added adapt the value of the variable:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"  const val LICENSE_ONLINE = false\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Client identifier and type of operation to be used in the initialization:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'const val CUSTOMER_ID = "...."\nval OPERATION_TYPE = OperationType.ONBOARDING\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For Selphi, the name of the ZIP file of resources (which will be in the application's assets folder) and the configuration data:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'const val SELPHI_RESOURCES = ".....zip"\n\nval selphiConfiguration = SelphiConfigurationData(\n        ...,\n        resourcesPath = SELPHI_RESOURCES\n    )\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For SelphID, the name of the ZIP file of resources (which will be in the application's assets folder) and the configuration data:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'const val SELPHID_RESOURCES = "...zip"\n\nval selphIDConfiguration = SelphIDConfigurationData(\n       ...,\n        resourcesPath = SELPHID_RESOURCES\n    )\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To make use of the verification services, the BASE_URL must be included:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'  const val BASE_URL = "..."\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"IMPORTANT: The applicationId of the application must match the one requested in the license"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1692:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE10lEQVR4nO1ZW6xcYxTeblHEParu4k5EH4aTufzrW7PWnnMcVHg5BIkXIigqgteKB0GlNJVIPIoHb4qUUh6J4KFH1Kn2EHFPVFP3Uxxk7dnTMzN7Zs+/Z2bPETkr+ZPJzOz1/99a379uOwiW5H8qzrlj1blrFVinRJsV2KHAHgH22bLPSjQT/7auSnQNMx8T/BdkcnLy0JDoJgVeF6K/FPgny7JnhOg1AW40XcGopVgsHhYC9wnwddbDp4D6SonuZeZlIwGhwBVKNDssAIlFtKtKdHluAMz1SrQhNwBJQM+Z54cKQlVPVOCDkYHAfrq9N14qLR8KCGY+09w9ahC6AGannWEgEM65E+IwuiggdIFms8y8ol9PLFsMOmkKzfoK0QI8s9iH13YwwMbsITZd6YNGO2a+VIG1SvT5ALSZEaIHpFJZGVUHwPoenpnwAmEhr1eeYOZTO9DQAP2uwJsKrKkxuxpw7vj4+BG2QufOs++qwJ1K9JIS/SzO3T01NXVQCxMqlZU9gOz0ophl7F5W7JZ9C4XCIV7WSvkvEZ3k4ck1qcoNqU/ZMfRE1STMvMKDjl+meiUuAHvympkvyAtI1bmK18VnvqGrEqtiPaPHdXkBUaLVXmcgerWjAosYGUrxh3ME8qxntPtzcmzsqKSCelPk440f7ULmBaQGXKjAH54GvTqhQIie8Hx4fV4gGiLAC55neTxol7gF9XHpWJCzKPOU5z15OfGwJRofXjLzwXkDkXL5fE+P7OgEZLeHBXYHI5AJotM82fF9Ekh90tHrou8LguCAvIEw88XNLIgmMPX1d5th5xIPNyJFyFy1eid07qyJYvG4Wrl8sn1urFEAaRajsqUGW7Z3VAuqntJk2FYRor0x0ncV2CbApxHdiL6NPscrJLo+yFkE2JjCil+brsGeTg9/Ev/4loXYKnCPxWmrWNW5S6zdbFglbyBrg+BA26tWqZyuzl1kkbJKdJVVzkL0qM3CYtrNJB5WYEsM5BGrLgV4UoAXFXhbgOnYIz/Ek8Ob8/SGEM3FU8rPBNiuRO8L8IoAT1sv1Mh5HcsUKzs8Q54p+MU8lQOI29ovdI9zPJRQUnUu9FUQr9+U6JZhUC1qH4geywIiXpJQtqpQONwnBHewyjt2l9o7PR+xztGMYbTtY9+5rn1R0z1pWVGfQnSrJaAUxd8J8Lww32GWEpGza7Xa0Q3dYRgeb32MjUOF6H4rL6zdzQpAF/LL5q4WMst2C3nW8FgPbgf2oZ0d1iaU+61fKi2PvjNK9nt4tJzpytSwZ5Giy4PT9nsIXKbAT2kgDHSPDnAwMES77CypvLXQ202BxfKmEmJLNAmJX+II8IUQbQ2dW5W6Qb3Svn1AIKu9phtC9GFmXmaQyPPd9kDPtc27AheisgDzHeg1P6z8EQeFrPdinpmL2TaqZ9FO0WmvDdZsSNeTpynCzOf0QakNmTcyisV1l/dGWXJJrN/fG0RvZBkAtohNKbJwOav+DJTaPvAbYBE5Q4g+XkQgH1nHGAxDyuXykVZpjhqIEG0d+rv4KCxbid0hmg0biADzQvRUroMOca5g/UFeQASYDoFSMAoxS1kIbn6PYi/8s+pR4Jum0DqrRHeNYtyUEMsjVrYosKlRvmSRuEjdZAXgIDlpSZYkyE/+BcW+JVjSStXbAAAAAElFTkSuQmCC"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);