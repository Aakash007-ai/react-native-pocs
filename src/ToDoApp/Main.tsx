import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient} from '@tanstack/react-query';
import {RootStackParamList} from './navigation';
import ToDoListScreen from './ToDoListScreen';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import AddToDoScreen from './AddToDoScreen';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 2000,
      retry: 0,
    },
  },
});

// queryClient.setMutationDefaults(['addToDoWithId'], {
//   mutationFn: ({id, name, description}) => {
//     return;
//   },
// });

const asyncStoraghePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 1000,
});

const Stack = createNativeStackNavigator<RootStackParamList>();
const ToDoApp = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister: asyncStoraghePersister}}
      onSuccess={() => {
        console.log('Persist Query Client Provider onSuccess');
        queryClient
          .resumePausedMutations()
          .then(() => queryClient.invalidateQueries());
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: '#ffffff',
            },
          }}>
          <Stack.Screen name="ToDoList" component={ToDoListScreen} />
          <Stack.Screen name="AddToDo" component={AddToDoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
};

export default ToDoApp;
