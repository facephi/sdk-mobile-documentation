"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[6917],{112:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"VideoId_Component","title":"VideoId Component","description":"1. Introducci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs-react/version-2.0.X/VideoId_Component.md","sourceDirName":".","slug":"/VideoId_Component","permalink":"/sdk-mobile-documentation/es/docs/react/VideoId_Component","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"VideoCall Component","permalink":"/sdk-mobile-documentation/es/docs/react/VideoCall_Component"},"next":{"title":"Voice Component","permalink":"/sdk-mobile-documentation/es/docs/react/Voice_Component"}}');var s=i(4848),o=i(8453);const l={},a="VideoId Component",d={},c=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"1.2 Versi\xf3n del plugin",id:"12-versi\xf3n-del-plugin",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Instalaci\xf3n del plugin: Common",id:"21-instalaci\xf3n-del-plugin-common",level:3},{value:"2.2 Instalaci\xf3n plugin: iOS",id:"22-instalaci\xf3n-plugin-ios",level:2},{value:"2.2.1 Configuraci\xf3n del proyecto",id:"221-configuraci\xf3n-del-proyecto",level:3},{value:"2.2.2 Actualizar el Podfile",id:"222-actualizar-el-podfile",level:3},{value:"2.2.4 Posibles incidencias",id:"224-posibles-incidencias",level:3},{value:"2.3 Instalaci\xf3n plugin: Android",id:"23-instalaci\xf3n-plugin-android",level:2},{value:"2.3.1 Establecer la versi\xf3n de Android SDK",id:"231-establecer-la-versi\xf3n-de-android-sdk",level:3},{value:"3. Configuraci\xf3n del componente",id:"3-configuraci\xf3n-del-componente",level:2},{value:"3.1 sectionTime",id:"31-sectiontime",level:3},{value:"3.2 timeout",id:"32-timeout",level:3},{value:"3.3 mode",id:"33-mode",level:3},{value:"3.4 showTutorial",id:"34-showtutorial",level:3},{value:"3.5 url",id:"35-url",level:3},{value:"3.6 apiKey",id:"36-apikey",level:3},{value:"3.7 tenantId",id:"37-tenantid",level:3},{value:"3.8 showDiagnostic",id:"38-showdiagnostic",level:3},{value:"3.9 vibration",id:"39-vibration",level:3},{value:"4. Uso del componente",id:"4-uso-del-componente",level:2},{value:"5. Retorno de resultado",id:"5-retorno-de-resultado",level:2},{value:"5.1 finishStatus",id:"51-finishstatus",level:3},{value:"5.2 finishStatusDescription",id:"52-finishstatusdescription",level:3},{value:"5.3 errorType",id:"53-errortype",level:3},{value:"5.4 errorMessage:",id:"54-errormessage",level:3}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"videoid-component",children:"VideoId Component"})}),"\n",(0,s.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El Componente tratado en el documento actual recibe el nombre de ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoID Component"})}),". \xc9ste se encarga de realizar la grabaci\xf3n de un usuario identific\xe1ndose, mostrando la cara y su documento de identidad."]}),"\n",(0,s.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,s.jsx)(n.p,{children:"La versi\xf3n m\xednima nativa (Android y iOS) de la SDK son las siguientes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Versi\xf3n m\xednima Android: ",(0,s.jsx)(n.strong,{children:"24 - JDK 17"})]}),"\n",(0,s.jsxs)(n.li,{children:["Versi\xf3n m\xednima Build Tools: ",(0,s.jsx)(n.strong,{children:"8.1.4"})]}),"\n",(0,s.jsxs)(n.li,{children:["Versi\xf3n m\xednima Kotlin Android: ",(0,s.jsx)(n.strong,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Versi\xf3n m\xednima iOS: ",(0,s.jsx)(n.strong,{children:"13"})]}),"\n",(0,s.jsxs)(n.li,{children:["Versi\xf3n m\xednima ReactNative: ",(0,s.jsx)(n.strong,{children:"0.73.0"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"En cuanto a la arquitectura del dispositivo m\xf3vil:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"armeabi-v7, x86, arm64 y x64"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"12-versi\xf3n-del-plugin",children:"1.2 Versi\xf3n del plugin"}),"\n",(0,s.jsx)(n.p,{children:"La versi\xf3n del plugin actual se puede consultar de la siguiente forma:"}),"\n",(0,s.jsxs)(n.p,{children:["Buscamos el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"package.json"})})," en la ra\xedz del plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["En el ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"KEY/TAG"})})," version se indica la versi\xf3n."]}),"\n",(0,s.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,s.jsxs)(n.p,{children:["Antes de integrar este componente ",(0,s.jsx)(n.strong,{children:"se recomienda"})," leer la documentaci\xf3n relativa a ",(0,s.jsx)(n.strong,{children:"Core Component"})," y seguir las instrucciones indicadas en dicho documento."]}),"\n",(0,s.jsxs)("div",{class:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEn esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente actual en un proyecto ya existente.\nPara esta secci\xf3n, se considerar\xe1n los siguiente valores:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path a la ra\xedz de la aplicaci\xf3n (ejemplo: /folder/example)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path a la ra\xedz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_VIDEOID_PATH%>"})," - Path a la ra\xedz del plugin actual (ejemplo: /folder/sdk-videoid)"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"21-instalaci\xf3n-del-plugin-common",children:"2.1. Instalaci\xf3n del plugin: Common"}),"\n",(0,s.jsxs)(n.p,{children:["El plugin permite la ejecuci\xf3n en platafoma ",(0,s.jsx)(n.strong,{children:"Android y iOS"}),". En esta secci\xf3n se explican los pasos comunes. Para instalar el plugin se deben seguir los siguientes pasos:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Asegurarse de que React Native est\xe9 instalado."}),"\n",(0,s.jsxs)(n.li,{children:["Acceda al ",(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," en un terminal y ejecute:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"yarn add @facephi/sdk-core-react-native\nyarn add @facephi/sdk-videoid-react-native\n"})}),"\n",(0,s.jsx)(n.p,{children:"Es importante verificar que la ruta al complemento est\xe9 correctamente definida en package.json:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"dependencies": {\n  "@facephi/sdk-core-react-native": <% PLUGIN_CORE_PATH %>,\n  "@facephi/sdk-videoid-react-native": <% PLUGIN_VIDEOID_PATH %>\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de ejecutar los pasos anteriores, puede iniciar la aplicaci\xf3n con el sdk/componente instalado.\nFinalmente, para lanzar los proyectos, se deber\xe1 ejecutar los siguientes comandos de dos maneras:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Desde Terminal"})}),"(Para Android):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npx react-native run-android \n\xf3 \nnpx react-native run-android --active-arch-only\n"})}),"\n",(0,s.jsx)(n.p,{children:"Para iOS:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npx react-native run-ios\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Desde diferentes IDE's, los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando ",(0,s.jsx)(n.strong,{children:"Android Studio"})," y ",(0,s.jsx)(n.strong,{children:"XCode"})," respectivamente."]}),"\n",(0,s.jsx)(n.h2,{id:"22-instalaci\xf3n-plugin-ios",children:"2.2 Instalaci\xf3n plugin: iOS"}),"\n",(0,s.jsx)(n.h3,{id:"221-configuraci\xf3n-del-proyecto",children:"2.2.1 Configuraci\xf3n del proyecto"}),"\n",(0,s.jsx)(n.p,{children:"Para la versi\xf3n de iOS, a la hora de a\xf1adir nuestro plugin a la aplicaci\xf3n final, previamente se deben tener en cuenta los siguientes puntos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"A\xf1adir los permisos de c\xe1mara"}),": Para utilizar el component, es necesario habilitar el permiso de la c\xe1mara en el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"info.plist"})})," de la aplicaci\xf3n (incluido dentro del proyecto en la carpeta ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ios"})}),"). Se deber\xe1 editar el archivo con un editor de texto y agregar el siguiente par ",(0,s.jsx)(n.em,{children:"clave/valor"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Agregar permisos de micr\xf3fono:"})," Para usar el componente, debe habilitar el permiso de la c\xe1mara en el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"info.plist"})})," de la aplicaci\xf3n (incluido dentro del proyecto en la carpeta ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ios"})}),") . Necesitar\xe1 editar el archivo con un editor de texto y agregar el siguiente par ",(0,s.jsx)(n.em,{children:"clave/valor"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"<key>NSMicrophoneUsageDescription</key>\n<string>This app needs microphone access</string>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"222-actualizar-el-podfile",children:"2.2.2 Actualizar el Podfile"}),"\n",(0,s.jsx)(n.p,{children:"En el podfile del proyecto ser\xe1 necesario a\xf1adir la informaci\xf3n del repositorio privado (ver apartado 2.1). Para ello, se deber\xe1 agregar las siguientes lineas al inicio del fichero:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nPara saber m\xe1s acerca de la configuraci\xf3n y uso de ",(0,s.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", es necesario acceder al siguiente documento de ",(0,s.jsx)(n.em,{children:"Componente Core"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"224-posibles-incidencias",children:"2.2.4 Posibles incidencias"}),"\n",(0,s.jsx)(n.p,{children:"Si ocurren problemas de entorno o no se actualiza el plugin tras realizar nuevos cambios (por ejemplo, problemas ocurridos debido a que no se genera correctamente el bundle, o no se actualizan las librer\xedas a las versiones adecuadas), se recomienda ejecutar la siguiente secuencia de instrucciones tras lanzar el plugin:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Abrir la carpeta ",(0,s.jsx)(n.strong,{children:"ios"})," de la aplicaci\xf3n en un terminal."]}),"\n",(0,s.jsx)(n.li,{children:"Ejecutar el siguiente comando:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Eliminar el ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,s.jsx)(n.li,{children:"Ejecutar el siguiente comando (o abrir el proyecto con Xcode y ejecutarlo):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod install --repo-update\n"})}),"\n",(0,s.jsx)(n.h2,{id:"23-instalaci\xf3n-plugin-android",children:"2.3 Instalaci\xf3n plugin: Android"}),"\n",(0,s.jsx)(n.h3,{id:"231-establecer-la-versi\xf3n-de-android-sdk",children:"2.3.1 Establecer la versi\xf3n de Android SDK"}),"\n",(0,s.jsxs)(n.p,{children:["En el caso de Android, la versi\xf3n m\xednima de SDK requerida por nuestras bibliotecas nativas es ",(0,s.jsx)(n.strong,{children:"24"}),", por lo que si la aplicaci\xf3n tiene un ",(0,s.jsx)(n.em,{children:"SDK m\xednimo"})," definido menor que \xe9ste, deber\xe1 modificarse para evitar un error de compilaci\xf3n. Para ello accede al fichero ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build.gradle"})})," de la aplicaci\xf3n (ubicado en la carpeta ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"android"})}),") y modifica el siguiente par\xe1metro:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-configuraci\xf3n-del-componente",children:"3. Configuraci\xf3n del componente"}),"\n",(0,s.jsxs)(n.p,{children:["El componente actual contiene una serie de m\xe9todos e interfaces de Typescript incluidos dentro del archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"node_modules/@facephi/sdk-videoid-react-native/src/index.tsx"})}),". En este fichero se puede encontrar la API necesaria para la comunicaci\xf3n entre la aplicaci\xf3n y la funcionalidad nativa del componente. A continuaci\xf3n, se explica para qu\xe9 sirve cada uno de los enumerados y las dem\xe1s propiedades que afectan al funcionamiento del componente."]}),"\n",(0,s.jsxs)(n.p,{children:["A continuaci\xf3n se muestra la clase ",(0,s.jsx)(n.em,{children:"VideoIdConfiguration"}),", que permite configurar el componente de ",(0,s.jsx)(n.strong,{children:"VideoID"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"export interface VideoIdConfiguration {\n  sectionTime?: number;\n  timeout?: number;\n  mode?: VideoMode;\n  showTutorial?: boolean;\n  url?: string;\n  apiKey?: string;\n  tenantId?: string;\n  showDiagnostic?: boolean;\n  vibration?: boolean;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A continuaci\xf3n, se comentar\xe1n todas las propiedades que se pueden definir en el objeto ",(0,s.jsx)(n.strong,{children:"VideoIdConfiguration"}),":"]}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nToda la configuraci\xf3n se podr\xe1 encontrar en el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"src/index.tsx"})})," del componente."]})}),"\n",(0,s.jsx)(n.p,{children:"A la hora de realizar la llamada al component existe una serie de par\xe1metros que se deben incluir. A continuaci\xf3n se comentar\xe1n brevemente."}),"\n",(0,s.jsx)(n.h3,{id:"31-sectiontime",children:"3.1 sectionTime"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Tiempo que se permanecer\xe1 en cada pantalla del proceso en ms."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sectionTime: 5000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-timeout",children:"3.2 timeout"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Indica el tiempo que el componente se cierra por inactividad."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"timeout: 10000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"33-mode",children:"3.3 mode"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"VideoMode"})]}),"\n",(0,s.jsxs)(n.p,{children:["Este enumerado se define en la clase ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SdkVideoIdEnum.tsx"})}),". Modo que se aplicar\xe1 para la grabaci\xf3n. Los posibles valores de VideoIdMode ser\xe1n:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoMode.FACE_DOCUMENT_FRONT"})}),": Tienes que mostrar la cara y la parte frontal del documento."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoMode.ONLY_FACE"})}),": S\xf3lo tienes que mostrar la cara durante el proceso."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoMode.FACE_DOCUMENT_FRONT_BACK"})}),": Tienes que mostrar la cara, la parte frontal y el dorso del documento."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mode: VideoMode.FACE_DOCUMENT_FRONT_BACK;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"34-showtutorial",children:"3.4 showTutorial"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indica si se desea mostrar el tutorial completo del proceso o s\xf3lo la versi\xf3n simplificada."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showTutorial: true;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"35-url",children:"3.5 url"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Ruta al socket de video."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"url: url_provided_by_Facephi\n"})}),"\n",(0,s.jsx)(n.h3,{id:"36-apikey",children:"3.6 apiKey"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"ApiKey necesaria para la conexi\xf3n con el socket de video."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'apiKey: "apiKey_provided_by_Facephi";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"37-tenantid",children:"3.7 tenantId"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Identificador del tenant que hace referencia al cliente actual, necesario para la conexi\xf3n con el servicio de video."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'tenantId: "TenantId_provided_by_Facephi";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"38-showdiagnostic",children:"3.8 showDiagnostic"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indica si se desea mostrar un diagnostico en caso de falla."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showDiagnostic: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"39-vibration",children:"3.9 vibration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indica si se desea habilitar o no la vibraci\xf3n."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" vibration: true;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-uso-del-componente",children:"4. Uso del componente"}),"\n",(0,s.jsx)(n.p,{children:"A continuaci\xf3n se mostrar\xe1 la manera de ejecutar la funcionalidad del componente actual."}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nSe recuerda que para lanzar un componente determinado previamente habr\xe1 que inicializar el SDK con su respectiva licencia, y despu\xe9s iniciar una nueva operaci\xf3n. Para m\xe1s informaci\xf3n consulte la documentaci\xf3n del Componente Core."]})}),"\n",(0,s.jsx)(n.p,{children:"Una vez configurado el componente, para lanzarlo se deber\xe1 ejecutar el siguiente c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'const launchVideoId = async () => \n{ \n  try \n  {\n    console.log("Starting launchVideoId...");\n    return await SdkMobileVideoid.videoid(getVideoIdConfiguration())\n    .then((result: VideoIdResult) => \n    {\n      console.log("result", result);\n    })\n    .catch((error: any) => \n    {\n      console.log(error);\n    })\n    .finally(()=> {\n      console.log("End launchVideoId...");\n    });\n  } \n  catch (error) {\n    setMessage(JSON.stringify(error));\n  }\n};\n\nconst getVideoIdConfiguration = () => \n{\n  let config: VideoIdConfiguration = {\n    sectionTime: 5000,\n    mode: VideoMode.FACE_DOCUMENT_FRONT,\n  };\n  return config;\n};\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-retorno-de-resultado",children:"5. Retorno de resultado"}),"\n",(0,s.jsxs)(n.p,{children:["Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto ",(0,s.jsx)(n.strong,{children:"JSON"})," a trav\xe9s de ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Promises"})}),", ya sea una operaci\xf3n exitosa o un error:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'return await SdkMobileVideoid.videoid(getVideoIdConfiguration())\n.then((result: VideoIdResult) => \n{\n  console.log("result", result);\n})\n.catch((error: any) => \n{\n  console.log(error);\n})\n.finally(()=> {\n  console.log("End launchVideoId...");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Independientemente de si el resultado es correcto/err\xf3neo el resultado tendr\xe1 el siguiente formato:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export interface VideoIdResult \n{\n  finishStatus: number;\n  finishStatusDescription?: string;\n  errorType: string;\n  errorMessage?: string;\n  data?: string;\n}\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEl resultado ser\xe1 devuelto por medio de una Promise que contiene un objeto de la clase ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoIdResult"})}),". A continuaci\xf3n se ampl\xeda informaci\xf3n sobre esos campos."]})}),"\n",(0,s.jsx)(n.h3,{id:"51-finishstatus",children:"5.1 finishStatus"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve el diagn\xf3stico global de la operaci\xf3n."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1"}),": La operaci\xf3n fue exitosa."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"2"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el enumerado ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"errorType"})})," y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"errorMessage"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-finishstatusdescription",children:"5.2 finishStatusDescription"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve el diagn\xf3stico global de la operaci\xf3n."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_OK"}),": La operaci\xf3n fue exitosa."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_ERROR"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el enumerado ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"errorType"})})," y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"errorMessage"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-errortype",children:"5.3 errorType"}),"\n",(0,s.jsxs)(n.p,{children:["Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el par\xe1metro finishStatus con el valor Error). Se definen en la clase ",(0,s.jsx)(n.em,{children:"SdkErrorType"}),". Los valores que puede tener son los siguientes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NoError"}),": No ha ocurrido ning\xfan error. El proceso puede continuar."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnknownError"}),": Error no gestionado. Posiblemente causado por un error en el bundle de recursos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CameraPermissionDenied"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso a la c\xe1mara."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": Excepci\xf3n que se produce cuando el componente no tiene permiso de acceso a la configuraci\xf3n del sistema (",(0,s.jsx)(n.em,{children:"deprecated"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"HardwareError"}),": Excepci\xf3n que surge cuando existe alg\xfan problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ExtractionLicenseError"}),": Excepci\xf3n que ocurre cuando ha habido un problema de licencias en el servidor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Excepci\xf3n que ocurre durante la captura de frames por parte de la c\xe1mara."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ControlNotInitializedError"}),": El configurador del componente no ha sido inicializado."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problema surgido durante la configuraci\xf3n del componente."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CancelByUser"}),":  Excepci\xf3n que se produce cuando el usuario para la extracci\xf3n de forma manual."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TimeOut"}),": Excepci\xf3n que se produce cuando transcurre un tiempo m\xe1ximo sin conseguir finalizar la extracci\xf3n con \xe9xito."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitProccessError"}),": Excepci\xf3n que se produce cuando el sdk no puede procesar las imagenes capturadas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NfcError"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso al nfc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NetworkConnection"}),": Excepci\xf3n que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TokenError"}),": Excepci\xf3n que se produce cuando se pasa por par\xe1metro un token no v\xe1lido."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitSessionError"}),": Excepci\xf3n que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al ",(0,s.jsx)(n.code,{children:"SdkCore"})," al ppio de llamar a cualquier otro componente."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ComponentControllerError"}),": Excepci\xf3n que se produce cuando no se puede instanciar el componente."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"54-errormessage",children:"5.4 errorMessage:"}),"\n",(0,s.jsx)(n.p,{children:"Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(6540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);