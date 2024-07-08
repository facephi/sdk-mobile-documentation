"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7122],{1319:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(4848),r=i(8453);const o={},t="NFC Component",l={id:"Nfc_Component",title:"NFC Component",description:"1. Introduction",source:"@site/cordova_versioned_docs/version-2.0.X/Nfc_Component.md",sourceDirName:".",slug:"/Nfc_Component",permalink:"/sdk-mobile-documentation/docs/cordova/Nfc_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Phingers Component",permalink:"/sdk-mobile-documentation/docs/cordova/Phingers_Component"},next:{title:"VideoCall Component",permalink:"/sdk-mobile-documentation/docs/cordova/VideoCall_Component"}},c={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Plugin installation: Common",id:"21-plugin-installation-common",level:3},{value:"2.2 Plugin installation: iOS",id:"22-plugin-installation-ios",level:2},{value:"2.2.1 Project configuration",id:"221-project-configuration",level:3},{value:"2.2.2 Update the Podfile",id:"222-update-the-podfile",level:3},{value:"2.2.4 Possible incidents",id:"224-possible-incidents",level:3},{value:"2.3 Plugin installation: Android",id:"23-plugin-installation-android",level:2},{value:"2.3.1 Set Android SDK version",id:"231-set-android-sdk-version",level:3},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"3.1 docNumber",id:"31-docnumber",level:3},{value:"3.2 birthDay",id:"32-birthday",level:3},{value:"3.3 expirationDay",id:"33-expirationday",level:3},{value:"3.4 extractionTimeout",id:"34-extractiontimeout",level:3},{value:"3.6 docType",id:"36-doctype",level:3},{value:"3.7 showTutorial",id:"37-showtutorial",level:3},{value:"3.8 showDiagnostic",id:"38-showdiagnostic",level:3},{value:"3.9 vibrationEnabled",id:"39-vibrationenabled",level:3},{value:"3.10 skipPACE",id:"310-skippace",level:3},{value:"3.11 debug",id:"311-debug",level:3},{value:"4. Use of the component",id:"4-use-of-the-component",level:2},{value:"5. Return result",id:"5-return-result",level:2},{value:"5.1 finishStatus",id:"51-finishstatus",level:3},{value:"5.2 finishStatusDescription",id:"52-finishstatusdescription",level:3},{value:"5.3 errorMessage",id:"53-errormessage",level:3},{value:"5.4 errorType",id:"54-errortype",level:3},{value:"5.5 nfcDocumentInformation",id:"55-nfcdocumentinformation",level:3},{value:"5.6 nfcPersonalInformation",id:"56-nfcpersonalinformation",level:3},{value:"5.7 nfcValidations",id:"57-nfcvalidations",level:3},{value:"5.8 facialImage",id:"58-facialimage",level:3},{value:"5.9 fingerprintImage",id:"59-fingerprintimage",level:3},{value:"5.10 signatureImage",id:"510-signatureimage",level:3}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nfc-component",children:"NFC Component"}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"NFC Component"})}),". Passive authentication of a document's NFC chip verifies whether it has really been issued by a certified authority. Passive authentication allows us to validate that:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The document has been issued by the certifying authority of the country to which it belongs."}),"\n",(0,s.jsx)(n.li,{children:"The document has not been altered."}),"\n",(0,s.jsx)(n.li,{children:"The document is not a copy or cloned document."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,s.jsx)(n.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minimum Android version: 24 - JDK 11"}),"\n",(0,s.jsx)(n.li,{children:"Minimum iOS version: 13"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,s.jsx)(n.p,{children:"armeabi-v7, x86, arm64 and x64"}),"\n",(0,s.jsx)(n.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,s.jsx)(n.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,s.jsxs)(n.p,{children:["We look for the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"package.json"})})," & ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"config.xml"})})," file in the root of the plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["The version is indicated in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"KEY/TAG"})})," version."]}),"\n",(0,s.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,s.jsxs)(n.p,{children:["Before integrating this component ",(0,s.jsx)(n.strong,{children:"it is recommended"})," to read the documentation related to ",(0,s.jsx)(n.strong,{children:"Core Component"})," and follow the instructions indicated in said document."]}),"\n",(0,s.jsxs)("div",{class:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis section will explain step by step how to integrate the current component into an existing project.\nFor this section, the following values \u200b\u200bwill be considered:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path to the root of the application (example: /folder/example)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path to the root of the core plugin, which is required (example: /folder/sdk-core)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_NFC_PATH%>"})," - Path to the root of the current plugin (example: /folder/sdk-nfc)"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"21-plugin-installation-common",children:"2.1. Plugin installation: Common"}),"\n",(0,s.jsxs)(n.p,{children:["The plugin allows execution on ",(0,s.jsx)(n.strong,{children:"Android and iOS"})," platforms. This section explains common steps. To install the plugin you must follow the following steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure React Native is installed."}),"\n",(0,s.jsxs)(n.li,{children:["Access ",(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," in a terminal and execute:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[ionic] cordova plugin add @facephi/sdk-core-cordova\n[ionic] cordova plugin add @facephi/sdk-videoid-cordova\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is important to verify that the path to the plugin is correctly defined in package.json:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"dependencies": {\n  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,\n  "@facephi/sdk-nfc-cordova": <% PLUGIN_NFC_PATH %>\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After executing the above steps, you can launch the application with the sdk/component installed.\nFrom different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using ",(0,s.jsx)(n.strong,{children:"Android Studio"})," and ",(0,s.jsx)(n.strong,{children:"XCode"})," respectively."]}),"\n",(0,s.jsx)(n.h2,{id:"22-plugin-installation-ios",children:"2.2 Plugin installation: iOS"}),"\n",(0,s.jsx)(n.h3,{id:"221-project-configuration",children:"2.2.1 Project configuration"}),"\n",(0,s.jsx)(n.p,{children:"For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add camera permissions"}),": To use the component, it is necessary to enable the camera permission in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"info.plist"})})," file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following ",(0,s.jsx)(n.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add Privacy - NFC Scan Usage Description"}),": To use the widget, it is necessary to enable NFC permission in the application's info.plist file (included within the project in the ios folder)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<key>NFCReaderUsageDescription</key>\n<string>The app needs this permission for the correct usage.</string>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add ISO7816 application identifiers for NFC Tag Reader Session: To use the widget, you need to enable NFC permission in the application's info.plist file (included within the project in the ios folder). You must edit the file with a text editor and add the following key/value pair:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<array>\n    <string>A0000002471001</string>\n    <string>A0000002472001</string>\n    <string>00000000000000</string>\n</array>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Add the Capability Near field Communication Tag Reading"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Open image-20230214-141106.png\nimage-20230214-141106.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add the Entitlements Near Field Communication Tag Reader Session Formats"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Open image-20230214-141753.png\nimage-20230214-141753.png"}),"\n",(0,s.jsx)(n.h3,{id:"222-update-the-podfile",children:"2.2.2 Update the Podfile"}),"\n",(0,s.jsx)(n.p,{children:"In the project podfile it will be necessary to add the information of the private repository (see section 2.1). To do this, the following lines must be added to the beginning of the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nTo know more about the configuration and use of ",(0,s.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", it is necessary to access the following ",(0,s.jsx)(n.em,{children:"Core Component"})," document."]})}),"\n",(0,s.jsx)(n.h3,{id:"224-possible-incidents",children:"2.2.4 Possible incidents"}),"\n",(0,s.jsx)(n.p,{children:"If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"ios"})," folder of the application in a terminal."]}),"\n",(0,s.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,s.jsx)(n.li,{children:"Run the following command (or open the project with Xcode and run it):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod install --repo-update\n"})}),"\n",(0,s.jsx)(n.h2,{id:"23-plugin-installation-android",children:"2.3 Plugin installation: Android"}),"\n",(0,s.jsx)(n.h3,{id:"231-set-android-sdk-version",children:"2.3.1 Set Android SDK version"}),"\n",(0,s.jsxs)(n.p,{children:["For Android, the minimum SDK version required by our native libraries is ",(0,s.jsx)(n.strong,{children:"24"}),", so if your app has a ",(0,s.jsx)(n.em,{children:"minimum SDK"})," defined lower than this, it will need to be modified to avoid a build error. To do this, access the application's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build.gradle"})})," file (located in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The minimun android.tools(AGP) is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"8.3.0"})}),". To set this, access the application's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build.gradle"})})," file (located in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'dependencies {\n    classpath "com.android.tools.build:gradle:8.3.0"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In the same file its mandatory to add this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'android {\n    packagingOptions {\n        pickFirst("META-INF/versions/9/OSGI-INF/MANIFEST.MF") // NFC\n    }\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The current component contains a series of Typescript methods and interfaces included within the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SdkNfcConfig.js"})})," file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is the ",(0,s.jsx)(n.em,{children:"NfcConfiguration"})," class, which allows you to configure the ",(0,s.jsx)(n.strong,{children:"Nfc"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'SdkNfcConfig = function () {\n    this.issuer;\n    this.docNumber = "";\n    this.birthDay = "";\n    this.expirationDay = "";\n    this.extractionTimeout = 50000;\n    this.showTutorial = true;\n    this.vibrationEnabled = true;\n    this.skipPACE = false;\n    this.debug;\n    this.showDiagnostic;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Next, all the properties that can be defined in the ",(0,s.jsx)(n.strong,{children:"NfcConfiguration"})," object will be discussed:"]}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAll configuration can be found in the component's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"sdk-nfc/www/SdkNfcConfig.js"})})," file."]})}),"\n",(0,s.jsx)(n.p,{children:"When calling the component, there are a series of parameters that must be included. They will be briefly discussed below."}),"\n",(0,s.jsx)(n.h3,{id:"31-docnumber",children:"3.1 docNumber"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Document number to be scanned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docNumber: 2115000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-birthday",children:"3.2 birthDay"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Date of birth that appears on the document to be scanned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"birthDay: dd/mm/yyyy;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"33-expirationday",children:"3.3 expirationDay"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Expiration date that appears on the document to be scanned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"expirationDay: dd/mm/yyyy;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"34-extractiontimeout",children:"3.4 extractionTimeout"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Waiting time in which the plugin stops scanning automatically if no results are obtained."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"extractionTimeout: 5000;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"36-doctype",children:"3.6 docType"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"NfcDocumentType"})]}),"\n",(0,s.jsx)(n.p,{children:"Type of document to be scanned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docType: ;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"37-showtutorial",children:"3.7 showTutorial"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Whether or not to enable a tutorial to be shown prior to reading the document."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showTutorial: ;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"38-showdiagnostic",children:"3.8 showDiagnostic"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether you want to show a diagnosis in case of failure."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"showDiagnostic: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"39-vibrationenabled",children:"3.9 vibrationEnabled"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether or not you want to enable vibration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"vibrationEnabled: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"310-skippace",children:"3.10 skipPACE"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"skipPACE: false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"311-debug",children:"3.11 debug"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Enables or disables debug data to be displayed on the screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"debug: false;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-use-of-the-component",children:"4. Use of the component"}),"\n",(0,s.jsx)(n.p,{children:"Below will be shown how to execute the functionality of the current component."}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nRemember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation."]})}),"\n",(0,s.jsx)(n.p,{children:"Once the component is configured, to launch it the following code must be executed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'function callNfc()\n{\n    if (typeof facephi.plugins.sdknfc === "undefined") {\n        showErrorUI("Cordova Nfc Sdk is not installed...");\n        return;\n    }\n\n    var config = new SdkNfcConfig();\n\n    config.setDocNumber("AAA439684");\n    config.setBirthDay("16/08/1979");\n    config.setExpirationDay("29/11/2022");\n    config.setExtractionTimeout(50000);\n\n    facephi.plugins.sdknfc.launchNfc(config)\n    .then(\n        (result) => console.log(result),\n        (err) => console.log(err),\n    )\n    .finally (() =>\n    {\n        console.log("callNfc finished...");\n    });\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-return-result",children:"5. Return result"}),"\n",(0,s.jsxs)(n.p,{children:["As shown in the above example, the result is returned in the form of a ",(0,s.jsx)(n.strong,{children:"JSON"})," object through ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Promises"})}),", whether it is a successful operation or an error:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"facephi.plugins.sdknfc.launchNfc(config)\n.then(\n    (result) => console.log(result),\n    (err) => console.log(err),\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Regardless of whether the result is correct/wrong, the result will have the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NfcResult {\n    finishStatus: number;\n    finishStatusDescription?: string;\n    errorType: string;\n    errorMessage?: string;\n    nfcDocumentInformation?: any;\n    nfcPersonalInformation?: any;\n    nfcValidations?: any;\n    facialImage?: string;\n    fingerprintImage?: string;\n    signatureImage?: string;\n}\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThe result will be returned through a Promise that contains an object of the class ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SdkNfcResult"})}),". Below is more information about these fields."]})}),"\n",(0,s.jsx)(n.h3,{id:"51-finishstatus",children:"5.1 finishStatus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1"}),": The operation was successful."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"2"}),": An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-finishstatusdescription",children:"5.2 finishStatusDescription"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_OK"}),": The operation was successful."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_ERROR"}),": An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-errormessage",children:"5.3 errorMessage"}),"\n",(0,s.jsx)(n.p,{children:"Indicates an additional error message if necessary. It is an optional value."}),"\n",(0,s.jsx)(n.h3,{id:"54-errortype",children:"5.4 errorType"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the type of error that occurred (if there was one, which is indicated by the ",(0,s.jsx)(n.code,{children:"finishStatus"})," parameter with the value ",(0,s.jsx)(n.code,{children:"Error"}),"). The values \u200b\u200bit can have are the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NoError"}),": No error has occurred. The process can continue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnknownError"}),": Unhandled error. Possibly caused by a bug in the resource bundle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CameraPermissionDenied"}),": The exception that is thrown when the sdk does not have permission to access the camera."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": The exception that is thrown when the component does not have permission to access system settings (",(0,s.jsx)(n.em,{children:"deprecated"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"HardwareError"}),": Exception that occurs when there is a hardware problem with the device, usually caused by very few available resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ExtractionLicenceError"}),": Exception that occurs when there has been a licencing problem on the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Exception that occurs during the capture of frames by the camera."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ControlNotInitialisedError"}),": The component configurator has not been initialised."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problem arose during component configuration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CancelByUser"}),": The exception that is thrown when the user stops the extraction manually."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TimeOut"}),": Exception that is thrown when a maximum time elapses without successfully completing the extraction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitProccessError"}),": Exception that is thrown when the sdk cannot process the captured images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NfcError"}),": The exception that is thrown when the sdk does not have permission to access the nfc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NetworkConnection"}),": The exception that is thrown when there are issues with the means the device uses to connect to the network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TokenError"}),": The exception that is thrown when an invalid token is passed as a parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InitSessionError"}),": The exception that is thrown when session cannot be initialised. The normal thing is that it happens because the ",(0,s.jsx)(n.code,{children:"SdkCore"})," was not called when calling any other component."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ComponentControllerError"}),": The exception that is thrown when the component cannot be instantiated."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"55-nfcdocumentinformation",children:"5.5 nfcDocumentInformation"}),"\n",(0,s.jsx)(n.h3,{id:"56-nfcpersonalinformation",children:"5.6 nfcPersonalInformation"}),"\n",(0,s.jsx)(n.h3,{id:"57-nfcvalidations",children:"5.7 nfcValidations"}),"\n",(0,s.jsx)(n.h3,{id:"58-facialimage",children:"5.8 facialImage"}),"\n",(0,s.jsx)(n.h3,{id:"59-fingerprintimage",children:"5.9 fingerprintImage"}),"\n",(0,s.jsx)(n.h3,{id:"510-signatureimage",children:"5.10 signatureImage"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);