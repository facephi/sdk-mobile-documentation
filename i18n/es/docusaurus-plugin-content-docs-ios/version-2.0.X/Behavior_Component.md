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

Para más información sobre la configuración base, vaya a la sección de
<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Android Mobile SDK</a>.

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**\*Behavior** Component / Componente de **comportamiento\***. Éste se
encarga de realizar el trakeo y análisis del comportamiento del usuario
a través de los componentes de la **SDKMobile**, enviándola a los
servicios de **Feedzai**.

Al contrario que ocurre con el resto, este componente no funciona
individualmente, trabaja de forma transversal al resto de componentes
instalados en la _SDKMobile_. Para trackear la información se mantiene
en segundo plano mientras se ejecuta el proceso de la **SDKMobile**.

---

## 2. Integración del componente

<div class="warning">
<span class="warning">:warning:</span>
Antes de integrar este componente se recomienda leer la documentación de [Integración](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>
En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

- Actualmente las librerías de FacePhi se distribuyen de forma remota
  a través de diferentes gestores de dependencias. Las dependencias
  **obligatorias** que deberán haberse instalado previamente:

  ```java
  implementation "com.facephi.androidsdk:behavior_component:$sdk_behavior_component_version"
  ```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de <a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>, en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

|                                     |                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Controlador**                     | **Descripción**                                                                                   |
| BehaviorController                  | Controlador principal de comportamiento                                                           |
| BehaviorAutoLogoutController        | Controlador para registrar el listener del aviso de cierre de sesión por Active Defense           |
| BehaviorPositionController          | Controlador para registrar la posición a través de una cadena                                     |
| BehaviorUserTextFieldController     | Controlador para registrar un campo de texto con usuario para poder analizar su comportamiento    |
| BehaviorPasswordTextFieldController | Controlador para registrar un campo de texto con contraseña para poder analizar su comportamiento |
| BehaviorTextfieldController         | Controlador para registrar un campo de texto genérico para poder analizar su comportamiento       |

## 5. Configuración del componente

Para configurar el componente actual, se realiza en el _initSdk_,
revisar el apartado de inicialización en
<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>.

### 5.1. Configuración de BehaviorController

Se debe incluir este parámetro

```java
SDKController.initSdk(
    ...
    behaviorController = BehaviorController(){
        Napier.d("APP: BEHAVIOR INIT ERROR: $it")
    },
)
```

### 5.2. Configuración de registro Active Defense

Se podrá configurar el callback para controlar el aviso de Active
Defense (Comportamiento con riesgo):

```java
SDKController.launch(BehaviorAutoLogoutController {
    Napier.d("APP: AUTO LOGOUT LAUNCHED")
})
```

### 5.3. Configuración de registro de la posición actual

Se debe informar desde la aplicación la posición actual de las
pantallas. Ejemplo de uso con “LOGIN_SCREEN“:

```java
SDKController.launch(BehaviorPositionController("LOGIN_SCREEN") {
    when (it) {
        is SdkResult.Error -> logs.add("Register Position: KO - ${it.error.javaClass.simpleName}")
        is SdkResult.Success -> logs.add("Register Position: OK")
    }
})
```

### 5.4. Configuración de registro de campos para su analisis

Dependiendo del tipo de campo se debe registrar de varias formas.

Para un correcto entrenamiento del comportamiento, se deben registrar
los tipos de campos con el **User** y el **Password**. Estos se
utilizarán en un entrenamiento en las primeras veces que se rellenen de
la misma forma los campos. El otro campo de texto ya se puede utilizar
de manera genérica en otro tipo de textos.

#### 5.4.1. Configuración de registro de User

Se debe **informar** un **SdkText** que debe contener el campo de la
vista **_EditText_**.

Ejemplo de uso:

```java
SDKController.launch(BehaviorUserTextFieldController(SdkText(binding.user)) {
    when (it) {
        is SdkResult.Success -> {
            Napier.d("APP: User registered")
        }
        is SdkResult.Error -> {
            Napier.d("APP: User registered: ERROR - ${it.error.javaClass.simpleName}")
        }
    }
})
```

#### 5.4.2. Configuración de registro de Password

Se debe **informar** un **SdkText** que debe contener el campo de la
vista **_EditText_**.

Ejemplo de uso:

```java
SDKController.launch(BehaviorPasswordTextFieldController(SdkText(binding.password)) {
    when (it) {
        is SdkResult.Success -> {
            Napier.d("APP: Password registered")
        }
        is SdkResult.Error -> {
            Napier.d("APP: Password registered: ERROR - ${it.error.javaClass.simpleName}")
        }
    }
})
```

#### 5.4.3. Configuración de registro de campo genérico

Se debe **informar** un **SdkText** que debe contener el campo de la
vista **_EditText_**.

Ejemplo de uso:

```java
SDKController.launch(BehaviorTextFieldController(SdkText(binding.other)) {
    when (it) {
        is SdkResult.Success -> {
            Napier.d("APP: TextField registered")
        }
        is SdkResult.Error -> {
            Napier.d("APP: TextField registered: ERROR - ${it.error.javaClass.simpleName}")
        }
    }
})
```

---

## 6. Uso del componente

Como se ha comentado previamente, una vez inicializado y configurado el
componente de **behavior/comportamiento** no será necesario lanzarlo, ya
que se mantendrá funcionando en segundo plano mientras se ejecutan el
resto de componentes.

Una vez la aplicación ya tenga un identificador de usuario, deberá
llamar al siguiente proceso para registrar el usuario.

```java
SDKController.launch(
    CustomerIdController("IDENTIFICADOR DEL USUARIO")
)
```

---
