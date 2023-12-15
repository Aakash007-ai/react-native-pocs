import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
import notifee, {EventType, Notification} from '@notifee/react-native';
import {AppState, SafeAreaView, StatusBar} from 'react-native';
import {foregroundNotification} from './src/helper/notification.';

import Netinfo, {addEventListener} from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import {MutationCache, QueryClient, onlineManager} from '@tanstack/react-query';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {Client} from 'mqtt';

const queryClient = new QueryClient();
const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
});

const App = () => {
  //---------React Query-----------------------
  React.useEffect(() => {
    //refetch on reconnect , also we can add refetch on appfocussed
    return Netinfo.addEventListener(state => {
      const status = !!state.isConnected;
      onlineManager.setOnline(status);
    });
  }, []);

  mutationCache: new MutationCache({
    onSuccess(data, variables, context, mutation) {
      console.log('toast ::::mutation successfully happen ');
    },
    onError(error, variables, context, mutation) {
      console.log('toast ::::mutation error called', error);
    },
  });
  //---------React Query--------------------

  //adding network event state listner

  // fetch().then(state => {
  //   console.log('Connection type fetched once directly', state.type);
  //   console.log('Is connected? fetched once', state.isConnected);
  // });

  React.useEffect(() => {
    const unsubscribe = addEventListener(state => {
      // console.log('By Event Listner ::: Connection type ::', state.type); //none when offline
      //wifi for wifi , cellular for mobile network , none for airplane mode
      // console.log('By Event Listner ::: Is connected? :: ', state.isConnected);

      if (state?.isConnected) {
        console.log('state.isConnected ::: ', state.isConnected);
        //SHOW SNACKBAR
        Snackbar.show({
          text: 'Online',
          textColor: 'green',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  ///----------handling notification when app state change under App State Notification
  const [appState, setAppState] = React.useState(); //used to get AppState
  const [notificationId, setNotificationId] = React.useState<String>(); //use to get notifcationId from notification tap event to delte that notificaiton

  const handleAppStateChange = (nextAppState: any) => {
    setAppState(nextAppState);
    console.log('App State in App.tsx::: ', appState);
  };

  React.useEffect(() => {
    // foregroundNotification(); //listen for foreground notification
    const subscription = AppState.addEventListener(
      //for application state management
      'change',
      handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  React.useEffect(() => {
    queryClient.resumePausedMutations();
  });

  return (
    <PersistQueryClientProvider
      persistOptions={{persister}}
      onSuccess={() => {
        //it will call on mounting
        // console.log('will get called on re-mounting');
        queryClient.resumePausedMutations().then(() => {
          //it will resume
          console.log('resumed paused mutations');
          queryClient.invalidateQueries(); //it will revalidate queries
        });
      }}
      client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
};

export default App;

// const Stack = createNativeStackNavigator<RootStackParamsList>();
notifee.onBackgroundEvent(async ({type, detail}) => {
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
