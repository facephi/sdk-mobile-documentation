# Primeros Pasos

## 1. Introducción

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

### 1.1. Requisitos mínimos

La versión mínima de la SDK de Android requerida es la siguiente:

- SDK mínima (minSdk): **23**

- API Version: **34**

- Kotlin: **1.9.10**

- Plugin Gradle Android: **8.1.1**

- Kotlin compiler version: **1.5.3**

---

## 2. Integración inicial

En esta sección se explicará paso a paso cómo integrar los componentes
básicos en un proyecto ya existente.

### 2.1. Añadir repositorio privado

Por cuestiones de seguridad y mantenimiento, los nuevos componentes de
la **_SDKMobile_** se almacenan en unos repositorios privados que
requieren de unas credenciales específicas para poder acceder a ellos.
Esas <u>credenciales</u> deberá obtenerlas a través del _equipo de
soporte_ de **Facephi**.

Una vez obtenidas las credenciales, se deberá incluir el siguiente
fragmento de código para configurar el repositorio maven en el
**Gradle** de tu proyecto, o en el fichero **settings.gradle** del
mismo. Se recomienda incluirlo tras _mavenCentral()_

```java
maven {
    Properties props = new Properties()
    def propsFile = new File('local.properties')
    if(propsFile.exists()){
        props.load(new FileInputStream(propsFile))
    }
    name="external"
    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")
    credentials {
        username = props["artifactory.user"] ?: System.getenv("USERNAME_ARTIFACTORY")
        password = props["artifactory.token"] ?: System.getenv("TOKEN_ARTIFACTORY")
    }
}
```

Para que el proyecto recupere correctamente las dependencias, se deberá
tener las credenciales (Usuario y Token) configuradas correctamente

Hay varias formas de configurar las credenciales de acceso al
repositorio:

- Como variables de entorno con el siguiente nombre. Por ejemplo:

  ```java
  export USERNAME_ARTIFACTORY=YOUR_CREDENTIALS_USERNAME
  export TOKEN_ARTIFACTORY=YOUR_CREDENTIALS_TOKEN
  ```

  **Si las dependencia no las reconoce al sincronizar**, se deben
  incluir a través de variables de entorno en el archivo:

`~/.zshrc`

- Incluidos en el fichero _local.properties_ con la siguiente
  estructura:

  ```java
  artifactory.user=YOUR_CREDENTIALS_USERNAME
  artifactory.token=YOUR_CREDENTIALS_TOKEN
  ```

### 2.2. Dependencias requeridas para la integración básica

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

Actualmente las librerías de FacePhi se distribuyen de forma remota a
través de diferentes gestores de dependencias.

Las dependencias base **obligatorias** para el uso del SDK son:

```java
implementation "com.facephi.androidsdk:sdk:$sdk_version"
implementation "com.facephi.androidsdk:core:$core_version"
```

---

## 3. Inicialización del SDK

**Debe evitarse inicializar un controlador que no vaya a usarse**.

El SDK funciona a través de un controlador principal (SDKController) que
debe inicializarse correctamente para poder hacer uso del resto de
funcionalidad. Los pasos a seguir en la inicialización son:

1.  Incluir el objeto Application a través de la clase SdkApplication.

2.  Decidir si la licencia se incluirá a través de un _String_ o con un
    _servicio de licenciamiento remoto_ (consultar **apartado 3.1**).

3.  El controlador _TrackingController_ en caso de querer conectar con
    la plataforma.

El **punto 3** es opcional, y requeriría usar el componente de Tracking
(más información acerca de este módulo en su propia documentación).

Un ejemplo de inicialización sin _TrackingController_ sería el
siguiente:

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOffline("LICENSE")
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Napier.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}
```

Un ejemplo de inicialización con _TrackingController_ sería el
siguiente:

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOffline("LICENSE"),
    trackingController = TrackingController(),
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Napier.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}
```

