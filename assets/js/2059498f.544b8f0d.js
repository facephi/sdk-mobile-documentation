"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[3764],{7105:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=i(4848),s=i(8453);const o={},a="VideoId Component",d={id:"VideoId_Component",title:"VideoId Component",description:"1. Introducci\xf3n",source:"@site/flutter_versioned_docs/version-2.0.X/VideoId_Component.md",sourceDirName:".",slug:"/VideoId_Component",permalink:"/sdk-mobile-documentation/docs/flutter/VideoId_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"VideoCall Component",permalink:"/sdk-mobile-documentation/docs/flutter/VideoCall_Component"},next:{title:"Voice Component",permalink:"/sdk-mobile-documentation/docs/flutter/Voice_Component"}},l={},c=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"1.2 Versi\xf3n del plugin",id:"12-versi\xf3n-del-plugin",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Instalaci\xf3n del plugin: Common",id:"21-instalaci\xf3n-del-plugin-common",level:3},{value:"2.2 Instalaci\xf3n plugin: iOS",id:"22-instalaci\xf3n-plugin-ios",level:2},{value:"2.2.1 Configuraci\xf3n del proyecto",id:"221-configuraci\xf3n-del-proyecto",level:3},{value:"2.2.2 Actualizar el Podfile",id:"222-actualizar-el-podfile",level:3},{value:"2.2.3 Establecer la versi\xf3n de Swift",id:"223-establecer-la-versi\xf3n-de-swift",level:3},{value:"2.2.4 Posibles incidencias",id:"224-posibles-incidencias",level:3},{value:"2.3 Instalaci\xf3n plugin: Android",id:"23-instalaci\xf3n-plugin-android",level:2},{value:"2.3.1 Establecer la versi\xf3n de Android SDK",id:"231-establecer-la-versi\xf3n-de-android-sdk",level:3},{value:"2.3.2 Permisos para geolocalizaci\xf3n",id:"232-permisos-para-geolocalizaci\xf3n",level:3},{value:"3. Configuraci\xf3n del componente",id:"3-configuraci\xf3n-del-componente",level:2},{value:"3.1 mTime",id:"31-mtime",level:3},{value:"3.2 mode",id:"32-mode",level:3},{value:"3.4 mShowTutorial",id:"34-mshowtutorial",level:3},{value:"3.5 mUrl",id:"35-murl",level:3},{value:"3.6 mApiKey",id:"36-mapikey",level:3},{value:"3.7 mTenantId",id:"37-mtenantid",level:3},{value:"3.8 mShowDiagnostic",id:"38-mshowdiagnostic",level:3},{value:"4. Uso del componente",id:"4-uso-del-componente",level:2},{value:"5. Retorno de resultado",id:"5-retorno-de-resultado",level:2},{value:"5.0 finishStatus",id:"50-finishstatus",level:3},{value:"5.1 finishStatusDescription",id:"51-finishstatusdescription",level:3},{value:"5.2 errorDiagnostic",id:"52-errordiagnostic",level:3},{value:"5.3 errorMessage:",id:"53-errormessage",level:3}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"videoid-component",children:"VideoId Component"}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El Componente tratado en el documento actual recibe el nombre de ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"VideoID Component"})}),". \xc9ste se encarga de realizar la grabaci\xf3n de un usuario identific\xe1ndose, mostrando la cara y su documento de identidad."]}),"\n",(0,r.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n m\xednima nativa (Android y iOS) de la SDK son las siguientes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Versi\xf3n m\xednima Android: ",(0,r.jsx)(n.strong,{children:"24 - JDK 11"})]}),"\n",(0,r.jsxs)(n.li,{children:["Versi\xf3n m\xednima iOS: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"En cuanto a la arquitectura del dispositivo m\xf3vil:"}),"\n",(0,r.jsx)(n.p,{children:"armeabi-v7, x86, arm64 y x64"}),"\n",(0,r.jsx)(n.h3,{id:"12-versi\xf3n-del-plugin",children:"1.2 Versi\xf3n del plugin"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n del plugin actual se puede consultar de la siguiente forma:"}),"\n",(0,r.jsxs)(n.p,{children:["Buscamos el archivo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"pubspec.yaml"})})," en la ra\xedz del plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["En el ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"KEY/TAG"})})," version se indica la versi\xf3n."]}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Antes de integrar este componente ",(0,r.jsx)(n.strong,{children:"se recomienda"})," leer la documentaci\xf3n relativa a ",(0,r.jsx)(n.strong,{children:"Core Component"})," y seguir las instrucciones indicadas en dicho documento."]}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEn esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente actual en un proyecto ya existente.\nPara esta secci\xf3n, se considerar\xe1n los siguiente valores:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path a la ra\xedz de la aplicaci\xf3n (ejemplo: /folder/example)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path a la ra\xedz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%PLUGIN_VIDEOID_PATH%>"})," - Path a la ra\xedz del plugin actual (ejemplo: /folder/sdk-videoid)"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"21-instalaci\xf3n-del-plugin-common",children:"2.1. Instalaci\xf3n del plugin: Common"}),"\n",(0,r.jsxs)(n.p,{children:["El plugin permite la ejecuci\xf3n en platafoma ",(0,r.jsx)(n.strong,{children:"Android y iOS"}),". En esta secci\xf3n se explican los pasos comunes. Para instalar el plugin se deben seguir los siguientes pasos:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Asegurarse de que Flutter est\xe9 instalado."}),"\n",(0,r.jsx)(n.li,{children:"Acceda al APPLICATION_PATH en un terminal y ejecute:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Acceda al ",(0,r.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"}),", y en el fichero pubspec.yaml y a\xf1adir:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"fphi_sdkmobile_videoid:\n  hosted:\n    name: sdkvideoid\n    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/\n  version: ^2.0.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Despu\xe9s de ejecutar los pasos anteriores, puede iniciar la aplicaci\xf3n con el sdk/componente instalado.\nDesde diferentes IDE's, los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando ",(0,r.jsx)(n.strong,{children:"Android Studio"})," y ",(0,r.jsx)(n.strong,{children:"XCode"})," respectivamente."]}),"\n",(0,r.jsx)(n.h2,{id:"22-instalaci\xf3n-plugin-ios",children:"2.2 Instalaci\xf3n plugin: iOS"}),"\n",(0,r.jsx)(n.h3,{id:"221-configuraci\xf3n-del-proyecto",children:"2.2.1 Configuraci\xf3n del proyecto"}),"\n",(0,r.jsx)(n.p,{children:"Para la versi\xf3n de iOS, a la hora de a\xf1adir nuestro plugin a la aplicaci\xf3n final, previamente se deben tener en cuenta los siguientes puntos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deshabilitar el BITCODE"}),": Si la aplicaci\xf3n que va a integrar el plugin tiene activado el BITCODE dar\xe1 error de compilaci\xf3n. Para evitar que esto suceda, ",(0,r.jsx)(n.strong,{children:"el BITCODE debe estar desactivado"}),".\nDentro del XCODE simplemente accediendo a ",(0,r.jsx)(n.em,{children:"Build from Settings"}),", en la secci\xf3n ",(0,r.jsx)(n.em,{children:"Build Options"}),", deber\xe1s indicar el par\xe1metro Habilitar Bitcode como No."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"A\xf1adir los permisos de c\xe1mara"}),": Para utilizar el widget, es necesario habilitar el permiso de la c\xe1mara en el archivo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"info.plist"})})," de la aplicaci\xf3n (incluido dentro del proyecto en la carpeta ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"ios"})}),"). Se deber\xe1 editar el archivo con un editor de texto y agregar el siguiente par ",(0,r.jsx)(n.em,{children:"clave/valor"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"222-actualizar-el-podfile",children:"2.2.2 Actualizar el Podfile"}),"\n",(0,r.jsx)(n.p,{children:"En el podfile del proyecto ser\xe1 necesario a\xf1adir la informaci\xf3n del repositorio privado (ver apartado 2.1). Para ello, se deber\xe1 agregar las siguientes lineas al inicio del fichero:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nPara saber m\xe1s acerca de la configuraci\xf3n y uso de ",(0,r.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", es necesario acceder al siguiente documento de ",(0,r.jsx)(n.em,{children:"Componente Core"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"223-establecer-la-versi\xf3n-de-swift",children:"2.2.3 Establecer la versi\xf3n de Swift"}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"Xcode"}),", para que la aplicaci\xf3n y todos sus m\xe9todos funcionen correctamente, se debe establecer la versi\xf3n m\xednima de swift a la versi\xf3n 5. Los cambios se podr\xe1n realizar siguiendo estos pasos:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Target -> Project -> Build Settings -> Swift Compiler - Language -> Swift Language Version -> Choose Swift 5."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"224-posibles-incidencias",children:"2.2.4 Posibles incidencias"}),"\n",(0,r.jsx)(n.p,{children:"Si ocurren problemas de entorno o no se actualiza el plugin tras realizar nuevos cambios (por ejemplo, problemas ocurridos debido a que no se genera correctamente el bundle, o no se actualizan las librer\xedas a las versiones adecuadas), se recomienda ejecutar la siguiente secuencia de instrucciones tras lanzar el plugin:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Abrir la carpeta ",(0,r.jsx)(n.strong,{children:"ios"})," de la aplicaci\xf3n en un terminal."]}),"\n",(0,r.jsx)(n.li,{children:"Ejecutar el siguiente comando:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Eliminar el ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,r.jsx)(n.li,{children:"Ejecutar el siguiente comando (o abrir el proyecto con Xcode y ejecutarlo):"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod repo-art update cocoa-pro-fphi\npod install --repo-update\n"})}),"\n",(0,r.jsx)(n.h2,{id:"23-instalaci\xf3n-plugin-android",children:"2.3 Instalaci\xf3n plugin: Android"}),"\n",(0,r.jsx)(n.h3,{id:"231-establecer-la-versi\xf3n-de-android-sdk",children:"2.3.1 Establecer la versi\xf3n de Android SDK"}),"\n",(0,r.jsxs)(n.p,{children:["En el caso de Android, la versi\xf3n m\xednima de SDK requerida por nuestras bibliotecas nativas es ",(0,r.jsx)(n.strong,{children:"24"}),", por lo que si la aplicaci\xf3n tiene un ",(0,r.jsx)(n.em,{children:"SDK m\xednimo"})," definido menor que \xe9ste, deber\xe1 modificarse para evitar un error de compilaci\xf3n. Para ello accede al fichero ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"build.gradle"})})," de la aplicaci\xf3n (ubicado en la carpeta ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"android"})}),") y modifica el siguiente par\xe1metro:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"232-permisos-para-geolocalizaci\xf3n",children:"2.3.2 Permisos para geolocalizaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Debido a que el componente de ",(0,r.jsx)(n.strong,{children:"Tracking"})," tiene opciones de geolocalizaci\xf3n, es necesario a\xf1adir los permisos para ello. En el AndroidManifest agregar los siguientes permisos:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'\x3c!-- Always include this permission --\x3e\n<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n\x3c!-- Include only if your app benefits from precise location access. --\x3e\n<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-configuraci\xf3n-del-componente",children:"3. Configuraci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["El componente actual contiene una serie de m\xe9todos e interfaces de ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"dart"})})," incluidos dentro del archivo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"fphi_sdkmobile_videoid_configuration.dart"})}),". En este fichero se puede encontrar la API necesaria para la comunicaci\xf3n entre la aplicaci\xf3n y la funcionalidad nativa del componente. A continuaci\xf3n, se explica para qu\xe9 sirve cada uno de los enumerados y las dem\xe1s propiedades que afectan al funcionamiento del componente."]}),"\n",(0,r.jsxs)(n.p,{children:["A continuaci\xf3n se muestra la clase ",(0,r.jsx)(n.em,{children:"VideoIdConfiguration"}),", que permite configurar el componente de ",(0,r.jsx)(n.strong,{children:"VideoID"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class VideoIdConfiguration\n{\n  VideoMode mMode;\n  int mTime;\n  bool mShowTutorial;\n  String? mUrl;\n  String? mApiKey;\n  String? mTenantId;\n  bool? mShowDiagnostic;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A continuaci\xf3n, se comentar\xe1n todas las propiedades que se pueden definir en el objeto ",(0,r.jsx)(n.strong,{children:"VideoIdConfiguration"}),":"]}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nToda la configuraci\xf3n se podr\xe1 encontrar en el archivo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"fphi_sdkmobile_videoid/fphi_sdkmobile_videoid_configuration.dart."})})," del componente."]})}),"\n",(0,r.jsx)(n.p,{children:"A la hora de realizar la llamada al widget existe una serie de par\xe1metros que se deben incluir. A continuaci\xf3n se comentar\xe1n brevemente."}),"\n",(0,r.jsx)(n.h3,{id:"31-mtime",children:"3.1 mTime"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:"Tiempo que se permanecer\xe1 en cada pantalla del proceso en ms."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mTime: 5000\n"})}),"\n",(0,r.jsx)(n.h3,{id:"32-mode",children:"3.2 mode"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"VideoMode"})]}),"\n",(0,r.jsxs)(n.p,{children:["Este enumerado se define en la clase ",(0,r.jsx)(n.strong,{children:"VideoMode"})," en ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"fphi_sdkmobile_videoid_mode.dart"})}),". Modo que se aplicar\xe1 para la grabaci\xf3n. Los posibles valores de VideoIdMode ser\xe1n:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"VideoMode.FACE_DOCUMENT_FRONT"})}),": Tienes que mostrar la cara y la parte frontal del documento."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"VideoMode.ONLY_FACE"})}),": S\xf3lo tienes que mostrar la cara durante el proceso."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"VideoMode.FACE_DOCUMENT_FRONT_BACK"})}),": Tienes que mostrar la cara, la parte frontal y el dorso del documento."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mode: VideoMode.FACE_DOCUMENT_FRONT_BACK;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"34-mshowtutorial",children:"3.4 mShowTutorial"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Indica si se desea mostrar el tutorial completo del proceso o s\xf3lo la versi\xf3n simplificada."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mShowTutorial: true;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"35-murl",children:"3.5 mUrl"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:"Ruta al socket de video."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mUrl: url_provided_by_Facephi\n"})}),"\n",(0,r.jsx)(n.h3,{id:"36-mapikey",children:"3.6 mApiKey"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:"ApiKey necesaria para la conexi\xf3n con el socket de video."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mApiKey: "apiKey_provided_by_Facephi";\n'})}),"\n",(0,r.jsx)(n.h3,{id:"37-mtenantid",children:"3.7 mTenantId"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:"Identificador del tenant que hace referencia al cliente actual, necesario para la conexi\xf3n con el servicio de video."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mTenantId: "TenantId_provided_by_Facephi";\n'})}),"\n",(0,r.jsx)(n.h3,{id:"38-mshowdiagnostic",children:"3.8 mShowDiagnostic"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Indica si se desea mostrar un diagnostico en caso de falla."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mShowDiagnostic: false;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-uso-del-componente",children:"4. Uso del componente"}),"\n",(0,r.jsx)(n.p,{children:"A continuaci\xf3n se mostrar\xe1 la manera de ejecutar la funcionalidad del componente actual."}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nSe recuerda que para lanzar un componente determinado previamente habr\xe1 que inicializar el SDK con su respectiva licencia, y despu\xe9s iniciar una nueva operaci\xf3n. Para m\xe1s informaci\xf3n consulte la documentaci\xf3n del Componente Core."]})}),"\n",(0,r.jsx)(n.p,{children:"Una vez configurado el componente, para lanzarlo se deber\xe1 ejecutar el siguiente c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Future<Either<Exception, VideoIdResult>>\n  launchVideoIdWithConfiguration(VideoIdConfiguration configuration) async {\n  try\n  {\n    FphiSdkmobileVideoid videoId = FphiSdkmobileVideoid();\n    final Map resultJson = await videoId.startVideoIdComponent(widgetConfigurationJSON: configuration);\n    return Right(VideoIdResult.fromMap(resultJson));\n  }\n  on Exception catch (e) {\n    return (Left(e));\n  }\n}\n\n/// Sample of standard plugin configuration\nVideoIdConfiguration createStandardConfiguration()\n{\n  VideoIdConfiguration configurationWidget;\n  configurationWidget = VideoIdConfiguration();\n  configurationWidget.mTime         = 5000;\n  configurationWidget.mMode         = VideoMode.DT_FACE_DOCUMENT_FRONT_BACK;\n  configurationWidget.mShowTutorial = false;\n  return configurationWidget;\n}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-retorno-de-resultado",children:"5. Retorno de resultado"}),"\n",(0,r.jsxs)(n.p,{children:["Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto ",(0,r.jsx)(n.strong,{children:"JSON"})," a trav\xe9s de ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Promises"})}),", ya sea una operaci\xf3n exitosa o un error:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"FphiSdkmobileVideoid videoId = FphiSdkmobileVideoid();\nfinal Map resultJson = await videoId.startVideoIdComponent(widgetConfigurationJSON: configuration);\nreturn Right(VideoIdResult.fromMap(resultJson));\n"})}),"\n",(0,r.jsx)(n.p,{children:"Independientemente de si el resultado es correcto/err\xf3neo el resultado tendr\xe1 el siguiente formato:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"class VideoIdResult\n{\n  final SdkFinishStatus finishStatus;\n  final String finishStatusDescription;\n  final String errorDiagnostic;\n  final String? errorMessage;\n  final String data;\n}\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEl resultado ser\xe1 devuelto por medio de una Promise que contiene un objeto de la clase ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"VideoIdResult"})}),". A continuaci\xf3n se ampl\xeda informaci\xf3n sobre esos campos."]})}),"\n",(0,r.jsx)(n.h3,{id:"50-finishstatus",children:"5.0 finishStatus"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"1"}),": La operaci\xf3n fue exitosa."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"2"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el string ",(0,r.jsx)(n.code,{children:"errorDiagnostic"})," y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad ",(0,r.jsx)(n.code,{children:"errorMessage"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"51-finishstatusdescription",children:"5.1 finishStatusDescription"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STATUS_OK"}),": La operaci\xf3n fue exitosa."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STATUS_ERROR"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el string ",(0,r.jsx)(n.code,{children:"errorDiagnostic"})," y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad ",(0,r.jsx)(n.code,{children:"errorMessage"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"52-errordiagnostic",children:"5.2 errorDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el par\xe1metro finishStatus con el valor Error). Los valores que puede tener son los siguientes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NoError"}),": No ha ocurrido ning\xfan error. El proceso puede continuar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"UnknownError"}),": Error no gestionado. Posiblemente causado por un error en el bundle de recursos."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CameraPermissionDenied"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso a la c\xe1mara."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": Excepci\xf3n que se produce cuando el widget no tiene permiso de acceso a la configuraci\xf3n del sistema (",(0,r.jsx)(n.em,{children:"deprecated"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HardwareError"}),": Excepci\xf3n que surge cuando existe alg\xfan problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ExtractionLicenseError"}),": Excepci\xf3n que ocurre cuando ha habido un problema de licencias en el servidor."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Excepci\xf3n que ocurre durante la captura de frames por parte de la c\xe1mara."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ControlNotInitializedError"}),": El configurador del widget no ha sido inicializado."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problema surgido durante la configuraci\xf3n del widget."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CancelByUser"}),":  Excepci\xf3n que se produce cuando el usuario para la extracci\xf3n de forma manual."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TimeOut"}),": Excepci\xf3n que se produce cuando transcurre un tiempo m\xe1ximo sin conseguir finalizar la extracci\xf3n con \xe9xito."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"InitProccessError"}),": Excepci\xf3n que se produce cuando el sdk no puede procesar las imagenes capturadas."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NfcError"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso al nfc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NetworkConnection"}),": Excepci\xf3n que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TokenError"}),": Excepci\xf3n que se produce cuando se pasa por par\xe1metro un token no v\xe1lido."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"InitSessionError"}),": Excepci\xf3n que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al ",(0,r.jsx)(n.code,{children:"SdkCore"})," al ppio de llamar a cualquier otro componente."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ComponentControllerError"}),": Excepci\xf3n que se produce cuando no se puede instanciar el componente."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"53-errormessage",children:"5.3 errorMessage:"}),"\n",(0,r.jsx)(n.p,{children:"Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var r=i(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);