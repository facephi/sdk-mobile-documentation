"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[3779],{9826:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var i=n(5893),o=n(1151);const t={},a="How-to: Migration from 1.4.X to 2.0.X",s={id:"migration_140_200",title:"How-to: Migration from 1.4.X to 2.0.X",description:"Actualizar compileSDKVersion",source:"@site/i18n/es/docusaurus-plugin-content-docs-flutter/version-2.0.X/migration_140_200.md",sourceDirName:".",slug:"/migration_140_200",permalink:"/sdk-mobile-documentation/es/docs/flutter/migration_140_200",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Example Application",permalink:"/sdk-mobile-documentation/es/docs/flutter/Sample_applications_use"}},d={},l=[{value:"Actualizar compileSDKVersion",id:"actualizar-compilesdkversion",level:2},{value:"Error",id:"error",level:3},{value:"Soluci\xf3n",id:"soluci\xf3n",level:3},{value:"Actualizar Gradle Build Tools",id:"actualizar-gradle-build-tools",level:2},{value:"Error",id:"error-1",level:3},{value:"Soluci\xf3n",id:"soluci\xf3n-1",level:3},{value:"Modificar el tipo del diagn\xf3stico de error",id:"modificar-el-tipo-del-diagn\xf3stico-de-error",level:3}];function c(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"how-to-migration-from-14x-to-20x",children:"How-to: Migration from 1.4.X to 2.0.X"}),"\n",(0,i.jsx)(r.h2,{id:"actualizar-compilesdkversion",children:"Actualizar compileSDKVersion"}),"\n",(0,i.jsx)(r.h3,{id:"error",children:"Error"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Execution failed for task ':app:checkDebugAarMetadata'.\n \n A failure occurred while executing com.android.build.gradle.internal.tasks.CheckAarMetadataWorkAction\n   One or more issues found when checking AAR metadata values:\n \n Dependency 'androidx.navigation:navigation-common:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \n Compilation target for module ':app' is 'android-33'\n\nDependency 'androidx.navigation:navigation-runtime:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \nCompilation target for module ':app' is 'android-33'\n  \nDependency 'androidx.navigation:navigation-common-ktx:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \nCompilation target for module ':app' is 'android-33'\n"})}),"\n",(0,i.jsx)(r.h3,{id:"soluci\xf3n",children:"Soluci\xf3n"}),"\n",(0,i.jsx)(r.p,{children:"Modificar en tu aplicaci\xf3n el m\xednimo de versi\xf3n de la SDK a 24:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"defaultConfig {\n        // You can update the following values to match your application needs.\n        // For more information, see: https://docs.flutter.dev/deployment/android#reviewing-the-build-configuration. \n        minSdkVersion 24\n        targetSdkVersion flutter.targetSdkVersion // targetSdkVersion 34\n        versionCode flutterVersionCode.toInteger()\n        versionName flutterVersionName\n    }\n"})}),"\n",(0,i.jsx)(r.h2,{id:"actualizar-gradle-build-tools",children:"Actualizar Gradle Build Tools"}),"\n",(0,i.jsx)(r.h3,{id:"error-1",children:"Error"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"  Caused by: org.gradle.api.internal.artifacts.transform.TransformException: Execution failed for DexingNoClasspathTransform: /Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar.\n    at org.gradle.api.internal.artifacts.transform.DefaultTransformerInvocationFactory$1.lambda$mapResult$3(\n    ... 2 more\n  Caused by: com.android.builder.dexing.DexArchiveBuilderException: Error while dexing.\n"})}),"\n",(0,i.jsx)(r.p,{children:"or"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'  AGPBI: {"kind":"error","text":"com.android.tools.r8.internal.YI0: Sealed classes are not supported as program classes","sources":[{"file":"/Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar"}],"tool":"D8"}\n'})}),"\n",(0,i.jsx)(r.h3,{id:"soluci\xf3n-1",children:"Soluci\xf3n"}),"\n",(0,i.jsxs)(r.p,{children:["En el fichero ",(0,i.jsx)(r.em,{children:"android/build.gradle"})," file, modificar el ",(0,i.jsx)(r.em,{children:"gradle.build.tools"})," a ",(0,i.jsx)(r.strong,{children:"7.4.0"})," o superior:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:" buildscript {\n      ext.kotlin_version = '1.8.10'\n      repositories {\n          google()\n          mavenCentral()\n      }\n\n      dependencies {\n          classpath 'com.android.tools.build:gradle:7.4.0' // 7.4.0\n          classpath 'org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version'\n      }\n  }\n"})}),"\n",(0,i.jsxs)(r.p,{children:["En el fichero ",(0,i.jsx)(r.em,{children:"gradle-wrapper.properties"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"  distributionBase=GRADLE_USER_HOME\n  distributionPath=wrapper/dists\n  zipStoreBase=GRADLE_USER_HOME\n  zipStorePath=wrapper/dists\n  distributionUrl=https\\://services.gradle.org/distributions/gradle-7.5-all.zip // 7.5-all.zip\n"})}),"\n",(0,i.jsx)(r.h3,{id:"modificar-el-tipo-del-diagn\xf3stico-de-error",children:"Modificar el tipo del diagn\xf3stico de error"}),"\n",(0,i.jsxs)(r.p,{children:["El par\xe1metro ",(0,i.jsx)(r.em,{children:"errorDiagnostic"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"final SdkErrorType errorDiagnostic; \n"})}),"\n",(0,i.jsx)(r.p,{children:"Ahora es un String en la versi\xf3n 2.0.0:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"final String errorDiagnostic;\n"})})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>a});var i=n(7294);const o={},t=i.createContext(o);function a(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);