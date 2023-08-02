package com.blindmatrix;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;
import android.content.Context;
import android.graphics.Typeface;
import java.lang.reflect.Field;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

   private static void overrideFont(Context context) {
    try {
        final Typeface customFontTypeface = Typeface.createFromAsset(context.getAssets(), "fonts/Poppins-Regular.otf");
        Field defaultFontTypefaceField = Typeface.class.getDeclaredField("DEFAULT");
        defaultFontTypefaceField.setAccessible(true);
        defaultFontTypefaceField.set(null, customFontTypeface);

        Field defaultBoldFontTypefaceField = Typeface.class.getDeclaredField("DEFAULT_BOLD");
        defaultBoldFontTypefaceField.setAccessible(true);
        defaultBoldFontTypefaceField.set(null, customFontTypeface);
    } catch (Exception e) {
        e.printStackTrace();
    }
}

  @Override
  public void onCreate() {
    overrideFont(getApplicationContext());
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }
}
