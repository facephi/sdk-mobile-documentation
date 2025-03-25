"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2491],{8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var o=i(6540);const s={},r=o.createContext(s);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}},8931:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Voice_Component","title":"Voice Component","description":"1. Introduction","source":"@site/cordova_versioned_docs/version-2.0.X/Voice_Component.md","sourceDirName":".","slug":"/Voice_Component","permalink":"/sdk-mobile-documentation/docs/cordova/Voice_Component","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"VideoId Component","permalink":"/sdk-mobile-documentation/docs/cordova/VideoId_Component"},"next":{"title":"Example Application","permalink":"/sdk-mobile-documentation/docs/cordova/Sample_applications_use"}}');var s=i(4848),r=i(8453);const t={},l="Voice Component",d={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Plugin installation: Common",id:"21-plugin-installation-common",level:3},{value:"2.2 Plugin installation: iOS",id:"22-plugin-installation-ios",level:2},{value:"2.2.1 Project configuration",id:"221-project-configuration",level:3},{value:"2.2.2 Update the Podfile",id:"222-update-the-podfile",level:3},{value:"2.2.3 Possible incidents",id:"223-possible-incidents",level:3},{value:"2.3 Plugin installation: Android",id:"23-plugin-installation-android",level:2},{value:"2.3.1 Set Android SDK version",id:"231-set-android-sdk-version",level:3},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"3.1 vibrationEnabled",id:"31-vibrationenabled",level:3},{value:"3.2 showTutorial",id:"32-showtutorial",level:3},{value:"3.3 phrases",id:"33-phrases",level:3},{value:"3.4 timeout",id:"34-timeout",level:3},{value:"3.5 showDiagnostic",id:"35-showdiagnostic",level:3},{value:"3.6 returnAudios",id:"36-returnaudios",level:3},{value:"3.7 returnTokenizedAudios",id:"37-returntokenizedaudios",level:3},{value:"4. Use of the component",id:"4-use-of-the-component",level:2},{value:"5. Return result",id:"5-return-result",level:2},{value:"5.1 finishStatus",id:"51-finishstatus",level:3},{value:"5.2 finishStatusDescription",id:"52-finishstatusdescription",level:3},{value:"5.3 errorMessage",id:"53-errormessage",level:3},{value:"5.4 errorType",id:"54-errortype",level:3},{value:"5.5 audios:",id:"55-audios",level:3},{value:"5.6 tokenizedAudios",id:"56-tokenizedaudios",level:3}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"voice-component",children:"Voice Component"})}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Voice Component"})}),". This is responsible for capturing the user's voice and subsequently extracting the corresponding templates. Its main functionalities are the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Entry of a certain number of sentences to later read each one in one step."}),"\n",(0,s.jsx)(n.li,{children:"Internal microphone management."}),"\n",(0,s.jsx)(n.li,{children:"Permit management."}),"\n",(0,s.jsx)(n.li,{children:"Analysis of silences."}),"\n",(0,s.jsx)(n.li,{children:"Analysis of progress."}),"\n",(0,s.jsx)(n.li,{children:"Assistant in the capture processes."}),"\n",(0,s.jsx)(n.li,{children:"Generation of templates with voice characteristics and scores."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,s.jsx)(n.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minimum Android version: 24 - JDK 17"}),"\n",(0,s.jsxs)(n.li,{children:["Minimum Build Tools version: ",(0,s.jsx)(n.strong,{children:"8.1.4"})]}),"\n",(0,s.jsxs)(n.li,{children:["Minimum Kotlin Android version: ",(0,s.jsx)(n.strong,{children:"1.9.0"})]}),"\n",(0,s.jsx)(n.li,{children:"Minimum iOS version: 13"}),"\n",(0,s.jsxs)(n.li,{children:["Minimum Cordova Android version: ",(0,s.jsx)(n.strong,{children:"12.0.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Minimum Cordova iOS version: ",(0,s.jsx)(n.strong,{children:"7.0.0"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,s.jsx)(n.p,{children:"armeabi-v7, x86, arm64 and x64"}),"\n",(0,s.jsx)(n.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,s.jsx)(n.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,s.jsxs)(n.p,{children:["We look for the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"package.json"})})," & ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"config.xml"})})," file in the root of the plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["The version is indicated in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"KEY/TAG"})})," version."]}),"\n",(0,s.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,s.jsxs)(n.p,{children:["Before integrating this component ",(0,s.jsx)(n.strong,{children:"it is recommended"})," to read the documentation related to ",(0,s.jsx)(n.strong,{children:"Core Component"})," and follow the instructions indicated in said document."]}),"\n",(0,s.jsxs)("div",{class:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis section will explain step by step how to integrate the current component into an existing project.\nFor this section, the following values \u200b\u200bwill be considered:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path to the root of the application (example: /folder/example)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path to the root of the core plugin, which is required (example: /folder/sdk-core)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_VOICE_PATH%>"})," - Path to the root of the current plugin (example: /folder/sdk-voice)"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"21-plugin-installation-common",children:"2.1. Plugin installation: Common"}),"\n",(0,s.jsxs)(n.p,{children:["The plugin allows execution on ",(0,s.jsx)(n.strong,{children:"Android and iOS"})," platforms. This section explains common steps. To install the plugin you must follow the following steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make sure ",(0,s.jsx)(n.strong,{children:"Cordova"})," is installed."]}),"\n",(0,s.jsxs)(n.li,{children:["Access ",(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," in a terminal and execute:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[ionic] cordova plugin add @facephi/sdk-core-cordova\n[ionic] cordova plugin add @facephi/sdk-voice-cordova\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is important to verify that the path to the plugin is correctly defined in package.json:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"dependencies": {\n  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,\n  "@facephi/sdk-voice-cordova": <% PLUGIN_VOICE_PATH %>\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After executing the above steps, you can launch the application with the sdk/component installed.\nFrom different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using ",(0,s.jsx)(n.strong,{children:"Android Studio"})," and ",(0,s.jsx)(n.strong,{children:"XCode"})," respectively."]}),"\n",(0,s.jsx)(n.h2,{id:"22-plugin-installation-ios",children:"2.2 Plugin installation: iOS"}),"\n",(0,s.jsx)(n.h3,{id:"221-project-configuration",children:"2.2.1 Project configuration"}),"\n",(0,s.jsx)(n.p,{children:"For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add camera permissions"}),": To use the component, it is necessary to enable the camera permission in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"info.plist"})})," file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following ",(0,s.jsx)(n.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"222-update-the-podfile",children:"2.2.2 Update the Podfile"}),"\n",(0,s.jsx)(n.p,{children:"In the project podfile it will be necessary to add the information of the private repository (see section 2.1). To do this, the following lines must be added to the beginning of the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nTo know more about the configuration and use of ",(0,s.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", it is necessary to access the following ",(0,s.jsx)(n.em,{children:"Core Component"})," document."]})}),"\n",(0,s.jsx)(n.h3,{id:"223-possible-incidents",children:"2.2.3 Possible incidents"}),"\n",(0,s.jsx)(n.p,{children:"If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"ios"})," folder of the application in a terminal."]}),"\n",(0,s.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,s.jsx)(n.li,{children:"Run the following command (or open the project with Xcode and run it):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod install --repo-update\n"})}),"\n",(0,s.jsx)(n.h2,{id:"23-plugin-installation-android",children:"2.3 Plugin installation: Android"}),"\n",(0,s.jsx)(n.h3,{id:"231-set-android-sdk-version",children:"2.3.1 Set Android SDK version"}),"\n",(0,s.jsxs)(n.p,{children:["For Android, the minimum SDK version required by our native libraries is ",(0,s.jsx)(n.strong,{children:"24"}),", so if your app has a ",(0,s.jsx)(n.em,{children:"minimum SDK"})," defined lower than this, it will need to be modified to avoid a build error. To do this, access the application's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build.gradle"})})," file (located in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The current component contains a series of Typescript methods and interfaces included within the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SdkVoiceConfig.js"})})," file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is the ",(0,s.jsx)(n.em,{children:"VoiceConfiguration"})," class, which allows you to configure the ",(0,s.jsx)(n.strong,{children:"Voice"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'SdkVoiceConfig = function () \n{\n    this.vibrationEnabled = true;\n    this.showTutorial = true;\n    this.phrases = "";\n    this.timeout = 30000;\n    this.showDiagnostic;\n    this.returnAudios;\n    this.returnTokenizedAudios;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Next, all the properties that can be defined in the ",(0,s.jsx)(n.strong,{children:"VoiceConfiguration"})," object will be discussed:"]}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAll configuration can be found in the component's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"sdk-voice/www/SdkVoiceConfig.js"})})," file."]})}),"\n",(0,s.jsx)(n.p,{children:"When calling the component, there are a series of parameters that must be included. They will be briefly discussed below."}),"\n",(0,s.jsx)(n.h3,{id:"31-vibrationenabled",children:"3.1 vibrationEnabled"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Enable or disable the plugin's vibration option."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"vibrationEnabled: true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-showtutorial",children:"3.2 showTutorial"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether you want to show the complete tutorial of the process or just the simplified version."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showTutorial: true;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"33-phrases",children:"3.3 phrases"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates the phrase(s) required to capture. If more than one phrase is used, it will be separated by the pipe(|) symbol."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"phrases: 'hola mundo|hola voice component|hola Facephi',\n"})}),"\n",(0,s.jsx)(n.h3,{id:"34-timeout",children:"3.4 timeout"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates the time that the component finishes due to inactivity."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"timeout: 10000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"35-showdiagnostic",children:"3.5 showDiagnostic"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether you want to show a diagnosis in case of failure."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showDiagnostic: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"36-returnaudios",children:"3.6 returnAudios"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Enable or disable the option to return recorded audios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"returnAudios: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"37-returntokenizedaudios",children:"3.7 returnTokenizedAudios"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Enable or disable the option to return tokenized recorded audios."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"returnTokenizedAudios: false;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-use-of-the-component",children:"4. Use of the component"}),"\n",(0,s.jsx)(n.p,{children:"Below will be shown how to execute the functionality of the current component."}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nRemember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation."]})}),"\n",(0,s.jsx)(n.p,{children:"Once the component is configured, to launch it the following code must be executed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'function callVoice()\n{\n    if (typeof facephi.plugins.sdkvoice === "undefined") {\n        showErrorUI("Cordova Voice Sdk is not installed...");\n        return;\n    }\n\n    var config = new SdkVoiceConfig();\n    config.setPhrases("Hola Facephi Component|Hello world|Desarrollo del componente Voice")\n    config.setVibrationEnabled(true);\n    config.setShowTutorial(true);\n\n    voiceResponse = null;\n    facephi.plugins.sdkvoice.launchVoice(config)\n    .then(\n        (result) => console.log(result),\n        (err) => console.log(err),\n    )\n    .finally (() =>\n    {\n        console.log("callVoice finished...");\n    });\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-return-result",children:"5. Return result"}),"\n",(0,s.jsxs)(n.p,{children:["As shown in the above example, the result is returned in the form of a ",(0,s.jsx)(n.strong,{children:"JSON"})," object through ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Promises"})}),", whether it is a successful operation or an error:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'facephi.plugins.sdkvoice.launchVoice(config)\n.then(\n    (result) => console.log(result),\n    (err) => console.log(err),\n)\n.finally (() =>\n{\n    console.log("callVoice finished...");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Regardless of whether the result is correct/wrong, the result will have the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"VoiceResult {\n    finishStatus: number;\n    finishStatusDescription?: string;\n    errorType: string;\n    errorMessage?: string;\n    audios?: any;\n    tokenizedAudios?: any;\n}\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThe result will be returned through a Promise that contains an object of the class ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SdkVoiceResult"})}),". Below is more information about these fields."]})}),"\n",(0,s.jsx)(n.h3,{id:"51-finishstatus",children:"5.1 finishStatus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1"}),": The operation was successful."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"2"}),": An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-finishstatusdescription",children:"5.2 finishStatusDescription"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_OK"}),": The operation was successful."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_ERROR"}),": An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-errormessage",children:"5.3 errorMessage"}),"\n",(0,s.jsx)(n.p,{children:"Indicates an additional error message if necessary. It is an optional value."}),"\n",(0,s.jsx)(n.h3,{id:"54-errortype",children:"5.4 errorType"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the type of error that occurred (if there was one, which is indicated by the ",(0,s.jsx)(n.code,{children:"finishStatus"})," parameter with the value ",(0,s.jsx)(n.code,{children:"Error"}),"). The values \u200b\u200bit can have are the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NoError"}),": No error has occurred. The process can continue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnknownError"}),": Unhandled error. Possibly caused by a bug in the resource bundle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CameraPermissionDenied"}),": The exception that is thrown when the sdk does not have permission to access the camera."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": The exception that is thrown when the component does not have permission to access system settings (",(0,s.jsx)(n.em,{children:"deprecated"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"HardwareError"}),": Exception that occurs when there is a hardware problem with the device, usually caused by very few available resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ExtractionLicenceError"}),": Exception that occurs when there has been a licencing problem on the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Exception that occurs during the capture of frames by the camera."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ControlNotInitialisedError"}),": The component configurator has not been initialised."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problem arose during component configuration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CancelByUser"}),": The exception that is thrown when the user stops the extraction manually."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TimeOut"}),": Exception that is thrown when a maximum time elapses without successfully completing the extraction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitProccessError"}),": Exception that is thrown when the sdk cannot process the captured images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NfcError"}),": The exception that is thrown when the sdk does not have permission to access the nfc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NetworkConnection"}),": The exception that is thrown when there are issues with the means the device uses to connect to the network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TokenError"}),": The exception that is thrown when an invalid token is passed as a parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitSessionError"}),": The exception that is thrown when session cannot be initialised. The normal thing is that it happens because the ",(0,s.jsx)(n.code,{children:"SdkCore"})," was not called when calling any other component."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ComponentControllerError"}),": The exception that is thrown when the component cannot be instantiated."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"55-audios",children:"5.5 audios:"}),"\n",(0,s.jsx)(n.p,{children:"Returns the recorded audios. Only if the param returnAudios was setted in true."}),"\n",(0,s.jsx)(n.h3,{id:"56-tokenizedaudios",children:"5.6 tokenizedAudios"}),"\n",(0,s.jsx)(n.p,{children:"Returns the tokenized recorded audios. Only if the param returnTokenizedAudios was setted in true."})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);