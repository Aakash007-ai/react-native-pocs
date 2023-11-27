import React from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../navigation/types';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamsList>) => {
  const Screens = [
    {
      title: 'Chart Kit',
      name: 'ChartKit',
      screen: 'ChartKit',
    },
    {
      title: 'Gifted Chart',
      name: 'GiftedChart',
      screen: 'GiftedChart',
    },
    {
      title: 'DropDown',
      name: 'DropDown',
      screen: 'DropDown',
    },
    {
      title: 'AnimatedFlatList',
      name: 'AnimatedFlatList',
      screen: 'AnimatedFlatList',
    },
    {
      title: 'React-Native-Camera',
      name: 'ReactNativeCamera',
      screen: 'ReactNativeCamera',
    },
    {
      title: 'Notifee Notificaiton',
      name: 'NotifeeNotification',
      screen: 'NotifeeNotification',
    },

    {
      title: 'Custom Notifciation',
      name: 'CustomNotificaiton',
      screen: 'CustomNotification',
    },
    {
      title: 'SkeletonLoading',
      name: 'SkeletonLoading',
      screen: 'SkeletonLoading',
    },
    {
      title: 'Notifee Example',
      name: 'NotifeeExample',
      screen: 'NotifeeExample',
    },
    {
      title: 'IconApp',
      name: 'IconApp',
      screen: 'IconApp',
    },
    {
      title: 'CustomNotifee',
      name: 'CustomNotifee',
      screen: 'CustomNotifee',
    },
    {
      title: 'BackgroundNotification',
      name: 'BackgroundNotification',
      screen: 'BackgroundNotification',
    },
    {
      title: 'AppStateNotification',
      name: 'AppStateNotification',
      screen: 'AppStateNotification',
    },
  ];
  type ItemProps = {title: string; name: string; screen: string};
  const Item = (item: ItemProps) => (
    <View>
      <Text>Hello</Text>
    </View>
  );
  return (
    <>
      {/* <SafeAreaView>
        <FlatList data={Screens} renderItem={({item}) => Item(item)} />
      </SafeAreaView> */}
      <ScrollView style={{margin: 5}}>
        <View style={{alignItems: 'center', padding: 8}}>
          <Text>
            Welcome to React Native Pocs. To view any functionality tap on
            button
          </Text>
          <Button
            title="ChartKit"
            onPress={() => {
              navigation.navigate('Onboarding', {screen: 'ChartKit'});
            }}
          />
          {/* <Button
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
          />
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
          /> */}
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
