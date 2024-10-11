# Status Component

## 1. Introducción

The _Component_ dealt with in the current document is called **_StatusComponent_**. It is in charge of the common UI used in the components. This _Component_ can is completely customizable. The elements you can override/change are:

- Colors

- Images

- Dimensions (size values,...)

- Fonts

---

### 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to [Getting Started](./Mobile_SDK)
and follow its instructions.

To use the Status Component with the SDK, it's needed to pass an instance as a param in the initSdk function:

```
SDKController.shared.initSdk(
        ...,
        statusController: StatusController()
    )
```

When a StatusController's instance is provided, the Component's will show a tutorial UI, diagnostic screen on errors and more when launched.

### 2.1. Dependencies required for integration

None

#### Cocoapods

- Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (adding them in the Podfile file of the project) are:

```
  pod 'FPHISDKMainComponent', '~> 2.0.0'
```

- To install the Status component, the following entry must be included in the application Podfile:

```
  pod 'FPHISDKStatusComponent', '~> 2.0.0'
```

- Once the dependencies are installed, the different functionalities of the component can be used.

#### SPM

- The mandatory dependencies that must have been previously installed are:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- To install the Status component, it must be included in the project modules:

```
//HTTPS
https://github.com/facephi-clienters/SDK-StatusPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-StatusPackage-SPM.git
```

## 3. Available controllers

|                  |                                  |
| ---------------- | -------------------------------- |
| **Controller**   | **Description**                  |
| StatusController | Contains the exposed API methods |

---

## 4 Customize

The component's customization is managed with "Themes". This themes implement ThemeStatusProtocol:

```
public protocol ThemeStatusProtocol {
    var name: String { get } // Description of the theme
    var fonts: [R.Font: String] { get }
    var dimensions: [R.Dimension: CGFloat] { get }
    var images: [R.Image: UIImage?] { get }
    var colors: [R.Color: UIColor?] { get }
}
```

A custom theme can edit any of those values. By default there is a ThemeStatus that is used when a param is not configured.

### 4.1 Colors

Available colors to customize:

```
enum Color: String, CaseIterable {
    case sdkPrimaryColor
    case sdkSecondaryColor
    case sdkBackgroundColor
    case sdkTitleTextColor
    case sdkBodyTextColor
    case sdkTopIconsColor
    case sdkButtonTextColor
    case sdkErrorColor
    case sdkSuccessColor
    case sdkNeutralColor
    case sdkAccentColor
}
```

By default:

![Image](/ios/Status/status_colors-001.png)

#### 4.1.1 Customize colors with xcassets

When used, the StatusComponent will check first if a color asset with the same name as the enum's case exists in the main app.

This option overrides the Theme.
If the asset is not found in the main app, it will take the value of the configured "Theme".

#### 4.1.2 Customize colors with a Theme

The colors can be customized with the creation of a Theme class:

```
import statusComponent
...

class CustomThemeStatus: ThemeStatusProtocol {
    ...
    var colors: [R.Color: UIColor?] = [
        R.Color.sdkPrimaryColor: UIColor.red,
        R.Color.sdkBackgroundColor: UIColor.white,
        ...
    ]
}
```

### 4.2 Images

Available images to customize:

```
enum Image: String, CaseIterable {
    case ic_sdk_close
    case ic_sdk_close_arrow
    case ic_sdk_error_connection
    case ic_sdk_error_timeout
    case ic_sdk_unknown_error
    case ic_sdk_permission_camera
    case ic_sdk_permission_micro
    case ic_sdk_permission_generic
    case ic_sdk_logo
    case ic_sdk_info
    case ic_status_success
    case ic_status_dot_primary
    case ic_status_dot_variant
    case ic_sdk_pager_back
    case ic_sdk_pager_forward
}
```

By default:

![Image](/ios/Status/status_images-001.png)

#### 4.2.1 Customize images with xcassets

When used, the StatusComponent will check first if an image asset with the same name as the enum's case exists in the main app.

This option overrides the Theme.
If the asset is not found in the main app, it will take the value of the configured "Theme".

#### 4.2.2 Customize images with a Theme

The images can be customized with the creation of a Theme class:

```
import statusComponent
...

class CustomThemeStatus: ThemeStatusProtocol {
    ...
    var images: [R.Image: UIImage?] = [
        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),
        ...
    ]
}
```

