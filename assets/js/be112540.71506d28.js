"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5861],{9362:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Mobile_SDK","title":"Getting Started","description":"1. Introduction","source":"@site/flutter_versioned_docs/version-2.0.X/Mobile_SDK.md","sourceDirName":".","slug":"/Mobile_SDK","permalink":"/sdk-mobile-documentation/docs/flutter/Mobile_SDK","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","next":{"title":"Core Component","permalink":"/sdk-mobile-documentation/docs/flutter/Core_Component"}}');var r=i(4848),o=i(8453);const t={},l="Getting Started",d={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"1.2 Plugin version",id:"12-plugin-version",level:3},{value:"2. Component integration",id:"2-component-integration",level:2},{value:"2.1. Adding private repository",id:"21-adding-private-repository",level:3},{value:"2.1.1. Add private iOS repository",id:"211-add-private-ios-repository",level:4},{value:"2.2. Plugin installation: Common",id:"22-plugin-installation-common",level:3},{value:"2.3 Plugin installation: iOS",id:"23-plugin-installation-ios",level:3},{value:"2.3.2 Update the Podfile",id:"232-update-the-podfile",level:4},{value:"2.3.3 Possible issues",id:"233-possible-issues",level:4},{value:"2.3.3.1 Cocoapods issues",id:"2331-cocoapods-issues",level:4},{value:"2.4 Plugin installation: Android",id:"24-plugin-installation-android",level:3},{value:"2.4.1 Set Android SDK credentials",id:"241-set-android-sdk-credentials",level:4},{value:"2.4.2 Set Android SDK version",id:"242-set-android-sdk-version",level:4}];function a(e){const n={blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Mobile SDK"})," is a set of libraries (",(0,r.jsx)(n.strong,{children:"Components"}),") that offers a\nseries of functionalities and services, allowing its integration into a\nMobile application in a simple, totally scalable way. Depending on the\nuse case that is required, the installation of certain components must\nbe carried out. Its high level of modularity allows that, in the future,\nother new components can be added without affecting at all those already\nintegrated into the project."]}),"\n",(0,r.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,r.jsx)(n.p,{children:"The minimum native version (Android and iOS) of the SDK are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Minimum Android version: ",(0,r.jsx)(n.strong,{children:"24 - JDK 17"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum iOS version: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n",(0,r.jsxs)(n.li,{children:["Minimum Flutter version: ",(0,r.jsx)(n.strong,{children:"3.0"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Regarding the architecture of the mobile device:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"armeabi-v7, x86, arm64 and x64"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"12-plugin-version",children:"1.2 Plugin version"}),"\n",(0,r.jsx)(n.p,{children:"The current plugin version can be checked as follows:"}),"\n",(0,r.jsxs)(n.p,{children:["Look for the ",(0,r.jsx)(n.em,{children:"pubspec.yaml"})," file at the root of the plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["The KEY/TAG ",(0,r.jsx)(n.strong,{children:"version"})," indicates the version."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-component-integration",children:"2. Component integration"}),"\n",(0,r.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,r.jsxs)("div",{class:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nFor this section, the following values \u200b\u200bwill be considered:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<APPLICATION_PATH>"})," - Path a la ra\xedz de la aplicaci\xf3n (ejemplo: /folder/example)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<PLUGIN_CORE_PATH>"})," - Path a la ra\xedz del plugin actual (ejemplo: /folder/sdk-core)"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"21-adding-private-repository",children:"2.1. Adding private repository"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u2139\ufe0f"}),"\nAccess to our private repositories (Cocoapods) is required if you want to access our iOS native libraries."]})}),"\n",(0,r.jsxs)(n.p,{children:["For security and maintenance reasons, the new ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"SDKMobile"})})," components\nare stored in private repositories requiring specific credentials. Those\ncredentials must be obtained from the support team of ",(0,r.jsx)(n.strong,{children:"Facephi"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"First of all, we launch the command to install cocoapods with Artifactory."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"sudo gem install cocoapods-art\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"It is necessary to add the repository credentials in the file called netrc. For this task, from a Terminal, you have to execute:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"$ nano ~/.netrc\n"})}),"\n",(0,r.jsx)(n.p,{children:"And the following code snippet must be copied in that file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"machine facephicorp.jfrog.io\n  login <USERNAME>\n  password <TOKEN>\n"})}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nIt is essential to copy the previous fragment ",(0,r.jsx)(n.em,{children:"exactly"}),". There is an indentation before the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"login"})})," and ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"password"})})," words formed by ",(0,r.jsx)(n.em,{children:"two spaces"}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"211-add-private-ios-repository",children:"2.1.1. Add private iOS repository"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAccess to our private repositories (",(0,r.jsx)(n.strong,{children:"Cocoapods"}),") is required if you\nwant to access our iOS native libraries."]})}),"\n",(0,r.jsxs)(n.p,{children:["For security and maintenance reasons, the new\xa0",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"SDKMobile"})}),"\xa0components\nare stored in private repositories requiring specific credentials. The\nsteps to configure this environment are the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["First of all, we launch the command to install cocoapods\nwith\xa0",(0,r.jsx)(n.strong,{children:"Artifactory"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo gem install cocoapods-art\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the case of using a Mac with\xa0",(0,r.jsx)(n.strong,{children:"an M1 chip"}),", it exists the\npossibility of appearing errors during the installation, then it is\nrecommended to use the following command instead:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo arch -arm64 gem install ffi; \nsudo arch -arm64 gem install cocoapods-art\n"})}),"\n",(0,r.jsx)("div",{class:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nIf the issues still appear, try to uninstall Cocoapods and all the\ndependencies entirely and start a new clean installation."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The repository with the private dependencies must be downloaded\nlocally:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Finally, the repository must be updated:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod repo-art update cocoa-pro-fphi\n"})}),"\n",(0,r.jsx)(n.h3,{id:"22-plugin-installation-common",children:"2.2. Plugin installation: Common"}),"\n",(0,r.jsxs)(n.p,{children:["The plugin allows execution on ",(0,r.jsx)(n.strong,{children:"Android and iOS"})," platforms. This section explains the common steps to all platforms. To install the plugin, the following steps must be adopted:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Make sure ",(0,r.jsx)(n.strong,{children:"Flutter"})," framework is installed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Access ",(0,r.jsx)(n.strong,{children:"APPLICATION_PATH"})," at a terminal and run:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"\n'})}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nIf executing a ",(0,r.jsx)(n.strong,{children:"pod"})," command occurs an error like the following:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"arch: Can't find any plists for install"})]}),(0,r.jsxs)(n.p,{children:["It is recommended to launch every ",(0,r.jsx)(n.strong,{children:"pod"})," command with ***arch -x86_64\xa0***before them, for example:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"pod install"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"arch -x86_64 pod install"})}),"\n"]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In addition, in ",(0,r.jsx)(n.strong,{children:"APPLICATION_PATH"}),", access the file ",(0,r.jsx)(n.em,{children:"pubspec.yaml"})," and add:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"fphi_sdkmobile_core:\n  hosted:\n    name: sdkcore\n    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/\n  version: ^2.0.0\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"23-plugin-installation-ios",children:"2.3 Plugin installation: iOS"}),"\n",(0,r.jsx)(n.p,{children:"For the iOS version, when adding our plugin to the final application,\nthe following points must be previously taken into account:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Add camera permissions:"})})," To use the widget, you need to enable\nthe camera permission in the application's ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"info.plist"})})," file\n(included within the project in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"ios"})})," folder). You will need\nto edit the file with a text editor and add the following\n",(0,r.jsx)(n.em,{children:"key/value"})," pair:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"***<key>NSCameraUsageDescription</key>***\n***<string>$(PRODUCT_NAME) uses the camera</string>***\n"})}),"\n",(0,r.jsx)(n.h4,{id:"232-update-the-podfile",children:"2.3.2 Update the Podfile"}),"\n",(0,r.jsx)(n.p,{children:"In the project podfile it will be necessary to add the information from\nthe private repository (see section 2.1). To do this, the following\nlines must be added at the beginning of the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"platform :ios, '13.0' //MIN VERSION\nplugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']\nsource 'https://cdn.cocoapods.org/'\n"})}),"\n",(0,r.jsx)(n.h4,{id:"233-possible-issues",children:"2.3.3 Possible issues"}),"\n",(0,r.jsx)(n.h4,{id:"2331-cocoapods-issues",children:"2.3.3.1 Cocoapods issues"}),"\n",(0,r.jsx)(n.p,{children:"If environmental problems occur or the plugin is not updated after\nmaking new changes (for example, problems occurred due to the bundle not\nbeing generated correctly, or the libraries not being updated to the\ncorrect versions), it is recommended to execute the following sequence\nof instructions after launching the plugin:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the application's ",(0,r.jsx)(n.strong,{children:"ios"})," folder at a terminal."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod deintegrate\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Remove the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Podfile.lock"})})]}),"\n",(0,r.jsx)(n.li,{children:"Run the following command (or open the project with Xcode and run\nit):"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod install --repo-update  \n"})}),"\n",(0,r.jsx)(n.p,{children:"and"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod repo-art update cocoa-pro-fphi\n"})}),"\n",(0,r.jsx)(n.h3,{id:"24-plugin-installation-android",children:"2.4 Plugin installation: Android"}),"\n",(0,r.jsx)(n.h4,{id:"241-set-android-sdk-credentials",children:"2.4.1 Set Android SDK credentials"}),"\n",(0,r.jsxs)(n.p,{children:["For security and maintenance reasons, the new ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"SDKMobile"})})," components\nare stored in private repositories requiring specific credentials. For\nthat reason, those credentials must be added to the ",(0,r.jsx)(n.strong,{children:"build.gradle"}),"\nfile (inside the ",(0,r.jsx)(n.strong,{children:"repositories"})," section):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'maven {\n    Properties props = new Properties()\n    def propsFile = new File(\'local.properties\')\n    if(propsFile.exists()){\n        props.load(new FileInputStream(propsFile))\n    }\n    name = "external"\n    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")\n    credentials {\n        username = props["artifactory.user"] ?: System.getenv("USERNAME_ARTIFACTORY")\n        password = props["artifactory.token"] ?: System.getenv("TOKEN_ARTIFACTORY")\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The credentials (",(0,r.jsx)(n.em,{children:"Username"})," and ",(0,r.jsx)(n.em,{children:"Token"}),") must be correctly configured for the project to retrieve the dependencies correctly."]}),"\n",(0,r.jsx)(n.p,{children:"There are several ways to configure the repository access credentials:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["As environmental variables. For this purpose, you should launch from a Terminal the following commands (",(0,r.jsx)(n.strong,{children:"RECOMMENDED"}),"):"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export USERNAME_ARTIFACTORY=YOUR_CREDENTIALS_USERNAME\nexport TOKEN_ARTIFACTORY=YOUR_CREDENTIALS_TOKEN\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the dependencies are not recognized when ",(0,r.jsx)(n.em,{children:"synchronising"})," the environment, they must be included as environmental variables in the file:"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"~/.zshrc"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"~/.bashrc"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Your ",(0,r.jsx)(n.em,{children:"script shell"})," default file."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Included in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"local.properties"})})," file with the following structure:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"artifactory.user=YOUR_CREDENTIALS_USERNAME\nartifactory.token=YOUR_CREDENTIALS_TOKEN\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Directly included in the ",(0,r.jsx)(n.em,{children:"build.gradle"})," (",(0,r.jsx)(n.strong,{children:"NOT RECOMMENDED"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'maven {\n    Properties props = new Properties()\n    def propsFile = new File(\'local.properties\')\n    if(propsFile.exists()){\n        props.load(new FileInputStream(propsFile))\n    }\n    name = "external"\n    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")\n    credentials {\n        username = YOUR_CREDENTIALS_USERNAME\n        password = YOUR_CREDENTIALS_TOKEN\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"242-set-android-sdk-version",children:"2.4.2 Set Android SDK version"}),"\n",(0,r.jsxs)(n.p,{children:["For Android, the minimum SDK version required by our native libraries is\n",(0,r.jsx)(n.strong,{children:"24"}),", so if your app has a ",(0,r.jsx)(n.em,{children:"Minimum SDK"})," defined less than this, it\nmust be modified to avoid a compile error. To do this, access the\napplication's ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"build.gradle"})})," file (located in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"android"})}),"\nfolder) and modify the following parameter:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"buildscript {\n  ext {\n    minSdkVersion = 24\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);