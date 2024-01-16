# Core Component - Android \[ES\]

Este documento hace referencia la **versión 1.5.X** del componente

-   [1. Introducción](#CoreComponent-Android%5BES%5D-1.Introducción)
    -   [1.1 Requisitos
        mínimos](#CoreComponent-Android%5BES%5D-1.1Requisitosmínimos)
-   [2. Integración del
    componente](#CoreComponent-Android%5BES%5D-2.Integracióndelcomponente)
    -   [2.1. Añadir repositorio
        privado](#CoreComponent-Android%5BES%5D-2.1.Añadirrepositorioprivado)
    -   [2.2. Dependencias requeridas para la
        integración](#CoreComponent-Android%5BES%5D-2.2.Dependenciasrequeridasparalaintegración)
-   [3. Inicialización del
    componente](#CoreComponent-Android%5BES%5D-3.Inicializacióndelcomponente)
    -   [3.1 Inyección de
        licencias](#CoreComponent-Android%5BES%5D-3.1Inyeccióndelicencias)
        -   [a. Obteniendo la licencia a través de un
            servicio](#CoreComponent-Android%5BES%5D-a.Obteniendolalicenciaatravésdeunservicio)
        -   [b. Inyectando la licencia como
            String](#CoreComponent-Android%5BES%5D-b.InyectandolalicenciacomoString)
-   [4. Iniciar nueva
    operación](#CoreComponent-Android%5BES%5D-4.Iniciarnuevaoperación)
    -   [4.1 Tipos de operación
        existentes](#CoreComponent-Android%5BES%5D-4.1Tiposdeoperaciónexistentes)
-   [5. Lanzamiento de
    componentes](#CoreComponent-Android%5BES%5D-5.Lanzamientodecomponentes)
-   [6. Retorno de
    resultado](#CoreComponent-Android%5BES%5D-6.Retornoderesultado)
-   [7. Cierre de
    sesión](#CoreComponent-Android%5BES%5D-7.Cierredesesión)
-   [8. Controladores
    auxiliares](#CoreComponent-Android%5BES%5D-8.Controladoresauxiliares)
    -   [8.1 Obtención del
        OperationId](#CoreComponent-Android%5BES%5D-8.1ObtencióndelOperationId)
    -   [8.2 Obtención del
        OperationType](#CoreComponent-Android%5BES%5D-8.2ObtencióndelOperationType)
    -   [8.3 Obtención del
        SessionId](#CoreComponent-Android%5BES%5D-8.3ObtencióndelSessionId)
    -   [8.4 Obtención del
        CustomerID](#CoreComponent-Android%5BES%5D-8.4ObtencióndelCustomerID)
    -   [8.5 Asignación del
        CustomerID](#CoreComponent-Android%5BES%5D-8.5AsignacióndelCustomerID)
-   [9. Personalización de la
    SDK](#CoreComponent-Android%5BES%5D-9.PersonalizacióndelaSDK)
    -   [9.1 Colores y
        logo](#CoreComponent-Android%5BES%5D-9.1Coloresylogo)
    -   [9.2 Textos](#CoreComponent-Android%5BES%5D-9.2Textos)
    -   [9.3 Fuente](#CoreComponent-Android%5BES%5D-9.3Fuente)
    -   [9.4 Botones](#CoreComponent-Android%5BES%5D-9.4Botones)

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
***Core Component***. Este componente es de **instalación obligatoria**,
independientemente del caso de uso, pues contiene **funcionalidad
genérica** a toda la sdk, además de permitir el uso de componentes más
específicos. Sus principales características son las siguientes:

-   Permite configurar e inicializar los demás componentes instalados

-   Permite realizar las llamadas a los componentes y obtener los
    resultados pertinentes

-   Gestión de las licencias

### 1.1 **Requisitos mínimos**

La versión mínima de la SDK de Android requerida es la siguiente:

-   SDK mínima (minSdk): **23**

-   API Version: **34**

-   Kotlin: **1.9.10**

-   Plugin Gradle Android: **8.1.1**

------------------------------------------------------------------------

## 2. Integración del componente

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. **Añadir repositorio privado**

Por cuestiones de seguridad y mantenimiento, los nuevos componentes de
la ***SDKMobile*** se almacenan en unos repositorios privados que
requieren de unas credenciales específicas para poder acceder a ellos.
Esas credenciales deberá obtenerlas a través del *equipo de soporte* de
**Facephi**.

Una vez obtenidas las credenciales, se deberá incluir el siguiente
fragmento de código para configurar el repositorio maven en el
**Gradle** de tu proyecto, o en el fichero **settings.gradle** del
mismo. Se recomienda incluirlo tras *mavenCentral()*

``` java
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

-   Como variables de entorno con el siguiente nombre. Por ejemplo:

    ``` java
    export USERNAME_ARTIFACTORY=YOUR_CREDENTIALS_USERNAME
    export TOKEN_ARTIFACTORY=YOUR_CREDENTIALS_TOKEN
    ```

    **Si las dependencia no las reconoce al sincronizar**, se deben
    incluir a través de variables de entorno en el archivo:

`~/.zshrc`

-   Incluidos en el fichero *local.properties* con la siguiente
    estructura:

    ``` java
    artifactory.user=YOUR_CREDENTIALS_USERNAME
    artifactory.token=YOUR_CREDENTIALS_TOKEN
    ```

### 2.2. **Dependencias requeridas para la integración**

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (*Widgets*), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
***SDKMobile***.

-   Actualmente las librerías de FacePhi se distribuyen de forma remota
    a través de diferentes gestores de dependencias. Las dependencias
    **obligatorias** que deberán haberse instalado previamente:

``` java
timber_version = '5.0.1'
appcompat_version = '1.6.1'
core_ktx_version = '1.9.0'
kotlinx_coroutines_version = '1.6.4'
kotlin_reflect_version = '1.7.10'
ktor_version = '1.6.7'
kotlinx_serialization_json_version = '1.3.3'

// 3rd Parties Dependencies
implementation "androidx.core:core-ktx:$core_ktx_version"
implementation "androidx.appcompat:appcompat:$appcompat_version"
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:$kotlinx_coroutines_version"
implementation "com.jakewharton.timber:timber:$timber_version"
implementation "io.ktor:ktor-client-serialization:$ktor_version"
implementation "org.jetbrains.kotlin:kotlin-reflect:$kotlin_reflect_version"
implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinx_serialization_json_version"

// Facephi Dependencies
implementation "com.facephi.androidsdk:license_checker_component:$versions.license_checker_component"
implementation "com.facephi.androidsdk:licensing_component:$versions.licensing_component"
```

-   Una vez instaladas las dependencias necesarias, se podrá hacer uso
    de las diferentes funcionalidades del **componente** actual:

    ``` java
    implementation "com.facephi.androidsdk:sdk:$sdk_version"
    implementation "com.facephi.androidsdk:core:$core_version"
    ```

------------------------------------------------------------------------

## 3. Inicialización del componente

Cada uno de los componentes tiene un controlador (*Controller*) que
permitirá acceder a su propia funcionalidad. Antes de poder utilizarse,
deberán inicializarse correctamente. **Debe evitarse terminantemente
inicializar un controlador que no vaya a usarse**. Los pasos a seguir en
la inicialización son:

1.  Se incluye el objeto Application

2.  Se decide si la licencia se incluirá a través de un String o con un
    servicio de licenciamiento remoto (consultar **apartado 3.1**).

3\. El controlador *TrackingController* en caso de querer conectar con
la plataforma.

El **punto 3** es opcional, y requeriría usar el componente de Tracking
(más información acerca de este módulo en su propia documentación).

``` java
SDKController.initSdk(
      sdkApplication = SdkApplication(application),
      license = "LICENSE"
      ) {
          when (it) {
              is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
              is SdkResult.Error -> Napier.d(
                     "APP: INIT SDK: KO - ${it.error.javaClass.simpleName}"
                    ) 
           }
 })
          
```

### 3.1 **Inyección de licencias**

Como se ha comentado previamente, actualmente existen dos formas de
inyectar la licencia:

#### a. **Obteniendo la licencia a través de un servicio**

A través de un servicio que simplemente requerirá una URL y un API-KEY
como identificador. Esto evitaría problemas a la hora de manipular la
licencia, así como la constante sustitución de dichas licencias a la
hora de surgir algún problema con ella (malformación o modificación
indebida, expiración de la licencia...)

``` java
/*   INIT WITH EnvironmentLicensingData   */

SDKController.initSdk(
      sdkApplication = SdkApplication(application),
      environmentLicensingData = EnvironmentLicensingData(
            url = "https://...",
            apiKey = "...")
        ) {
          when (it) {
              is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
              is SdkResult.Error -> Napier.d(
                     "APP: INIT SDK: KO - ${it.error.javaClass.simpleName}"
                    ) 
           }
 })
```

#### b. **Inyectando la licencia como String**

Se puede asignar la licencia directamente como un String, de la
siguiente manera:

``` java
/*   INIT WITH STRING   */

SDKController.initSdk(
      sdkApplication = SdkApplication(application),
      license = "LICENSE"
      ) {
          when (it) {
              is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
              is SdkResult.Error -> Napier.d(
                     "APP: INIT SDK: KO - ${it.error.javaClass.simpleName}"
                    ) 
           }
 })
```

------------------------------------------------------------------------

## 4. Iniciar nueva operación

Cada vez que se desee iniciar el flujo de alguna operación nueva
(ejemplos de operaciones serían: *onboarding, authentication,
videoCall*,...) es esencial indicarle al **SDKController** que ésta va a
comenzar, y así la SDK sabrá que las próximas llamadas de
**Componentes** (también llamados **Steps**) formarán parte de dicha
operación. Esto es necesario para *trackear* a la plataforma la
información global de esta operación de forma satisfactoria.

Al iniciar un proceso o flujo, **siempre** se deberá realizar la llamada
al método **newOperation**

Este método tiene 3 parámetros de entrada:

1.  **operationType**: Indica si se va a hacer un proceso de ONBOARDING
    o de AUTHENTICATION 2.

2.  **customerId**: Id único del usuario si se tiene (controlado a nivel
    de aplicación)

3.  **steps**: Lista de pasos de la operación si se han definido
    previamente

Hay 2 maneras de realizar este inicio de operación, dependiendo de si
**se conocen los pasos** que formarán el flujo del proceso de registro o
autenticación (en caso de que los componentes se ejecuten de forma
secuencial y siempre de la misma forma) o, en caso contrario, de que el
flujo **no esté definido** y sea desconocido (por ejemplo, el cliente
final es el que decide el orden de ejecución de los componentes).

-   Flujo **conocido** (aparecerá la operación *trackeada* en la
    plataforma con todos los pasos de la lista). Ejemplo de
    implementación:

``` java
try {
    SDKController.newOperation(
        operationType = OperationType.ONBOARDING,        
        customerId = onboarding-android-sdk@facephi.com,
        steps = listOf(Step.SELPHI, Step.SELPHID)    
        )
} catch (e: SdkException) {
    Timber.d("APP: INIT ERROR ${e.errorType.name}")
}
```

-   Flujo **desconocido** (aparecerá la operación *trackeada* en la
    plataforma con puntos suspensivos). Ejemplo de implementación:

``` java
try {
    SDKController.newOperation(
        operationType = OperationType.ONBOARDING,        
        customerId = onboarding-android-sdk@facephi.com,    
        )
} catch (e: SdkException) {
    Timber.d("APP: INIT ERROR ${e.errorType.name}")
}
```

`sdkResult` → Contiene en data la información de la operación creada.

 

**Una vez creada la operación** se podrán ejecutar los componentes de la
SDK asociados a esta operación. Consultar la documentación específica de
cada componente para saber cómo hacerlo.

### 4.1 **Tipos de operación existentes**

En la actualidad, existen las siguientes operaciones, durante las cuales
se hacen uso de unos determinados **Componentes (STEPS).**

A continuación se muestra una tabla con la relación entre *operaciones*
y *steps*:

<table class="confluenceTable" data-table-width="760"
data-layout="default"
data-local-id="32fbe475-2014-4d4d-91f8-be4e77260ea5">
<tbody>
<tr class="header">
<th class="confluenceTh"><p><strong>Operación
(</strong><em><strong>OperationType</strong></em><strong>)</strong></p></th>
<th class="confluenceTh"><p><strong>Componente
(</strong><em><strong>Step</strong></em><strong>)</strong></p></th>
<th class="confluenceTh"><p><strong>Descripción</strong></p></th>
</tr>
&#10;<tr class="odd">
<td class="confluenceTd"><p>ONBOARDING</p></td>
<td class="confluenceTd"><ul>
<li><p>SELPHID_COMPONENT</p></li>
<li><p>SELPHI_COMPONENT</p></li>
</ul></td>
<td class="confluenceTd"><ul>
<li><p>Validación facial de un selfie contra la cara de un
docuento</p></li>
<li><p>Extracción del OCR del documento</p></li>
<li><p>Detección de vivacidad</p></li>
</ul></td>
</tr>
<tr class="even">
<td class="confluenceTd"><p>AUTHENTICATION</p></td>
<td class="confluenceTd"><ul>
<li><p>SELPHI_COMPONENT</p></li>
</ul></td>
<td class="confluenceTd"><ul>
<li><p>Validación facial mediante plantillas</p></li>
<li><p>Detección de vivacidad</p></li>
</ul></td>
</tr>
</tbody>
</table>

Esta lista se irá ampliando en próximas actualizaciones de la SDK, según
vayan apareciendo nuevos componentes y casos de uso.

------------------------------------------------------------------------

## 5. Lanzamiento de componentes

Una vez creada la **nueva operación** (**apartado 4**), se podrán lanzar
los diferentes controladores de la SDK. Para consultar esta información
se deberá acceder a la **documentación de cada uno de los componentes
específicos**.

------------------------------------------------------------------------

## 6. Retorno de resultado

El resultado de cada componente será devuelto a través de la SDK
manteniendo siempre la misma estructura de 3 campos:

1.  **finishStatus**: Que nos indicará si la operación ha finalizado
    correctamente. Posibles valores FinishStatus.STATUS_OK ,
    FinishStatus.STATUS_ERROR

2.  **errorType**: Si *finishStatus* indica que ha habido un error, este
    campo tendrá la descripción del mismo.

3.  **data**: Tendrá los datos de respuesta de la función del SDK. Este
    campo será diferente dependiendo del componente que se haya

ejecutado. En la documentación de cada componente específico se
desglosarán los diferentes campos que puede devolver este objeto

------------------------------------------------------------------------

## 7. Cierre de sesión

**Antes de que la aplicación se vaya a destruir**, se deberá cerrar la
sesión de la SDK para así avisar a la plataforma de su finalización.
Para ello, se ejecuta la siguiente línea de código:

``` java
SDKController.closeSession()
```

------------------------------------------------------------------------

## 8. Controladores auxiliares

En este apartado se incluyen otros controladores y operaciones
auxiliares, algunos de ellos opcionales, y que pueden ser necesarios
para la correcta finalización del flujo.

Estos campos son necesarios para la comunicación con el servicio de
**Facephi**, en caso de querer realizar cualquier **verificación** y de
desear realizar el *tracking* de una operación determinada.

### 8.1 Obtención del OperationId

``` java
SDKController.launchMethod(
    GetOperationIdController {
        Napier.d("Operation ID ${it})
    }
)
```

### 8.2 Obtención del OperationType

``` java
SDKController.launchMethod(
    GetOperationTypeController {
        Napier.d("Operation type ${it})
    }
)
```

### 8.3 Obtención del SessionId

``` java
SDKController.launchMethod(
    GetSessionIdController {
        Napier.d("Session ID ${it})
    }
)
```

### 8.4 Obtención del CustomerID

``` java
SDKController.launchMethod(
    GetCustomerIdController {
        Napier.d("Customer ID ${it})
    }
)
```

### 8.5 Asignación del CustomerID

``` java
SDKController.launchMethod(
    CustomerIdController("CustomerId")
)
```

------------------------------------------------------------------------

## 9. Personalización de la SDK

Esta versión de la SDK permite modificar algunas características
visuales de los componentes. A continuación se indican los posibles
cambios que se pueden realizar.

Se recomienda agregar las modificaciones tanto en el tema **claro** como
**oscuro** (night).

### 9.1 **Colores y logo**

Para cambiar los colores y el logo del SDK habría que incluir un fichero
XML en la aplicación del cliente (por ejemplo ***sdk_styles.xml***)
cambiando el valor *hex* (RGB) de cada color principal:

``` java
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- GENERAL -->
    <color name="sdkPrimaryColor">#FF6200EE</color>
    <color name="sdkPrimaryVariantColor">#FF3700B3</color>
    <color name="sdkSecondaryColor">#FF03DAC5</color>
    <color name="sdkTitleTextColor">#121212</color>
    <color name="sdkBodyTextColor">#5a6476</color>
    <color name="sdkBackgroundColor">#f2f2f7</color>
    
  <!-- ..Add particulars of each component... -->
  
  
</resources>
```

Para modificar el **logo** visible en los diferentes componentes del sdk
bastará con incluir en el fichero la siguiente línea incluyendo el
nombre del logo de la aplicación cliente:

``` java
    <!-- SDK LOGO -->
    <drawable name="sdk_logo">@drawable/logo_name</drawable>
```

 

### 9.2 **Textos**

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada *String* por el deseado.

``` java
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- GENERAL -->
    <string name="sdk_permissions_exit_alert_title">Permissions needed</string>
    <string name="sdk_permissions_exit_alert_question">Permissions are needed to continue</string>
    <string name="sdk_permissions_exit_alert_confirm">Request permissions</string>
    <string name="sdk_permissions_exit_alert_cancel">Exit</string>
    <string name="sdk_permissions_exit_alert_title_settings">Permissions needed</string>
    <string name="sdk_permissions_exit_alert_question_settings">Permissions are needed to continue, go to settings to give the app permissions.</string>
    <string name="sdk_permissions_exit_alert_confirm_settings">Open settings</string>
    <string name="sdk_permissions_exit_alert_cancel_settings">Exit</string>
    <string name="sdk_exit_alert_title">Finish the process</string>
    <string name="sdk_exit_alert_question">Do you want to finish the process?</string>
    <string name="sdk_exit_alert_exit">Finish</string>
    <string name="sdk_exit_alert_cancel">Cancel</string>
    <string name="sdk_exit_finish_exit">Exit</string>
    <string name="sdk_text_video_error">An error has occurred with the connection to the video. Please try again.</string>
    <string name="sdk_text_socket_error">An error has occurred with the connection to the server. Please try again.</string>
    <string name="sdk_text_data_error">An error has occurred with the system configuration. Please try again.</string>
    <string name="sdk_text_timeout_error">Sorry, the operation has timed out. Please try again later.</string>
    <string name="sdk_exit_finish_retry">Repeat the process</string>
    <string name="sdk_network_connection_error_title">Connection error</string>
    <string name="sdk_network_connection_error_desc">Check your internet connection</string>
    <string name="sdk_network_connection_error_button">Exit</string>
 
  <!-- ..Add particulars of each component... -->
  
  
</resources>
```

### 9.3 **Fuente**

Para modificar la fuente, se agregarán los ficheros .ttf a la carpeta
*font* de la aplicación y renombrándolos como aparecen en la imagen:

<img src="attachments/2484568113/2525364472.png" class="image-center"
loading="lazy" data-image-src="attachments/2484568113/2525364472.png"
data-height="111" data-width="387" data-unresolved-comment-count="0"
data-linked-resource-id="2525364472" data-linked-resource-version="1"
data-linked-resource-type="attachment"
data-linked-resource-default-alias="d886b449-da3f-4670-8f44-19f13fcb3d48.png"
data-base-url="https://facephicorporative.atlassian.net/wiki"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="2484568113"
data-linked-resource-container-version="29"
data-media-id="bc952ef7-5600-42c3-a519-97d86776ed90"
data-media-type="file" />

### 9.4 **Botones**

En caso de desear cambiar la forma de los botones del SDK habría que
incluir esta línea en el fichero XML de estilos del SDK cambiando el
valor *dp* de la variable *dimen*:

``` java
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <dimen name="sdk_buttons_corner_dimen">5dp</dimen>
</resources>
```

## Attachments:

<img src="images/icons/bullet_blue.gif" width="8" height="8" />
[d886b449-da3f-4670-8f44-19f13fcb3d48.png](attachments/2484568113/2525364472.png)
(image/png)  
