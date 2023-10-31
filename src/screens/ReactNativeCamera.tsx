import React from 'react';
import {View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

const ReactNativeCamera = () => {
  return (
    <View>
      <Text>Camera Component</Text>
      <RNCamera style={{flex: 1}} />
    </View>
  );
};

export default ReactNativeCamera;
