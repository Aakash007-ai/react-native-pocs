import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import notifee, {
  AndroidImportance,
  AndroidVisibility,
  AndroidCategory,
} from '@notifee/react-native';
const CustomNotification = () => {
  useEffect(() => {
    console.log('CustomNotification');
  }, []);
  const [notificationId, setNotificationId] = React.useState();

  const customTextStyling = async () => {
    const channelId = await notifee.createChannel({
      id: 'custom_id',
      name: 'customNotification',
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
    });
    const notificationId = await notifee.displayNotification({
      title:
        '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
      subtitle: '&#129395;',
      body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
      android: {
        channelId,
        // color: '#4caf50',
        color: '#E8210C', // red
        autoCancel: false, //on tap notification not close
        ongoing: true, //on tap notification not close
        category: AndroidCategory.PROGRESS,
        importance: AndroidImportance.HIGH,
        actions: [
          {
            title: '<b>Dance</b> &#128111;',
            pressAction: {id: 'dance'},
          },
          {
            title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
            pressAction: {id: 'cry'},
          },
        ],
      },
    });
    setNotificationId(notificationId);
  };

  const customIcon = async () => {
    const channelId = await notifee.createChannel({
      id: 'custom_id',
      name: 'customNotification',
    });
    const notificationId = await notifee.displayNotification({
      title: 'Chat with Joe Bloggs',
      body: 'A new message has been received from a user.',
      android: {
        channelId,
        // Remote image
        largeIcon:
          'https://st.depositphotos.com/2274151/3518/i/450/depositphotos_35186549-stock-photo-sample-grunge-red-round-stamp.jpg', //'https://my-cdn.com/users/123456.png',

        // Local image
        // largeIcon: require('../assets/user.jpg'),

        // Absolute file path
        // largeIcon: 'file:///xxxx/xxxx/xxxx.jpg',

        // Android resource (mipmap or drawable)
        largeIcon: 'large_icon',
      },
    });
    setNotificationId(notificationId);
  };

  const ongoingNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'custom_id',
      name: 'customNotification',
    });
    await notifee.displayNotification({
      body: 'Ongoing notification',
      android: {
        channelId,
        ongoing: true,
      },
    });
  };

  const fullScreenNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'customNotification',
    });
    await notifee.displayNotification({
      body: 'fullScreen notification',
      android: {
        channelId,
        // Recommended to set a category
        category: AndroidCategory.CALL,
        // Recommended to set importance to high
        importance: AndroidImportance.HIGH,
        fullScreenAction: {
          id: 'default',
        },
      },
    });
  };

  return (
    <View>
      <Text>Custom Notification</Text>
      <Button
        title="Custom Text"
        onPress={() => {
          customTextStyling();
          // setTimeout(() => {
          //   customTextStyling();
          // }, 5000);
        }}
      />
      <Button title="Custom Icon" onPress={customIcon} />

      <Button
        title="Cancel"
        onPress={() => {
          notifee.cancelNotification(notificationId);
          notifee.cancelAllNotifications();
        }}
      />
      <Button title="Ongoing notification" onPress={ongoingNotification} />
      <Button title="full screen" onPress={fullScreenNotification} />
    </View>
  );
};

export default CustomNotification;
