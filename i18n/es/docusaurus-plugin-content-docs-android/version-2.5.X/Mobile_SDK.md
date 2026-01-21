# Lanzamiento simplificado

## Última versión disponible

```text
2.5.0
```

## 1. Introducción

**SDK Mobile** está formado conjunto de librerías (**Componentes**) que ofrecen
la posibilidad de hacer un producto a medida para cada cliente.

### 1.1. Requisitos mínimos

La versión mínima de la SDK de Android requerida es la siguiente:

- SDK mínima (minSdk): **24**

- API Version: **35**

- Kotlin: **2.1.21**

- Plugin Gradle Android: **8.9.3**

---

## 2. Lanzamiento simplificado

A continuación se describen los 5 pasos necesarios para el uso del SDK.

### 2.1. Configurar el repositorio y la dependencia base

Por cuestiones de seguridad y mantenimiento, los nuevos componentes de
la **_SDKMobile_** se almacenan en unos repositorios privados que
requieren de unas credenciales específicas para poder acceder a ellos.
Esas <u>credenciales</u> deberá obtenerlas a través del _equipo de
soporte_ de **Facephi**.

Una vez obtenidas las credenciales, se deberá incluir el siguiente
fragmento de código en el fichero **settings.gradle**:

```java
mavenCentral()
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

Las credenciales se incluirán en el fichero _local.properties_ con la siguiente
  estructura:

```java
artifactory.user=YOUR_CREDENTIALS_USERNAME
artifactory.token=YOUR_CREDENTIALS_TOKEN
 ```

La dependencia base **obligatoria** para el uso del SDK es:

```java
implementation "com.facephi.androidsdk:sdk:$version"
```

Para completar la funcionalidad se añadirán las dependendencias de los componentes 
que se vayan a utilizar.

### 2.2. Inicializar el SDK

El SDK funciona a través de un controlador principal (SDKController) que
debe inicializarse correctamente para poder hacer uso del resto de
funcionalidad. El equipo de Facephi facilitará el apiKey de la licencia 
para poder incluirlo en el proyecto.

Código de inicialización:

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOnline(EnvironmentLicensingData(
            apiKey = "...")
      )),
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Log.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Log.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}

if (BuildConfig.DEBUG) {
    SDKController.enableDebugMode()
}
```

### 2.3. Iniciar operación 

Siempre se debe iniciar una operación para que se pueda lanzar el proceso.

Este método tiene 3 parámetros de entrada:

1.  **operationType**: Indica si se va a hacer un proceso de ONBOARDING
    o de AUTHENTICATION.

2.  **customerId**: Identificador del usuario (controlado a nivel
    de aplicación).

3.  **steps**: Lista de pasos de la operación si se han definido
    previamente.

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

### 2.4. Lanzamiento de los componentes

La funcionalidad del SDK nace de la combinación de los diferentes componentes. Cada componente tiene sus propios controladores que se “lanzarán” desde el
SDKController.

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

Se detalla el lanzamiento de cada funcionalidad en su apartado de la documentación:

- [Conexión con plataforma](./Tracking_Component)
- [Captura facial](./Selphi_Component)
- [Captura de documentos](./SelphID_Component)
- [Captura de voz](./Voice_Component)
- [Captura de NFC](./NFC_Component)
- [Captura de huellas](./Phingers_Component)
- [Videollamada](./Video_Call_Component)
- [Vídeo identificación](./Video_Id_Component)
- [Vídeo grabación](./Video_Recording_Component)

Para el caso del lanzamiento continuo o "flow":

- [Flow](./Flow_Component)


### 2.5. Cierre de sesión

Antes de finalizar la aplicación se debe cerrar la sesión del SDK:

```java
SDKController.closeSession()
```
