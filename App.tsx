import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DropDownPickerScreen from './src/DropDownPicker';
import ChartKitScreen from './src/ChartKit';
import HomeScreen from './src/HomeScreen';
import {RootNavigator} from './src/RootNavigator';

// const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
      {/* <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DropDownPicker" component={DropDownPickerScreen} />
        <Stack.Screen name="ChartKit" component={ChartKitScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
