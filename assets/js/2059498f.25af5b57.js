"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[3764],{2321:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"VideoId_Component","title":"VideoId Component","description":"1. Introduction","source":"@site/flutter_versioned_docs/version-2.0.X/VideoId_Component.md","sourceDirName":".","slug":"/VideoId_Component","permalink":"/sdk-mobile-documentation/docs/flutter/VideoId_Component","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"VideoCall Component","permalink":"/sdk-mobile-documentation/docs/flutter/VideoCall_Component"},"next":{"title":"Voice Component","permalink":"/sdk-mobile-documentation/docs/flutter/Voice_Component"}}');var s=i(4848),r=i(8453);const t={},d="VideoId Component",l={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Plugin installation: Common",id:"21-plugin-installation-common",level:3},{value:"2.2 Plugin installation: iOS",id:"22-plugin-installation-ios",level:2},{value:"2.2.1 Project configuration",id:"221-project-configuration",level:3},{value:"2.2.2 Update the Podfile",id:"222-update-the-podfile",level:3},{value:"2.2.3 Possible incidents",id:"223-possible-incidents",level:3},{value:"2.3 Plugin installation: Android",id:"23-plugin-installation-android",level:2},{value:"2.3.0 Set Android SDK version",id:"230-set-android-sdk-version",level:3},{value:"3. Component configuration",id:"3-component-configuration",level:2},{value:"3.1 mTime",id:"31-mtime",level:3},{value:"3.2 mode",id:"32-mode",level:3},{value:"3.4 mShowTutorial",id:"34-mshowtutorial",level:3},{value:"3.5 mUrl",id:"35-murl",level:3},{value:"3.6 mApiKey",id:"36-mapikey",level:3},{value:"3.7 mTenantId",id:"37-mtenantid",level:3},{value:"3.8 mShowDiagnostic",id:"38-mshowdiagnostic",level:3},{value:"4. Use of the component",id:"4-use-of-the-component",level:2},{value:"5. Return result",id:"5-return-result",level:2},{value:"5.0 finishStatus",id:"50-finishstatus",level:3},{value:"5.1 finishStatusDescription",id:"51-finishstatusdescription",level:3},{value:"5.2 errorDiagnostic",id:"52-errordiagnostic",level:3},{value:"5.3 errorMessage",id:"53-errormessage",level:3}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"videoid-component",children:"VideoId Component"})}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The Component discussed in the current document is called ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoID Component"})}),". This is responsible for recording a user identifying themselves, showing their face and their identity document."]}),"\n",(0,s.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,s.jsx)(n.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Minimum Android version: ",(0,s.jsx)(n.strong,{children:"24 - JDK 17"})]}),"\n",(0,s.jsxs)(n.li,{children:["Minimum iOS version: ",(0,s.jsx)(n.strong,{children:"13"})]}),"\n",(0,s.jsxs)(n.li,{children:["Minimum Flutter version: ",(0,s.jsx)(n.strong,{children:"3.0"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,s.jsx)(n.p,{children:"armeabi-v7, x86, arm64 and x64"}),"\n",(0,s.jsx)(n.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,s.jsx)(n.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,s.jsxs)(n.p,{children:["We look for the file ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"pubspec.yaml"})})," in the root of the plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["The version is indicated in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"KEY/TAG"})})," version."]}),"\n",(0,s.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,s.jsxs)(n.p,{children:["Before integrating this component ",(0,s.jsx)(n.strong,{children:"it is recommended"})," to read the documentation related to ",(0,s.jsx)(n.strong,{children:"Core Component"})," and follow the instructions indicated in said document."]}),"\n",(0,s.jsxs)("div",{class:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis section will explain step by step how to integrate the current component into an existing project.\nFor this section, the following values \u200b\u200bwill be considered:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"})," - Path to the root of the application (example: /folder/example)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_CORE_PATH%>"})," - Path to the root of the core plugin, which is required (example: /folder/sdk-core)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"<%PLUGIN_VIDEOID_PATH%>"})," - Path to the root of the current plugin (example: /folder/sdk-videoid)"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"21-plugin-installation-common",children:"2.1. Plugin installation: Common"}),"\n",(0,s.jsxs)(n.p,{children:["The plugin allows execution on ",(0,s.jsx)(n.strong,{children:"Android and iOS"})," platforms. This section explains common steps. To install the plugin you must follow the following steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure Flutter is installed."}),"\n",(0,s.jsx)(n.li,{children:"Access APPLICATION_PATH in a terminal and run:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Access ",(0,s.jsx)(n.strong,{children:"<%APPLICATION_PATH%>"}),", and in the pubspec.yaml file and add:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"fphi_sdkmobile_videoid:\n  hosted:\n    name: sdkvideoid\n    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/\n  version: ^2.0.0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After executing the above steps, you can launch the application with the sdk/component installed.\nFrom different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using ",(0,s.jsx)(n.strong,{children:"Android Studio"})," and ",(0,s.jsx)(n.strong,{children:"XCode"})," respectively."]}),"\n",(0,s.jsx)(n.h2,{id:"22-plugin-installation-ios",children:"2.2 Plugin installation: iOS"}),"\n",(0,s.jsx)(n.h3,{id:"221-project-configuration",children:"2.2.1 Project configuration"}),"\n",(0,s.jsx)(n.p,{children:"For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add camera permissions"}),": To use the widget, you need to enable the camera permission in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"info.plist"})})," file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following ",(0,s.jsx)(n.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) uses the camera</string>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add microphone permissions:"})," To use the component, you need to enable the camera permission in the application's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"info.plist"})})," file (included within the project in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ios"})})," folder). You will need to edit the file with a text editor and add the following ",(0,s.jsx)(n.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"<key>NSMicrophoneUsageDescription</key>\n<string>This app needs microphone access</string>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"222-update-the-podfile",children:"2.2.2 Update the Podfile"}),"\n",(0,s.jsx)(n.p,{children:"In the project podfile it will be necessary to add the information of the private repository (see section 2.1). To do this, the following lines must be added to the beginning of the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nTo know more about the configuration and use of ",(0,s.jsx)(n.strong,{children:"Cocoapods Artifactory"}),", it is necessary to access the following ",(0,s.jsx)(n.em,{children:"Core Component"})," document."]})}),"\n",(0,s.jsx)(n.h3,{id:"223-possible-incidents",children:"2.2.3 Possible incidents"}),"\n",(0,s.jsx)(n.p,{children:"If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"ios"})," folder of the application in a terminal."]}),"\n",(0,s.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,s.jsx)(n.li,{children:"Run the following command (or open the project with Xcode and run it):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pod repo-art update cocoa-pro-fphi\npod install --repo-update\n"})}),"\n",(0,s.jsx)(n.h2,{id:"23-plugin-installation-android",children:"2.3 Plugin installation: Android"}),"\n",(0,s.jsx)(n.h3,{id:"230-set-android-sdk-version",children:"2.3.0 Set Android SDK version"}),"\n",(0,s.jsxs)(n.p,{children:["For Android, the minimum SDK version required by our native libraries is ",(0,s.jsx)(n.strong,{children:"24"}),", so if your app has a ",(0,s.jsx)(n.em,{children:"minimum SDK"})," defined lower than this, it will need to be modified to avoid a build error. To do this, access the application's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build.gradle"})})," file (located in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"android"})})," folder) and modify the following parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-component-configuration",children:"3. Component configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The current component contains a number of ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"dart"})})," methods and interfaces included within the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"fphi_sdkmobile_videoid_configuration.dart"})})," file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is the ",(0,s.jsx)(n.em,{children:"VideoIdConfiguration"})," class, which allows you to configure the ",(0,s.jsx)(n.strong,{children:"VideoID"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class VideoIdConfiguration\n{\n  VideoMode mMode;\n  int mTime;\n  bool mShowTutorial;\n  String? mUrl;\n  String? mApiKey;\n  String? mTenantId;\n  bool? mShowDiagnostic;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, all the properties that can be defined in the ",(0,s.jsx)(n.strong,{children:"VideoIdConfiguration"})," object will be discussed:"]}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAll configuration can be found in the component's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"fphi_sdkmobile_videoid/fphi_sdkmobile_videoid_configuration.dart."})})," file."]})}),"\n",(0,s.jsx)(n.p,{children:"When calling the widget there are a series of parameters that must be included. They will be briefly discussed below."}),"\n",(0,s.jsx)(n.h3,{id:"31-mtime",children:"3.1 mTime"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Time that will remain on each screen of the process in ms."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mTime: 5000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-mode",children:"3.2 mode"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"VideoMode"})]}),"\n",(0,s.jsxs)(n.p,{children:["This enumeration is defined in the ",(0,s.jsx)(n.strong,{children:"VideoMode"})," class in ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"fphi_sdkmobile_videoid_mode.dart"})}),". Mode to be applied for recording. The possible VideoIdMode values \u200b\u200bwill be:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoMode.FACE_DOCUMENT_FRONT"})}),": You have to show the face and the front of the document."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoMode.ONLY_FACE"})}),": You only have to show the face during the process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoMode.FACE_DOCUMENT_FRONT_BACK"})}),": You have to show the face, front and back of the document."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mode: VideoMode.FACE_DOCUMENT_FRONT_BACK;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"34-mshowtutorial",children:"3.4 mShowTutorial"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether you want to show the complete tutorial of the process or just the simplified version."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mShowTutorial: true;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"35-murl",children:"3.5 mUrl"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Path to the video socket."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mUrl: url_provided_by_Facephi\n"})}),"\n",(0,s.jsx)(n.h3,{id:"36-mapikey",children:"3.6 mApiKey"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"ApiKey required for connection to the video socket."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'mApiKey: "apiKey_provided_by_Facephi";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"37-mtenantid",children:"3.7 mTenantId"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Tenant identifier that refers to the current client, necessary for the connection to the video service."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'mTenantId: "TenantId_provided_by_Facephi";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"38-mshowdiagnostic",children:"3.8 mShowDiagnostic"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Indicates whether you want to show a diagnosis in case of failure."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mShowDiagnostic: false;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-use-of-the-component",children:"4. Use of the component"}),"\n",(0,s.jsx)(n.p,{children:"Below will be shown how to execute the functionality of the current component."}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nRemember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation."]})}),"\n",(0,s.jsx)(n.p,{children:"Once the component is configured, to launch it the following code must be executed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Future<Either<Exception, VideoIdResult>>\n  launchVideoIdWithConfiguration(VideoIdConfiguration configuration) async {\n  try\n  {\n    FphiSdkmobileVideoid videoId = FphiSdkmobileVideoid();\n    final Map resultJson = await videoId.startVideoIdComponent(widgetConfigurationJSON: configuration);\n    return Right(VideoIdResult.fromMap(resultJson));\n  }\n  on Exception catch (e) {\n    return (Left(e));\n  }\n}\n\n/// Sample of standard plugin configuration\nVideoIdConfiguration createStandardConfiguration()\n{\n  VideoIdConfiguration configurationWidget;\n  configurationWidget = VideoIdConfiguration();\n  configurationWidget.mTime         = 5000;\n  configurationWidget.mMode         = VideoMode.DT_FACE_DOCUMENT_FRONT_BACK;\n  configurationWidget.mShowTutorial = false;\n  return configurationWidget;\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-return-result",children:"5. Return result"}),"\n",(0,s.jsxs)(n.p,{children:["As shown in the above example, the result is returned in the form of a ",(0,s.jsx)(n.strong,{children:"JSON"})," object through ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Promises"})}),", whether it is a successful operation or an error:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"FphiSdkmobileVideoid videoId = FphiSdkmobileVideoid();\nfinal Map resultJson = await videoId.startVideoIdComponent(widgetConfigurationJSON: configuration);\nreturn Right(VideoIdResult.fromMap(resultJson));\n"})}),"\n",(0,s.jsx)(n.p,{children:"Regardless of whether the result is correct/wrong, the result will have the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"class VideoIdResult\n{\n  final SdkFinishStatus finishStatus;\n  final String finishStatusDescription;\n  final String errorDiagnostic;\n  final String? errorMessage;\n  final String data;\n}\n"})}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThe result will be returned through a Promise that contains an object of the class ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"VideoIdResult"})}),". Below is more information about these fields."]})}),"\n",(0,s.jsx)(n.h3,{id:"50-finishstatus",children:"5.0 finishStatus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1"}),": The operation was successful."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"2"}),": An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"51-finishstatusdescription",children:"5.1 finishStatusDescription"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_OK"}),": The operation was successful."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STATUS_ERROR"}),": An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-errordiagnostic",children:"5.2 errorDiagnostic"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the type of error that occurred (if there was one, which is indicated by the ",(0,s.jsx)(n.code,{children:"finishStatus"})," parameter with the value ",(0,s.jsx)(n.code,{children:"Error"}),"). The values \u200b\u200bit can have are the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NoError"}),": No error has occurred. The process can continue."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"UnknownError"}),": Unhandled error. Possibly caused by a bug in the resource bundle."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CameraPermissionDenied"}),": The exception that is thrown when the sdk does not have permission to access the camera."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": The exception that is thrown when the widget does not have permission to access system settings (",(0,s.jsx)(n.em,{children:"deprecated"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HardwareError"}),": Exception that occurs when there is a hardware problem with the device, usually caused by very few available resources."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ExtractionLicenceError"}),": Exception that occurs when there has been a licencing problem on the server."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Exception that occurs during the capture of frames by the camera."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ControlNotInitialisedError"}),": The widget configurator has not been initialised."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problem arose during widget configuration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CancelByUser"}),": The exception that is thrown when the user stops the extraction manually."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TimeOut"}),": Exception that is thrown when a maximum time elapses without successfully completing the extraction."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"InitProccessError"}),": Exception that is thrown when the sdk cannot process the captured images."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NfcError"}),": The exception that is thrown when the sdk does not have permission to access the nfc."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NetworkConnection"}),": The exception that is thrown when there are issues with the means the device uses to connect to the network."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TokenError"}),": The exception that is thrown when an invalid token is passed as a parameter."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"InitSessionError"}),": The exception that is thrown when session cannot be initialised. The normal thing is that it happens because the ",(0,s.jsx)(n.code,{children:"SdkCore"})," was not called when calling any other component."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ComponentControllerError"}),": The exception that is thrown when the component cannot be instantiated."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-errormessage",children:"5.3 errorMessage"}),"\n",(0,s.jsx)(n.p,{children:"Indicates an additional error message if necessary. It is an optional value."})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var o=i(6540);const s={},r=o.createContext(s);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);