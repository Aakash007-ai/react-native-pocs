import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from './RootNavigator';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamsList>>;
};
