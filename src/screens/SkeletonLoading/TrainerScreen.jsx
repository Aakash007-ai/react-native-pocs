import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {View, Text, Dimensions} from 'react-native';

const TrainerScreenSkeletal = () => {
  const SHIMMER_SPEED = 2;
  const BACKGROUND_COLOR = '#c2c1c1';
  const FOREGROUND_COLOR = '#f5f5f5';
  const INTERVAL = 0.1;
  const NavigationHeaderSkeletal = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      interval={INTERVAL}
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="50" y="50" rx="3" ry="3" width="59" height="20" />
      <Rect x="170" y="50" rx="3" ry="3" width="59" height="20" />
      <Rect x="300" y="50" rx="3" ry="3" width="59" height="20" />
      {/* <Circle cx="50" cy="47" r="29" /> */}
    </ContentLoader>
  );
  const InfoSkeletal = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      interval={INTERVAL}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="100" y="50" rx="3" ry="3" width="30" height="30" />
      <Rect x="250" y="50" rx="3" ry="3" width="30" height="30" />

      {/* <Circle cx="50" cy="47" r="29" /> */}
    </ContentLoader>
  );
  return (
    <View style={{height: Dimensions.get('window').height * 0.9}}>
      <View style={{height: '40%', backgroundColor: 'grey'}}></View>
      <View //3 linesme
        style={{flex: 1}}>
        <NavigationHeaderSkeletal />
      </View>
      <View //2 lines
        style={{flex: 1}}>
        <InfoSkeletal />
      </View>
      <View style={{height: '30%', backgroundColor: 'grey'}}></View>
      <View></View>
    </View>
  );
};

export default TrainerScreenSkeletal;
