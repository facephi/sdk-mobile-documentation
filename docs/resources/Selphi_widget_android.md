## 1. Introduction

This manual presents configuration and functioning of the FacePhi Selphi Android Widget for applications developed in Android operating system as well as its integration in Android projects. The following points are explained:

- Properties, methods and communication of this widget
- Creation of an Android project which integrates the widget for any Android application

### 1.1. Widget version

The widget version could be retrieved, even if the widget is already integrated into your application. You could do it by this way:

- Find the file `fphi-core-widget-android.aar`.
- Extract the content like a .zip file.
- Inside we will find a file called `AndroidManifest.xml`. Please open it like a text file. Inside this file we will see a line with this information: `android:versionName="x.x.x.x"`. The version number could be retrieved from this line.

### 1.2. Minimum requirements

- Android API level: 15
- RAM: 2 GB

If Injection Attack Detection (IAD) feature is used then:
- API level 24
- RAM: 3 GB

---

## 2. API (Application programming interface)

### 2.1. Properties

The Android widget provided is an `Activity` class which allows you to extract facial characteristics as well as configure the widget with appropriate values for extraction.

Passing boot arguments between the main class of the project and the widget is done through `Parcelable` classes. The class used for this communication is `WidgetConfiguration`.

When a new widget is created in an Android application, you can set up some properties which determine its functioning. This widget configuration is handled by `WidgetConfiguration` class.

#### 2.1.0. setLicense

Sets the contents of the license that will be needed for some widget features.

#### 2.1.1. setResourcesPath

It sets the route of the resources file that the widget will use for its graphical configuration. The route of this file must be specified related to the `assets` folder of the main application.

### 2.2. Methods

You have the following methods to configure the widget at `WidgetConfiguration` class:

#### 2.2.1. setLivenessMode

```java
public void setLivenessMode(WidgetLivenessMode liveness)
```

#### 2.2.2. setStabilizationMode

```java
public void setStabilizationMode(boolean sm)
```

#### 2.2.3. setQRFlag

```java
public void setQRFlag(boolean qr)
```

#### 2.2.4. setUserTags

```java
public void setUserTags(byte uTags)
```

#### 2.2.5. setResourcesPath

```java
public void setResourcesPath(String path)
```

#### 2.2.6. setLocale

```java
public void setLocale(String locale)
```

#### 2.2.7. setFullscreen

```java
public void setFullscreen(boolean fs)
```

#### 2.2.8. setCameraPreviewSize

```java
public void setCameraPreviewSize(Point cameraPreviewSize)
```

#### 2.2.9. setFrontFacingCameraAsPreferred

```java
public void setFrontFacingCameraAsPreferred()
```

#### 2.2.10. setBackFacingCameraAsPreferred

```java
public void setBackFacingCameraAsPreferred()
```

#### 2.2.11. logImages

```java
public void logImages(boolean logImages)
```

#### 2.2.12. setTutorialFlag

```java
public void setTutorialFlag(boolean value)
```

#### 2.2.13. setDebug

```java
public void setDebug(boolean debug)
```

#### 2.2.14. setVideoFilename

```java
public void setVideoFilename(String filename)
```

#### 2.2.15. generateTemplateRawFromBitmap

```java
public static byte[] generateTemplateRawFromBitmap(Bitmap img)
```

#### 2.2.16. generateTemplateRawFromByteArray

```java
public static byte[] generateTemplateRawFromByteArray(byte[] img)
```

#### 2.2.17. getWidgetVersion

```java
public static String getWidgetVersion()
```

#### 2.2.18. setShowAfterCapture

```java
public void setShowAfterCapture(boolean value)
```

#### 2.2.19. setExtractionDuration

```java
public void setExtractionDuration(FPhiWidgetExtractionDuration extractionDuration)
```

#### 2.2.20. setPreferredOrientation

```java
public void setPreferredOrientation(WidgetOrientation value)
```

---

## 2.3. Android widget integration

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);

    Intent intent = new Intent(this, Widget.class);
    startActivityForResult(intent, 1);
}
```

Declare the activity in `AndroidManifest.xml`:

```xml
<activity
    android:name="com.facephi.selphi.Widget"
    android:label="Your app name"
    android:screenOrientation="portrait">
</activity>
```

Permissions:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" />
```

Widget configuration:

```java
Intent intent = new Intent(this, Widget.class);

WidgetConfiguration conf =
    new WidgetConfiguration("fphi-widget-resources-SelphiPhiLive-1.2.zip");

intent.putExtra("configuration", conf);
startActivityForResult(intent, 1);
```

---

## 4. Integration in Android applications

### 4.1. Minimum requirements

- API level 15
- RAM: 2 GB

If IAD is used:
- API level 24
- RAM: 3 GB
