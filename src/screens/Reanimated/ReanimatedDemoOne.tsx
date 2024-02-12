import {View, Text, Button} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
const ReanimatedDemoOne = () => {
  const width = useSharedValue(100); //shared between js and native
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
    //width.value += 50;
  };
  return (
    <>
      <View style={{flex: 1, alignContent: 'center'}}>
        <Text>Reanimated Demo</Text>
        <Animated.View
          style={{
            width,
            //width: 100,
            height: 100,
            backgroundColor: 'violet',
          }}></Animated.View>

        <Button onPress={handlePress} title="Click me" />
      </View>
    </>
  );
};

export default ReanimatedDemoOne;
