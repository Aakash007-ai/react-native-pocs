import React from 'react';
import {View, Text, Button, Dimensions} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../types';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamsList>) => {
  return (
    <>
      <View style={{alignItems: 'center', padding: 8}}>
        <Text>
          Welcome to React Native Pocs. To view any functionality tap on button
        </Text>
        <Button
          title="ChartKit"
          onPress={() => {
            navigation.navigate('Onboarding', {screen: 'ChartKit'});
          }}
        />
        <Button
          title="DropDown"
          onPress={() => {
            navigation.navigate('Onboarding', {screen: 'DropDown'});
          }}
        />
      </View>
    </>
  );
};

export default HomeScreen;
