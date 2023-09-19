import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';

// const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
