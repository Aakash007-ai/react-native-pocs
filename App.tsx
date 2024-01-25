import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
import notifee, {EventType, Notification} from '@notifee/react-native';
import {AppState} from 'react-native';
import codePush from 'react-native-code-push';
// const Stack = createNativeStackNavigator<RootStackParamsList>();

let codePushOptions = { checkFrequency : codePush.CheckFrequency.ON_APP_RESUME}
notifee.onBackgroundEvent(async ({type, detail}) => {

  // codePush.sync({ updateDialog:})
  const {notification, pressAction} = detail;
  if (type === EventType.ACTION_PRESS && detail.pressAction?.id === 'start') {
    console.log('use press start in background mode then we have to open app');
  } else if (
    type === EventType.ACTION_PRESS &&
    detail.pressAction?.id === 'later'
  ) {
    console.log(
      'user opt to cancel notification::: ',
      detail.notification?.id,
      ' and type is ::',
      type,
    );

    let id = detail.notification?.id;

    // cancelNotification(notification);
    await notifee
      .cancelNotification('workout-notification')
      .then(() => {
        console.log('notification cancelled from App.tsx file');
      })
      .catch(err => {
        console.log('cancelled notification error from App.tsx', err);
      });
  }
});

const App = () => {
  const [appState, setAppState] = React.useState(); //used to get AppState
  const [notificationId, setNotificationId] = React.useState<String>(); //use to get notifcationId from notification tap event to delte that notificaiton

  React.useEffect(() => {
    // const subscription = AppState.addEventListener(
    //   'change',
    //   handleAppStateChange,
    // );

    notifee.onForegroundEvent(async ({type, detail}) => {
      const {notification, pressAction} = detail;
      if (type === EventType.ACTION_PRESS && pressAction?.id === 'start') {
      } else if (
        type === EventType.ACTION_PRESS &&
        pressAction?.id === 'later'
      ) {
        setNotificationId(notification?.id);
        // cancelNotification(notification);
        await notifee
          // .cancelNotification(notification?.id ? notification?.id : 'defaultId')
          .cancelNotification('workout-notification')
          .then(() => {
            console.log('notification cancelled from App.tsx file');
          })
          .catch(err => {
            console.log('cancelled notification error from App.tsx', err);
          });
      }
    });

    //   return () => {
    //     subscription.remove();
    //   };
    // }, []);
  }, []);

  // const handleAppStateChange = (nextAppState: any) => {
  //   setAppState(nextAppState);
  //   console.log('App State in App.tsx::: ', appState);
  // };
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default codePush(App);
