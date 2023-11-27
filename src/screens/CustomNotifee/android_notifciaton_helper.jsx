import notifee,{AndroidImportance,AndroidVisibility} from '@notifee/react-native';

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

export {createChannel, cancelNotifcation};
