"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[9925],{695:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Phingers_Component","title":"Phingers Component","description":"1. Introduction","source":"@site/cordova_versioned_docs/version-2.0.X/Phingers_Component.md","sourceDirName":".","slug":"/Phingers_Component","permalink":"/sdk-mobile-documentation/docs/cordova/Phingers_Component","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"SelphID Component","permalink":"/sdk-mobile-documentation/docs/cordova/Selphid_Component"},"next":{"title":"NFC Component","permalink":"/sdk-mobile-documentation/docs/cordova/Nfc_Component"}}');var r=i(4848),t=i(8453);const o={},l="Phingers Component",d={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Plugin installation: Common",id:"21-plugin-installation-common",level:3},{value:"2.2 Plugin installation: iOS",id:"22-plugin-installation-ios",level:2},{value:"2.2.1 Project configuration",id:"221-project-configuration",level:3},{value:"2.2.2 Update the Podfile",id:"222-update-the-podfile",level:3},{value:"2.2.3 Possible issues",id:"223-possible-issues",level:3},{value:"2.3 Plugin installation: Android",id:"23-plugin-installation-android",level:2},{value:"2.3.1 Set Android SDK version",id:"231-set-android-sdk-version",level:3},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"3.1 reticleOrientation",id:"31-reticleorientation",level:3},{value:"3.2 returnFullFrameImage",id:"32-returnfullframeimage",level:3},{value:"3.3 returnProcessedImage",id:"33-returnprocessedimage",level:3},{value:"3.4 returnRawImage",id:"34-returnrawimage",level:3},{value:"3.5 useFlash",id:"35-useflash",level:3},{value:"3.6 useLiveness",id:"36-useliveness",level:3},{value:"3.7 showTutorial",id:"37-showtutorial",level:3},{value:"3.8 vibration",id:"38-vibration",level:3},{value:"3.9 extractionTimeout",id:"39-extractiontimeout",level:3},{value:"3.10 showDiagnostic",id:"310-showdiagnostic",level:3},{value:"3.11 threshold",id:"311-threshold",level:3},{value:"3.12. showPreviousTip",id:"312-showprevioustip",level:4},{value:"4. Use of the component",id:"4-use-of-the-component",level:2},{value:"5. Return result",id:"5-return-result",level:2},{value:"5.0 finishStatus",id:"50-finishstatus",level:3},{value:"5.1 finishStatusDescription",id:"51-finishstatusdescription",level:3},{value:"5.2 errorMessage",id:"52-errormessage",level:3},{value:"5.3 fullFrameImage",id:"53-fullframeimage",level:3},{value:"5.4 focusQuality",id:"54-focusquality",level:3},{value:"5.6 livenessConfidence",id:"56-livenessconfidence",level:3},{value:"5.7 processedFingers",id:"57-processedfingers",level:3},{value:"5.8 rawImages",id:"58-rawimages",level:3},{value:"5.9 wsq",id:"59-wsq",level:3},{value:"5.10 nfiqMetrics",id:"510-nfiqmetrics",level:3}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"})}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Phingers Component"})}),". This is responsible for capturing the user's fingerprints and subsequently extracting the subsequent fingerprint templates. Its main functionalities are the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Two modes of operation: extraction of all four fingers of the hand (except the thumb), or extraction of the thumb only."}),"\n",(0,r.jsx)(n.li,{children:"Internal camera management."}),"\n",(0,r.jsx)(n.li,{children:"Permit management."}),"\n",(0,r.jsx)(n.li,{children:"Built-in liveness detection."}),"\n",(0,r.jsx)(n.li,{children:"Assistant in the fingerprint capture processes."}),"\n",(0,r.jsx)(n.li,{children:"Generation of templates with the characteristics of fingerprints, images and scores."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,r.jsx)(n.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Minimum Android version: 24 - JDK 17"}),"\n",(0,r.jsxs)(n.li,{children:["Minimum Build Tools version: ",(0,r.jsx)(n.strong,{children:"8.3.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum Kotlin Android version: ",(0,r.jsx)(n.strong,{children:"1.9.0"})]}),"\n",(0,r.jsx)(n.li,{children:"Minimum iOS version: 13"}),"\n",(0,r.jsxs)(n.li,{children:["Minimum Cordova Android version: ",(0,r.jsx)(n.strong,{children:"12.0.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum Cordova iOS version: ",(0,r.jsx)(n.strong,{children:"7.0.0"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,r.jsx)(n.p,{children:"armeabi-v7, x86, arm64 and x64"}),"\n",(0,r.jsx)(n.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,r.jsx)(n.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,r.jsxs)(n.p,{children:["We look for the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"package.json"})})," and ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"config.xml"})})," file in the root of the plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["The version is indicated in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"KEY/TAG"})})," version."]}),"\n",(0,r.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,r.jsxs)(n.p,{children:["Before integrating this component ",(0,r.jsx)(n.strong,{children:"it is recommended"})," to read the documentation related to ",(0,r.jsx)(n.strong,{children:"Core Component"})," and follow the instructions indicated in said document."]}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis section will explain step by step how to integrate the current component into an existing project.\nFor this section, the following values \u200b\u200bwill be considered:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path to the root of the application (example: /folder/example)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path to the root of the core plugin, which is required (example: /folder/sdk-core)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%PLUGIN_PHINGERS_PATH%>"})," - Path to the root of the current plugin (example: /folder/sdk-phingers)"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"21-plugin-installation-common",children:"2.1. Plugin installation: Common"}),"\n",(0,r.jsxs)(n.p,{children:["The plugin allows execution on ",(0,r.jsx)(n.strong,{children:"Android and iOS"})," platforms. This section explains common steps. To install the plugin you must follow the following steps:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure React Native is installed."}),"\n",(0,r.jsxs)(n.li,{children:["Access ",(0,r.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," in a terminal and execute:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[ionic] cordova plugin add @facephi/sdk-core-cordova\n[ionic] cordova plugin add @facephi/sdk-phingers-cordova\n"})}),"\n",(0,r.jsx)(n.p,{children:"It is important to verify that the path to the plugin is correctly defined in package.json:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"dependencies": {\n  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,\n  "@facephi/sdk-phingers-cordova": <% PLUGIN_PHINGERS_PATH %>\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After executing the above steps, you can launch the application with the sdk/component installed.\nFrom different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using ",(0,r.jsx)(n.strong,{children:"Android Studio"})," and ",(0,r.jsx)(n.strong,{children:"XCode"})," respectively."]}),"\n",(0,r.jsx)(n.h2,{id:"22-plugin-installation-ios",children:"2.2 Plugin installation: iOS"}),"\n",(0,r.jsx)(n.h3,{id:"221-project-configuration",children:"2.2.1 Project configuration"}),"\n",(0,r.jsx)(n.p,{children:"For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Add camera permissions"}),": To use the component, it is necessary to enable the camera permission in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"info.plist"})})," file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following ",(0,r.jsx)(n.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"222-update-the-podfile",children:"2.2.2 Update the Podfile"}),"\n",(0,r.jsx)(n.p,{children:"In the project podfile it will be necessary to add the information of the private repository (see section 2.1). To do this, the following lines must be added to the beginning of the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nTo know more about the configuration and use of ",(0,r.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", it is necessary to access the following ",(0,r.jsx)(n.em,{children:"Core Component"})," document."]})}),"\n",(0,r.jsx)(n.h3,{id:"223-possible-issues",children:"2.2.3 Possible issues"}),"\n",(0,r.jsx)(n.p,{children:"If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Open the ",(0,r.jsx)(n.strong,{children:"ios"})," folder of the application in a terminal."]}),"\n",(0,r.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Remove ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,r.jsx)(n.li,{children:"Run the following command (or open the project with Xcode and run it):"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod install --repo-update\n"})}),"\n",(0,r.jsx)(n.h2,{id:"23-plugin-installation-android",children:"2.3 Plugin installation: Android"}),"\n",(0,r.jsx)(n.h3,{id:"231-set-android-sdk-version",children:"2.3.1 Set Android SDK version"}),"\n",(0,r.jsxs)(n.p,{children:["For Android, the minimum SDK version required by our native libraries is ",(0,r.jsx)(n.strong,{children:"24"}),", so if your app has a ",(0,r.jsx)(n.em,{children:"minimum SDK"})," defined lower than this, it will need to be modified to avoid a build error. To do this, access the application's ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"build.gradle"})})," file (located in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The current component contains a series of Typescript methods and interfaces included within the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"SdkPhingersConfig.js"})})," file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below."]}),"\n",(0,r.jsxs)(n.p,{children:["Below is the ",(0,r.jsx)(n.em,{children:"SdkPhingersConfig"})," class, which allows you to configure the ",(0,r.jsx)(n.strong,{children:"Phingers"})," component:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SdkPhingersConfig = function () {\n    this.reticleOrientation     = "left";\n    this.returnFullFrameImage   = true;\n    this.returnProcessedImage   = true;\n    this.returnRawImage         = true;\n    this.useFlash               = true;\n    this.useLiveness            = true;\n    this.showTutorial           = false;\n    this.extractionTimeout      = 30000;\n    this.vibration              = false;\n    this.showDiagnostic         = true;\n    this.threshold              = 0.8;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Next, all the properties that can be defined in the ",(0,r.jsx)(n.strong,{children:"PhingersConfiguration"})," object will be discussed:"]}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAll configuration can be found in the component's ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"sdk-phingers/www/SdkPhingersConfig.js"})})," file."]})}),"\n",(0,r.jsx)(n.p,{children:"When calling the component, there are a series of parameters that must be included. They will be briefly discussed below."}),"\n",(0,r.jsx)(n.h3,{id:"31-reticleorientation",children:"3.1 reticleOrientation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"PhingersReticleOrientation"})]}),"\n",(0,r.jsx)(n.p,{children:"Sets the fingerprint detection mode and indicates which fingers are to\nbe detected during the process. The allowed values are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DT_LEFT"}),": Enables the capture of the ",(0,r.jsx)(n.strong,{children:"four"})," ",(0,r.jsx)(n.strong,{children:"fingers"})," of the\n",(0,r.jsx)(n.strong,{children:"left"})," ",(0,r.jsx)(n.strong,{children:"hand"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DT_RIGHT"}),": Enables the capture of the ",(0,r.jsx)(n.strong,{children:"four"})," ",(0,r.jsx)(n.strong,{children:"fingers"})," of the\n",(0,r.jsx)(n.strong,{children:"left"})," ",(0,r.jsx)(n.strong,{children:"hand"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DT_THUMB"}),": The capture of a ",(0,r.jsx)(n.strong,{children:"thumb"})," is activated."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"reticleOrientation: PhingersReticleOrientation.DT_LEFT;,\n"})}),"\n",(0,r.jsx)(n.h3,{id:"32-returnfullframeimage",children:"3.2 returnFullFrameImage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Specifies whether to return the full image of the camera in which the\nfingers have been detected."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"returnFullFrameImage: true,\n"})}),"\n",(0,r.jsx)(n.h3,{id:"33-returnprocessedimage",children:"3.3 returnProcessedImage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["If set to ",(0,r.jsx)(n.strong,{children:"true"})," it will return in the result the images in the same\nform as they have been captured."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"returnProcessedImage: true;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"34-returnrawimage",children:"3.4 returnRawImage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["If set to ",(0,r.jsx)(n.strong,{children:"true"})," it will return in the result the images in the same\nform as they have been captured."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mReturnRawImage: true;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"35-useflash",children:"3.5 useFlash"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Enables or disables the camera flash during the fingerprint capture\nprocess. Default is set to ",(0,r.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"useFlash: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"36-useliveness",children:"3.6 useLiveness"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Enables or disables the liveness detector during the fingerprint capture\nprocess. Default is set to ",(0,r.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"useLiveness: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"37-showtutorial",children:"3.7 showTutorial"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether the component activates the tutorial screen. This view\nintuitively explains how the capture is performed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"showTutorial: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"38-vibration",children:"3.8 vibration"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Enables the vibration during the process."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"vibration: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"39-extractiontimeout",children:"3.9 extractionTimeout"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"int"})]}),"\n",(0,r.jsx)(n.p,{children:"Sets a stabilisation mode prior to any authentication process in the\nwidget. This mode forces the widget not to start any process if the user\nis not facing forward and not moving his head."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"extractionTimeout: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"310-showdiagnostic",children:"3.10 showDiagnostic"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Display diagnostic screens at the end of the process"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"showDiagnostic: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"311-threshold",children:"3.11 threshold"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"double"})]}),"\n",(0,r.jsx)(n.p,{children:"The parameter configures a captureQualityThreshold, to define a quality\nthreshold to perform the capture."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"threshold: 0.8;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"312-showprevioustip",children:"3.12. showPreviousTip"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"It shows a pre-launch screen with information about the process to be carried out and a start button."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-use-of-the-component",children:"4. Use of the component"}),"\n",(0,r.jsx)(n.p,{children:"Below will be shown how to execute the functionality of the current component."}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nRemember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation."]})}),"\n",(0,r.jsx)(n.p,{children:"Once the component is configured, to launch it the following code must be executed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'function callPhingers()\n{\n    if (typeof facephi.plugins.sdkphingers === "undefined") {\n        showErrorUI("Cordova Phinger Sdk is not installed...");\n        return;\n    }\n\n    phingersResponse    = null;\n    var config          = new SdkPhingersConfig();\n    // SdkPhingersCaptureOrientation capture orientation.\n    config.setReticleOrientation(facephi.plugins.sdkphingers.captureorientation.SdkPhingersCaptureOrientation.left)\n    config.setReturnFullFrameImage(true);\n    config.setReturnProcessedImage(true);\n    config.setReturnRawImage(true);\n    config.setUseFlash(true);\n    config.setUseLiveness(true);\n\n    facephi.plugins.sdkphingers.launchPhingers(config)\n    .then(\n        (result) => onSuccessPhingersExtraction(result),\n        (err) => onErrorPhingersExtraction(err),\n    )\n    .finally (() =>\n    {\n        console.log("callPhingers finished...");\n    });\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-return-result",children:"5. Return result"}),"\n",(0,r.jsxs)(n.p,{children:["As shown in the above example, the result is returned in the form of a ",(0,r.jsx)(n.strong,{children:"JSON"})," object through ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Promises"})}),", whether it is a successful operation or an error:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'facephi.plugins.sdkphingers.launchPhingers(config)\n.then(\n    (result) => onSuccessPhingersExtraction(result),\n    (err) => onErrorPhingersExtraction(err),\n)\n.finally (() =>\n{\n    console.log("callPhingers finished...");\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"Regardless of whether the result is correct/wrong, the result will have the following format:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"PhingersResult {\n    finishStatus: number;\n    finishStatusDescription?: string;\n    errorType: string;\n    errorMessage?: string;\n    processedFingers?: any;\n    rawFingers?: any;\n    wsq?: any;\n    focusQuality?: any;\n    livenessConfidence?: any;\n    fullFrameImage?: any;\n}\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThe result will be returned through a Promise that contains an object of the class ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"PhingersResult"})}),". Below is more information about these fields."]})}),"\n",(0,r.jsx)(n.h3,{id:"50-finishstatus",children:"5.0 finishStatus"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"1"}),": The operation was successful."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"2"}),": An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"51-finishstatusdescription",children:"5.1 finishStatusDescription"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STATUS_OK"}),": The operation was successful."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STATUS_ERROR"}),": An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"52-errormessage",children:"5.2 errorMessage"}),"\n",(0,r.jsx)(n.p,{children:"Indicates an additional error message if necessary. It is an optional value."}),"\n",(0,r.jsx)(n.h3,{id:"53-fullframeimage",children:"5.3 fullFrameImage"}),"\n",(0,r.jsx)(n.p,{children:"Returns the full image captured by the camera. No processes are applied to this image yet."}),"\n",(0,r.jsx)(n.h3,{id:"54-focusquality",children:"5.4 focusQuality"}),"\n",(0,r.jsx)(n.p,{children:"Returns the camera focus quality. A low value can affect the capture process."}),"\n",(0,r.jsx)(n.h3,{id:"56-livenessconfidence",children:"5.6 livenessConfidence"}),"\n",(0,r.jsx)(n.p,{children:"Returns an indicator of the confidence of the capture's level."}),"\n",(0,r.jsx)(n.h3,{id:"57-processedfingers",children:"5.7 processedFingers"}),"\n",(0,r.jsx)(n.p,{children:"Returns the processed fingerprint image."}),"\n",(0,r.jsx)(n.h3,{id:"58-rawimages",children:"5.8 rawImages"}),"\n",(0,r.jsx)(n.p,{children:"Returns the raw, unmodified image of the current fingerprint."}),"\n",(0,r.jsx)(n.h3,{id:"59-wsq",children:"5.9 wsq"}),"\n",(0,r.jsx)(n.p,{children:"The fingerprint capture in WSQ format is returned."}),"\n",(0,r.jsx)(n.h3,{id:"510-nfiqmetrics",children:"5.10 nfiqMetrics"}),"\n",(0,r.jsx)(n.p,{children:"These are the metrics of the capture. Currently the following value is\nreturned:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"nfiqMetric: This is an integer value, between 1 and 5 (inclusive),\nindicating the quality of the fingerprint capture, with 1 indicating\nthe highest quality and 5 indicating the worst quality. Fingerprints\nwith the worst value are usually discarded for further validation."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);