"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[3345],{8153:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Sample_applications_use","title":"Aplicaciones de ejemplo","description":"Introducci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs-android/version-1.5.3/Sample_applications_use.md","sourceDirName":".","slug":"/Sample_applications_use","permalink":"/sdk-mobile-documentation/es/docs/android/1.5.3/Sample_applications_use","draft":false,"unlisted":false,"tags":[],"version":"1.5.3","frontMatter":{},"sidebar":"sidebar","previous":{"title":"FAQ","permalink":"/sdk-mobile-documentation/es/docs/android/1.5.3/FAQ"}}');var s=a(4848),l=a(8453);const o={},r="Aplicaciones de ejemplo",c={},d=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Pasos para configurar y ejecutar las aplicaciones",id:"pasos-para-configurar-y-ejecutar-las-aplicaciones",level:3},{value:"SdkData - Datos necesarios para el uso del SDK",id:"sdkdata---datos-necesarios-para-el-uso-del-sdk",level:3}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"aplicaciones-de-ejemplo",children:"Aplicaciones de ejemplo"})}),"\n",(0,s.jsx)(n.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Las aplicaciones de ejemplo se pueden encontrar en el repositorio de GitHub:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/facephi/sdk-mobile-android-samples/tree/1.5.X",children:(0,s.jsx)(n.img,{alt:"Android Repository v.1.5.3",src:a(1692).A+"",width:"50",height:"50"})}),(0,s.jsx)("a",{href:"https://github.com/facephi/sdk-mobile-android-samples/tree/1.5.X",rel:"nofollow",children:"Repositorio Demos Android v.1.5.3"})]}),"\n",(0,s.jsx)(n.h3,{id:"pasos-para-configurar-y-ejecutar-las-aplicaciones",children:"Pasos para configurar y ejecutar las aplicaciones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Es necesario incluir el usuario y token facilitado por Facephi en el fichero de local.properties como se indica en la ",(0,s.jsx)("a",{href:"Mobile_SDK#21-a%C3%B1adir-repositorio-privado",rel:"nofollow",children:"documentaci\xf3n del SDK"})]}),"\n",(0,s.jsx)(n.li,{children:"Es necesario incluir el applicationId de la licencia facilitada por Facephi en el Gradle de la aplicaci\xf3n."}),"\n",(0,s.jsx)(n.li,{children:"Rellenar los datos de SdkData."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sdkdata---datos-necesarios-para-el-uso-del-sdk",children:"SdkData - Datos necesarios para el uso del SDK"}),"\n",(0,s.jsx)(n.p,{children:"Para que la aplicaci\xf3n funcione correctamente se deber\xe1n rellenar los siguientes datos."}),"\n",(0,s.jsx)(n.p,{children:"En la clase SdkData:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Datos necesarios si se va a utilizar un servicio para obtener las licencias:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val environmentLicensingData: EnvironmentLicensingData = EnvironmentLicensingData(\n        apiKey = "....."\n    )\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"String de la licencia si no se va a utilizar un servicio:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'const val LICENSE = "...."\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dependiendo de c\xf3mo se haya a\xf1adido la licencia adaptar el valor de la variable:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"  const val LICENSE_ONLINE = false\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Identificador del cliente y tipo de operaci\xf3n que se va a utilizar en la inicializaci\xf3n:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'const val CUSTOMER_ID = "...."\nval OPERATION_TYPE = OperationType.ONBOARDING\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Para Selphi el nombre del fichero ZIP de recursos (que estar\xe1 en la carpeta assets de la aplicaci\xf3n) y los datos de configuraci\xf3n:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'const val SELPHI_RESOURCES = ".....zip"\n\nval selphiConfiguration = SelphiConfigurationData(\n        ...,\n        resourcesPath = SELPHI_RESOURCES\n    )\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Para SelphID el nombre del fichero ZIP de recursos (que estar\xe1 en la carpeta assets de la aplicaci\xf3n) y los datos de configuraci\xf3n:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'const val SELPHID_RESOURCES = "...zip"\n\nval selphIDConfiguration = SelphIDConfigurationData(\n       ...,\n        resourcesPath = SELPHID_RESOURCES\n    )\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"IMPORTANTE: El applicationId de la aplicaci\xf3n debe coincidir con el que se ha solicitado en la licencia"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},1692:(e,n,a)=>{a.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE10lEQVR4nO1ZW6xcYxTeblHEParu4k5EH4aTufzrW7PWnnMcVHg5BIkXIigqgteKB0GlNJVIPIoHb4qUUh6J4KFH1Kn2EHFPVFP3Uxxk7dnTMzN7Zs+/Z2bPETkr+ZPJzOz1/99a379uOwiW5H8qzrlj1blrFVinRJsV2KHAHgH22bLPSjQT/7auSnQNMx8T/BdkcnLy0JDoJgVeF6K/FPgny7JnhOg1AW40XcGopVgsHhYC9wnwddbDp4D6SonuZeZlIwGhwBVKNDssAIlFtKtKdHluAMz1SrQhNwBJQM+Z54cKQlVPVOCDkYHAfrq9N14qLR8KCGY+09w9ahC6AGannWEgEM65E+IwuiggdIFms8y8ol9PLFsMOmkKzfoK0QI8s9iH13YwwMbsITZd6YNGO2a+VIG1SvT5ALSZEaIHpFJZGVUHwPoenpnwAmEhr1eeYOZTO9DQAP2uwJsKrKkxuxpw7vj4+BG2QufOs++qwJ1K9JIS/SzO3T01NXVQCxMqlZU9gOz0ophl7F5W7JZ9C4XCIV7WSvkvEZ3k4ck1qcoNqU/ZMfRE1STMvMKDjl+meiUuAHvympkvyAtI1bmK18VnvqGrEqtiPaPHdXkBUaLVXmcgerWjAosYGUrxh3ME8qxntPtzcmzsqKSCelPk440f7ULmBaQGXKjAH54GvTqhQIie8Hx4fV4gGiLAC55neTxol7gF9XHpWJCzKPOU5z15OfGwJRofXjLzwXkDkXL5fE+P7OgEZLeHBXYHI5AJotM82fF9Ekh90tHrou8LguCAvIEw88XNLIgmMPX1d5th5xIPNyJFyFy1eid07qyJYvG4Wrl8sn1urFEAaRajsqUGW7Z3VAuqntJk2FYRor0x0ncV2CbApxHdiL6NPscrJLo+yFkE2JjCil+brsGeTg9/Ev/4loXYKnCPxWmrWNW5S6zdbFglbyBrg+BA26tWqZyuzl1kkbJKdJVVzkL0qM3CYtrNJB5WYEsM5BGrLgV4UoAXFXhbgOnYIz/Ek8Ob8/SGEM3FU8rPBNiuRO8L8IoAT1sv1Mh5HcsUKzs8Q54p+MU8lQOI29ovdI9zPJRQUnUu9FUQr9+U6JZhUC1qH4geywIiXpJQtqpQONwnBHewyjt2l9o7PR+xztGMYbTtY9+5rn1R0z1pWVGfQnSrJaAUxd8J8Lww32GWEpGza7Xa0Q3dYRgeb32MjUOF6H4rL6zdzQpAF/LL5q4WMst2C3nW8FgPbgf2oZ0d1iaU+61fKi2PvjNK9nt4tJzpytSwZ5Giy4PT9nsIXKbAT2kgDHSPDnAwMES77CypvLXQ202BxfKmEmJLNAmJX+II8IUQbQ2dW5W6Qb3Svn1AIKu9phtC9GFmXmaQyPPd9kDPtc27AheisgDzHeg1P6z8EQeFrPdinpmL2TaqZ9FO0WmvDdZsSNeTpynCzOf0QakNmTcyisV1l/dGWXJJrN/fG0RvZBkAtohNKbJwOav+DJTaPvAbYBE5Q4g+XkQgH1nHGAxDyuXykVZpjhqIEG0d+rv4KCxbid0hmg0biADzQvRUroMOca5g/UFeQASYDoFSMAoxS1kIbn6PYi/8s+pR4Jum0DqrRHeNYtyUEMsjVrYosKlRvmSRuEjdZAXgIDlpSZYkyE/+BcW+JVjSStXbAAAAAElFTkSuQmCC"},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var i=a(6540);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);