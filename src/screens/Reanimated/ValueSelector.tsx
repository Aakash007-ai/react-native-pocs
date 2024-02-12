import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, Animated} from 'react-native';
// import Animated from 'react-native-reanimated';
// import {FlatList} from 'react-native-reanimated/lib/typescript/Animated';
const {width} = Dimensions.get('window');

const ITEM_SIZE = width * 0.25;

const ValueSelector = (props: {data: number[]}) => {
  const {data} = props;
  let initialIndex = 5;
  const [selection, setSelection] = useState(initialIndex); //initialindex

  //let data = [1, 2, 3, 4, 5, 6, 7, 8];
  const ITEM_SPACING = React.useMemo(() => {
    return (width - ITEM_SIZE) / 2 - 20;
  }, []);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces
        getItemLayout={(data, index) => ({
          length: ITEM_SIZE,
          offset: ITEM_SIZE * index,
          index,
        })}
        initialScrollIndex={initialIndex}
        decelerationRate="fast"
        onMomentumScrollEnd={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
          setSelection(index);
          console.log('index of selection is : ', index);
          // if (isGif) onSelect(data?.[index]?.id);
        }}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {x: scrollX}}},
        ])} //not working in simple view
        contentContainerStyle={{paddingHorizontal: ITEM_SPACING}}
        snapToInterval={ITEM_SIZE}
        style={{flexGrow: 0}}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
          });
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: ITEM_SIZE,
              }}>
              <Animated.Text
                style={{
                  fontSize: ITEM_SIZE * 0.4,
                  color: 'black',

                  transform: [{scale}],
                }}>
                {item}
              </Animated.Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ValueSelector;
