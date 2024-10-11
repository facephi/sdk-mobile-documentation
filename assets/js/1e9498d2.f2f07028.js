"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[459],{3772:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(4848),s=i(8453);const o={},r="Getting Started",l={id:"Mobile_SDK",title:"Getting Started",description:"1. Introduction",source:"@site/docs/ios/Mobile_SDK.md",sourceDirName:".",slug:"/Mobile_SDK",permalink:"/sdk-mobile-documentation/docs/ios/next/Mobile_SDK",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",next:{title:"Phingers Component",permalink:"/sdk-mobile-documentation/docs/ios/next/Phingers_Component"}},a={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:3},{value:"2. Initial integration",id:"2-initial-integration",level:2},{value:"2.1. Add private gradle repository",id:"21-add-private-gradle-repository",level:3},{value:"2.2. Dependencies required for basic integration",id:"22-dependencies-required-for-basic-integration",level:3},{value:"2.3. Possible issues",id:"23-possible-issues",level:3},{value:"3. SDK initialization",id:"3-sdk-initialization",level:2},{value:"3.1 license injection",id:"31-license-injection",level:3},{value:"a. Obtaining the license through a service",id:"a-obtaining-the-license-through-a-service",level:4},{value:"b. Injecting the license as a String",id:"b-injecting-the-license-as-a-string",level:4},{value:"3.2 Optional",id:"32-optional",level:3},{value:"3.2.1 TrackingController",id:"321-trackingcontroller",level:4},{value:"3.2.2. TokenizeController",id:"322-tokenizecontroller",level:4},{value:"3.2.3 BehaviorController",id:"323-behaviorcontroller",level:4},{value:"3.2.4 StatusController",id:"324-statuscontroller",level:4},{value:"4. Start a new operation",id:"4-start-a-new-operation",level:2},{value:"4.1 Existing types of operation",id:"41-existing-types-of-operation",level:3},{value:"5. Launch of components",id:"5-launch-of-components",level:2},{value:"6. Result return",id:"6-result-return",level:2},{value:"7. Close session / Logout",id:"7-close-session--logout",level:2},{value:"8. Error control",id:"8-error-control",level:2},{value:"9. SDK Customization",id:"9-sdk-customization",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Components"})}),") that offer a\nseries of functionalities and services, allowing their integration into\na Mobile application in a simple and totally scalable way. Certain\ncomponents must be installed depending on the use case required. Its\nhigh level of modularity allows other new components to be added in the\nfuture without affecting those already integrated into the project."]}),"\n",(0,t.jsx)(n.h3,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,t.jsx)(n.p,{children:"The minimum version of the iOS SDK required is as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["iOS: ",(0,t.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-initial-integration",children:"2. Initial integration"}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the basic\ncomponents into an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-add-private-gradle-repository",children:"2.1. Add private gradle repository"}),"\n",(0,t.jsxs)(n.p,{children:["To access our remote repository, you must install ",(0,t.jsx)(n.strong,{children:"Cocoapods"})," on the\ncomputer."]}),"\n",(0,t.jsxs)(n.p,{children:["For security and maintenance reasons, the new ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"SDKMobile"})})," components\nare stored in private repositories requiring specific credentials.\n",(0,t.jsx)("u",{children:"These credentials"})," must be obtained through the ",(0,t.jsx)(n.strong,{children:"Facephi"}),"\nsupport team. The steps to prepare the environment are the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["First of all, we launch the command to install cocoapods\nwith\xa0",(0,t.jsx)(n.strong,{children:"Artifactory"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sudo gem install cocoapods-art\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the case of using a Mac with\xa0",(0,t.jsx)(n.strong,{children:"an M1 chip"}),", it exists the\npossibility of appearing errors during the installation, so it is\nrecommended to use the following command instead:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sudo arch -arm64 gem install ffi; sudo arch -arm64 gem install cocoapods-art\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the issues still appear, try to uninstall Cocoapods and all the\ndependencies entirely and start a new clean installation."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It is necessary to add the repository credentials in the file\ncalled\xa0",(0,t.jsx)(n.strong,{children:"netrc"}),". For this task, from a ",(0,t.jsx)(n.em,{children:"Terminal"}),", you have to\nexecute:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"$ nano ~/.netrc\n"})}),"\n",(0,t.jsx)(n.p,{children:"And the following code snippet must be copied in that file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"machine facephicorp.jfrog.io\n  login <USERNAME>\n  password <TOKEN>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It is essential to copy the previous fragment\xa0",(0,t.jsx)(n.strong,{children:"exactly"}),". There is an\nindentation before the\xa0",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"login"})}),"\xa0and\xa0",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"password"})}),"\xa0words formed\nby\xa0",(0,t.jsx)("u",{children:"two spaces"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Finally, it must be added the repository that contains the private\ndependencies:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"22-dependencies-required-for-basic-integration",children:"2.2. Dependencies required for basic integration"}),"\n",(0,t.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, if you want to install\nthe component in a project containing an old Facephi libraries\n(",(0,t.jsx)(n.em,{children:"Widgets"}),") version, these must be removed entirely before installing\nthe ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Currently, FacePhi libraries are distributed remotely through\ndifferent dependency managers, in this case, ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Cocoapods"})}),".\n",(0,t.jsx)(n.strong,{children:"Mandatory"})," dependencies that must be installed beforehand (adding\nthem to the ",(0,t.jsx)(n.em,{children:"Podfile"}),"):"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"plugin 'cocoapods-art', :sources => [\n  'cocoa-pro-fphi\u2019\n]\n\nsource 'https://cdn.cocoapods.org/'\n\ntarget 'Example' do\n  pod 'JWTDecode'\n  pod 'SwiftFormat/CLI'\n  pod 'IQKeyboardManagerSwift'\n  pod 'FPHISDKMainComponent'\n  pod 'FPHISDKCoreComponent'\n\n   post_install do |installer|\n  installer.pods_project.targets.each do |target|\n    target.build_configurations.each do |config|\n      config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = \"\"\n      config.build_settings['CODE_SIGNING_REQUIRED'] = \"NO\"\n      config.build_settings['CODE_SIGNING_ALLOWED'] = \"NO\"\n    end\n  end\nend\n...\nend\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To update the current dependencies, before executing the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"pod\ninstall"})})," command, it is necessary to use the following command\nthat allows to update the local repository:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"pod repo-art update cocoa-pro-fphi\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"23-possible-issues",children:"2.3. Possible issues"}),"\n",(0,t.jsxs)(n.p,{children:["If the integrator uses a Macbook with ",(0,t.jsx)(n.strong,{children:"M1 Chip"}),", the cocoapods-art\ninstallation may fail. Due to that, it is necessary to take into account\nthe following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"Cocoapods"})," was installed using ",(0,t.jsx)(n.em,{children:"Homebrew"})," it is possible to have\nseveral issues."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["It is recommended to install cocoapods and cocoapods-art through\n",(0,t.jsx)(n.em,{children:"Gem"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following code snippet allows the developer to do the required steps\nto prepare the environment and solve the issues commented previously:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:' #! /bin/zsh\n\ninstall_cocoapods () {\n    echo "Installing cocoapods with gem"\n    # Creating new gems home if it doesnt\'t exist\n    if [ ! -d "$HOME/.gem" ]; then\n        mkdir "$HOME/.gem"\n    fi\n    # Adding to current session\n    export GEM_HOME="$HOME/.gem"\n    export PATH="$GEM_HOME/bin:$PATH"\n\n    # Adding for future sessions\n    if test -f "$HOME/.zshrc"; then\n        echo \'Adding $GEM_HOME env var and then adding it to your $PATH\'\n        echo \'\' >> "$HOME/.zshrc"\n        echo \'export GEM_HOME="$HOME/.gem"\' >> "$HOME/.zshrc"\n        echo \'export PATH="$GEM_HOME/bin:$PATH"\' >> "$HOME/.zshrc"\n        echo \'alias pod=\'arch -x86_64 pod\'\' >> "$HOME/.zshrc"\n    fi\n\n    # Installing cocoapods\n    gem install cocoapods\n    sudo arch -x86_64 gem install ffi\n    which pod\n    pod --version\n    gem install cocoapods-art\n}\n\nuninstall_cocoapods_homebrew () {\n    which -s brew\n    if [[ $? != 0 ]] ; then\n        echo "Homebrew not installed, skipping uninstalling cocoapods from homebrew"\n    else\n        brew uninstall cocoapods\n    fi\n}\n\nif ! type "pod" > /dev/null; then\n    echo "You don\'t have cocoapods installed..."\nelse\n    echo "Trying to uninstall it from homebrew first"\n    uninstall_cocoapods_homebrew\nfi\n\ninstall_cocoapods\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the case of using ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"xCode15"})}),", it is recommended to use the\nfollowing configuration:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(225).A+"",width:"1834",height:"510"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"-ld_classic"})," flag must be added in ",(0,t.jsx)(n.em,{children:"Other Linker Flags"})," in the\n",(0,t.jsx)(n.em,{children:"Build Settings"})," section of the application."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-sdk-initialization",children:"3. SDK initialization"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"It must be strictly avoided to initialize a controller that will not\nbe used"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Each component has a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Controller"})})," that will allow access to its\nfunctionality. Before they can be used, they must be properly\ninitialized. The steps to follow in the initialisation are as follows:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Include the Application object"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Decide whether the license will be included via a ",(0,t.jsx)(n.em,{children:"String"})," or a\n",(0,t.jsx)(n.em,{children:"remote licensing service"})," (",(0,t.jsx)(n.strong,{children:"see section 3.1"}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"31-license-injection",children:"3.1 license injection"}),"\n",(0,t.jsx)(n.p,{children:"As discussed above, there are currently two ways to inject the license:"}),"\n",(0,t.jsx)(n.h4,{id:"a-obtaining-the-license-through-a-service",children:"a. Obtaining the license through a service"}),"\n",(0,t.jsx)(n.p,{children:"Through a service that requires a URL and an API-KEY as an identifier.\nThis would avoid problems when manipulating the license, as well as the\nconstant replacement of these licenses when a problem arises\n(malformation or improper modification, expiry of the license...)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: "https://...", apiKey: "...", output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia autom\xe1tica seteada correctamente")\n    } else {\n        self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n    }\n}, trackingController: trackingController)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"b-injecting-the-license-as-a-string",children:"b. Injecting the license as a String"}),"\n",(0,t.jsx)(n.p,{children:"You can assign the license directly as a String, as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// MANUAL License\nSDKController.shared.initSdk(license: "LICENSE", output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia manual seteada correctamente")\n    } else {\n        self.log("La licencia manual no es correcta")\n    }\n}, trackingController: trackingController)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"32-optional",children:"3.2 Optional"}),"\n",(0,t.jsx)(n.p,{children:"The following controllers are optional, they are added at the end of the initSDK as follows:"}),"\n",(0,t.jsx)(n.h4,{id:"321-trackingcontroller",children:"3.2.1 TrackingController"}),"\n",(0,t.jsx)(n.p,{children:"The TrackingController controller will only be added in case you have sdkMobile tracking."}),"\n",(0,t.jsx)(n.p,{children:"The import is added:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import trackingComponent\n"})}),"\n",(0,t.jsx)(n.p,{children:"trackingController: trackingController"}),"\n",(0,t.jsx)(n.p,{children:"We initialize:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'let trackingController = TrackingController(trackingError: { trackingError in\n      print("TRACKING ERROR: \\(trackingError)")\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:"Added in the initSDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: "https://...", apiKey: "...", output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Automatic license successfully set")\n    } else {\n        self.log("An error occurred while trying to obtain the license: \\(sdkResult.errorType)")\n    }\n}, trackingController: trackingController)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"322-tokenizecontroller",children:"3.2.2. TokenizeController"}),"\n",(0,t.jsx)(n.p,{children:"Added import:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import tokenizeComponent\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initialise:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"let tokenizeController = TokenizeController()\n"})}),"\n",(0,t.jsx)(n.p,{children:"We add in the initSDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: "https://...", apiKey: "...", output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Automatic license successfully set")\n    } else {\n        self.log("An error occurred while trying to obtain the license: \\(sdkResult.errorType)")\n    }\n}, tokenizeController: tokenizeController)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"323-behaviorcontroller",children:"3.2.3 BehaviorController"}),"\n",(0,t.jsx)(n.p,{children:"Added import"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import behaviorComponent\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initialise:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\nbehaviorController = BehaviorController(autoLogoutAction: {\n                      print("ACTIVE DEFENSE")\n                      return true\n                    },\n                    behaviorError: { behaviorError en\n                      print("BEHAVIOR ERROR: \\(behaviorError)")\n                    }, debugMode: false)\n'})}),"\n",(0,t.jsx)(n.p,{children:"We add in the initSDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\n// AUTO License\nSDKController.shared.initSdk(licensingUrl: "https://...", apiKey: "...", output: { sdkResult en\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Automatic license successfully set")\n    } else {\n        self.log("An error occurred while trying to obtain the license: \\(sdkResult.errorType)")\n    }\n}, behaviorController: behaviorController\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"324-statuscontroller",children:"3.2.4 StatusController"}),"\n",(0,t.jsx)(n.p,{children:"Se a\xf1ade el import:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import statusComponent\n"})}),"\n",(0,t.jsx)(n.p,{children:"Inicializamos:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"let statusController = StatusController()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Se a\xf1ade en el initSDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: "https://...", apiKey: "...", output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Automatic license successfully set")\n    } else {\n        self.log("An error occurred while trying to obtain the license: \\(sdkResult.errorType)")\n    }\n}, statusController: statusController)\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-start-a-new-operation",children:"4. Start a new operation"}),"\n",(0,t.jsxs)(n.p,{children:["To start the flow of a new operation (examples of operations would be ",(0,t.jsx)(n.em,{children:"onboarding, authentication, videoCall"}),", etc.), it is essential to tell the ",(0,t.jsx)(n.strong,{children:"SDKController"})," that it is going to start so the SDK will know that the following ",(0,t.jsx)(n.strong,{children:"Component"})," calls (also called ",(0,t.jsx)(n.strong,{children:"Steps"}),") will be part of that operation. This is necessary ",(0,t.jsx)(n.em,{children:"to track"})," the global information of this operation on the platform in a satisfactory way."]}),"\n",(0,t.jsxs)(n.p,{children:["When starting a process or flow, ",(0,t.jsx)(n.strong,{children:"always"})," call the ",(0,t.jsx)(n.strong,{children:"newOperation"}),"\nmethod"]}),"\n",(0,t.jsx)(n.p,{children:"This method has three input parameters:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"operationType"}),": Indicates whether an ONBOARDING or AUTHENTICATION\n2 process is to be performed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"customerId"}),": Unique user ID if available (controlled at the\napplication level)."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"This parameter will be reflected for each operation in the\nplatform."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"steps"}),": List of steps of the operation if they have been\npreviously defined."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"This parameter will be reflected for each operation in the\nplatform."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["There are two ways to perform this operation start, depending on whether\nthe ",(0,t.jsx)(n.strong,{children:"steps that will form the flow"})," of the registration or\nauthentication process are known (in case the components are executed\nsequentially and always in the same way) or, on the contrary, if the\nflow ",(0,t.jsx)(n.strong,{children:"is not defined"})," and is unknown (for example, the final customer\nis the one who decides the order of execution of the components)."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Known"})," flow (the tracked operation will appear on the platform\nwith all the steps in the list). Example of implementation:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'SDKController.shared.newOperation(operationType: OperationType.X, customerId: "customerId", steps: [.SELPHI, .SELPHID, .OTHER("CUSTOM_STEP")], output: { _ in })\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Unknown"})," flow (the tracked operation will appear on the platform\nwith ellipses). Example of implementation:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'SDKController.shared.newOperation(operationType: OperationType.X, customerId: "customerId", output: { _ in})\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sdkResult"})," \u2192 Contains in data the information of the operation created."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Once the operation has been created"}),", the SDK components associated\nwith this operation can be executed. ",(0,t.jsx)("u",{children:"Consult"})," the specific\ndocumentation for each ",(0,t.jsx)("u",{children:"component"})," to find out how to do this."]}),"\n",(0,t.jsx)(n.h3,{id:"41-existing-types-of-operation",children:"4.1 Existing types of operation"}),"\n",(0,t.jsxs)(n.p,{children:["Currently, the following operations exist, during which certain\n",(0,t.jsx)(n.strong,{children:"Components (STEPS)"})," are used."]}),"\n",(0,t.jsx)(n.p,{children:"Below is a table showing the relationship between operations and steps:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Operation (OperationType)"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Component (Step)"})}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ONBOARDING"}),(0,t.jsxs)(n.td,{children:["SELPHI_COMPONENT",(0,t.jsx)("br",{}),"SELPHID_COMPONENT"]}),(0,t.jsxs)(n.td,{children:["- Facial validation of a selfie against a document's face ",(0,t.jsx)("br",{})," - Document OCR extraction ",(0,t.jsx)("br",{})," - Liveness detection"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AUTHENTICATION"}),(0,t.jsx)(n.td,{children:"SELPHI_COMPONENT"}),(0,t.jsxs)(n.td,{children:["- Face validation using templates ",(0,t.jsx)("br",{})," - Liveness detection"]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"This list will be expanded in future SDK updates as new components and\nuse cases are released."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-launch-of-components",children:"5. Launch of components"}),"\n",(0,t.jsxs)(n.p,{children:["Once the ",(0,t.jsx)(n.strong,{children:"new operation"})," has been created ",(0,t.jsx)(n.strong,{children:"(section 4)"}),", the\ndifferent SDK drivers can be launched. To consult this information,\naccess the ",(0,t.jsx)(n.strong,{children:"documentation for each component"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"\n let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)\n SDKController.shared.launch(controller: controller)\n\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"6-result-return",children:"6. Result return"}),"\n",(0,t.jsx)(n.p,{children:"The result of each component will be returned through the SDK\nalways keeping the same 3-field structure:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"finishStatus"}),": This will indicate whether the operation has been successfully completed.\ncorrectly. Possible values ",(0,t.jsx)(n.code,{children:"FinishStatus.STATUS_OK"}),",\n",(0,t.jsx)(n.code,{children:"FinishStatus.STATUS_ERROR"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"errorType"}),": If ",(0,t.jsx)(n.em,{children:"finishStatus"})," indicates that an error has occurred, this field shall contain the description of the error.\nfield shall contain the description of the error."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"data"}),": This shall contain the response data from the SDK function. This\nThis field will be different depending on the component that has been\nexecuted. The documentation of each specific component will\nThe documentation for each specific component will provide a breakdown of the different fields that this object can return."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The documentation for each specific component will provide a breakdown of the different fields that this object can return.\nof the different fields that this object can return."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"7-close-session--logout",children:"7. Close session / Logout"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Before the application is destroyed"}),", the SDK session must be closed\nto notify the platform of its completion. To do this, the following line\nof code is executed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"SDKController.shared.closeSession()\n"})}),"\n",(0,t.jsx)(n.p,{children:"If a logout is performed, it will not be possible to launch controllers\nuntil a new operation is started again."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"8-error-control",children:"8. Error control"}),"\n",(0,t.jsx)(n.p,{children:"When calling any of the components, we will always have an output of type SdkResult as a response, as we see in the example code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"         let controller = ComponentController(data: ComponentConfigurationData, output: { sdkResult in\n            print(sdkResult.errorType)\n         }, viewController: viewController)\n         SDKController.shared.launch(controller: controller)\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the .errorType attribute, we will have the typology of the error. The error types are defined in the documentation of each component."}),"\n",(0,t.jsx)(n.p,{children:"The error codes you may receive are as follows."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public enum ErrorType: String, Error {\n     case NO_ERROR\n     case UNKNOWN_ERROR\n     case OTHER(String)\n     case COMPONENT_CONTROLLER_DATA_ERROR\n     case NO_OPERATION_CREATED_ERROR\n     case NETWORK_CONNECTION\n     case CAMERA_PERMISSION_DENIED\n     case MIC_PERMISSION_DENIED\n     case LOCATION_PERMISSION_DENIED\n     case STORAGE_PERMISSION_DENIED\n     case CANCEL_BY_USER\n     case TIMEOUT\n     case LICENSE_CHECKER_ERROR_INVALID_LICENSE\n     case LICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If there is no error and the result is returned correctly, the errorType would be ",(0,t.jsx)(n.strong,{children:"NO_ERROR"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"9-sdk-customization",children:"9. SDK Customization"}),"\n",(0,t.jsxs)(n.p,{children:["Customization is done using a component class called Theme",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Component"})}),"Manager. Where ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Component"})})," must be replaced with the desired component."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, videoidComponent contains ",(0,t.jsx)(n.code,{children:"ThemeVideoIdManager"}),", while videocallComponent ",(0,t.jsx)(n.code,{children:"ThemeVideoCallManager"}),"..."]}),"\n",(0,t.jsxs)(n.p,{children:["This manager has an instance of type Theme",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Component"})}),"Protocol. If we want to customize any details, we would have to create a new class that attaches to this interface and inject it into the Theme",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Component"})}),"Manager."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'class CustomThemeComponent: ThemeComponentProtocol {\n     var images: [R.Image: UIImage?] = [:]\n\n     var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]\n\n     var name: String {\n         "custom"\n     }\n\n     var fonts: [R.Font: String] = [.regular: UIFont(...)]\n\n     var dimensions: [R.Dimension: CGFloat] {\n         [.fontBig: 8]\n     }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This should always be done after having initialized the driver of the component we want to use/customize:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"//Controller component initialization\nlet controller = ComponentController(...)\n// Instance of the custom instance\nThemeComponentManager.setup(theme: CustomThemeComponent())\n// Controller launch\nSDKController.shared.launch(controller: controller)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},225:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);