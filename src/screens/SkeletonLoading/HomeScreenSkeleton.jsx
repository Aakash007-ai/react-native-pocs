import React, {useEffect} from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {View, Text, Dimensions, ScrollView, FlatList} from 'react-native';

const HomeScreenSkeleton = () => {
  const SHIMMER_SPEED = 2;
  const BACKGROUND_COLOR = '#c2c1c1';
  const FOREGROUND_COLOR = '#f5f5f5';
  const HeaderSkeleton = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="96" y="29" rx="3" ry="3" width="140" height="11" />
      <Rect x="100" y="55" rx="3" ry="3" width="72" height="10" />
      {/* <Circle cx="50" cy="47" r="29" /> */}
      <Circle //header circle
        cx="50"
        cy="57"
        r="29"
      />
    </ContentLoader>
  );

  const WorkoutCard = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="17" y="5" rx="3" ry="3" width="100" height="13" />
      <Rect x="25" y="30" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="45" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="60" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="75" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="90" rx="3" ry="3" width="66" height="7" />
      {/* <Circle cx="25" cy="30" r="4" /> */}
    </ContentLoader>
  );

  const NutritionCard = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      {/* <Circle cx="25" cy="30" r="4" /> */}

      <Rect x="50" y="40" rx="3" ry="3" width="254" height="17" />
      <Rect x="100" y="70" rx="3" ry="3" width="140" height="11" />
    </ContentLoader>
  );

  const WeightCard = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      {/* <Circle cx="25" cy="30" r="4" /> */}
      <Rect x="15" y="20" rx="3" ry="3" width="100" height="13" />
      <Rect x="25" y="60" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="45" rx="3" ry="3" width="66" height="7" />
    </ContentLoader>
  );

  const ChallengeCard = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      {/* <Circle cx="25" cy="30" r="4" /> */}
      <Rect x="15" y="5" rx="3" ry="3" width="100" height="13" />
      <Rect x="25" y="60" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="45" rx="3" ry="3" width="66" height="7" />
    </ContentLoader>
  );

  const StepsCard = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      {/* <Circle cx="25" cy="30" r="4" /> */}
      <Rect x="15" y="10" rx="3" ry="3" width="100" height="13" />
      <Rect x="25" y="100" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="120" rx="3" ry="3" width="66" height="7" />
      <Circle cx="60" cy="60" r="29" />
    </ContentLoader>
  );

  let box2 = [1, 1, 1, 1];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        height: Dimensions.get('window').height,
        padding: 10,
      }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#a3a3a3',
            height: 400,
            width: 'auto',
            padding: 10,
            margin: 20,
            borderRadius: 20,
            elevation: 10,
          }}></View>
        {/* <View
          style={{
            backgroundColor: '#a3a3a3',
            height: 80,
            width: 'auto',
            // margin: 10,
          }}></View> */}
        <FlatList
          data={box2}
          horizontal={true}
          nestedScrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          style={{padding: 10, elevation: 10}}
          renderItem={item => (
            <View
              style={{
                height: 55,
                // width: Dimensions.get('window').width * 0.9,
                width: 50,
                backgroundColor: '#a3a3a3',
                marginHorizontal: 10,
                borderRadius: 10,
              }}>
              {/* <Text style={{color: 'black'}}>{item.item}hello</Text> */}
            </View>
          )}
        />
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 200,
              backgroundColor: '#D1E5FF',
              borderRadius: 10,
              justifyContent: 'center',

              marginHorizontal: 20,
              elevation: 10,
            }}
          />
          <View
            style={{
              width: '40%',
              height: 40,
              bottom: 10,
              backgroundColor: '#a3a3a3',
              borderRadius: 10,
              justifyContent: 'center',
              marginHorizontal: 20,
              elevation: 10,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreenSkeleton;
