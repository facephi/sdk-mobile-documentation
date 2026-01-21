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

    <!-- Exit Alert -->
    <string name="fphi_exit_alert_title">Cancelar el proceso</string>
    <string name="fphi_exit_alert_question">¿Quieres abandonar el proceso?</string>
    <string name="fphi_exit_alert_finish">Abandonar</string>
    <string name="fphi_exit_alert_cancel">Cancelar</string>
    <!-- Permissions -->
    <string name="fphi_permissions_camera">Para poder continuar es necesario que &lt;b&gt;permitas el acceso a la cámara.&lt;/b&gt;</string>
    <string name="fphi_permissions_camera_alt">Para poder continuar es necesario que permitas el acceso a la cámara.</string>
    <string name="fphi_permissions_title">Permiso denegado</string>
    <string name="fphi_permissions_general">Para poder continuar es necesario que &lt;b&gt;permitas el acceso al permiso necesario.&lt;/b&gt;</string>
    <string name="fphi_permissions_general_alt">Para poder continuar es necesario que permitas el acceso al permiso necesario.</string>
    <string name="fphi_permissions_microphone">Para poder continuar es necesario que &lt;b&gt;permitas el acceso al micrófono.&lt;/b&gt;</string>
    <string name="fphi_permissions_microphone_alt">Para poder continuar es necesario que permitas el acceso al micrófono.</string>
    <string name="fphi_permissions_confirm">Reintentar</string>
    <string name="fphi_permissions_confirm_settings">Ir a ajustes</string>
    <!-- Messages -->
    <string name="fphi_close">Cerrar proceso</string>
    <string name="fphi_info">Mostrar tutorial</string>
    <string name="fphi_finish">Finalizar</string>
    <string name="fphi_retry">Reintentar</string>
    <!-- Tutorial -->
    <string name="fphi_tutorial_skip">OMITIR</string>
    <string name="fphi_tutorial_skip_alt">Omitir consejos</string>
    <string name="fphi_tutorial_next">SIGUIENTE</string>
    <string name="fphi_tutorial_next_alt">Siguiente consejo</string>
    <string name="fphi_tutorial_previous">ANTERIOR</string>
    <string name="fphi_tutorial_previous_alt">Consejo anterior</string>
    <string name="fphi_tutorial_finish">FINALIZAR</string>
    <string name="fphi_tutorial_finish_alt">Finalizar los consejos</string>
    <!-- Check Network -->
    <string name="fphi_network_connection_error_title">Revisa tu conexión a internet</string>
    <string name="fphi_network_connection_error_desc">Comprueba que tu conexión es estable e inténtalo de nuevo.</string>
    <!-- Diagnostic -->
    <string name="fphi_timeout_error_title">Tiempo superado</string>
    <string name="fphi_timeout_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <string name="fphi_internal_error_title">Hubo un problema técnico</string>
    <string name="fphi_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>


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
