"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4881],{9945:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(5893),s=a(1151);const r={},o="Aplicaciones de ejemplo",l={id:"Sample_applications_use",title:"Aplicaciones de ejemplo",description:"Introducci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-1.5.x/Sample_applications_use.md",sourceDirName:".",slug:"/Sample_applications_use",permalink:"/sdk-mobile-documentation/es/docs/ios/1.5.x/Sample_applications_use",draft:!1,unlisted:!1,tags:[],version:"1.5.x",frontMatter:{},sidebar:"sidebar",previous:{title:"Video Recording Component",permalink:"/sdk-mobile-documentation/es/docs/ios/1.5.x/Video_Recording_Component"}},c={},d=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Pasos para configurar y ejecutar las aplicaciones",id:"pasos-para-configurar-y-ejecutar-las-aplicaciones",level:3},{value:"1.Integraci\xf3n inicial",id:"1integraci\xf3n-inicial",level:4},{value:"A\xf1adir repositorio privado",id:"a\xf1adir-repositorio-privado",level:5},{value:"2. Licencia",id:"2-licencia",level:4},{value:"3. Configuraci\xf3n",id:"3-configuraci\xf3n",level:4},{value:"SdkData - Datos necesarios para el uso del SDK",id:"sdkdata---datos-necesarios-para-el-uso-del-sdk",level:3}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"aplicaciones-de-ejemplo",children:"Aplicaciones de ejemplo"}),"\n",(0,i.jsx)(n.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Las aplicaciones de ejemplo se pueden encontrar en el repositorio de GitHub:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/facephi/sdk-mobile-ios-samples/tree/1.5.x",children:(0,i.jsx)(n.img,{alt:"IOS Repository",src:a(54).Z+"",width:"50",height:"50"})}),(0,i.jsx)("a",{href:"https://github.com/facephi/sdk-mobile-ios-samples/tree/1.5.x",rel:"nofollow",children:"Repositorio IOS"})]}),"\n",(0,i.jsx)(n.h3,{id:"pasos-para-configurar-y-ejecutar-las-aplicaciones",children:"Pasos para configurar y ejecutar las aplicaciones"}),"\n",(0,i.jsx)(n.h4,{id:"1integraci\xf3n-inicial",children:"1.Integraci\xf3n inicial"}),"\n",(0,i.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente actual en un proyecto ya existente."}),"\n",(0,i.jsx)(n.h5,{id:"a\xf1adir-repositorio-privado",children:"A\xf1adir repositorio privado"}),"\n",(0,i.jsxs)("div",{class:"warning",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara tener acceso a nuestro repositorio privado, se requiere haber instalado previamente ",(0,i.jsx)(n.strong,{children:"Cocoapods"})," en la m\xe1quina."]}),(0,i.jsxs)(n.p,{children:["Por cuestiones de seguridad y mantenimiento, los nuevos componentes de la ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," se almacenan en unos repositorios privados que requieren de unas credenciales espec\xedficas para poder acceder a ellos. Esas credenciales deber\xe1 obtenerlas a trav\xe9s del equipo de soporte de Facephi. A continuaci\xf3n se indica como preparar el entorno para consumir los componentes:"]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Primero instalamos el comando que nos dar\xe1 acceso a usar cocoapods con ",(0,i.jsx)(n.strong,{children:"Artifactory"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"sudo gem install cocoapods-art\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En caso de utilizar un Mac con ",(0,i.jsx)(n.strong,{children:"chip M1"}),", pueden surgir errores durante la instalaci\xf3n es posible que surjan errores en el futuro, de ser as\xed, se recomienda usar en cambio el siguiente comando:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"sudo arch -arm64 gem install ffi; sudo arch -arm64 gem install cocoapods-art\n"})}),"\n",(0,i.jsx)(n.p,{children:"En caso de tener problemas con la instalaci\xf3n, desinstalar completamente cocoapods y todas sus dependencias para hacer una instalaci\xf3n limpia."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Necesitaremos a\xf1adir el repositorio a la lista del fichero ",(0,i.jsx)(n.strong,{children:"netrc"}),". Para ello, desde un Terminal, se ejecuta el siguiente comando:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"$ nano ~/.netrc\n"})}),"\n",(0,i.jsx)(n.p,{children:"Y copiamos el siguiente fragmento con los datos correspondientes al final del fichero:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"machine facephicorp.jfrog.io\n  login <USERNAME>\n  password <TOKEN>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Es importante copiar de manera ",(0,i.jsx)(n.strong,{children:"exacta"})," el anterior fragmento de c\xf3digo. El indentado previo a las palabras ",(0,i.jsx)(n.strong,{children:"login"})," y ",(0,i.jsx)(n.strong,{children:"password"})," est\xe1 formado por dos espacios."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Finalmente se a\xf1adir\xe1 el repositorio que contiene dependencias privada:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"2-licencia",children:"2. Licencia"}),"\n",(0,i.jsx)(n.p,{children:"Es necesario incluir el applicationId de la licencia facilitada por Facephi en el Gradle de la aplicaci\xf3n."}),"\n",(0,i.jsx)(n.h4,{id:"3-configuraci\xf3n",children:"3. Configuraci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Rellenar los datos de SdkData."}),"\n",(0,i.jsx)(n.h3,{id:"sdkdata---datos-necesarios-para-el-uso-del-sdk",children:"SdkData - Datos necesarios para el uso del SDK"}),"\n",(0,i.jsx)(n.p,{children:"Para que la aplicaci\xf3n funcione correctamente se deber\xe1n rellenar los siguientes datos."}),"\n",(0,i.jsx)(n.p,{children:"En la clase SdkData:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Datos necesarios si se va a utilizar un servicio para obtener las licencias:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"licensingUrl"}),"\n",(0,i.jsx)(n.li,{children:"apiKey"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'        SDKController.shared.initSdk(\n            licensingUrl: SdkConfigurationManager.LICENSING_URL,\n            apiKey: SdkConfigurationManager.APIKEY_LICENSING,\n            output: { sdkResult in\n                if sdkResult.finishStatus == .STATUS_OK {\n                    self.sdkData = sdkResult.data ?? ""\n                    self.log("Licencia autom\xe1tica seteada correctamente")\n                } else {\n                    self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n                }\n            })\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"String de la licencia si no se va a utilizar un servicio:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'        SDKController.shared.initSdk(\n            license: SdkConfigurationManager.license,\n            output: { sdkResult in\n                if sdkResult.finishStatus == .STATUS_OK {\n                    self.log("Licencia manual seteada correctamente")\n                } else {\n                    self.log("La licencia manual no es correcta")\n                }\n            })\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identificador del cliente y tipo de operaci\xf3n que se va a utilizar en la inicializaci\xf3n:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'const val CUSTOMER_ID = "...."\nval OPERATION_TYPE = OperationType.ONBOARDING\n\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Para Selphi el nombre del fichero ZIP de recursos (que estar\xe1 en la carpeta assets de la aplicaci\xf3n) y los datos de configuraci\xf3n:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'var configSelphi = SelphiConfigurationData()\n\nlet resourcesSelphi: String = {\n    let selphiZipName = "fphi-selphi-widget-resources-sdk"\n    return Bundle.main.path(\n        forResource: selphiZipName,\n        ofType: "zip") ?? ""\n}()\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Para SelphID el nombre del fichero ZIP de recursos (que estar\xe1 en la carpeta assets de la aplicaci\xf3n) y los datos de configuraci\xf3n:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'var configSelphID = SelphIDConfigurationData()\n\nlet resourcesSelphID: String = {\n    let selphiZipName = "fphi-selphid-widget-resources-sdk"\n    return Bundle.main.path(\n        forResource: selphiZipName,\n        ofType: "zip") ?? ""\n}()\n        \n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"IMPORTANTE: El applicationId de la aplicaci\xf3n debe coincidir con el que se ha solicitado en la licencia"})})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},54:(e,n,a)=>{a.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE10lEQVR4nO1ZW6xcYxTeblHEParu4k5EH4aTufzrW7PWnnMcVHg5BIkXIigqgteKB0GlNJVIPIoHb4qUUh6J4KFH1Kn2EHFPVFP3Uxxk7dnTMzN7Zs+/Z2bPETkr+ZPJzOz1/99a379uOwiW5H8qzrlj1blrFVinRJsV2KHAHgH22bLPSjQT/7auSnQNMx8T/BdkcnLy0JDoJgVeF6K/FPgny7JnhOg1AW40XcGopVgsHhYC9wnwddbDp4D6SonuZeZlIwGhwBVKNDssAIlFtKtKdHluAMz1SrQhNwBJQM+Z54cKQlVPVOCDkYHAfrq9N14qLR8KCGY+09w9ahC6AGannWEgEM65E+IwuiggdIFms8y8ol9PLFsMOmkKzfoK0QI8s9iH13YwwMbsITZd6YNGO2a+VIG1SvT5ALSZEaIHpFJZGVUHwPoenpnwAmEhr1eeYOZTO9DQAP2uwJsKrKkxuxpw7vj4+BG2QufOs++qwJ1K9JIS/SzO3T01NXVQCxMqlZU9gOz0ophl7F5W7JZ9C4XCIV7WSvkvEZ3k4ck1qcoNqU/ZMfRE1STMvMKDjl+meiUuAHvympkvyAtI1bmK18VnvqGrEqtiPaPHdXkBUaLVXmcgerWjAosYGUrxh3ME8qxntPtzcmzsqKSCelPk440f7ULmBaQGXKjAH54GvTqhQIie8Hx4fV4gGiLAC55neTxol7gF9XHpWJCzKPOU5z15OfGwJRofXjLzwXkDkXL5fE+P7OgEZLeHBXYHI5AJotM82fF9Ekh90tHrou8LguCAvIEw88XNLIgmMPX1d5th5xIPNyJFyFy1eid07qyJYvG4Wrl8sn1urFEAaRajsqUGW7Z3VAuqntJk2FYRor0x0ncV2CbApxHdiL6NPscrJLo+yFkE2JjCil+brsGeTg9/Ev/4loXYKnCPxWmrWNW5S6zdbFglbyBrg+BA26tWqZyuzl1kkbJKdJVVzkL0qM3CYtrNJB5WYEsM5BGrLgV4UoAXFXhbgOnYIz/Ek8Ob8/SGEM3FU8rPBNiuRO8L8IoAT1sv1Mh5HcsUKzs8Q54p+MU8lQOI29ovdI9zPJRQUnUu9FUQr9+U6JZhUC1qH4geywIiXpJQtqpQONwnBHewyjt2l9o7PR+xztGMYbTtY9+5rn1R0z1pWVGfQnSrJaAUxd8J8Lww32GWEpGza7Xa0Q3dYRgeb32MjUOF6H4rL6zdzQpAF/LL5q4WMst2C3nW8FgPbgf2oZ0d1iaU+61fKi2PvjNK9nt4tJzpytSwZ5Giy4PT9nsIXKbAT2kgDHSPDnAwMES77CypvLXQ202BxfKmEmJLNAmJX+II8IUQbQ2dW5W6Qb3Svn1AIKu9phtC9GFmXmaQyPPd9kDPtc27AheisgDzHeg1P6z8EQeFrPdinpmL2TaqZ9FO0WmvDdZsSNeTpynCzOf0QakNmTcyisV1l/dGWXJJrN/fG0RvZBkAtohNKbJwOav+DJTaPvAbYBE5Q4g+XkQgH1nHGAxDyuXykVZpjhqIEG0d+rv4KCxbid0hmg0biADzQvRUroMOca5g/UFeQASYDoFSMAoxS1kIbn6PYi/8s+pR4Jum0DqrRHeNYtyUEMsjVrYosKlRvmSRuEjdZAXgIDlpSZYkyE/+BcW+JVjSStXbAAAAAElFTkSuQmCC"},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var i=a(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);