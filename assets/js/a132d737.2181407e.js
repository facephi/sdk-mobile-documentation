"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[3949],{7983:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=i(5893),s=i(1151);const t={},o="Phingers Component",l={id:"Phingers_Component",title:"Phingers Component",description:"1. Introduction",source:"@site/react_versioned_docs/version-2.0.X/Phingers_Component.md",sourceDirName:".",slug:"/Phingers_Component",permalink:"/sdk-mobile-documentation/docs/react/Phingers_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"SelphID Component",permalink:"/sdk-mobile-documentation/docs/react/Selphid_Component"},next:{title:"NFC Component",permalink:"/sdk-mobile-documentation/docs/react/Nfc_Component"}},c={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Plugin installation: Common",id:"21-plugin-installation-common",level:3},{value:"2.2 Plugin installation: iOS",id:"22-plugin-installation-ios",level:2},{value:"2.2.1 Project configuration",id:"221-project-configuration",level:3},{value:"2.2.2 Update the Podfile",id:"222-update-the-podfile",level:3},{value:"2.2.3 Possible incidents",id:"223-possible-incidents",level:3},{value:"2.3 Plugin installation: Android",id:"23-plugin-installation-android",level:2},{value:"2.3.1 Set Android SDK version",id:"231-set-android-sdk-version",level:3},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"3.0 reticleOrientation",id:"30-reticleorientation",level:3},{value:"3.1 returnFullFrameImage",id:"31-returnfullframeimage",level:3},{value:"3.2 returnProcessedImage",id:"32-returnprocessedimage",level:3},{value:"3.3 returnRawImage",id:"33-returnrawimage",level:3},{value:"3.4 useFlash",id:"34-useflash",level:3},{value:"3.5 useLiveness",id:"35-useliveness",level:3},{value:"3.6 showTutorial",id:"36-showtutorial",level:3},{value:"3.7 vibration",id:"37-vibration",level:3},{value:"3.8 extractionTimeout",id:"38-extractiontimeout",level:3},{value:"3.9 showDiagnostic",id:"39-showdiagnostic",level:3},{value:"3.10 threshold",id:"310-threshold",level:3},{value:"4. Use of the component",id:"4-use-of-the-component",level:2},{value:"5. Return result",id:"5-return-result",level:2},{value:"5.1 finishStatus",id:"51-finishstatus",level:3},{value:"5.2 finishStatusDescription",id:"52-finishstatusdescription",level:3},{value:"5.4 errorType",id:"54-errortype",level:3},{value:"5.3 errorMessage:",id:"53-errormessage",level:3},{value:"5.4 fullFrameImage",id:"54-fullframeimage",level:3},{value:"5.5 focusQuality;",id:"55-focusquality",level:3},{value:"5.6 livenessConfidence;",id:"56-livenessconfidence",level:3},{value:"5.7 processedFingers;",id:"57-processedfingers",level:3},{value:"5.8 rawImages;",id:"58-rawimages",level:3},{value:"5.9 wsq;",id:"59-wsq",level:3}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"phingers-component",children:"Phingers Component"}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Phingers Component"})}),". This is responsible for capturing the user's fingerprints and subsequently extracting the subsequent fingerprint templates. Its main functionalities are the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Two modes of operation: extraction of all four fingers of the hand (except the thumb), or extraction of the thumb only."}),"\n",(0,r.jsx)(n.li,{children:"Internal camera management."}),"\n",(0,r.jsx)(n.li,{children:"Permit management."}),"\n",(0,r.jsx)(n.li,{children:"Built-in liveness detection."}),"\n",(0,r.jsx)(n.li,{children:"Assistant in the fingerprint capture processes."}),"\n",(0,r.jsx)(n.li,{children:"Generation of templates with the characteristics of footprints, images and scores."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,r.jsx)(n.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Minimum Android version: ",(0,r.jsx)(n.strong,{children:"24 - JDK 11"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum iOS version: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"armeabi-v7, x86, arm64 and x64"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,r.jsx)(n.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,r.jsxs)(n.p,{children:["We look for the file ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"package.json"})})," in the root of the plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["The version is indicated in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"KEY/TAG"})})," version."]}),"\n",(0,r.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,r.jsxs)(n.p,{children:["Before integrating this component ",(0,r.jsx)(n.strong,{children:"it is recommended"})," to read the documentation related to ",(0,r.jsx)(n.strong,{children:"Core Component"})," and follow the instructions indicated in said document."]}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis section will explain step by step how to integrate the current component into an existing project.\nFor this section, the following values \u200b\u200bwill be considered:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path to the root of the application (example: /folder/example)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path to the root of the core plugin, which is required (example: /folder/sdk-core)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<%PLUGIN_PHINGERS_PATH%>"})," - Path to the root of the current plugin (example: /folder/sdk-phingers)"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"21-plugin-installation-common",children:"2.1. Plugin installation: Common"}),"\n",(0,r.jsxs)(n.p,{children:["The plugin allows execution on ",(0,r.jsx)(n.strong,{children:"Android and iOS"})," platforms. This section explains common steps. To install the plugin you must follow the following steps:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure React Native is installed."}),"\n",(0,r.jsxs)(n.li,{children:["Access ",(0,r.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," in a terminal and execute:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"yarn add @facephi/sdk-core-react-native\nyarn add @facephi/sdk-phingers-react-native\n"})}),"\n",(0,r.jsx)(n.p,{children:"It is important to verify that the path to the plugin is correctly defined in package.json:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"dependencies": {\n  "@facephi/sdk-core-react-native": <% PLUGIN_CORE_PATH %>,\n  "@facephi/sdk-phingers-react-native": <% PLUGIN_PHINGERS_PATH %>\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"After executing the above steps, you can launch the application with the sdk/component installed.\nFinally, to launch the projects, the following commands must be executed in two ways:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"From Terminal"})}),"(For Android):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx react-native run-android \n\xf3 \nnpx react-native run-android --active-arch-only\n"})}),"\n",(0,r.jsx)(n.p,{children:"Para iOS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx react-native run-ios\n"})}),"\n",(0,r.jsxs)(n.p,{children:["From different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using ",(0,r.jsx)(n.strong,{children:"Android Studio"})," and ",(0,r.jsx)(n.strong,{children:"XCode"})," respectively."]}),"\n",(0,r.jsx)(n.h2,{id:"22-plugin-installation-ios",children:"2.2 Plugin installation: iOS"}),"\n",(0,r.jsx)(n.h3,{id:"221-project-configuration",children:"2.2.1 Project configuration"}),"\n",(0,r.jsx)(n.p,{children:"For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Add camera permissions"}),": To use the component, it is necessary to enable the camera permission in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"info.plist"})})," file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following ",(0,r.jsx)(n.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"222-update-the-podfile",children:"2.2.2 Update the Podfile"}),"\n",(0,r.jsx)(n.p,{children:"In the project podfile it will be necessary to add the information of the private repository (see section 2.1). To do this, the following lines must be added to the beginning of the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nTo know more about the configuration and use of ",(0,r.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", it is necessary to access the following ",(0,r.jsx)(n.em,{children:"Core Component"})," document."]})}),"\n",(0,r.jsx)(n.h3,{id:"223-possible-incidents",children:"2.2.3 Possible incidents"}),"\n",(0,r.jsx)(n.p,{children:"If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Open the ",(0,r.jsx)(n.strong,{children:"ios"})," folder of the application in a terminal."]}),"\n",(0,r.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Remove ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,r.jsx)(n.li,{children:"Run the following command (or open the project with Xcode and run it):"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod install --repo-update\n"})}),"\n",(0,r.jsx)(n.h2,{id:"23-plugin-installation-android",children:"2.3 Plugin installation: Android"}),"\n",(0,r.jsx)(n.h3,{id:"231-set-android-sdk-version",children:"2.3.1 Set Android SDK version"}),"\n",(0,r.jsxs)(n.p,{children:["For Android, the minimum SDK version required by our native libraries is ",(0,r.jsx)(n.strong,{children:"24"}),", so if your app has a ",(0,r.jsx)(n.em,{children:"minimum SDK"})," defined lower than this, it will need to be modified to avoid a build error. To do this, access the application's ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"build.gradle"})})," file (located in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The current component contains a number of Typescript methods and interfaces included within the file ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"node_modules/@facephi/sdk-phingers-react-native/src/index.tsx"})}),". In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below."]}),"\n",(0,r.jsxs)(n.p,{children:["Below is the ",(0,r.jsx)(n.em,{children:"PhingersConfiguration"})," class, which allows you to configure the ",(0,r.jsx)(n.strong,{children:"Phingers"})," component:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"export interface PhingersConfiguration \n{\n  reticleOrientation: ReticleOrientation;\n  returnFullFrameImage?: boolean;\n  returnProcessedImage?: boolean;\n  returnRawImage?: boolean;\n  useFlash?: boolean;\n  useLiveness?: boolean;\n  showTutorial?: boolean;\n  extractionTimeout?: number;\n  vibration?: boolean;\n  showDiagnostic?: boolean;\n  threshold?: number;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next, all the properties that can be defined in the ",(0,r.jsx)(n.strong,{children:"PhingersConfiguration"})," object will be discussed:"]}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAll configuration can be found in the component's ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"src/index.tsx"})})," file."]})}),"\n",(0,r.jsx)(n.p,{children:"When calling the component, there are a series of parameters that must be included. They will be briefly discussed below."}),"\n",(0,r.jsx)(n.h3,{id:"30-reticleorientation",children:"3.0 reticleOrientation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"PhingersReticleOrientation"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"reticleOrientation: PhingersReticleOrientation.DT_LEFT;,\n"})}),"\n",(0,r.jsx)(n.h3,{id:"31-returnfullframeimage",children:"3.1 returnFullFrameImage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"returnFullFrameImage: true,\n"})}),"\n",(0,r.jsx)(n.h3,{id:"32-returnprocessedimage",children:"3.2 returnProcessedImage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"returnProcessedImage: true;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"33-returnrawimage",children:"3.3 returnRawImage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mReturnRawImage: true;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"34-useflash",children:"3.4 useFlash"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"useFlash: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"35-useliveness",children:"3.5 useLiveness"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"useLiveness: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"36-showtutorial",children:"3.6 showTutorial"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"showTutorial: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"37-vibration",children:"3.7 vibration"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"vibration: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"38-extractiontimeout",children:"3.8 extractionTimeout"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"int"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"extractionTimeout: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"39-showdiagnostic",children:"3.9 showDiagnostic"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"showDiagnostic: false;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"310-threshold",children:"3.10 threshold"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"double"})]}),"\n",(0,r.jsx)(n.p,{children:"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"threshold: 0.8;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-use-of-the-component",children:"4. Use of the component"}),"\n",(0,r.jsx)(n.p,{children:"Below will be shown how to execute the functionality of the current component."}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nRemember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation."]})}),"\n",(0,r.jsx)(n.p,{children:"Once the component is configured, to launch it the following code must be executed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'const startPhingers = async () => \n{ \n  try \n  {\n    console.log("Starting startPhingers...");\n\n    return await SdkMobilePhingers.phingers(getPhingersConfiguration())\n    .then((result: PhingersResult) => \n    {\n      console.log("result", result);\n      if (result.finishStatus == SdkFinishStatus.Error) {\n        drawError(setMessage, result);\n      }\n    })\n    .catch((error: any) => \n    {\n      console.log(error);\n    })\n    .finally(()=> {\n      console.log("End startPhingers...");\n    });\n  } \n  catch (error) {\n    setMessage(JSON.stringify(error));\n  }\n};\n\nconst getPhingersConfiguration = () => \n{\n  let config: PhingersConfiguration = \n  {\n    reticleOrientation: ReticleOrientation.Left,\n    returnFullFrameImage: true,\n    returnProcessedImage: true,\n    returnRawImage: true,\n    useFlash: true,\n    useLiveness: true,\n  };\n\n  return config;\n};\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-return-result",children:"5. Return result"}),"\n",(0,r.jsxs)(n.p,{children:["As shown in the above example, the result is returned in the form of a ",(0,r.jsx)(n.strong,{children:"JSON"})," object through ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Promises"})}),", whether it is a successful operation or an error:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'return await SdkMobilePhingers.phingers(getPhingersConfiguration())\n.then((result: PhingersResult) => \n{\n  console.log("result", result);\n  if (result.finishStatus == SdkFinishStatus.Error) {\n    drawError(setMessage, result);\n  }\n})\n.catch((error: any) => \n{\n  console.log(error);\n})\n.finally(()=> {\n  console.log("End startPhingers...");\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"Regardless of whether the result is correct/wrong, the result will have the following format:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export interface PhingersResult \n{\n  finishStatus: number;\n  finishStatusDescription?: string;\n  errorType: string;\n  errorMessage?: string;\n  template?: any;\n  processedFingers?: any;\n  rawFingers?: any;\n  wsq?: any;\n  focusQuality?: any;\n  nfiqMetricsTransactionId?: any;\n  livenessConfidence?: any;\n  fullFrameImage?: any;\n}\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThe result will be returned through a Promise that contains an object of the class ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"PhingersResult"})}),". Below is more information about these fields."]})}),"\n",(0,r.jsx)(n.h3,{id:"51-finishstatus",children:"5.1 finishStatus"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"1"}),": The operation was successful."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"2"}),": An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"52-finishstatusdescription",children:"5.2 finishStatusDescription"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STATUS_OK"}),": The operation was successful."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STATUS_ERROR"}),": An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"###\xa05.3 errorMessage"}),"\n",(0,r.jsx)(n.p,{children:"Indicates an additional error message if necessary. It is an optional value."}),"\n",(0,r.jsx)(n.h3,{id:"54-errortype",children:"5.4 errorType"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the type of error that occurred (if there was one, which is indicated by the ",(0,r.jsx)(n.code,{children:"finishStatus"})," parameter with the value ",(0,r.jsx)(n.code,{children:"Error"}),"). The values \u200b\u200bit can have are the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NoError"}),": No error has occurred. The process can continue."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UnknownError"}),": Unhandled error. Possibly caused by a bug in the resource bundle."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CameraPermissionDenied"}),": The exception that is thrown when the sdk does not have permission to access the camera."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": The exception that is thrown when the component does not have permission to access system settings (",(0,r.jsx)(n.em,{children:"deprecated"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HardwareError"}),": Exception that occurs when there is a hardware problem with the device, usually caused by very few available resources."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ExtractionLicenceError"}),": Exception that occurs when there has been a licencing problem on the server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Exception that occurs during the capture of frames by the camera."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ControlNotInitialisedError"}),": The component configurator has not been initialised."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problem arose during component configuration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CancelByUser"}),": The exception that is thrown when the user stops the extraction manually."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TimeOut"}),": Exception that is thrown when a maximum time elapses without successfully completing the extraction."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"InitProccessError"}),": Exception that is thrown when the sdk cannot process the captured images."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NfcError"}),": The exception that is thrown when the sdk does not have permission to access the nfc."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NetworkConnection"}),": The exception that is thrown when there are issues with the means the device uses to connect to the network."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TokenError"}),": The exception that is thrown when an invalid token is passed as a parameter."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"InitSessionError"}),": The exception that is thrown when session cannot be initialised. The normal thing is that it happens because the ",(0,r.jsx)(n.code,{children:"SdkCore"})," was not called when calling any other component."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ComponentControllerError"}),": The exception that is thrown when the component cannot be instantiated."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"53-errormessage",children:"5.3 errorMessage:"}),"\n",(0,r.jsx)(n.p,{children:"Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional."}),"\n",(0,r.jsx)(n.h3,{id:"54-fullframeimage",children:"5.4 fullFrameImage"}),"\n",(0,r.jsx)(n.h3,{id:"55-focusquality",children:"5.5 focusQuality;"}),"\n",(0,r.jsx)(n.h3,{id:"56-livenessconfidence",children:"5.6 livenessConfidence;"}),"\n",(0,r.jsx)(n.h3,{id:"57-processedfingers",children:"5.7 processedFingers;"}),"\n",(0,r.jsx)(n.h3,{id:"58-rawimages",children:"5.8 rawImages;"}),"\n",(0,r.jsx)(n.h3,{id:"59-wsq",children:"5.9 wsq;"})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var r=i(7294);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);