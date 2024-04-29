# Core Component

## 1. Introducción 
SDK Mobile es un conjunto de librerías (Componentes) que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integración en una aplicación Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deberá realizar la instalación de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan añadir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto.

## 1.1 Requisitos mínimos
La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

- Versión mínima Android: 23 - JDK 11

- Versión mínima iOS: 13

En cuanto a la arquitectura del dispositivo móvil:

- armeabi-v7, x86, arm64 y x64

### 1.2 Versión del plugin
La versión del plugin actual se puede consultar de la siguiente forma:

Buscamos el archivo config.xml en la raíz del plugin.

En el KEY/TAG version se indica la versión.

## 2. Inicialización de la sesión
### 2.1 Inicialización
Antes de poder utilizar cualquier componente, se deberá inicializar la sesión de la SDK. Esta inicialización se debe hacer lo más pronto posible, preferentemente al inicio de la aplicación. Al mismo tiempo, una vez terminadas todas las operaciones con la SDK Mobile, deberá cerrarse igualmente la sesión (apartado 7)

> [!WARNING]
> Este controlador (SDKController) es el que se va a utilizar para lanzar todas las funciones del SDK.

Se puede inicializar el componente actual de dos formas, dependiendo de cómo desees inyectar la licencia.

> [!NOTE]
> El nuevo método de licenciamiento permite gestionar las licencias de forma transparente para el integrador. La licencia se puede inyectar de dos maneras:

> - a. Obteniendo la licencia a través de un servicio mediante una URL y API-KEY
> - b. Inyectando la licencia directamente como String

En ambos casos, el resultado se devolverá por medio de una Promise, la cual contiene un objeto de la clase CoreResult. Se dará más información sobre cómo funciona esta clase en el apartado 5.

**a. Inyectando la licencia como String**
De esta forma se evitan problemas relacionados con la conexión y la petición al servicio de licencia. Se puede asignar la licencia directamente como un String de la siguiente manera:

```
function callInitSession()
{
    if (typeof facephi.plugins.sdkcore === "undefined") {
        showErrorUI("Cordova Core Sdk is not installed...");
        return;
    }
    console.log('callInitSession started...');
    const STRING_LICENSE = "<insert-your-license-here>";
    //const apiKey   = window.cordova.platformId.toUpperCase() == "IOS" ? LICENSE_APIKEY_IOS : LICENSE_APIKEY_ANDROID
    facephi.plugins.sdkcore.launchInitSession({
        "license": STRING_LICENSE,
        //"licenseUrl": LICENSE_URL,
        //"licenseApiKey": apiKey,
        "enableTracking": true,
        "enableBehavior": false
    })
    .then(
        (result) => console.log(result),
        (err) => console.log(err),
    )
    .finally (() =>
    {
        console.log("callInitSession finished...");
    });
}
```

**b. Obteniendo la licencia a través de un servicio.**
A través de un servicio que simplemente requerirá una URL y un API-KEY. Esto evitaría problemas a la hora de manipular la licencia, además de ahorrarse los problemas relacionados con el mantenimiento de estas (malformación o modificación indebida, expiración de la licencia…)

Para hacer uso de esta funcionalidad:

```
function callInitSession()
{
    if (typeof facephi.plugins.sdkcore === "undefined") {
        showErrorUI("Cordova Core Sdk is not installed...");
        return;
    }
    console.log('callInitSession started...');
    //const STRING_LICENSE = "<insert-your-license-here>";
    //const apiKey = window.cordova.platformId.toUpperCase() == "IOS" ? LICENSE_APIKEY_IOS : LICENSE_APIKEY_ANDROID
    facephi.plugins.sdkcore.launchInitSession({
        //"license": STRING_LICENSE,
        "licenseUrl": "https://***.***.pro",
        "licenseApiKey": "<enter_your_apikey_here>",
        "enableTracking": true,
        "enableBehavior": false
    })
    .then(
        (result) => console.log(result),
        (err) => console.log(err),
    )
    .finally (() =>
    {
        console.log("callInitSession finished...");
    });
}
```

