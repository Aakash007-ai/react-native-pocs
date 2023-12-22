import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/RootNavigator';
import notifee, {EventType, Notification} from '@notifee/react-native';
import {AppState, SafeAreaView, StatusBar} from 'react-native';
import {foregroundNotification} from './helper/notification.';

import Netinfo, {addEventListener} from '@react-native-community/netinfo';
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

// const queryClient = new QueryClient(); //correct way to declare it globally, never declare it inside function orJSX

// const persister = createAsyncStoragePersister({ // check whether they get imported"
//   storage: AsyncStorage,
//   throttleTime: 1000, //check why we add this (throttle time is used to save data in async storage after 1 sec)
// });

// // configure global cache callbacks to show toast notifications
// mutationCache: new MutationCache({
//   onSuccess: data => {
//     toast.success(data.message);
//   },
//   onError: error => {
//     toast.error(error.message);
//   },
// });

function onAppStateChange(status) {
  Netinfo.fetch().then(state => {
    if (state.isConnected && Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  });
  // if (Platform.OS !== 'web') {
  //   focusManager.setFocused(status === 'active');
  // }
}
// if (__DEV__) {
//   //@ts-ignore
//   import('./screens/ReactQuery/Reactotron');
// }

// if (__DEV__) {
//   import('./screens/ReactQuery/ReactotronConfig').then(() =>
//     console.log('Reactotron Configured'),
//   );
// }
// queryClient.setMutationDefaults(['add-super-hero'], {
//   mutationFn: newHeroData => {
//     console.log(
//       'newHeroData in mutation function by default of app.jsx',
//       newHeroData,
//     );
//     return axios.post('/superheroes', newHeroData);
//   },
//   onMutate: async newHero => {
//     console.log('onMutate by default in app.jsx', newHero);
//     await queryClient.cancelQueries(['super-heroes']); //cancelling is a await
//     const previousHeroes = queryClient.getQueryData(['super-heroes']);
//     queryClient.setQueryData(['super-heroes'], old => {
//       console.log('old query data in app.jsx:::---', old);
//       return {
//         ...old,
//         data: [...old.data, {...newHero, id: old?.data.length + 1}],
//       };
//     });
//     console.log(
//       'newly updated old data in app.jsx',
//       queryClient.getQueryData(['super-heroes']),
//     );
//     return {previousHeroes};
//   },
//   onError: (error, variables, context) => {
//     // An error happened!
//     console.log(`rolling back optimistic update with id ${context.id}`);
//     queryClient.setQueryData(['super-heroes'], context.previousHeroes);
//   }
//   onSuccess: (data, variables, context) => {
//     console.log('by default mutations successfully happen');
//   },
//   onSettled: (data, error, variables, context) => {
//     console.log('onSettled by default in app.jsx', data, error, variables);
//     queryClient.invalidateQueries({queryKey: ['super-heroes']});
//   },
// });

const App = () => {
  //online Manager starts with true (start it when there is internet connection to true)
  const [isOnline, setIsOnline] = React.useState(false);
  // useOnlineManager();
  // useAppState(onAppStateChange);

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
  // const [notificationId, setNotificationId] = React.useState<String>(); //use to get notifcationId from notification tap event to delte that notificaiton
  const [notificationId, setNotificationId] = React.useState();
  // const handleAppStateChange = (nextAppState: any) => {
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

  // React.useEffect(() => {}, []);

  // React.useEffect(() => {
  //   queryClient.resumePausedMutations();
  // }, []);

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
        //it will call on mounting
        // console.log('will get called on re-mounting');
        // if (onlineManager.isOnline()) {
        //   queryClient.resumePausedMutations().then(() => {
        //     //it will resume
        //     console.log('resumed paused mutations now refetching queries');

        Netinfo.fetch().then(state => {
          if (state.isConnected) {
            queryClient.resumePausedMutations();
          }
        });

        //     queryClient.invalidateQueries(); //it will revalidate queries
        //   });
        // }
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

// export {queryClient};
