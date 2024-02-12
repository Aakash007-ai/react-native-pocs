import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {View, Text, Dimensions, FlatList, ScrollView} from 'react-native';

const TrainerScreenSkeletal = () => {
  let box = [1, 1, 1];
  let box2 = [1, 1, 1, 1];
  const MyLoader = props => (
    <ContentLoader
      speed={2}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor="#a3a3a3"
      foregroundColor="#f5f5f5"
      {...props}>
      <Rect x="20" y="10" rx="10" ry="10" width="336" height="20" />
    </ContentLoader>
  );
  const Replica = () => (
    <>
      <View style={{height: 35}}>
        <MyLoader />
      </View>
      <View style={{padding: 10}}>
        <FlatList
          data={box}
          horizontal={true}
          nestedScrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <View
              style={{
                height: 55,
                // width: Dimensions.get('window').width * 0.9,
                width: 50,
                backgroundColor: '#a3a3a3',
                marginHorizontal: 10,
                borderRadius: 10,
              }}>
              {/* <Text style={{color: 'black'}}>{item.item}hello</Text> */}
            </View>
          )}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            height: 250,
            backgroundColor: '#a3a3a3',
            borderRadius: 10,
            justifyContent: 'center',

            marginHorizontal: 20,
          }}
        />
      </View>
    </>
  );
  const Replica2 = () => (
    <>
      <View style={{height: 35, paddingTop: 5}}>
        <MyLoader />
      </View>
      <View style={{padding: 10}}>
        <FlatList
          data={box2}
          horizontal={true}
          nestedScrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <View
              style={{
                height: 55,
                // width: Dimensions.get('window').width * 0.9,
                width: 50,
                backgroundColor: '#a3a3a3',
                marginHorizontal: 10,
                borderRadius: 10,
              }}>
              {/* <Text style={{color: 'black'}}>{item.item}hello</Text> */}
            </View>
          )}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: '80%',
            height: '40%',
            backgroundColor: '#a3a3a3',
            borderRadius: 10,
            justifyContent: 'center',

            marginHorizontal: 20,
          }}
        />
        <View
          style={{
            width: '40%',
            height: '12%',
            bottom: 10,
            backgroundColor: '#a3a3a3',
            borderRadius: 10,
            justifyContent: 'center',

            marginHorizontal: 20,
          }}
        />
      </View>
    </>
  );
  return (
    <ScrollView>
      <View style={{height: Dimensions.get('window').height}}>
        <Replica />
        <Replica2 />
      </View>
    </ScrollView>
  );
};

export default TrainerScreenSkeletal;