### 3.1. **Inyección de licencias**

Como se ha comentado previamente, actualmente existen dos formas de
inyectar la licencia:

#### a. **Obteniendo la licencia a través de un servicio**

A través de un servicio que simplemente requerirá una URL y un API-KEY
como identificador. Esto evitaría problemas a la hora de manipular la
licencia, así como la constante sustitución de dichas licencias a la
hora de surgir algún problema con ella (malformación o modificación
indebida, expiración de la licencia...)

Ejemplo de implementación en Kotlin:

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOnline(EnvironmentLicensingData(
            url = "https://...",
            apiKey = "...")
      )),
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Napier.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}
```

Ejemplo de implementación en Java:

```java
SDKController.INSTANCE.initSdk(
    new SdkApplication(activity.getApplication()),
    new LicensingOnline(new EnvironmentLicensingData(
      url = "https://...",
      apiKey = "...")),
    sdkResult ->
    {
      if (sdkResult instanceof SdkResult.Success) {
        Napier.d("APP: INIT SDK: OK")
      } else if (sdkResult instanceof SdkResult.Error) {
        Napier.d("APP: INIT SDK: KO - ${it.error}")
      }
    }
  );
```

#### b. **Inyectando la licencia como String**

Se puede asignar la licencia directamente como un String, de la
siguiente manera:

Ejemplo de implementación en Kotlin:

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOffline("LICENSE"),
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Napier.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}
```

Ejemplo de implementación en Java:

```java
SDKController.INSTANCE.initSdk(
  new SdkApplication(activity.getApplication()),
  new LicensingOffline("LICENSE"),
  sdkResult ->
  {
    if (sdkResult instanceof SdkResult.Success) {
      Timber.d("APP: INIT SDK: OK")
    } else if (sdkResult instanceof SdkResult.Error) {
      Timber.d("APP: INIT SDK: KO - ${it.error}")
    }
  }
);
```

---

## 4. Iniciar nueva operación

Cada vez que se desee iniciar el flujo de alguna operación nueva
(ejemplos de operaciones serían: _onboarding, authentication,
videoCall_,...) es esencial indicarle al **SDKController** que ésta va a
comenzar, y así la SDK sabrá que las próximas llamadas de
**Componentes** (también llamados **Steps**) formarán parte de dicha
operación.

Al iniciar un proceso o flujo, **siempre** se deberá realizar la llamada
al método **newOperation**

Este método tiene 3 parámetros de entrada:

1.  **operationType**: Indica si se va a hacer un proceso de ONBOARDING
    o de AUTHENTICATION 2.

2.  **customerId**: Id único del usuario si se tiene (controlado a nivel
    de aplicación)

    1.  Este parámetro aparecerá reflejado para cada operación en la
        plataforma.

3.  **steps**: Lista de pasos de la operación si se han definido
    previamente

Hay 2 maneras de realizar este inicio de operación, dependiendo de si
**se conocen los pasos** que formarán el flujo del proceso de registro o
autenticación (en caso de que los componentes se ejecuten de forma
secuencial y siempre de la misma forma) o, en caso contrario, de que el
flujo **no esté definido** y sea desconocido (por ejemplo, el cliente
final es el que decide el orden de ejecución de los componentes).

- Flujo **conocido** (aparecerá la operación _trackeada_ en la
  plataforma con todos los pasos de la lista).

  Ejemplo de implementación Kotlin:

```java
val result = SDKController.newOperation(
        operationType = OperationType.ONBOARDING,
        customerId = "customer_id",
        steps = listOf(Step.SELPHI_COMPONENT, Step.SELPHID_COMPONENT))
when (result) {
    is SdkResult.Success -> {
        Timber.d("APP: NEW OPERATION OK")
    }
    is SdkResult.Error -> {
        Timber.d("APP: NEW OPERATION ERROR: ${result.error.name}")
    }
}
```

Ejemplo de implementación Java:

