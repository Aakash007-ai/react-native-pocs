/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import CustomComponent from './src/screens/CustomNotifee/CustomComponent';
import ToDoApp from './src/ToDoApp/Main';


AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => ToDoApp);
// AppRegistry.registerComponent('custom-component', () => CustomComponent);
