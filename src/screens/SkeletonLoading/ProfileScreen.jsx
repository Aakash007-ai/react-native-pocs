import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';
import {View, Text, Dimensions, ScrollView} from 'react-native';

const ProfileScreenSkeletal = () => {
  const SHIMMER_SPEED = 2;
  const BACKGROUND_COLOR = '#a3a3a3'; //'#c2c1c1';
  const FOREGROUND_COLOR = '#f5f5f5';
  const INTERVAL = 0.1;
  const AvatarHeader = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      interval={INTERVAL}
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
      <Rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
      <Rect x="304" y="-46" rx="3" ry="3" width="350" height="6" />
      <Rect x="371" y="-45" rx="3" ry="3" width="380" height="6" />
      <Rect x="484" y="-45" rx="3" ry="3" width="201" height="6" />
      <Circle cx="48" cy="48" r="48" />
      <Rect x="24" y="125" rx="4" ry="4" width="300" height="12" />
      <Rect x="4" y="210" rx="8" ry="8" width="350" height="19" />
      <Rect x="4" y="280" rx="8" ry="8" width="350" height="19" />
      <Rect x="4" y="360" rx="8" ry="8" width="350" height="19" />
      {/* <Rect x="361" y="227" rx="0" ry="0" width="9" height="8" /> */}
    </ContentLoader>
  );
  return (
    <ScrollView>
      <View style={{padding: 20, height: Dimensions.get('window').height}}>
        <View style={{height: '60%'}}>
          <AvatarHeader />
        </View>
        <View
          style={{width: '100%', backgroundColor: 'grey', height: 200}}></View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreenSkeletal;