```java
 SDKController.INSTANCE.newOperation(
        OperationType.ONBOARDING,
        "customer_id",
        [Step.SELPHI_COMPONENT, Step.SELPHID_COMPONENT]
        ){
          if (sdkResult instanceof SdkResult.Success) {
            Napier.d("APP: NEW OPERATION: OK")
          } else if (sdkResult instanceof SdkResult.Error) {
            Napier.d("APP: NEW OPERATION: KO - ${it.error}")
          }
        }
  );
```

- Flujo **desconocido** (aparecerá la operación _trackeada_ en la
  plataforma con puntos suspensivos). Ejemplo de implementación
  Kotlin:

```java
val result = SDKController.newOperation(
        operationType = OperationType.ONBOARDING,
        customerId = "customer_id",
when (result) {
    is SdkResult.Success -> {
        Timber.d("APP: NEW OPERATION OK")
    }
    is SdkResult.Error -> {
        Timber.d("APP: NEW OPERATION ERROR: ${result.error.name}")
    }
}
```

Ejemplo de implementación Java:

```java
 SDKController.INSTANCE.newOperation(
        OperationType.ONBOARDING,
        "customer_id"
        ){
          if (sdkResult instanceof SdkResult.Success) {
            Napier.d("APP: NEW OPERATION: OK")
          } else if (sdkResult instanceof SdkResult.Error) {
            Napier.d("APP: NEW OPERATION: KO - ${it.error}")
          }
        }
  );
```

`sdkResult` → Contiene en data la información de la operación creada.

**Una vez creada la operación** se podrán ejecutar los componentes de la
SDK asociados a esta operación. Consultar la documentación específica de
cada componente para saber cómo hacerlo.

### 4.1 **Tipos de operación existentes**

En la actualidad, existen las siguientes operaciones, durante las cuales
se hacen uso de unos determinados **Componentes (STEPS).**

A continuación se muestra una tabla con la relación entre _operaciones_
y _steps_:

| **Operación (OperationType)** | **Componente (Step)**                  | Descripción                                                                                                                             |
| ----------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ONBOARDING                    | SELPHI_COMPONENT<br/>SELPHID_COMPONENT | - Validación facial de un selfie contra la cara de un documento <br/> - Extracción del OCR del documento <br/> - Detección de vivacidad |
| AUTHENTICATION                | SELPHI_COMPONENT                       | - Validación facial mediante plantillas <br/> - Detección de vivacidad                                                                  |

Esta lista se irá ampliando en próximas actualizaciones de la SDK, según
vayan apareciendo nuevos componentes y casos de uso.

---

## 5. Lanzamiento de componentes

La funcionalidad del SDK se divide en diferentes componentes con
controladores particulares. Estos controladores se “lanzarán” desde el
controlador general.

Una vez creada la **nueva operación** (**apartado 4**), se podrán lanzar
los diferentes controladores de la SDK. Para consultar esta información
se deberá acceder a la **documentación de cada uno de los componentes
específicos**.

Ejemplo de lanzamiento Kotlin:

```java
val result = SDKController.launch(XController(ConfigurationData()))
when (result) {
    is SdkResult.Success -> {
        //Result OK
        it.data
    }
    is SdkResult.Error -> {
        //Result KO
        it.error.name
    }
}
```

Ejemplo de lanzamiento Java:

```java
SDKController.INSTANCE.launch(
    new XController(new ConfigurationData()) {
        if (sdkResult instanceof SdkResult.Success) {
            //Result OK
            it.data
          } else if (sdkResult instanceof SdkResult.Error) {
            //Result KO
            it.error.name
          }
    }
)
```

---

## 6. Retorno de resultado

El resultado de cada componente será devuelto a través de la SDK
manteniendo siempre la misma estructura a través de la clase
**_SdkResult_** cuya clase es una Sealed Class que puede tener 2
posibles estados:

