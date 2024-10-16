# Behavior Component

## 0. Requisitos base de SDK Mobile

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

Para más información sobre la configuración base, vaya a la sección de [Primeros Pasos](./Mobile_SDK#1-introducción).

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**Behavior** Component / Componente de **comportamiento**. Éste se
encarga de realizar el trakeo y análisis del comportamiento del usuario
a través de los componentes de la **SDKMobile**, enviándola a los
servicios de **Feedzai**.

Al contrario que ocurre con el resto, este componente no funciona
individualmente, trabaja de forma transversal al resto de componentes
instalados en la _SDKMobile_. Para trackear la información se mantiene
en segundo plano mientras se ejecuta el proceso de la **SDKMobile**.

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a:

[Integración](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho
documento.

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

Actualmente las librerías de FacePhi se distribuyen de forma remota
a través de diferentes gestores de dependencias, en este caso Cocoapods.
Las dependencias **obligatorias** que deberán haberse instalado previamente
(añadiéndolas en el fichero Podfile del proyecto) son:

```java
pod 'FPHISDKMainComponent', '~> 1.5.0'
```

Para instalar el componente de Behavior deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```java
pod 'FPHISDKBehaviorComponent', '~> 1.5.0'
```

Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **xCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Primeros Pasos](./Mobile_SDK#4-iniciar-nueva-operación), en el que se detalla
y explica en qué consiste este proceso.

---

## 4. Configuración del componente

El controlador de BehaviorController solo se añadirá en caso de tener el comportamiento de la sdkMobile.

Se añade el import:

```
import behaviorComponent
```

Inicializamos:

```

behaviorController = BehaviorController(autoLogoutAction: {
                      print("ACTIVE DEFENSE")
                      return true
                    },
                    behaviorError: { behaviorError in
                      print("BEHAVIOR ERROR: \(behaviorError)")
                    }, debugMode: false)
```

Se añade en el initSDK:

```

// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, behaviorController: behaviorController

```

---

## 5. Uso del componente

Como se ha comentado previamente, una vez inicializado y configurado el
componente de **behavior/comportamiento** no será necesario lanzarlo, ya
que se mantendrá funcionando en segundo plano mientras se ejecutan el
resto de componentes.

Una vez la aplicación ya tenga un identificador de usuario, deberá
llamar al siguiente proceso para registrar el usuario.

```java
       behaviorController = BehaviorController(autoLogoutAction: {
                self.mainVC.showAlert(msg: "ACTIVE DEFENSE")
                return true
            },
            behaviorError: { behaviorError in
                self.log("BEHAVIOR ERROR: \(behaviorError)")
            }, debugMode: false)

```

---
