import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {View, Text, Dimensions, FlatList, ScrollView} from 'react-native';

const UserProfileSkeletal = () => {
  let box = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2];
  return (
    <View style={{height: Dimensions.get('window').height}}>
      <View style={{height: Dimensions.get('window').height}}>
        <FlatList
          data={box}
          nestedScrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <View
              style={{
                height: 50 * item.item,
                width: Dimensions.get('window').width * 0.9,
                backgroundColor: 'grey',
                marginHorizontal: 20,
                borderRadius: 10,
              }}>
              {/* <Text style={{color: 'black'}}>{item.item}hello</Text> */}
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
                width: '100%',
                backgroundColor: 'white',
              }}></View>
          )}
          ListHeaderComponent={() => (
            <View
              style={{
                height: 50,
                width: '100%',
                // backgroundColor: 'white',
              }}></View>
          )}
        />
      </View>
    </View>
  );
};

export default UserProfileSkeletal;
