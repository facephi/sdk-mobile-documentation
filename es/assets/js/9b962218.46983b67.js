"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4996],{9159:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"Core_Component","title":"Core Component","description":"1. Introducci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs-cordova/current/Core_Component.md","sourceDirName":".","slug":"/Core_Component","permalink":"/sdk-mobile-documentation/es/docs/cordova/next/Core_Component","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Primeros pasos","permalink":"/sdk-mobile-documentation/es/docs/cordova/next/Mobile_SDK"},"next":{"title":"VideoId Component","permalink":"/sdk-mobile-documentation/es/docs/cordova/next/Nfc_Component"}}');var s=i(4848),a=i(8453);const o={},l="Core Component",c={},t=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"1.2 Versi\xf3n del plugin",id:"12-versi\xf3n-del-plugin",level:3},{value:"2. Inicializaci\xf3n de la sesi\xf3n",id:"2-inicializaci\xf3n-de-la-sesi\xf3n",level:2},{value:"2.1 Inicializaci\xf3n",id:"21-inicializaci\xf3n",level:3},{value:"2.2 Configuraci\xf3n de inicio de sesi\xf3n",id:"22-configuraci\xf3n-de-inicio-de-sesi\xf3n",level:3},{value:"2.2.1 license",id:"221-license",level:4},{value:"2.2.4 enableTracking",id:"224-enabletracking",level:4},{value:"3. Inicializaci\xf3n de la operaci\xf3n",id:"3-inicializaci\xf3n-de-la-operaci\xf3n",level:2},{value:"4. Lanzamiento de componentes",id:"4-lanzamiento-de-componentes",level:2},{value:"5. Retorno del Resultado",id:"5-retorno-del-resultado",level:2},{value:"<strong>5.1 finishStatus</strong>",id:"51-finishstatus",level:3},{value:"<strong>5.2 finishStatusDescription</strong>",id:"52-finishstatusdescription",level:3},{value:"<strong>5.3 errorMessage</strong>",id:"53-errormessage",level:3},{value:"<strong>5.4 errorType</strong>",id:"54-errortype",level:3},{value:"<strong>5.5 tokenized</strong>",id:"55-tokenized",level:3},{value:"<strong>5.6 data</strong>:",id:"56-data",level:3},{value:"Optional parameter. Only visible if the <em>GetExtraData</em> method is called. The plugin will return a value in <em><strong>string</strong></em> format. More information in <strong>section 7.</strong>",id:"optional-parameter-only-visible-if-the-getextradata-method-is-called-the-plugin-will-return-a-value-in-string-format-more-information-in-section-7",level:2},{value:"6. Cierre de sesi\xf3n",id:"6-cierre-de-sesi\xf3n",level:2},{value:"7. M\xe9todo ExtraData",id:"7-m\xe9todo-extradata",level:2},{value:"8. M\xe9todo Tokenize",id:"8-m\xe9todo-tokenize",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"core-component",children:"Core Component"})}),"\n",(0,s.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El Componente tratado en el documento actual recibe el nombre de Core Component. ",(0,s.jsx)(n.strong,{children:"Este componente es de instalaci\xf3n obligatoria"}),", independientemente del caso de uso, pues contiene funcionalidad gen\xe9rica a toda la sdk, adem\xe1s de permitir el uso de componentes m\xe1s espec\xedficos."]}),"\n",(0,s.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,s.jsx)(n.p,{children:"La versi\xf3n m\xednima nativa (Android y iOS) de la SDK son las siguientes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Versi\xf3n m\xednima Android: ",(0,s.jsx)(n.strong,{children:"24 - JDK 11"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Versi\xf3n m\xednima iOS: ",(0,s.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"En cuanto a la arquitectura del dispositivo m\xf3vil:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"armeabi-v7, x86, arm64 y x64"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"12-versi\xf3n-del-plugin",children:"1.2 Versi\xf3n del plugin"}),"\n",(0,s.jsx)(n.p,{children:"La versi\xf3n del plugin actual se puede consultar de la siguiente forma:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Buscamos el archivo ",(0,s.jsx)(n.strong,{children:"package.json"})," en la ra\xedz del plugin."]}),"\n",(0,s.jsxs)(n.li,{children:["En el ",(0,s.jsx)(n.strong,{children:"KEY/TAG"})," version se indica la versi\xf3n."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-inicializaci\xf3n-de-la-sesi\xf3n",children:"2. Inicializaci\xf3n de la sesi\xf3n"}),"\n",(0,s.jsx)(n.h3,{id:"21-inicializaci\xf3n",children:"2.1 Inicializaci\xf3n"}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nToda la configuraci\xf3n se podr\xe1 encontrar en el archivo ",(0,s.jsx)(n.em,{children:"node_modules/@facephi/sdk-core-react-native/src/src/index.tsx"})," del componente."]})}),"\n",(0,s.jsxs)(n.p,{children:["Antes de poder utilizar cualquier componente, se deber\xe1 inicializar la sesi\xf3n de la SDK. Esta inicializaci\xf3n se debe hacer lo m\xe1s pronto posible, preferentemente al inicio de la aplicaci\xf3n. Al mismo tiempo, una vez terminadas todas las operaciones con la SDK Mobile, deber\xe1 cerrarse igualmente la sesi\xf3n (",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"apartado 6"})}),")"]}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nEste controlador (SDKController) es el que se va a utilizar para lanzar todas las funciones del SDK."]})}),"\n",(0,s.jsx)(n.p,{children:"Se puede inicializar el componente actual de dos formas, dependiendo de c\xf3mo desees inyectar la licencia."}),"\n",(0,s.jsxs)("div",{class:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nEl nuevo m\xe9todo de licenciamiento permite gestionar las licencias de forma transparente para el integrador. La licencia se puede inyectar de dos maneras:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a. Obteniendo la licencia a trav\xe9s de un servicio mediante una URL y API-KEY"}),"\n",(0,s.jsx)(n.li,{children:"b. Inyectando la licencia directamente como String"}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["En ambos casos, el resultado se devolver\xe1 por medio de una Promise, la cual contiene un objeto de la clase ",(0,s.jsx)(n.strong,{children:"CoreResult"}),". Se dar\xe1 m\xe1s informaci\xf3n sobre c\xf3mo funciona esta clase en el ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"apartado 5"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"a. Inyectando la licencia como String"}),"\nDe esta forma se evitan problemas relacionados con la conexi\xf3n y la petici\xf3n al servicio de licencia. Se puede asignar la licencia directamente como un String de la siguiente manera:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'const launchInitSession = async () => \n{ \n    try \n    {\n        console.log("Starting initSession...");\n        let config: InitSessionConfiguration = {\n            license: Platform.OS === \'ios\' ? JSON.stringify(<enter_your_lic_here>) : JSON.stringify(<enter_your_lic_here>),\n            //licenseUrl: LICENSE_URL,\n            //licenseApiKey: Platform.OS === \'ios\' ? LICENSE_APIKEY_IOS : LICENSE_APIKEY_ANDROID\n        };\n\n        console.log(config);\n        return await SdkMobileCore.initSession(config)\n        .then((result: CoreResult) => \n        {\n            console.log("result", result);\n        })\n        .catch((error: any) => \n        {\n            console.log(error);\n        })\n        .finally(()=> {\n            console.log("End closeSession...");\n        });\n    } \n    catch (error) {\n        setMessage(JSON.stringify(error));\n    }\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"b. Obteniendo la licencia a trav\xe9s de un servicio."}),"\nA trav\xe9s de un servicio que simplemente requerir\xe1 una URL y un API-KEY. Esto evitar\xeda problemas a la hora de manipular la licencia, adem\xe1s de ahorrarse los problemas relacionados con el mantenimiento de estas (malformaci\xf3n o modificaci\xf3n indebida, expiraci\xf3n de la licencia\u2026)"]}),"\n",(0,s.jsx)(n.p,{children:"Para hacer uso de esta funcionalidad:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'const launchInitSession = async () => \n{ \n    try \n    {\n        console.log("Starting initSession...");\n        let config: InitSessionConfiguration = {\n            //license: Platform.OS === \'ios\' ? JSON.stringify(LICENSE_IOS_NEW) : JSON.stringify(LICENSE_ANDROID_NEW),\n            licenseUrl: "https://***.***.pro",\n            licenseApiKey: "<enter_your_apikey_here>",\n        };\n\n        console.log(config);\n        return await SdkMobileCore.initSession(config)\n        .then((result: CoreResult) => \n        {\n            console.log("result", result);\n        })\n        .catch((error: any) => \n        {\n            console.log(error);\n        })\n        .finally(()=> {\n            console.log("End closeSession...");\n        });\n    } \n    catch (error) {\n        setMessage(JSON.stringify(error));\n    }\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"22-configuraci\xf3n-de-inicio-de-sesi\xf3n",children:"2.2 Configuraci\xf3n de inicio de sesi\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Como se ha visto en el fragmento de c\xf3digo del apartado anterior, existe una clase llamada ",(0,s.jsx)(n.strong,{children:"InitSessionConfiguration"})," que permite inicializar la sesi\xf3n de forma personalizada. A continuaci\xf3n se comentan las propiedades que contiene dicha clase."]}),"\n",(0,s.jsx)(n.h4,{id:"221-license",children:"2.2.1 license"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Permite establecer la licencia de los componentes. Esta licencia deber\xe1 ser provista por Facephi."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'license: "valid license\u201c\n'})}),"\n",(0,s.jsx)(n.h1,{id:"222-licenseurl",children:"2.2.2 licenseUrl"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Establece la url donde el componente Core valida la licencia de forma remota. Este endpoint deber\xe1 ser provisto por Facephi."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'licenseUrl: "https://***.***.pro"\n'})}),"\n",(0,s.jsx)(n.h1,{id:"223-licenseapikey",children:"2.2.3 licenseApiKey"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Establece el apikey que se env\xeda para obtener la licencia del servicio."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'licenseApiKey: "valid ApiKey"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"224-enabletracking",children:"2.2.4 enableTracking"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type:"})," ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Habilita o deshabilita el uso del componente de tracking. Esto permite ver la informaci\xf3n de lo que hace el cliente en la plataforma de Facephi.  Este componente funciona en background mientras se ejecutan el resto de componentes instalados, y analiza el comportamiento del usuario durante el proceso actual."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"enableTracking: true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["El resultado ser\xe1 devuelto por medio de una Promise que contiene un objeto de la clase SdkCoreResult. M\xe1s informaci\xf3n sobre c\xf3mo funciona esta clase se a\xf1adir\xe1 en el ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"apartado 6"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"3-inicializaci\xf3n-de-la-operaci\xf3n",children:"3. Inicializaci\xf3n de la operaci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Cada vez que se desee iniciar el flujo de alguna operaci\xf3n nueva (ejemplos de operaciones ser\xedan: onboarding, authentication,\u2026) es esencial indicarle al ",(0,s.jsx)(n.strong,{children:"SDKController"})," que \xe9sta va a comenzar, y as\xed la SDK sabr\xe1 que las pr\xf3ximas llamadas de ",(0,s.jsx)(n.strong,{children:"Componentes"})," (tambi\xe9n llamados ",(0,s.jsx)(n.strong,{children:"Steps"}),") formar\xe1n parte de dicha operaci\xf3n. Esto es necesario para trackear a la plataforma la informaci\xf3n global de esta operaci\xf3n de forma satisfactoria."]}),"\n",(0,s.jsx)("div",{class:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"warning",children:"\u26a0\ufe0f"}),"\nAl iniciar un proceso o flujo, ",(0,s.jsx)(n.strong,{children:"siempre"})," se deber\xe1 realizar la llamada al m\xe9todo newOperation"]})}),"\n",(0,s.jsx)(n.p,{children:"Este m\xe9todo tiene 2 par\xe1metros de entrada:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"operationType"}),": Indica si se va a hacer un proceso de ONBOARDING o de AUTHENTICATION"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"customerId"}),": Id \xfanico del usuario si se tiene (controlado a nivel de aplicaci\xf3n)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Para poder ejecutar el m\xe9todo ",(0,s.jsx)(n.strong,{children:"initOperation"}),", la llamada debe realizarse en la clase ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SdkMobileCore"})})," como se especifica a continuaci\xf3n:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'const initOperation = async () => \n{ \n    try \n    {\n      console.log("Starting initOperation...");\n\n      return await SdkMobileCore.initOperation(getInitOperationConfiguration())\n      .then((result: CoreResult) => \n      {\n        console.log("result", result);\n      })\n      .catch((error: any) => \n      {\n        console.log(error);\n      })\n      .finally(()=> {\n        console.log("End initOperation...");\n      });\n    } \n    catch (error) {\n      setMessage(JSON.stringify(error));\n    }\n};\n\nconst getInitOperationConfiguration = () => \n{\n    let config: InitOperationConfiguration = {\n      customerId: CUSTOMER_ID,\n      type: SdkOperationType.Onboarding,\n    };\n\n    return config;\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"4-lanzamiento-de-componentes",children:"4. Lanzamiento de componentes"}),"\n",(0,s.jsx)("div",{class:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"note",children:"\u2139\ufe0f"}),"\nUna vez creada la nueva operaci\xf3n, se podr\xe1n lanzar los diferentes controladores de los componentes instalados en la SDK. Para consultar esta informaci\xf3n se deber\xe1 acceder a la documentaci\xf3n de cada uno de los componentes espec\xedficos."]})}),"\n",(0,s.jsx)(n.h2,{id:"5-retorno-del-resultado",children:"5. Retorno del Resultado"}),"\n",(0,s.jsx)(n.p,{children:"El resultado de cada componente ser\xe1 devuelto a trav\xe9s de la SDK manteniendo siempre la misma estructura:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export interface CoreResult {\n  finishStatus: number;\n  finishStatusDescription?: string;\n  errorType: string;\n  errorMessage?: string;\n  tokenized?: string;\n  operationId?: string;\n  sessionId?: string;\n  data?: string;\n  flow?: string;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Los par\xe1metros recibidos son los siguientes:"}),"\n",(0,s.jsx)(n.h3,{id:"51-finishstatus",children:(0,s.jsx)(n.strong,{children:"5.1 finishStatus"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"finishStatus"}),": Devuelve el diagn\xf3stico global de la operaci\xf3n. Los valores posibles para el tipo de excepci\xf3n son:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1"}),": La operaci\xf3n ha finalizado satisfactoriamente."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el enumerado errorType y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad errorMessage."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-finishstatusdescription",children:(0,s.jsx)(n.strong,{children:"5.2 finishStatusDescription"})}),"\n",(0,s.jsx)(n.p,{children:"Devuelve una descripci\xf3n global de la operaci\xf3n. Par\xe1metro opcional."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"STATUS_OK"}),": La operaci\xf3n ha finalizado satisfactoriamente."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"STATUS_ERROR"}),": Se ha producido un error, el cu\xe1l se indicar\xe1 en el par\xe1metro de salida errorType y, opcionalmente, se mostrar\xe1 un mensaje de informaci\xf3n extra en la propiedad errorMessage."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-errormessage",children:(0,s.jsx)(n.strong,{children:"5.3 errorMessage"})}),"\n",(0,s.jsx)(n.p,{children:"Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional."}),"\n",(0,s.jsx)(n.h3,{id:"54-errortype",children:(0,s.jsx)(n.strong,{children:"5.4 errorType"})}),"\n",(0,s.jsx)(n.p,{children:"Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el par\xe1metro finishStatus con el valor Error). Se definen en la clase SdkErrorType. Los valores que puede tener son los siguientes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"UnknownError"}),". Error no gestionado."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NoError"}),": No ha ocurrido ning\xfan error. El proceso puede continuar."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CameraPermissionDenied"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso a la c\xe1mara."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HardwareError"}),": Excepci\xf3n que surge cuando existe alg\xfan problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ExtractionLicenseError"}),": Excepci\xf3n que ocurre cuando ha habido un problema de licencias en el servidor."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"UnexpectedCaptureError"}),": Excepci\xf3n que ocurre durante la captura de frames por parte de la c\xe1mara."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ControlNotInitializedError"}),": El configurador del widget no ha sido inicializado."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BadExtractorConfiguration"}),": Problema surgido durante la configuraci\xf3n del widget."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CancelByUser"}),": Excepci\xf3n que se produce cuando el usuario para la extracci\xf3n de forma manual."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TimeOut"}),":Excepci","\xf3n que se produce cuando transcurre un tiempo m\xe1ximo sin conseguir finalizar la extracci\xf3n con \xe9xito."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"InitProccessError"}),": Excepci\xf3n que se produce cuando el sdk no puede procesar las imagenes capturadas."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NfcError"}),": Excepci\xf3n que se produce cuando el sdk no tiene permiso de acceso al nfc."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NetworkConnection"}),": Excepci\xf3n que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TokenError"}),": Excepci\xf3n que se produce cuando se pasa por par\xe1metro un token no v\xe1lido."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"InitSessionError"}),": Excepci\xf3n que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al ",(0,s.jsx)(n.code,{children:"SdkCore"})," al ppio de llamar a cualquier otro componente."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ComponentControllerError"}),": Excepci\xf3n que se produce cuando no se puede instanciar el componente."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"55-tokenized",children:(0,s.jsx)(n.strong,{children:"5.5 tokenized"})}),"\n",(0,s.jsxs)(n.p,{children:["Par\xe1metro opcional. S\xf3lo se devuelve si se llama al m\xe9todo ",(0,s.jsx)(n.em,{children:"Tokenized"}),". El plugin devolver\xe1 un valor de tipo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"string"})})," format. M\xe1s informaci\xf3n en el ",(0,s.jsx)(n.strong,{children:"apartado 8."})]}),"\n",(0,s.jsxs)(n.h3,{id:"56-data",children:[(0,s.jsx)(n.strong,{children:"5.6 data"}),":"]}),"\n",(0,s.jsxs)(n.h2,{id:"optional-parameter-only-visible-if-the-getextradata-method-is-called-the-plugin-will-return-a-value-in-string-format-more-information-in-section-7",children:["Optional parameter. Only visible if the ",(0,s.jsx)(n.em,{children:"GetExtraData"})," method is called. The plugin will return a value in ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"string"})})," format. More information in ",(0,s.jsx)(n.strong,{children:"section 7."})]}),"\n",(0,s.jsx)(n.h2,{id:"6-cierre-de-sesi\xf3n",children:"6. Cierre de sesi\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Antes de que la aplicaci\xf3n se vaya a destruir, se deber\xe1 cerrar la sesi\xf3n de la SDK para as\xed avisar a la plataforma de su finalizaci\xf3n. Para ello, se ejecuta el siguiente fragmento de c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'const launchCloseSession = async () => \n{ \n    try \n    {\n      console.log("Starting closeSession...");\n      return await SdkMobileCore.closeSession()\n      .then((result: CoreResult) => \n      {\n        console.log("result", result);\n      })\n      .catch((error: any) => \n      {\n        console.log(error);\n      })\n      .finally(()=> {\n        console.log("End closeSession...");\n      });\n    } \n    catch (error) {\n      setMessage(JSON.stringify(error));\n    }\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["El resultado se devolver\xe1 por medio de una Promise, la cual contiene un objeto de la clase ",(0,s.jsx)(n.strong,{children:"CoreResult"}),". Para saber m\xe1s sobre c\xf3mo funciona esta clase consultar el apartado 5."]}),"\n",(0,s.jsx)(n.h2,{id:"7-m\xe9todo-extradata",children:"7. M\xe9todo ExtraData"}),"\n",(0,s.jsxs)(n.p,{children:["El m\xe9todo getExtraData permite generar los identificadores necesarios para una operaci\xf3n que deba continuar en el ",(0,s.jsx)(n.em,{children:"Servicio de Validaciones de Facephi"})," (Backend). Esta situaci\xf3n suele darse en casos en los que, una vez obtenida la informaci\xf3n necesaria en la aplicaci\xf3n del cliente, se deba enviar esa informaci\xf3n a un determinado servicio para su posterior validaci\xf3n o an\xe1lisis. En caso de que deban trackearse los resultados de esos procesos en la Plataforma, \xe9sta deber\xe1 ser capaz de unificar la primera parte del proceso realizada en cliente con la \xfaltima realizada en el servicio, ya que al final forman parte de la misma operaci\xf3n."]}),"\n",(0,s.jsx)(n.p,{children:"Es por ello que a la hora de enviar la informaci\xf3n capturada en una determinada operaci\xf3n al backend, deber\xe1 enviarse tambi\xe9n un campo llamado extraData. Dicho campo se genera llamando al siguiente m\xe9todo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"const getExtraData = async () => \n{ \n    try \n    {\n      console.log(\"Starting getExtraData...\");\n\n      return await SdkMobileCore.getExtraData()\n      .then(async (result: CoreResult) => \n      {\n        console.log(\"result\", result);\n        if (result.finishStatus == SdkFinishStatus.Ok)\n        {\n          const params1 = {'extraData': result.data, 'image': bestImageApi};\n          const params2 = {'documentTemplate': tokenFaceImage, 'extraData': result.data, 'image1': bestImageApi};\n          \n          let r1: any = await apiPost('/v5/api/v1/selphid/passive-liveness/evaluate', params1);\n          console.log(\"r1\", r1);\n          let r2: any = await apiPost('/v5/api/v1/selphid/authenticate-facial/document/face-image', params2);\n          console.log(\"r2\", r2);\n        }\n      })\n      .catch((error: any) => \n      {\n        console.log(error);\n      })\n      .finally(()=> {\n        console.log(\"End getExtraData...\");\n      });\n    } \n    catch (error) {\n      setMessage(JSON.stringify(error));\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"8-m\xe9todo-tokenize",children:"8. M\xe9todo Tokenize"}),"\n",(0,s.jsxs)(n.p,{children:["El m\xe9todo tratado en el documento actual recibe el nombre de Tokenize. \xc9ste se encarga de codificar y tokenizar las im\xe1genes obtenidas en cualquiera de los dem\xe1s componentes, en caso de que sea necesario, para su posterior env\xedo al ",(0,s.jsx)(n.em,{children:"Servicio de Validaciones de Facephi"})," (Backend). En el este servicio se podr\xe1 descodificar y validar de forma segura."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'const getTokenize = async () => \n{ \n  try \n  {\n    console.log("Starting getTokenize...", getTokenizeConfiguration());\n    return await SdkMobileCore.tokenize(getTokenizeConfiguration())\n    .then((result: CoreResult) => \n    {\n      console.log("result", result);\n    })\n    .catch((error: any) => \n    {\n      console.log(error);\n    })\n    .finally(()=> {\n      console.log("End getTokenize...");\n    });\n  } \n  catch (error) {\n    setMessage(JSON.stringify(error));\n  }\n};\nconst getTokenizeConfiguration = () => \n{\n  const sdkConfiguration: TokenizeConfiguration = {\n    stringToTokenize: "String to Tokenize ..."\n  };\n  return sdkConfiguration;\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);