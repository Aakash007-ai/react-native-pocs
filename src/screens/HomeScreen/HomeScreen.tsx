import React from 'react';
import {View, Text, Button, Dimensions, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../navigation/types';
const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamsList>) => {
  return (
    <>
      <ScrollView style={{margin: 5}}>
        <View style={{alignItems: 'center', padding: 8}}>
          <Text>
            Welcome to React Native Pocs. To view any functionality tap on
            button
          </Text>
          {/* <Button
            title="ChartKit"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'ChartKit'});
            }}
          />
          <Button
            title="Gifted Chart"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'GiftedChart'});
            }}
          />
          <Button
            title="DropDown"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'DropDown'});
            }}
          />
          <Button
            title="Animated value selector using flatlist"
            onPress={() => {
              navigation.navigate('Onboarding', {
                screen: 'AnimatedFlatList',
              });
            }}
          />
          <Button
            title="React-Native-Camera"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'ReactNativeCamera'});
            }}
          />
          <Button
            title="Notifee Notification"
            onPress={() => {
              // console.log('button pressed');
              navigation.navigate('Onboarding', {
                screen: 'NotifeeNotification',
              });
            }}
          />
          <Button
            title="CustomNotifiaction"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'CustomNotification'});
            }}
          />

          <Button
            title="Skeleton Loading"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'SkeletonLoading'});
            }}
          />
          <Button
            title="NotifeeExample"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'NotifeeExample'});
            }}
          />
          <Button
            title="IconExample"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'IconApp'});
            }}
          /> */}
          <Button
            title="Custom Notifee"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'CustomNotifee'});
            }}
          />
          <Button
            title="Background Notification"
            onPress={() => {
              navigation.navigate('Onboarding', {
                screen: 'BackgroundNotification',
              });
            }}
          />
          <Button
            title="AppStateNotiification"
            onPress={() => {
              navigation.navigate('Onboarding', {
                screen: 'AppStateNotification',
              });
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
