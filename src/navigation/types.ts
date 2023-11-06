import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamsList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
};

export type OnboardingStackParamList = {
  HomeScreen: undefined;
  ChartKit: undefined;
  DropDown: undefined;
  ReanimatedOne: undefined;
  ReanimatedTwo: undefined;
  AnimatedFlatList: undefined;
  ReactNativeCamera: undefined;
  NotifeeNotification: undefined;
  CustomNotification: undefined;
  SkeletonLoading: undefined;
  HomeScreenSkeleton: undefined;
};

// import {NativeStackScreenProps} from '@react-navigation/native-stack';

// export type RootStackParamsList = {
//   HomeScreen: undefined;
//   DropDownPicker: undefined;
//   ChartKit: undefined;
// };

// export type RootScreenNavigationProps =
//   NativeStackScreenProps<RootStackParamsList>;
