"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8844],{8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var r=i(6540);const o={},l=r.createContext(o);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(l.Provider,{value:n},e.children)}},9652:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"migration_140_200","title":"Migrate from 1.4.X to 2.0.X","description":"1. Introducci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs-cordova/version-2.0.X/migration_140_200.md","sourceDirName":".","slug":"/migration_140_200","permalink":"/sdk-mobile-documentation/es/docs/cordova/migration_140_200","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Aplicaciones de ejemplo","permalink":"/sdk-mobile-documentation/es/docs/cordova/Sample_applications_use"}}');var o=i(4848),l=i(8453);const d={},a="Migrate from 1.4.X to 2.0.X",s={},t=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Posibles issues",id:"2-posibles-issues",level:2},{value:"2.1 Upgrading compileSDKVersion",id:"21-upgrading-compilesdkversion",level:3},{value:"Error",id:"error",level:4},{value:"Soluci\xf3n",id:"soluci\xf3n",level:4},{value:"2.2 Upgrading Gradle Build Tools",id:"22-upgrading-gradle-build-tools",level:3},{value:"Error",id:"error-1",level:4},{value:"Soluci\xf3n",id:"soluci\xf3n-1",level:4},{value:"2.3 Changing result diagnostics",id:"23-changing-result-diagnostics",level:3},{value:"Soluci\xf3n",id:"soluci\xf3n-2",level:4},{value:"2.4 Compose + Kotlin version",id:"24-compose--kotlin-version",level:3},{value:"Error",id:"error-2",level:4},{value:"Soluci\xf3n",id:"soluci\xf3n-3",level:4},{value:"2.5 android",id:"25-android",level:3},{value:"Error",id:"error-3",level:4},{value:"Soluci\xf3n",id:"soluci\xf3n-4",level:4},{value:"2.6 DuplicateRelativeFileException(SELPHI + VOICE // NFC)",id:"26-duplicaterelativefileexceptionselphi--voice--nfc",level:3},{value:"Error:",id:"error-4",level:4},{value:"Soluci\xf3n:",id:"soluci\xf3n-5",level:4},{value:"2.7 Upgrading Gradle Build Tools 2",id:"27-upgrading-gradle-build-tools-2",level:3},{value:"Error:",id:"error-5",level:4},{value:"Soluci\xf3n",id:"soluci\xf3n-6",level:4},{value:"2.10 Plugin cordova-plugin-camera",id:"210-plugin-cordova-plugin-camera",level:3},{value:"Error:",id:"error-6",level:4},{value:"Soluci\xf3n:",id:"soluci\xf3n-7",level:4}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"migrate-from-14x-to-20x",children:"Migrate from 1.4.X to 2.0.X"})}),"\n",(0,o.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,o.jsx)("div",{class:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEl siguiente documento contiene diferentes problemas que pueden aparecer durante la migraci\xf3n de SDK Mobile ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"1.4.X versi\xf3n"})})," a SDK Mobile ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"2.0.X versi\xf3n"})}),". Dependiendo de la aplicaci\xf3n del desarrollador y su configuraci\xf3n."]})}),"\n",(0,o.jsx)(n.h2,{id:"2-posibles-issues",children:"2. Posibles issues"}),"\n",(0,o.jsx)(n.h3,{id:"21-upgrading-compilesdkversion",children:"2.1 Upgrading compileSDKVersion"}),"\n",(0,o.jsx)(n.h4,{id:"error",children:"Error"}),"\n",(0,o.jsxs)(n.p,{children:["Due to an older ",(0,o.jsx)(n.em,{children:"compileSDKVersion"})," configuration, with this new version can appear this error:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Execution failed for task ':app:checkDebugAarMetadata'.\n \n A failure occurred while executing com.android.build.gradle.internal.tasks.CheckAarMetadataWorkAction\n   One or more issues found when checking AAR metadata values:\n \n Dependency 'androidx.navigation:navigation-common:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \n Compilation target for module ':app' is 'android-33'\n\nDependency 'androidx.navigation:navigation-runtime:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \nCompilation target for module ':app' is 'android-33'\n  \nDependency 'androidx.navigation:navigation-common-ktx:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \nCompilation target for module ':app' is 'android-33'\n"})}),"\n",(0,o.jsx)(n.h4,{id:"soluci\xf3n",children:"Soluci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"Change in your application the minimum SDK version to 24:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"defaultConfig {\n        // You can update the following values to match your application needs.\n        // For more information, see: https://docs.flutter.dev/deployment/android#reviewing-the-build-configuration. \n        minSdkVersion 24\n        targetSdkVersion flutter.targetSdkVersion // targetSdkVersion 34\n        versionCode flutterVersionCode.toInteger()\n        versionName flutterVersionName\n    }\n"})}),"\n",(0,o.jsx)(n.h3,{id:"22-upgrading-gradle-build-tools",children:"2.2 Upgrading Gradle Build Tools"}),"\n",(0,o.jsx)(n.h4,{id:"error-1",children:"Error"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  Caused by: org.gradle.api.internal.artifacts.transform.TransformException: Execution failed for DexingNoClasspathTransform: /Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar.\n    at org.gradle.api.internal.artifacts.transform.DefaultTransformerInvocationFactory$1.lambda$mapResult$3(\n    ... 2 more\n  Caused by: com.android.builder.dexing.DexArchiveBuilderException: Error while dexing.\n"})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'  AGPBI: {"kind":"error","text":"com.android.tools.r8.internal.YI0: Sealed classes are not supported as program classes","sources":[{"file":"/Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar"}],"tool":"D8"}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"soluci\xf3n-1",children:"Soluci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"In android/build.gradle file, change de gradle.build.tools to 7.4.0 or more:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:" buildscript {\n      ext.kotlin_version = '1.8.10'\n      repositories {\n          google()\n          mavenCentral()\n      }\n\n      dependencies {\n          classpath 'com.android.tools.build:gradle:7.4.0' // 7.4.0\n          classpath 'org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version'\n      }\n  }\n"})}),"\n",(0,o.jsx)(n.p,{children:"In gradle-wrapper.properties file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  distributionBase=GRADLE_USER_HOME\n  distributionPath=wrapper/dists\n  zipStoreBase=GRADLE_USER_HOME\n  zipStorePath=wrapper/dists\n  distributionUrl=https\\://services.gradle.org/distributions/gradle-7.5-all.zip // 7.5-all.zip\n"})}),"\n",(0,o.jsx)(n.h3,{id:"23-changing-result-diagnostics",children:"2.3 Changing result diagnostics"}),"\n",(0,o.jsx)(n.h4,{id:"soluci\xf3n-2",children:"Soluci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"This parameter errorDiagnostic:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"final SdkErrorType errorDiagnostic; \n"})}),"\n",(0,o.jsx)(n.p,{children:"Now it\u2019s an String in the 2.0.0 version:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"final String errorDiagnostic;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"24-compose--kotlin-version",children:"2.4 Compose + Kotlin version"}),"\n",(0,o.jsx)(n.h4,{id:"error-2",children:"Error"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"java.lang.NoClassDefFoundError: Failed resolution of: Landroidx/compose/ui/platform/ComposeView;\n"})}),"\n",(0,o.jsx)(n.h4,{id:"soluci\xf3n-3",children:"Soluci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"In the build.gradle(android) add:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    dependencies {\n      classpath "com.android.tools.build:gradle:7.4.2"\n      classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.8.0" // ADD THIS LINE\n    }\n'})}),"\n",(0,o.jsx)(n.p,{children:"And in the build.gradle(app) add:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"apply plugin: 'com.android.application'\napply plugin: 'kotlin-android' // ADD THIS LINE\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"25-android",children:["2.5 android",":usesCleartextTraffic"]}),"\n",(0,o.jsx)(n.h4,{id:"error-3",children:"Error"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"/Users/lariel/proyects/sdkMobile/react-native/cocoapods-license-antonio/qashio/android/app/src/debug/AndroidManifest.xml:6:9-44 Error:\n  Attribute application@usesCleartextTraffic value=(true) from AndroidManifest.xml:6:9-44\n  is also present at [com.facephi.androidsdk:selphi_component:2.0.1] AndroidManifest.xml:8:18-54 value=(false).\n  Suggestion: add 'tools:replace=\"android:usesCleartextTraffic\"' to <application> element at AndroidManifest.xml:5:5-8:50 to override.\n"})}),"\n",(0,o.jsx)(n.h4,{id:"soluci\xf3n-4",children:"Soluci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"In the AndroidManifest.xml, add:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'  <?xml version=\'1.0\' encoding=\'utf-8\'?>\n  <manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:tools="http://schemas.android.com/tools" --\x3e ADD THIS\n    >\n\n    <application\n      android:allowBackup="true"\n      android:icon="@mipmap/ic_launcher"\n      android:label="@string/app_name"\n      android:roundIcon="@mipmap/ic_launcher_round"\n      android:supportsRtl="true"\n      android:theme="@style/AppTheme"\n      android:usesCleartextTraffic="true" --\x3e ADD THIS\n      tools:replace="android:usesCleartextTraffic"> --\x3e ADD THIS\n'})}),"\n",(0,o.jsx)(n.h3,{id:"26-duplicaterelativefileexceptionselphi--voice--nfc",children:"2.6 DuplicateRelativeFileException(SELPHI + VOICE // NFC)"}),"\n",(0,o.jsx)(n.h4,{id:"error-4",children:"Error:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Caused by: com.android.builder.merge.DuplicateRelativeFileException: 2 files found with path 'META-INF/versions/9/OSGI-INF/MANIFEST.MF'.\nAdding a packaging block may help, please refer to\n"})}),"\n",(0,o.jsx)(n.h4,{id:"soluci\xf3n-5",children:"Soluci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'packagingOptions {\n    pickFirst("**/*.so") // SELPHI + VOICE\n    pickFirst("META-INF/versions/9/OSGI-INF/MANIFEST.MF") // NFC\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"27-upgrading-gradle-build-tools-2",children:"2.7 Upgrading Gradle Build Tools 2"}),"\n",(0,o.jsx)(n.h4,{id:"error-5",children:"Error:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'java.lang.NullPointerException: Cannot invoke "String.length()" because "<parameter1>" is null\n\nOR\n\nAGPBI: {"kind":"error","text":"java.lang.NullPointerException","sources":[{"file":"/Users/lariel/.gradle/caches/transforms-3/96df14071dd10ba319cee1b058e64410/transformed/lifecycle-livedata-core-2.8.3-runtime.jar"}],"tool":"D8"}\n\nOR\n\nClass \'com.facephi.core.data.SdkImage\' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 2.0.0, expected version is 1.8.0.\nThe class is loaded from /Users/lariel/.gradle/caches/transforms-3/d1de7231ad1ef5869b273e5abac6ceb3/transformed/jetified-core-2.0.2-api.jar!/com/facephi/core/data/SdkImage.class\n'})}),"\n",(0,o.jsx)(n.h4,{id:"soluci\xf3n-6",children:"Soluci\xf3n"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'  "AGP_VERSION": ">= 8.1.4"\n  "KOTLIN_VERSION": ">= 1.9.0"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"210-plugin-cordova-plugin-camera",children:"2.10 Plugin cordova-plugin-camera"}),"\n",(0,o.jsx)(n.h4,{id:"error-6",children:"Error:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"supertypes of the following classes cannot be resolved. please make sure you have the required dependencies in the classpath androix.activity.ComponentActivity, unresolved supertypes: androidx.core.app.OnUserLeaveHintProvider adding -Xextended:\n"})}),"\n",(0,o.jsx)(n.h4,{id:"soluci\xf3n-7",children:"Soluci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"El plugin cordova-plugin-camera al momento de instalar genera el error relacionado con androidx.core:core:1.6.+ (adjunto el log) y esto se soluciona agregando las siguientes l\xedneas de c\xf3digo dentro de build.gradle(app):\nconfigurations.all {\n    resolutionStrategy {\n        force 'androidx.core:core:1.9.0'\n        force 'androidx.core:core-ktx:1.9.0'\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);