# Primeros pasos

## 1. Introducción

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integración en una aplicación Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deberá realizar la instalación de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan añadir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto.


### 1.1 Requisitos mínimos
La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

Versión mínima Android: **24 - JDK 11**

Versión mínima iOS: **13**

### 1.2 Versión del plugin
La versión del widget se puede consultar de la siguiente manera:

Buscamos el fichero *pubspec.yaml* en la raíz del plugin.

En la etiqueta **version** se indica la versión.

---

## 2. Integración del componente
En esta sección se explicará paso a paso cómo integrar el plugin actual en un proyecto ya existente. Se tratarán los siguientes puntos:

- Configurar y añadir el repositorio privado para acceder a las dependencias de los componentes

- Pasos de la instalación comunes a ambas plataformas (Android y iOS)

- Pasos de la instalación específicos para iOS

- Pasos de la instalación específicos para Android

- Dependencias que se deben añadir al proyecto


<div class="note">
<span class="note">:note:</span>

Para esta sección, se considerarán los siguiente valores:

- **\<APPLICATION_PATH\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<PLUGIN_CORE_PATH\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-core) 
</div>


### 2.1. Añadir repositorio privado

<div class="warning">
<span class="warning">:information_source:</span>
Para acceder a las librerías nativas de iOS se requiere configurar el acceso a nuestros repositorios privados de Cocoapods.
</div>

Por cuestiones de seguridad y mantenimiento, los nuevos componentes de la SDKMobile se almacenan en unos repositorios privados que requieren de unas credenciales específicas para poder acceder a ellos. Esas credenciales deberá obtenerlas a través del equipo de soporte de **Facephi**.

- Primero instalamos el comando que nos dará acceso a usar cocoapods con Artifactory.

```java
sudo gem install cocoapods-art
```
- Necesitaremos añadir el repositorio a la lista del fichero netrc. Para ello, desde un Terminal, se ejecuta el siguiente comando:

```java
$ nano ~/.netrc
```

- Y copiamos el siguiente fragmento con los datos correspondientes al final del fichero:


```java
machine facephicorp.jfrog.io
  login <USERNAME>
  password <TOKEN>
```

<div class="warning">
<span class="warning">:warning:</span>
Es importante copiar de manera exacta el anterior fragmento de código. El indentado previo a las palabras login y password está formado por dos espacios.
</div>


#### 2.1.1. Añadir repositorio privado: iOS

<div class="warning">
<span class="warning">:warning:</span>
Para acceder a las librerías nativas de iOS se requiere configurar el acceso a nuestros repositorios privados de Cocoapods.
</div>

Por cuestiones de seguridad y mantenimiento, los nuevos componentes de la **SDKMobile** se almacenan en unos repositorios privados que requieren de unas credenciales específicas para poder acceder a ellos. Esas credenciales deberá obtenerlas a través del equipo de soporte de Facephi. A continuación se indica como preparar el entorno para consumir los componentes:

- Primero instalamos el comando que nos dará acceso a usar cocoapods con **Artifactory**.

```
sudo gem install cocoapods-art
```

- En caso de utilizar un Mac con **chip M1**, pueden surgir errores durante la instalación es posible que surjan errores en el futuro, de ser así, se recomienda usar en cambio el siguiente comando:

```
sudo arch -arm64 gem install ffi; 
sudo arch -arm64 gem install cocoapods-art
```

<div class="note">
<span class="note">:information_source:</span>
En caso de tener problemas con la instalación, desinstalar completamente cocoapods y todas sus dependencias para hacer una instalación limpia.
</div>

- Se añadirá el repositorio que contiene dependencias privada:

```
pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"
```

- Y finalmente se actualiza el repositorio local:

```
pod repo-art update cocoa-pro-fphi
```

### 2.2. Instalación del plugin: Common
El plugin permite la ejecución en platafoma **Android y iOS**. En esta sección se explicaLos pasos comunes a todas instalar el plugin se deben seguir los siguientes pasos:

- Asegurarse de que el framework **Flutter** esté correctamente instalado.

- Acceda al **\<%APPLICATION_PATH%\>** en un terminal y ejecute:

```
dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"
```

<div class="warning">
<span class="warning">:warning:</span>
Si al ejecutar cualquier comando pod surge un error como el siguiente:
arch: Can't find any plists for install

