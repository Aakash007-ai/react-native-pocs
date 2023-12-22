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
import axios from '../ReactQuery/axios-secure';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useNetInfo} from '@react-native-community/netinfo';
import {useSuperHeroQuery, addSuperHeroMutation} from './apis';

export const SimpleReactQuery = () => {
  const {type, isConnected} = useNetInfo();
  const queryClient = useQueryClient(); //used to get and maipulate query-data

  // React.useState(() => {
  //   queryClient.resumePausedMutations();
  // }, [isConnected]);

  const [superHeroes, setSuperHeroes] = React.useState([]);

  const {
    isLoading,
    data: superHeroesData,
    error: apiFaliedError,
    isError,
    isFetching,
  } = useSuperHeroQuery();

  React.useEffect(() => {
    if (isLoading) {
      console.log('useQuery :- isLoading :::', isLoading);
    }
    if (superHeroesData) {
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

  const {isPending, mutate, isSuccess, error} = addSuperHeroMutation();

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
