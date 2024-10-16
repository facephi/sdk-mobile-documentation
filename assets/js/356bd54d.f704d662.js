"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[8874],{9735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(4848),o=t(8453);const s={},r="Voice Component",l={id:"Voice_Component",title:"Voice Component",description:"0. SDK Mobile baseline requirements",source:"@site/docs/ios/Voice_Component.md",sourceDirName:".",slug:"/Voice_Component",permalink:"/sdk-mobile-documentation/docs/ios/next/Voice_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"SelphID Component",permalink:"/sdk-mobile-documentation/docs/ios/next/SelphID_Component"},next:{title:"NFC Component",permalink:"/sdk-mobile-documentation/docs/ios/next/NFC_Component"}},c={},a=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class VoiceConfigurationData",id:"51-class-voiceconfigurationdata",level:3},{value:"5.1.1. phrases",id:"511-phrases",level:4},{value:"5.1.2. vibrationEnabled",id:"512-vibrationenabled",level:4},{value:"5.1.3. showTutorial",id:"513-showtutorial",level:4},{value:"5.1.4. extractionTimeout",id:"514-extractiontimeout",level:4},{value:"5.1.5. showDiagnostic",id:"515-showdiagnostic",level:4},{value:"6. Using the component",id:"6-using-the-component",level:2},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Receiving successful execution - <em>data</em>.",id:"72-receiving-successful-execution---data",level:3},{value:"7.2.1 <em>audios</em>.",id:"721-audios",level:4},{value:"7.2.2 <em>tokenizedAudios</em>",id:"722-tokenizedaudios",level:4},{value:"Customisation of the component",id:"customisation-of-the-component",level:2},{value:"8.1 Texts",id:"81-texts",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"voice-component",children:"Voice Component"})}),"\n",(0,i.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the base configuration, go to the ",(0,i.jsx)(n.a,{href:"./Mobile_SDK#11-minimum-requirements",children:"Getting Started"})," section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"component"})," discussed in the current document is called ",(0,i.jsx)(n.strong,{children:"Voice\nComponent"}),". It is in charge of capturing the user's voice and the\nsubsequent extraction of the corresponding templates. Its main\nfunctionalities are the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Input of a certain number of sentences to subsequently read each one\nin one step."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Internal microphone management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Management of permissions."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Analysis of silences."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Progress analysis."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Assistant in the capture processes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generation of templates with voice characteristics and scores."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,i.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,i.jsxs)(n.p,{children:["Minimum iOS version: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsx)("div",{class:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nBefore integrating this component, it is recommended to read the\ndocumentation related to ",(0,i.jsx)(n.a,{href:"./Mobile_SDK#2-initial-integration",children:"Initial Integration"})," and follow its instructions."]})}),"\n",(0,i.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,i.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,i.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The ",(0,i.jsx)(n.strong,{children:"mandatory"})," dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  \tpod 'FPHISDKMainComponent', '~> 1.5.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To install the VoiceID component, the following entry must be included in the application's Podfile:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  \tpod 'VoiceIdController', '~> 1.5.0'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the dependencies are installed, the different functionalities of the component can be used."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In case of development with ",(0,i.jsx)(n.strong,{children:"xCode15"})," a post-installation script must be included:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(225).A+"",width:"1834",height:"510"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,i.jsxs)(n.p,{children:["In order to generate the associated information correctly in the platform, the ",(0,i.jsx)(n.strong,{children:"newOperation"})," command must be executed first."]}),"\n",(0,i.jsx)("div",{class:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nThis command must have been executed ",(0,i.jsx)(n.strong,{children:"before launch"}),".\nTo learn more about how to start a new operation, it is recommended to consult the ",(0,i.jsx)(n.a,{href:"./Mobile_SDK#4-start-a-new-operation",children:"Start a new operation"})," documentation, which details and explains what this process consists of."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Controller"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Description"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VoiceController"}),(0,i.jsx)(n.td,{children:"Voice capture main controller"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,i.jsx)(n.p,{children:"To configure the current component, once it has been initialised, you must\ncreate a"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"VoiceConfigurationData"})," object and pass it as parameter to the SDKController\nduring the launch of the component."]}),"\n",(0,i.jsx)(n.p,{children:"The following section will show the fields that are part of this class and what each one is used for.\nclass and what each of them is used for."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-voiceconfigurationdata",children:"5.1. Class VoiceConfigurationData"}),"\n",(0,i.jsx)(n.h4,{id:"511-phrases",children:"5.1.1. phrases"}),"\n",(0,i.jsx)(n.p,{children:"Indicates the phrase(s) needed to capture."}),"\n",(0,i.jsx)(n.h4,{id:"512-vibrationenabled",children:"5.1.2. vibrationEnabled"}),"\n",(0,i.jsx)(n.p,{children:"Indicates the activation of the vibration when the widget completes successfully.\nsuccessfully."}),"\n",(0,i.jsx)(n.h4,{id:"513-showtutorial",children:"5.1.3. showTutorial"}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether the component activates the tutorial screen. This view intuitively\nintuitively explains how the capture is performed."}),"\n",(0,i.jsx)(n.h4,{id:"514-extractiontimeout",children:"5.1.4. extractionTimeout"}),"\n",(0,i.jsx)(n.p,{children:"Sets the maximum time that the capture can be performed."}),"\n",(0,i.jsx)(n.h4,{id:"515-showdiagnostic",children:"5.1.5. showDiagnostic"}),"\n",(0,i.jsx)(n.p,{children:"Show diagnostic screens at the end of the process"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-using-the-component",children:"6. Using the component"}),"\n",(0,i.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,i.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = VoiceController(\n            data: data,\n            output: { sdkResult in\n                let voiceIdSdkResult = SdkResult(finishStatus: sdkResult.finishStatus, errorType: sdkResult.errorType, data: sdkResult.data)\n                output(voiceIdSdkResult)\n            }, viewController: viewController)\n        SDKController.shared.launchTokenizableMethod(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,i.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let controller = VoiceController(\n            data: data,\n            output: { sdkResult in\n                let voiceIdSdkResult = SdkResult(finishStatus: sdkResult.finishStatus, errorType: sdkResult.errorType, data: sdkResult.data)\n                output(voiceIdSdkResult)\n            }, viewController: viewController)\n        SDKController.shared.launchTokenizableMethod(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,i.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,i.jsxs)(n.p,{children:["On the other hand, the ",(0,i.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,i.jsxs)(n.p,{children:["Los controllers devolver\xe1n la informaci\xf3n necesaria en formato\nSdkResult. M\xe1s informaci\xf3n en la secci\xf3n de ",(0,i.jsx)(n.a,{href:"./Mobile_SDK#6-result-return",children:"Retorno de Resultado"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,i.jsx)(n.p,{children:"En la parte del error, dispondremos de la clase VoiceError."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:" INTERNAL_ERROR\n MIC_PERMISSION_DENIED\n TIMEOUT\n CANCEL_BY_USER\n VOICE_ENROLLMENT_PARSE_RESPONSE\n VOICE_MATCHING_PARSE_RESPONSE\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"72-receiving-successful-execution---data",children:["7.2. Receiving successful execution - ",(0,i.jsx)(n.em,{children:"data"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"data"})," part, we will have the ",(0,i.jsx)(n.em,{children:"VoiceResult"})," class."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"data"})," field is variable and will depend on which component has returned the result.\nthe result has been returned. In the case of this component, the returned fields are\nthe following:"]}),"\n",(0,i.jsxs)(n.h4,{id:"721-audios",children:["7.2.1 ",(0,i.jsx)(n.em,{children:"audios"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Contains a list of captured audios in ByteArray format."}),"\n",(0,i.jsxs)(n.h4,{id:"722-tokenizedaudios",children:["7.2.2 ",(0,i.jsx)(n.em,{children:"tokenizedAudios"})]}),"\n",(0,i.jsx)(n.p,{children:"Contains the list of captured audios in tokenised format from\nFacephi tokenised format."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"customisation-of-the-component",children:"Customisation of the component"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,i.jsx)(n.h3,{id:"81-texts",children:"8.1 Texts"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to modify the SDK texts you would have to include the\nXML file in the client application, and modify the value of each ",(0,i.jsx)(n.em,{children:"String"})," to the desired one.\nvalue of each ",(0,i.jsx)(n.em,{children:"String"})," to the desired one."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'"voice_component_success_records_message" = "%d/%d successful recordings";\n"voice_component_read_message" = "Say loudly:";\n"voice_component_speech_message" = "Speak clearly and close to the microphone";\n"voice_component_speech_noisy_message" = "There is too much noise. Try to be in a quiet environment.";\n"voice_component_success_message" = "Recording registred";\n"voice_component_phrase_generic_error_feedback" = "Please, repeat the sentence.";\n"voice_component_phrase_long_silence_feedback" = "Talk for 2 seconds or more.";\n"voice_component_phrase_long_reverberation_feedback" = "Too much echo. Try in another environment.";\n"voice_component_tutorial_title" = "Voice Recognition";\n"voice_component_tutorial_message" = "Speak clearly and aloud\\n\\nMake sure your surroundings are silent";\n"voice_component_tutorial_button" = "Start";\n"voice_component_success_button" = "Continue";\n"voice_component_ok"="Ok";\n"voice_component_cancel"="Cancel";\n"voice_component_end_confirmation_title" = "Are you sure you will finish the process?";\n"voice_component_text_results_finish_button" = "Finish";\n"voice_component_agree" = "Accept";\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},225:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);