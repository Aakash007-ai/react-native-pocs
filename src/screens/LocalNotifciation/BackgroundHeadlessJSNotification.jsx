import React, {useEffect} from 'react';
import {View, Text, AppState} from 'react-native';
import {AppRegistry} from 'react-native';

/*
goal is to make app uin background and then after 3 sec show notification

and once the app comes to foreground remove notification

*/

const BackgroundNotification = () => {
  //jsut check the app state and show it
  const [appState, setAppState] = React.useState(AppState.currentState);
  const [isMounted, setIsMounted] = React.useState(true);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
      //start a task here to start notiifcation
      AppRegistry.registerHeadlessTask('SomeTaskName', () => {
        require('../CustomNotifee/SomeTaskName.js');
      });

      setIsMounted(true);
    } else if (
      appState === 'active' &&
      nextAppState.match(/inactive|background/)
      //cancel notification here if any present
    ) {
      console.log('App has come to the background!');
      setIsMounted(false);
    }
    setAppState(nextAppState);
    console.log('App State in::: ', appState);
  };
  return (
    <View>
      <Text style={{color: 'black'}}>Background Notifcation </Text>
      <Text style={{color: 'black'}}>Current App State : {appState}</Text>
    </View>
  );
};

export default BackgroundNotification;

// import React from 'react';
// import {View, Text, AppState} from 'react-native';
// const BackgroundNotification = () => {
//   const appState = React.useRef(AppState.currentState);
//   const [appStateVsible, setAppStateVisible] = React.useState(appState.current);

//   React.useEffect(() => {
//     AppState.addEventListener('change', _handleAppStateChange);

//     return () => {
//       AppState.removeEventListener('change', _handleAppStateChange);
//     };
//   }, []);

//   const _handleAppStateChange = nextAppState => {
//     if (
//       appState.current.match(/inactive|background/) &&
//       nextAppState === 'active'
//     ) {
//       console.log('App has come to the foreground!');
//       //start a task here to start notiifcation
//       // AppRegistry.registerHeadlessTask('SomeTaskName', () => {
//       //   require('./SomeTaskName.js');
//       // });

//       setAppStateVisible(appState.current);
//     } else if (
//       appState.current === 'active' &&
//       nextAppState.match(/inactive|background/)
//       //cancel notification here if any present
//     ) {
//       console.log('App has come to the background!');
//       setAppStateVisible(appState.current);
//     }
//     appState.current = nextAppState;
//     setAppStateVisible(appState.current);
//     console.log('App State ::: ', appState.current);
//   };
//   return (
//     <View>
//       <Text>hello </Text>
//     </View>
//   );
// };

// export default BackgroundNotification;
