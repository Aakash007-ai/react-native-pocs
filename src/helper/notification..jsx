import notifee, {EventType, Notification} from '@notifee/react-native';

export function foregroundNotification() {
  notifee.onForegroundEvent(async ({type, detail}) => {
    const {notification, pressAction} = detail;
    if (type === EventType.ACTION_PRESS && pressAction?.id === 'start') {
    } else if (type === EventType.ACTION_PRESS && pressAction?.id === 'later') {
      //   setNotificationId(notification?.id);
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
}
