import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from './types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChartKitScreen from '../screens/Charts/ChartKit';
import DropDownPickerScreen from '../screens/DropDownPicker';
import ReanimatedDemoOne from '../screens/Reanimated/ReanimatedDemoOne';
import ReanimatedDemoTwo from '../screens/Reanimated/ReanimatedDemoTwo';
import AnimatedFlatList from '../screens/Reanimated/AnimatedFlatList';
import ReactNativeCamera from '../screens/ReactNativeCamera';
import NotifeeNotification from '../screens/LocalNotifciation/NotifeeNotification';
import CustomNotification from '../screens/LocalNotifciation/CustomNotification';
import SkeletonLoading from '../screens/SkeletonLoading/SkeletonLoading';
import HomeScreenSkeleton from '../screens/SkeletonLoading/HomeScreenSkeleton';

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
      <OnboardingStack.Screen
        name="CustomNotification"
        component={CustomNotification}
      />
      <OnboardingStack.Screen
        name="SkeletonLoading"
        component={SkeletonLoading}
      />
      <OnboardingStack.Screen
        name="HomeScreenSkeleton"
        component={HomeScreenSkeleton}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
