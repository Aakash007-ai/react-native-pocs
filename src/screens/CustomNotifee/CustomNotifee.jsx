import React from 'react';
import {View, Text, Button} from 'react-native';
import notifee, {
  AndroidCategory,
  AndroidColor,
  AndroidImportance,
  AndroidVisibility,
  EventType,
  AndroidStyle,
} from '@notifee/react-native';

const CustomNotifee = () => {
  const [title, setTitle] = React.useState('Biceps Day');
  const [message, setMessage] = React.useState('Dumbell Exercise');
  const requestNotifcationPermission = async () => {
    // Request permissions (required for iOS)
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
    // Create a channel (required for Android)
    await notifee
      .createChannel({
        id: 'custom-channel',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
        visibility: AndroidVisibility.PUBLIC, //display on lock screen too rather than hiding some info
      })
      .then(res => {
        console.log('Channel created', res); //give channel id
      })
      .catch(err => {
        console.log('An error occurred when creating the channel', err);
      });

    // console.log('after creating channel id what i get', res); //undefined
  };
  const [notificationId, setNotificationId] = React.useState();
  async function onDisplayNotification() {
    await requestNotifcationPermission();
    await createChannel();
    await notifee
      .displayNotification({
        title: `<p style="color: #4caf50;"><b>${title}</b></p>`,
        // title: `<p style="color: #4caf50;"><b>${title}</b><br>${message}</p>`,
        // subtitle: '&#129395;',
        // subtitle: '&#xf004;',
        // subtitle: 'Subtitle',
        // title:'<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
        // title: 'New Session',
        body: 'Dumbell Exercise Set  1 of 3',

        android: {
          channelId: 'custom-channel',
          autoCancel: false, //on tap of notification it will not be removed
          ongoing: true, //notification will not be removed until we remove it
          onlyAlertOnce: true, //will not vibrate or make sound again and again
          //   color: '#4caf50', //color of notifciation
          largeIcon: 'https://picsum.photos/200/300',
          category: AndroidCategory.PROGRESS, //may be call or alaram
          importance: AndroidImportance.HIGH,
          progress: {
            max: 10,
            min: 5,
            current: 2,
          },

          timestamp: Date.now(),
          showTimestamp: true,
          // showChronometer: true, //show a timer
          //   fullScreenAction: {
          //     id: 'default', //linke incoming call it display on full screen
          //   },
          // style: {
          //   type: AndroidStyle.BIGPICTURE,
          //   picture: 'https://picsum.photos/200/300',
          // },

          actions: [
            {
              title: "Let's start",
              icon: 'https://my-cdn.com/icons/snooze.png',
              pressAction: {id: 'start'},
            },
            {
              title: '<p style="color: #f44336;"><b>Later</b> &#128557;</p>',

              // title: 'Later',
              pressAction: {id: 'default', mainComponent: 'custom-component'},
            },
          ],
          // pressAction: {
          //   id: 'default',
          //   launchActivity: 'default',
          // },

          // color: AndroidColor.RED,
          // smallIcon: 'ic_launcher',
          // largeIcon: 'ic_launcher',
          // autoCancel: true,
          // actions: [
          //}
        },
      })
      .then(res => {
        console.log('Notification displayed', res); //give notification id
        setNotificationId(res); //recieved as string
      })
      .catch(err => {
        console.log('An error occurred when displaying the notification', err);
      });
  }
  const cancelNotification = async () => {
    await notifee
      .cancelNotification(notificationId)
      .then(res => {
        console.log('Notification cancelled', res); //null
      })
      .catch(err => {
        console.log('An error occurred when cancelling the notification', err);
      });
  };

  const updateNotification = async () => {
    await notifee
      .displayNotification({
        id: notificationId,
        title: 'Updated Session',
        body: 'Biceps Exercise',
        android: {
          channelId: 'custom-channel',
        },
      })
      .then(res => {
        console.log('Notification updated', res);
      })
      .catch(err => {
        console.log('An error occurred when updating the notification', err);
      });
  };

  notifee.onForegroundEvent(({type, detail}) => {
    if (type === EventType.ACTION_PRESS && detail.pressAction) {
      console.log('User pressed the action with id: ', detail.pressAction);
    }
  });

  return (
    <View>
      <Text>Hello</Text>
      <Button title="Display notification" onPress={onDisplayNotification} />
      <Button title="Cancel otification" onPress={cancelNotification} />
      <Button title="Update a notification" onPress={updateNotification} />
    </View>
  );
};

export default CustomNotifee;
