"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[5963],{9526:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=i(4848),r=i(8453);const s={},o="Core Component",l={id:"Core_Component",title:"Core Component",description:"1. Introducci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs-cordova/version-1.4.0/Core_Component.md",sourceDirName:".",slug:"/Core_Component",permalink:"/sdk-mobile-documentation/es/docs/cordova/1.4.0/Core_Component",draft:!1,unlisted:!1,tags:[],version:"1.4.0",frontMatter:{},sidebar:"sidebar",previous:{title:"Primeros pasos",permalink:"/sdk-mobile-documentation/es/docs/cordova/1.4.0/Mobile_SDK"},next:{title:"Selphi Component",permalink:"/sdk-mobile-documentation/es/docs/cordova/1.4.0/Selphi_Component"}},c={},d=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:2},{value:"1.2 Versi\xf3n del plugin",id:"12-versi\xf3n-del-plugin",level:3},{value:"2. Inicializaci\xf3n de la sesi\xf3n",id:"2-inicializaci\xf3n-de-la-sesi\xf3n",level:2},{value:"2.1 Inicializaci\xf3n",id:"21-inicializaci\xf3n",level:3},{value:"2.2 Configuraci\xf3n de inicio de sesi\xf3n",id:"22-configuraci\xf3n-de-inicio-de-sesi\xf3n",level:3},{value:"3. Inicializaci\xf3n de la operaci\xf3n",id:"3-inicializaci\xf3n-de-la-operaci\xf3n",level:2},{value:"4. Lanzamiento de componentes",id:"4-lanzamiento-de-componentes",level:2},{value:"5. Retorno del Resultado",id:"5-retorno-del-resultado",level:2},{value:"6. Cierre de sesi\xf3n",id:"6-cierre-de-sesi\xf3n",level:2},{value:"7. M\xe9todo ExtraData",id:"7-m\xe9todo-extradata",level:2}];function t(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"core-component",children:"Core Component"}),"\n",(0,a.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"SDK Mobile es un conjunto de librer\xedas (Componentes) que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deber\xe1 realizar la instalaci\xf3n de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan a\xf1adir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto."}),"\n",(0,a.jsx)(n.h2,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,a.jsx)(n.p,{children:"La versi\xf3n m\xednima nativa (Android y iOS) de la SDK son las siguientes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Versi\xf3n m\xednima Android: 23 - JDK 11"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Versi\xf3n m\xednima iOS: 13"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"En cuanto a la arquitectura del dispositivo m\xf3vil:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"armeabi-v7, x86, arm64 y x64"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"12-versi\xf3n-del-plugin",children:"1.2 Versi\xf3n del plugin"}),"\n",(0,a.jsx)(n.p,{children:"La versi\xf3n del plugin actual se puede consultar de la siguiente forma:"}),"\n",(0,a.jsx)(n.p,{children:"Buscamos el archivo config.xml en la ra\xedz del plugin."}),"\n",(0,a.jsx)(n.p,{children:"En el KEY/TAG version se indica la versi\xf3n."}),"\n",(0,a.jsx)(n.h2,{id:"2-inicializaci\xf3n-de-la-sesi\xf3n",children:"2. Inicializaci\xf3n de la sesi\xf3n"}),"\n",(0,a.jsx)(n.h3,{id:"21-inicializaci\xf3n",children:"2.1 Inicializaci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Antes de poder utilizar cualquier componente, se deber\xe1 inicializar la sesi\xf3n de la SDK. Esta inicializaci\xf3n se debe hacer lo m\xe1s pronto posible, preferentemente al inicio de la aplicaci\xf3n. Al mismo tiempo, una vez terminadas todas las operaciones con la SDK Mobile, deber\xe1 cerrarse igualmente la sesi\xf3n (apartado 7)"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"[!WARNING]\nEste controlador (SDKController) es el que se va a utilizar para lanzar todas las funciones del SDK."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Se puede inicializar el componente actual de dos formas, dependiendo de c\xf3mo desees inyectar la licencia."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"[!NOTE]\nEl nuevo m\xe9todo de licenciamiento permite gestionar las licencias de forma transparente para el integrador. La licencia se puede inyectar de dos maneras:"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"a. Obteniendo la licencia a trav\xe9s de un servicio mediante una URL y API-KEY"}),"\n",(0,a.jsx)(n.li,{children:"b. Inyectando la licencia directamente como String"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"En ambos casos, el resultado se devolver\xe1 por medio de una Promise, la cual contiene un objeto de la clase CoreResult. Se dar\xe1 m\xe1s informaci\xf3n sobre c\xf3mo funciona esta clase en el apartado 5."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"a. Inyectando la licencia como String"}),"\nDe esta forma se evitan problemas relacionados con la conexi\xf3n y la petici\xf3n al servicio de licencia. Se puede asignar la licencia directamente como un String de la siguiente manera:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'function callInitSession()\n{\n    if (typeof facephi.plugins.sdkcore === "undefined") {\n        showErrorUI("Cordova Core Sdk is not installed...");\n        return;\n    }\n    console.log(\'callInitSession started...\');\n    const STRING_LICENSE = "<insert-your-license-here>";\n    //const apiKey   = window.cordova.platformId.toUpperCase() == "IOS" ? LICENSE_APIKEY_IOS : LICENSE_APIKEY_ANDROID\n    facephi.plugins.sdkcore.launchInitSession({\n        "license": STRING_LICENSE,\n        //"licenseUrl": LICENSE_URL,\n        //"licenseApiKey": apiKey,\n        "enableTracking": true,\n        "enableBehavior": false\n    })\n    .then(\n        (result) => console.log(result),\n        (err) => console.log(err),\n    )\n    .finally (() =>\n    {\n        console.log("callInitSession finished...");\n    });\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"b. Obteniendo la licencia a trav\xe9s de un servicio."}),"\nA trav\xe9s de un servicio que simplemente requerir\xe1 una URL y un API-KEY. Esto evitar\xeda problemas a la hora de manipular la licencia, adem\xe1s de ahorrarse los problemas relacionados con el mantenimiento de estas (malformaci\xf3n o modificaci\xf3n indebida, expiraci\xf3n de la licencia\u2026)"]}),"\n",(0,a.jsx)(n.p,{children:"Para hacer uso de esta funcionalidad:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'function callInitSession()\n{\n    if (typeof facephi.plugins.sdkcore === "undefined") {\n        showErrorUI("Cordova Core Sdk is not installed...");\n        return;\n    }\n    console.log(\'callInitSession started...\');\n    //const STRING_LICENSE = "<insert-your-license-here>";\n    //const apiKey = window.cordova.platformId.toUpperCase() == "IOS" ? LICENSE_APIKEY_IOS : LICENSE_APIKEY_ANDROID\n    facephi.plugins.sdkcore.launchInitSession({\n        //"license": STRING_LICENSE,\n        "licenseUrl": "https://***.***.pro",\n        "licenseApiKey": "<enter_your_apikey_here>",\n        "enableTracking": true,\n        "enableBehavior": false\n    })\n    .then(\n        (result) => console.log(result),\n        (err) => console.log(err),\n    )\n    .finally (() =>\n    {\n        console.log("callInitSession finished...");\n    });\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"22-configuraci\xf3n-de-inicio-de-sesi\xf3n",children:"2.2 Configuraci\xf3n de inicio de sesi\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Como se ha visto en el fragmento de c\xf3digo del apartado anterior, existe una clase llamada SdkCoreInitConfig que permite inicializar la sesi\xf3n de forma personalizada. A continuaci\xf3n se comentan las propiedades que contiene dicha clase."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"license (string)\nPermite establecer la licencia de los componentes. Esta licencia deber\xe1 ser provista por Facephi."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'license: "valid license\u201c\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"licenseUrl (string)\nEstablece la url donde el componente Core valida la licencia de forma remota. Este endpoint deber\xe1 ser provisto por Facephi."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'licenseUrl: "https://***.***.pro"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"licenseApiKey (string)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Establece el apikey que se env\xeda para obtener la licencia del servicio."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'licenseApiKey: "valid ApiKey"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"enableTracking (boolean)\nHabilita o deshabilita el uso del componente de tracking. Esto permite ver la informaci\xf3n de lo que hace el cliente en la plataforma de Facephi.  Este componente funciona en background mientras se ejecutan el resto de componentes instalados, y analiza el comportamiento del usuario durante el proceso actual."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"enableTracking: true\n"})}),"\n",(0,a.jsx)(n.p,{children:"El resultado ser\xe1 devuelto por medio de una Promise que contiene un objeto de la clase SdkCoreResult. M\xe1s informaci\xf3n sobre c\xf3mo funciona esta clase se a\xf1adir\xe1 en el apartado 6."}),"\n",(0,a.jsx)(n.h2,{id:"3-inicializaci\xf3n-de-la-operaci\xf3n",children:"3. Inicializaci\xf3n de la operaci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Cada vez que se desee iniciar el flujo de alguna operaci\xf3n nueva (ejemplos de operaciones ser\xedan: onboarding, authentication,\u2026) es esencial indicarle al SDKController que \xe9sta va a comenzar, y as\xed la SDK sabr\xe1 que las pr\xf3ximas llamadas de Componentes (tambi\xe9n llamados Steps) formar\xe1n parte de dicha operaci\xf3n. Esto es necesario para trackear a la plataforma la informaci\xf3n global de esta operaci\xf3n de forma satisfactoria."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"[!WARNING]\nAl iniciar un proceso o flujo, siempre se deber\xe1 realizar la llamada al m\xe9todo newOperation"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Este m\xe9todo tiene 2 par\xe1metros de entrada:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"operationType"}),": Indica si se va a hacer un proceso de ONBOARDING o de AUTHENTICATION"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"customerId"}),": Id \xfanico del usuario si se tiene (controlado a nivel de aplicaci\xf3n)"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Para poder ejecutar el m\xe9todo launchInitOperation, la llamada debe realizarse en la clase SdkMobileCore como se especifica a continuaci\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'function callInitOperation()\n{\n    if (typeof facephi.plugins.sdkcore === "undefined") {\n        showErrorUI("Cordova Core Sdk is not installed...");\n        return;\n    }\n    console.log(\'callInitOperation started...\');\n    facephi.plugins.sdkcore.launchInitOperation({\n        "customerId": "cordoba@facephi.com",\n        "type": SdkMobileOperationType.ONBOARDING\n    })\n    .then(\n        (result) => console.log(result),\n        (err) => console.log(err),\n    )\n    .finally (() =>\n    {\n        console.log("callInitOperation finished...");\n    });\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"4-lanzamiento-de-componentes",children:"4. Lanzamiento de componentes"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"[!NOTE]\nUna vez creada la nueva operaci\xf3n, se podr\xe1n lanzar los diferentes controladores de los componentes instalados en la SDK. Para consultar esta informaci\xf3n se deber\xe1 acceder a la documentaci\xf3n de cada uno de los componentes espec\xedficos."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"5-retorno-del-resultado",children:"5. Retorno del Resultado"}),"\n",(0,a.jsx)(n.p,{children:"El resultado de cada componente ser\xe1 devuelto a trav\xe9s de la SDK manteniendo siempre la misma estructura:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SdkCoreResult {\n      finishStatus: string;\n      finishStatusDescription?: string;\n      errorType: string;\n      errorMessage?: string;\n      tokenized?: string;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Los par\xe1metros recibidos son los siguientes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"finishStatus"}),": Devuelve el diagn\xf3stico global de la operaci\xf3n. Los valores posibles para el tipo de excepci\xf3n son:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SdkExceptionType.Ok"}),": La operaci\xf3n ha finalizado satisfactoriamente."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SdkExceptionType.Error"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el enumerado errorType y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad errorMessage."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"finishStatusDescription"}),": Devuelve una descripci\xf3n global de la operaci\xf3n. Par\xe1metro opcional."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"errorType"}),": Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el par\xe1metro finishStatus con el valor Error). Se definen en la clase SdkErrorType. Los valores que puede tener son los siguientes:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"UnknownError"}),". Error no gestionado."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NoError"}),": No ha ocurrido ning\xfan error. El proceso puede continuar."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"CameraPermissionDenied"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso a la c\xe1mara."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"HardwareError"}),": Excepci\xf3n que surge cuando existe alg\xfan problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ExtractionLicenseError"}),": Excepci\xf3n que ocurre cuando ha habido un problema de licencias en el servidor."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Excepci\xf3n que ocurre durante la captura de frames por parte de la c\xe1mara."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ControlNotInitializedError"}),": El configurador del widget no ha sido inicializado."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problema surgido durante la configuraci\xf3n del widget."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"CancelByUser"}),": Excepci\xf3n que se produce cuando el usuario para la extracci\xf3n de forma manual."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"TimeOu"}),"t",":Excepci","\xf3n que se produce cuando transcurre un tiempo m\xe1ximo sin conseguir finalizar la extracci\xf3n con \xe9xito."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"InitProccessError"}),": Excepci\xf3n que se produce cuando el sdk no puede procesar las imagenes capturadas."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NfcError"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso al nfc."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NetworkConnection"}),": Excepci\xf3n que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"TokenError"}),": Excepci\xf3n que se produce cuando se pasa por par\xe1metro un token no v\xe1lido."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"InitSessionError"}),": Excepci\xf3n que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al ",(0,a.jsx)(n.code,{children:"SdkCore"})," al ppio de llamar a cualquier otro componente."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ComponentControllerError"}),": Excepci\xf3n que se produce cuando no se puede instanciar el componente."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"errorMessage"}),": Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"tokenized"}),": Par\xe1metro optional. S\xf3lo ser\xe1 visible si el m\xe9todo getExtraData es llamado. El plugin retornar\xe1 un valor en formato string. M\xe1s informaci\xf3n en el apartado 7."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"data"}),": Par\xe1metro optional."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"6-cierre-de-sesi\xf3n",children:"6. Cierre de sesi\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Antes de que la aplicaci\xf3n se vaya a destruir, se deber\xe1 cerrar la sesi\xf3n de la SDK para as\xed avisar a la plataforma de su finalizaci\xf3n. Para ello, se ejecuta el siguiente fragmento de c\xf3digo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'function callCloseSession()\n{\n    if (typeof facephi.plugins.sdkcore === "undefined") {\n        showErrorUI("Cordova Core Sdk is not installed...");\n        return;\n    }\n    console.log(\'callCloseSession started...\');\n    facephi.plugins.sdkcore.launchCloseSession()\n    .then(\n        (result) => { console.log(result); },\n        (err) => console.log(err),\n    )\n    .finally (() =>\n    {\n        console.log("callCloseSession finished...");\n    });\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["El resultado se devolver\xe1 por medio de una Promise, la cual contiene un objeto de la clase ",(0,a.jsx)(n.strong,{children:"SdkCoreResult"}),". Para saber m\xe1s sobre c\xf3mo funciona esta clase consultar el apartado 5."]}),"\n",(0,a.jsx)(n.h2,{id:"7-m\xe9todo-extradata",children:"7. M\xe9todo ExtraData"}),"\n",(0,a.jsx)(n.p,{children:"El m\xe9todo getExtraData permite generar los identificadores necesarios para una operaci\xf3n que deba continuar en el backend. Esta situaci\xf3n suele darse en casos en los que, una vez obtenida la informaci\xf3n necesaria en la aplicaci\xf3n del cliente, se deba enviar esa informaci\xf3n a un determinado servicio para su posterior validaci\xf3n o an\xe1lisis. En caso de que deban trackearse los resultados de esos procesos en la Plataforma, \xe9sta deber\xe1 ser capaz de unificar la primera parte del proceso realizada en cliente con la \xfaltima realizada en el servicio, ya que al final forman parte de la misma operaci\xf3n. Ejemplos en los que puede ser necesario el env\xedo de estos datos:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"En cliente se obtiene una selfie y se requiere hacer una validaci\xf3n de vivacidad en un servicio."}),"\n",(0,a.jsx)(n.li,{children:"En cliente se captura la cara de un documento y la selfie de un usuario y posteriomente se requiere hacer la validaci\xf3n de estos en un servicio."}),"\n",(0,a.jsx)(n.li,{children:"Se requiere extraer el OCR de un documento en el cliente y analizar el OCR en un servicio."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Es por ello que a la hora de enviar la informaci\xf3n capturada en una determinada operaci\xf3n al backend, deber\xe1 enviarse tambi\xe9n un campo llamado extraData. Dicho campo se genera llamando al siguiente m\xe9todo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'function callGetExtraData()\n{\n    if (typeof facephi.plugins.sdkcore === "undefined") {\n        showErrorUI("Cordova Core Sdk is not installed...");\n        return;\n    }\n    console.log(\'callGetExtraData started...\');\n    tokenized = null;\n    facephi.plugins.sdkcore.launchGetExtraData()\n    .then(\n        (result) => {\n            console.log(result);\n            if (parseInt(result.finishStatus) == 1)\n            {\n                tokenized = result.tokenized;\n                passiveLivenessEvaluate();\n                authenticateFacialDocument();\n            }\n        },\n        (err) => console.log(err),\n    )\n    .finally (() =>\n    {\n        console.log("callGetExtraData finished...");\n    });\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var a=i(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);