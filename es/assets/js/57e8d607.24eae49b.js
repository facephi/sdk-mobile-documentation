"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8126],{1559:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=o(5893),r=o(1151);const i={},s="FAQ",l={id:"FAQ",title:"FAQ",description:"Cuando se sincroniza el proyecto, no se resuelven las dependencias y aparece un 403 en los componentes.",source:"@site/i18n/es/docusaurus-plugin-content-docs-android/version-2.0.X/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/sdk-mobile-documentation/es/docs/android/FAQ",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Changelog",permalink:"/sdk-mobile-documentation/es/docs/android/Changelog"},next:{title:"Aplicaciones de ejemplo",permalink:"/sdk-mobile-documentation/es/docs/android/Sample_applications_use"}},t={},c=[{value:"Cuando se sincroniza el proyecto, no se resuelven las dependencias y aparece un 403 en los componentes.",id:"cuando-se-sincroniza-el-proyecto-no-se-resuelven-las-dependencias-y-aparece-un-403-en-los-componentes",level:3},{value:"\xbfC\xf3mo corrijo el error &quot;Failed to transform bcprov-jdk18on-1.78.jar&quot; debido a la incompatibilidad de la versi\xf3n de la clase mayor 65?",id:"c\xf3mo-corrijo-el-error-failed-to-transform-bcprov-jdk18on-178jar-debido-a-la-incompatibilidad-de-la-versi\xf3n-de-la-clase-mayor-65",level:3},{value:"Si surgen otros problemas, ponte en contacto con el equipo de asistencia para que podamos ayudarte.",id:"si-surgen-otros-problemas-ponte-en-contacto-con-el-equipo-de-asistencia-para-que-podamos-ayudarte",level:4}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(n.h3,{id:"cuando-se-sincroniza-el-proyecto-no-se-resuelven-las-dependencias-y-aparece-un-403-en-los-componentes",children:"Cuando se sincroniza el proyecto, no se resuelven las dependencias y aparece un 403 en los componentes."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Verifica la conexi\xf3n del dispositivo."}),"\n",(0,a.jsxs)(n.li,{children:["Comprueba si has configurado correctamente el ",(0,a.jsx)("strong",{children:"TOKEN y\nUSER"})," del repositorio de Facephi en Gradle."]}),"\n",(0,a.jsx)(n.li,{children:"Verifica la versi\xf3n de los componentes integrados"}),"\n",(0,a.jsxs)(n.li,{children:["Realiza ",(0,a.jsx)("strong",{children:"Invalidate Cache & Restart"})]}),"\n",(0,a.jsx)(n.li,{children:"Intenta de nuevo"}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h3,{id:"c\xf3mo-corrijo-el-error-failed-to-transform-bcprov-jdk18on-178jar-debido-a-la-incompatibilidad-de-la-versi\xf3n-de-la-clase-mayor-65",children:'\xbfC\xf3mo corrijo el error "Failed to transform bcprov-jdk18on-1.78.jar" debido a la incompatibilidad de la versi\xf3n de la clase mayor 65?'}),"\n",(0,a.jsx)(n.p,{children:"El error indica que la biblioteca bcprov-jdk18on-1.78.jar fue compilada con Java 17, incompatible con la configuraci\xf3n actual de tu proyecto o entorno. Para resolver este problema, tienes varias opciones:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Actualizar el JDK: Aseg\xfarate de que est\xe1s utilizando Java 17 o superior. Actualiza el JDK y configura Android Studio para usar esta versi\xf3n en File > Project Structure > SDK Location."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Configurar compatibilidad de compilaci\xf3n en Gradle: A\xf1ade o ajusta las siguientes l\xedneas en tu archivo build.gradle para especificar la versi\xf3n de Java:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'android {\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_17\n        targetCompatibility JavaVersion.VERSION_17\n    }\n    kotlinOptions {\n        jvmTarget = "17"\n    }\n}\n\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Verificar y ajustar la configuraci\xf3n del Android Gradle Plugin (AGP) y JDK: Aseg\xfarate de que tu AGP y JDK est\xe9n correctamente configurados para soportar la versi\xf3n de Java que requieres."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Despu\xe9s de realizar cualquier cambio, realiza una limpieza y reconstrucci\xf3n del proyecto con ./gradlew clean build para asegurarte de que todos los ajustes tengan efecto."}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h4,{id:"si-surgen-otros-problemas-ponte-en-contacto-con-el-equipo-de-asistencia-para-que-podamos-ayudarte",children:"Si surgen otros problemas, ponte en contacto con el equipo de asistencia para que podamos ayudarte."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var a=o(7294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);