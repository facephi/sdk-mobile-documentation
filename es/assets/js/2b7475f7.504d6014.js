"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[1667],{6499:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Mobile_SDK","title":"Primeros Pasos","description":"\xdaltima versi\xf3n disponible","source":"@site/i18n/es/docusaurus-plugin-content-docs-android/version-2.2.X/Mobile_SDK.md","sourceDirName":".","slug":"/Mobile_SDK","permalink":"/sdk-mobile-documentation/es/docs/android/Mobile_SDK","draft":false,"unlisted":false,"tags":[],"version":"2.2.X","frontMatter":{},"sidebar":"sidebar","next":{"title":"Tracking Component","permalink":"/sdk-mobile-documentation/es/docs/android/Tracking_Component"}}');var a=i(4848),s=i(8453);const l={},o="Primeros Pasos",c={},d=[{value:"\xdaltima versi\xf3n disponible",id:"\xfaltima-versi\xf3n-disponible",level:2},{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1. Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n inicial",id:"2-integraci\xf3n-inicial",level:2},{value:"2.1. A\xf1adir repositorio privado",id:"21-a\xf1adir-repositorio-privado",level:3},{value:"2.2. Dependencias requeridas para la integraci\xf3n b\xe1sica",id:"22-dependencias-requeridas-para-la-integraci\xf3n-b\xe1sica",level:3},{value:"3. Inicializaci\xf3n del SDK",id:"3-inicializaci\xf3n-del-sdk",level:2},{value:"3.1. <strong>Inyecci\xf3n de licencias</strong>",id:"31-inyecci\xf3n-de-licencias",level:3},{value:"a. <strong>Obteniendo la licencia a trav\xe9s de un servicio</strong>",id:"a-obteniendo-la-licencia-a-trav\xe9s-de-un-servicio",level:4},{value:"b. <strong>Inyectando la licencia como String</strong>",id:"b-inyectando-la-licencia-como-string",level:4},{value:"3.2. Recepci\xf3n de errores",id:"32-recepci\xf3n-de-errores",level:3},{value:"4. Iniciar nueva operaci\xf3n",id:"4-iniciar-nueva-operaci\xf3n",level:2},{value:"4.1 <strong>Tipos de operaci\xf3n existentes</strong>",id:"41-tipos-de-operaci\xf3n-existentes",level:3},{value:"5. Lanzamiento de componentes",id:"5-lanzamiento-de-componentes",level:2},{value:"6. Retorno de resultado",id:"6-retorno-de-resultado",level:2},{value:"7. Cierre de sesi\xf3n",id:"7-cierre-de-sesi\xf3n",level:2},{value:"8. Controladores auxiliares",id:"8-controladores-auxiliares",level:2},{value:"8.1 Obtenci\xf3n del OperationId",id:"81-obtenci\xf3n-del-operationid",level:3},{value:"8.2 Obtenci\xf3n del OperationType",id:"82-obtenci\xf3n-del-operationtype",level:3},{value:"8.3 Obtenci\xf3n del SessionId",id:"83-obtenci\xf3n-del-sessionid",level:3},{value:"8.4 Obtenci\xf3n del CustomerID",id:"84-obtenci\xf3n-del-customerid",level:3},{value:"8.5 Asignaci\xf3n del CustomerID",id:"85-asignaci\xf3n-del-customerid",level:3},{value:"9. Opciones de depuraci\xf3n y control de errores",id:"9-opciones-de-depuraci\xf3n-y-control-de-errores",level:2},{value:"9.1. Control de errores en las conexiones de Tracking con la plataforma",id:"91-control-de-errores-en-las-conexiones-de-tracking-con-la-plataforma",level:3},{value:"9.2. Activaci\xf3n de Logs de depuraci\xf3n general",id:"92-activaci\xf3n-de-logs-de-depuraci\xf3n-general",level:3},{value:"10. Seguimiento y An\xe1lisis de Eventos en la Aplicaci\xf3n",id:"10-seguimiento-y-an\xe1lisis-de-eventos-en-la-aplicaci\xf3n",level:2}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"primeros-pasos",children:"Primeros Pasos"})}),"\n",(0,a.jsx)(n.h2,{id:"\xfaltima-versi\xf3n-disponible",children:"\xdaltima versi\xf3n disponible"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"2.2.3\n"})}),"\n",(0,a.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,a.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,a.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1. Requisitos m\xednimos"}),"\n",(0,a.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de Android requerida es la siguiente:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["SDK m\xednima (minSdk): ",(0,a.jsx)(n.strong,{children:"23"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["API Version: ",(0,a.jsx)(n.strong,{children:"34"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Kotlin: ",(0,a.jsx)(n.strong,{children:"2.0.21"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Plugin Gradle Android: ",(0,a.jsx)(n.strong,{children:"8.5.2"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"2-integraci\xf3n-inicial",children:"2. Integraci\xf3n inicial"}),"\n",(0,a.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar los componentes\nb\xe1sicos en un proyecto ya existente."}),"\n",(0,a.jsx)(n.h3,{id:"21-a\xf1adir-repositorio-privado",children:"2.1. A\xf1adir repositorio privado"}),"\n",(0,a.jsxs)(n.p,{children:["Por cuestiones de seguridad y mantenimiento, los nuevos componentes de\nla ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"SDKMobile"})})," se almacenan en unos repositorios privados que\nrequieren de unas credenciales espec\xedficas para poder acceder a ellos.\nEsas ",(0,a.jsx)("u",{children:"credenciales"})," deber\xe1 obtenerlas a trav\xe9s del ",(0,a.jsx)(n.em,{children:"equipo de\nsoporte"})," de ",(0,a.jsx)(n.strong,{children:"Facephi"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Una vez obtenidas las credenciales, se deber\xe1 incluir el siguiente\nfragmento de c\xf3digo para configurar el repositorio maven en el\n",(0,a.jsx)(n.strong,{children:"Gradle"})," de tu proyecto, o en el fichero ",(0,a.jsx)(n.strong,{children:"settings.gradle"})," del\nmismo. Se recomienda incluirlo tras ",(0,a.jsx)(n.em,{children:"mavenCentral()"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'maven {\n    Properties props = new Properties()\n    def propsFile = new File(\'local.properties\')\n    if(propsFile.exists()){\n        props.load(new FileInputStream(propsFile))\n    }\n    name="external"\n    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")\n    credentials {\n        username = props["artifactory.user"] ?: System.getenv("USERNAME_ARTIFACTORY")\n        password = props["artifactory.token"] ?: System.getenv("TOKEN_ARTIFACTORY")\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Para que el proyecto recupere correctamente las dependencias, se deber\xe1\ntener las credenciales (Usuario y Token) configuradas correctamente"}),"\n",(0,a.jsx)(n.p,{children:"Hay varias formas de configurar las credenciales de acceso al\nrepositorio:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Como variables de entorno con el siguiente nombre. Por ejemplo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"export USERNAME_ARTIFACTORY=YOUR_CREDENTIALS_USERNAME\nexport TOKEN_ARTIFACTORY=YOUR_CREDENTIALS_TOKEN\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Si las dependencia no las reconoce al sincronizar"}),", se deben\nincluir a trav\xe9s de variables de entorno en el archivo:"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"~/.zshrc"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Incluidos en el fichero ",(0,a.jsx)(n.em,{children:"local.properties"})," con la siguiente\nestructura:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"artifactory.user=YOUR_CREDENTIALS_USERNAME\nartifactory.token=YOUR_CREDENTIALS_TOKEN\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"22-dependencias-requeridas-para-la-integraci\xf3n-b\xe1sica",children:"2.2. Dependencias requeridas para la integraci\xf3n b\xe1sica"}),"\n",(0,a.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,a.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Actualmente las librer\xedas de FacePhi se distribuyen de forma remota a\ntrav\xe9s de diferentes gestores de dependencias."}),"\n",(0,a.jsxs)(n.p,{children:["La dependencia base ",(0,a.jsx)(n.strong,{children:"obligatorias"})," para el uso del SDK es:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'implementation "com.facephi.androidsdk:sdk:$sdk_version"\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"3-inicializaci\xf3n-del-sdk",children:"3. Inicializaci\xf3n del SDK"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Debe evitarse inicializar un controlador que no vaya a usarse"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"El SDK funciona a trav\xe9s de un controlador principal (SDKController) que\ndebe inicializarse correctamente para poder hacer uso del resto de\nfuncionalidad. Los pasos a seguir en la inicializaci\xf3n son:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Incluir el objeto Application a trav\xe9s de la clase SdkApplication."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Decidir si la licencia se incluir\xe1 a trav\xe9s de un ",(0,a.jsx)(n.em,{children:"String"})," o con un ",(0,a.jsx)(n.em,{children:"servicio de licenciamiento remoto"})," (consultar ",(0,a.jsx)(n.strong,{children:"apartado 3.1"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["El controlador ",(0,a.jsx)(n.em,{children:"TrackingController"})," en caso de querer conectar con la plataforma."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.strong,{children:"punto 3"})," es opcional, y requerir\xeda usar el componente de Tracking\n(m\xe1s informaci\xf3n acerca de este m\xf3dulo en su propia documentaci\xf3n)."]}),"\n",(0,a.jsxs)(n.p,{children:["Un ejemplo de inicializaci\xf3n sin ",(0,a.jsx)(n.em,{children:"TrackingController"})," ser\xeda el\nsiguiente:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val sdkConfig = SdkConfigurationData(\n    sdkApplication = SdkApplication(application),\n    licensing = LicensingOffline("LICENSE")\n)\n\nval result = SDKController.initSdk(sdkConfig)\n\nwhen (result) {\n  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")\n  is SdkResult.Error -> Napier.d(\n          "APP: INIT SDK: KO - ${result.error.name}"\n        )\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Un ejemplo de inicializaci\xf3n con ",(0,a.jsx)(n.em,{children:"TrackingController"})," ser\xeda el\nsiguiente:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val sdkConfig = SdkConfigurationData(\n    sdkApplication = SdkApplication(application),\n    licensing = LicensingOffline("LICENSE"),\n    trackingController = TrackingController(),\n)\n\nval result = SDKController.initSdk(sdkConfig)\n\nwhen (result) {\n  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")\n  is SdkResult.Error -> Napier.d(\n          "APP: INIT SDK: KO - ${result.error.name}"\n        )\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"31-inyecci\xf3n-de-licencias",children:["3.1. ",(0,a.jsx)(n.strong,{children:"Inyecci\xf3n de licencias"})]}),"\n",(0,a.jsx)(n.p,{children:"Como se ha comentado previamente, actualmente existen dos formas de\ninyectar la licencia:"}),"\n",(0,a.jsxs)(n.h4,{id:"a-obteniendo-la-licencia-a-trav\xe9s-de-un-servicio",children:["a. ",(0,a.jsx)(n.strong,{children:"Obteniendo la licencia a trav\xe9s de un servicio"})]}),"\n",(0,a.jsx)(n.p,{children:"A trav\xe9s de un servicio que simplemente requerir\xe1 una URL y un API-KEY\ncomo identificador. Esto evitar\xeda problemas a la hora de manipular la\nlicencia, as\xed como la constante sustituci\xf3n de dichas licencias a la\nhora de surgir alg\xfan problema con ella (malformaci\xf3n o modificaci\xf3n\nindebida, expiraci\xf3n de la licencia...)"}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de implementaci\xf3n en Kotlin:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val sdkConfig = SdkConfigurationData(\n    sdkApplication = SdkApplication(application),\n    licensing = LicensingOnline(EnvironmentLicensingData(\n            apiKey = "...")\n      )),\n)\n\nval result = SDKController.initSdk(sdkConfig)\n\nwhen (result) {\n  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")\n  is SdkResult.Error -> Napier.d(\n          "APP: INIT SDK: KO - ${result.error.name}"\n        )\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de implementaci\xf3n en Java:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SDKController.INSTANCE.initSdk(\n    new SdkApplication(activity.getApplication()),\n    new LicensingOnline(new EnvironmentLicensingData(\n      apiKey = "...")),\n    sdkResult ->\n    {\n      if (sdkResult instanceof SdkResult.Success) {\n        Napier.d("APP: INIT SDK: OK")\n      } else if (sdkResult instanceof SdkResult.Error) {\n        Napier.d("APP: INIT SDK: KO - ${it.error}")\n      }\n    }\n  );\n'})}),"\n",(0,a.jsxs)(n.h4,{id:"b-inyectando-la-licencia-como-string",children:["b. ",(0,a.jsx)(n.strong,{children:"Inyectando la licencia como String"})]}),"\n",(0,a.jsx)(n.p,{children:"Se puede asignar la licencia directamente como un String, de la\nsiguiente manera:"}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de implementaci\xf3n en Kotlin:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val sdkConfig = SdkConfigurationData(\n    sdkApplication = SdkApplication(application),\n    licensing = LicensingOffline("LICENSE"),\n)\n\nval result = SDKController.initSdk(sdkConfig)\n\nwhen (result) {\n  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")\n  is SdkResult.Error -> Napier.d(\n          "APP: INIT SDK: KO - ${result.error.name}"\n        )\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de implementaci\xf3n en Java:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SDKController.INSTANCE.initSdk(\n  new SdkApplication(activity.getApplication()),\n  new LicensingOffline("LICENSE"),\n  sdkResult ->\n  {\n    if (sdkResult instanceof SdkResult.Success) {\n      Timber.d("APP: INIT SDK: OK")\n    } else if (sdkResult instanceof SdkResult.Error) {\n      Timber.d("APP: INIT SDK: KO - ${it.error}")\n    }\n  }\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"32-recepci\xf3n-de-errores",children:"3.2. Recepci\xf3n de errores"}),"\n",(0,a.jsx)(n.p,{children:"En la parte del error, dispondremos de la clase SdkError."}),"\n",(0,a.jsx)(n.p,{children:"Listado de errores:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"EMPTY_LICENSE: Licencia vac\xeda"}),"\n",(0,a.jsx)(n.li,{children:"INIT_AI_MODELS(error: String): Error obtenido en el servicio de descarga de modelos"}),"\n",(0,a.jsx)(n.li,{children:"INIT_FLOW (error: String): Error obtenido en el servicio de descarga de flow"}),"\n",(0,a.jsx)(n.li,{children:"LICENSE_CHECKER_ERROR (error: String): Error obtenido al verificar si la licencia es correcta"}),"\n",(0,a.jsx)(n.li,{children:"LICENSING_ERROR (error: String): Error obtenido en el servicio de descarga de licencias"}),"\n",(0,a.jsx)(n.li,{children:"NETWORK_CONNECTION_ERROR: Error de conexi\xf3n a internet"}),"\n",(0,a.jsx)(n.li,{children:"TRACKING_ERROR (error: String): Error obtenido al iniciar el controlador de tracking"}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"4-iniciar-nueva-operaci\xf3n",children:"4. Iniciar nueva operaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cada vez que se desee iniciar el flujo de alguna operaci\xf3n nueva\n(ejemplos de operaciones ser\xedan: ",(0,a.jsx)(n.em,{children:"onboarding, authentication,\nvideoCall"}),",...) es esencial indicarle al ",(0,a.jsx)(n.strong,{children:"SDKController"})," que \xe9sta va a\ncomenzar, y as\xed la SDK sabr\xe1 que las pr\xf3ximas llamadas de\n",(0,a.jsx)(n.strong,{children:"Componentes"})," (tambi\xe9n llamados ",(0,a.jsx)(n.strong,{children:"Steps"}),") formar\xe1n parte de dicha\noperaci\xf3n."]}),"\n",(0,a.jsxs)(n.p,{children:["Al iniciar un proceso o flujo, ",(0,a.jsx)(n.strong,{children:"siempre"})," se deber\xe1 realizar la llamada\nal m\xe9todo ",(0,a.jsx)(n.strong,{children:"newOperation"})]}),"\n",(0,a.jsx)(n.p,{children:"Este m\xe9todo tiene 3 par\xe1metros de entrada:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"operationType"}),": Indica si se va a hacer un proceso de ONBOARDING\no de AUTHENTICATION 2."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"customerId"}),": Id \xfanico del usuario si se tiene (controlado a nivel\nde aplicaci\xf3n)"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Este par\xe1metro aparecer\xe1 reflejado para cada operaci\xf3n en la\nplataforma."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"steps"}),": Lista de pasos de la operaci\xf3n si se han definido\npreviamente"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Hay 2 maneras de realizar este inicio de operaci\xf3n, dependiendo de si\n",(0,a.jsx)(n.strong,{children:"se conocen los pasos"})," que formar\xe1n el flujo del proceso de registro o\nautenticaci\xf3n (en caso de que los componentes se ejecuten de forma\nsecuencial y siempre de la misma forma) o, en caso contrario, de que el\nflujo ",(0,a.jsx)(n.strong,{children:"no est\xe9 definido"})," y sea desconocido (por ejemplo, el cliente\nfinal es el que decide el orden de ejecuci\xf3n de los componentes)."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Flujo ",(0,a.jsx)(n.strong,{children:"conocido"})," (aparecer\xe1 la operaci\xf3n ",(0,a.jsx)(n.em,{children:"trackeada"})," en la\nplataforma con todos los pasos de la lista)."]}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de implementaci\xf3n Kotlin:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val result = SDKController.newOperation(\n        operationType = OperationType.ONBOARDING,\n        customerId = "customer_id",\n        steps = listOf(Step.SELPHI_COMPONENT, Step.SELPHID_COMPONENT))\nwhen (result) {\n    is SdkResult.Success -> {\n        Timber.d("APP: NEW OPERATION OK")\n    }\n    is SdkResult.Error -> {\n        Timber.d("APP: NEW OPERATION ERROR: ${result.error.name}")\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de implementaci\xf3n Java:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:' SDKController.INSTANCE.newOperation(\n        OperationType.ONBOARDING,\n        "customer_id",\n        [Step.SELPHI_COMPONENT, Step.SELPHID_COMPONENT]\n        ){\n          if (sdkResult instanceof SdkResult.Success) {\n            Napier.d("APP: NEW OPERATION: OK")\n          } else if (sdkResult instanceof SdkResult.Error) {\n            Napier.d("APP: NEW OPERATION: KO - ${it.error}")\n          }\n        }\n  );\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Flujo ",(0,a.jsx)(n.strong,{children:"desconocido"})," (aparecer\xe1 la operaci\xf3n ",(0,a.jsx)(n.em,{children:"trackeada"})," en la\nplataforma con puntos suspensivos). Ejemplo de implementaci\xf3n\nKotlin:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val result = SDKController.newOperation(\n        operationType = OperationType.ONBOARDING,\n        customerId = "customer_id",\nwhen (result) {\n    is SdkResult.Success -> {\n        Timber.d("APP: NEW OPERATION OK")\n    }\n    is SdkResult.Error -> {\n        Timber.d("APP: NEW OPERATION ERROR: ${result.error.name}")\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de implementaci\xf3n Java:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:' SDKController.INSTANCE.newOperation(\n        OperationType.ONBOARDING,\n        "customer_id"\n        ){\n          if (sdkResult instanceof SdkResult.Success) {\n            Napier.d("APP: NEW OPERATION: OK")\n          } else if (sdkResult instanceof SdkResult.Error) {\n            Napier.d("APP: NEW OPERATION: KO - ${it.error}")\n          }\n        }\n  );\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"sdkResult"})," \u2192 Contiene en data la informaci\xf3n de la operaci\xf3n creada."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Una vez creada la operaci\xf3n"})," se podr\xe1n ejecutar los componentes de la\nSDK asociados a esta operaci\xf3n. Consultar la documentaci\xf3n espec\xedfica de\ncada componente para saber c\xf3mo hacerlo."]}),"\n",(0,a.jsxs)(n.h3,{id:"41-tipos-de-operaci\xf3n-existentes",children:["4.1 ",(0,a.jsx)(n.strong,{children:"Tipos de operaci\xf3n existentes"})]}),"\n",(0,a.jsxs)(n.p,{children:["En la actualidad, existen las siguientes operaciones, durante las cuales\nse hacen uso de unos determinados ",(0,a.jsx)(n.strong,{children:"Componentes (STEPS)."})]}),"\n",(0,a.jsxs)(n.p,{children:["A continuaci\xf3n se muestra una tabla con la relaci\xf3n entre ",(0,a.jsx)(n.em,{children:"operaciones"}),"\ny ",(0,a.jsx)(n.em,{children:"steps"}),":"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Operaci\xf3n (OperationType)"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Componente (Step)"})}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ONBOARDING"}),(0,a.jsxs)(n.td,{children:["SELPHI_COMPONENT",(0,a.jsx)("br",{}),"SELPHID_COMPONENT"]}),(0,a.jsxs)(n.td,{children:["- Validaci\xf3n facial de un selfie contra la cara de un documento ",(0,a.jsx)("br",{})," - Extracci\xf3n del OCR del documento ",(0,a.jsx)("br",{})," - Detecci\xf3n de vivacidad"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"AUTHENTICATION"}),(0,a.jsx)(n.td,{children:"SELPHI_COMPONENT"}),(0,a.jsxs)(n.td,{children:["- Validaci\xf3n facial mediante plantillas ",(0,a.jsx)("br",{})," - Detecci\xf3n de vivacidad"]})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Esta lista se ir\xe1 ampliando en pr\xf3ximas actualizaciones de la SDK, seg\xfan\nvayan apareciendo nuevos componentes y casos de uso."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"5-lanzamiento-de-componentes",children:"5. Lanzamiento de componentes"}),"\n",(0,a.jsx)(n.p,{children:"La funcionalidad del SDK se divide en diferentes componentes con\ncontroladores particulares. Estos controladores se \u201clanzar\xe1n\u201d desde el\ncontrolador general."}),"\n",(0,a.jsxs)(n.p,{children:["Una vez creada la ",(0,a.jsx)(n.strong,{children:"nueva operaci\xf3n"})," (",(0,a.jsx)(n.strong,{children:"apartado 4"}),"), se podr\xe1n lanzar\nlos diferentes controladores de la SDK. Para consultar esta informaci\xf3n\nse deber\xe1 acceder a la ",(0,a.jsx)(n.strong,{children:"documentaci\xf3n de cada uno de los componentes\nespec\xedficos"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de lanzamiento Kotlin:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"val result = SDKController.launch(XController(ConfigurationData()))\nwhen (result) {\n    is SdkResult.Success -> {\n        //Result OK\n        it.data\n    }\n    is SdkResult.Error -> {\n        //Result KO\n        it.error.name\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de lanzamiento Java:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"SDKController.INSTANCE.launch(\n    new XController(new ConfigurationData()) {\n        if (sdkResult instanceof SdkResult.Success) {\n            //Result OK\n            it.data\n          } else if (sdkResult instanceof SdkResult.Error) {\n            //Result KO\n            it.error.name\n          }\n    }\n)\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"6-retorno-de-resultado",children:"6. Retorno de resultado"}),"\n",(0,a.jsxs)(n.p,{children:["El resultado de cada componente ser\xe1 devuelto a trav\xe9s de la SDK\nmanteniendo siempre la misma estructura a trav\xe9s de la clase\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"SdkResult"})})," cuya clase es una Sealed Class que puede tener 2\nposibles estados:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"SdkResult.Success: Indica que la operaci\xf3n ha finalizado\ncorrectamete y en su interior tiene:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"data:"})})," Contiene el tipo de dato que sea necesario seg\xfan el\nproceso/componente lanzado."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"SdkResult.Error"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"error:"})})," Contiene el tipo de error que sea necesario seg\xfan\nel proceso/componente lanzado."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"En la documentaci\xf3n de cada componente espec\xedfico se desglosar\xe1n los\ndiferentes campos que puede devolver este objeto"}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo de uso:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'when (result) {\n    is SdkResult.Success -> {\n        Napier.d("Selphi: OK")\n        // SelphiResult:\n        // result.data.bestImage\n    }\n\n    is SdkResult.Error -> Napier.d("Selphi: KO - ${result.error.name}")\n}\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"7-cierre-de-sesi\xf3n",children:"7. Cierre de sesi\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Antes de que la aplicaci\xf3n se vaya a destruir"}),", se deber\xe1 cerrar la\nsesi\xf3n de la SDK para as\xed avisar a la plataforma de su finalizaci\xf3n.\nPara ello, se ejecuta la siguiente l\xednea de c\xf3digo:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"SDKController.closeSession()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Si se realiza un cierre de sesi\xf3n, no se van a poder lanzar\ncontroladores hasta que se vuelva a iniciar una nueva operaci\xf3n."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"8-controladores-auxiliares",children:"8. Controladores auxiliares"}),"\n",(0,a.jsx)(n.p,{children:"En este apartado se incluyen otros controladores y operaciones\nauxiliares, algunos de ellos opcionales, y que pueden ser necesarios\npara la correcta finalizaci\xf3n del flujo."}),"\n",(0,a.jsxs)(n.p,{children:["Estos campos son necesarios para la comunicaci\xf3n con el servicio de\n",(0,a.jsx)(n.strong,{children:"Facephi"}),", en caso de querer realizar cualquier ",(0,a.jsx)(n.strong,{children:"verificaci\xf3n"})," y de\ndesear realizar el ",(0,a.jsx)(n.em,{children:"tracking"})," de una operaci\xf3n determinada."]}),"\n",(0,a.jsx)(n.h3,{id:"81-obtenci\xf3n-del-operationid",children:"8.1 Obtenci\xf3n del OperationId"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(GetOperationIdController())\nNapier.d("Operation ID ${result}")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"82-obtenci\xf3n-del-operationtype",children:"8.2 Obtenci\xf3n del OperationType"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(GetOperationTypeController())\nNapier.d("Operation type ${result}")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"83-obtenci\xf3n-del-sessionid",children:"8.3 Obtenci\xf3n del SessionId"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(GetSessionIdController())\nNapier.d("Session ID ${result}")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"84-obtenci\xf3n-del-customerid",children:"8.4 Obtenci\xf3n del CustomerID"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'val result = SDKController.launch(GetCustomerIdController())\nNapier.d("Customer ID ${result}")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"85-asignaci\xf3n-del-customerid",children:"8.5 Asignaci\xf3n del CustomerID"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SDKController.launch(CustomerIdController("CustomerId"))\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"9-opciones-de-depuraci\xf3n-y-control-de-errores",children:"9. Opciones de depuraci\xf3n y control de errores"}),"\n",(0,a.jsx)(n.p,{children:"Existen ciertas opciones en el SDK que permiten un aumento en los logs\nde depuraci\xf3n para poder comprobar que todo funciona de manera correcta."}),"\n",(0,a.jsx)(n.h3,{id:"91-control-de-errores-en-las-conexiones-de-tracking-con-la-plataforma",children:"9.1. Control de errores en las conexiones de Tracking con la plataforma"}),"\n",(0,a.jsx)(n.p,{children:"Una vez el SDK se haya iniciado correctamente, se pueden aplicar ciertos\najustes para tener una mayor informaci\xf3n acerca de los posibles errores\nen tracking, se puede realizar un seguimiento a trav\xe9s de este\nlanzamiento de controlador:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SDKController.launch(TrackingErrorController {\n    Napier.d("Tracking Error: ${it.name}")\n})\n'})}),"\n",(0,a.jsx)(n.h3,{id:"92-activaci\xf3n-de-logs-de-depuraci\xf3n-general",children:"9.2. Activaci\xf3n de Logs de depuraci\xf3n general"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:" if (BuildConfig.DEBUG) {\n  SDKController.enableDebugMode()\n }\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"10-seguimiento-y-an\xe1lisis-de-eventos-en-la-aplicaci\xf3n",children:"10. Seguimiento y An\xe1lisis de Eventos en la Aplicaci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"La funcionalidad de eventos permite registrar e interpretar interacciones clave dentro de la aplicaci\xf3n, como cambios de pantalla y acciones del usuario, facilitando el an\xe1lisis del comportamiento en tiempo real."}),"\n",(0,a.jsx)(n.p,{children:"Cada evento se env\xeda con un sello de tiempo, tipo y detalle espec\xedfico, proporcionando un seguimiento estructurado y optimizando la experiencia del usuario con datos precisos y accionables."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:' SDKController.getAnalyticsEvents { time, componentName, eventType, info ->\n            Log.i { "EVENTS", "*** $time - ${componentName.name} -" +\n                " ${eventType.name} -  ${info ?: ""} " }\n        }\n'})}),"\n",(0,a.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);