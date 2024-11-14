"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5338],{9819:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Nfc_Component","title":"NFC Component","description":"1. Introducci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs-capacitor/version-2.0.X/Nfc_Component.md","sourceDirName":".","slug":"/Nfc_Component","permalink":"/sdk-mobile-documentation/es/docs/capacitor/Nfc_Component","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Phingers Component","permalink":"/sdk-mobile-documentation/es/docs/capacitor/Phingers_Component"},"next":{"title":"VideoCall Component","permalink":"/sdk-mobile-documentation/es/docs/capacitor/VideoCall_Component"}}');var s=i(4848),a=i(8453);const l={},o="NFC Component",c={},d=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"1.2 Versi\xf3n del plugin",id:"12-versi\xf3n-del-plugin",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Instalaci\xf3n del plugin: Common",id:"21-instalaci\xf3n-del-plugin-common",level:3},{value:"2.2 Instalaci\xf3n plugin: iOS",id:"22-instalaci\xf3n-plugin-ios",level:2},{value:"2.2.1 Configuraci\xf3n del proyecto",id:"221-configuraci\xf3n-del-proyecto",level:3},{value:"2.2.2 Actualizar el Podfile",id:"222-actualizar-el-podfile",level:3},{value:"2.2.4 Posibles incidencias",id:"224-posibles-incidencias",level:3},{value:"2.3 Instalaci\xf3n plugin: Android",id:"23-instalaci\xf3n-plugin-android",level:2},{value:"2.3.1 Establecer la versi\xf3n de Android SDK",id:"231-establecer-la-versi\xf3n-de-android-sdk",level:3},{value:"3. Configuraci\xf3n del componente",id:"3-configuraci\xf3n-del-componente",level:2},{value:"3.1 docNumber",id:"31-docnumber",level:3},{value:"3.2 birthDay",id:"32-birthday",level:3},{value:"3.3 expirationDay",id:"33-expirationday",level:3},{value:"3.4 extractionTimeout",id:"34-extractiontimeout",level:3},{value:"3.5 issuer",id:"35-issuer",level:3},{value:"3.6 docType",id:"36-doctype",level:3},{value:"3.7 showTutorial",id:"37-showtutorial",level:3},{value:"3.8 showDiagnostic",id:"38-showdiagnostic",level:3},{value:"3.9 vibrationEnabled",id:"39-vibrationenabled",level:3},{value:"3.10 skipPACE",id:"310-skippace",level:3},{value:"3.11. showPreviousTip",id:"311-showprevioustip",level:4},{value:"3.12. extractFacialImage",id:"312-extractfacialimage",level:4},{value:"3.13. extractSignatureImage",id:"313-extractsignatureimage",level:4},{value:"4. Uso del componente",id:"4-uso-del-componente",level:2},{value:"5. Retorno de resultado",id:"5-retorno-de-resultado",level:2},{value:"5.1 finishStatus",id:"51-finishstatus",level:3},{value:"5.2 finishStatusDescription",id:"52-finishstatusdescription",level:3},{value:"5.3 errorType",id:"53-errortype",level:3},{value:"5.4 errorMessage:",id:"54-errormessage",level:3},{value:"5.5 nfcDocumentInformation",id:"55-nfcdocumentinformation",level:3},{value:"5.6 nfcPersonalInformation",id:"56-nfcpersonalinformation",level:3},{value:"5.7 nfcValidations",id:"57-nfcvalidations",level:3},{value:"5.8 facialImage",id:"58-facialimage",level:3},{value:"5.9 fingerprintImage",id:"59-fingerprintimage",level:3},{value:"5.10 signatureImage",id:"510-signatureimage",level:3}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"nfc-component",children:"NFC Component"})}),"\n",(0,s.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El Componente tratado en el documento actual recibe el nombre de ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"NFC Component"})}),". La autenticaci\xf3n pasiva del chip NFC de un documento comprueba si realmente ha sido expedido por una autoridad certificada. La autenticaci\xf3n pasiva nos permite validar que:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"El documento ha sido expedido por la autoridad certificadora del pa\xeds al que pertenece."}),"\n",(0,s.jsx)(n.li,{children:"El documento no ha sido alterado."}),"\n",(0,s.jsx)(n.li,{children:"El documento no es una copia o un documento clonado."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,s.jsx)(n.p,{children:"La versi\xf3n m\xednima nativa (Android y iOS) de la SDK son las siguientes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Versi\xf3n m\xednima Android: 24 - JDK 17"}),"\n",(0,s.jsxs)(n.li,{children:["Versi\xf3n m\xednima Build Tools: ",(0,s.jsx)(n.strong,{children:"8.3.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Versi\xf3n m\xednima Kotlin Android: ",(0,s.jsx)(n.strong,{children:"1.9.0"})]}),"\n",(0,s.jsx)(n.li,{children:"Versi\xf3n m\xednima iOS: 13"}),"\n",(0,s.jsxs)(n.li,{children:["Versi\xf3n m\xednima Capacitor ",(0,s.jsx)(n.strong,{children:"5"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"En cuanto a la arquitectura del dispositivo m\xf3vil:"}),"\n",(0,s.jsx)(n.p,{children:"armeabi-v7, x86, arm64 y x64"}),"\n",(0,s.jsx)(n.h3,{id:"12-versi\xf3n-del-plugin",children:"1.2 Versi\xf3n del plugin"}),"\n",(0,s.jsx)(n.p,{children:"La versi\xf3n del plugin actual se puede consultar de la siguiente forma:"}),"\n",(0,s.jsxs)(n.p,{children:["Buscamos el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"package.json"})})," en la ra\xedz del plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["En el ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"KEY/TAG"})})," version se indica la versi\xf3n."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAntes de integrar este componente ",(0,s.jsx)(n.strong,{children:"se recomienda"})," leer la documentaci\xf3n relativa a ",(0,s.jsx)(n.strong,{children:"Core Component"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,s.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente actual en un proyecto ya existente."}),"\n",(0,s.jsxs)("div",{class:"warning",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nPara esta secci\xf3n, se considerar\xe1n los siguiente valores:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path a la ra\xedz de la aplicaci\xf3n (ejemplo: /folder/example)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path a la ra\xedz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_NFC_PATH%>"})," - Path a la ra\xedz del plugin actual (ejemplo: /folder/sdk-nfc)"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"21-instalaci\xf3n-del-plugin-common",children:"2.1. Instalaci\xf3n del plugin: Common"}),"\n",(0,s.jsx)(n.p,{children:"El plugin permite la ejecuci\xf3n en plataforma Android y iOS. En esta secci\xf3n se explica. Se deben seguir los siguientes pasos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Acceder a ",(0,s.jsx)(n.strong,{children:"APPLICATION_PATH"})," y lanzar:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"npm i @facephi/sdk-core-capacitor\nnpm i @facephi/sdk-nfc-capacitor\nnpm run build\nnpx cap sync\nnpx ionic capacitor build [android | ios]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Tras ejecutar los comandos anteriores, autom\xe1ticamente se abrir\xe1 el IDE correspondiente de cada una de las plataformas (XCode para iOS, Android Studio para Android), y solo quedar\xeda compilarlo (y depurarlo en caso de ser necesario) como si fuera un proyecto nativo est\xe1ndar."}),"\n",(0,s.jsx)(n.h2,{id:"22-instalaci\xf3n-plugin-ios",children:"2.2 Instalaci\xf3n plugin: iOS"}),"\n",(0,s.jsx)(n.h3,{id:"221-configuraci\xf3n-del-proyecto",children:"2.2.1 Configuraci\xf3n del proyecto"}),"\n",(0,s.jsx)(n.p,{children:"Para la versi\xf3n de iOS, a la hora de a\xf1adir nuestro plugin a la aplicaci\xf3n final, previamente se deben tener en cuenta los siguientes puntos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Deshabilitar el BITCODE"}),": Si la aplicaci\xf3n que va a integrar el plugin tiene activado el BITCODE dar\xe1 error de compilaci\xf3n. Para evitar que esto suceda, ",(0,s.jsx)(n.strong,{children:"el BITCODE debe estar desactivado"}),".\nDentro del XCODE simplemente accediendo a ",(0,s.jsx)(n.em,{children:"Build from Settings"}),", en la secci\xf3n ",(0,s.jsx)(n.em,{children:"Build Options"}),", deber\xe1s indicar el par\xe1metro Habilitar Bitcode como No."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A\xf1adir los permisos de c\xe1mara"}),": Para utilizar el component, es necesario habilitar el permiso de la c\xe1mara en el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"info.plist"})})," de la aplicaci\xf3n (incluido dentro del proyecto en la carpeta ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ios"})}),"). Se deber\xe1 editar el archivo con un editor de texto y agregar el siguiente par ",(0,s.jsx)(n.em,{children:"clave/valor"}),":"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"A\xf1adir Privacy - NFC Scan Usage Description"}),":  Para utilizar el widget, es necesario habilitar el permiso de nfc en el archivo info.plist de la aplicaci\xf3n (incluido dentro del proyecto en la carpeta ios)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<key>NFCReaderUsageDescription</key>\n<string>The app needs this permission for the correct usage.</string>\n"})}),"\n",(0,s.jsx)(n.p,{children:"A\xf1adir ISO7816 application identifiers for NFC Tag Reader Session: Para utilizar el widget, es necesario habilitar el permiso de nfc en el archivo info.plist de la aplicaci\xf3n (incluido dentro del proyecto en la carpeta ios). Se deber\xe1 editar el archivo con un editor de texto y agregar el siguiente par clave/valor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<array>\n    <string>A0000002471001</string>\n    <string>A0000002472001</string>\n    <string>00000000000000</string>\n</array>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"A\xf1adir el Capability Near field Communication Tag Reading"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Open image-20230214-141106.png\nimage-20230214-141106.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"A\xf1adir el Entitlements Near Field Communication Tag Reader Session Formats"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Open image-20230214-141753.png\nimage-20230214-141753.png"}),"\n",(0,s.jsx)(n.h3,{id:"222-actualizar-el-podfile",children:"2.2.2 Actualizar el Podfile"}),"\n",(0,s.jsx)(n.p,{children:"En el podfile del proyecto ser\xe1 necesario a\xf1adir la informaci\xf3n del repositorio privado (ver apartado 2.1). Para ello, se deber\xe1 agregar las siguientes lineas al inicio del fichero:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nPara saber m\xe1s acerca de la configuraci\xf3n y uso de ",(0,s.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", es necesario acceder al siguiente documento de ",(0,s.jsx)(n.em,{children:"Componente Core"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"224-posibles-incidencias",children:"2.2.4 Posibles incidencias"}),"\n",(0,s.jsx)(n.p,{children:"Si ocurren problemas de entorno o no se actualiza el plugin tras realizar nuevos cambios (por ejemplo, problemas ocurridos debido a que no se genera correctamente el bundle, o no se actualizan las librer\xedas a las versiones adecuadas), se recomienda ejecutar la siguiente secuencia de instrucciones tras lanzar el plugin:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Abrir la carpeta ",(0,s.jsx)(n.strong,{children:"ios"})," de la aplicaci\xf3n en un terminal."]}),"\n",(0,s.jsx)(n.li,{children:"Ejecutar el siguiente comando:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Eliminar el ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,s.jsx)(n.li,{children:"Ejecutar el siguiente comando (o abrir el proyecto con Xcode y ejecutarlo):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod install --repo-update\n"})}),"\n",(0,s.jsx)(n.h2,{id:"23-instalaci\xf3n-plugin-android",children:"2.3 Instalaci\xf3n plugin: Android"}),"\n",(0,s.jsx)(n.h3,{id:"231-establecer-la-versi\xf3n-de-android-sdk",children:"2.3.1 Establecer la versi\xf3n de Android SDK"}),"\n",(0,s.jsxs)(n.p,{children:["En el caso de Android, la versi\xf3n m\xednima de SDK requerida por nuestras bibliotecas nativas es ",(0,s.jsx)(n.strong,{children:"24"}),", por lo que si la aplicaci\xf3n tiene un ",(0,s.jsx)(n.em,{children:"SDK m\xednimo"})," definido menor que \xe9ste, deber\xe1 modificarse para evitar un error de compilaci\xf3n. Para ello accede al fichero ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build.gradle"})})," de la aplicaci\xf3n (ubicado en la carpeta ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"android"})}),") y modifica el siguiente par\xe1metro:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["La versi\xf3n m\xednima del android.tools(AGP) es ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"8.3.0"})}),". Para modificarlo, en caso de ser necesario, se deber\xe1 modificar el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build.gradle"})})," (ubicado en la carpeta ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"android"})}),") y modificar lo siguiente:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'dependencies {\n    classpath "com.android.tools.build:gradle:8.3.0"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"En el mismo archivo, es obligatorio agregar lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'android {\n    packagingOptions {\n        pickFirst("META-INF/versions/9/OSGI-INF/MANIFEST.MF") // NFC\n    }\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-configuraci\xf3n-del-componente",children:"3. Configuraci\xf3n del componente"}),"\n",(0,s.jsxs)(n.p,{children:["El componente actual contiene una serie de m\xe9todos e interfaces de Typescript incluidos dentro del archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"definitions.ts"})})," En este fichero se puede encontrar la API necesaria para la comunicaci\xf3n entre la aplicaci\xf3n y la funcionalidad nativa del componente. A continuaci\xf3n, se explica para qu\xe9 sirve cada uno de los enumerados y las dem\xe1s propiedades que afectan al funcionamiento del componente."]}),"\n",(0,s.jsxs)(n.p,{children:["A continuaci\xf3n se muestra la clase ",(0,s.jsx)(n.em,{children:"NfcConfiguration"}),", que permite configurar el componente de ",(0,s.jsx)(n.strong,{children:"Nfc"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"export interface NfcConfiguration {\n    docNumber: string;\n    birthDate: string;\n    expirationDate: string;\n    extractionTimeout?: number;\n    showTutorial?: boolean;\n    vibrationEnabled?: boolean;\n    skipPACE?: boolean;\n    debug?: boolean;\n    showDiagnostic?: boolean;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A continuaci\xf3n, se comentar\xe1n todas las propiedades que se pueden definir en el objeto ",(0,s.jsx)(n.strong,{children:"NfcConfiguration"}),":"]}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nToda la configuraci\xf3n se podr\xe1 encontrar en el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"definitions.ts"})})," del componente."]})}),"\n",(0,s.jsx)(n.p,{children:"A la hora de realizar la llamada al component existe una serie de par\xe1metros que se deben incluir. A continuaci\xf3n se comentar\xe1n brevemente."}),"\n",(0,s.jsx)(n.h3,{id:"31-docnumber",children:"3.1 docNumber"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"N\xfamero de documento que se pretende scanear."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docNumber: 2115000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-birthday",children:"3.2 birthDay"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Fecha de nacimiento que figura en el documento que se pretende scanear."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"birthDay: dd/mm/yyyy;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"33-expirationday",children:"3.3 expirationDay"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Fecha de expiraci\xf3n que figura en el documento que se pretende scanear."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"expirationDay: dd/mm/yyyy;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"34-extractiontimeout",children:"3.4 extractionTimeout"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Tiempo de espera en el que el plugin deja de scanear de manera autom\xe1tica en caso de no obtener resultados."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"extractionTimeout: 5000;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"35-issuer",children:"3.5 issuer"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"C\xf3digo del pa\xeds que se desea scanear."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"issuer: \n"})}),"\n",(0,s.jsx)(n.h3,{id:"36-doctype",children:"3.6 docType"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"NfcDocumentType"})]}),"\n",(0,s.jsx)(n.p,{children:"Tipo de documento que se pretende scanear."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docType: ;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"37-showtutorial",children:"3.7 showTutorial"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Habilita o no que se muestre un tutorial previa a la acci\xf3n de lectura del documento."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showTutorial: ;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"38-showdiagnostic",children:"3.8 showDiagnostic"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indica si se desea mostrar un diagnostico en caso de falla."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showDiagnostic: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"39-vibrationenabled",children:"3.9 vibrationEnabled"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indica si se desea o no habilitar la vibraci\xf3n."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"vibrationEnabled: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"310-skippace",children:"3.10 skipPACE"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates that only NFC BAC reading is desired. It is a simple and fast\nreader."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"skipPACE: false;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"311-showprevioustip",children:"3.11. showPreviousTip"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Muestra una pantalla de prelanzamiento con informaci\xf3n sobre el proceso a realizar y un bot\xf3n de inicio."}),"\n",(0,s.jsx)(n.h4,{id:"312-extractfacialimage",children:"3.12. extractFacialImage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indica si quieres extraer la imagen del rostro."}),"\n",(0,s.jsx)(n.h4,{id:"313-extractsignatureimage",children:"3.13. extractSignatureImage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indica si desea extraer la imagen de la firma."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-uso-del-componente",children:"4. Uso del componente"}),"\n",(0,s.jsx)(n.p,{children:"A continuaci\xf3n se mostrar\xe1 la manera de ejecutar la funcionalidad del componente actual."}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nSe recuerda que para lanzar un componente determinado previamente habr\xe1 que inicializar el SDK con su respectiva licencia, y despu\xe9s iniciar una nueva operaci\xf3n. Para m\xe1s informaci\xf3n consulte la documentaci\xf3n del Componente Core."]})}),"\n",(0,s.jsx)(n.p,{children:"Una vez configurado el componente, para lanzarlo se deber\xe1 ejecutar el siguiente c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"/**\n * Method that launches the plugin.\n * @returns Promise with a JSON string.\n */\nlaunchNfc = async (): Promise<NfcResult> => {\n  console.log('Launching Nfc widget...');\n  // SelphiFaceConfiguration\n  return SdkNfc.startNfc(this.getNFCConfiguration());\n}\n\ngetNFCConfiguration() \n{\n  let config: NfcConfiguration = {\n    docNumber: 'DOC_NUMBER',\n    birthDay: '16/08/1979',\n    expirationDay: '29/11/2022',\n    extractionTimeout: 5000,\n  };\n  return config;\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-retorno-de-resultado",children:"5. Retorno de resultado"}),"\n",(0,s.jsxs)(n.p,{children:["Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto ",(0,s.jsx)(n.strong,{children:"JSON"})," a trav\xe9s de ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Promises"})}),", ya sea una operaci\xf3n exitosa o un error:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"return SdkNfc.startNfc(this.getNFCConfiguration());\n"})}),"\n",(0,s.jsx)(n.p,{children:"Independientemente de si el resultado es correcto/err\xf3neo el resultado tendr\xe1 el siguiente formato:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"export interface NfcResult \n{\n  finishStatus: number;\n  finishStatusDescription?: string;\n  errorType: string;\n  errorMessage?: string;\n  nfcDocumentInformation?: any;\n  nfcPersonalInformation?: any;\n  nfcValidations?: any;\n  nfcRawData?: any;\n  nfcSecurityData?: any;\n  facialImage?: string;\n  fingerprintImage?: string;\n  signatureImage?: string;\n}\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEl resultado ser\xe1 devuelto por medio de una Promise que contiene un objeto de la clase ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoIdResult"})}),". A continuaci\xf3n se ampl\xeda informaci\xf3n sobre esos campos."]})}),"\n",(0,s.jsx)(n.h3,{id:"51-finishstatus",children:"5.1 finishStatus"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve el diagn\xf3stico global de la operaci\xf3n."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1"}),": La operaci\xf3n fue exitosa."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"2"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el string ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"errorType"})})," y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"errorMessage"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-finishstatusdescription",children:"5.2 finishStatusDescription"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve la descripci\xf3n de finishStatus."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_OK"}),": La operaci\xf3n fue exitosa."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_ERROR"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el string ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"errorType"})})," y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"errorMessage"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-errortype",children:"5.3 errorType"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el par\xe1metro finishStatus con el valor Error). Los valores que puede tener son los siguientes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NoError"}),": No ha ocurrido ning\xfan error. El proceso puede continuar."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnknownError"}),": Error no gestionado. Posiblemente causado por un error en el bundle de recursos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CameraPermissionDenied"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso a la c\xe1mara."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": Excepci\xf3n que se produce cuando el componente no tiene permiso de acceso a la configuraci\xf3n del sistema (",(0,s.jsx)(n.em,{children:"deprecated"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"HardwareError"}),": Excepci\xf3n que surge cuando existe alg\xfan problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ExtractionLicenseError"}),": Excepci\xf3n que ocurre cuando ha habido un problema de licencias en el servidor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Excepci\xf3n que ocurre durante la captura de frames por parte de la c\xe1mara."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ControlNotInitializedError"}),": El configurador del componente no ha sido inicializado."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problema surgido durante la configuraci\xf3n del componente."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CancelByUser"}),":  Excepci\xf3n que se produce cuando el usuario para la extracci\xf3n de forma manual."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TimeOut"}),": Excepci\xf3n que se produce cuando transcurre un tiempo m\xe1ximo sin conseguir finalizar la extracci\xf3n con \xe9xito."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitProccessError"}),": Excepci\xf3n que se produce cuando el sdk no puede procesar las imagenes capturadas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NfcError"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso al nfc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NetworkConnection"}),": Excepci\xf3n que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TokenError"}),": Excepci\xf3n que se produce cuando se pasa por par\xe1metro un token no v\xe1lido."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitSessionError"}),": Excepci\xf3n que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al ",(0,s.jsx)(n.code,{children:"SdkCore"})," al ppio de llamar a cualquier otro componente."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ComponentControllerError"}),": Excepci\xf3n que se produce cuando no se puede instanciar el componente."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"54-errormessage",children:"5.4 errorMessage:"}),"\n",(0,s.jsx)(n.p,{children:"Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional."}),"\n",(0,s.jsx)(n.h3,{id:"55-nfcdocumentinformation",children:"5.5 nfcDocumentInformation"}),"\n",(0,s.jsx)(n.p,{children:"Informaci\xf3n obtenida del documento ordenada por:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"documentNumber"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"expirationDate"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"issuer"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"mrzString"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"type"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"56-nfcpersonalinformation",children:"5.6 nfcPersonalInformation"}),"\n",(0,s.jsx)(n.p,{children:"Informaci\xf3n obtenida del documento ordenada por:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"address"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"birthdate"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"city"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"gender"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"name"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"nationality"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"personalNumber"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"placeOfBirth"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"surname"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"57-nfcvalidations",children:"5.7 nfcValidations"}),"\n",(0,s.jsx)(n.p,{children:"Informaci\xf3n obtenida del documento ordenada por:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"accessType"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"activeAuthenticationSupported"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"activeAuthenticationValidation"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"chipAuthenticationValidation"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"dataGroupsHashesValidation"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"documentSigningValidation"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"issuerSigningValidation"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"58-facialimage",children:"5.8 facialImage"}),"\n",(0,s.jsx)(n.p,{children:"La imagen del rostro obtenida durante la captura."}),"\n",(0,s.jsx)(n.h3,{id:"59-fingerprintimage",children:"5.9 fingerprintImage"}),"\n",(0,s.jsx)(n.p,{children:"La imagen de la huella dactilar obtenida durante la captura."}),"\n",(0,s.jsx)(n.h3,{id:"510-signatureimage",children:"5.10 signatureImage"}),"\n",(0,s.jsx)(n.p,{children:"La imagen de la firma obtenida durante la captura."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(6540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);