import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IconList from './IconList';
import IconSetList from './IconSetList';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
});

const IconListScreen = ({route, navigation}) => (
  <IconList iconSet={route.params.iconSet} />
);

const IconExplorer = ({navigation}) => (
  <IconSetList
    navigator={{
      push({iconSet, title}) {
        navigation.navigate('IconSet', {title, iconSet});
      },
    }}
  />
);

const Stack = createNativeStackNavigator();

function IconApp() {
  return (
    <Stack.Navigator initialRouteName="IconExplorer">
      <Stack.Screen name="IconExplorer" component={IconExplorer} />
      <Stack.Screen
        name="IconSet"
        component={IconListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerStyle: styles.header,
        })}
      />
    </Stack.Navigator>
  );
}

export default IconApp;
