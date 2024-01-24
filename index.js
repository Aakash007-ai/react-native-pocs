/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CustomComponent from './src/screens/CustomNotifee/CustomComponent';
import codePush from 'react-native-code-push';

AppRegistry.registerComponent(appName, () => codePush(App));

// AppRegistry.registerComponent('custom-component', () => CustomComponent);
