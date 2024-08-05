"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7205],{5745:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=i(4848),s=i(8453);const t={},o="NFC Component",l={id:"Nfc_Component",title:"NFC Component",description:"1. Introduction",source:"@site/capacitor_versioned_docs/version-2.0.X/Nfc_Component.md",sourceDirName:".",slug:"/Nfc_Component",permalink:"/sdk-mobile-documentation/docs/capacitor/Nfc_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",previous:{title:"Phingers Component",permalink:"/sdk-mobile-documentation/docs/capacitor/Phingers_Component"},next:{title:"VideoCall Component",permalink:"/sdk-mobile-documentation/docs/capacitor/VideoCall_Component"}},d={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Plugin installation: Common",id:"21-plugin-installation-common",level:3},{value:"2.2 Plugin installation: iOS",id:"22-plugin-installation-ios",level:3},{value:"2.2.1 Project configuration",id:"221-project-configuration",level:4},{value:"2.2.2 Update the Podfile",id:"222-update-the-podfile",level:4},{value:"2.2.3 Possible issues",id:"223-possible-issues",level:4},{value:"2.3  Plugin installation: Android",id:"23--plugin-installation-android",level:3},{value:"2.3.1 Set Android SDK version",id:"231-set-android-sdk-version",level:4},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"3.1 docNumber",id:"31-docnumber",level:3},{value:"3.2 birthDate",id:"32-birthdate",level:3},{value:"3.3 expirationDate",id:"33-expirationdate",level:3},{value:"3.4 extractionTimeout",id:"34-extractiontimeout",level:3},{value:"3.5 showTutorial",id:"35-showtutorial",level:3},{value:"3.6 showDiagnostic",id:"36-showdiagnostic",level:3},{value:"3.7 vibrationEnabled",id:"37-vibrationenabled",level:3},{value:"3.8 skipPACE",id:"38-skippace",level:3},{value:"3.9 debug",id:"39-debug",level:3},{value:"4. Component Usage",id:"4-component-usage",level:2},{value:"5. Receipt of the result",id:"5-receipt-of-the-result",level:2},{value:"5.1 finishStatus",id:"51-finishstatus",level:3},{value:"5.2 finishStatusDescription",id:"52-finishstatusdescription",level:3},{value:"5.3 errorType",id:"53-errortype",level:3},{value:"5.4 errorMessage:",id:"54-errormessage",level:3},{value:"5.5 nfcDocumentInformation",id:"55-nfcdocumentinformation",level:3},{value:"5.6 nfcPersonalInformation",id:"56-nfcpersonalinformation",level:3},{value:"5.7 nfcValidations",id:"57-nfcvalidations",level:3},{value:"5.8 facialImage",id:"58-facialimage",level:3},{value:"5.9 fingerprintImage",id:"59-fingerprintimage",level:3},{value:"5.10 signatureImage",id:"510-signatureimage",level:3}];function a(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"nfc-component",children:"NFC Component"}),"\n",(0,r.jsx)(e.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(e.p,{children:["The Component addressed in the current document is called the ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"NFC Component"})}),". This is responsible for capturing a selfie of the user and the subsequent extraction of the most important facial characteristics. Its main functionalities are the following:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Internal management of the NFC sensor."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Permission management."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Document analysis."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Progress analysis."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Assistant in reading processes."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Return all possible information to be read"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Return of images when they are available for reading."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,r.jsx)(e.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Minimum Android version: ",(0,r.jsx)(e.strong,{children:"24 - JDK 17"})]}),"\n",(0,r.jsxs)(e.li,{children:["Minimum iOS version: ",(0,r.jsx)(e.strong,{children:"13"})]}),"\n",(0,r.jsxs)(e.li,{children:["Minimum Capacitor version: ",(0,r.jsx)(e.strong,{children:"5"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"armeabi-v7, x86, arm64 y x64"}),"\n"]}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThis component needs to update to ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"React Native 0.72 version"})})," due to internal dependencies, or at least to update ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"Android Build Tools"})})," to ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"8.0"})})," or more"]})}),"\n",(0,r.jsx)(e.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,r.jsx)(e.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Look for the ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"package.json"})})," file at the root of the plugin."]}),"\n",(0,r.jsx)(e.li,{children:"The KEY/TAG version indicates the version."}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nBefore integrating this component, it is ",(0,r.jsx)(e.em,{children:"recommended"})," to read the documentation related to ",(0,r.jsx)(e.em,{children:"Core Component"})," and follow the instructions indicated in said document."]})}),"\n",(0,r.jsx)(e.p,{children:"This section will explain step by step how to integrate the current component into an existing project."}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),(0,r.jsx)(e.p,{children:"For this section, the following values \u200b\u200bwill be considered:"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"<%APPLICATION_PATH%>"})," - Path to the root of the application (example: /folder/example)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path to the root of the Core plugin, which is required (example: /folder/sdk-core)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"<%PLUGIN_NFC_PATH%>"})," - Path to the root of the current plugin (example: /folder/sdk-nfc)"]}),"\n"]})]}),"\n",(0,r.jsx)(e.h3,{id:"21-plugin-installation-common",children:"2.1. Plugin installation: Common"}),"\n",(0,r.jsxs)(e.p,{children:["The plugin allows execution on ",(0,r.jsx)(e.strong,{children:"Android and iOS"})," platforms. This section explains the common steps to all platforms. To install the plugin, the following steps must be adopted:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Access ",(0,r.jsx)(e.strong,{children:"APPLICATION_PATH"})," at a terminal and run:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"npm i @facephi/sdk-core-capacitor\nnpm i @facephi/sdk-nfc-capacitor\nnpm run build\nnpx cap sync\nnpx ionic capacitor build [android | ios]\n"})}),"\n",(0,r.jsx)(e.p,{children:"After running the above steps, you can start the app with the sdk/component installed."}),"\n",(0,r.jsxs)(e.p,{children:["Projects generated in the Android and iOS folders can be opened, compiled, and debugged using ",(0,r.jsx)(e.em,{children:"Android Studio"})," and ",(0,r.jsx)(e.em,{children:"XCode"}),", respectively."]}),"\n",(0,r.jsx)(e.h3,{id:"22-plugin-installation-ios",children:"2.2 Plugin installation: iOS"}),"\n",(0,r.jsx)(e.h4,{id:"221-project-configuration",children:"2.2.1 Project configuration"}),"\n",(0,r.jsx)(e.p,{children:"For the iOS version, when adding our plugin to the final application, the following points must be previously taken into account:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"Add camera permissions"})}),": To use the component, you need to enable the camera permission in the application's ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"info.plist"})})," file (included within the project in the ios folder). You will need to edit the file with a text editor and add the following ",(0,r.jsx)(e.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"Add Privacy - NFC Scan Usage Description"})}),"  To use the component, you need to enable the NFC permission in the application's ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"info.plist"})})," file (included within the project in the ios folder)."]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"<key>NFCReaderUsageDescription</key>\n<string>The app needs this permission for the correct usage.</string>\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"Add ISO7816 application identifiers for NFC Tag Reader Session"})}),": Finally, you have to edit ",(0,r.jsx)(e.em,{children:"info.plist"})," file with a Text Editor, and  add the following key/value/pair:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"<array>\n    <string>A0000002471001</string>\n    <string>A0000002472001</string>\n    <string>00000000000000</string>\n</array>\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"Add the Capability Near field Communication Tag Reading"})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["It is necessary to add the ",(0,r.jsx)(e.strong,{children:"Near Field Communication Tag Reading"})," option in the ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"Signing & Capabilities"})})," section of the target"]}),"\n",(0,r.jsx)(e.h4,{id:"222-update-the-podfile",children:"2.2.2 Update the Podfile"}),"\n",(0,r.jsx)(e.p,{children:"In the project podfile it will be necessary to add the information from the private repository (see section 2.1). To do this, the following lines must be added at the beginning of the file:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nTo know more about the configuration and use of ",(0,r.jsx)(e.strong,{children:"Cocoapods Artifactory"}),", it is necessary to access the following document of ",(0,r.jsx)(e.strong,{children:"Core Component"}),"."]})}),"\n",(0,r.jsx)(e.h4,{id:"223-possible-issues",children:"2.2.3 Possible issues"}),"\n",(0,r.jsx)(e.p,{children:"If environment problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the correct versions), it is recommended to execute the following sequence of instructions after launching the plugin:"}),"\n",(0,r.jsx)(e.p,{children:"Open the application's ios folder at a terminal."}),"\n",(0,r.jsx)(e.p,{children:"Run the following command:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"pod deintegrate\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Remove the ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"Podfile.lock"})})]}),"\n",(0,r.jsx)(e.li,{children:"Run the following command (or open the project with Xcode and run it):"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"pod install --repo-update\n"})}),"\n",(0,r.jsx)(e.h3,{id:"23--plugin-installation-android",children:"2.3  Plugin installation: Android"}),"\n",(0,r.jsx)(e.h4,{id:"231-set-android-sdk-version",children:"2.3.1 Set Android SDK version"}),"\n",(0,r.jsxs)(e.p,{children:["For Android, the minimum SDK version required by our native libraries is ",(0,r.jsx)(e.strong,{children:"24"}),", so if your app has a Minimum SDK defined less than this, it will need to be modified to avoid a compile error. To do this, access the application's ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"build.gradle"})})," file (located in the ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["The minimun android.tools(AGP) is ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"8.3.0"})}),". To set this, access the application's ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"build.gradle"})})," file (located in the ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'dependencies {\n    classpath "com.android.tools.build:gradle:8.3.0"\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"In the same file its mandatory to add this:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'android {\n    packagingOptions {\n        pickFirst("META-INF/versions/9/OSGI-INF/MANIFEST.MF") // NFC\n    }\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,r.jsxs)(e.p,{children:["The actual component contains a number of Typescript methods and interfaces contained within the ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"definitions.ts"})})," file. In this file you can find the necessary API for the communication between the application and the native functionality of the component. It is then explained what each one of those listed is for and the other properties that affect the operation of the component."]}),"\n",(0,r.jsxs)(e.p,{children:["Below is the ",(0,r.jsx)(e.em,{children:"NfcConfiguration"})," class, which allows you to configure the ",(0,r.jsx)(e.strong,{children:"Nfc"})," component:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"export interface NfcConfiguration {\n  docNumber: string;\n  birthDate: string;\n  expirationDate: string;\n  extractionTimeout?: number;\n  showTutorial?: boolean;\n  vibrationEnabled?: boolean;\n  skipPACE?: boolean;\n  debug?: boolean;\n  showDiagnostic?: boolean;\n}\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAll the configuration can be found in the component's ",(0,r.jsx)(e.em,{children:"definitions.ts"})," file."]})}),"\n",(0,r.jsx)(e.p,{children:"When making the call to the component there is a series of parameters that must be included. They will be briefly discussed below."}),"\n",(0,r.jsx)(e.h3,{id:"31-docnumber",children:"3.1 docNumber"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"string"})]}),"\n",(0,r.jsx)(e.p,{children:"Indicates the document or media number depending on the document to be\nread."}),"\n",(0,r.jsx)(e.p,{children:"This field is mandatory."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docNumber: 2115000\n"})}),"\n",(0,r.jsx)(e.h3,{id:"32-birthdate",children:"3.2 birthDate"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"string"})]}),"\n",(0,r.jsx)(e.p,{children:'Indicates the date of birth that appears on the document ("dd/MM/yyyy").'}),"\n",(0,r.jsx)(e.p,{children:"This field is mandatory."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"birthDate: dd/mm/yyyy;\n"})}),"\n",(0,r.jsx)(e.h3,{id:"33-expirationdate",children:"3.3 expirationDate"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"number"})]}),"\n",(0,r.jsx)(e.p,{children:'Indicates the expiry date that appears on the document ("dd/MM/yyyy").'}),"\n",(0,r.jsx)(e.p,{children:"This field is mandatory."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"expirationDate: dd/mm/yyyy;\n"})}),"\n",(0,r.jsx)(e.h3,{id:"34-extractiontimeout",children:"3.4 extractionTimeout"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"number"})]}),"\n",(0,r.jsx)(e.p,{children:"Sets the maximum time the reading can be done."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"extractionTimeout: 5000;\n"})}),"\n",(0,r.jsx)(e.h3,{id:"35-showtutorial",children:"3.5 showTutorial"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"boolean"})]}),"\n",(0,r.jsx)(e.p,{children:"Indicates whether the component activates the tutorial screen. This view\nintuitively explains how the capture is performed."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"showTutorial: true;\n"})}),"\n",(0,r.jsx)(e.h3,{id:"36-showdiagnostic",children:"3.6 showDiagnostic"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"boolean"})]}),"\n",(0,r.jsx)(e.p,{children:"Display diagnostic screens at the end of the process"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"showDiagnostic: false;\n"})}),"\n",(0,r.jsx)(e.h3,{id:"37-vibrationenabled",children:"3.7 vibrationEnabled"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"boolean"})]}),"\n",(0,r.jsx)(e.p,{children:"Indicates whether vibration feedback is desired at the end of the\nprocess."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"vibrationEnabled: false;\n"})}),"\n",(0,r.jsx)(e.h3,{id:"38-skippace",children:"3.8 skipPACE"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"boolean"})]}),"\n",(0,r.jsx)(e.p,{children:"Indicates that only NFC BAC reading is desired. It is a simple and fast\nreader."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"skipPACE: false;\n"})}),"\n",(0,r.jsx)(e.h3,{id:"39-debug",children:"3.9 debug"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"type:"})," ",(0,r.jsx)(e.em,{children:"boolean"})]}),"\n",(0,r.jsx)(e.p,{children:"Activation of the component's debug mode."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"debug: false;\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"4-component-usage",children:"4. Component Usage"}),"\n",(0,r.jsx)(e.p,{children:"The following will show how to execute the functionality of the current component."}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nRemember that in order to launch a certain component previously, you must ",(0,r.jsx)(e.strong,{children:"initialise the SDK"})," with its respective licence, and then ",(0,r.jsx)(e.strong,{children:"start a new operation"}),". For further information, consult the documentation of the Core Component."]})}),"\n",(0,r.jsx)(e.p,{children:"Once the component has been configured, to launch it, the following code must be executed:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"/**\n * Method that launches the plugin.\n * @returns Promise with a JSON string.\n */\nlaunchNfc = async (): Promise<NfcResult> => {\n  console.log('Launching Nfc widget...');\n  // SelphiFaceConfiguration\n  return SdkNfc.startNfc(this.getNFCConfiguration());\n}\n\ngetNFCConfiguration() \n{\n  let config: NfcConfiguration = {\n    docNumber: 'DOC_NUMBER',\n    birthDay: '16/08/1979',\n    expirationDay: '29/11/2022',\n    extractionTimeout: 5000,\n  };\n  return config;\n}\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"5-receipt-of-the-result",children:"5. Receipt of the result"}),"\n",(0,r.jsx)(e.p,{children:"As shown in the example above, the result is returned in the form of a JSON object via Promises, whether it is a successful operation or an error:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"return SdkNfc.startNfc(this.getNFCConfiguration());\n"})}),"\n",(0,r.jsx)(e.p,{children:"Regardless of whether the result is correct/erroneous, the result will have the following format:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"export interface NfcResult \n{\n  finishStatus: number;\n  finishStatusDescription?: string;\n  errorType: string;\n  errorMessage?: string;\n  nfcDocumentInformation?: any;\n  nfcPersonalInformation?: any;\n  nfcValidations?: any;\n  nfcRawData?: any;\n  nfcSecurityData?: any;\n  facialImage?: string;\n  fingerprintImage?: string;\n  signatureImage?: string;\n}\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThe result will be returned via a Promise containing an object of class ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"NfcResult"})}),". Information on these fields has been elaborated on below."]})}),"\n",(0,r.jsx)(e.h3,{id:"51-finishstatus",children:"5.1 finishStatus"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"1"}),": The operation was successful."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"2"}),": An error has occurred, which will be indicated in the errorDiagnostic enumerated and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"52-finishstatusdescription",children:"5.2 finishStatusDescription"}),"\n",(0,r.jsx)(e.p,{children:"Returns the operation's global description. It is an optional value."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"STATUS_OK"}),": The operation was successful."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"STATUS_ERROR"}),": An error has occurred, which will be indicated in the errorDiagnostic enumerated and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"53-errortype",children:"5.3 errorType"}),"\n",(0,r.jsxs)(e.p,{children:["Returns the type of error that occurred (if there was one, which is indicated by the ",(0,r.jsx)(e.code,{children:"finishStatus"})," parameter with the value ",(0,r.jsx)(e.code,{children:"Error"}),"). The values \u200b\u200bit can have are the following:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"NfcError.ACTIVITY_RESULT_ERROR"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.CANCEL_BY_USER"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.INITIALIZATION_ERROR"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NFC_ERROR"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NFC_ERROR_DATA"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NFC_ERROR_DISABLED"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NFC_ERROR_ILLEGAL_ARGUMENT"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NFC_ERROR_IO"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NFC_ERROR_NOT_SUPPORTED"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NFC_ERROR_READING"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NFC_ERROR_TAG_LOST"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.NO_DATA_ERROR"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.TIMEOUT"}),"\n",(0,r.jsx)(e.li,{children:"NfcError.LAST_COMMAND_EXPECTED"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"54-errormessage",children:"5.4 errorMessage:"}),"\n",(0,r.jsx)(e.p,{children:"It is an optional value. This parameter it is an extra message explaining the current error."}),"\n",(0,r.jsx)(e.h3,{id:"55-nfcdocumentinformation",children:"5.5 nfcDocumentInformation"}),"\n",(0,r.jsx)(e.p,{children:"Information obtained from the document ordered by:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"documentNumber"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"expirationDate"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"issuer"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"mrzString"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"type"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"56-nfcpersonalinformation",children:"5.6 nfcPersonalInformation"}),"\n",(0,r.jsx)(e.p,{children:"Information obtained from the document ordered by:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"address"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"birthdate"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"city"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"gender"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"name"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"nationality"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"personalNumber"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"placeOfBirth"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"surname"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"57-nfcvalidations",children:"5.7 nfcValidations"}),"\n",(0,r.jsx)(e.p,{children:"Document validation information sorted by:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"accessType"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"activeAuthenticationSupported"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"activeAuthenticationValidation"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"chipAuthenticationValidation"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"dataGroupsHashesValidation"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"documentSigningValidation"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"issuerSigningValidation"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"58-facialimage",children:"5.8 facialImage"}),"\n",(0,r.jsx)(e.p,{children:"The image of the face obtained during the capture."}),"\n",(0,r.jsx)(e.h3,{id:"59-fingerprintimage",children:"5.9 fingerprintImage"}),"\n",(0,r.jsx)(e.p,{children:"The image of the fingeprint obtained during the capture."}),"\n",(0,r.jsx)(e.h3,{id:"510-signatureimage",children:"5.10 signatureImage"}),"\n",(0,r.jsx)(e.p,{children:"The image of the signature obtained during the capture."})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>l});var r=i(6540);const s={},t=r.createContext(s);function o(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);