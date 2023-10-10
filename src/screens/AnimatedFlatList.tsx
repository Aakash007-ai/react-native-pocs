import React, {useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import LowerList from './LowerList';
import ValueSelector from './ValueSelector';

const AnimatedFlatList = () => {
  useEffect(() => {
    console.log('Dimension.get window ::::', Dimensions.get('window'));
    console.log('Dimension.get screen ::::', Dimensions.get('screen'));
  });
  return (
    <View style={{flex: 1}}>
      <View style={{height: '50%'}}>
        <LowerList />
      </View>
      <View>
        <ValueSelector />
      </View>
    </View>
  );
};

export default AnimatedFlatList;

/*
Section List :- when we want to display data as list of headers and their list
inshort like a section
*/
