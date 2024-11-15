"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[4813],{7378:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>t});const o=JSON.parse('{"id":"Status_Component","title":"Status Component","description":"1. Introducci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs-ios/version-2.0.X/Status_Component.md","sourceDirName":".","slug":"/Status_Component","permalink":"/sdk-mobile-documentation/es/docs/ios/2.0.X/Status_Component","draft":false,"unlisted":false,"tags":[],"version":"2.0.X","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Video Recording Component","permalink":"/sdk-mobile-documentation/es/docs/ios/2.0.X/Video_Recording_Component"},"next":{"title":"Aplicaciones de ejemplo","permalink":"/sdk-mobile-documentation/es/docs/ios/2.0.X/Sample_applications_use"}}');var r=s(4848),i=s(8453);const a={},l="Status Component",c={},t=[{value:"1. Introducci\xf3n",id:"1-introducci\xf3n",level:2},{value:"1.1 Requisitios minimos",id:"11-requisitios-minimos",level:3},{value:"2. Integraci\xf3n del componente",id:"2-integraci\xf3n-del-componente",level:2},{value:"2.1. Dependencias necesarias para la integraci\xf3n",id:"21-dependencias-necesarias-para-la-integraci\xf3n",level:3},{value:"CocoaPods",id:"cocoapods",level:4},{value:"SPM",id:"spm",level:4},{value:"3. Controladores disponibles",id:"3-controladores-disponibles",level:2},{value:"4 Personalizar",id:"4-personalizar",level:2},{value:"4.1 Colores",id:"41-colores",level:3},{value:"4.1.1 Personalizar colores con xcassets",id:"411-personalizar-colores-con-xcassets",level:4},{value:"4.1.2 Personalizar colores con un tema",id:"412-personalizar-colores-con-un-tema",level:4},{value:"4.2 Im\xe1genes",id:"42-im\xe1genes",level:3},{value:"4.2.1 Personalizar im\xe1genes con xcassets",id:"421-personalizar-im\xe1genes-con-xcassets",level:4},{value:"4.2.2 Personalizar im\xe1genes con un tema",id:"422-personalizar-im\xe1genes-con-un-tema",level:4},{value:"4.3 Fuentes",id:"43-fuentes",level:3},{value:"4.3.1 Personalizar fuentes",id:"431-personalizar-fuentes",level:4},{value:"4.4 Dimensiones",id:"44-dimensiones",level:3},{value:"4.4.1 Personalizar dimensiones",id:"441-personalizar-dimensiones",level:4},{value:"4.5 Ejemplo funcional",id:"45-ejemplo-funcional",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"status-component",children:"Status Component"})}),"\n",(0,r.jsx)(n.h2,{id:"1-introducci\xf3n",children:"1. Introducci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.em,{children:"Componente"})," del que se trata en el documento actual se llama ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"StatusComponent"})}),". Se encarga de la interfaz de usuario com\xfan utilizada en los componentes. Este ",(0,r.jsx)(n.em,{children:"Componente"})," puede ser completamente personalizado. Los elementos que puede sobreescribir/cambiar son:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Animaciones"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Colores"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Im\xe1genes"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dimensions (valores para el tama\xf1o, bordes,...)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fuentes"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"11-requisitios-minimos",children:"1.1 Requisitios minimos"}),"\n",(0,r.jsx)(n.p,{children:"La versi\xf3n m\xednima requerida del SDK de iOS es la siguiente:"}),"\n",(0,r.jsxs)(n.p,{children:["Versi\xf3n m\xednima de iOS: ",(0,r.jsx)(n.strong,{children:"13"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-integraci\xf3n-del-componente",children:"2. Integraci\xf3n del componente"}),"\n",(0,r.jsxs)(n.p,{children:["Antes de integrar este componente, se recomienda leer la documentaci\xf3n relacionada con ",(0,r.jsx)(n.a,{href:"./Mobile_SDK",children:"Primeros Pasos"})," y seguir sus instrucciones."]}),"\n",(0,r.jsx)(n.p,{children:"Para usar el StatusComponent con el SDK, se necesita pasar una instancia como par\xe1metro en la funci\xf3n initSdk:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SDKController.shared.initSdk(\n        ...,\n        statusController: StatusController()\n    )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Cuando se proporciona una instancia de StatusController, los Componentes mostrar\xe1n un tutorial antes del lanzamiento, una pantalla de diagn\xf3stico en caso de errores, etc."}),"\n",(0,r.jsx)(n.h3,{id:"21-dependencias-necesarias-para-la-integraci\xf3n",children:"2.1. Dependencias necesarias para la integraci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Ninguna"}),"\n",(0,r.jsx)(n.h4,{id:"cocoapods",children:"CocoaPods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Actualmente, las librer\xedas FacePhi se distribuyen de forma remota a trav\xe9s de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias ",(0,r.jsx)(n.strong,{children:"obligatorias"})," que deben haberse instalado previamente (a\xf1adi\xe9ndolas en el archivo Podfile del proyecto) son:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  pod 'FPHISDKMainComponent', '~> 2.0.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Para instalar el StatusComponent, se debe incluir la siguiente entrada en el Podfile de la aplicaci\xf3n:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  pod 'FPHISDKStatusComponent', '~> 2.0.0'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Una vez instaladas las dependencias, se podr\xe1n utilizar las diferentes funcionalidades del componente."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"spm",children:"SPM"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Las dependencias obligatorias que deben haberse instalado previamente son:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-SdkPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-SdkPackage-SPM.git\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Para instalar el StatusComponent, debe incluirse en los m\xf3dulos del proyecto:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"//HTTPS\nhttps://github.com/facephi-clienters/SDK-StatusPackage-SPM.git\n//SSH\ngit@github.com:facephi-clienters/SDK-StatusPackage-SPM.git\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-controladores-disponibles",children:"3. Controladores disponibles"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Controller"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Description"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"StatusController"}),(0,r.jsx)(n.td,{children:"Contiene los m\xe9todos API expuestos"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-personalizar",children:"4 Personalizar"}),"\n",(0,r.jsx)(n.p,{children:'La personalizaci\xf3n del componente se gestiona con "Temas".  Estos temas implementan ThemeStatusProtocol:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"public protocol ThemeStatusProtocol {\n    var name: String { get } // Description of the theme\n    var fonts: [R.Font: String] { get }\n    var dimensions: [R.Dimension: CGFloat] { get }\n    var images: [R.Image: UIImage?] { get }\n    var colors: [R.Color: UIColor?] { get }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Un tema personalizado puede editar cualquiera de esos valores. De forma predeterminada, existe un ThemeStatus que se usa cuando un par\xe1metro no est\xe1 configurado."}),"\n",(0,r.jsx)(n.h3,{id:"41-colores",children:"4.1 Colores"}),"\n",(0,r.jsx)(n.p,{children:"Colores disponibles para personalizar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"enum Color: String, CaseIterable {\n    case sdkPrimaryColor\n    case sdkSecondaryColor\n    case sdkBackgroundColor\n    case sdkTitleTextColor\n    case sdkBodyTextColor\n    case sdkPrimaryVariantColor\n    case sdkTopIconsColor\n    case sdkErrorColor\n    case sdkSuccessColor\n    case sdkNeutralColor\n    case sdkAccentColor\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"411-personalizar-colores-con-xcassets",children:"4.1.1 Personalizar colores con xcassets"}),"\n",(0,r.jsx)(n.p,{children:'Cuando se usa, el StatusComponent comprobar\xe1 primero si existe un recurso de color con el mismo nombre que el "case" del enum en la aplicaci\xf3n principal.'}),"\n",(0,r.jsx)(n.p,{children:'Esta opci\xf3n sobreescribe lo configurado por el "Theme".\nSi el recurso no se encuentra en la aplicaci\xf3n principal, tomar\xe1 el valor del "Theme" configurado.'}),"\n",(0,r.jsx)(n.h4,{id:"412-personalizar-colores-con-un-tema",children:"4.1.2 Personalizar colores con un tema"}),"\n",(0,r.jsx)(n.p,{children:"Los colores se pueden personalizar con la creaci\xf3n de una clase Theme:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import statusComponent\n...\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    ...\n    var colors: [R.Color: UIColor?] = [\n        R.Color.sdkPrimaryColor: UIColor.red,\n        R.Color.sdkBackgroundColor: UIColor.white,\n        ...\n    ]\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"42-im\xe1genes",children:"4.2 Im\xe1genes"}),"\n",(0,r.jsx)(n.p,{children:"Im\xe1genes dispnibles para personalizar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"enum Image: String, CaseIterable {\n    case ic_sdk_close\n    case ic_sdk_close_arrow\n    case ic_sdk_error_connection\n    case ic_sdk_error_timeout\n    case ic_sdk_unknown_error\n    case ic_sdk_permission_camera\n    case ic_sdk_permission_micro\n    case ic_sdk_permission_generic\n    case ic_sdk_logo\n    case ic_sdk_info\n    case ic_status_success\n    case ic_status_dot_primary\n    case ic_status_dot_variant\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"421-personalizar-im\xe1genes-con-xcassets",children:"4.2.1 Personalizar im\xe1genes con xcassets"}),"\n",(0,r.jsx)(n.p,{children:'Cuando se usa, el StatusComponent comprobar\xe1 primero si existe un recurso de imagen con el mismo nombre que el "case" del enum en la aplicaci\xf3n principal.'}),"\n",(0,r.jsx)(n.p,{children:'Esta opci\xf3n reemplaza el tema.\nSi el recurso no se encuentra en la aplicaci\xf3n principal, tomar\xe1 el valor del "Tema" configurado.'}),"\n",(0,r.jsx)(n.h4,{id:"422-personalizar-im\xe1genes-con-un-tema",children:"4.2.2 Personalizar im\xe1genes con un tema"}),"\n",(0,r.jsx)(n.p,{children:"Las im\xe1genes se pueden personalizar con la creaci\xf3n de una clase Theme:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'import statusComponent\n...\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    ...\n    var images: [R.Image: UIImage?] = [\n        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),\n        ...\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"43-fuentes",children:"4.3 Fuentes"}),"\n",(0,r.jsx)(n.p,{children:"Fuentes disponibles para personalizar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"enum Font: String {\n    case regular\n    case bold\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"431-personalizar-fuentes",children:"4.3.1 Personalizar fuentes"}),"\n",(0,r.jsx)(n.p,{children:"Las fuentes se pueden personalizar con la creaci\xf3n de una clase Theme:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'import statusComponent\n...\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    ...\n    var fonts: [R.Font: String] = [\n        .bold: "Comic Sans Bold"\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"44-dimensiones",children:"4.4 Dimensiones"}),"\n",(0,r.jsx)(n.p,{children:"Dimensiones disponibles para personalizar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"enum Dimension: CGFloat {\n    case fontExtraSmall\n    case fontSmall\n    case fontRegular\n    case fontLarge\n    case fontExtraLarge\n    case radiusCorner\n    case radiusCornerSmall\n    case outlinedBorderWidth\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"441-personalizar-dimensiones",children:"4.4.1 Personalizar dimensiones"}),"\n",(0,r.jsx)(n.p,{children:"Las dimensiones se pueden personalizar con la creaci\xf3n de una clase Theme:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import statusComponent\n...\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    ...\n    var dimensions: [R.Dimension: CGFloat] = [\n        .fontBig: 8,\n        R.Dimension.radiusCorner: 5,\n        ...\n    ]\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"45-ejemplo-funcional",children:"4.5 Ejemplo funcional"}),"\n",(0,r.jsx)(n.p,{children:"Un ejemplo pr\xe1ctico completo ser\xeda:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'import statusComponent\n\nclass CustomThemeStatus: ThemeStatusProtocol {\n    var name: String {\n        "custom"\n    }\n\n    var images: [R.Image: UIImage?] = [\n        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),\n        // Los par\xe1metros no configurados no ser\xe1n sobreescritos, se seguir\xe1 utilizando su valor por defecto\n    ]\n    \n    var colors: [R.Color: UIColor?] = [\n        R.Color.sdkPrimaryColor: UIColor.red,\n        R.Color.sdkBackgroundColor: UIColor.white,\n    ]\n\n    var dimensions: [R.Dimension: CGFloat] = [\n        .fontBig: 8,\n        R.Dimension.radiusCorner: 5,\n    ]\n    var fonts: [R.Font: String] = [\n        .bold: "Comic Sans Bold"\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'Una vez implementado, asignamos la instancia a nuestro "theme" personalizado de la siguiente manera:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import statusComponent\n...\nThemeStatusManager.setup(theme: CustomThemeStatus())\n...\n```\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var o=s(6540);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);