"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[1134],{7068:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=a(5893),r=a(1151);const s={},o="Primeros Pasos",l={id:"Mobile_SDK",title:"Primeros Pasos",description:"1. Introducci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-2.0.X/Mobile_SDK.md",sourceDirName:".",slug:"/Mobile_SDK",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/Mobile_SDK",draft:!1,unlisted:!1,tags:[],version:"2.0.X",frontMatter:{},sidebar:"sidebar",next:{title:"Phingers Component",permalink:"/sdk-mobile-documentation/es/docs/ios/2.0.X/Phingers_Component"}},c={},d=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitos m\xednimos",id:"11-requisitos-m\xednimos",level:3},{value:"2. Integraci\xf3n inicial",id:"2-integraci\xf3n-inicial",level:2},{value:"2.1 A\xf1adir repositorio privado",id:"21-a\xf1adir-repositorio-privado",level:3},{value:"2.2. Dependencias requeridas para la integraci\xf3n",id:"22-dependencias-requeridas-para-la-integraci\xf3n",level:3},{value:"2.3 Posibles incidencias",id:"23-posibles-incidencias",level:3},{value:"3. SDK initialization",id:"3-sdk-initialization",level:2},{value:"3.1 Inyecci\xf3n de licencias",id:"31-inyecci\xf3n-de-licencias",level:3},{value:"a. Obteniendo la licencia a trav\xe9s de un servicio",id:"a-obteniendo-la-licencia-a-trav\xe9s-de-un-servicio",level:4},{value:"b. Inyectando la licencia como String",id:"b-inyectando-la-licencia-como-string",level:4},{value:"3.2 Opcionales",id:"32-opcionales",level:3},{value:"3.2.1 TrackingController",id:"321-trackingcontroller",level:4},{value:"3.2.2. TokenizeController",id:"322-tokenizecontroller",level:4},{value:"3.2.3 StatusController",id:"323-statuscontroller",level:4},{value:"4. Iniciar nueva operaci\xf3n",id:"4-iniciar-nueva-operaci\xf3n",level:2},{value:"4.1 Tipos de operaci\xf3n existentes",id:"41-tipos-de-operaci\xf3n-existentes",level:3},{value:"5. Lanzamiento de componentes",id:"5-lanzamiento-de-componentes",level:2},{value:"6. Retorno de resultado",id:"6-retorno-de-resultado",level:2},{value:"7. Cierre de sesi\xf3n / Logout",id:"7-cierre-de-sesi\xf3n--logout",level:2},{value:"8. Gesti\xf3n de errores",id:"8-gesti\xf3n-de-errores",level:2},{value:"9. Control de errores",id:"9-control-de-errores",level:2},{value:"10. Personalizaci\xf3n de la SDK",id:"10-personalizaci\xf3n-de-la-sdk",level:2}];function t(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"primeros-pasos",children:"Primeros Pasos"}),"\n",(0,i.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SDK Mobile"})," es un conjunto de librer\xedas (",(0,i.jsx)(n.strong,{children:"Componentes"}),") que ofrece\nuna serie de funcionalidades y servicios, permitiendo a su vez su\nintegraci\xf3n en una aplicaci\xf3n Mobile de forma sencilla y totalmente\nescalable. Dependiendo del caso de uso que se requiera, se deber\xe1\nrealizar la instalaci\xf3n de unos determinados componentes. Su alto nivel\nde modularidad permite que, en un futuro, se puedan a\xf1adir otros\ncomponentes nuevos sin afectar en absoluto a los ya integrados en el\nproyecto."]}),"\n",(0,i.jsx)(n.h3,{id:"11-requisitos-m\xednimos",children:"1.1 Requisitos m\xednimos"}),"\n",(0,i.jsx)(n.p,{children:"La versi\xf3n m\xednima de la SDK de iOS requerida es la siguiente:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["iOS: ",(0,i.jsx)(n.strong,{children:"13"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-integraci\xf3n-inicial",children:"2. Integraci\xf3n inicial"}),"\n",(0,i.jsx)(n.p,{children:"En esta secci\xf3n se explicar\xe1 paso a paso c\xf3mo integrar el componente actual en un proyecto ya existente."}),"\n",(0,i.jsx)(n.h3,{id:"21-a\xf1adir-repositorio-privado",children:"2.1 A\xf1adir repositorio privado"}),"\n",(0,i.jsxs)(n.p,{children:["Para tener acceso a nuestro repositorio privado, se requiere haber instalado previamente ",(0,i.jsx)(n.strong,{children:"Cocoapods"})," en la m\xe1quina."]}),"\n",(0,i.jsxs)(n.p,{children:["Por cuestiones de seguridad y mantenimiento, los nuevos componentes de la ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})})," se almacenan en unos repositorios privados que requieren de unas credenciales espec\xedficas para poder acceder a ellos. Esas credenciales deber\xe1 obtenerlas a trav\xe9s del equipo de soporte de Facephi. A continuaci\xf3n se indica como preparar el entorno para consumir los componentes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Primero instalamos el comando que nos dar\xe1 acceso a usar cocoapods con ",(0,i.jsx)(n.strong,{children:"Artifactory"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"sudo gem install cocoapods-art\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En caso de utilizar un Mac con ",(0,i.jsx)(n.strong,{children:"chip M1"}),", pueden surgir errores durante la instalaci\xf3n es posible que surjan errores en el futuro, de ser as\xed, se recomienda usar en cambio el siguiente comando:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"sudo arch -arm64 gem install ffi; sudo arch -arm64 gem install cocoapods-art\n"})}),"\n",(0,i.jsx)(n.p,{children:"En caso de tener problemas con la instalaci\xf3n, desinstalar completamente cocoapods y todas sus dependencias para hacer una instalaci\xf3n limpia."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Necesitaremos a\xf1adir el repositorio a la lista del fichero ",(0,i.jsx)(n.strong,{children:"netrc"}),". Para ello, desde un Terminal, se ejecuta el siguiente comando:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"$ nano ~/.netrc\n"})}),"\n",(0,i.jsx)(n.p,{children:"Y copiamos el siguiente fragmento con los datos correspondientes al final del fichero:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"machine facephicorp.jfrog.io\n  login <USERNAME>\n  password <TOKEN>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Es importante copiar de manera ",(0,i.jsx)(n.strong,{children:"exacta"})," el anterior fragmento de c\xf3digo. El indentado previo a las palabras ",(0,i.jsx)(n.strong,{children:"login"})," y ",(0,i.jsx)(n.strong,{children:"password"})," est\xe1 formado por dos espacios."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Finalmente se a\xf1adir\xe1 el repositorio que contiene dependencias privada:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"22-dependencias-requeridas-para-la-integraci\xf3n",children:"2.2. Dependencias requeridas para la integraci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Para evitar conflictos y problemas de compatibilidad, en caso de querer\ninstalar el componente en un proyecto que contenga una versi\xf3n antigua\nde las librer\xedas de Facephi (",(0,i.jsx)(n.em,{children:"Widgets"}),"), \xe9stos deber\xe1n eliminarse por\ncompleto antes de la instalaci\xf3n de los componentes de la\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"SDKMobile"})}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Actualmente las librer\xedas FacePhi se distribuyen remotamente a trav\xe9s de\ndiferentes gestores de dependencias, en este caso, ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Cocoapods"})}),".\n",(0,i.jsx)(n.strong,{children:"Dependencias obligatorias"})," que deben ser instaladas previamente (a\xf1adi\xe9ndolas\nal ",(0,i.jsx)(n.em,{children:"Podfile"}),"):"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"plugin 'cocoapods-art', :sources => [\n  'cocoa-pro-fphi\u2019\n]\n\nsource 'https://cdn.cocoapods.org/'\n\ntarget 'Example' do\n  pod 'JWTDecode'\n  pod 'SwiftFormat/CLI'\n  pod 'IQKeyboardManagerSwift'\n  pod 'FPHISDKMainComponent', '~> 2.0.0'\n  pod 'FPHISDKCoreComponent', '~> 2.0.0'\n\n   post_install do |installer|\n  installer.pods_project.targets.each do |target|\n    target.build_configurations.each do |config|\n      config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = \"\"\n      config.build_settings['CODE_SIGNING_REQUIRED'] = \"NO\"\n      config.build_settings['CODE_SIGNING_ALLOWED'] = \"NO\"\n    end\n  end\nend\n...\nend\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cuando se quiera actualizar dependencias, antes de ejecutar el ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"pod install"})})," hay que usar el siguiente comando para actualizar el repositorio local:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"pod repo-art update cocoa-pro-fphi\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"23-posibles-incidencias",children:"2.3 Posibles incidencias"}),"\n",(0,i.jsxs)(n.p,{children:["En el caso de que el integrador utilice un Macbook con Chip ",(0,i.jsx)(n.strong,{children:"M1"}),", cabe la posibilidad de que la instalaci\xf3n de cocoapods-art no se realice correctamente. Por ello, se debe tener en cuenta los siguientes puntos:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Si cocoapods se ha instalado mediante Homebrew puede haber problemas."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Se recomienda instalar cocoapods y cocoapods-art usando gem."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A continuaci\xf3n incluimos un script que permite realizar todos los pasos necesarios para dejar el entorno preparado para poder funcionar correctamente:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:' #! /bin/zsh\n\ninstall_cocoapods () {\n    echo "Installing cocoapods with gem"\n    # Creating new gems home if it doesnt\'t exist\n    if [ ! -d "$HOME/.gem" ]; then\n        mkdir "$HOME/.gem"\n    fi\n    # Adding to current session\n    export GEM_HOME="$HOME/.gem"\n    export PATH="$GEM_HOME/bin:$PATH"\n\n    # Adding for future sessions\n    if test -f "$HOME/.zshrc"; then\n        echo \'Adding $GEM_HOME env var and then adding it to your $PATH\'\n        echo \'\' >> "$HOME/.zshrc"\n        echo \'export GEM_HOME="$HOME/.gem"\' >> "$HOME/.zshrc"\n        echo \'export PATH="$GEM_HOME/bin:$PATH"\' >> "$HOME/.zshrc"\n        echo \'alias pod=\'arch -x86_64 pod\'\' >> "$HOME/.zshrc"\n    fi\n\n    # Installing cocoapods\n    gem install cocoapods\n    sudo arch -x86_64 gem install ffi\n    which pod\n    pod --version\n    gem install cocoapods-art\n}\n\nuninstall_cocoapods_homebrew () {\n    which -s brew\n    if [[ $? != 0 ]] ; then\n        echo "Homebrew not installed, skipping uninstalling cocoapods from homebrew"\n    else\n        brew uninstall cocoapods\n    fi\n}\n\nif ! type "pod" > /dev/null; then\n    echo "You don\'t have cocoapods installed..."\nelse\n    echo "Trying to uninstall it from homebrew first"\n    uninstall_cocoapods_homebrew\nfi\n\ninstall_cocoapods\n'})}),"\n",(0,i.jsxs)(n.p,{children:["En caso de usar ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"xCode15"})})," se deber\xe1 realizar la siguiente configuraci\xf3n:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:a(9232).Z+"",width:"1834",height:"510"})}),"\n",(0,i.jsxs)(n.p,{children:["Se deber\xe1 a\xf1adir ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"-ld_classic"})})," en Other Linker Flags, en el Build Settings de la aplicaci\xf3n."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-sdk-initialization",children:"3. SDK initialization"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Debe evitarse inicializar un controlador que no vaya a usarse."})}),"\n",(0,i.jsxs)(n.p,{children:["Cada uno de los componentes tiene un controlador (",(0,i.jsx)(n.em,{children:"Controller"}),") que permitir\xe1 acceder a su propia funcionalidad. Antes de poder utilizarse, deber\xe1n inicializarse correctamente. Los pasos a seguir en la inicializaci\xf3n son:"]}),"\n",(0,i.jsx)(n.p,{children:"Se inicializan los controladores que se van a utilizar."}),"\n",(0,i.jsxs)(n.p,{children:["Se decide si la licencia se incluir\xe1 a trav\xe9s de un String o con un servicio de licenciamiento remoto (consultar ",(0,i.jsx)(n.strong,{children:"apartado 3.1"}),"), y se inicia la sdk."]}),"\n",(0,i.jsx)(n.p,{children:"Si la inicializaci\xf3n devuelve un .STATUS_OK el controlador del SDK estar\xe1 listo para su uso."}),"\n",(0,i.jsx)(n.h3,{id:"31-inyecci\xf3n-de-licencias",children:"3.1 Inyecci\xf3n de licencias"}),"\n",(0,i.jsx)(n.p,{children:"Como se ha comentado previamente, actualmente existen dos formas de\ninyectar la licencia:"}),"\n",(0,i.jsx)(n.h4,{id:"a-obteniendo-la-licencia-a-trav\xe9s-de-un-servicio",children:"a. Obteniendo la licencia a trav\xe9s de un servicio"}),"\n",(0,i.jsx)(n.p,{children:"A trav\xe9s de un servicio que simplemente requerir\xe1 una URL y un API-KEY\ncomo identificador. Esto evitar\xeda problemas a la hora de manipular la\nlicencia, as\xed como la constante sustituci\xf3n de dichas licencias a la\nhora de surgir alg\xfan problema con ella (malformaci\xf3n o modificaci\xf3n\nindebida, expiraci\xf3n de la licencia...)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia autom\xe1tica seteada correctamente")\n    } else {\n        self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n    }\n}, trackingController: trackingController)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"b-inyectando-la-licencia-como-string",children:"b. Inyectando la licencia como String"}),"\n",(0,i.jsx)(n.p,{children:"Se puede asignar la licencia directamente como un String, de la\nsiguiente manera:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// MANUAL License\nSDKController.shared.initSdk(license: SdkConfigurationManager.LICENSE, output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia manual seteada correctamente")\n    } else {\n        self.log("La licencia manual no es correcta")\n    }\n}, trackingController: trackingController)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"32-opcionales",children:"3.2 Opcionales"}),"\n",(0,i.jsx)(n.p,{children:"Los siguientes controller son opcionales, se a\xf1aden al final del initSDK de la siguiente forma:"}),"\n",(0,i.jsx)(n.h4,{id:"321-trackingcontroller",children:"3.2.1 TrackingController"}),"\n",(0,i.jsx)(n.p,{children:"El controlador de TrackingController solo se a\xf1adir\xe1 en caso de tener el tracking de la sdkMobile."}),"\n",(0,i.jsx)(n.p,{children:"Se a\xf1ade el import:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import trackingComponent\n"})}),"\n",(0,i.jsx)(n.p,{children:"trackingController: trackingController"}),"\n",(0,i.jsx)(n.p,{children:"Inicializamos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'let trackingController = TrackingController(trackingError: { trackingError in\n      print("TRACKING ERROR: \\(trackingError)")\n})\n'})}),"\n",(0,i.jsx)(n.p,{children:"Se a\xf1ade en el initSDK:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia autom\xe1tica seteada correctamente")\n    } else {\n        self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n    }\n}, trackingController: trackingController)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"322-tokenizecontroller",children:"3.2.2. TokenizeController"}),"\n",(0,i.jsx)(n.p,{children:"Se a\xf1ade el import:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import tokenizeComponent\n"})}),"\n",(0,i.jsx)(n.p,{children:"Inicializamos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let tokenizeController = TokenizeController()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Se a\xf1ade en el initSDK:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia autom\xe1tica seteada correctamente")\n    } else {\n        self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n    }\n}, tokenizeController: tokenizeController)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"323-statuscontroller",children:"3.2.3 StatusController"}),"\n",(0,i.jsx)(n.p,{children:"Se a\xf1ade el import:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import statusComponent\n"})}),"\n",(0,i.jsx)(n.p,{children:"Inicializamos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"let statusController = StatusController()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Se a\xf1ade en el initSDK:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// AUTO License\nSDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in\n    if sdkResult.finishStatus == .STATUS_OK {\n        self.log("Licencia autom\xe1tica seteada correctamente")\n    } else {\n        self.log("Ha ocurrido un error al intentar obtener la licencia: \\(sdkResult.errorType)")\n    }\n}, statusController: statusController)\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-iniciar-nueva-operaci\xf3n",children:"4. Iniciar nueva operaci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Cada vez que se desee iniciar el flujo de alguna operaci\xf3n nueva (ejemplos de operaciones ser\xedan: onboarding, authentication, videoCall,\u2026) es esencial indicarle al ",(0,i.jsx)(n.strong,{children:"SDKController"})," que \xe9sta va a comenzar, y as\xed la SDK sabr\xe1 que las pr\xf3ximas llamadas de ",(0,i.jsx)(n.strong,{children:"Componentes"})," (tambi\xe9n llamados ",(0,i.jsx)(n.strong,{children:"Steps"}),") formar\xe1n parte de dicha operaci\xf3n. Esto es necesario para trackear a la plataforma la informaci\xf3n global de esta operaci\xf3n de forma satisfactoria."]}),"\n",(0,i.jsxs)(n.p,{children:["Al iniciar un proceso o flujo, ",(0,i.jsx)(n.strong,{children:(0,i.jsx)("u",{children:" siempre "})})," se deber\xe1 realizar la llamada al m\xe9todo ",(0,i.jsx)(n.strong,{children:"newOperation"})]}),"\n",(0,i.jsx)(n.p,{children:"Este m\xe9todo tiene 3 par\xe1metros de entrada:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"operationType"}),": Indica si se va a hacer un proceso de ONBOARDING o de AUTHENTICATION"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"customerId"}),": Id \xfanico del usuario si se tiene (controlado a nivel de aplicaci\xf3n)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"steps"}),": Lista de pasos de la operaci\xf3n si se han definido previamente"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Hay 2 maneras de realizar este inicio de operaci\xf3n, dependiendo de si ",(0,i.jsx)(n.strong,{children:"se conocen los pasos"})," que formar\xe1n el flujo del proceso de registro o autenticaci\xf3n (en caso de que los componentes se ejecuten de forma secuencial y siempre de la misma forma) o, en caso contrario, de que el flujo ",(0,i.jsx)(n.strong,{children:"no est\xe9 definido"})," y sea desconocido (por ejemplo, el cliente final es el que decide el orden de ejecuci\xf3n de los componentes)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Flujo ",(0,i.jsx)(n.strong,{children:"conocido"})," (aparecer\xe1 la operaci\xf3n trackeada en la plataforma con todos los pasos de la lista). Ejemplo de implementaci\xf3n:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.shared.newOperation(operationType: OperationType.X, customerId: "customerId", steps: [.SELPHI, .SELPHID, .OTHER("CUSTOM_STEP")], output: { _ in })\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Flujo ",(0,i.jsx)(n.strong,{children:"desconocido"})," (aparecer\xe1 la operaci\xf3n trackeada en la plataforma con puntos suspensivos). Ejemplo de implementaci\xf3n:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'SDKController.shared.newOperation(operationType: OperationType.X, customerId: "customerId", output: { _ in})\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sdkResult"})," \u2192 Contiene en data la informaci\xf3n de la operaci\xf3n creada."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Una vez creada la operaci\xf3n"})," se podr\xe1n ejecutar los componentes de la SDK asociados a esta operaci\xf3n. Consultar la documentaci\xf3n espec\xedfica de cada componente para saber c\xf3mo hacerlo."]}),"\n",(0,i.jsx)(n.h3,{id:"41-tipos-de-operaci\xf3n-existentes",children:"4.1 Tipos de operaci\xf3n existentes"}),"\n",(0,i.jsxs)(n.p,{children:["En la actualidad, existen las siguientes operaciones, durante las cuales se hacen uso de unos determinados ",(0,i.jsx)(n.strong,{children:"Componentes (STEPS)"}),". A continuaci\xf3n se muestra una tabla con la relaci\xf3n entre operaciones y steps:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Operaci\xf3n (OperationType)"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Componente (Step)"})}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ONBOARDING"}),(0,i.jsxs)(n.td,{children:["SELPHI_COMPONENT",(0,i.jsx)("br",{}),"SELPHID_COMPONENT"]}),(0,i.jsxs)(n.td,{children:["- Validaci\xf3n facial de un selfie contra la cara de un documento ",(0,i.jsx)("br",{})," - Extracci\xf3n del OCR del documento ",(0,i.jsx)("br",{})," - Detecci\xf3n de vivacidad"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AUTHENTICATION"}),(0,i.jsx)(n.td,{children:"SELPHI_COMPONENT"}),(0,i.jsxs)(n.td,{children:["- Validaci\xf3n facial mediante plantillas ",(0,i.jsx)("br",{})," - Detecci\xf3n de vivacidad"]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Esta lista se ir\xe1 ampliando en pr\xf3ximas actualizaciones de la SDK, seg\xfan\nvayan apareciendo nuevos componentes y casos de uso."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-lanzamiento-de-componentes",children:"5. Lanzamiento de componentes"}),"\n",(0,i.jsxs)(n.p,{children:["Una vez creada la ",(0,i.jsx)(n.strong,{children:"nueva operaci\xf3n (apartado 4)"}),", se podr\xe1n lanzar los diferentes controladores de la SDK. Para consultar esta informaci\xf3n se deber\xe1 acceder a la ",(0,i.jsx)(n.strong,{children:"documentaci\xf3n de cada uno de los componentes espec\xedficos"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-retorno-de-resultado",children:"6. Retorno de resultado"}),"\n",(0,i.jsx)(n.p,{children:"El resultado de cada componente ser\xe1 devuelto a trav\xe9s de la SDK manteniendo siempre la misma estructura de 3 campos:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"finishStatus"}),": Que nos indicar\xe1 si la operaci\xf3n ha finalizado\ncorrectamente. Posibles valores ",(0,i.jsx)(n.code,{children:"FinishStatus.STATUS_OK"}),",\n",(0,i.jsx)(n.code,{children:"FinishStatus.STATUS_ERROR"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"errorType"}),": Si ",(0,i.jsx)(n.em,{children:"finishStatus"})," indica que ha habido un error, este\ncampo tendr\xe1 la descripci\xf3n del mismo."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"data"}),": Tendr\xe1 los datos de respuesta de la funci\xf3n del SDK. Este\ncampo ser\xe1 diferente dependiendo del componente que se haya\nejecutado. En la documentaci\xf3n de cada componente espec\xedfico se\ndesglosar\xe1n los diferentes campos que puede devolver este objeto."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"En la documentaci\xf3n de cada componente espec\xedfico se desglosar\xe1n los diferentes campos que puede devolver este objeto"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-cierre-de-sesi\xf3n--logout",children:"7. Cierre de sesi\xf3n / Logout"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Antes de que la aplicaci\xf3n se vaya a destruir"}),", se deber\xe1 cerrar la sesi\xf3n de la SDK para as\xed avisar a la plataforma de su finalizaci\xf3n. Para ello, se ejecuta la siguiente l\xednea de c\xf3digo:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"SDKController.shared.closeSession()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Si se realiza un cierre de sesi\xf3n, no se van a poder lanzar controladores hasta que se vuelva a iniciar una nueva operaci\xf3n."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-gesti\xf3n-de-errores",children:"8. Gesti\xf3n de errores"}),"\n",(0,i.jsx)(n.p,{children:"Si un componente es llamado, devolver\xe1 un SdkResult como salida. El siguiente fragmento de c\xf3digo de\nsiguiente fragmento de c\xf3digo es un ejemplo de esto:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"        let controlador = ComponentController(datos: ComponentConfigurationData, output: { sdkResultado en\n           print(sdkResult.errorType)\n        }, viewController: viewController)\n        SDKController.shared.launch(controlador: controlador)\n"})}),"\n",(0,i.jsx)(n.p,{children:"El atributo .errorType contiene la tipolog\xeda de los errores. Se definen\nen la documentaci\xf3n de cada componente."}),"\n",(0,i.jsx)(n.p,{children:"Los posibles tipos de error son los siguientes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public enum ErrorType: String, Error {\n     case NO_ERROR\n     case UNKNOWN_ERROR\n     case OTHER(String)\n     case COMPONENT_CONTROLLER_DATA_ERROR\n     case NO_OPERATION_CREATED_ERROR\n     case NETWORK_CONNECTION\n     case CAMERA_PERMISSION_DENIED\n     case MIC_PERMISSION_DENIED\n     case LOCATION_PERMISSION_DENIED\n     case STORAGE_PERMISSION_DENIED\n     case CANCEL_BY_USER\n     case TIMEOUT\n     case LICENSE_CHECKER_ERROR_INVALID_LICENSE\n     case LICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Si no hay ning\xfan error y el resultado se devuelve correctamente, el tipo de error\nser\xe1 ",(0,i.jsx)(n.strong,{children:"NO_ERROR"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"9-control-de-errores",children:"9. Control de errores"}),"\n",(0,i.jsx)(n.p,{children:"Al realizar la llamada a cualquiera de los componentes, siempre tendremos como respuesta un output de tipo SdkResult como vemos en el c\xf3digo de ejemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"        let controller = ComponentController(data: ComponentConfigurationData, output: { sdkResult in\n           print(sdkResult.errorType)\n        }, viewController: viewController)\n        SDKController.shared.launch(controller: controller)\n"})}),"\n",(0,i.jsx)(n.p,{children:"En el atributo .errorType, tendremos la tipolog\xeda del error. Las tipolog\xedas de error est\xe1n definidas en la documentaci\xf3n propia de cada componente."}),"\n",(0,i.jsx)(n.p,{children:"Los c\xf3digos de error que podr\xeda recibir son los siguientes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public enum ErrorType: String, Error {\n    case NO_ERROR\n    case UNKNOWN_ERROR\n    case OTHER(String)\n    case COMPONENT_CONTROLLER_DATA_ERROR\n    case NO_OPERATION_CREATED_ERROR\n    case NETWORK_CONNECTION\n    case CAMERA_PERMISSION_DENIED\n    case MIC_PERMISSION_DENIED\n    case LOCATION_PERMISSION_DENIED\n    case STORAGE_PERMISSION_DENIED\n    case CANCEL_BY_USER\n    case TIMEOUT\n    case LICENSE_CHECKER_ERROR_INVALID_LICENSE\n    case LICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["En caso de no existir ning\xfan error y el resultado se devuelva correctamente, el errorType seria del tipo ",(0,i.jsx)(n.strong,{children:"NO_ERROR"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"10-personalizaci\xf3n-de-la-sdk",children:"10. Personalizaci\xf3n de la SDK"}),"\n",(0,i.jsxs)(n.p,{children:["La personalizaci\xf3n se realiza mediante una clase del componente llamada Theme",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Component"})}),"Manager. Donde ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Component"})})," debe sustituirse por el componente deseado."]}),"\n",(0,i.jsxs)(n.p,{children:["Por ejemplo, videoidComponent contiene ",(0,i.jsx)(n.code,{children:"ThemeVideoIdManager"}),", mientras que videocallComponent ",(0,i.jsx)(n.code,{children:"ThemeVideoCallManager"})," \u2026"]}),"\n",(0,i.jsxs)(n.p,{children:["Este manager posee una instancia del tipo Theme",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Component"})}),"Protocol. Si queremos personalizar cualquier detalle, tendr\xedamos que crear una nueva clase que se adhiera a esta interfaz e inyectarla al Theme",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Component"})}),"Manager."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'class CustomThemeComponent: ThemeComponentProtocol {\n    var images: [R.Image: UIImage?] = [:]\n\n    var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]\n\n    var name: String {\n        "custom"\n    }\n\n    var fonts: [R.Font: String] = [.regular: UIFont(...)]\n\n    var dimensions: [R.Dimension: CGFloat] {\n        [.fontBig: 8]\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Esto debe hacerse siempre despu\xe9s de haber inicializado el controlador del componente que queremos utilizar/personalizar:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// Controller component intialization\nlet controller = ComponentController(...)\n// Instance of the custom instance\nThemeComponentManager.setup(theme: CustomThemeComponent())\n// Controller launch\nSDKController.shared.launch(controller: controller)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("u",{children:(0,i.jsx)(n.strong,{children:"Cada componente tiene su apartado de personalizaci\xf3n,"})})," colores, imagenes, tipos de letra, tama\xf1os"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},9232:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/fix_ldClassic-18c668c14649e02798c4250d1af70c05.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var i=a(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);