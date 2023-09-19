import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChartKitScreen from './ChartKit';
import DropDownPickerScreen from './DropDownPicker';
import HomeScreen from './HomeScreen';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamsList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
};

export type OnboardingStackParamList = {
  HomeScreen: undefined;
  ChartKit: undefined;
  DropDown: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen name="HomeScreen" component={HomeScreen} />
      <OnboardingStack.Screen name="ChartKit" component={ChartKitScreen} />
      <OnboardingStack.Screen
        name="DropDown"
        component={DropDownPickerScreen}
      />
    </OnboardingStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
    </RootStack.Navigator>
  );
};
