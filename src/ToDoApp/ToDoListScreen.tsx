import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './navigation';
import OffflineSimulator from './OfflineSimulator';
import {View, Text, Button} from 'react-native';
import {PagedToDos} from './ToDo';
import ToDoList from './ToDoList';
import {
  QueryClient,
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
type ToDoListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ToDoList'
>;
const ToDoListScreen = ({navigation}: ToDoListScreenProps) => {
  // const data = React.useMemo<PagedToDos>(
  //   () => ({
  //     items: [
  //       {
  //         id: '1',
  //         name: 'Todo1',
  //         description: 'ToDo 1:loreum Ipsum',
  //         completed: false,
  //       },
  //     ],
  //   }),
  //   [],
  // );

  //-------------useQuery--------------------

  const fetcherUrl = () => {
    return axios.get('http://192.168.0.132:3000/todo');
  };

  // const queryClient = useQueryClient();
  const {isLoading, data, isError, isSuccess, isFetching} = useQuery({
    queryKey: ['todos'],
    queryFn: fetcherUrl,
    gcTime: 1000 * 60 * 60 * 24,
  });

  React.useEffect(() => {
    if (isError) console.log('Error while fetching todos');
    if (isLoading) console.log('is Loading todos...');
    if (isFetching) console.log('isFetching todos');
    if (data) console.log('todo data is fetched is  ');
  }, [isError, isLoading, isFetching, data]);

  //-------------useMutation---- completing a todo-----------
  const queryClient = new QueryClient();

  const patchToDoCompleted = (id: string) => {
    return axios.patch(`http://192.168.0.132:3000/todo/${id}`, {
      completed: true,
    });
  };

  const {mutate} = useMutation({
    mutationKey: ['completedToDo'],
    mutationFn: patchToDoCompleted,
    onMutate: async toDoId => {
      await queryClient.cancelQueries({queryKey: ['todos']});

      const previousToDos = queryClient.getQueryData<PagedToDos>(['todos']);

      queryClient.setQueryData<PagedToDos>(['todos'], old => {
        return {
          items:
            old?.items.map(item => {
              if (item.id === toDoId) {
                return {
                  ...item,
                  completed: true,
                };
              } else {
                return item;
              }
            }) || [],
        };
      });

      return {previousToDos};
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(['todos'], context?.previousToDos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  //--------------useMutation--------adding a todo-----------

  //---------setting header icon to add todo
  React.useEffect(() => {
    navigation.setOptions({
      title: 'List',
      headerRight: () => (
        <Button title="Add" onPress={() => navigation.navigate('AddToDo')} />
      ),
    });
  }, [navigation]);

  const handleCompleteToDo = (todoId: string) => mutate(todoId);

  return (
    <View>
      <OffflineSimulator />
      <View>
        {isError && <Text>Error</Text>}
        {isLoading && <Text>Loading....</Text>}
        {isSuccess && (
          <ToDoList todo={data?.data} onCompleteToDo={handleCompleteToDo} />
        )}
      </View>
    </View>
  );
};

export default ToDoListScreen;