Se recomienda ejecutar todos los comandos con ***arch -x86_64*** delante, por ejemplo:

- **pod install**
- **arch -x86_64 pod install**
</div>

- Además, en **<%APPLICATION_PATH%>**, acceder al fichero *pubspec.yaml* y añadir:

```
fphi_sdkmobile_core:
  hosted:
    name: sdkcore
    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/
  version: ^2.0.0
```

### 2.3 Instalación plugin: iOS
#### 2.3.1 Configuración del proyecto

Para la versión de iOS, a la hora de añadir nuestro plugin a la aplicación final, previamente se deben tener en cuenta los siguientes puntos:

- ***Deshabilitar el BITCODE***: Si la aplicación que va a integrar el plugin tiene activado el BITCODE dará error de compilación. Para evitar que esto suceda, el BITCODE debe estar desactivado. 
Dentro del XCODE simplemente accediendo a Build from Settings, en la sección Build Options, deberás indicar el parámetro Habilitar Bitcode como **No**.

- ***Añadir los permisos de cámara***: Para utilizar el widget, es necesario habilitar el permiso de la cámara en el archivo ***info.plist*** de la aplicación (incluido dentro del proyecto en la carpeta ***ios***). Se deberá editar el archivo con un editor de texto y agregar el siguiente par clave/valor:

```
***<key>NSCameraUsageDescription</key>***
***<string>$(PRODUCT_NAME) uses the camera</string>***
```

### 2.3.2 Actualizar el Podfile

En el podfile del proyecto será necesario añadir la información del repositorio privado (ver apartado 2.1). Para ello, se deberá agregar las siguientes lineas al inicio del fichero:

```
platform :ios, '13.0' //MIN VERSION
plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

### 2.3.3 Establecer la versión de Swift
En *Xcode*, para que la aplicación y todos sus métodos funcionen correctamente, se debe establecer la versión mínima de swift a la versión 5. Los cambios se podrán realizar siguiendo estos pasos:

- Target -> Project -> Build Settings -> Swift Compiler - Language -> Swift Language Version -> Choose Swift 5.

### 2.3.4 Posibles incidencias
#### 2.3.4.1 Incidencias con Cocoapods
Si ocurren problemas de entorno o no se actualiza el plugin tras realizar nuevos cambios (por ejemplo, problemas ocurridos debido a que no se genera correctamente el bundle, o no se actualizan las librerías a las versiones adecuadas), se recomienda ejecutar la siguiente secuencia de instrucciones tras lanzar el plugin:

- Abrir la carpeta ios de la aplicación en un terminal.
- Ejecutar el siguiente comando:

```
pod deintegrate
```

- Eliminar el Podfile.lock
- Ejecutar el siguiente comando (o abrir el proyecto con Xcode y ejecutarlo):

```
pod install --repo-update  
```
Y
```
pod repo-art update cocoa-pro-fphi
```

### 2.4 Instalación plugin: Android
#### 2.4.1 Configuración del proyecto
Para instalar el plugin en el proyecto, el sdk se descarga de un repositorio remoto las dependencias necesarias para su correcto funcionamiento, para lo cual se deben ingresar unas credenciales. Para ello, hay que añadir en el fichero build.gradle lo siguiente (dentro de la sección repositories):

```
maven {
    Properties props = new Properties()
    def propsFile = new File('local.properties')
    if(propsFile.exists()){
        props.load(new FileInputStream(propsFile))
    }
    name = "external"
    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")
    credentials {
        username = props["artifactory.user"] ?: System.getenv("USERNAME_ARTIFACTORY")
        password = props["artifactory.token"] ?: System.getenv("TOKEN_ARTIFACTORY")
    }
}
```


<div class="warning">
<span class="warning">:warning:</span>
Para que el proyecto obtenga las dependencias correctamente, las **credenciales** deben estar configuradas correctamente (**Username** y **Token**) must be configured
correctly
</div>

### 2.4.2 Establecer la versión de Android SDK 
En el caso de Android, la versión mínima de SDK requerida por nuestras bibliotecas nativas es **24**, por lo que si la aplicación tiene un *SDK mínimo* definido menor que éste, deberá modificarse para evitar un error de compilación. Para ello accede al fichero ***build.gradle*** de la aplicación (ubicado en la carpeta ***android***) y modifica el siguiente parámetro:

```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```
