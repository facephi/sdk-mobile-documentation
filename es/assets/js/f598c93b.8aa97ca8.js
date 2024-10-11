"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[2796],{1186:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>t});var r=l(4848),o=l(8453);const s={},i="Flow Component",a={id:"Flow_Component",title:"Flow Component",description:"0. Requisitos base de SDK Mobile",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-2.0.X/Flow_Component.md",sourceDirName:".",slug:"/Flow_Component",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/Flow_Component",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{}},d={},t=[{value:"0. Requisitos base de SDK Mobile",id:"0-requisitos-base-de-sdk-mobile",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias requeridas para la integraci\xf3n",id:"21-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"3. Iniciar nueva operaci\xf3n",id:"3-iniciar-nueva-operaci\xf3n",level:2},{value:"4. Controladores disponibles",id:"4-controladores-disponibles",level:2},{value:"4.1. Controladores de componentes con flow",id:"41-controladores-de-componentes-con-flow",level:3},{value:"5. Inicializaci\xf3n del SDK con flow",id:"5-inicializaci\xf3n-del-sdk-con-flow",level:2},{value:"6. Uso del componente",id:"6-uso-del-componente",level:2},{value:"6.1 Lanzamiento de un flujo publicado",id:"61-lanzamiento-de-un-flujo-publicado",level:4},{value:"6.2 Lanzamiento de un flujo pendiente de publicar",id:"62-lanzamiento-de-un-flujo-pendiente-de-publicar",level:4},{value:"7. Recepci\xf3n del resultado",id:"7-recepci\xf3n-del-resultado",level:2},{value:"7.1. Recepci\xf3n de errores",id:"71-recepci\xf3n-de-errores",level:3},{value:"7.2. Recepci\xf3n de ejecuci\xf3n correcta - <em>data</em>",id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"flow-component",children:"Flow Component"})}),"\n",(0,r.jsx)(n.h2,{id:"0-requisitos-base-de-sdk-mobile",children:"0. Requisitos base de SDK Mobile"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,r.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre la configuraci\xf3n base, vaya a la secci\xf3n de\n",(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:"Android Mobile SDK"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Este documento de Flow es un ",(0,r.jsx)(n.strong,{children:"anexo"})," al com\xfan de ",(0,r.jsx)(n.strong,{children:"SDK"}),", ya que esta\nfuncionalidad est\xe1 contenida en el propio componente de SDK."]}),"\n",(0,r.jsxs)(n.p,{children:["Flow es una funcionalidad que conecta la secci\xf3n de ",(0,r.jsx)(n.strong,{children:"Design Studio"})," de\nla ",(0,r.jsx)(n.strong,{children:"Plataforma"})," con el SDK y la implementaci\xf3n que realiza el cliente.\nA trav\xe9s de un identificador de Flow, podr\xe1 lanzar un flujo dise\xf1ado en\nla web, que puede contener de 1 a N pasos de los componentes existentes\nen el SDK."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsx)(n.p,{children:"Antes de integrar este componente se recomienda leer la documentaci\xf3n\nrelativa a:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("a",{href:"ES_Mobile_SDK","data-linked-resource-id":"2605285492","data-linked-resource-version":"11","data-linked-resource-type":"page",children:(0,r.jsx)("strong",{children:(0,r.jsx)("u",{children:"Android Mobile\nSDK"})})})," y seguir las instrucciones indicadas en dicho\ndocumento."]}),"\n",(0,r.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente\nactual en un proyecto ya existente."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-requeridas-para-la-integraci\xf3n",children:"2.1. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["No es necesaria ",(0,r.jsx)(n.strong,{children:"ninguna dependencia extra"})," para utilizar Flow."]}),"\n",(0,r.jsxs)(n.p,{children:["Se ",(0,r.jsx)("u",{children:"deber\xe1n a\xf1adir las dependencias requeridas de cada componente"}),"\nque se quiera lanzar dentro del Flow. Si se quiere lanzar\n",(0,r.jsx)(n.strong,{children:"reconocimiento facial,"})," deber\xe1 ser ",(0,r.jsx)(n.strong,{children:"necesario"})," instalar el\n",(0,r.jsx)(n.strong,{children:"componente de Selphi"}),", y as\xed sucesivamente con el resto de\ncomponentes."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-iniciar-nueva-operaci\xf3n",children:"3. Iniciar nueva operaci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Al iniciar el lanzamiento de una operaci\xf3n de Flow, internamente se\ngenera una nueva operaci\xf3n de manera completamente transparente."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)("u",{children:"No es necesario"})})," realizar una nueva operaci\xf3n con\nanterioridad."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-controladores-disponibles",children:"4. Controladores disponibles"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controlador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FlowController"}),(0,r.jsx)(n.td,{children:"Controlador principal de Flow. Lanzamiento de flujos publicados."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FlowPreviewController"}),(0,r.jsx)(n.td,{children:"Controlador para el lanzamiento de flujos pendientes de publicar (pruebas)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"41-controladores-de-componentes-con-flow",children:"4.1. Controladores de componentes con flow"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Controlador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FSelphiController"}),(0,r.jsx)(n.td,{children:"Reconocimiento facial"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FSelphIDController"}),(0,r.jsx)(n.td,{children:"Reconocimiento documental"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FVoiceController"}),(0,r.jsx)(n.td,{children:"Captura de voz"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FPhingersController"}),(0,r.jsx)(n.td,{children:"Captura de huellas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FNfcController"}),(0,r.jsx)(n.td,{children:"Lectura de NFC"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FQrReaderController"}),(0,r.jsx)(n.td,{children:"Lectura de QR"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FPhacturasReaderController"}),(0,r.jsx)(n.td,{children:"Captura de facturas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FVideoIdController"}),(0,r.jsx)(n.td,{children:"Video Identificaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FVideoCallController"}),(0,r.jsx)(n.td,{children:"Video Asistencia"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-inicializaci\xf3n-del-sdk-con-flow",children:"5. Inicializaci\xf3n del SDK con flow"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n de inicializaci\xf3n del SDK tiene el par\xe1metro ",(0,r.jsx)(n.em,{children:"activateFlow"}),"\npara gestionar su activaci\xf3n:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"val sdkConfig = SdkConfigurationData(\n    ...\n    activateFlow = true,\n    ...\n)\n\nval result = SDKController.initSdk(sdkConfig)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"6-uso-del-componente",children:"6. Uso del componente"}),"\n",(0,r.jsx)(n.h4,{id:"61-lanzamiento-de-un-flujo-publicado",children:"6.1 Lanzamiento de un flujo publicado"}),"\n",(0,r.jsxs)(n.p,{children:["Se usar\xe1 el ",(0,r.jsx)(n.em,{children:"FlowController"})," para lanzar un flujo que el cliente tiene\npublicado en la plataforma:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val flowController = FlowController (\n     FlowConfigurationData(\n            id = "flowId",\n            controllers = listOf(FSelphiController(), FSelphIDController()),\n            customerId = "customerId",\n        ))\n\nviewModelScope.launch {\n     flowController.stateFlow.collect { flowResult ->\n          Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")\n\n          when (flowResult.step?.key) {\n          FlowKeys.EXTERNAL_STEP.name -> {\n               delay(DELAY_EXTERNAL_STEP)\n               flowController.launchNextStep()\n          }\n\n          FlowKeys.SELPHI_COMPONENT.name -> {\n               when (val sdkResult = flowResult.result) {\n                    is SdkResult.Error -> {\n                         Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n                    }\n\n                    is SdkResult.Success -> {\n                         val result = sdkResult.data.getSelphiResult()\n                         Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")\n                    }\n               }\n          }\n\n          FlowKeys.SELPHID_COMPONENT.name -> {\n               when (val sdkResult = flowResult.result) {\n                    is SdkResult.Error -> {\n                         Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n                    }\n\n                    is SdkResult.Success -> {\n                         val result = sdkResult.data.getSelphIDResult()\n                         Napier.d("APP: SelphID OK ${result.documentCaptured}")\n                    }\n               }\n          }\n          }\n\n          if (flowResult.flowFinish) {\n          Napier.d("APP: FLOW FINISH")\n          }\n     }\n}\nviewModelScope.launch {\n     SDKController.launch(flowController)\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"62-lanzamiento-de-un-flujo-pendiente-de-publicar",children:"6.2 Lanzamiento de un flujo pendiente de publicar"}),"\n",(0,r.jsxs)(n.p,{children:["Se usar\xe1 el ",(0,r.jsx)(n.em,{children:"FlowPreviewController"})," para probar un flujo que el cliente\ntiene pendiente de publicar en la plataforma:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'val flowController = FlowPreviewController (\n     FlowConfigurationData(\n            id = "flowId",\n            controllers = listOf(FSelphiController(), FSelphIDController()),\n            customerId = "customerId",\n        ))\n\nviewModelScope.launch {\n     flowController.stateFlow.collect { flowResult ->\n          Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")\n\n          when (flowResult.step?.key) {\n          FlowKeys.EXTERNAL_STEP.name -> {\n               delay(DELAY_EXTERNAL_STEP)\n               flowController.launchNextStep()\n          }\n\n          FlowKeys.SELPHI_COMPONENT.name -> {\n               when (val sdkResult = flowResult.result) {\n                    is SdkResult.Error -> {\n                         Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n                    }\n\n                    is SdkResult.Success -> {\n                         val result = sdkResult.data.getSelphiResult()\n                         Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")\n                    }\n               }\n          }\n\n          FlowKeys.SELPHID_COMPONENT.name -> {\n               when (val sdkResult = flowResult.result) {\n                    is SdkResult.Error -> {\n                         Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n                    }\n\n                    is SdkResult.Success -> {\n                         val result = sdkResult.data.getSelphIDResult()\n                         Napier.d("APP: SelphID OK ${result.documentCaptured}")\n                    }\n               }\n          }\n          }\n\n          if (flowResult.flowFinish) {\n          Napier.d("APP: FLOW FINISH")\n          }\n     }\n}\nviewModelScope.launch {\n     SDKController.launch(flowController)\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"7-recepci\xf3n-del-resultado",children:"7. Recepci\xf3n del resultado"}),"\n",(0,r.jsx)(n.p,{children:"El resultado del flow tendr\xe1 3 campos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"step: Informaci\xf3n del paso del flujo que se ha realizado. Con el\nvalor de \u201ckey\u201d se podr\xe1 identificar el componente ejecutado en el\npaso."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["result: Resultado del paso en formato SdkResult. M\xe1s informaci\xf3n en\nla secci\xf3n de ",(0,r.jsx)("a",{href:"Mobile_SDK#6-retorno-de-resultado",rel:"nofollow",children:"6. Retorno de resultado"})," del Android Mobile SDK."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"flowFinish: Flag que indicar\xe1 si ha terminado el proceso"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"71-recepci\xf3n-de-errores",children:"7.1. Recepci\xf3n de errores"}),"\n",(0,r.jsxs)(n.p,{children:["En la parte del error, dentro de ",(0,r.jsx)(n.em,{children:"SdkResult.Error"})," dispondremos\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"flowResult.step.key"})})," para identificar que componente ha fallado y\nel ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"flowResult.result.error"})})," que contiene el error que ha ocurrido."]}),"\n",(0,r.jsxs)(n.h3,{id:"72-recepci\xf3n-de-ejecuci\xf3n-correcta---data",children:["7.2. Recepci\xf3n de ejecuci\xf3n correcta - ",(0,r.jsx)(n.em,{children:"data"})]}),"\n",(0,r.jsx)(n.p,{children:"En la ejecuci\xf3n correcta de un flujo, se lanzar\xe1n los componentes\ncorrespondientes hasta la finalizaci\xf3n del mismo o hasta obtener un\nerror."}),"\n",(0,r.jsxs)(n.p,{children:["Si el resultado de un paso lanzado es SdkResult.Success, se podr\xe1\nlocalizar, por un lado, la ",(0,r.jsx)(n.em,{children:"key"})," que identifica al componente y por otro\nlado el ",(0,r.jsx)(n.em,{children:"data"})," con el resultado del componente, como es un resultado\ngen\xe9rico, dentro del SDK, se ha creado un conversor para cada tipo de\nresultado. Ej:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'flowController.stateFlow.collect { flowResult ->\n     Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")\n\n     when (flowResult.step?.key) {\n     FlowKeys.EXTERNAL_STEP.name -> {\n          delay(DELAY_EXTERNAL_STEP)\n          flowController.launchNextStep()\n     }\n\n     FlowKeys.SELPHI_COMPONENT.name -> {\n          when (val sdkResult = flowResult.result) {\n               is SdkResult.Error -> {\n                    Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n               }\n\n               is SdkResult.Success -> {\n                    val result = sdkResult.data.getSelphiResult()\n                    Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")\n               }\n          }\n     }\n\n     FlowKeys.SELPHID_COMPONENT.name -> {\n          when (val sdkResult = flowResult.result) {\n               is SdkResult.Error -> {\n                    Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")\n               }\n\n               is SdkResult.Success -> {\n                    val result = sdkResult.data.getSelphIDResult()\n                    Napier.d("APP: SelphID OK ${result.documentCaptured}")\n               }\n          }\n     }\n     }\n\n     if (flowResult.flowFinish) {\n          Napier.d("APP: FLOW FINISH")\n     }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Tras comprobar los resultados, deberemos revisar si el flow ha\nfinalizado o a\xfan quedan pasos, para poder gestionar los siguientes pasos\nfuera del SDK."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'if (flowResult.flowFinish) {\n    Napier.d("APP: FLOW FINISH")\n}\n'})}),"\n",(0,r.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>a});var r=l(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);