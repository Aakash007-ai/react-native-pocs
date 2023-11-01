import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from './types';
import HomeScreen from '../screens/HomeScreen';
import ChartKitScreen from '../screens/ChartKit';
import DropDownPickerScreen from '../screens/DropDownPicker';
import ReanimatedDemoOne from '../screens/ReanimatedDemoOne';
import ReanimatedDemoTwo from '../screens/ReanimatedDemoTwo';
import AnimatedFlatList from '../screens/AnimatedFlatList';
import ReactNativeCamera from '../screens/ReactNativeCamera';
import NotifeeNotification from '../screens/NotifeeNotification';

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
      <OnboardingStack.Screen
        name="ReanimatedOne"
        component={ReanimatedDemoOne}
      />
      <OnboardingStack.Screen
        name="ReanimatedTwo"
        component={ReanimatedDemoTwo}
      />
      <OnboardingStack.Screen
        name="AnimatedFlatList"
        component={AnimatedFlatList}
      />
      <OnboardingStack.Screen
        name="ReactNativeCamera"
        component={ReactNativeCamera}
      />
      <OnboardingStack.Screen
        name="NotifeeNotification"
        component={NotifeeNotification}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
