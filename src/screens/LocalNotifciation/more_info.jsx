// const Stack = createNativeStackNavigator<RootStackParamsList>();
notifee.onBackgroundEvent(async ({type, detail}) => {
  // console.log(
  //   'onBackgroundEvent takes 2 things type :::',
  //   type,
  //   ' and detail :::',
  //   detail,
  // );
  //get called when app is in background
  const {notification, pressAction} = detail; //all about notifiaction info

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

    // await notifee.cancelNotification(id);
  }

  // Check if the user pressed the "Mark as read" action
  // if (type === EventType.ACTION_PRESS && pressAction?.id) {
  //   // Update external API
  //   console.log(
  //     'Notification action get pressed in onBackgroundEvent(App.tsx) and EventType is-- ',
  //     type,
  //     ' and detail.pressAction :::',
  //     pressAction?.id,
  //   );
  // await fetch(`https://my-api.com/chat/${notification?.data?.chatId}/read`, {
  //   method: 'POST', //perform any action
  // });
  // }

  // Remove the notification
  // await notifee.cancelNotification(notification?.id);
  // await notifee
  //   .cancelNotification(notification?.id ? notification?.id : 'defaultId')
  //   .then(() => {
  //     console.log('notification cancelled from App.tsx file');
  //   })
  //   .catch(err => {
  //     console.log('cancelled notification error from App.tsx', err);
  //   });
});

///---------------------------------------------------------------------
React.useEffect(() => {
  const subscription = AppState.addEventListener(
    'change',
    handleAppStateChange,
  );

  notifee.onForegroundEvent(async ({type, detail}) => {
    //type are of 2 types
    // 1 when we tap on notificaiton
    // 2 when we tap on actions button
    // detail is nested object of 2 object
    //notificaiton and pressAction
    //pressAction contain info about tapped action button e.g in our case it give object with id of action as id :""
    const {notification, pressAction} = detail;
    console.log(
      `parameters received when tapping on arguments \n type ::: ${type} \n details ::: ${detail}`,
    );
    console.log(
      `destructuring details into notification and pressAction \n notificaiton :::: ${notification} \n pressAction :::: ${pressAction}`,
    );
    if (type === EventType.ACTION_PRESS && pressAction?.id === 'start') {
      console.log(
        'ForegroundEvent User pressed the action with id start: ',
        pressAction,
        ' and notificaiton id is ::: ',
        notification?.id,
      );
    } else if (type === EventType.ACTION_PRESS && pressAction?.id === 'later') {
      console.log(
        'Foreground User Press later action details ::: ',
        detail,
        ' and actions to that press is',
        type, //type is 2
      );

      setNotificationId(notification?.id);
      // cancelNotification(notification);
      await notifee
        .cancelNotification(notification?.id ? notification?.id : 'defaultId')
        .then(() => {
          console.log('notification cancelled from App.tsx file');
        })
        .catch(err => {
          console.log('cancelled notification error from App.tsx', err);
        });
    }
  });

  // const cancelNotification = async (notification: Notification) => {
  //   await notifee
  //     .cancelNotification(notification?.id ? notification?.id : 'defaultId')
  //     .then(() => {
  //       console.log('notification cancelled from App.tsx file');
  //     })
  //     .catch(err => {
  //       console.log('cancelled notification error from App.tsx', err);
  //     });
  // };

  return () => {
    subscription.remove();
  };
}, []);

// const handleAppStateChange = (nextAppState: any) => {
//   setAppState(nextAppState);
//   console.log('App State in App.tsx::: ', appState);
// };
