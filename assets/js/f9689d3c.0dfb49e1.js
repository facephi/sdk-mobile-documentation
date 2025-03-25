"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2056],{2979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const s={},r="Voice Component",a={id:"Voice_Component",title:"Voice Component",description:"0. SDK Mobile baseline requirements",source:"@site/android_versioned_docs/version-1.5.4/Voice_Component.md",sourceDirName:".",slug:"/Voice_Component",permalink:"/sdk-mobile-documentation/docs/android/1.5.4/Voice_Component",draft:!1,unlisted:!1,tags:[],version:"1.5.4",frontMatter:{},sidebar:"sidebar",previous:{title:"Phingers Component",permalink:"/sdk-mobile-documentation/docs/android/1.5.4/Phingers_Component"},next:{title:"NFC Component",permalink:"/sdk-mobile-documentation/docs/android/1.5.4/NFC_Component"}},c={},l=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start new operation",id:"3-start-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Component configuration",id:"5-component-configuration",level:2},{value:"5.1. Class VoiceConfigurationData",id:"51-class-voiceconfigurationdata",level:3},{value:"5.1.1. phrases",id:"511-phrases",level:4},{value:"5.1.2. vibrationEnabled",id:"512-vibrationenabled",level:4},{value:"5.1.3. showTutorial",id:"513-showtutorial",level:4},{value:"5.1.4. extractionTimeout",id:"514-extractiontimeout",level:4},{value:"5.1.5. showDiagnostic",id:"515-showdiagnostic",level:4},{value:"6. Component use",id:"6-component-use",level:2},{value:"7. Receipt of the result",id:"7-receipt-of-the-result",level:2},{value:"7.1. Receipt of errors",id:"71-receipt-of-errors",level:3},{value:"7.1. Receipt of correct execution - <em>data</em>",id:"71-receipt-of-correct-execution---data",level:3},{value:"7.1.1 <em>audios</em>",id:"711-audios",level:4},{value:"7.1.3 <em>tokenizedAudios</em>",id:"713-tokenizedaudios",level:4},{value:"8. Customizing the component",id:"8-customizing-the-component",level:2},{value:"8.1 Texts",id:"81-texts",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"voice-component",children:"Voice Component"}),"\n",(0,i.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Depending on the use\ncase that is required, certain components must be installed. Its high\nlevel of modularity allows other new components to be added in the\nfuture without affecting those already integrated in the project."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"component"})," discussed in the current document is called ",(0,i.jsx)(n.strong,{children:"Voice\nComponent"}),". It is in charge of capturing the user's voice and the\nsubsequent extraction of the corresponding templates. Its main\nfunctionalities are the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Input of a certain number of sentences to subsequently read each one\nin one step."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Internal microphone management."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Management of permissions."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Analysis of silences."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Progress analysis."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Assistant in the capture processes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generation of templates with voice characteristics and scores."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,i.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,i.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,i.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, in case you want to\ninstall the component in a project containing an old version of the\nFacephi libraries (",(0,i.jsx)(n.em,{children:"Widgets"}),"), these must be completely removed before\ninstalling the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Currently FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,i.jsx)(n.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:voice_component:$sdk_voice_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-start-new-operation",children:"3. Start new operation"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to perform a specific operation, in order to generate the\nassociated information correctly in the platform, the ",(0,i.jsx)(n.strong,{children:"newOperation"}),"\ncommand must first be executed."]}),"\n",(0,i.jsxs)(n.p,{children:["This command must have been executed ",(0,i.jsx)(n.strong,{children:"prior to launch"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Controller"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VoiceController"}),(0,i.jsx)(n.td,{children:"Voice capture main controller"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"5-component-configuration",children:"5. Component configuration"}),"\n",(0,i.jsxs)(n.p,{children:["To configure the current component, once it has been initialised, a\n",(0,i.jsx)(n.em,{children:"VoiceConfigurationData"})," object must be created and passed as a\nparameter to the SDKController when the component is launched."]}),"\n",(0,i.jsx)(n.p,{children:"The following section will show the fields that are part of this class\nand what each of them is used for."}),"\n",(0,i.jsx)(n.h3,{id:"51-class-voiceconfigurationdata",children:"5.1. Class VoiceConfigurationData"}),"\n",(0,i.jsx)(n.h4,{id:"511-phrases",children:"5.1.1. phrases"}),"\n",(0,i.jsx)(n.p,{children:"Indicates the phrase(s) required to capture."}),"\n",(0,i.jsx)(n.h4,{id:"512-vibrationenabled",children:"5.1.2. vibrationEnabled"}),"\n",(0,i.jsx)(n.p,{children:"Indicates the activation of the vibration when the widget finishes\nsuccessfully."}),"\n",(0,i.jsx)(n.h4,{id:"513-showtutorial",children:"5.1.3. showTutorial"}),"\n",(0,i.jsx)(n.p,{children:"Indicates whether the component activates the tutorial screen. This view\nintuitively explains how the capture is performed."}),"\n",(0,i.jsx)(n.h4,{id:"514-extractiontimeout",children:"5.1.4. extractionTimeout"}),"\n",(0,i.jsx)(n.p,{children:"Sets the maximum time that the capture can be performed."}),"\n",(0,i.jsx)(n.h4,{id:"515-showdiagnostic",children:"5.1.5. showDiagnostic"}),"\n",(0,i.jsx)(n.p,{children:"Display diagnostic screens at the end of the process"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-component-use",children:"6. Component use"}),"\n",(0,i.jsxs)(n.p,{children:["Once the component has been started and a new operation has been created\n(",(0,i.jsx)(n.strong,{children:"section 3"}),"), the SDK components can be launched. There are two ways\nto launch the component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITH TRACKING]"})," This call allows to launch the functionality\nof the component normally, but internal events will be tracked to\nthe ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.launch(\n    VoiceController(VoiceConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("Voice: ERROR - ${it.error.javaClass.simpleName}")\n            is SdkResult.Success -> Napier.d("Voice OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[WITHOUT TRACKING]"})," This call allows to launch the\nfunctionality of the component normally, but ",(0,i.jsx)(n.strong,{children:"no event will be\ntracked"})," to the ",(0,i.jsx)(n.em,{children:"tracking"})," server:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.launchMethod(\n    VoiceController(VoiceConfigurationData()) {\n        when (it) {\n            is SdkResult.Error -> Napier.d("Voice: ERROR - ${it.error.javaClass.simpleName}")\n            is SdkResult.Success -> Napier.d("Voice OK: ${it.data}")\n        }\n    }\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"launch"})," method must be used by ",(0,i.jsx)(n.strong,{children:"default"}),". This method allows\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"tracking"})})," to be used if your component is enabled, and will not use\nit when it is disabled (or the component is not installed)."]}),"\n",(0,i.jsxs)(n.p,{children:["On the other hand, the ",(0,i.jsx)(n.strong,{children:"launchMethod"})," method covers a special case, in\nwhich the integrator has tracking installed and activated, but in a\ncertain flow within the application does not want to track information.\nIn this case, this method is used to prevent this information from being\nsent to the platform."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-receipt-of-the-result",children:"7. Receipt of the result"}),"\n",(0,i.jsxs)(n.p,{children:["The controllers will return the required information in SdkResult\nformat. More information in the Android Mobile SDK's ",(0,i.jsx)("a",{href:"Mobile_SDK#6-result-return",rel:"nofollow",children:"6. Result return"})," section."]}),"\n",(0,i.jsx)(n.h3,{id:"71-receipt-of-errors",children:"7.1. Receipt of errors"}),"\n",(0,i.jsxs)(n.p,{children:["On the error side, we will have the ",(0,i.jsx)(n.em,{children:"VoiceError"})," class."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"NO_DATA_ERROR\nTIMEOUT\nINTERNAL_LICENSE_ERROR\nCANCEL_BY_USER\nCANCEL_LAUNCH\nPERMISSION_DENIED\nACTIVITY_RESULT_ERROR\nINITIALIZATION_ERROR -> it.error\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"71-receipt-of-correct-execution---data",children:["7.1. Receipt of correct execution - ",(0,i.jsx)(n.em,{children:"data"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the data part, we have the ",(0,i.jsx)(n.em,{children:"VoiceResult class"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The data field is variable and will depend on which component has\nreturned the result. In the case of this component, the fields returned\nare the following:"}),"\n",(0,i.jsxs)(n.h4,{id:"711-audios",children:["7.1.1 ",(0,i.jsx)(n.em,{children:"audios"})]}),"\n",(0,i.jsx)(n.p,{children:"Contains a list of captured audios in ByteArray format."}),"\n",(0,i.jsxs)(n.h4,{id:"713-tokenizedaudios",children:["7.1.3 ",(0,i.jsx)(n.em,{children:"tokenizedAudios"})]}),"\n",(0,i.jsx)(n.p,{children:"Contains the list of captured audios in Facephi tokenize format."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-customizing-the-component",children:"8. Customizing the component"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the changes that can be made at SDK level (which are\nexplained in the ",(0,i.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocument), this particular component allows the modification of specific\ntexts."]}),"\n",(0,i.jsx)(n.h3,{id:"81-texts",children:"8.1 Texts"}),"\n",(0,i.jsx)(n.p,{children:"If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application, and modify the value of\neach String to the desired one."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'    <string name="voice_component_tutorial_message">Speak clearly and loudly. \\n\\n Make sure you are in a quiet environment.</string>\n    <string name="voice_component_tutorial_title">Speech recognition</string>\n    <string name="voice_component_tutorial_button">Continue</string>\n    <string name="voice_component_success_message">Recorded recording</string>\n    <string name="voice_component_speech_message">Speak clearly and close to the microphone</string>\n    <string name="voice_component_speech_more_message">Keep talking</string>\n    <string name="voice_component_speech_empty_message" translatable="false"></string>\n    <string name="voice_component_read_message">Say out loud:</string>\n    <string name="voice_component_speech_noisy_message">There is too much background noise, try to go to a quiet environment</string>\n    <string name="voice_component_success_records_message">successful recordings</string>\n    <string name="voice_component_timeout_title">Time exceeded</string>\n    <string name="voice_component_timeout_desc">We apologize. The capture could not be made</string>\n    <string name="voice_component_internal_error_title">There was a technical problem</string>\n    <string name="voice_component_internal_error_desc">We apologize. The capture could not be made</string>\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);