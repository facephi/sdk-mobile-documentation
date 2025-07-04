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
    <string name="sdk_permissions_exit_alert_title">Permission denied</string>
    <string name="sdk_permissions_exit_alert_question">In order to continue, you need to </string>
    <string name="sdk_permissions_exit_alert_question_other">allow access to the permission needed.</string>
    <string name="sdk_permissions_exit_alert_question_camera">allow access to the camera.</string>
    <string name="sdk_permissions_exit_alert_question_microphone">allow access to the microphone.</string>
    <string name="sdk_permissions_exit_alert_confirm">Retry</string>
    <string name="sdk_permissions_exit_alert_confirm_settings">Go to settings</string>
    <string name="sdk_exit_alert_title">Finish the process</string>
    <string name="sdk_exit_alert_question">Do you want to finish the process?</string>
    <string name="sdk_exit_alert_finish">Finish</string>
    <string name="sdk_exit_alert_cancel">Cancel</string>
    <string name="sdk_exit_finish_exit">Finish</string>
    <string name="sdk_text_video_error">An error has occurred with the connection to the video. Please try again.</string>
    <string name="sdk_text_socket_error">An error has occurred with the connection to the server. Please try again.</string>
    <string name="sdk_text_data_error">An error has occurred with the system configuration. Please try again.</string>
    <string name="sdk_text_timeout_error">Sorry, the operation has timed out. Please try again later.</string>
    <string name="sdk_network_connection_error_title">Check your internet connection</string>
    <string name="sdk_network_connection_error_desc">Check that your connection is stable and try again.</string>
    <string name="sdk_network_connection_error_button">Exit</string>
    <string name="sdk_close">Close process</string>
    <string name="sdk_info">Show tutorial</string>
    <string name="sdk_previous_page">Previous page</string>
    <string name="sdk_next_page">Next page</string>
    <string name="sdk_image_captured">Image captured</string>
    <string name="sdk_confirmation_retry">Retry</string>
    <string name="sdk_confirmation_continue">Continue</string>
    <string name="sdk_skip">SKIP</string>

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

---
