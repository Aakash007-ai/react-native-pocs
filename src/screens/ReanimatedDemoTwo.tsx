import {View, Text, Button} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const ReanimatedDemoTwo = () => {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(translateX.value * 2)}],
  }));

  return (
    <>
      <View style={{flex: 1, alignContent: 'center'}}>
        <Text>Reanimated Demo</Text>

        <Animated.View
          style={[
            {
              height: 120,
              width: 120,
              backgroundColor: '#b58df1',
              borderRadius: 20,
              marginVertical: 50,
            },
            animatedStyles,
          ]}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button title="Click me" onPress={handlePress} />
        </View>
      </View>
    </>
  );
};

export default ReanimatedDemoTwo;
