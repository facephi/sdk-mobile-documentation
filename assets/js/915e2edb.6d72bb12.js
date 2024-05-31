"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[928],{3927:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=a(5893),i=a(1151);const s={},l="Verification Component",r={id:"Verification_Component",title:"Verification Component",description:"0. SDK Mobile baseline requirements",source:"@site/docs/android/Verification_Component.md",sourceDirName:".",slug:"/Verification_Component",permalink:"/sdk-mobile-documentation/docs/android/next/Verification_Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Flow Component",permalink:"/sdk-mobile-documentation/docs/android/next/Flow_Component"},next:{title:"Changelog",permalink:"/sdk-mobile-documentation/docs/android/next/Changelog"}},c={},o=[{value:"0. SDK Mobile baseline requirements",id:"0-sdk-mobile-baseline-requirements",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Integration of the component",id:"2-integration-of-the-component",level:2},{value:"2.1. Dependencies required for integration",id:"21-dependencies-required-for-integration",level:3},{value:"3. Start a new operation",id:"3-start-a-new-operation",level:2},{value:"4. Available controllers",id:"4-available-controllers",level:2},{value:"5. Functions",id:"5-functions",level:2},{value:"5.1. Liveness",id:"51-liveness",level:3},{value:"5.1.1. Liveness with image",id:"511-liveness-with-image",level:4},{value:"5.1.2. Liveness with <em>template</em>",id:"512-liveness-with-template",level:4},{value:"5.2. Matching",id:"52-matching",level:3},{value:"5.2.1. Matching of two facial images in base 64",id:"521-matching-of-two-facial-images-in-base-64",level:4},{value:"5.2.2. Matching of two <em>templates</em>",id:"522-matching-of-two-templates",level:4},{value:"5.2.3. Matching of a base 64 facial image with a <em>template</em>.",id:"523-matching-of-a-base-64-facial-image-with-a-template",level:4},{value:"5.2.4. Matching of a base 64 facial image with the document image",id:"524-matching-of-a-base-64-facial-image-with-the-document-image",level:4},{value:"5.2.5. Matching of a <em>template</em> with the document image",id:"525-matching-of-a-template-with-the-document-image",level:4},{value:"5.3. Voice",id:"53-voice",level:3},{value:"5.3.1. Enroll",id:"531-enroll",level:4},{value:"5.3.2. Authentication",id:"532-authentication",level:4},{value:"6. Extensions and other SDK features",id:"6-extensions-and-other-sdk-features",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"verification-component",children:"Verification Component"}),"\n",(0,t.jsx)(n.h2,{id:"0-sdk-mobile-baseline-requirements",children:"0. SDK Mobile baseline requirements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SDK Mobile"})," is a set of libraries (Components) that offer a series of\nfunctionalities and services, allowing their integration into a Mobile\napplication in a simple and fully scalable way. Certain components must\nbe installed depending on the use case required. Its high level of\nmodularity allows other new components to be added in the future without\naffecting those already integrated into the project."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the base configuration, go to the\n",(0,t.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"})," section."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"Component"})," dealt with in the current document is called the\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Verification Component"})}),". It is in charge of performing the verifications provided by Facephi\non the extracted data."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-integration-of-the-component",children:"2. Integration of the component"}),"\n",(0,t.jsx)(n.p,{children:"Before integrating this component, it is recommended to read the\ndocumentation related to"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\nand follow the instructions in that document."]}),"\n",(0,t.jsx)(n.p,{children:"This section will explain step by step how to integrate the current\ncomponent into an existing project."}),"\n",(0,t.jsx)(n.h3,{id:"21-dependencies-required-for-integration",children:"2.1. Dependencies required for integration"}),"\n",(0,t.jsxs)(n.p,{children:["To avoid conflicts and compatibility problems, if you want to install\nthe component in a project containing an old Facephi libraries\n(",(0,t.jsx)(n.em,{children:"Widgets"}),") version, these must be removed entirely before installing\nthe ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"SDKMobile"})})," components."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Currently, FacePhi libraries are distributed remotely through\ndifferent dependency managers. ",(0,t.jsx)(n.strong,{children:"Mandatory"})," dependencies that must\nbe installed beforehand:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:verifications_component:$sdk_verifications_component_version"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-start-a-new-operation",children:"3. Start a new operation"}),"\n",(0,t.jsxs)(n.p,{children:["When you want to perform a specific operation to generate the associated\ninformation correctly in the platform, the ",(0,t.jsx)(n.strong,{children:"newOperation"})," command must\nfirst be executed."]}),"\n",(0,t.jsxs)(n.p,{children:["This command must have been executed ",(0,t.jsx)(n.strong,{children:"before launch"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about how to start a new operation, it is recommended to\nconsult the ",(0,t.jsx)(n.a,{href:"./Mobile_SDK",children:"Getting Started"}),"\ndocumentation, which details and explains what this process consists of."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4-available-controllers",children:"4. Available controllers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Controlador"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VerificationController"}),(0,t.jsx)(n.td,{children:"Main Verifications Controller"})]})})]}),"\n",(0,t.jsx)(n.p,{children:"In order to make use of it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"  val verificationController = VerificationController(context)\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5-functions",children:"5. Functions"}),"\n",(0,t.jsx)(n.p,{children:"The verification processes are divided into:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Liveness"}),"\n",(0,t.jsx)(n.li,{children:"Matching"}),"\n",(0,t.jsx)(n.li,{children:"Voice"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["The ",(0,t.jsx)(n.em,{children:"extraData"})," will be necessary if tracking component is used"]})}),"\n",(0,t.jsx)(n.h3,{id:"51-liveness",children:"5.1. Liveness"}),"\n",(0,t.jsx)(n.p,{children:"Process to verify that the image corresponds to a living person."}),"\n",(0,t.jsx)(n.p,{children:"The response of these functions will have the following data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" data class LivenessResponse(\n    val diagnostic: String? = null,\n    val trackingMessage: String? = null,\n    val trackingStatus: Int? = null,\n    val validTimeStamp: Boolean? = null\n)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"511-liveness-with-image",children:"5.1.1. Liveness with image"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"  /api/v1/selphid/passive-liveness/evaluate\n"})}),"\n",(0,t.jsx)(n.p,{children:"This service uses the base64 Selphi bestImage and the extra data."}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" data class LivenessWithImageRequest(\n    var image: String,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun livenessWithImage(\n        request: LivenessWithImageRequest,\n        baseUrl: String,\n    ): VerificationsResult<LivenessResponse>\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"512-liveness-with-template",children:["5.1.2. Liveness with ",(0,t.jsx)(n.em,{children:"template"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" /api/v1/selphid/passive-liveness/evaluate/token\n"})}),"\n",(0,t.jsx)(n.p,{children:"This service uses Selphi's bestImageTokenized and the extra data."}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class LivenessWithTemplateRequest(\n    var tokenImage: String,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun livenessWithTemplate(\n        request: LivenessWithTemplateRequest,\n        baseUrl: String,\n    ): VerificationsResult<LivenessResponse>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"52-matching",children:"5.2. Matching"}),"\n",(0,t.jsx)(n.p,{children:"Process to verify that the two images correspond to the same person."}),"\n",(0,t.jsx)(n.p,{children:"The response of these functions will have the following data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" data class MatchingResponse(\n    val authStatus: String? = null,\n    val similarity: Double? = null,\n    val trackingMessage: String? = null,\n    val trackingStatus: Int? = null,\n    val validTimeStamp: Boolean? = null\n)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"521-matching-of-two-facial-images-in-base-64",children:"5.2.1. Matching of two facial images in base 64"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" /api/v1/selphid/authenticate-facial/images\n"})}),"\n",(0,t.jsx)(n.p,{children:"This service uses two images in base 64 and the extra data."}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class MatchingFacialImagesRequest(\n    var image1: String,\n    var image2: String,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" fun matchingFacialImages(\n        request: MatchingFacialImagesRequest,\n        baseUrl: String,\n    ): VerificationsResult<MatchingResponse>\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"522-matching-of-two-templates",children:["5.2.2. Matching of two ",(0,t.jsx)(n.em,{children:"templates"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" /api/v1/selphid/authenticate-facial/templates\n"})}),"\n",(0,t.jsx)(n.p,{children:"This service uses two base 64 encrypted images. From the data extracted from Selphi, both the bestImageTokenized string and the converted templateRaw can be used."}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class MatchingFacialTemplatesRequest(\n    var faceTemplate1: String,\n    var faceTemplate2: String,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun matchingFacialTemplates(\n        request: MatchingFacialTemplatesRequest,\n        baseUrl: String,\n    ): VerificationsResult<MatchingResponse>\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"523-matching-of-a-base-64-facial-image-with-a-template",children:["5.2.3. Matching of a base 64 facial image with a ",(0,t.jsx)(n.em,{children:"template"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" /api/v1/selphid/authenticate-facial/image/template\n"})}),"\n",(0,t.jsx)(n.p,{children:"Mixture of the two previous cases."}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class MatchingFacialImageWithTemplateRequest(\n    var faceTemplate: String,\n    var image: String,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun matchingFacialImageWithTemplate(\n        request: MatchingFacialImageWithTemplateRequest,\n        baseUrl: String,\n    ): VerificationsResult<MatchingResponse>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"524-matching-of-a-base-64-facial-image-with-the-document-image",children:"5.2.4. Matching of a base 64 facial image with the document image"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" /api/v1/selphid/authenticate-facial/document/face-image\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This service uses, on the one hand, the encrypted image extracted from the document with SelphID ",(0,t.jsx)(n.em,{children:"tokenFaceImage"})," and, on the other hand, the ",(0,t.jsx)(n.em,{children:"bestImage"})," in base 64 extracted from Selphi."]}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class MatchingDocumentWithFaceImageRequest(\n    var image: String,\n    var documentTemplate: String,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun matchingDocumentWithFaceImage(\n        request: MatchingDocumentWithFaceImageRequest,\n        baseUrl: String,\n    ): VerificationsResult<MatchingResponse>\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"525-matching-of-a-template-with-the-document-image",children:["5.2.5. Matching of a ",(0,t.jsx)(n.em,{children:"template"})," with the document image"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:" /api/v1/selphid/authenticate-facial/document/face-template\n"})}),"\n",(0,t.jsx)(n.p,{children:"The service uses, on the one hand, the encrypted image extracted from the document with SelphID tokenFaceImage and, on the other hand, if the data extracted from Selphi are used, both from the string\nbestImageTokenized string and the templateRaw converted to Base64."}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class MatchingDocumentWithFaceTemplateRequest(\n    var faceTemplate: String,\n    var documentTemplate: String,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun matchingDocumentWithFaceTemplate(\n        request: MatchingDocumentWithFaceTemplateRequest,\n        baseUrl: String,\n    ): VerificationsResult<MatchingResponse>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"53-voice",children:"5.3. Voice"}),"\n",(0,t.jsx)(n.p,{children:"Process for making checks on encrypted audios extracted from the speech component."}),"\n",(0,t.jsx)(n.h4,{id:"531-enroll",children:"5.3.1. Enroll"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"/api/v1/enrollment\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This service receives the encrypted audios and responds with the ",(0,t.jsx)(n.em,{children:"template"})," created from them."]}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class VoiceEnrollRequest(\n    var audios: Array<String>,\n    var checkLiveness: Boolean = true,\n    var livenessThreshold: Double = 0.5,\n    var minimumSnrDb: Int = 8,\n    var minimumSpeechDurationMs: Int = 1500,\n    var minimumSpeechRelativeLenght: Float? = null,\n    var maximumMultipleSpeakersDetectorScore: Int? = null,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun voiceEnroll(\n        request: VoiceEnrollRequest,\n        baseUrl: String = RepositoryConstants.BASE_VOICE_URL,\n    ): VerificationsResult<EnrollResponse>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class EnrollResponse(\n    val template: String? = null,\n    val validateAudiosResult: List<ValidateAudiosResult>? = null,\n    val operationResult: Int? = null,\n    val templateType: String? = null,\n)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"532-authentication",children:"5.3.2. Authentication"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"/api/v1/authentication\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This service checks whether an encrypted audio corresponds to a ",(0,t.jsx)(n.em,{children:"template"})," obtained with the enrolment service."]}),"\n",(0,t.jsx)(n.p,{children:"Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class VoiceAuthenticationRequest(\n    var audio: String,\n    var template: String,\n    var livenessThreshold: Double = 0.5,\n    var minimumSnrDb: Int = 8,\n    var minimumSpeechDurationMs: Int = 1500,\n    var extraData: String\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun voiceAuthentication(\n        request: VoiceAuthenticationRequest,\n        baseUrl: String,\n    ): VerificationsResult<VoiceAuthenticationResponse>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"data class VoiceAuthenticationResponse(\n    val match: Boolean? = null,\n    val matchingScore: Float? = null,\n    val livenessScore: Float? = null,\n    val operationResult: Int? = null,\n    val trackingMessage: String? = null,\n)\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"6-extensions-and-other-sdk-features",children:"6. Extensions and other SDK features"}),"\n",(0,t.jsx)(n.p,{children:"The following extensions can be used for conversions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"fun Bitmap.toBase64(): String? {\n    return Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)\n}\n\n\nfun Bitmap.toByteArray(quality: Int = 95): ByteArray {\n    ByteArrayOutputStream().apply {\n        compress(Bitmap.CompressFormat.JPEG, quality, this)\n        return toByteArray()\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The following function can be used to obtain the ",(0,t.jsx)(n.em,{children:"extraData"})," needed for the operations (either viewModelScope.launch or CoroutineScope(Dispatchers.IO).launch can be used):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'private fun getExtraData(output: (String) -> Unit)\n  {\n      viewModelScope.launch {\n        when (val result = SDKController.launch(ExtraDataController())) {\n            is SdkResult.Success -> output(result.data)\n            is SdkResult.Error -> output("")\n        }\n      }\n  }\n'})}),"\n",(0,t.jsx)(n.p,{children:"To obtain a base 64 encrypted image in the Mobile SDK, you can use the following function (you can use\nviewModelScope.launch or CoroutineScope(Dispatchers.IO).launch) following function (either\nviewModelScope.launch or CoroutineScope(Dispatchers.IO).launch can be used):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'private fun getTemplateFromImage(\n  sdkImage: SdkImage,\n  output: (String) -> Unit)\n  {\n      viewModelScope.launch {\n        when (val result = SDKController.launch(RawTemplateController(sdkImage))) {\n            is SdkResult.Success -> output(result.data)\n            is SdkResult.Error -> output("")\n        }\n      }\n  }\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>l});var t=a(7294);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);