### 2.2 Configuración de inicio de sesión
Como se ha visto en el fragmento de código del apartado anterior, existe una clase llamada SdkCoreInitConfig que permite inicializar la sesión de forma personalizada. A continuación se comentan las propiedades que contiene dicha clase.

- license (string)
Permite establecer la licencia de los componentes. Esta licencia deberá ser provista por Facephi.

```
license: "valid license“
```

- licenseUrl (string)
Establece la url donde el componente Core valida la licencia de forma remota. Este endpoint deberá ser provisto por Facephi.

```
licenseUrl: "https://***.***.pro"
```

- licenseApiKey (string)

Establece el apikey que se envía para obtener la licencia del servicio.
```
licenseApiKey: "valid ApiKey"
```

- enableTracking (boolean)
Habilita o deshabilita el uso del componente de tracking. Esto permite ver la información de lo que hace el cliente en la plataforma de Facephi.  Este componente funciona en background mientras se ejecutan el resto de componentes instalados, y analiza el comportamiento del usuario durante el proceso actual. 

```
enableTracking: true
```

El resultado será devuelto por medio de una Promise que contiene un objeto de la clase SdkCoreResult. Más información sobre cómo funciona esta clase se añadirá en el apartado 6.

## 3. Inicialización de la operación
Cada vez que se desee iniciar el flujo de alguna operación nueva (ejemplos de operaciones serían: onboarding, authentication,…) es esencial indicarle al SDKController que ésta va a comenzar, y así la SDK sabrá que las próximas llamadas de Componentes (también llamados Steps) formarán parte de dicha operación. Esto es necesario para trackear a la plataforma la información global de esta operación de forma satisfactoria.

> [!WARNING]
> Al iniciar un proceso o flujo, siempre se deberá realizar la llamada al método newOperation

Este método tiene 2 parámetros de entrada:

- **operationType**: Indica si se va a hacer un proceso de ONBOARDING o de AUTHENTICATION
- **customerId**: Id único del usuario si se tiene (controlado a nivel de aplicación)

Para poder ejecutar el método launchInitOperation, la llamada debe realizarse en la clase SdkMobileCore como se especifica a continuación:

```
function callInitOperation()
{
    if (typeof facephi.plugins.sdkcore === "undefined") {
        showErrorUI("Cordova Core Sdk is not installed...");
        return;
    }
    console.log('callInitOperation started...');
    facephi.plugins.sdkcore.launchInitOperation({
        "customerId": "cordoba@facephi.com",
        "type": SdkMobileOperationType.ONBOARDING
    })
    .then(
        (result) => console.log(result),
        (err) => console.log(err),
    )
    .finally (() =>
    {
        console.log("callInitOperation finished...");
    });
}
```

## 4. Lanzamiento de componentes

> [!NOTE]
> Una vez creada la nueva operación, se podrán lanzar los diferentes controladores de los componentes instalados en la SDK. Para consultar esta información se deberá acceder a la documentación de cada uno de los componentes específicos.

## 5. Retorno del Resultado
El resultado de cada componente será devuelto a través de la SDK manteniendo siempre la misma estructura:

```
SdkCoreResult {
      finishStatus: string;
      finishStatusDescription?: string;
      errorType: string;
      errorMessage?: string;
      tokenized?: string;
}
```
Los parámetros recibidos son los siguientes:

- **finishStatus**: Devuelve el diagnóstico global de la operación. Los valores posibles para el tipo de excepción son:

    - **SdkExceptionType.Ok**: La operación ha finalizado satisfactoriamente.

    - **SdkExceptionType.Error**: Se ha producido un error, el cuál se indicará en el enumerado errorType y, opcionalmente, se mostrará un mensaje de información extra en la propiedad errorMessage.

- **finishStatusDescription**: Devuelve una descripción global de la operación. Parámetro opcional.

