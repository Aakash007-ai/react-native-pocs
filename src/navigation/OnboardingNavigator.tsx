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
import TrainerScreenSkeletal from '../screens/SkeletonLoading/TrainerScreen';
import WorkoutScreenSkeletal from '../screens/SkeletonLoading/WorkoutScreen';
import ProfileScreenSkeletal from '../screens/SkeletonLoading/ProfileScreen';
import GiftedChart from '../screens/Charts/GiftedChart';
import NotifeeExample from '../screens/NotifeeExample/NotifeeExample';
import IconApp from '../IconExplorer/IconMain';
import CustomNotifee from '../screens/CustomNotifee/CustomNotifee';
import BackgroundNotification from '../screens/LocalNotifciation/BackgroundHeadlessJSNotification';
import AppStateNotification from '../screens/CustomNotifee/AppStateNotification';

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
      <OnboardingStack.Screen name="GiftedChart" component={GiftedChart} />
      <OnboardingStack.Screen
        name="HomeScreenSkeleton"
        component={HomeScreenSkeleton}
        options={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="TrainerScreenSkeletal"
        component={TrainerScreenSkeletal}
        options={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="WorkoutScreenSkeletal"
        component={WorkoutScreenSkeletal}
        options={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="ProfileScreenSkeletal"
        component={ProfileScreenSkeletal}
        options={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="NotifeeExample"
        component={NotifeeExample}
      />
      <OnboardingStack.Screen name="IconApp" component={IconApp} />
      <OnboardingStack.Screen
        name="CustomNotifee"
        component={CustomNotifee}
        options={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="BackgroundNotification"
        component={BackgroundNotification}
        options={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="AppStateNotification"
        component={AppStateNotification}
        options={{}}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
