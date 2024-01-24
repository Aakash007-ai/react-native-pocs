import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {
  MutationCache,
  QueryClient,
  focusManager,
  onlineManager,
} from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import {AppState, AppStateStatus, Platform} from 'react-native';
import axios from './axios-secure';

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state =>
    setOnline(Boolean(state.isConnected)),
  );
});

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      //staletime: Infinity, // default 5 min
      gcTime: Infinity,
      retry: 3,
    },
    queries: {
      // staleTime:2000, //default 5 min upto 5 minutes there will be no refetch (except on refocus, refetchOnWindowFocus: false)
      retry: 2, //2 times it will retry once gets failed
      gcTime: 1000 * 10, //cacheh time , it must be 24 hour 1000*60*60*24 milliseconds in 1 seconds *60 secind in 1 minute * 60 minutes in 1 hour * 24 hours in 1 day
    },
  },
});

queryClient.setMutationDefaults(['add-super-hero'], {
  mutationFn: newHeroData => {
    //create a standalone mutation
    console.log(
      'newHeroData in mutation function by default of app.jsx',
      newHeroData,
    );
    return axios.post('/superheroes', newHeroData);
  },
  onMutate: async newHero => {
    console.log('onMutate by default in app.jsx', newHero);

    await queryClient.cancelQueries(['super-heroes']); //cancelling is a await

    const previousHeroes = queryClient.getQueryData(['super-heroes']);

    queryClient.setQueryData(['super-heroes'], old => {
      console.log('old query data in app.jsx:::---', old);
      return {
        ...old,
        data: [...old.data, {...newHero, id: old?.data.length + 1}],
      };
    });

    console.log(
      'newly updated old data in app.jsx',
      queryClient.getQueryData(['super-heroes']),
    );

    return {previousHeroes};
  },

  onError: (error, variables, context) => {
    // An error happened!
    console.log(`rolling back optimistic update with id ${context.id}`);

    queryClient.setQueryData(['super-heroes'], context.previousHeroes);
  },
  onSuccess: (data, variables, context) => {
    console.log('by default mutations successfully happen');
  },
  onSettled: (data, error, variables, context) => {
    console.log('onSettled by default in app.jsx', data, error, variables);
    queryClient.invalidateQueries({queryKey: ['super-heroes']});
  },
});

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 1000, //check why we add this (throttle time is used to save data in async storage after 1 sec)
});

const onAppStateChange = state => {
  //type AppStateStatus
  NetInfo.fetch().then(state => {
    if (state.isConnected && Platform.OS !== 'web') {
      queryClient.resumePausedMutations();
    }
  });
  // focusManager.setFocused(state === 'active');
};

export {queryClient, persister, onAppStateChange};

// https://www.libhunt.com/r/example-react-native-offline-tanstack-query
// https://github.com/fedorish/example-react-native-offline-tanstack-query/blob/main/App.js //implement this directly in evolv

//https://github.com/fedorish/example-react-native-offline-tanstack-query/blob/main/App.js

// https://github.com/TanStack/query/discussions/988

// https://blog.stackademic.com/offline-react-native-app-with-typeorm-expo-sqlite-and-react-query-37e5b8a05abb

// https://www.youtube.com/watch?v=i--8UqAtFbY //graphql

// https://rxdb.info/backup.html
