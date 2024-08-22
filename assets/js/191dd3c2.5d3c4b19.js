"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7210],{2255:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=i(4848),o=i(8453);const s={},t="Migrate from 1.4.X to 2.0.X",d={id:"migration_140_200",title:"Migrate from 1.4.X to 2.0.X",description:"1. Introduction",source:"@site/cordova_versioned_docs/version-2.0.X/migration_140_200.md",sourceDirName:".",slug:"/migration_140_200",permalink:"/sdk-mobile-documentation/docs/cordova/migration_140_200",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Example Application",permalink:"/sdk-mobile-documentation/docs/cordova/Sample_applications_use"}},a={},l=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Possible issues",id:"2-possible-issues",level:2},{value:"2.1 Upgrading compileSDKVersion",id:"21-upgrading-compilesdkversion",level:3},{value:"Error",id:"error",level:4},{value:"Solution",id:"solution",level:4},{value:"2.2 Upgrading Gradle Build Tools",id:"22-upgrading-gradle-build-tools",level:3},{value:"Error",id:"error-1",level:4},{value:"Solution",id:"solution-1",level:4},{value:"2.3 Changing result diagnostics",id:"23-changing-result-diagnostics",level:3},{value:"Solution",id:"solution-2",level:4},{value:"2.4 Compose + Kotlin version",id:"24-compose--kotlin-version",level:3},{value:"Error",id:"error-2",level:4},{value:"Solution",id:"solution-3",level:4}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"migrate-from-14x-to-20x",children:"Migrate from 1.4.X to 2.0.X"})}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThe following document contains different issues that can appear during the migration from SDK Mobile ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"1.4.X version"})})," to the SDK Mobile ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"2.0.X version"})}),". Depending on the developer application and its configuration."]})}),"\n",(0,r.jsx)(n.h2,{id:"2-possible-issues",children:"2. Possible issues"}),"\n",(0,r.jsx)(n.h3,{id:"21-upgrading-compilesdkversion",children:"2.1 Upgrading compileSDKVersion"}),"\n",(0,r.jsx)(n.h4,{id:"error",children:"Error"}),"\n",(0,r.jsxs)(n.p,{children:["Due to an older ",(0,r.jsx)(n.em,{children:"compileSDKVersion"})," configuration, with this new version can appear this error:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Execution failed for task ':app:checkDebugAarMetadata'.\n \n A failure occurred while executing com.android.build.gradle.internal.tasks.CheckAarMetadataWorkAction\n   One or more issues found when checking AAR metadata values:\n \n Dependency 'androidx.navigation:navigation-common:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \n Compilation target for module ':app' is 'android-33'\n\nDependency 'androidx.navigation:navigation-runtime:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \nCompilation target for module ':app' is 'android-33'\n  \nDependency 'androidx.navigation:navigation-common-ktx:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.\n  \nCompilation target for module ':app' is 'android-33'\n"})}),"\n",(0,r.jsx)(n.h4,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"Change in your application the minimum SDK version to 24:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"defaultConfig {\n        // You can update the following values to match your application needs.\n        // For more information, see: https://docs.flutter.dev/deployment/android#reviewing-the-build-configuration. \n        minSdkVersion 24\n        targetSdkVersion flutter.targetSdkVersion // targetSdkVersion 34\n        versionCode flutterVersionCode.toInteger()\n        versionName flutterVersionName\n    }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"22-upgrading-gradle-build-tools",children:"2.2 Upgrading Gradle Build Tools"}),"\n",(0,r.jsx)(n.h4,{id:"error-1",children:"Error"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  Caused by: org.gradle.api.internal.artifacts.transform.TransformException: Execution failed for DexingNoClasspathTransform: /Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar.\n    at org.gradle.api.internal.artifacts.transform.DefaultTransformerInvocationFactory$1.lambda$mapResult$3(\n    ... 2 more\n  Caused by: com.android.builder.dexing.DexArchiveBuilderException: Error while dexing.\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'  AGPBI: {"kind":"error","text":"com.android.tools.r8.internal.YI0: Sealed classes are not supported as program classes","sources":[{"file":"/Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar"}],"tool":"D8"}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"solution-1",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"In android/build.gradle file, change de gradle.build.tools to 7.4.0 or more:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" buildscript {\n      ext.kotlin_version = '1.8.10'\n      repositories {\n          google()\n          mavenCentral()\n      }\n\n      dependencies {\n          classpath 'com.android.tools.build:gradle:7.4.0' // 7.4.0\n          classpath 'org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version'\n      }\n  }\n"})}),"\n",(0,r.jsx)(n.p,{children:"In gradle-wrapper.properties file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  distributionBase=GRADLE_USER_HOME\n  distributionPath=wrapper/dists\n  zipStoreBase=GRADLE_USER_HOME\n  zipStorePath=wrapper/dists\n  distributionUrl=https\\://services.gradle.org/distributions/gradle-7.5-all.zip // 7.5-all.zip\n"})}),"\n",(0,r.jsx)(n.h3,{id:"23-changing-result-diagnostics",children:"2.3 Changing result diagnostics"}),"\n",(0,r.jsx)(n.h4,{id:"solution-2",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"This parameter errorDiagnostic:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"final SdkErrorType errorDiagnostic; \n"})}),"\n",(0,r.jsx)(n.p,{children:"Now it\u2019s an String in the 2.0.0 version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"final String errorDiagnostic;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"24-compose--kotlin-version",children:"2.4 Compose + Kotlin version"}),"\n",(0,r.jsx)(n.h4,{id:"error-2",children:"Error"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"java.lang.NoClassDefFoundError: Failed resolution of: Landroidx/compose/ui/platform/ComposeView;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"solution-3",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"In the build.gradle(android) add:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    dependencies {\n      classpath "com.android.tools.build:gradle:7.4.2"\n      classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.8.0" // ADD THIS LINE\n    }\n'})}),"\n",(0,r.jsx)(n.p,{children:"And in the build.gradle(app) add:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apply plugin: 'com.android.application'\napply plugin: 'kotlin-android' // ADD THIS LINE\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var r=i(6540);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);