- **errorType**: Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el parámetro finishStatus con el valor Error). Se definen en la clase SdkErrorType. Los valores que puede tener son los siguientes:

    - **UnknownError**. Error no gestionado.

    - **NoError**: No ha ocurrido ningún error. El proceso puede continuar.

    - **CameraPermissionDenied**: Excepción que se produce cuando el sdk no tiene permiso de acceso a la cámara.

    - **HardwareError**: Excepción que surge cuando existe algún problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos.

    - **ExtractionLicenseError**: Excepción que ocurre cuando ha habido un problema de licencias en el servidor.

    - **UnexpectedCaptureError**: Excepción que ocurre durante la captura de frames por parte de la cámara.

    - **ControlNotInitializedError**: El configurador del widget no ha sido inicializado.

    - **BadExtractorConfiguration**: Problema surgido durante la configuración del widget.

    - **CancelByUser**: Excepción que se produce cuando el usuario para la extracción de forma manual.

    - **TimeOu**t:Excepción que se produce cuando transcurre un tiempo máximo sin conseguir finalizar la extracción con éxito.

    - **InitProccessError**: Excepción que se produce cuando el sdk no puede procesar las imagenes capturadas.

    - **NfcError**: Excepción que se produce cuando el sdk no tiene permiso de acceso al nfc.

    - **NetworkConnection**: Excepción que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red.

    - **TokenError**: Excepción que se produce cuando se pasa por parámetro un token no válido.

    - **InitSessionError**: Excepción que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al `SdkCore` al ppio de llamar a cualquier otro componente.

    - **ComponentControllerError**: Excepción que se produce cuando no se puede instanciar el componente.

    - **errorMessage**: Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.

    - **tokenized**: Parámetro optional. Sólo será visible si el método getExtraData es llamado. El plugin retornará un valor en formato string. Más información en el apartado 7.

    - **data**: Parámetro optional.

## 6. Cierre de sesión
Antes de que la aplicación se vaya a destruir, se deberá cerrar la sesión de la SDK para así avisar a la plataforma de su finalización. Para ello, se ejecuta el siguiente fragmento de código:

```
function callCloseSession()
{
    if (typeof facephi.plugins.sdkcore === "undefined") {
        showErrorUI("Cordova Core Sdk is not installed...");
        return;
    }
    console.log('callCloseSession started...');
    facephi.plugins.sdkcore.launchCloseSession()
    .then(
        (result) => { console.log(result); },
        (err) => console.log(err),
    )
    .finally (() =>
    {
        console.log("callCloseSession finished...");
    });
}
``` 

El resultado se devolverá por medio de una Promise, la cual contiene un objeto de la clase **SdkCoreResult**. Para saber más sobre cómo funciona esta clase consultar el apartado 5.

## 7. Método ExtraData
El método getExtraData permite generar los identificadores necesarios para una operación que deba continuar en el backend. Esta situación suele darse en casos en los que, una vez obtenida la información necesaria en la aplicación del cliente, se deba enviar esa información a un determinado servicio para su posterior validación o análisis. En caso de que deban trackearse los resultados de esos procesos en la Plataforma, ésta deberá ser capaz de unificar la primera parte del proceso realizada en cliente con la última realizada en el servicio, ya que al final forman parte de la misma operación. Ejemplos en los que puede ser necesario el envío de estos datos:

- En cliente se obtiene una selfie y se requiere hacer una validación de vivacidad en un servicio.
- En cliente se captura la cara de un documento y la selfie de un usuario y posteriomente se requiere hacer la validación de estos en un servicio.
- Se requiere extraer el OCR de un documento en el cliente y analizar el OCR en un servicio.

Es por ello que a la hora de enviar la información capturada en una determinada operación al backend, deberá enviarse también un campo llamado extraData. Dicho campo se genera llamando al siguiente método:

```
function callGetExtraData()
{
    if (typeof facephi.plugins.sdkcore === "undefined") {
        showErrorUI("Cordova Core Sdk is not installed...");
        return;
    }
    console.log('callGetExtraData started...');
    tokenized = null;
    facephi.plugins.sdkcore.launchGetExtraData()
    .then(
        (result) => {
            console.log(result);
            if (parseInt(result.finishStatus) == 1)
            {
                tokenized = result.tokenized;
                passiveLivenessEvaluate();
                authenticateFacialDocument();
            }
        },
        (err) => console.log(err),
    )
    .finally (() =>
    {
        console.log("callGetExtraData finished...");
    });
}
```