# Aplicaciones de ejemplo

## Introducción

Las aplicaciones de ejemplo se pueden encontrar en el repositorio de GitHub:

[![Android Repository v.2.3.X](@site/static/img/github_50.png)](https://github.com/facephi/sdk-mobile-android-samples/tree/2.3.X)
[Android Repository v.2.3.X](https://github.com/facephi/sdk-mobile-android-samples/tree/2.3.X)

### Pasos para configurar y ejecutar las aplicaciones

1. Es necesario incluir el usuario y token facilitado por Facephi en el fichero de local.properties como se indica en la <a
   href="Mobile_SDK#21-a%C3%B1adir-repositorio-privado"
   rel="nofollow">documentación del SDK</a>
2. Es necesario incluir el applicationId de la licencia facilitada por Facephi en el Gradle de la aplicación.
3. Rellenar los datos de SdkData.

### SdkData - Datos necesarios para el uso del SDK

Para que la aplicación funcione correctamente se deberán rellenar los siguientes datos.

En la clase SdkData:

- Datos necesarios si se va a utilizar un servicio para obtener las licencias:

```kotlin
val environmentLicensingData: EnvironmentLicensingData = EnvironmentLicensingData(
        apiKey = "....."
    )
```

- String de la licencia si se requiere licencia offline:

```kotlin
const val LICENSE = "...."
```

- Dependiendo de cómo se haya añadido la licencia adaptar el valor de la variable:

```kotlin
  const val LICENSE_ONLINE = false
```

- Identificador del cliente y tipo de operación que se va a utilizar en la inicialización:

```kotlin
const val CUSTOMER_ID = "...."
val OPERATION_TYPE = OperationType.ONBOARDING

```

- Para Selphi el nombre del fichero ZIP de recursos (que estará en la carpeta assets de la aplicación) y los datos de configuración:

```kotlin
const val SELPHI_RESOURCES = ".....zip"

val selphiConfiguration = SelphiConfigurationData(
        ...,
        resourcesPath = SELPHI_RESOURCES
    )
```

- Para SelphID el nombre del fichero ZIP de recursos (que estará en la carpeta assets de la aplicación) y los datos de configuración:

```kotlin
const val SELPHID_RESOURCES = "...zip"

val selphIDConfiguration = SelphIDConfigurationData(
       ...,
        resourcesPath = SELPHID_RESOURCES
    )
```

- Para hacer uso de los servicios de verificacion hay que incluir la BASE_URL:

```kotlin
  const val BASE_URL = "..."
```

**IMPORTANTE: El applicationId de la aplicación debe coincidir con el que se ha solicitado en la licencia**
