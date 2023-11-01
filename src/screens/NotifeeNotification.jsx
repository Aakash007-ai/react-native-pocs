import React, {useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import notifee, {
  AndroidColor,
  AuthorizationStatus,
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

const NotifeeNotification = () => {
  const [notificationId, setNotificationId] = React.useState(); //['123','456'
  const onDisplayNotification = async () => {
    // Request permissions (required for iOS)
    const settings = await notifee.requestPermission();
    // const settings = await notifee.requestPermission({
    //   sound: true, //request to play sound
    //   announcement: true, //for ios sirri to read
    //   alert: true, //request to show alert
    //   badge: true, //request to show badge
    //   carPlay: true, //request to show carPlay
    //   criticalAlert: true, //request to show criticalAlert
    //   provisional: true, //request to show provisional
    // });

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings);
    } else {
      console.log('User declined permissions');
    }

    // console.log('settings.ios setting :::::', settings.ios);

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // await notifee.displayNotification({ //it giive a notification id which can be used to update notifiaction later
    //   title: 'Default Notification Title',
    //   body: 'Main body content of the notification',
    //   android: {
    //     channelId,
    //     smallIcon: 'ic_launcher', //by default
    //     //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
    //     // pressAction is needed if you want the notification to open the app when pressed
    //     pressAction: {
    //       id: 'default',
    //     },
    //   },
    // });

    const notificationId = await notifee.displayNotification({
      //id: '123',
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
      },
    });
    setNotificationId(notificationId);

    // console.log(
    //   'notification id current generated notifiacatioon :::   ',
    //   notificationId,
    // );

    setTimeout(async () => {
      await notifee.displayNotification({
        //id: '123',
        id: notificationId,
        title: 'Updated Notification Title',
        body: 'Updated main body content of the notification',
        android: {
          channelId,
        },
      });
    }, 5000);
  };

  // React.useEffect(() => {
  //   return notifee.onForegroundEvent(({type, detail}) => {
  //     // console.log(
  //     //   'notifee onForegroundEvent event type  ::-',
  //     //   type,
  //     //   'details ::-',
  //     //   detail,
  //     // );
  //     switch (type) {
  //       case EventType.DISMISSED:
  //         console.log('User dismissed notification', detail.notification);
  //         break;
  //       case EventType.PRESS:
  //         console.log('User pressed notification', detail.notification);
  //         break;
  //     }
  //   });
  // }, []);

  async function cancel(notificationId) {
    await notifee.cancelNotification(notificationId);
  }

  // Bootstrap sequence function
  async function bootstrap() {
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        'Notification caused application to open',
        initialNotification.notification,
      );
      console.log(
        'Press action used to open the app',
        initialNotification.pressAction,
      );
    }
  }

  useEffect(() => {
    bootstrap().then(() => {
      console.log('bootstrap function called to get initial notification');
    });
  }, []);

  async function onCreateTriggerNotification() {
    const date = new Date(Date.now());
    date.setHours(11);
    date.setMinutes(10);

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // 11:10 AM
    };

    //create a trigger notification
    await notifee.createTriggerNotification({
      title: 'Meeting with John',
      body: 'It is pleasure to meet with you Mr. Wick',
      android: {
        channelId: 'default',
        color: AndroidColor.RED,
      },
      trigger,
    });
  }

  const [hour, setHour] = React.useState(new Date().getHours());
  const [minutes, setMinutes] = React.useState(new Date().setMinutes());

  useEffect(async () => {
    const settings = notifee.getNotificationSettings();
    if (settings.android.alarm == AndroidNotificationSetting.ENABLED) {
      //Create timestamp trigger
    } else {
      // Show some user information to educate them on what exact alarm permission is,
      // and why it is necessary for your app functionality, then send them to system preferences:
      await notifee.openAlarmPermissionSettings();
    }
  });

  return (
    <View>
      <Text>Notifee notifications</Text>
      <Button
        title="Simple notification"
        onPress={() => {
          onDisplayNotification();
        }}
      />
      <Button
        title="Cancel notification"
        onPress={() => cancel(notificationId)}
      />
      <View style={{flexDirection: 'row'}}>
        <TextInput
          keyboardType="numeric"
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            margin: 10,
          }}
          placeholder="Enter hour"
          value={hour}
          onChangeText={val => setHour(val)}
        />
        <TextInput
          keyboardType="numeric"
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            margin: 10,
          }}
          placeholder="Enter hour"
          value={minutes}
          onChangeText={val => setMinutes(val)}
        />
        <View
          style={{
            margin: 10,
            padding: 10, //add spacing between buttons
            alignContent: 'space-between',

            justifyContent: 'space-between',
          }}>
          <Button
            title="Trigger Notification"
            onPress={onCreateTriggerNotification}
          />
          <Button
            title="Get curr time"
            onPress={() => {
              setHour(new Date().getHours());
              setMinutes(new Date().getMinutes());
            }}
          />
        </View>
      </View>

      <View>
        <Text></Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};

export default NotifeeNotification;
