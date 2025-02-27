"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[7715],{1950:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-010-305c0dc6e8ba588fae482db4b1ff817d.png"},2895:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-006-561a9dd21dbd96a080937d1a105bf362.png"},3002:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-014-2a25737a313f66bb30fbfaf0db333706.png"},3048:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-009-03f21d5dc6d9066b91050adf7fabe7df.png"},3265:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-008-3e67e7e122a24be3226632d390a61842.png"},3429:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-013-ac369fe2aaeeb1149ac7a0cf63b425f6.png"},4915:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-015-bb86fd0a9e0835fd15cfc2d56e50099a.png"},5074:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-003-50b0a3656841b43e169675d51c41b3e7.png"},5095:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-011-4dbde20e070d491c2ddc17a7cb98fa89.png"},5958:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-007-237a65d9cd46cdcb915e22e9ea193021.png"},6036:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-005-9b6c1727c54bad4af74e2738c0a548f2.png"},7516:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-012-754d49db4b70295687ba933874acda8f.png"},7920:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-001-e2d7a316b1aaefbe41102de4a2c6ba0a.png"},8041:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"Video_Recording_Component","title":"Video Recording Component","description":"0. Requisitos base de SDK Mobile","source":"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-2.2.X/Video_Recording_Component.md","sourceDirName":".","slug":"/Video_Recording_Component","permalink":"/sdk-mobile-documentation/es/docs/ios/Video_Recording_Component","draft":false,"unlisted":false,"tags":[],"version":"2.2.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Video Id Component","permalink":"/sdk-mobile-documentation/es/docs/ios/Video_Id_Component"},"next":{"title":"Status Component","permalink":"/sdk-mobile-documentation/es/docs/ios/Status_Component"}}');var r=a(4848),o=a(8453);const s={},d="Video Recording Component",c={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Minimum requirements",id:"11-minimum-requirements",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1 Creando la extensi\xf3n",id:"21-creando-la-extensi\xf3n",level:3},{value:"2.2 Creando el App Group compartido",id:"22-creando-el-app-group-compartido",level:3},{value:"2.3 Dependencias requeridas para la integraci\xf3n",id:"23-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"2.3.1 Cocoapods",id:"231-cocoapods",level:3},{value:"2.3.2 SPM",id:"232-spm",level:4},{value:"2.4 Implementar la extensi\xf3n",id:"24-implementar-la-extensi\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Uso de componente",id:"4-uso-de-componente",level:2},{value:"5. Personalizaci\xf3n del componente",id:"5-personalizaci\xf3n-del-componente",level:2},{value:"6. Errores y problemas frecuentes",id:"6-errores-y-problemas-frecuentes",level:2},{value:"6.1 En tiempo de compilaci\xf3n",id:"61-en-tiempo-de-compilaci\xf3n",level:3},{value:"6.1.1 Permisos de escritura - Sandbox: rsync.samba(67364) deny(1) file-write-create",id:"611-permisos-de-escritura---sandbox-rsyncsamba67364-deny1-file-write-create",level:4},{value:"6.2 En tiempo de ejecuci\xf3n",id:"62-en-tiempo-de-ejecuci\xf3n",level:3},{value:"6.2.1 Starscream - EXC_BAD_ACCESS",id:"621-starscream---exc_bad_access",level:4},{value:"6.2.2 QuickTime Player",id:"622-quicktime-player",level:4},{value:"6.2.3 La videograbaci\xf3n no comienza",id:"623-la-videograbaci\xf3n-no-comienza",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"video-recording-component",children:"Video Recording Component"})}),"\n",(0,r.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,r.jsx)(n.a,{href:"./Mobile_SDK#11-requisitos-m%C3%ADnimos",children:"Primeros Pasos"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," tratado en el documento actual recibe el nombre de\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"VideoRecording Component"})}),". \xc9ste se encarga de capturar la pantalla\ndel dispositivo en segundo plano. Est\xe1 orientado principalmente para la\ngrabaci\xf3n del proceso de onboarding."]}),"\n",(0,r.jsx)(n.h2,{id:"11-minimum-requirements",children:"1.1 Minimum requirements"}),"\n",(0,r.jsx)(n.p,{children:"The minimum iOS SDK version required is as follows:"}),"\n",(0,r.jsxs)(n.p,{children:["Minimum iOS version: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)("div",{class:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAntes de integrar este componente se recomienda leer la documentaci\xf3n de ",(0,r.jsx)(n.a,{href:"./Mobile_SDK#2-integraci%C3%B3n-inicial",children:"Integraci\xf3n"})," y seguir las instrucciones indicadas en dicho documento."]})}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-creando-la-extensi\xf3n",children:"2.1 Creando la extensi\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Para el ejemplo documentado se ha utilizado una app con SwiftUI pero el componente y la documentaci\xf3n son v\xe1lidos independientemente de que se use UIKit o SwiftUI."}),"\n",(0,r.jsxs)(n.p,{children:["En nuestro proyecto a\xf1adimos un nuevo target de tipo ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Broadcast Upload Extension:"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(7920).A+"",width:"1648",height:"1392"})}),"\n",(0,r.jsx)(n.p,{children:"Configuramos el nombre de la extensi\xf3n, en este ejemplo ser\xe1 VideoRecording:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(9899).A+"",width:"1456",height:"1040"})}),"\n",(0,r.jsx)(n.p,{children:"Si aparece el siguiente modal, pulsamos en activate:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(5074).A+"",width:"556",height:"738"})}),"\n",(0,r.jsx)(n.p,{children:"Esto genera la siguiente estructura:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(9933).A+"",width:"1988",height:"592"})}),"\n",(0,r.jsx)(n.p,{children:"Donde SampleHandler es la clase principal de la extensi\xf3n."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTA: Es importante tener en cuenta que el n\xfamero de la version (MARKETING_VERSION) y el n\xfamero de versi\xf3n del proyecto debe ser siempre el mismo en ambos targets:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(6036).A+"",width:"2824",height:"420"})}),"\n",(0,r.jsx)(n.h3,{id:"22-creando-el-app-group-compartido",children:"2.2 Creando el App Group compartido"}),"\n",(0,r.jsx)(n.p,{children:"Si no lo tenemos ya en nuestra app, podemos crear una nueva Capability de tipo App Group."}),"\n",(0,r.jsx)(n.p,{children:"Esto servir\xe1 para crear el contenedor compartido entre nuestra extensi\xf3n y el target de la aplicaci\xf3n."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(2895).A+"",width:"754",height:"460"})}),"\n",(0,r.jsx)(n.p,{children:"Asignamos un nombre al nuevo App Group despu\xe9s de hacer click sobre el icono +:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(5958).A+"",width:"876",height:"552"})}),"\n",(0,r.jsx)(n.p,{children:"Seleccionamos el mismo identificador en nuestra extensi\xf3n. De este modo ambos tendr\xe1n chequeado el App Group que acabamos de crear:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(3265).A+"",width:"776",height:"214"})}),"\n",(0,r.jsx)(n.p,{children:"XCode generar\xe1 o actualizar\xe1 autom\xe1ticamente los archivos de tipo entitlement implicados para a\xf1adir la capability a cada target:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(3048).A+"",width:"2830",height:"452"})}),"\n",(0,r.jsx)(n.h3,{id:"23-dependencias-requeridas-para-la-integraci\xf3n",children:"2.3 Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsx)("blockquote",{children:(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versi\xf3n antigua de las librer\xedas de Facephi (Widgets), \xe9stos deber\xe1n eliminarse por completo antes de la instalaci\xf3n de los componentes de la SDKMobile."})})}),"\n",(0,r.jsx)(n.p,{children:"Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias."}),"\n",(0,r.jsx)(n.h3,{id:"231-cocoapods",children:"2.3.1 Cocoapods"}),"\n",(0,r.jsxs)(n.p,{children:["Las dependencias ",(0,r.jsx)(n.strong,{children:"obligatorias"})," que deber\xe1n haberse instalado previamente (a\xf1adi\xe9ndolas en el fichero Podfile del proyecto) son:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod 'FPHISDKMainComponent'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Se recomienda utilizar tambi\xe9n el componente de VideoRecording con el de tracking (",(0,r.jsx)(n.code,{children:"FPHISDKTrackingComponent"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Para instalar el componente actual deber\xe1 incluirse la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pod 'FPHISDKVideoRecordingComponent'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Se debe declarar esta dependencia dentro del target de la app y de la extensi\xf3n (esto \xfaltimo se explicar\xe1 a continuaci\xf3n)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Un ejemplo de c\xf3mo se ver\xeda el Podfile:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"target 'demoApp' do\n...\n  pod 'FPHISDKMainComponent', 'X.Y.Z'\n  pod 'FPHISDKVideoRecordingComponent', 'A.B.C'\n  pod 'FPHISDKTrackingComponent', 'D.E.F' ### Optional, recommended\n...\nend\ntarget 'VideoRecording' do ### Our extension target\n  use_frameworks! ### We want to use frameworks instead of Static Libs\n  pod 'FPHISDKVideoRecordingComponent', 'A.B.C'\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:"NOTA: Hay que tener cuidado de poner el target de la extensi\xf3n fuera del target de la aplicaci\xf3n. De no hacerlo as\xed, los pods de la aplicaci\xf3n se compilar\xedan tambi\xe9n en la extensi\xf3n, dando como resultado problemas colaterales."}),"\n",(0,r.jsx)(n.h4,{id:"232-spm",children:"2.3.2 SPM"}),"\n",(0,r.jsx)(n.p,{children:"A\xf1adimos nuestra dependencia al proyecto y la asignamos al target de VideoRecording:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(1950).A+"",width:"2170",height:"1218"})}),"\n",(0,r.jsx)(n.p,{children:"Debemos luego a\xf1adirlo tambi\xe9n al target de la app en General \u2192 Framework, Libraries and Embedded Content:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(5095).A+"",width:"1260",height:"1012"})}),"\n",(0,r.jsx)(n.h3,{id:"24-implementar-la-extensi\xf3n",children:"2.4 Implementar la extensi\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"En este punto se debe desarrollar la funcionalidad en nuestro reci\xe9n creado SampleHandler.swift. Para ello, copiamos/sustituimos el siguiente c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'class SampleHandler: RPBroadcastSampleHandler {\n    var bufferCopy: CMSampleBuffer?\n    var lastSendTs = Int64(Date().timeIntervalSince1970 * 1000)\n    var timer: Timer?\n    // Shared info between app and extension\n    private let kAppGroupName = "group.com.facephi.sdk.demo" // SET YOUR APP_GROUP_NAME, you can get it from your entitlements\' file\n    override func broadcastStarted(withSetupInfo setupInfo: [String: NSObject]?) {\n        // Load shared info from app\n        let sharedContainer = UserDefaults(suiteName: kAppGroupName)!\n        let uid = sharedContainer.string(forKey: "UID")!\n        let token = sharedContainer.string(forKey: "TOKEN")!\n        let channel = sharedContainer.string(forKey: "CHANNEL")!\n        // Passing data to app\n        sharedContainer.setValue(true, forKey: "BROADCASTSTARTED")\n        sharedContainer.synchronize()\n        print("uid: \\(uid)")\n        print("token: \\(token)")\n        print("channelName: \\(channel)")\n        // In-App Screen Capture\n        AgoraUploader.startBroadcast(uid: uid, token: token, channel: channel)\n        AgoraUploader.sharedAgoraEngine.delegate = self\n        DispatchQueue.main.async {\n            self.timer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { [weak self] (_: Timer) in\n                guard let weakSelf = self else { return }\n                let elapse = Int64(Date().timeIntervalSince1970 * 1000) - weakSelf.lastSendTs\n                print("elapse: \\(elapse)")\n                // if frame stopped sending for too long time, resend the last frame\n                // to avoid stream being frozen when viewed from remote\n                if elapse > 300 {\n                    if let buffer = weakSelf.bufferCopy {\n                        weakSelf.processSampleBuffer(buffer, with: .video)\n                    }\n                }\n            }\n        }\n    }\n    override func broadcastPaused() {\n        // User has requested to pause the broadcast. Samples will stop being delivered.\n    }\n    override func broadcastResumed() {\n        // User has requested to resume the broadcast. Samples delivery will resume.\n    }\n    override func broadcastFinished() {\n        timer?.invalidate()\n        timer = nil\n        AgoraUploader.stopBroadcast()\n    }\n    override func processSampleBuffer(_ sampleBuffer: CMSampleBuffer, with sampleBufferType: RPSampleBufferType) {\n        DispatchQueue.main.async { [weak self] in\n            switch sampleBufferType {\n            case .video:\n                if let weakSelf = self {\n                    weakSelf.bufferCopy = sampleBuffer\n                    weakSelf.lastSendTs = Int64(Date().timeIntervalSince1970 * 1000)\n                }\n                AgoraUploader.sendVideoBuffer(sampleBuffer)\n            @unknown default:\n                break\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTA: Hay que asegurarse de introducir el App Group Name correcto en la linea 6. En nuestro ejemplo era group.com.facephi.demosdk-videoRecording."})}),"\n",(0,r.jsxs)(n.p,{children:["Opcionalmente puedes escuchar los distintos eventos que ocurren cuando el usuario interacciona con la funcionalidad de grabaci\xf3n si haces que la clase SampleHandler extienda ",(0,r.jsx)(n.code,{children:"AgoraRtcEngineDelegate"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'import AgoraRtcKit\n\nextension SampleHandler: AgoraRtcEngineDelegate {\n    /// callback when warning occured for agora sdk, warning can usually be ignored, still it\'s nice to check out\n    /// what is happening\n    /// Warning code description can be found at:\n    /// en: https://docs.agora.io/en/Voice/API%20Reference/oc/Constants/AgoraWarningCode.html\n    /// cn: https://docs.agora.io/cn/Voice/API%20Reference/oc/Constants/AgoraWarningCode.html\n    /// @param warningCode warning code of the problem\n    func rtcEngine(_ engine: AgoraRtcEngineKit, didOccurWarning warningCode: AgoraWarningCode) {}\n\n    /// callback when error occured for agora sdk, you are recommended to display the error descriptions on demand\n    /// to let user know something wrong is happening\n    /// Error code description can be found at:\n    /// en: https://docs.agora.io/en/Voice/API%20Reference/oc/Constants/AgoraErrorCode.html\n    /// cn: https://docs.agora.io/cn/Voice/API%20Reference/oc/Constants/AgoraErrorCode.html\n    /// @param errorCode error code of the problem\n    func rtcEngine(_ engine: AgoraRtcEngineKit, didOccurError errorCode: AgoraErrorCode) {}\n\n    /// callback when the local user joins a specified channel.\n    /// @param channel\n    /// @param uid uid of local user\n    /// @param elapsed time elapse since current sdk instance join the channel in ms\n    func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinChannel channel: String, withUid uid: UInt, elapsed: Int) {}\n\n    /// callback when a remote user is joinning the channel, note audience in live broadcast mode will NOT trigger this event\n    /// @param uid uid of remote joined user\n    /// @param elapsed time elapse since current sdk instance join the channel in ms\n    func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinedOfUid uid: UInt, elapsed: Int) {}\n\n    /// callback when a remote user is leaving the channel, note audience in live broadcast mode will NOT trigger this event\n    /// @param uid uid of remote joined user\n    /// @param reason reason why this user left, note this event may be triggered when the remote user\n    /// become an audience in live broadcasting profile\n    func rtcEngine(_ engine: AgoraRtcEngineKit, didOfflineOfUid uid: UInt, reason: AgoraUserOfflineReason) {\n        // Replace domain\'s value with your Bundle Identifier\n        let error = NSError(domain: "com.facephi.demosdk-videoRecording", code: 0, userInfo: [NSLocalizedDescriptionKey: NSLocalizedString("Call ended", comment: "")])\n\n        finishBroadcastWithError(error)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se desea realizar una determinada operaci\xf3n, para generar la informaci\xf3n asociada correctamente en la plataforma deber\xe1 ejecutarse previamente el comando ",(0,r.jsx)(n.strong,{children:"newOperation"}),"."]}),"\n",(0,r.jsx)("blockquote",{children:(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"Este comando debe ejecutarse siempre. Para saber m\xe1s acerca de c\xf3mo iniciar una nueva operaci\xf3n, se recomienda consultar la documentaci\xf3n de Core Component, en el que se detalla y explica en qu\xe9 consiste este proceso."})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-uso-de-componente",children:"4. Uso de componente"}),"\n",(0,r.jsx)(n.p,{children:"Una vez iniciado el componente y creada una nueva operaci\xf3n (apartado 3) se podr\xe1n lanzar los componentes del SDK. Hay dos formas de lanzar el componente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[SIN TRACKING]"})," Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero ",(0,r.jsx)(n.strong,{children:"no se trackear\xe1"})," ning\xfan evento al servidor de tracking:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), appGroupName: "group.com.facephi.demosdk-videoRecording", extensionName: "VideoRecording", output: { _ in })\nSDKController.shared.launchMethod(controller: controller)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"[CON TRACKING]"})," Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero s\xed se trackear\xe1n los eventos internos al servidor de tracking:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), appGroupName: "group.com.facephi.demosdk-videoRecording", extensionName: "VideoRecording", output: { _ in })\nSDKController.shared.launch(controller: controller)\n'})}),"\n",(0,r.jsx)("blockquote",{children:(0,r.jsxs)("p",{children:[(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.strong,{children:"launch"})," debe usarse ",(0,r.jsx)(n.strong,{children:"por defecto"}),". Este m\xe9todo permite utilizar ",(0,r.jsx)(n.strong,{children:"tracking"})," en caso de estar su componente activado, y no lo usar\xe1 cuando est\xe9 desactivado (o no se encuentre el componente instalado)."]}),(0,r.jsxs)(n.p,{children:["Por el contrario, el m\xe9todo ",(0,r.jsx)(n.strong,{children:"launchMethod"})," cubre un caso especial, en el cual el integrador tiene instalado y activado el tracking, pero en un flujo determinado dentro de la aplicaci\xf3n no desea trackear informaci\xf3n. En ese caso se usa este m\xe9todo para evitar que se env\xede esa informaci\xf3n a la plataforma."]})]})}),"\n",(0,r.jsxs)(n.p,{children:["En los datos de configuraci\xf3n (",(0,r.jsx)(n.em,{children:"VideoRecordingConfigurationData"}),") tambi\xe9n se podr\xe1n modificar:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Datos opcionales que normalmente se incluyen dentro de la licencia"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"url"}),": Ruta al socket de video."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apiKey"}),": ApiKey necesaria para la conexi\xf3n con el socket de video."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"tenantId"}),": Identificador del tenant que hace referencia al cliente actual, necesario para la conexi\xf3n con el servicio de video."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"extractionTimeout"}),": Cuanto tiempo (milisegundos) se quedar\xe1 el componente esperando al socket antes de generar un error de timeout."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"showDiagnostic"}),": En caso de que ocurra alg\xfan error el error se mostrar\xe1 por pantalla adem\xe1s de enviarlo con el output."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"5-personalizaci\xf3n-del-componente",children:"5. Personalizaci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Ahora mismo no existen recursos que configurar en el componente."}),"\n",(0,r.jsx)(n.h2,{id:"6-errores-y-problemas-frecuentes",children:"6. Errores y problemas frecuentes"}),"\n",(0,r.jsx)(n.h3,{id:"61-en-tiempo-de-compilaci\xf3n",children:"6.1 En tiempo de compilaci\xf3n"}),"\n",(0,r.jsx)(n.h4,{id:"611-permisos-de-escritura---sandbox-rsyncsamba67364-deny1-file-write-create",children:"6.1.1 Permisos de escritura - Sandbox: rsync.samba(67364) deny(1) file-write-create"}),"\n",(0,r.jsx)(n.p,{children:"Si aparece un error de compilaci\xf3n en referencia a permisos de escritura:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(7516).A+"",width:"1570",height:"282"})}),"\n",(0,r.jsxs)(n.p,{children:["Revisar el estado en Build Settings del par\xe1metro ",(0,r.jsx)(n.strong,{children:"ENABLE_USER_SCRIPT_SANDBOXING"}),", su valor debe ser ",(0,r.jsx)(n.strong,{children:"NO"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(3429).A+"",width:"1580",height:"484"})}),"\n",(0,r.jsx)(n.h3,{id:"62-en-tiempo-de-ejecuci\xf3n",children:"6.2 En tiempo de ejecuci\xf3n"}),"\n",(0,r.jsx)(n.h4,{id:"621-starscream---exc_bad_access",children:"6.2.1 Starscream - EXC_BAD_ACCESS"}),"\n",(0,r.jsx)(n.p,{children:"Al lanzar el componente puede aparecer un error en la dependencia Starscream:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(3002).A+"",width:"1510",height:"660"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Soluci\xf3n"})})," - Subir la versi\xf3n del Pod m\xednima de iOS11 a iOS12:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Image",src:a(4915).A+"",width:"1588",height:"250"})}),"\n",(0,r.jsx)(n.h4,{id:"622-quicktime-player",children:"6.2.2 QuickTime Player"}),"\n",(0,r.jsx)(n.p,{children:"Al lanzar el componente, si el iPhone est\xe1 ya conectado y compartiendo la pantalla con una sesi\xf3n de QuickTime Player, la videograbaci\xf3n no funcionar\xe1."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Soluci\xf3n"})})," - Cerrar QuickTime Player, la aplicaci\xf3n y volver a iniciar el proceso."]}),"\n",(0,r.jsx)(n.h4,{id:"623-la-videograbaci\xf3n-no-comienza",children:"6.2.3 La videograbaci\xf3n no comienza"}),"\n",(0,r.jsx)(n.p,{children:"Lanzando el componente, no podemos ver el modal nativo de videograbaci\xf3n o lo vemos pero al iniciar la grabaci\xf3n no comienza."}),"\n",(0,r.jsx)(n.p,{children:'Posible Causa: La extensi\xf3n creada en la aplicaci\xf3n tiene un "Bundle Identifier". Si este identificador ha sido modificado, el dispositivo puede tener cacheado el valor antiguo.'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"Posible Soluci\xf3n"})})," - Desinstalar la app, instalarla de nuevo. Reiniciar si es necesario."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>d});var i=a(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}},9899:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-002-1e32a36560668a16c1f13b5133ed52a1.png"},9933:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/videoRecording-004-b0670f978445e45d85718b624c5ad29f.png"}}]);