import React from 'react';
import {View, Text, Button, AppState} from 'react-native';
import notifee, {
  AndroidCategory,
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import {createChannel, cancelNotifcation} from './android_notifciaton_helper';

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

  async function setCategories() {
    await notifee
      .setNotificationCategories([
        {
          id: 'ios-workout-notification',
          actions: [
            {
              id: 'start',
              title: 'Start Now',
              foreground: true, //it will trigger app to open in background , after that it will send a action press event
            },
            {
              id: 'later',
              title: 'Later',
              destructive: true, //will show red label in ios for destructive nitent
            },
          ],
        },
      ])
      .then(res => {
        console.log('categories set sucessfully on ios:::', res);
      })
      .catch(err => {
        console.log('error while creating categoreis for ios,:::', err);
      });
  }

  const onDisplayNotification = async () => {
    await setCategories();
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
        ios: {
          interruptionLevel: 'critical',
          categoryId: 'ios-workout-notification',
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
    // if (appstate.match(/inactive|background/) && nextAppState === 'active') {
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

  const cancelIOSNotification = async () => {
    await notifee
      .cancelNotification('workout-notification') //not related to ios/android. It is for both
      .then(res => {
        console.log('Notification cancelled by button', res);
      })
      .catch(err => {
        console.log('An error occurred when cancelling the notification', err);
      });
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
      <Text style={{color: 'black'}}>
        now handling same kind of notification in ios. Creation of notificaiton
        is ok with action'title todo:----cancel notification on ios,make it
        sticky,add actions
      </Text>
      <Button
        title="setting Ios notification's categories"
        onPress={() => {
          console.log(
            "setting notification's categories on ios\n notificaiton's id ::: ios-workout-notification",
          );
          setCategories();
        }}
      />
      <Button title="Display notification" onPress={onDisplayNotification} />
      <Button title="Cancel notification" onPress={cancelIOSNotification} />
    </View>
  );
};
export default AppStateNotification;
