import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingNavigator from './OnboardingNavigator';
import {RootStackParamsList} from '../types';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
    </RootStack.Navigator>
  );
};
