# Core Component

## 1. Introducción 

El Componente tratado en el documento actual recibe el nombre de Core Component. **Este componente es de instalación obligatoria**, independientemente del caso de uso, pues contiene funcionalidad genérica a toda la sdk, además de permitir el uso de componentes más específicos. 

### 1.1 Requisitos mínimos

La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

- Versión mínima Android: **24 - JDK 11**

- Versión mínima iOS: **13**

En cuanto a la arquitectura del dispositivo móvil:

- armeabi-v7, x86, arm64 y x64

### 1.2 Versión del plugin

La versión del widget se puede consultar de la siguiente manera:

Buscamos el fichero *pubspec.yaml* en la raíz del plugin.

En la etiqueta **version** se indica la versión.

---

## 2. Inicialización de la sesión
### 2.1 Inicialización

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo *node_modules/@facephi/sdk-core-react-native/src/src/index.tsx* del componente.
</div>

Antes de poder utilizar cualquier componente, se deberá inicializar la sesión de la SDK. Esta inicialización se debe hacer lo más pronto posible, preferentemente al inicio de la aplicación. Al mismo tiempo, una vez terminadas todas las operaciones con la SDK Mobile, deberá cerrarse igualmente la sesión (***apartado 6***)

<div class="warning">
<span class="warning">:warning:</span>
Este controlador (SDKController) es el que se va a utilizar para lanzar todas las funciones del SDK.
</div>

Se puede inicializar el componente actual de dos formas, dependiendo de cómo desees inyectar la licencia.

<div class="note">
<span class="note">:information_source:</span>
El nuevo método de licenciamiento permite gestionar las licencias de forma transparente para el integrador. La licencia se puede inyectar de dos maneras:

- a. Obteniendo la licencia a través de un servicio mediante una URL y API-KEY
- b. Inyectando la licencia directamente como String
</div>

En ambos casos, el resultado se devolverá por medio de una Promise, la cual contiene un objeto de la clase **CoreResult**. Se dará más información sobre cómo funciona esta clase en el ***apartado 5***.

**a. Inyectando la licencia como String**
De esta forma se evitan problemas relacionados con la conexión y la petición al servicio de licencia. Se puede asignar la licencia directamente como un String de la siguiente manera:

```dart
Future<Either<Exception, CoreResult>> initSession() async
  {
    try
    {
      FphiSdkmobileCore core = FphiSdkmobileCore();
      String lic    = (Platform.isAndroid) ? LICENSE_ANDROID : LICENSE_IOS;

      final Map resultJson = await core.initSession(widgetConfigurationJSON: CoreConfigurationInitSession(
          mLicense: lic,
          mEnableTracking: true
      ));

      return Right(CoreResult.fromMap(resultJson));
    } on Exception catch (e) {
      return (Left(e));
    }
  }
```

**b. Obteniendo la licencia a través de un servicio.**
A través de un servicio que simplemente requerirá una URL y un API-KEY. Esto evitaría problemas a la hora de manipular la licencia, además de ahorrarse los problemas relacionados con el mantenimiento de estas (malformación o modificación indebida, expiración de la licencia…)

Para hacer uso de esta funcionalidad:


```dart
Future<Either<Exception, CoreResult>> initSession() async
  {
    try
    {
      FphiSdkmobileCore core = FphiSdkmobileCore();

      String apiKey = (Platform.isAndroid) ? LICENSE_APIKEY_ANDROID : LICENSE_APIKEY_IOS;

      final Map resultJson = await core.initSession(widgetConfigurationJSON: CoreConfigurationInitSession(
          mLicenseUrl: "https://***.***.pro",
          mLicenseApiKey: apiKey,
          mEnableTracking: true
      ));

      return Right(CoreResult.fromMap(resultJson));
    } on Exception catch (e) {
      return (Left(e));
    }
  }
```

### 2.2 Configuración de inicio de sesión
Como se ha visto en el fragmento de código del apartado anterior, existe una clase llamada **InitSessionConfiguration** que permite inicializar la sesión de forma personalizada. A continuación se comentan las propiedades que contiene dicha clase.

#### 2.2.1 license

**type:** *string*

Permite establecer la licencia de los componentes. Esta licencia deberá ser provista por Facephi.

```
mLicense: "valid license“
```

# 2.2.2 licenseUrl

**type:** *string*

