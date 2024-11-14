"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4743],{6803:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=i(5893),s=i(1151);const a={},o="Primeros pasos",l={id:"Mobile_SDK",title:"Primeros pasos",description:"1. Introducci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs-react/version-2.0.X/Mobile_SDK.md",sourceDirName:".",slug:"/Mobile_SDK",permalink:"/sdk-mobile-documentation/es/docs/react/Mobile_SDK",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",next:{title:"Core Component",permalink:"/sdk-mobile-documentation/es/docs/react/Core_Component"}},c={},d=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"1.2 Versi\xf3n del plugin",id:"12-versi\xf3n-del-plugin",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. A\xf1adir repositorio privado",id:"21-a\xf1adir-repositorio-privado",level:3},{value:"2.1.1. A\xf1adir repositorio privado: iOS",id:"211-a\xf1adir-repositorio-privado-ios",level:3},{value:"2.2. Instalaci\xf3n del plugin: Common",id:"22-instalaci\xf3n-del-plugin-common",level:3},{value:"2.3 Instalaci\xf3n plugin: iOS",id:"23-instalaci\xf3n-plugin-ios",level:3},{value:"2.3.1 Configuraci\xf3n del proyecto",id:"231-configuraci\xf3n-del-proyecto",level:4},{value:"2.3.2 Actualizar el Podfile",id:"232-actualizar-el-podfile",level:4},{value:"2.3.3 Posibles incidencias",id:"233-posibles-incidencias",level:4},{value:"2.4 Instalaci\xf3n plugin: Android",id:"24-instalaci\xf3n-plugin-android",level:3},{value:"2.4.1 Configuraci\xf3n del proyecto",id:"241-configuraci\xf3n-del-proyecto",level:4},{value:"2.4.2 Establecer la versi\xf3n de Android SDK",id:"242-establecer-la-versi\xf3n-de-android-sdk",level:4}];function t(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"primeros-pasos",children:"Primeros pasos"}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deber\xe1 realizar la instalaci\xf3n de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan a\xf1adir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto."]}),"\n",(0,r.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n m\xednima nativa (Android y iOS) de la SDK son las siguientes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Versi\xf3n m\xednima Android: ",(0,r.jsx)(n.strong,{children:"24"})," & ",(0,r.jsx)(n.strong,{children:"JAVA 17"})]}),"\n",(0,r.jsxs)(n.li,{children:["Versi\xf3n m\xednima Build Tools: ",(0,r.jsx)(n.strong,{children:"8.1.4"})]}),"\n",(0,r.jsxs)(n.li,{children:["Versi\xf3n m\xednima Kotlin Android: ",(0,r.jsx)(n.strong,{children:"1.9.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Versi\xf3n m\xednima iOS: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n",(0,r.jsxs)(n.li,{children:["Versi\xf3n m\xednima ReactNative: ",(0,r.jsx)(n.strong,{children:"0.73.0"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"12-versi\xf3n-del-plugin",children:"1.2 Versi\xf3n del plugin"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n del plugin actual se puede consultar de la siguiente forma:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Buscamos el archivo ",(0,r.jsx)(n.strong,{children:"package.json"})," en la ra\xedz del plugin."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["En el KEY/TAG ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"version"})})," se indica la versi\xf3n."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el plugin actual en un proyecto ya existente. Se tratar\xe1n los siguientes puntos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configurar y a\xf1adir el repositorio privado para acceder a las dependencias de los componentes"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pasos de la instalaci\xf3n comunes a ambas plataformas (Android y iOS)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pasos de la instalaci\xf3n espec\xedficos para iOS"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pasos de la instalaci\xf3n espec\xedficos para Android"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dependencias que se deben a\xf1adir al proyecto"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nPara esta secci\xf3n, se considerar\xe1n los siguiente valores:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<APPLICATION_PATH>"})," - Path a la ra\xedz de la aplicaci\xf3n (ejemplo: /folder/example)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<PLUGIN_CORE_PATH>"})," - Path a la ra\xedz del plugin actual (ejemplo: /folder/sdk-core)"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"21-a\xf1adir-repositorio-privado",children:"2.1. A\xf1adir repositorio privado"}),"\n",(0,r.jsxs)(n.p,{children:["Por cuestiones de seguridad y mantenimiento, los nuevos componentes de la SDKMobile se almacenan en unos repositorios privados que requieren de unas credenciales espec\xedficas para poder acceder a ellos. Esas credenciales deber\xe1 obtenerlas a trav\xe9s del equipo de soporte de ",(0,r.jsx)(n.strong,{children:"Facephi"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para configurar la aplicaci\xf3n y as\xed poder usar estos componentes, se deber\xe1 acceder a ",(0,r.jsx)(n.strong,{children:"<APPLICATION_PATH>"}),". En esa ruta, se debe crear un archivo con el siguiente nombre:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:".npmrc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Dentro de ese fichero se deber\xe1 agregar la informaci\xf3n proporcionada por Facephi (",(0,r.jsx)(n.strong,{children:"Credenciales"}),") para poder descargarse las librer\xedas del repositorio privado:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"registry=https://registry.npmjs.org/\n@facephi:registry=https://facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/\n//facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/:_password=<token-en-base64>\n//facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/:username=<username>\n//facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/:email=<user_email@***.com>\n//facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/:always-auth=true\nsave-prefix='~'\n"})}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nTal y como se muestra en el fragmento anterior, para que el proyecto obtenga correctamente las dependencias, se deber\xe1 rellenar la informaci\xf3n necesaria de forma adecuada (",(0,r.jsx)(n.strong,{children:"password"}),", ",(0,r.jsx)(n.strong,{children:"username"})," y ",(0,r.jsx)(n.strong,{children:"email"}),")"]})}),"\n",(0,r.jsx)(n.h3,{id:"211-a\xf1adir-repositorio-privado-ios",children:"2.1.1. A\xf1adir repositorio privado: iOS"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara acceder a las librer\xedas nativas de iOS se requiere configurar el acceso a nuestros repositorios privados de Cocoapods."]})}),"\n",(0,r.jsx)(n.p,{children:"Para tener acceso a nuestro repositorio privado en iOS, se requiere haber instalado previamente Cocoapods en la m\xe1quina."}),"\n",(0,r.jsxs)(n.p,{children:["Por cuestiones de seguridad y mantenimiento, los nuevos componentes de la ",(0,r.jsx)(n.strong,{children:"SDKMobile"})," se almacenan en unos repositorios privados que requieren de unas credenciales espec\xedficas para poder acceder a ellos. Esas credenciales deber\xe1 obtenerlas a trav\xe9s del equipo de soporte de Facephi. A continuaci\xf3n se indica como preparar el entorno para consumir los componentes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Primero instalamos el comando que nos dar\xe1 acceso a usar cocoapods con ",(0,r.jsx)(n.strong,{children:"Artifactory"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo gem install cocoapods-art\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En caso de utilizar un Mac con ",(0,r.jsx)(n.strong,{children:"chip M1"}),", pueden surgir errores durante la instalaci\xf3n es posible que surjan errores en el futuro, de ser as\xed, se recomienda usar en cambio el siguiente comando:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo arch -arm64 gem install ffi; \nsudo arch -arm64 gem install cocoapods-art\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEn caso de tener problemas con la instalaci\xf3n, desinstalar completamente cocoapods y todas sus dependencias para hacer una instalaci\xf3n limpia."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Necesitaremos a\xf1adir el repositorio a la lista del fichero ",(0,r.jsx)(n.strong,{children:"netrc"}),". Para ello, desde un Terminal, se ejecuta el siguiente comando:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nano ~/.netrc\n"})}),"\n",(0,r.jsx)(n.p,{children:"Y copiamos el siguiente fragmento con los datos correspondientes al final del fichero:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"machine facephicorp.jfrog.io\n  login <USERNAME>\n  password <TOKEN>\n"})}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEs importante copiar de manera exacta el anterior fragmento de c\xf3digo. El indentado previo a las palabras login y password est\xe1 formado por dos espacios."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Se a\xf1adir\xe1 el repositorio que contiene dependencias privada:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Y finalmente se actualiza el repositorio local:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod repo-art update cocoa-pro-fphi\n"})}),"\n",(0,r.jsx)(n.h3,{id:"22-instalaci\xf3n-del-plugin-common",children:"2.2. Instalaci\xf3n del plugin: Common"}),"\n",(0,r.jsxs)(n.p,{children:["El plugin permite la ejecuci\xf3n en platafoma ",(0,r.jsx)(n.strong,{children:"Android y iOS"}),". En esta secci\xf3n se explicaLos pasos comunes a todas instalar el plugin se deben seguir los siguientes pasos:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Asegurarse de que ",(0,r.jsx)(n.strong,{children:"react-native"})," est\xe9 instalado."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Acceda al ",(0,r.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," en un terminal y ejecute:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"yarn add @facephi/sdk-core-react-native\n"})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nSi al ejecutar cualquier comando pod surge un error como el siguiente:\narch: Can't find any plists for install"]}),(0,r.jsxs)(n.p,{children:["Se recomienda ejecutar todos los comandos con ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"arch -x86_64"})})," delante, por ejemplo:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"pod install"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"arch -x86_64 pod install"})}),"\n"]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Es importante verificar que la ruta al complemento est\xe9 correctamente definida en ",(0,r.jsx)(n.strong,{children:"package.json"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"dependencies": {\n  "@facephi/sdk-core-react-native": "^2.0.0",\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de ejecutar los pasos anteriores, puede iniciar la aplicaci\xf3n con el sdk/componente instalado.\nFinalmente, para lanzar los proyectos, se deber\xe1 ejecutar los siguientes comandos de dos maneras:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Desde Terminal"})})}),"\n",(0,r.jsx)(n.p,{children:"Para Android:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx react-native run-android \n\xf3 \nnpx react-native run-android --active-arch-only\n"})}),"\n",(0,r.jsx)(n.p,{children:"Para iOS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx react-native run-ios\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Desde diferentes IDE"})})}),"\n",(0,r.jsx)(n.p,{children:"Los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando Android Studio y XCode respectivamente."}),"\n",(0,r.jsx)(n.h3,{id:"23-instalaci\xf3n-plugin-ios",children:"2.3 Instalaci\xf3n plugin: iOS"}),"\n",(0,r.jsx)(n.h4,{id:"231-configuraci\xf3n-del-proyecto",children:"2.3.1 Configuraci\xf3n del proyecto"}),"\n",(0,r.jsx)(n.p,{children:"Para la versi\xf3n de iOS, a la hora de a\xf1adir nuestro plugin a la aplicaci\xf3n final, previamente se deben tener en cuenta los siguientes puntos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"A\xf1adir los permisos de c\xe1mara"})}),": Para utilizar el widget, es necesario habilitar el permiso de la c\xe1mara en el archivo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"info.plist"})})," de la aplicaci\xf3n (incluido dentro del proyecto en la carpeta ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"ios"})}),"). Se deber\xe1 editar el archivo con un editor de texto y agregar el siguiente par clave/valor:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"232-actualizar-el-podfile",children:"2.3.2 Actualizar el Podfile"}),"\n",(0,r.jsx)(n.p,{children:"En el podfile del proyecto ser\xe1 necesario a\xf1adir la informaci\xf3n del repositorio privado (ver apartado 2.1). Para ello, se deber\xe1 agregar las siguientes lineas al inicio del fichero:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,r.jsx)(n.h4,{id:"233-posibles-incidencias",children:"2.3.3 Posibles incidencias"}),"\n",(0,r.jsx)(n.p,{children:"Si ocurren problemas de entorno o no se actualiza el plugin tras realizar nuevos cambios (por ejemplo, problemas ocurridos debido a que no se genera correctamente el bundle, o no se actualizan las librer\xedas a las versiones adecuadas), se recomienda ejecutar la siguiente secuencia de instrucciones tras lanzar el plugin:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Abrir la carpeta ios de la aplicaci\xf3n en un terminal."}),"\n",(0,r.jsx)(n.li,{children:"Ejecutar el siguiente comando:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Eliminar el Podfile.lock"}),"\n",(0,r.jsx)(n.li,{children:"Ejecutar el siguiente comando (o abrir el proyecto con Xcode y ejecutarlo):"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod install --repo-update  \n"})}),"\n",(0,r.jsx)(n.p,{children:"Y"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod repo-art update cocoa-pro-fphi\n"})}),"\n",(0,r.jsx)(n.h3,{id:"24-instalaci\xf3n-plugin-android",children:"2.4 Instalaci\xf3n plugin: Android"}),"\n",(0,r.jsx)(n.h4,{id:"241-configuraci\xf3n-del-proyecto",children:"2.4.1 Configuraci\xf3n del proyecto"}),"\n",(0,r.jsxs)(n.p,{children:["Para instalar el plugin en el proyecto, el sdk descarga de un repositorio remoto las dependencias necesarias para su correcto funcionamiento, para lo cual se deben ingresar unas credenciales. Para ello, hay que a\xf1adir en el fichero ",(0,r.jsx)(n.em,{children:"build.gradle"})," lo siguiente (dentro de la secci\xf3n ",(0,r.jsx)(n.em,{children:"repositories"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'maven {\n    Properties props = new Properties()\n    def propsFile = new File(\'local.properties\')\n    if(propsFile.exists()){\n        props.load(new FileInputStream(propsFile))\n    }\n    name = "external"\n    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")\n    credentials {\n        username = props["artifactory.user"] ?: System.getenv("USERNAME_ARTIFACTORY")\n        password = props["artifactory.token"] ?: System.getenv("TOKEN_ARTIFACTORY")\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Las credenciales (",(0,r.jsx)(n.em,{children:"Username"})," and ",(0,r.jsx)(n.em,{children:"Token"}),") deben estar correctamente configuradas para poder obtener las dependencias de los repositorios."]}),"\n",(0,r.jsx)(n.p,{children:"Hay varias formas de configurar estas credenciales:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Como variables de entorno. Para ello, se deber\xe1 lanzar desde un Terminal (",(0,r.jsx)(n.strong,{children:"RECOMENDADO"}),"):"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export USERNAME_ARTIFACTORY=YOUR_CREDENTIALS_USERNAME\nexport TOKEN_ARTIFACTORY=YOUR_CREDENTIALS_TOKEN\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Si al ",(0,r.jsx)(n.em,{children:"sincronizar"})," las dependencias no se reconocen, se recomienda incluirlas directamente como variables de entorno en el fichero ",(0,r.jsx)(n.em,{children:"shell"}),":"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"~/.zshrc"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"o"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"~/.bashrc"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"o"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["el ",(0,r.jsx)(n.em,{children:"script shell"})," que se encuentre configurado por defecto."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Incluy\xe9ndolo en el fichero ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"local.properties"})})," con la siguiente estructura:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"artifactory.user=YOUR_CREDENTIALS_USERNAME\nartifactory.token=YOUR_CREDENTIALS_TOKEN\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Directamente incluido como ",(0,r.jsx)(n.em,{children:"build.gradle"})," (",(0,r.jsx)(n.strong,{children:"NO RECOMENDADO"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'maven {\n    Properties props = new Properties()\n    def propsFile = new File(\'local.properties\')\n    if(propsFile.exists()){\n        props.load(new FileInputStream(propsFile))\n    }\n    name = "external"\n    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")\n    credentials {\n        username = YOUR_CREDENTIALS_USERNAME\n        password = YOUR_CREDENTIALS_TOKEN\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"242-establecer-la-versi\xf3n-de-android-sdk",children:"2.4.2 Establecer la versi\xf3n de Android SDK"}),"\n",(0,r.jsx)(n.p,{children:"En el caso de Android, la versi\xf3n m\xednima de SDK requerida por nuestras bibliotecas nativas es 24, por lo que si la aplicaci\xf3n tiene un SDK m\xednimo definido menor que \xe9ste, deber\xe1 modificarse para evitar un error de compilaci\xf3n. Para ello accede al fichero build.gradle de la aplicaci\xf3n (ubicado en la carpeta android) y modifica el siguiente par\xe1metro:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var r=i(7294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);