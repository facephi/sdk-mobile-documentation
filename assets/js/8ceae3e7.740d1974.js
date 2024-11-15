"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7742],{3911:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"FAQ","title":"FAQ","description":"When synchronising the project, it does not resolve the dependencies and a 403 appears in the components.","source":"@site/android_versioned_docs/version-2.1.X/FAQ.md","sourceDirName":".","slug":"/FAQ","permalink":"/sdk-mobile-documentation/docs/android/FAQ","draft":false,"unlisted":false,"tags":[],"version":"2.1.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Changelog","permalink":"/sdk-mobile-documentation/docs/android/Changelog"},"next":{"title":"Sample Applications","permalink":"/sdk-mobile-documentation/docs/android/Sample_applications_use"}}');var r=o(4848),i=o(8453);const s={},a="FAQ",c={},d=[{value:"When synchronising the project, it does not resolve the dependencies and a 403 appears in the components.",id:"when-synchronising-the-project-it-does-not-resolve-the-dependencies-and-a-403-appears-in-the-components",level:3},{value:"How do I fix the &quot;Failed to transform bcprov-jdk18on-1.78.jar&quot; error due to unsupported major class version 65?",id:"how-do-i-fix-the-failed-to-transform-bcprov-jdk18on-178jar-error-due-to-unsupported-major-class-version-65",level:3},{value:"If any other problems occur, please contact the support team so that we can help you.",id:"if-any-other-problems-occur-please-contact-the-support-team-so-that-we-can-help-you",level:4}];function l(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"})}),"\n",(0,r.jsx)(n.h3,{id:"when-synchronising-the-project-it-does-not-resolve-the-dependencies-and-a-403-appears-in-the-components",children:"When synchronising the project, it does not resolve the dependencies and a 403 appears in the components."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Check the device connection."}),"\n",(0,r.jsxs)(n.li,{children:["Check if you have correctly configured the ",(0,r.jsx)("strong",{children:"TOKEN and\nUSER"})," of the Facephi repository in Gradle."]}),"\n",(0,r.jsx)(n.li,{children:"Check the version of the embedded components"}),"\n",(0,r.jsxs)(n.li,{children:["Perform ",(0,r.jsx)("strong",{children:"Invalidate Cache & Restart"})]}),"\n",(0,r.jsx)(n.li,{children:"Try again"}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"how-do-i-fix-the-failed-to-transform-bcprov-jdk18on-178jar-error-due-to-unsupported-major-class-version-65",children:'How do I fix the "Failed to transform bcprov-jdk18on-1.78.jar" error due to unsupported major class version 65?'}),"\n",(0,r.jsx)(n.p,{children:"The error indicates that the bcprov-jdk18on-1.78.jar library was compiled using Java 17, which is incompatible with your project's current configuration or environment. To resolve this issue, you have several options:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update the JDK: Ensure you are using Java 17 or higher. Update the JDK and configure Android Studio to use this version under File > Project Structure > SDK Location."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configure compilation compatibility in Gradle",":Add"," or adjust the following lines in your build.gradle file to specify the Java version:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'android {\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_17\n        targetCompatibility JavaVersion.VERSION_17\n    }\n    kotlinOptions {\n        jvmTarget = "17"\n    }\n}\n\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Verify and adjust the configuration of the Android Gradle Plugin (AGP) and JDK:\nEnsure that your AGP and JDK are correctly configured to support the Java version you require."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After making any changes, perform a clean and rebuild of the project with ./gradlew clean build to ensure all settings take effect."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h4,{id:"if-any-other-problems-occur-please-contact-the-support-team-so-that-we-can-help-you",children:"If any other problems occur, please contact the support team so that we can help you."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);