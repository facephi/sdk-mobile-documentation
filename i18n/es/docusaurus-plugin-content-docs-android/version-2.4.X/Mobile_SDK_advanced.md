# Ajustes avanzados

## 1. Introducción

En este apartado se amplía la información general del lanzamiento del SDK.

---

## 2. Información avanzada del lanzamiento del SDK

En esta sección se va a ampliar la información del apartado de "Lanzamiento Simplificado del SDK".

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

### 2.2. Inicialización del SDK

**Debe evitarse inicializar un controlador que no vaya a usarse**.

El SDK funciona a través de un controlador principal (SDKController) que
debe inicializarse correctamente para poder hacer uso del resto de
funcionalidad. Los pasos a seguir en la inicialización son:

1. Incluir el objeto Application a través de la clase SdkApplication.

2. Decidir si la licencia se incluirá a través de un _String_ o con un _servicio de licenciamiento remoto_ (consultar **apartado 3.1**).

3. El controlador _TrackingController_ en caso de querer conectar con la plataforma.

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

#### 2.2.1 Inyección de licencias

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

#### 2.2.2. Recepción de errores

En la parte del error, dispondremos de la clase SdkError.

Listado de errores:

- EMPTY_LICENSE: Licencia vacía
- INIT_AI_MODELS(error: String): Error obtenido en el servicio de descarga de modelos
- INIT_FLOW (error: String): Error obtenido en el servicio de descarga de flow
- LICENSE_CHECKER_ERROR (error: String): Error obtenido al verificar si la licencia es correcta
- LICENSING_ERROR (error: String): Error obtenido en el servicio de descarga de licencias
- NETWORK_CONNECTION_ERROR: Error de conexión a internet
- TRACKING_ERROR (error: String): Error obtenido al iniciar el controlador de tracking

---

## 3. Iniciar nueva operación

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

### 3.1 **Tipos de operación existentes**

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

## 4. Lanzamiento de componentes

La funcionalidad del SDK se divide en diferentes componentes con
controladores particulares. Estos controladores se “lanzarán” desde el
controlador general.

Una vez creada la **nueva operación** (**apartado 3**), se podrán lanzar
los diferentes controladores de la SDK. Para consultar esta información
se deberá acceder a la **documentación de cada uno de los componentes
específicos**.

Ejemplo de lanzamiento Kotlin:

```java
val result = SDKController.launch(ExampleController(ConfigurationData()))
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
    new ExampleController(new ConfigurationData()) {
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

### 4.1 Opciones para el lanzamiento del componente

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Hay dos formas de lanzar el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
val response = SDKController.launch(
    ExampleController(SConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val response = SDKController.launchMethod(
    ExampleController(ConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

---

## 5. Retorno de resultado

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

## 6. Controladores auxiliares

En este apartado se incluyen otros controladores y operaciones
auxiliares, algunos de ellos opcionales, y que pueden ser necesarios
para la correcta finalización del flujo.

Estos campos son necesarios para la comunicación con el servicio de
**Facephi**, en caso de querer realizar cualquier **verificación** y de
desear realizar el _tracking_ de una operación determinada.

### 6.1 Obtención del OperationId

```java
val result = SDKController.launch(GetOperationIdController())
Napier.d("Operation ID ${result}")
```

### 6.2 Obtención del OperationType

```java
val result = SDKController.launch(GetOperationTypeController())
Napier.d("Operation type ${result}")
```

### 6.3 Obtención del SessionId

```java
val result = SDKController.launch(GetSessionIdController())
Napier.d("Session ID ${result}")
```

### 6.4 Obtención del CustomerID

```java
val result = SDKController.launch(GetCustomerIdController())
Napier.d("Customer ID ${result}")
```

### 6.5 Asignación del CustomerID

```java
SDKController.launch(CustomerIdController("CustomerId"))
```

---

## 7. Seguridad

Por defecto el SDK no dejará iniciar operaciones a dispositivos en los que se detecte emulación o root. Si se quiere desactivar esta comprobación de seguridad:

```java
SDKController.securityMode(enable = false)
```

---

## 8. Opciones de depuración y control de errores

Existen ciertas opciones en el SDK que permiten un aumento en los logs
de depuración para poder comprobar que todo funciona de manera correcta.

### 8.1. Control de errores en las conexiones de Tracking con la plataforma

Una vez el SDK se haya iniciado correctamente, se pueden aplicar ciertos
ajustes para tener una mayor información acerca de los posibles errores
en tracking, se puede realizar un seguimiento a través de este
lanzamiento de controlador:

```java
SDKController.launch(TrackingErrorController {
    Napier.d("Tracking Error: ${it.name}")
})
```

### 8.2. Activación de Logs de depuración general

```java
 if (BuildConfig.DEBUG) {
  SDKController.enableDebugMode()
 }
```

---

## 9. Seguimiento y Análisis de Eventos en la Aplicación

La funcionalidad de eventos permite registrar e interpretar interacciones clave dentro de la aplicación, como cambios de pantalla y acciones del usuario, facilitando el análisis del comportamiento en tiempo real.

Cada evento se envía con un sello de tiempo, tipo y detalle específico, proporcionando un seguimiento estructurado y optimizando la experiencia del usuario con datos precisos y accionables.

```java
 SDKController.getAnalyticsEvents { time, componentName, eventType, info ->
            Log.i { "EVENTS", "*** $time - ${componentName.name} -" +
                " ${eventType.name} -  ${info ?: ""} " }
        }
```

---