### 4.3 Fonts

Available fonts to customize:

```
enum Font: String {
    case regular
    case bold
}
```

By default:

```
public var fonts: [R.Font: String] {
    [.bold: "Poppins-SemiBold",
     .regular: "Poppins-Regular"]
}
```

**_Poppins-Regular_**
![Image](/ios/Status/status_fonts-001.png)

**_Poppins-SemiBold_**
![Image](/ios/Status/status_fonts-002.png)

#### 4.3.1 Customize fonts

The fonts can be customized with the creation of a Theme class:

```
import statusComponent
...

class CustomThemeStatus: ThemeStatusProtocol {
    ...
    var fonts: [R.Font: String] = [
        .bold: "Comic Sans Bold"
    ]
}
```

<div class="warning">
<span class="warning">:warning:</span>
***If using a custom font:*** The font needs to be registered before launching the component. Every ThemeManager registers its fonts, but this operation is asynchronous and can cause race conditions. While using custom fonts, it's advised to call to the ThemeManager.setup(...) as soon as possible.
</div>

### 4.4 Dimensions

Available dimensions to customize:

```
enum Dimension: CGFloat {
    case fontExtraSmall
    case fontSmall
    case fontRegular
    case fontLarge
    case fontExtraLarge
    case radiusCorner
    case radiusCornerSmall
    case outlinedBorderWidth
}
```

By default:

```
public var dimensions: [R.Dimension : CGFloat] {
        [.fontExtraSmall: 16,
         .fontSmall: 18,
         .fontRegular: 20,
         .fontLarge: 24,
         .fontExtraLarge: 32,
         .radiusCorner: 30,
         .radiusCornerSmall: 12,
         .outlinedBorderWidth: 1]
```

#### 4.4.1 Customize dimensions

The dimensions can be customized with the creation of a Theme class:

```
import statusComponent
...

class CustomThemeStatus: ThemeStatusProtocol {
    ...
    var dimensions: [R.Dimension: CGFloat] = [
        .fontBig: 8,
        R.Dimension.radiusCorner: 5,
        ...
    ]
}
```

### 4.5 Full Example

A full example of a CustomThemeStatus could be:

```
import statusComponent

class CustomThemeStatus: ThemeStatusProtocol {
    var name: String {
        "custom"
    }

    var images: [R.Image: UIImage?] = [
        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),
        // If the rest is not configured, only the ic_sdk_close_arrow is overrided and customized
    ]

    var colors: [R.Color: UIColor?] = [
        R.Color.sdkPrimaryColor: UIColor.red,
        R.Color.sdkBackgroundColor: UIColor.white,
    ]

    var dimensions: [R.Dimension: CGFloat] = [
        .fontBig: 8,
        R.Dimension.radiusCorner: 5,
    ]
    var fonts: [R.Font: String] = [
        .bold: "Comic Sans Bold"
    ]
}
```

Once implemented, we set the instance of our custom theme like this:

```
import statusComponent
...
ThemeStatusManager.setup(theme: CustomThemeStatus())
...
```

---

## 5 Working Example

There are four different views inside Status that can be configured.

Aside from using a theme, the customization can be done with the assets approach. In this example, we can see the result of creating the following keys and values:

![Image](/ios/Status/status_assets_customization-001.png)

### 5.1 Tip View

The tip is activated by default but can be skipped with the controller's configuration parameter _showTutorial_.

Usually it's the first page the user will see after launching the Controller.

![Image](/ios/Status/status_tips-001.png)

### 5.2 Tutorial Views

The tutorial is accessed by the **_More Information_** button in the Tip. It's a set of views that further explain the process to the user.

![Image](/ios/Status/status_tutorial-001.png)

### 5.3 Diagnostic View

The Diagnostic view is shown to the user when there is information needed to continue the process.

![Image](/ios/Status/status_diagnostic-001.png)

### 5.4 Permission View

Similar to Diagnostic view. It's shown when the capture process needs the user's approval to access some of the device's features. The difference is that this view contains a button that navigates to the device settings.

**_Missing Camera Permissions_**
![Image](/ios/Status/status_permissions-001.png)

**_Missing Microphone Permissions_**
![Image](/ios/Status/status_permissions-002.png)
