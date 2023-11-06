import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471d96-145571e29d72',
    title: 'Sixth Item',
  },
  {
    id: '58694-3da1-471f-bd96-145571e29d72',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455e29d72',
    title: 'Eight Item',
  },
  {
    id: '58694a0f-3da1-47d96-145571e29d72',
    title: 'Nineth Item',
  },
  {
    id: '58694a3da1-471f-bd96-145571e29d72',
    title: 'Tenth Item',
  },
  {
    id: '58694a0f-3da1-4bd96-145571e29d72',
    title: 'Eleven Item',
  },
  {
    id: '58693da1-471f-bd96-145571e29d72',
    title: 'Twelth Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const LowerList = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'black',
  },
});

export default LowerList;
