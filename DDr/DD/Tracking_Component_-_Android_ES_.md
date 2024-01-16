# Tracking Component - Android \[ES\]

Este documento hace referencia la **versión 1.5.X** del componente

-   [1. Introducción](#TrackingComponent-Android%5BES%5D-1.Introducción)
    -   [1.1 Requisitos
        mínimos](#TrackingComponent-Android%5BES%5D-1.1Requisitosmínimos)
-   [2. Integración del
    componente](#TrackingComponent-Android%5BES%5D-2.Integracióndelcomponente)
    -   [2.1. Dependencias requeridas para la
        integración](#TrackingComponent-Android%5BES%5D-2.1.Dependenciasrequeridasparalaintegración)
-   [3. Configuración del
    componente](#TrackingComponent-Android%5BES%5D-3.Configuracióndelcomponente)
-   [4. Uso del
    componente](#TrackingComponent-Android%5BES%5D-4.Usodelcomponente)
    -   [4.1 Obtener permisos de
        localización](#TrackingComponent-Android%5BES%5D-4.1Obtenerpermisosdelocalización)
-   [5. Recepción del
    resultado.](#TrackingComponent-Android%5BES%5D-5.Recepcióndelresultado.)
-   [6. Método
    ExtraData](#TrackingComponent-Android%5BES%5D-6.MétodoExtraData)

## 1. Introducción

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

El *Componente* tratado en el documento actual recibe el nombre de
***Tracking Component***. Éste se encarga de realizar el trackeo y
monitorización de la información obtenida durante la ejecución del resto
de componentes de la **SDKMobile**, enviándola a los servicios de la
**Plataforma**. Se podrá realizar el seguimiento en tiempo real de estos
datos en la **Plataforma**, mientras se está ejecutando el proceso en el
dispositivo del cliente.

Al contrario que ocurre con el resto, este componente no funciona
individualmente, trabaja de forma transversal al resto de componentes
instalados en la *SDKMobile*. Para trackear la información se mantiene
en segundo plano mientras se ejecuta el proceso de la **SDKMobile**.

### 1.1 Requisitos mínimos

La versión mínima de la SDK de Android requerida es la siguiente:

-   SDK mínima (minSdk): **23**

-   API Version: **33**

-   Kotlin: **1.8.0**

------------------------------------------------------------------------

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a **<u>Core Component</u>** y seguir las instrucciones
indicadas en dicho documento

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (Widgets), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la **SDKMobile**.

-   Actualmente las librerías de FacePhi se distribuyen de forma remota
    a través de diferentes gestores de dependencias. Las dependencias
    **obligatorias** que deberán haberse instalado previamente:

``` java
timber_version = '5.0.1'
core_ktx_version = '1.9.0'
kotlinx_coroutines_version = '1.6.4'
ktor_version = '1.6.7'
activity_ktx_version = '1.7.0'
androidx_lifecycle_version = '2.6.1'

// 3rd Parties dependencies

implementation "androidx.core:core-ktx:$core_ktx_version"
implementation "androidx.activity:activity-ktx:$activity_ktx_version"
implementation "androidx.lifecycle:lifecycle-viewmodel-ktx:$androidx_lifecycle_version"
implementation "com.jakewharton.timber:timber:$timber_version"
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:$kotlinx_coroutines_version"
implementation "io.ktor:ktor-client-core:$ktor_version"
implementation "io.ktor:ktor-client-android:$ktor_version"
implementation "io.ktor:ktor-client-serialization:$ktor_version"
implementation "io.ktor:ktor-client-logging:$ktor_version"
implementation "io.ktor:ktor-utils:$ktor_version"

// Facephi dependencies
compileOnly "com.facephi.androidsdk:core:$versions.core"
```

-   Una vez instaladas las dependencias necesarias, se podrá hacer uso
    de las diferentes funcionalidades del **componente** actual:

    ``` java
    implementation "com.facephi.androidsdk:tracking_component:$sdk_tracking_component_version"
    ```

     

------------------------------------------------------------------------

## 3. Configuración del componente

Se podrá configurar el callback para controlar los errores de tracking:

``` java
SDKController.launch(
     TrackingErrorController {
        Napier.d("Tracking Error: ${it.name}")
     }
)
```

En el **apartado 5** se muestran los posibles valores de error que
existen.

------------------------------------------------------------------------

## 4. Uso del componente

Como se ha comentado previamente, una vez inicializado y configurado el
componente de **tracking** no será necesario lanzarlo, ya que se
mantendrá funcionando en segundo plano mientras se ejecutan el resto de
componentes. Sin embargo, hay una serie de funcionalidades relacionadas
con el proceso de tracking que se deberán comentar a continuación.

### 4.1 Obtener permisos de localización

Si se desea enviar el evento de localización del dispositivo a la
plataforma, la aplicación deberá solicitar los permisos de localización.
Se ha facilitado la siguiente función para ello:

``` java
SDKController.askForLocationPermission(activity: ComponentActivity)
```

------------------------------------------------------------------------

## 5. Recepción del resultado.

El resultado es un objeto *SDKResult* que devuelve el SDK tendrá siempre
3 campos:

*finishStatus:* Que nos indicará si la operación ha finalizado
correctamente. Posibles valores:

``` java
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

*errorType:* Si el finishStatus indica que ha habido un error, este
campo tendrá la descripción del mismo:

Los errores de tracking vienen en el enum *TrackingError*:

``` java
INIT_IDS_ERROR: No se han inicializado correctamente los datos. Revisar UUIDS de sesión.
APPLICATION_SDK_INITIALIZATION_ERROR: Error al inicializar la SDK.
EXTERNAL_EVENT: Error al enviar el evento externo.
OPERATION_RESULT: Error al enviar el resultado de la operación.
CUSTOMER_ID: Error al enviar el customer_id (suele ser un email)
STEP_CHANGE: Error al notificar el nuevo proceso que se inicia.
ASSET_LINK: Error con la subida de assets
ASSET_UPLOAD: Error con la subida de assets
OCR_DATA: Error con la subida de datos de OCR (SelphId, NFC)
INIT_OPERATION: Error al iniciar la operación (puede ser con o sin listado de steps)
NO_OPERATION_CREATED_ERROR: No se ha creado ninguna operación nueva (newOperation)
TOKEN_ERROR: Error al recibir el token de autorización de tracking.
NETWORK_CONNECTION: Error de conexión.
```

------------------------------------------------------------------------

## 6. Método ExtraData

El tracking Component contiene un Controller llamado ExtraData, que
permite generar la información necesaria para comunicar la operación
actual con el **SelphIDSDK Server.**

``` java
SDKController.launchMethod(
        ExtraDataController { 
          when (it) {
            is SdkResult.Success -> { it.data }
            is SdkResult.Error -> {}
      }
    }
})
```

 