Establece la url donde el componente Core valida la licencia de forma remota. Este endpoint deberá ser provisto por Facephi.

```
mLicenseUrl: "https://***.***.pro"
```

# 2.2.3 licenseApiKey

**type:** *string*

Establece el apikey que se envía para obtener la licencia del servicio.
```
mLicenseApiKey: "valid ApiKey"
```

#### 2.2.4 enableTracking

**type:** *boolean*

Habilita o deshabilita el uso del componente de tracking. Esto permite ver la información de lo que hace el cliente en la plataforma de Facephi.  Este componente funciona en background mientras se ejecutan el resto de componentes instalados, y analiza el comportamiento del usuario durante el proceso actual. 

```
mEnableTracking: true
```

El resultado será devuelto por medio de una Promise que contiene un objeto de la clase SdkCoreResult. Más información sobre cómo funciona esta clase se añadirá en el ***apartado 6***.

---

## 3. Inicialización de la operación
Cada vez que se desee iniciar el flujo de alguna operación nueva (ejemplos de operaciones serían: onboarding, authentication,…) es esencial indicarle al **SDKController** que ésta va a comenzar, y así la SDK sabrá que las próximas llamadas de **Componentes** (también llamados **Steps**) formarán parte de dicha operación. Esto es necesario para trackear a la plataforma la información global de esta operación de forma satisfactoria.

<div class="warning">
<span class="warning">:warning:</span>
Al iniciar un proceso o flujo, **siempre** se deberá realizar la llamada al método newOperation
</div>

Este método tiene 2 parámetros de entrada:

- **operationType**: Indica si se va a hacer un proceso de ONBOARDING o de AUTHENTICATION
- **customerId**: Id único del usuario si se tiene (controlado a nivel de aplicación)

Para poder ejecutar el método **initOperation**, la llamada debe realizarse en la clase ***SdkMobileCore*** como se especifica a continuación:

```dart
  Future<Either<Exception, CoreResult>> initOperation() async
  {
    try
    {
      FphiSdkmobileCore core = FphiSdkmobileCore();

      final Map resultJson = await core.initOperation(
        widgetConfigurationJSON: TrackingConfiguration(mCustomerId: CUSTOMER_ID, mType: TrackingOperationType.ONBOARDING),
      );
      if (resultJson != null) {
        return Right(CoreResult.fromMap(resultJson));
      } else {
        throw Exception('Plugin internal error');
      }
    } on Exception catch (e) {
      return (Left(e));
    }
  }
```

---

## 4. Lanzamiento de componentes

<div class="note">
<span class="note">:information_source:</span>
Una vez creada la nueva operación, se podrán lanzar los diferentes controladores de los componentes instalados en la SDK. Para consultar esta información se deberá acceder a la documentación de cada uno de los componentes específicos.
</div>

---

## 5. Retorno del Resultado
El resultado de cada componente será devuelto a través de la SDK manteniendo siempre la misma estructura:

```
export interface CoreResult {
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: string;
  errorMessage?: string;
  tokenized?: string;
  operationId?: string;
  sessionId?: string;
  data?: string;
  flow?: string;
}
```
Los parámetros recibidos son los siguientes:

### **5.1 finishStatus**

- **finishStatus**: Devuelve el diagnóstico global de la operación. Los valores posibles para el tipo de excepción son:

    - **1**: La operación ha finalizado satisfactoriamente.

    - **2**: Se ha producido un error, el cuál se indicará en el enumerado errorType y, opcionalmente, se mostrará un mensaje de información extra en la propiedad errorMessage.

### **5.2 finishStatusDescription**

Devuelve una descripción global de la operación. Parámetro opcional.

    - **STATUS_OK**: La operación ha finalizado satisfactoriamente.

    - **STATUS_ERROR**: Se ha producido un error, el cuál se indicará en el parámetro de salida errorType y, opcionalmente, se mostrará un mensaje de información extra en la propiedad errorMessage.

### **5.3 errorMessage**

Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.

