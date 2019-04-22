package com.mytube;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.corbt.keepawake.KCKeepAwakePackage;
import com.brentvatne.react.ReactVideoPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.google.android.gms.ads.MobileAds;


public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNAdMobPackage(),
            new LinearGradientPackage(),
            new OrientationPackage(),
            new VectorIconsPackage(),
            new KCKeepAwakePackage(),
            new ReactVideoPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    MobileAds.initialize(this, "ca-app-pub-4710174142760302~2450097151");
  }
}
