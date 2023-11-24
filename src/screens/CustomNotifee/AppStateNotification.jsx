import React from 'react';
import {View, Text, Button, AppState} from 'react-native';
import notifee, {
  AndroidCategory,
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';

const AppStateNotification = () => {
  const [appstate, setAppState] = React.useState(AppState.currentState);
  const [isMounted, setIsMounted] = React.useState(true);

  //handling notificaon
  const [notificationId, setNotificationId] = React.useState();

  const requestNotificationPermission = async () => {
    await notifee
      .requestPermission()
      .then(permissions => {
        console.log('Permission granted', permissions);
      })
      .catch(err => {
        console.log(
          "An error occurred when getting the user's permissions",
          err,
        );
      });
  };

  const createChannel = async () => {
    await notifee
      .createChannel({
        id: 'workout-channel',
        name: 'Workout Channel',
        importance: AndroidImportance.HIGH,
        visibility: AndroidVisibility.PUBLIC,
      })
      .then(res => {
        console.log('Channel created', res);
      })
      .catch(err => {
        console.log('An error occurred when creating the channel', err);
      });
  };

  const cancelNotifcation = async () => {
    await notifee
      .cancelNotification('workout-notification')
      .then(res => {
        console.log('Notification cancelled by button', res);
      })
      .catch(err => {
        console.log('An error occurred when cancelling the notification', err);
      });
  };

  const onDisplayNotification = async () => {
    await requestNotificationPermission();
    await createChannel();
    await notifee
      .displayNotification({
        id: 'workout-notification',
        title: 'Workout',
        body: 'Dumbell Exercise Set  1 of 3',
        android: {
          channelId: 'workout-channel',
          autoCancel: false,
          ongoing: true,
          onlyAlertOnce: true,
          category: AndroidCategory.PROGRESS,
          importance: AndroidImportance.HIGH,
          visibility: AndroidVisibility.PUBLIC,
          actions: [
            {
              title: "Let's start",
              pressAction: {
                id: 'start',
                mainComponent: 'react_native_pocs',
              },
            },
            {
              title: 'Later',
              pressAction: {
                id: 'later',
              },
            },
          ],
        },
      })
      .then(res => {
        console.log('Notification displayed', res); //give notificaiton id
        setNotificationId(res.id);
      })
      .catch(err => {
        console.log('An error occurred when displaying the notification', err);
      });
  };

  //handling app state
  React.useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  });

  const handleAppStateChange = nextAppState => {
    if (appstate.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!', nextAppState);
      setAppState(nextAppState);
      //start a task here to start notiifcation
      cancelNotifcation();
      setIsMounted(true);
    } else if (
      appstate === 'active' &&
      nextAppState.match(/inactive|background/)
      //cancel notification here if any present
    ) {
      console.log('App has come to the background!');
      setAppState(nextAppState);
      onDisplayNotification();
      setIsMounted(false);
    }
    setAppState(nextAppState);
    // console.log('App State in AppStateNotificaiton ::: ', appstate);
  };

  return (
    <View>
      <Text style={{color: 'black'}}>
        Task is to generate notification when app is not in active state and
        kill it when app becom active.\n So, first add action to notification
        later and do it now which perform actions
      </Text>
      <Button title="Display Notification" onPress={onDisplayNotification} />
      <Button title="Cancel Notification" onPress={cancelNotifcation} />
      <Text style={{color: 'black'}}>Current App State : {appstate}</Text>
      <Button
        title="Cancel All Notification"
        onPress={async () => {
          await notifee.cancelAllNotifications();
        }}
      />
    </View>
  );
};
export default AppStateNotification;
