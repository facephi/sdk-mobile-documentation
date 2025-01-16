"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8573],{29:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>t});var a=i(5893),s=i(1151);const l={},r="Aplicaciones de ejemplo",o={id:"Sample_applications_use",title:"Aplicaciones de ejemplo",description:"Introducci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-1.5.X/Sample_applications_use.md",sourceDirName:".",slug:"/Sample_applications_use",permalink:"/sdk-mobile-documentation/es/docs/ios/1.5.X/Sample_applications_use",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Recording Component",permalink:"/sdk-mobile-documentation/es/docs/ios/1.5.X/Video_Recording_Component"}},c={},t=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Pasos para configurar y ejecutar las aplicaciones",id:"pasos-para-configurar-y-ejecutar-las-aplicaciones",level:3},{value:"SdkConfigurationManager - Datos necesarios para el uso del SDK",id:"sdkconfigurationmanager---datos-necesarios-para-el-uso-del-sdk",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"aplicaciones-de-ejemplo",children:"Aplicaciones de ejemplo"}),"\n",(0,a.jsx)(n.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Las aplicaciones de ejemplo se pueden encontrar en el repositorio de GitHub:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/facephi/sdk-mobile-ios-samples/tree/1.5.X",children:(0,a.jsx)(n.img,{alt:"IOS Repository",src:i(54).Z+"",width:"50",height:"50"})}),(0,a.jsx)("a",{href:"https://github.com/facephi/sdk-mobile-ios-samples/tree/1.5.X",rel:"nofollow",children:"Repositorio IOS"})]}),"\n",(0,a.jsx)(n.h3,{id:"pasos-para-configurar-y-ejecutar-las-aplicaciones",children:"Pasos para configurar y ejecutar las aplicaciones"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Para tener acceso a nuestro repositorio privado, se requiere haber instalado previamente Cocoapods en la m\xe1quina como se indica en la ",(0,a.jsx)("a",{href:"Mobile_SDK#21-a%C3%B1adir-repositorio-privado",rel:"nofollow",children:"documentaci\xf3n del SDK"})]}),"\n",(0,a.jsx)(n.li,{children:"Es necesario incluir el applicationId de la licencia facilitada por Facephi en el Bundle Identifier de la aplicaci\xf3n."}),"\n",(0,a.jsx)(n.li,{children:"Rellenar los datos de SdkConfigurationManager."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"sdkconfigurationmanager---datos-necesarios-para-el-uso-del-sdk",children:"SdkConfigurationManager - Datos necesarios para el uso del SDK"}),"\n",(0,a.jsx)(n.p,{children:"Para que la aplicaci\xf3n funcione correctamente se deber\xe1n rellenar los siguientes datos."}),"\n",(0,a.jsx)(n.p,{children:"En la clase SdkConfigurationManager:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Datos necesarios si se va a utilizar un servicio para obtener las licencias:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'static let APIKEY_LICENSING = "..."\nstatic let LICENSING_URL = URL(string: "...")!\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"String de la licencia si no se va a utilizar un servicio:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'static let license = ""\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Dependiendo de c\xf3mo se haya a\xf1adido la licencia adaptar el valor de la variable:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"static let onlineLicensing = true\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Identificador del cliente y tipo de operaci\xf3n que se va a utilizar en la inicializaci\xf3n:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'static let CUSTOMER_ID = "sdk-full-ios@ejemplo"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Para Selphi, en la clase selphiConfiguration, el nombre del fichero ZIP de recursos (que estar\xe1 en la carpeta assets de la aplicaci\xf3n) y los datos de configuraci\xf3n:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'var configSelphi = SelphiConfigurationData()\n\nlet resourcesSelphi: String = {\n    let selphiZipName = "fphi-selphi-widget-resources-sdk"\n    return Bundle.main.path(\n        forResource: selphiZipName,\n        ofType: "zip") ?? ""\n}()\n\n...\nconfigSelphi.resourcesPath = resourcesSelphi\n...\n\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Para SelphID, en la clase selphIDConfiguration, el nombre del fichero ZIP de recursos (que estar\xe1 en la carpeta assets de la aplicaci\xf3n) y los datos de configuraci\xf3n:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'var configSelphID = SelphIDConfigurationData()\n\nlet resourcesSelphID: String = {\n    let selphiZipName = "fphi-selphid-widget-resources-sdk"\n    return Bundle.main.path(\n        forResource: selphiZipName,\n        ofType: "zip") ?? ""\n}()\n\n...\nconfigSelphID.resourcesPath = resourcesSelphID\n...\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Para hacer uso de los servicios de verificacion hay que incluir la BASE_URL:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'static let BASE_URL = ""\nstatic let METHOD_PASSIVE_LIVENES = ""\nstatic let METHOD_AUTH_FACIAL = ""\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"IMPORTANTE: El applicationId de la aplicaci\xf3n debe coincidir con el que se ha solicitado en la licencia"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},54:(e,n,i)=>{i.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE10lEQVR4nO1ZW6xcYxTeblHEParu4k5EH4aTufzrW7PWnnMcVHg5BIkXIigqgteKB0GlNJVIPIoHb4qUUh6J4KFH1Kn2EHFPVFP3Uxxk7dnTMzN7Zs+/Z2bPETkr+ZPJzOz1/99a379uOwiW5H8qzrlj1blrFVinRJsV2KHAHgH22bLPSjQT/7auSnQNMx8T/BdkcnLy0JDoJgVeF6K/FPgny7JnhOg1AW40XcGopVgsHhYC9wnwddbDp4D6SonuZeZlIwGhwBVKNDssAIlFtKtKdHluAMz1SrQhNwBJQM+Z54cKQlVPVOCDkYHAfrq9N14qLR8KCGY+09w9ahC6AGannWEgEM65E+IwuiggdIFms8y8ol9PLFsMOmkKzfoK0QI8s9iH13YwwMbsITZd6YNGO2a+VIG1SvT5ALSZEaIHpFJZGVUHwPoenpnwAmEhr1eeYOZTO9DQAP2uwJsKrKkxuxpw7vj4+BG2QufOs++qwJ1K9JIS/SzO3T01NXVQCxMqlZU9gOz0ophl7F5W7JZ9C4XCIV7WSvkvEZ3k4ck1qcoNqU/ZMfRE1STMvMKDjl+meiUuAHvympkvyAtI1bmK18VnvqGrEqtiPaPHdXkBUaLVXmcgerWjAosYGUrxh3ME8qxntPtzcmzsqKSCelPk440f7ULmBaQGXKjAH54GvTqhQIie8Hx4fV4gGiLAC55neTxol7gF9XHpWJCzKPOU5z15OfGwJRofXjLzwXkDkXL5fE+P7OgEZLeHBXYHI5AJotM82fF9Ekh90tHrou8LguCAvIEw88XNLIgmMPX1d5th5xIPNyJFyFy1eid07qyJYvG4Wrl8sn1urFEAaRajsqUGW7Z3VAuqntJk2FYRor0x0ncV2CbApxHdiL6NPscrJLo+yFkE2JjCil+brsGeTg9/Ev/4loXYKnCPxWmrWNW5S6zdbFglbyBrg+BA26tWqZyuzl1kkbJKdJVVzkL0qM3CYtrNJB5WYEsM5BGrLgV4UoAXFXhbgOnYIz/Ek8Ob8/SGEM3FU8rPBNiuRO8L8IoAT1sv1Mh5HcsUKzs8Q54p+MU8lQOI29ovdI9zPJRQUnUu9FUQr9+U6JZhUC1qH4geywIiXpJQtqpQONwnBHewyjt2l9o7PR+xztGMYbTtY9+5rn1R0z1pWVGfQnSrJaAUxd8J8Lww32GWEpGza7Xa0Q3dYRgeb32MjUOF6H4rL6zdzQpAF/LL5q4WMst2C3nW8FgPbgf2oZ0d1iaU+61fKi2PvjNK9nt4tJzpytSwZ5Giy4PT9nsIXKbAT2kgDHSPDnAwMES77CypvLXQ202BxfKmEmJLNAmJX+II8IUQbQ2dW5W6Qb3Svn1AIKu9phtC9GFmXmaQyPPd9kDPtc27AheisgDzHeg1P6z8EQeFrPdinpmL2TaqZ9FO0WmvDdZsSNeTpynCzOf0QakNmTcyisV1l/dGWXJJrN/fG0RvZBkAtohNKbJwOav+DJTaPvAbYBE5Q4g+XkQgH1nHGAxDyuXykVZpjhqIEG0d+rv4KCxbid0hmg0biADzQvRUroMOca5g/UFeQASYDoFSMAoxS1kIbn6PYi/8s+pR4Jum0DqrRHeNYtyUEMsjVrYosKlRvmSRuEjdZAXgIDlpSZYkyE/+BcW+JVjSStXbAAAAAElFTkSuQmCC"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var a=i(7294);const s={},l=a.createContext(s);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);