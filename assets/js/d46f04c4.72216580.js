"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5482],{6219:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Core_Component","title":"Core Component","description":"1. Introduction","source":"@site/flutter_versioned_docs/version-2.0.X/Core_Component.md","sourceDirName":".","slug":"/Core_Component","permalink":"/sdk-mobile-documentation/docs/flutter/Core_Component","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Getting Started","permalink":"/sdk-mobile-documentation/docs/flutter/Mobile_SDK"},"next":{"title":"Selphi Component","permalink":"/sdk-mobile-documentation/docs/flutter/Selphi_Component"}}');var r=i(4848),t=i(8453);const o={},l="Core Component",a={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"1.3 Plugin installation: Android",id:"13-plugin-installation-android",level:3},{value:"1.3.1 Permissions for geolocation",id:"131-permissions-for-geolocation",level:4},{value:"2. Session initialisation",id:"2-session-initialisation",level:2},{value:"2.1 Initialisation",id:"21-initialisation",level:3},{value:"a. Injecting the licence as String",id:"a-injecting-the-licence-as-string",level:4},{value:"b. Obtaining the licence through a service",id:"b-obtaining-the-licence-through-a-service",level:4},{value:"2.2 Init session configuration",id:"22-init-session-configuration",level:3},{value:"2.2.1 license",id:"221-license",level:4},{value:"2.2.2 licenseUrl",id:"222-licenseurl",level:4},{value:"2.2.3 licenseApiKey",id:"223-licenseapikey",level:4},{value:"2.2.4 enableTracking",id:"224-enabletracking",level:4},{value:"2.2.5 locale",id:"225-locale",level:4},{value:"3. Start a new operation",id:"3-start-a-new-operation",level:2},{value:"4. Launch of components",id:"4-launch-of-components",level:2},{value:"5.  Return of result",id:"5--return-of-result",level:2},{value:"5.1 finishStatus",id:"51-finishstatus",level:3},{value:"5.2 finishStatusDescription",id:"52-finishstatusdescription",level:3},{value:"5.3 errorMessage",id:"53-errormessage",level:3},{value:"5.4 errorDiagnostic",id:"54-errordiagnostic",level:3},{value:"5.5 tokenized",id:"55-tokenized",level:3},{value:"5.6 data",id:"56-data",level:3},{value:"5.7 sessionId",id:"57-sessionid",level:3},{value:"5.8 operationId",id:"58-operationid",level:3},{value:"6. Close Session",id:"6-close-session",level:2},{value:"7. ExtraData method",id:"7-extradata-method",level:2},{value:"8. Tokenize Method",id:"8-tokenize-method",level:2}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"core-component",children:"Core Component"})}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The Component addressed in the current document is called ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Core\nComponent"})}),". This component is ",(0,r.jsx)(n.strong,{children:"mandatory installation"}),", regardless\nof the use case, as it contains ",(0,r.jsx)(n.strong,{children:"generic functionality"})," to the entire\nsdk, as well as allowing the use of more specific components."]}),"\n",(0,r.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,r.jsx)(n.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Minimum Android version: ",(0,r.jsx)(n.strong,{children:"24 - JDK 17"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum Build Tools version: ",(0,r.jsx)(n.strong,{children:"8.1.4"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum Kotlin Android version: ",(0,r.jsx)(n.strong,{children:"1.9.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum iOS version: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum Flutter version: ",(0,r.jsx)(n.strong,{children:"3.0"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"armeabi-v7, x86, arm64 and x64"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,r.jsx)(n.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Look for the ",(0,r.jsx)(n.em,{children:"pubspec.yaml"})," file at the root of the plugin."]}),"\n",(0,r.jsxs)(n.li,{children:["The KEY/TAG ",(0,r.jsx)(n.strong,{children:"version"})," indicates the version."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"13-plugin-installation-android",children:"1.3 Plugin installation: Android"}),"\n",(0,r.jsx)(n.h4,{id:"131-permissions-for-geolocation",children:"1.3.1 Permissions for geolocation"}),"\n",(0,r.jsxs)(n.p,{children:["Because the ",(0,r.jsx)(n.strong,{children:"Tracking"})," component has geolocation options, it is necessary to add permissions for this. In the AndroidManifest add the following permissions:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'\x3c!-- Always include this permission --\x3e\n<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n\x3c!-- Include only if your app benefits from precise location access. --\x3e\n<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-session-initialisation",children:"2. Session initialisation"}),"\n",(0,r.jsx)(n.h3,{id:"21-initialisation",children:"2.1 Initialisation"}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nAll the configuration can be found in the component's ",(0,r.jsx)(n.em,{children:"node_modules/@facephi/sdk-core-react-native/src/src/index.tsx"})," file."]})}),"\n",(0,r.jsxs)(n.p,{children:["Each component has a controller that will allow access to its functionality. Before they can be used, they must be properly initialised. This initialisation must be done as soon as possible, preferably at the application init. Moreover, once all the operations are finished, and the interaction with the SDK Mobile is over, the session must be closed (",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"section 6"})}),")."]}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nThis controller ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"SDKController"})})," it will be used for every ",(0,r.jsx)(n.em,{children:"Component"})," call."]})}),"\n",(0,r.jsxs)(n.p,{children:["There are currently two ways to ",(0,r.jsx)(n.strong,{children:"inject the licence"}),":"]}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a. Online: Obtaining the licence through a service using a URL and a API-KEY"}),"\n",(0,r.jsx)(n.li,{children:"b. Offline: Injecting the licence as String"}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["In both cases, the result will be returned through a ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Promise"})})," containing an object ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"CoreResult"})}),". More information will be added in ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"section 5."})})]}),"\n",(0,r.jsx)(n.h4,{id:"a-injecting-the-licence-as-string",children:"a. Injecting the licence as String"}),"\n",(0,r.jsx)(n.p,{children:"You can assign the licence directly as a String, as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Future<Either<Exception, CoreResult>> initSession() async\n  {\n    try\n    {\n      FphiSdkmobileCore core = FphiSdkmobileCore();\n      String lic    = (Platform.isAndroid) ? LICENSE_ANDROID : LICENSE_IOS;\n\n      final Map resultJson = await core.initSession(widgetConfigurationJSON: CoreConfigurationInitSession(\n          mLicense: lic,\n          mEnableTracking: true\n      ));\n\n      return Right(CoreResult.fromMap(resultJson));\n    } on Exception catch (e) {\n      return (Left(e));\n    }\n  }\n"})}),"\n",(0,r.jsx)(n.h4,{id:"b-obtaining-the-licence-through-a-service",children:"b. Obtaining the licence through a service"}),"\n",(0,r.jsx)(n.p,{children:"Through a service that will simply require a URL and an API-KEY as an identifier. This would avoid problems when manipulating the licence, as well as the constant substitution of said licences when a problem arises in this regard (malformation or improper modification, licence expiry...):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:'Future<Either<Exception, CoreResult>> initSession() async\n  {\n    try\n    {\n      FphiSdkmobileCore core = FphiSdkmobileCore();\n\n      String apiKey = (Platform.isAndroid) ? LICENSE_APIKEY_ANDROID : LICENSE_APIKEY_IOS;\n\n      final Map resultJson = await core.initSession(widgetConfigurationJSON: CoreConfigurationInitSession(\n          mLicenseUrl: "https://***.***.pro",\n          mLicenseApiKey: apiKey,\n          mEnableTracking: true\n      ));\n\n      return Right(CoreResult.fromMap(resultJson));\n    } on Exception catch (e) {\n      return (Left(e));\n    }\n  }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"22-init-session-configuration",children:"2.2 Init session configuration"}),"\n",(0,r.jsxs)(n.p,{children:["In the previous section, there is a class called\n",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"InitSessionConfiguration"})})," that customises the current session. The\nproperties of this class are the following:"]}),"\n",(0,r.jsx)(n.h4,{id:"221-license",children:"2.2.1 license"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.p,{children:["Sets the SDK Mobile ",(0,r.jsx)(n.em,{children:"license"}),". This license is provided by Facephi."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mLicense: "valid license\u201c\n'})}),"\n",(0,r.jsx)(n.h4,{id:"222-licenseurl",children:"2.2.2 licenseUrl"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.p,{children:["Sets the ",(0,r.jsx)(n.em,{children:"url"})," where the service remotely validates the current license.\nThis ",(0,r.jsx)(n.em,{children:"endpoint"})," is provided by Facephi (online license)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mLicenseUrl: "https://***.***.pro"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"223-licenseapikey",children:"2.2.3 licenseApiKey"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.p,{children:["Sets the ",(0,r.jsx)(n.em,{children:"apikey"})," for the license service (online license)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mLicenseApiKey: "valid ApiKey"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"224-enabletracking",children:"2.2.4 enableTracking"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type:"})," ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"This property enables or disables the tracking component. This parameter allows the information tracking from the SDK to the Platform."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mEnableTracking: true\n"})}),"\n",(0,r.jsx)(n.h4,{id:"225-locale",children:"2.2.5 locale"}),"\n",(0,r.jsx)(n.p,{children:"This is a string that allows you to change the locale and language of\nthe widget. Examples of values they can have are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u201c\u201c for use the system language"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u201ces\u201d for Spanish."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u201cen\u201d for English."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u201cfr\u201d for french."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-start-a-new-operation",children:"3. Start a new operation"}),"\n",(0,r.jsxs)(n.p,{children:["Every time you wish to start the flow of a new operation (examples of operations would be: onboarding, authentication, videocall,...) it is essential to tell the ",(0,r.jsx)(n.strong,{children:"SDKController"})," that it is going to start, and thus the SDK will know that the next calls of ",(0,r.jsx)(n.strong,{children:"Components"})," (also called ",(0,r.jsx)(n.strong,{children:"Steps"}),") will be part of said operation. This is necessary to ",(0,r.jsx)(n.em,{children:"successfully track the global information of this operation to the platform"}),"."]}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nWhen starting a process or flow, the ",(0,r.jsx)(n.strong,{children:"initOperation"})," method call should ",(0,r.jsx)(n.strong,{children:(0,r.jsx)("u",{children:"always"})})," be made"]})}),"\n",(0,r.jsx)(n.p,{children:"This method has 2 input parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"operationType"}),": Indicates if an ONBOARDING or AUTHENTICATION process is going to be carried out"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"customerId"}),": User's unique id if any (controlled at the application level)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To execute the ",(0,r.jsx)(n.strong,{children:"initOperation"})," method, the call must be done using the ",(0,r.jsx)(n.strong,{children:"SdkMobileCore"})," class:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"  Future<Either<Exception, CoreResult>> initOperation() async\n  {\n    try\n    {\n      FphiSdkmobileCore core = FphiSdkmobileCore();\n\n      final Map resultJson = await core.initOperation(\n        widgetConfigurationJSON: TrackingConfiguration(mCustomerId: CUSTOMER_ID, mType: TrackingOperationType.ONBOARDING),\n      );\n      if (resultJson != null) {\n        return Right(CoreResult.fromMap(resultJson));\n      } else {\n        throw Exception('Plugin internal error');\n      }\n    } on Exception catch (e) {\n      return (Left(e));\n    }\n  }\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-launch-of-components",children:"4. Launch of components"}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nOnce the ",(0,r.jsx)(n.strong,{children:"new operation has been created (section 3)"}),", the different SDK controllers may be launched. To consult this information, you must access the documentation of ",(0,r.jsx)(n.strong,{children:"each of the specific components"}),"."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5--return-of-result",children:"5.  Return of result"}),"\n",(0,r.jsx)(n.p,{children:"The result of each component will be returned through the SDK always maintaining the same structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"class CoreResult {\n  final SdkFinishStatus finishStatus;\n  final String finishStatusDescription;\n  final String errorDiagnostic;\n  final String? errorMessage;\n  final String? flow;\n  final int timeoutStatus;\n  final String? operationId;\n  final String? sessionId;\n  final String? tokenized;\n  final String? data;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The parameters are the following:"}),"\n",(0,r.jsx)(n.h3,{id:"51-finishstatus",children:"5.1 finishStatus"}),"\n",(0,r.jsx)(n.p,{children:"Returns the global diagnostic. The possible values are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"1"}),": The operation was successful."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"2"}),": An error has occurred, which will be indicated in the ",(0,r.jsx)(n.em,{children:"errorDiagnostic"})," string and, optionally, an extra information message will be displayed in the ",(0,r.jsx)(n.em,{children:"errorMessage"})," property."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"52-finishstatusdescription",children:"5.2 finishStatusDescription"}),"\n",(0,r.jsx)(n.p,{children:"Returns the global diagnostic. The possible values are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STATUS_OK"}),": The operation was successful."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STATUS_ERROR"}),": An error has occurred, which will be indicated in the ",(0,r.jsx)(n.em,{children:"errorDiagnostic"})," string and, optionally, an extra information message will be displayed in the ",(0,r.jsx)(n.em,{children:"errorMessage"})," property."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"53-errormessage",children:"5.3 errorMessage"}),"\n",(0,r.jsx)(n.p,{children:"Returns a message with additional information about the error if it is necessary. Is an optional value."}),"\n",(0,r.jsx)(n.h3,{id:"54-errordiagnostic",children:"5.4 errorDiagnostic"}),"\n",(0,r.jsx)(n.p,{children:"Returns the type of error that occurred (if there was one, which is indicated by the `finishStatus` parameter with the value `Error`). They are defined in the `SdkErrorType` class. The values \u200b\u200bit can have are the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NoError:"})," No error has occurred. The process can continue."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UnknownError:"})," Unhandled error. Possibly caused by a bug in the\nresource bundle."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CameraPermissionDenied:"})," The exception that is thrown when the\nsdk does not have permission to access the camera."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SettingsPermissionDenied"}),": The exception that is thrown when the\nwidget does not have permission to access system settings\n(*deprecated*)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HardwareError"}),": Exception that occurs when there is a hardware\nproblem with the device, usually caused by very few available\nresources."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ExtractionLicenceError"}),": Exception that occurs when there has\nbeen a licencing problem on the server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Exception that occurs during the capture\nof frames by the camera."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ControlNotInitialisedError"}),": The widget configurator has not been\ninitialised."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problem arose during widget\nconfiguration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CancelByUser"}),": The exception that is thrown when the user stops\nthe extraction manually."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TimeOut"}),": Exception that is thrown when a maximum time elapses\nwithout successfully completing the extraction."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"InitProccessError"}),": Exception that is thrown when the sdk cannot\nprocess the captured images."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NfcError:"})," The exception that is thrown when the sdk does not\nhave permission to access the nfc."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NetworkConnection"}),": The exception that is thrown when there are\nissues with the means the device uses to connect to the network."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TokenError:"})," The exception that is thrown when an invalid token\nis passed as a parameter."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"InitSessionError"}),": The exception that is thrown"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"when session cannot be initialised. The normal thing is that it\nhappens because the `SdkCore` was not called when calling any\nother component."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ComponentControllerError"}),": The exception that is thrown when the\ncomponent cannot be instantiated."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"55-tokenized",children:"5.5 tokenized"}),"\n",(0,r.jsxs)(n.p,{children:["Optional parameter. Only visible if the ",(0,r.jsx)(n.em,{children:"Tokenized"})," method is called. The plugin will return a value in ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"string"})})," format. More information in ",(0,r.jsx)(n.strong,{children:"section 7."})]}),"\n",(0,r.jsx)(n.h3,{id:"56-data",children:"5.6 data"}),"\n",(0,r.jsxs)(n.p,{children:["Optional parameter. Only visible if the ",(0,r.jsx)(n.em,{children:"GetExtraData"})," method is called. The plugin will return a value in ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"string"})})," format. More information in ",(0,r.jsx)(n.strong,{children:"section 8."})]}),"\n",(0,r.jsx)(n.h3,{id:"57-sessionid",children:"5.7 sessionId"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the current session's identifier. Each time ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"initSession"})})," method is executed, a new ",(0,r.jsx)(n.em,{children:"sessionId"})," will be generated."]}),"\n",(0,r.jsx)(n.h3,{id:"58-operationid",children:"5.8 operationId"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the current operation's identifier. Each time ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"initOperation"})})," method is executed, a new ",(0,r.jsx)(n.em,{children:"operationId"})," will be generated."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-close-session",children:"6. Close Session"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Before the application is destroyed"}),", the SDK session must be closed to notify the platform of its termination. To do this, the following line of code is executed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Future<Either<Exception, CoreResult>> closeSession(SdkOperationEvent event) async\n  {\n    try {\n      FphiSdkmobileCore core = FphiSdkmobileCore();\n\n      final Map resultJson = await core.closeSession();\n      return Right(CoreResult.fromMap(resultJson));\n    } on Exception catch (e) {\n      return (Left(e));\n    }\n  }\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-extradata-method",children:"7. ExtraData method"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"getExtraData"})," method generates the identifiers related to a specific operation. These identifiers are tokenized and prepared to be sent to the ",(0,r.jsx)(n.em,{children:"Facephi Validation Service"})," (Backend). That Service needs these identifiers to know which operation the client is currently executing. Thus, all the process information generated in the client and server can be successfully gathered in the different services."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:" Future<Either<Exception, CoreResult>> getExtraData() async\n  {\n    try\n    {\n      FphiSdkmobileCore core = FphiSdkmobileCore();\n      final Map resultJson = await core.getExtraData();\n      return Right(CoreResult.fromMap(resultJson));\n    }\n    on Exception catch (e) {\n      return (Left(e));\n    }\n  }\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"8-tokenize-method",children:"8. Tokenize Method"}),"\n",(0,r.jsxs)(n.p,{children:["The Tokenize method tokenizes and encrypts the images obtained from the different components of the SDK Mobile. Thus, these images can be sent to the ",(0,r.jsx)(n.em,{children:"Facephi Validation Service"})," (Backend) securely."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:'  Future<Either<Exception, CoreResult>> tokenize() async\n  {\n    try\n    {\n      FphiSdkmobileCore core = FphiSdkmobileCore();\n      final Map resultJson = await core.tokenize(widgetConfigurationJSON: TokenizeConfiguration(mStringToTokenize: "Something to tokenize ..."));\n      return Right(CoreResult.fromMap(resultJson));\n    }\n    on Exception catch (e) {\n      return (Left(e));\n    }\n  }\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);