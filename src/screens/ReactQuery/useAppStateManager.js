import {useEffect} from 'react';
import {AppState} from 'react-native';

export function useAppState(onChange) {
  useEffect(() => {
    AppState.addEventListener('change', onChange);
    return () => {
      AppState.removeEventListener('change', onChange);
    };
  }, [onChange]);
}

// used to detect appstate change (wheter it come frmo background or foreground)1
//switching background and foreground (when you when to schecdule something on app switch)

// const [appState, setAppState] = React.useState(AppState.currentState);

// React.useEffect(() => {
//   const subscription = AppState.addEventListener(
//     'change',
//     handleAppStateChange,
//   );

//   return () => {
//     subscription.remove();
//   };
// }, [appState]);

// //app state
// const handleAppStateChange = nextAppState => {
//   if (appState.match(/inactive|background/) && nextAppState === 'active') {
//     console.log('App has come to the foreground!');
//   } else if (
//     appState === 'active' &&
//     nextAppState.match(/inactive|background/)
//   ) {
//     console.log('App has come to the background!');
//   }
// };
