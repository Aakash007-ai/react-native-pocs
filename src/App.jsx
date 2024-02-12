import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/RootNavigator';
import notifee, {EventType, Notification} from '@notifee/react-native';
import {AppState, SafeAreaView, StatusBar} from 'react-native';
import {foregroundNotification} from './helper/notification.';

import Netinfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import {
  focusManager,
  MutationCache,
  QueryClient,
  onlineManager,
  dehydrate,
} from '@tanstack/react-query';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {Client} from 'mqtt';
import axios from '../src/screens/ReactQuery/axios-secure';

import {queryClient, persister} from './screens/ReactQuery/queryClient';
import {useOnlineManager} from './screens/ReactQuery/useOnlineManager';
import {useAppState} from './screens/ReactQuery/useAppStateManager';

const App = () => {
  //online Manager starts with true (start it when there is internet connection to true)
  const [isOnline, setIsOnline] = React.useState(false);

  //---------React Query-----------------------
  React.useEffect(() => {
    //refetch on reconnect , also we can add refetch on appfocussed
    return Netinfo.addEventListener(state => {
      const status = !!state.isConnected;
      console.log('if status is undefined or false then add a check here');
      if (state.isConnected) {
        onlineManager.setOnline(status); //yes we can
      }
    });
  }, []);

  // mutationCache: new MutationCache({
  //   onSuccess(data, variables, context, mutation) {
  //     console.log('toast ::::mutation successfully happen ');
  //   },
  //   onError(error, variables, context, mutation) {
  //     console.log('toast ::::mutation error called', error);
  //   },
  // });
  //---------React Query--------------------

  //adding network event state listner

  // fetch().then(state => {
  //   console.log('Connection type fetched once directly', state.type);
  //   console.log('Is connected? fetched once', state.isConnected);
  // });

  React.useEffect(() => {
    const unsubscribe = Netinfo.addEventListener(state => {
      if (state?.isConnected) {
        console.log('state.isConnected ::: ', state.isConnected);
        //SHOW SNACKBAR
        Snackbar.show({
          text: 'Online',
          textColor: 'green',
          // duration: Snackbar.LENGTH_SHORT,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  ///----------handling notification when app state change under App State Notification
  const [appState, setAppState] = React.useState(); //used to get AppState
  const [notificationId, setNotificationId] = React.useState();
  const handleAppStateChange = nextAppState => {
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

  return (
    <PersistQueryClientProvider
      persistOptions={{
        persister: persister,
        // maxAge: Infinity,
        // dehydrateOptions: {
        //   shouldDehydrateMutation: true,
        //   shouldDehydrateQuery: false,
        // },
      }}
      onSuccess={() => {
        Netinfo.fetch().then(state => {
          if (state.isConnected) {
            queryClient.resumePausedMutations().then(() => {
              console.log('resumed paused mutations');
            });
          }
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
