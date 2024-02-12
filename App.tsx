import React, {useEffect, useState} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
import notifee, {EventType, Notification} from '@notifee/react-native';
import {
  AppState,
  Modal,
  View,
  Text,
  ActivityIndicator,
  Appearance,
  useColorScheme,
  ColorSchemeName,
} from 'react-native';
import codePush, {DownloadProgress} from 'react-native-code-push';
import {codePushOptions, syncOptions} from './src/codepush/codePushOptions';

//ON_APP_RESUME when app comes to foreground

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
  const [notificationId, setNotificationId] =
    React.useState<ColorSchemeName | null>(); //use to get notifcationId from notification tap event to delte that notificaiton

  //---------------theme -- night mode and light mode--------------------
  const [theme, setTheme] = React.useState(useTheme());
  React.useEffect(() => {
    console.log('useTheme from react-navigation   ', theme.dark);

    Appearance.addChangeListener(listner => {
      console.log('Color Scheme changes ', listner.colorScheme); //light or dark

      // Appearance.setColorScheme(listner.colorScheme);
    });
  }, []);

  React.useEffect(() => {
    console.log('registering onForegroundEvent');

    notifee.onForegroundEvent(async ({type, detail}) => {
      const {notification, pressAction} = detail;
      if (type === EventType.ACTION_PRESS && pressAction?.id === 'start') {
      } else if (
        type === EventType.ACTION_PRESS &&
        pressAction?.id === 'later'
      ) {
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
  }, []);

  //------------------------CodePush-----------------------------------
  const [progress, setProgress] = useState<DownloadProgress>();
  const [progressBool, setProgressBool] = useState(false);

  function codePushStatusDidChange(syncStatus: codePush.SyncStatus) {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log(
          'Checking for update.',
          codePush.UpdateState.LATEST, //2c
          codePush.DeploymentStatus.SUCCEEDED,
        );
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Download packaging....');
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('Awaiting user action....');
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update');
        setProgressBool(false);
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log('codepush status up to date');
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        console.log('update cancel by user');
        setProgressBool(false);
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed and will be applied on restart.');
        setProgressBool(false);
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        console.log('An unknown error occurred');
        setProgressBool(false);
        break;
    }
  }

  function codePushDownloadDidProgress(progress: DownloadProgress) {
    setProgress(progress);
  }

  console.log('progress value++', progress);

  React.useEffect(() => {
    codePush.sync(
      syncOptions,
      codePushStatusDidChange,
      codePushDownloadDidProgress,
    );
  }, []);

  // React.useEffect(() => {
  //   codePush.checkForUpdate(
  //     checkforUpdates.deploymentKey,
  //     handleBinaryVersionMismatch,
  //   );
  // }, []);

  const showProgressView = () => {
    return (
      <Modal visible={true} transparent={true}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 16,
            }}>
            <Text>In Progress.......</Text>

            <View style={{alignItems: 'center'}}>
              <Text style={{marginTop: 16}}>{`${(
                Number(progress?.receivedBytes) / 1048576
              ).toFixed(2)}MB/${(
                Number(progress?.totalBytes) / 1048576
              ).toFixed(2)}`}</Text>
              <ActivityIndicator style={{marginVertical: 8}} color={'blue'} />
              <Text>
                {(
                  (Number(progress?.receivedBytes) /
                    Number(progress?.totalBytes)) *
                  100
                ).toFixed(0)}
                %
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  //----------------------CodePush ends----------------------------------

  return (
    <NavigationContainer
      theme={Appearance.getColorScheme() == 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
      {/* {progressBool ? showProgressView() : null} */}
      {progressBool && showProgressView()}
    </NavigationContainer>
  );
};

export default codePush(codePushOptions)(App);
