import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, Dimensions} from 'react-native';
import {useAppNavigation} from './useAppNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingStackParamList, RootStackParamsList} from './RootNavigator';
// import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import {RootScreenNavigationProps, RootStackParamsList} from './types';

const HomeScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamsList>) => {
  //   const navigation = useNavigation<RootScreenNavigationProps>();
  //const navigation = useAppNavigation();
  return (
    <>
      <View style={{alignItems: 'center', padding: 8}}>
        <Text>
          Welcome to React Native Pocs. To view any functionality tap on button
        </Text>
        <Button
          title="ChartKit"
          onPress={() => {
            // navigation.navigate('DropDownPicker');
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
