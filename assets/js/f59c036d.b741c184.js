"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[9925],{9052:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=i(4848),r=i(8453);const t={},o="Phingers Component",l={id:"Phingers_Component",title:"Phingers Component",description:"1. Introduction",source:"@site/cordova_versioned_docs/version-2.0.X/Phingers_Component.md",sourceDirName:".",slug:"/Phingers_Component",permalink:"/sdk-mobile-documentation/docs/cordova/Phingers_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"SelphID Component",permalink:"/sdk-mobile-documentation/docs/cordova/Selphid_Component"},next:{title:"NFC Component",permalink:"/sdk-mobile-documentation/docs/cordova/Nfc_Component"}},c={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Plugin installation: Common",id:"21-plugin-installation-common",level:3},{value:"2.2 Plugin installation: iOS",id:"22-plugin-installation-ios",level:2},{value:"2.2.1 Project configuration",id:"221-project-configuration",level:3},{value:"2.2.2 Update the Podfile",id:"222-update-the-podfile",level:3},{value:"2.2.4 Possible incidents",id:"224-possible-incidents",level:3},{value:"2.3 Plugin installation: Android",id:"23-plugin-installation-android",level:2},{value:"2.3.1 Set Android SDK version",id:"231-set-android-sdk-version",level:3},{value:"2.3.2 Set Android SDK credentials",id:"232-set-android-sdk-credentials",level:4},{value:"2.3.3 Set USERNAME_ARTIFACTORY &amp; TOKEN_ARTIFACTORY",id:"233-set-username_artifactory--token_artifactory",level:4},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"3.0 reticleOrientation",id:"30-reticleorientation",level:3},{value:"3.1 returnFullFrameImage",id:"31-returnfullframeimage",level:3},{value:"3.2 returnProcessedImage",id:"32-returnprocessedimage",level:3},{value:"3.3 returnRawImage",id:"33-returnrawimage",level:3},{value:"3.4 useFlash",id:"34-useflash",level:3},{value:"3.5 useLiveness",id:"35-useliveness",level:3},{value:"3.6 showTutorial",id:"36-showtutorial",level:3},{value:"3.7 vibration",id:"37-vibration",level:3},{value:"3.8 extractionTimeout",id:"38-extractiontimeout",level:3},{value:"3.9 showDiagnostic",id:"39-showdiagnostic",level:3},{value:"3.10 threshold",id:"310-threshold",level:3},{value:"4. Use of the component",id:"4-use-of-the-component",level:2},{value:"5. Return result",id:"5-return-result",level:2},{value:"5.0 finishStatus",id:"50-finishstatus",level:3},{value:"5.1 finishStatusDescription",id:"51-finishstatusdescription",level:3},{value:"5.2 errorType",id:"52-errortype",level:3},{value:"5.3 errorMessage",id:"53-errormessage",level:3},{value:"5.4 fullFrameImage",id:"54-fullframeimage",level:3},{value:"5.5 focusQuality;",id:"55-focusquality",level:3},{value:"5.6 livenessConfidence;",id:"56-livenessconfidence",level:3},{value:"5.7 processedFingers;",id:"57-processedfingers",level:3},{value:"5.8 rawImages;",id:"58-rawimages",level:3},{value:"5.9 wsq;",id:"59-wsq",level:3}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Phingers Component"})}),". This is responsible for capturing the user's fingerprints and subsequently extracting the subsequent fingerprint templates. Its main functionalities are the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Two modes of operation: extraction of all four fingers of the hand (except the thumb), or extraction of the thumb only."}),"\n",(0,s.jsx)(n.li,{children:"Internal camera management."}),"\n",(0,s.jsx)(n.li,{children:"Permit management."}),"\n",(0,s.jsx)(n.li,{children:"Built-in liveness detection."}),"\n",(0,s.jsx)(n.li,{children:"Assistant in the fingerprint capture processes."}),"\n",(0,s.jsx)(n.li,{children:"Generation of templates with the characteristics of fingerprints, images and scores."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,s.jsx)(n.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minimum Android version: 24 - JDK 11"}),"\n",(0,s.jsx)(n.li,{children:"Minimum iOS version: 13"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,s.jsx)(n.p,{children:"armeabi-v7, x86, arm64 and x64"}),"\n",(0,s.jsx)(n.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,s.jsx)(n.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,s.jsxs)(n.p,{children:["We look for the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"package.json"})})," & ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"config.xml"})})," file in the root of the plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["The version is indicated in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"KEY/TAG"})})," version."]}),"\n",(0,s.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,s.jsxs)(n.p,{children:["Before integrating this component ",(0,s.jsx)(n.strong,{children:"it is recommended"})," to read the documentation related to ",(0,s.jsx)(n.strong,{children:"Core Component"})," and follow the instructions indicated in said document."]}),"\n",(0,s.jsxs)("div",{class:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis section will explain step by step how to integrate the current component into an existing project.\nFor this section, the following values \u200b\u200bwill be considered:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path to the root of the application (example: /folder/example)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path to the root of the core plugin, which is required (example: /folder/sdk-core)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_PHINGERS_PATH%>"})," - Path to the root of the current plugin (example: /folder/sdk-phingers)"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"21-plugin-installation-common",children:"2.1. Plugin installation: Common"}),"\n",(0,s.jsxs)(n.p,{children:["The plugin allows execution on ",(0,s.jsx)(n.strong,{children:"Android and iOS"})," platforms. This section explains common steps. To install the plugin you must follow the following steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure React Native is installed."}),"\n",(0,s.jsxs)(n.li,{children:["Access ",(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," in a terminal and execute:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[ionic] cordova plugin add @facephi/sdk-core-cordova\n[ionic] cordova plugin add @facephi/sdk-phingers-cordova\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is important to verify that the path to the plugin is correctly defined in package.json:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"dependencies": {\n  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,\n  "@facephi/sdk-phingers-cordova": <% PLUGIN_PHINGERS_PATH %>\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After executing the above steps, you can launch the application with the sdk/component installed.\nFrom different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using ",(0,s.jsx)(n.strong,{children:"Android Studio"})," and ",(0,s.jsx)(n.strong,{children:"XCode"})," respectively."]}),"\n",(0,s.jsx)(n.h2,{id:"22-plugin-installation-ios",children:"2.2 Plugin installation: iOS"}),"\n",(0,s.jsx)(n.h3,{id:"221-project-configuration",children:"2.2.1 Project configuration"}),"\n",(0,s.jsx)(n.p,{children:"For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add camera permissions"}),": To use the component, it is necessary to enable the camera permission in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"info.plist"})})," file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following ",(0,s.jsx)(n.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"222-update-the-podfile",children:"2.2.2 Update the Podfile"}),"\n",(0,s.jsx)(n.p,{children:"In the project podfile it will be necessary to add the information of the private repository (see section 2.1). To do this, the following lines must be added to the beginning of the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nTo know more about the configuration and use of ",(0,s.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", it is necessary to access the following ",(0,s.jsx)(n.em,{children:"Core Component"})," document."]})}),"\n",(0,s.jsx)(n.h3,{id:"224-possible-incidents",children:"2.2.4 Possible incidents"}),"\n",(0,s.jsx)(n.p,{children:"If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"ios"})," folder of the application in a terminal."]}),"\n",(0,s.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,s.jsx)(n.li,{children:"Run the following command (or open the project with Xcode and run it):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod install --repo-update\n"})}),"\n",(0,s.jsx)(n.h2,{id:"23-plugin-installation-android",children:"2.3 Plugin installation: Android"}),"\n",(0,s.jsx)(n.h3,{id:"231-set-android-sdk-version",children:"2.3.1 Set Android SDK version"}),"\n",(0,s.jsxs)(n.p,{children:["For Android, the minimum SDK version required by our native libraries is ",(0,s.jsx)(n.strong,{children:"24"}),", so if your app has a ",(0,s.jsx)(n.em,{children:"minimum SDK"})," defined lower than this, it will need to be modified to avoid a build error. To do this, access the application's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build.gradle"})})," file (located in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"232-set-android-sdk-credentials",children:"2.3.2 Set Android SDK credentials"}),"\n",(0,s.jsxs)(n.p,{children:["For security and maintenance reasons, the new ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SDKMobile"})})," components\nare stored in private repositories requiring specific credentials. For\nthat reason, those credentials must be added to the ",(0,s.jsx)(n.strong,{children:"build.gradle"}),"\nfile (inside the ",(0,s.jsx)(n.strong,{children:"repositories"})," section):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'maven {\n    name = "external"\n    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")\n    credentials {\n        username = System.getenv("USERNAME_ARTIFACTORY")\n        password =  System.getenv("TOKEN_ARTIFACTORY")\n    }\n}\n'})}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nFor the project to correctly retrieve the dependencies, the\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"credentials"})})," (",(0,s.jsx)(n.strong,{children:"Username"})," and ",(0,s.jsx)(n.strong,{children:"Token"}),") must be configured\ncorrectly"]})}),"\n",(0,s.jsx)(n.h4,{id:"233-set-username_artifactory--token_artifactory",children:"2.3.3 Set USERNAME_ARTIFACTORY & TOKEN_ARTIFACTORY"}),"\n",(0,s.jsx)(n.p,{children:"Open the .zshrc & .bash_profile files and put the credentials provided by Facephi:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export USERNAME_ARTIFACTORY=username@facephi.es\nexport TOKEN_ARTIFACTORY=token_provided_by_facephi\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The current component contains a series of Typescript methods and interfaces included within the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SdkPhingersConfig.js"})})," file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is the ",(0,s.jsx)(n.em,{children:"SdkPhingersConfig"})," class, which allows you to configure the ",(0,s.jsx)(n.strong,{children:"Phingers"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'SdkPhingersConfig = function () {\n    this.reticleOrientation     = "left";\n    this.returnFullFrameImage   = true;\n    this.returnProcessedImage   = true;\n    this.returnRawImage         = true;\n    this.returnWSQ              = null;\n    this.useFlash               = true;\n    this.useLiveness            = true;\n    this.showTutorial           = false;\n    this.extractionTimeout      = 30000;\n    this.vibration;\n    this.showDiagnostic;\n    this.threshold;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Next, all the properties that can be defined in the ",(0,s.jsx)(n.strong,{children:"PhingersConfiguration"})," object will be discussed:"]}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAll configuration can be found in the component's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"sdk-phingers/www/SdkPhingersConfig.js"})})," file."]})}),"\n",(0,s.jsx)(n.p,{children:"When calling the component, there are a series of parameters that must be included. They will be briefly discussed below."}),"\n",(0,s.jsx)(n.h3,{id:"30-reticleorientation",children:"3.0 reticleOrientation"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"PhingersReticleOrientation"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"reticleOrientation: PhingersReticleOrientation.DT_LEFT;,\n"})}),"\n",(0,s.jsx)(n.h3,{id:"31-returnfullframeimage",children:"3.1 returnFullFrameImage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"returnFullFrameImage: true,\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-returnprocessedimage",children:"3.2 returnProcessedImage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"returnProcessedImage: true;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"33-returnrawimage",children:"3.3 returnRawImage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mReturnRawImage: true;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"34-useflash",children:"3.4 useFlash"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"useFlash: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"35-useliveness",children:"3.5 useLiveness"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"useLiveness: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"36-showtutorial",children:"3.6 showTutorial"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showTutorial: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"37-vibration",children:"3.7 vibration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"vibration: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"38-extractiontimeout",children:"3.8 extractionTimeout"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"int"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"extractionTimeout: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"39-showdiagnostic",children:"3.9 showDiagnostic"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showDiagnostic: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"310-threshold",children:"3.10 threshold"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"double"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"threshold: 0.8;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-use-of-the-component",children:"4. Use of the component"}),"\n",(0,s.jsx)(n.p,{children:"Below will be shown how to execute the functionality of the current component."}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nRemember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation."]})}),"\n",(0,s.jsx)(n.p,{children:"Once the component is configured, to launch it the following code must be executed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'function callPhingers()\n{\n    if (typeof facephi.plugins.sdkphingers === "undefined") {\n        showErrorUI("Cordova Phinger Sdk is not installed...");\n        return;\n    }\n\n    console.log(\'callPhingers started...\');\n    $("#messageResult").html("Starting proccess...").addClass("blink").css("color", "#000000").css("text-align","center").show();\n\n    if (isStartingSDK) {\n        console.log("A process is running...");\n        return false;\n    }\n    if (!isStartingSDK) {\n        isStartingSDK = true;\n    }\n\n    phingersResponse    = null;\n    var config          = new SdkPhingersConfig();\n    // SdkPhingersCaptureOrientation capture orientation.\n    config.setReticleOrientation(facephi.plugins.sdkphingers.captureorientation.SdkPhingersCaptureOrientation.left)\n    config.setReturnFullFrameImage(true);\n    config.setReturnProcessedImage(true);\n    config.setReturnRawImage(true);\n    config.setUseFlash(true);\n    config.setUseLiveness(true);\n\n    facephi.plugins.sdkphingers.launchPhingers(config)\n    .then(\n        (result) => onSuccessPhingersExtraction(result),\n        (err) => onErrorPhingersExtraction(err),\n    )\n    .finally (() =>\n    {\n        console.log("callPhingers finished...");\n        $("#messageResult").html("").removeClass("blink").css("color", "#ff0000").css("text-align", "center").show();\n        isStartingSDK = false\n    });\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-return-result",children:"5. Return result"}),"\n",(0,s.jsxs)(n.p,{children:["As shown in the above example, the result is returned in the form of a ",(0,s.jsx)(n.strong,{children:"JSON"})," object through ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Promises"})}),", whether it is a successful operation or an error:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'facephi.plugins.sdkphingers.launchPhingers(config)\n.then(\n    (result) => onSuccessPhingersExtraction(result),\n    (err) => onErrorPhingersExtraction(err),\n)\n.finally (() =>\n{\n    console.log("callPhingers finished...");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Regardless of whether the result is correct/wrong, the result will have the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PhingersResult {\n    finishStatus: number;\n    finishStatusDescription?: string;\n    errorType: string;\n    errorMessage?: string;\n    template?: any;\n    processedFingers?: any;\n    rawFingers?: any;\n    wsq?: any;\n    focusQuality?: any;\n    nfiqMetricsTransactionId?: any;\n    livenessConfidence?: any;\n    fullFrameImage?: any;\n}\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThe result will be returned through a Promise that contains an object of the class ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"PhingersResult"})}),". Below is more information about these fields."]})}),"\n",(0,s.jsx)(n.h3,{id:"50-finishstatus",children:"5.0 finishStatus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1"}),": The operation was successful."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"2"}),": An error has occurred, which will be indicated in the errorDiagnostic enumerated and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"51-finishstatusdescription",children:"5.1 finishStatusDescription"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_OK"}),": The operation was successful."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_ERROR"}),": An error has occurred, which will be indicated in the errorDiagnostic enumerated and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-errortype",children:"5.2 errorType"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the type of error that occurred (if there was one, which is indicated by the ",(0,s.jsx)(n.code,{children:"finishStatus"})," parameter with the value ",(0,s.jsx)(n.code,{children:"Error"}),"). The values \u200b\u200bit can have are the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NoError"}),": No error has occurred. The process can continue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnknownError"}),": Unhandled error. Possibly caused by a bug in the resource bundle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CameraPermissionDenied"}),": The exception that is thrown when the sdk does not have permission to access the camera."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": The exception that is thrown when the widget does not have permission to access system settings (",(0,s.jsx)(n.em,{children:"deprecated"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"HardwareError"}),": Exception that occurs when there is a hardware problem with the device, usually caused by very few available resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ExtractionLicenceError"}),": Exception that occurs when there has been a licencing problem on the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Exception that occurs during the capture of frames by the camera."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ControlNotInitialisedError"}),": The widget configurator has not been initialised."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problem arose during widget configuration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CancelByUser"}),": The exception that is thrown when the user stops the extraction manually."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TimeOut"}),": Exception that is thrown when a maximum time elapses without successfully completing the extraction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitProccessError"}),": Exception that is thrown when the sdk cannot process the captured images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NfcError"}),": The exception that is thrown when the sdk does not have permission to access the nfc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NetworkConnection"}),": The exception that is thrown when there are issues with the means the device uses to connect to the network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TokenError"}),": The exception that is thrown when an invalid token is passed as a parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitSessionError"}),": The exception that is thrown when session cannot be initialised. The normal thing is that it happens because the ",(0,s.jsx)(n.code,{children:"SdkCore"})," was not called when calling any other component."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ComponentControllerError"}),": The exception that is thrown when the component cannot be instantiated."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-errormessage",children:"5.3 errorMessage"}),"\n",(0,s.jsx)(n.p,{children:"Indicates an additional error message if necessary. It is an optional value."}),"\n",(0,s.jsx)(n.h3,{id:"54-fullframeimage",children:"5.4 fullFrameImage"}),"\n",(0,s.jsx)(n.h3,{id:"55-focusquality",children:"5.5 focusQuality;"}),"\n",(0,s.jsx)(n.h3,{id:"56-livenessconfidence",children:"5.6 livenessConfidence;"}),"\n",(0,s.jsx)(n.h3,{id:"57-processedfingers",children:"5.7 processedFingers;"}),"\n",(0,s.jsx)(n.h3,{id:"58-rawimages",children:"5.8 rawImages;"}),"\n",(0,s.jsx)(n.h3,{id:"59-wsq",children:"5.9 wsq;"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);