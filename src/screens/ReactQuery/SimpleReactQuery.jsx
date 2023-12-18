import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export const SimpleReactQuery = () => {
  const queryClient = useQueryClient(); //used to get and maipulate query-data

  const [superHeroes, setSuperHeroes] = React.useState([]);
  const fetcherUrl = () => {
    return axios.get('http://10.206.14.21:3000/superheroes');
  };
  const {
    isLoading,
    data: superHeroesData,
    error: apiFaliedError,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetcherUrl,
    // staleTime: 5000, //data will be picked from cache for always , by default it is 0
    gcTime: 3000,
    onSuccess: data => {
      console.log('onSuccess------------', data);
      // queryClient.clear(); //clears all the cache
      queryClient.setQueryData(['super-heroes'], data);
    },
  });

  React.useEffect(() => {
    if (isLoading) {
      console.log('useQuery :- isLoading :::', isLoading);
    }
    if (superHeroesData) {
      // console.log('useQuery :- data- :::', superHeroesData?.data);
      setSuperHeroes(superHeroesData?.data);
    }
    if (isError) {
      console.log(
        'useQuery :- isError is true and error is :::',
        apiFaliedError,
      );
    }
    if (isFetching) {
      console.log('useQuery :- isFetching :::', isFetching);
    }
  }, [isLoading, superHeroesData, apiFaliedError, isError, isFetching]);

  const {isPending, mutate, isSuccess, error} = useMutation({
    mutationKey: ['add-super-hero'],
    mutationFn: newHeroData => {
      console.log('newHeroData in mutation function', newHeroData);
      return axios.post('http://10.206.14.21:3000/superheroes', newHeroData);
    },
    onMutate: async newHero => {
      console.log('onMutate', newHero);
      await queryClient.cancelQueries(['super-heroes']); //cancelling is a await
      const previousHeroes = queryClient.getQueryData(['super-heroes']);

      queryClient.setQueryData(['super-heroes'], old => {
        console.log('old query data:::---', old);
        return {
          ...old,
          data: [...old.data, {...newHero, id: old.data.length + 1}],
        };
      });

      console.log(
        'newly updated old data',
        queryClient.getQueryData(['super-heroes']),
      );

      // const previousHeroes = queryClient.getQueryData(['super-heroes']);
      // queryClient.setQueryData('super-heroes', old => [...old, newHero]);
      return {previousHeroes};
    },

    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update with id ${context.id}`);
      //in case when we want to rollback the optimistic update, when mutation fails
      queryClient.setQueryData(['super-heroes'], context.previousHeroes); //it is the context returned by onMutate
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      // console.log(
      //   "reinvalidating query 'super-heroes",
      //   data,
      //   variables,
      //   context,
      // );
      // queryClient.invalidateQueries({queryKey: ['super-heroes']});
    },
    onSettled: (data, error, variables, context) => {
      console.log('onSettled', data, error, variables, context);
      queryClient.invalidateQueries({queryKey: ['super-heroes']}); //after everything gets pushed refetch the data
    },
    // onMutate: async newHero => {},
  });

  // React.useEffect(() => {
  //   queryClient.resumePausedMutations();
  // });

  if (isLoading) {
    <View>
      <Text>Hello React Query, this is loading state ...................</Text>
    </View>;
  }

  if (isError) {
    return (
      <View>
        <Text>Hello React Query, this is error state ...................</Text>
        <Text>{apiFaliedError}</Text>
      </View>
    );
  }

  const [name, setName] = React.useState('');
  const [alterEgo, setAlterEgo] = React.useState('');

  // if (isError) return <Text>{apiFaliedError}</Text>;

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Alter Ego"
        value={alterEgo}
        onChangeText={setAlterEgo}
      />
      <Button
        title="Add new field"
        onPress={async () => {
          console.log('add new field button clicked', name, alterEgo);
          let data = {
            alterEgo,
            name,
          };
          mutate(data, {
            onSuccess: () => {
              console.log('onSuccess');
            },
            onError: error => {
              console.log('onError', error);
            },
            onSettled: () => {
              console.log('onSettled');
            },
          });
          Keyboard.dismiss();
        }}
      />
      <Text>Hello React Query</Text>

      <FlatList
        data={superHeroes}
        keyExtractor={(item, index) => index.toString()}
        // initialScrollIndex={1}
        // maintainVisibleContentPosition={{
        //   minIndexForVisible: 0,
        // }}
        // inverted={true}
        renderItem={({item}) => {
          // console.log('item', item);
          return (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.flatlistText}>
                {item.id} -- {item.name} --- {item.alterEgo}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistText: {color: 'black', fontSize: 20},
  container: {
    flex: 1,
  },
});
