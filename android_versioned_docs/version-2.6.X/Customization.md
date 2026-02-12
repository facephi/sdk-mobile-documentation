# SDK customization

This version of the SDK allows some visual characteristics of the
components to be modified. The possible changes that can be made are
listed below.

It is recommended to add the modifications to both the **light** and
**dark** (_night_) themes.

## 1. Colors and logo

To change the SDK colours and logo, you would have to include an XML
file in the client application (e.g. **_sdk_styles.xml_**) changing the
hex (RGB) value of each primary colour:

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

To modify the logo visible in the different components of the SDK, it is
sufficient to include in the file the following line, including the name
of the logo of the client application:

```xml
<!-- SDK LOGO -->
<drawable name="sdk_logo">@drawable/logo_name</drawable>
```

The animations apply styles (mentioned above) according to the five
fundamental colours:

```java
sdkPrimaryColor
sdkErrorColor
sdkSuccessColor
sdkNeutralColor
sdkAccentColor
```

Changing any of them will affect the animations of the components.

The Selphi and SelphID components carry their associated resource zip,
which is kept outside this feature of the SDK.

## 2. Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
anim_cancelled.json
anim_success.json
```

## 3. Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application and modify the value of
each _String_ to the desired one.

```xml

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

## 4. Font

To modify the font, add the .ttf files to the font folder of the
application and rename them as shown in the image:

![Image](/android/fonts.png)

## 5. Buttons

In case you want to change the shape of the SDK buttons, you would have
to include this line in the SDK style XML file by changing the _dp_
value of the _dimen_ variable:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <dimen name="sdk_buttons_corner_dimen">5dp</dimen>
</resources>
```

## 6. Top bar icons

To change the top bar icons, the following resources must be created in the ‘drawables’ folder:

```text
ic_fphi_close_arrow
ic_fphi_close
ic_fphi_info
```

## 7. Images of the permission request and diagnostics screens

To customize the images that appear on the permission request and diagnostic screens, create resources in the ‘drawables’ folder with the following names:

```text
ic_fphi_camera_permission
ic_fphi_connection_error
ic_fphi_mic_permission
ic_fphi_timeout_error
ic_fphi_error
ic_fphi_support
```


---
