import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
import notifee, {EventType} from '@notifee/react-native';
// const Stack = createNativeStackNavigator<RootStackParamsList>();
notifee.onBackgroundEvent(async ({type, detail}) => {
  const {notification, pressAction} = detail;

  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction?.id === 'mark-as-read') {
    // Update external API
    console.log('mark-as-read pressed in onBackgroundEvent');
    // await fetch(`https://my-api.com/chat/${notification?.data?.chatId}/read`, {
    //   method: 'POST', //perform any action
    // });
  }

  // Remove the notification
  //await notifee.cancelNotification(notification?.id);
  await notifee.cancelNotification(
    notification?.id ? notification?.id : 'defaultId',
  );
});

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
