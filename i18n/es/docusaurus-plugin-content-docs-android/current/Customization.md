# Personalización del SDK

Esta versión de la SDK permite modificar algunas características
visuales de los componentes. A continuación se indican los posibles
cambios que se pueden realizar.

Se recomienda agregar las modificaciones tanto en el tema **claro** como
**oscuro** (night).

## 1. Colores y logo 

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
    <color name="sdkButtonTextColor">#FFFFFF</color>
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

## 2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
anim_cancelled.json
anim_success.json
```

## 3. Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
    <string name="sdk_permissions_exit_alert_title">Permiso denegado</string>
    <string name="sdk_permissions_exit_alert_question">Para poder continuar es necesario que </string>
    <string name="sdk_permissions_exit_alert_question_other">permitas el acceso al permiso necesario.</string>
    <string name="sdk_permissions_exit_alert_question_camera">permitas el acceso a la cámara.</string>
    <string name="sdk_permissions_exit_alert_question_microphone">permitas el acceso al micrófono.</string>
    <string name="sdk_permissions_exit_alert_confirm">Reintentar</string>
    <string name="sdk_permissions_exit_alert_confirm_settings">Ir a ajustes</string>
    <string name="sdk_exit_alert_title">Cancelar el proceso</string>
    <string name="sdk_exit_alert_question">¿Quieres abandonar el proceso?</string>
    <string name="sdk_exit_alert_finish">Abandonar</string>
    <string name="sdk_exit_alert_cancel">Cancelar</string>
    <string name="sdk_exit_finish_exit">Finalizar</string>
    <string name="sdk_text_video_error">Ha ocurrido un error en la conexión con el vídeo. Inténtelo de nuevo.</string>
    <string name="sdk_text_socket_error">Ha ocurrido un problema con la conexión hacia el servidor. Inténtelo de nuevo.</string>
    <string name="sdk_text_data_error">Ha ocurrido un error con la configuración del sistema. Inténtelo de nuevo.</string>
    <string name="sdk_text_timeout_error">Lo sentimos, la operación ha excedido el tiempo de espera. Por favor, inténtalo de nuevo más tarde.</string>
    <string name="sdk_network_connection_error_title">Revisa tu conexión a internet</string>
    <string name="sdk_network_connection_error_desc">Comprueba que tu conexión es estable e inténtalo de nuevo.</string>
    <string name="sdk_network_connection_error_button">Salir</string>
    <string name="sdk_close">Cerrar proceso</string>
    <string name="sdk_info">Mostrar tutorial</string>
    <string name="sdk_previous_page">Página anterior</string>
    <string name="sdk_next_page">Próxima página</string>
    <string name="sdk_image_captured">Imagen capturada</string>
    <string name="sdk_confirmation_retry">Reintentar</string>
    <string name="sdk_confirmation_continue">Continuar</string>
    <string name="sdk_skip">OMITIR</string>
    <!-- Exit Alert -->
    <string name="fphi_exit_alert_title">Finish the process</string>
    <string name="fphi_exit_alert_question">Do you want to finish the process?</string>
    <string name="fphi_exit_alert_finish">Finish</string>
    <string name="fphi_exit_alert_cancel">Cancel</string>
    <!-- Permissions -->
    <string name="fphi_permissions_camera">In order to continue, &lt;b&gt;you need to allow access to the camera&lt;/b&gt;.</string>
    <string name="fphi_permissions_camera_alt">In order to continue, you need to allow access to the camera.</string>
    <string name="fphi_permissions_title">Permission denied</string>
    <string name="fphi_permissions_general">In order to continue, &lt;b&gt;you need to allow access to the permission needed.&lt;/b&gt;</string>
    <string name="fphi_permissions_general_alt">In order to continue, you need to allow access to the permission needed.</string>
    <string name="fphi_permissions_microphone">In order to continue, &lt;b&gt;allow access to the microphone.&lt;/b&gt;</string>
    <string name="fphi_permissions_microphone_alt">In order to continue, allow access to the microphone.</string>
    <string name="fphi_permissions_confirm">Retry</string>
    <string name="fphi_permissions_confirm_settings">Go to settings</string>
    <!-- Messages -->
    <string name="fphi_close">Close process</string>
    <string name="fphi_info">Show tutorial</string>
    <string name="fphi_finish">Finish</string>
    <string name="fphi_retry">Retry</string>
    <!-- Tutorial -->
    <string name="fphi_tutorial_skip">SKIP</string>
    <string name="fphi_tutorial_skip_alt">Skip advices</string>
    <string name="fphi_tutorial_next">NEXT</string>
    <string name="fphi_tutorial_next_alt">Next advice</string>
    <string name="fphi_tutorial_previous">PREVIOUS</string>
    <string name="fphi_tutorial_previous_alt">Previous advice</string>
    <string name="fphi_tutorial_finish">FINISH</string>
    <string name="fphi_tutorial_finish_alt">Finish advices</string>
    <!-- Check Network -->
    <string name="fphi_network_connection_error_title">Check your internet connection</string>
    <string name="fphi_network_connection_error_desc">Check that your connection is stable and try again.</string>
    <!-- Diagnostic -->
    <string name="fphi_timeout_error_title">Time exceeded</string>
    <string name="fphi_timeout_error_desc">We apologize. The capture could not be made</string>
    <string name="fphi_internal_error_title">There was a technical problem</string>
    <string name="fphi_internal_error_desc">We apologize. The capture could not be made</string>

```

## 4. Fuentes

Para modificar la fuente, se agregarán los ficheros .ttf a la carpeta
_font_ de la aplicación y renombrándolos como aparecen en la imagen:

![Image](/android/fonts.png)

## 5. Botones

En caso de desear cambiar la forma de los botones del SDK habría que
incluir esta línea en el fichero XML de estilos del SDK cambiando el
valor _dp_ de la variable _dimen_:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <dimen name="sdk_buttons_corner_dimen">5dp</dimen>
</resources>
```

## 6. Iconos de la barra superior

Para cambiar los iconos de la barra superior se deben crear los siguientes recursos en la carpeta de ‘drawables’:

```text
ic_fphi_close_arrow
ic_fphi_close
ic_fphi_info
```

## 7. Imágenes de las pantallas de solicitud de permisos y diagnósticos

Para cambiar las imágenes de las pantallas de solicitud de permisos y diagnósticos se deben crear los siguientes recursos en la carpeta de ‘drawables’:

```text
ic_fphi_camera_permission
ic_fphi_connection_error
ic_fphi_mic_permission
ic_fphi_timeout_error
ic_fphi_error
ic_fphi_support
```


---