- SdkResult.Success: Indica que la operación ha finalizado
  correctamete y en su interior tiene:

  - **_data:_** Contiene el tipo de dato que sea necesario según el
    proceso/componente lanzado.

- SdkResult.Error

  - **_error:_** Contiene el tipo de error que sea necesario según
    el proceso/componente lanzado.

En la documentación de cada componente específico se desglosarán los
diferentes campos que puede devolver este objeto

Ejemplo de uso:

```java
when (result) {
    is SdkResult.Success -> {
        Napier.d("Selphi: OK")
        // SelphiResult:
        // result.data.bestImage
    }

    is SdkResult.Error -> Napier.d("Selphi: KO - ${result.error.name}")
}
```

---

## 7. Cierre de sesión

**Antes de que la aplicación se vaya a destruir**, se deberá cerrar la
sesión de la SDK para así avisar a la plataforma de su finalización.
Para ello, se ejecuta la siguiente línea de código:

```java
SDKController.closeSession()
```

Si se realiza un cierre de sesión, no se van a poder lanzar
controladores hasta que se vuelva a iniciar una nueva operación.

---

## 8. Controladores auxiliares

En este apartado se incluyen otros controladores y operaciones
auxiliares, algunos de ellos opcionales, y que pueden ser necesarios
para la correcta finalización del flujo.

Estos campos son necesarios para la comunicación con el servicio de
**Facephi**, en caso de querer realizar cualquier **verificación** y de
desear realizar el _tracking_ de una operación determinada.

### 8.1 Obtención del OperationId

```java
val result = SDKController.launch(GetOperationIdController())
Napier.d("Operation ID ${result}")
```

### 8.2 Obtención del OperationType

```java
val result = SDKController.launch(GetOperationTypeController())
Napier.d("Operation type ${result}")
```

### 8.3 Obtención del SessionId

```java
val result = SDKController.launch(GetSessionIdController())
Napier.d("Session ID ${result}")
```

### 8.4 Obtención del CustomerID

```java
val result = SDKController.launch(GetCustomerIdController())
Napier.d("Customer ID ${result}")
```

### 8.5 Asignación del CustomerID

```java
SDKController.launch(CustomerIdController("CustomerId"))
```

---

## 9. Opciones de depuración y control de errores

Existen ciertas opciones en el SDK que permiten un aumento en los logs
de depuración para poder comprobar que todo funciona de manera correcta.

### 9.1. Control de errores en las conexiones de Tracking con la plataforma

Una vez el SDK se haya iniciado correctamente, se pueden aplicar ciertos
ajustes para tener una mayor información acerca de los posibles errores
en tracking, se puede realizar un seguimiento a través de este
lanzamiento de controlador:

```java
SDKController.launch(TrackingErrorController {
    Napier.d("Tracking Error: ${it.name}")
})
```

### 9.2. Activación de Logs de depuración general

```java
SDKController.enableDebugMode()
```

---

## 10. Personalización de la SDK

Esta versión de la SDK permite modificar algunas características
visuales de los componentes. A continuación se indican los posibles
cambios que se pueden realizar.

Se recomienda agregar las modificaciones tanto en el tema **claro** como
**oscuro** (night).

### 10.1. Colores, logo y animaciones

Para cambiar los colores y el logo del SDK habría que incluir un fichero
XML en la aplicación del cliente (por ejemplo **_sdk_styles.xml_**)
cambiando el valor _hex_ (RGB) de cada color principal:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- SdkTheme -->
    <color name="sdkPrimaryColor">#7636FC</color>
    <color name="sdkSecondaryColor">#03DAC5</color>
    <color name="sdkBackgroundColor">#FFFFFF</color>
    <color name="sdkErrorColor">#DD3631</color>
    <!-- SdkColorsPalette -->
    <color name="sdkTitleTextColor">#1D2C4D</color>
    <color name="sdkBodyTextColor">#526080</color>
    <color name="sdkSuccessColor">#07A13A</color>
    <color name="sdkNeutralColor">#202C4B</color>
    <color name="sdkAccentColor">#EA7547</color>
    <color name="sdkTopIconsColor">#243760</color>
    <!-- SDK BUTTONS -->
    <dimen name="sdk_buttons_corner_dimen">32dp</dimen>
    <!-- SDK LOGO -->
    <drawable name="sdk_logo">@drawable/ic_demo_logo</drawable>

  <!-- ..Add particulars of each component... -->

