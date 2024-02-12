package com.react_native_pocs;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

import android.os.Bundle; //react-native-navigation

//check what all these used for
// import com.invertase.testing;
// import io.invertase.notifee.NotifeeApiModule; //by notifee module open notification component on tap

import com.facebook.react.jstasks.HeadlessJsTaskConfig; //for headless js task
import javax.annotation.Nullable;

// public class My

public class MainActivity extends ReactActivity {

   @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

   //earlier entrypoint before notification
  @Override
  protected String getMainComponentName() {
    return "react_native_pocs";
  }

  // @Override
  // protected String getMainComponentName(){
  //   return NotifeeApiModule.getMainComponentName("react_native_pocs");
  // }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
