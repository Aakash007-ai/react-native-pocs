import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {View, Text, Dimensions} from 'react-native';

const StepsScreenSkeletal = () => {
  const SHIMMER_SPEED = 2;
  const BACKGROUND_COLOR = '#a3a3a3';
  const FOREGROUND_COLOR = '#f5f5f5';
  const INTERVAL = 0.1;
  const GraphHeaderSkeletal = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      interval={INTERVAL}
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="50" y="50" rx="3" ry="3" width="200" height="20" />
      <Rect x="280" y="50" rx="3" ry="3" width="90" height="20" />
      {/* <Rect x="300" y="50" rx="3" ry="3" width="59" height="20" /> */}
      {/* <Circle cx="50" cy="47" r="29" /> */}
    </ContentLoader>
  );
  const BarChart = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      interval={INTERVAL}
      viewBox="0 0 392 788"
      backgroundColor="#a3a3a3"
      foregroundColor="#f5f5f5"
      {...props}>
      <Rect x="90" y="160" rx="0" ry="0" width="25" height="40" />
      <Rect x="120" y="145" rx="0" ry="0" width="25" height="55" />
      <Rect x="150" y="126" rx="0" ry="0" width="25" height="74" />
      <Rect x="180" y="80" rx="0" ry="0" width="25" height="120" />
      <Rect x="210" y="142" rx="0" ry="0" width="25" height="58" />
    </ContentLoader>
  );

  return (
    <View style={{height: Dimensions.get('window').height * 0.9}}>
      <View style={{height: '20%', backgroundColor: 'grey'}}></View>
      <View //3 linesme
        style={{flex: 1}}>
        <GraphHeaderSkeletal />
      </View>
      <View style={{height: '30%'}}>
        <BarChart />
      </View>

      <View style={{height: '45%', backgroundColor: 'grey'}}></View>
    </View>
  );
};

export default StepsScreenSkeletal;