</resources>
```

Para modificar el **logo** visible en los diferentes componentes del sdk
bastará con incluir en el fichero la siguiente línea incluyendo el
nombre del logo de la aplicación cliente:

```xml
<!-- SDK LOGO -->
<drawable name="sdk_logo">@drawable/logo_name</drawable>
```

Las animaciones aplican estilos (citados anteriormente) según los 5
colores fundamentales:

```java
sdkPrimaryColor
sdkErrorColor
sdkSuccessColor
sdkNeutralColor
sdkAccentColor
```

Si se cambia cualquiera de ellos se verán afectadas las animaciones de
los componentes.

Los componentes de Selphi y SelphID lleva su zip de recursos asociados
que se mantiene ajeno a esta característica del SDK.

### 10.2. Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- GENERAL -->
    <string name="sdk_permissions_exit_alert_title">Permission denied</string>
    <string name="sdk_permissions_exit_alert_question">In order to continue, you need to </string>
    <string name="sdk_permissions_exit_alert_question_other">allow access to the permission needed.</string>
    <string name="sdk_permissions_exit_alert_question_camera">allow access to the camera.</string>
    <string name="sdk_permissions_exit_alert_question_microphone">allow access to the microphone.</string>
    <string name="sdk_permissions_exit_alert_confirm">Retry</string>
    <string name="sdk_permissions_exit_alert_confirm_settings">Go to settings</string>
    <string name="sdk_exit_alert_title">Finish the process</string>
    <string name="sdk_exit_alert_question">Do you want to finish the process?</string>
    <string name="sdk_exit_alert_exit">Finish</string>
    <string name="sdk_exit_alert_cancel">Cancel</string>
    <string name="sdk_exit_finish_exit">Finish</string>
    <string name="sdk_text_video_error">An error has occurred with the connection to the video. Please try again.</string>
    <string name="sdk_text_socket_error">An error has occurred with the connection to the server. Please try again.</string>
    <string name="sdk_text_data_error">An error has occurred with the system configuration. Please try again.</string>
    <string name="sdk_text_timeout_error">Sorry, the operation has timed out. Please try again later.</string>
    <string name="sdk_network_connection_error_title">Connection error</string>
    <string name="sdk_network_connection_error_desc">Check your internet connection</string>
    <string name="sdk_network_connection_error_button">Exit</string>
    <string name="sdk_close">Close process</string>
    <string name="sdk_info">Show tutorial</string>
    <string name="sdk_previous_page">Previous page</string>
    <string name="sdk_next_page">Next page</string>
    <string name="sdk_image_captured">Image captured</string>
    <string name="sdk_confirmation_retry">Retry</string>
    <string name="sdk_confirmation_continue">Continue</string>
    <string name="sdk_skip">SKIP</string>

  <!-- ..Add particulars of each component... -->


</resources>
```

### 10.3. Fuente

Para modificar la fuente, se agregarán los ficheros .ttf a la carpeta
_font_ de la aplicación y renombrándolos como aparecen en la imagen:

![Image](/android/fonts.png)

### 10.4. Botones

En caso de desear cambiar la forma de los botones del SDK habría que
incluir esta línea en el fichero XML de estilos del SDK cambiando el
valor _dp_ de la variable _dimen_:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <dimen name="sdk_buttons_corner_dimen">5dp</dimen>
</resources>
```

---
