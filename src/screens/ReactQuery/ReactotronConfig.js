import Reactotron, {storybook} from 'reactotron-react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure() // controls connection & communication settings
  .useReactNative({
    storybook: true,
    asyncStorage: true,
    overlay: true,
    devTools: true,
  }) // add all built-in react native plugins
  .connect(); // let's connect!