### **5.4 errorType**

Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el parámetro finishStatus con el valor Error). Se definen en la clase SdkErrorType. Los valores que puede tener son los siguientes:

  - **UnknownError**. Error no gestionado.

  - **NoError**: No ha ocurrido ningún error. El proceso puede continuar.

  - **CameraPermissionDenied**: Excepción que se produce cuando el sdk no tiene permiso de acceso a la cámara.

  - **HardwareError**: Excepción que surge cuando existe algún problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos.

  - **ExtractionLicenseError**: Excepción que ocurre cuando ha habido un problema de licencias en el servidor.

  - **UnexpectedCaptureError**: Excepción que ocurre durante la captura de frames por parte de la cámara.

  - **ControlNotInitializedError**: El configurador del widget no ha sido inicializado.

  - **BadExtractorConfiguration**: Problema surgido durante la configuración del widget.

  - **CancelByUser**: Excepción que se produce cuando el usuario para la extracción de forma manual.

  - **TimeOut**:Excepción que se produce cuando transcurre un tiempo máximo sin conseguir finalizar la extracción con éxito.

  - **InitProccessError**: Excepción que se produce cuando el sdk no puede procesar las imagenes capturadas.

  - **NfcError**: Excepción que se produce cuando el sdk no tiene permiso de acceso al nfc.

  - **NetworkConnection**: Excepción que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red.

  - **TokenError**: Excepción que se produce cuando se pasa por parámetro un token no válido.

  - **InitSessionError**: Excepción que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al `SdkCore` al ppio de llamar a cualquier otro componente.

  - **ComponentControllerError**: Excepción que se produce cuando no se puede instanciar el componente.


### **5.5 tokenized**
Parámetro opcional. Sólo se devuelve si se llama al método *Tokenized*. El plugin devolverá un valor de tipo ***string*** format. Más información en el **apartado 8.**

### **5.6 data**: 
Optional parameter. Only visible if the *GetExtraData* method is called. The plugin will return a value in ***string*** format. More information in **section 7.**

---

## 6. Cierre de sesión
Antes de que la aplicación se vaya a destruir, se deberá cerrar la sesión de la SDK para así avisar a la plataforma de su finalización. Para ello, se ejecuta el siguiente fragmento de código:

```dart
Future<Either<Exception, CoreResult>> closeSession(SdkOperationEvent event) async
  {
    try {
      FphiSdkmobileCore core = FphiSdkmobileCore();

      final Map resultJson = await core.closeSession();
      return Right(CoreResult.fromMap(resultJson));
    } on Exception catch (e) {
      return (Left(e));
    }
  }
``` 

El resultado se devolverá por medio de una Promise, la cual contiene un objeto de la clase **CoreResult**. Para saber más sobre cómo funciona esta clase consultar el apartado 5.

---

## 7. Método ExtraData

El método getExtraData permite generar los identificadores necesarios para una operación que deba continuar en el *Servicio de Validaciones de Facephi* (Backend). Esta situación suele darse en casos en los que, una vez obtenida la información necesaria en la aplicación del cliente, se deba enviar esa información a un determinado servicio para su posterior validación o análisis. En caso de que deban trackearse los resultados de esos procesos en la Plataforma, ésta deberá ser capaz de unificar la primera parte del proceso realizada en cliente con la última realizada en el servicio, ya que al final forman parte de la misma operación.

Es por ello que a la hora de enviar la información capturada en una determinada operación al backend, deberá enviarse también un campo llamado extraData. Dicho campo se genera llamando al siguiente método:

```dart
 Future<Either<Exception, CoreResult>> getExtraData() async
  {
    try
    {
      FphiSdkmobileCore core = FphiSdkmobileCore();
      final Map resultJson = await core.getExtraData();
      return Right(CoreResult.fromMap(resultJson));
    }
    on Exception catch (e) {
      return (Left(e));
    }
  }
```

---

## 8. Método Tokenize

El método tratado en el documento actual recibe el nombre de Tokenize. Éste se encarga de codificar y tokenizar las imágenes obtenidas en cualquiera de los demás componentes, en caso de que sea necesario, para su posterior envío al *Servicio de Validaciones de Facephi* (Backend). En el este servicio se podrá descodificar y validar de forma segura.

```dart
  Future<Either<Exception, CoreResult>> tokenize() async
  {
    try
    {
      FphiSdkmobileCore core = FphiSdkmobileCore();
      final Map resultJson = await core.tokenize(widgetConfigurationJSON: TokenizeConfiguration(mStringToTokenize: "Something to tokenize ..."));
      return Right(CoreResult.fromMap(resultJson));
    }
    on Exception catch (e) {
      return (Left(e));
    }
  }
```