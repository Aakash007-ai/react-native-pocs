import React, {useEffect} from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

import {View, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const HomeScreenSkeleton = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    const dimension = Dimensions.get('window');
    console.log('dimension', dimension);
    // }, 10000);
  });
  const HeaderSkeleton = props => (
    <ContentLoader
      speed={2}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor="#c2c1c1"
      foregroundColor="#f5f5f5"
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
      speed={2}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor="#c2c1c1"
      foregroundColor="#f5f5f5"
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
      speed={2}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor="#c2c1c1"
      foregroundColor="#f5f5f5"
      {...props}>
      {/* <Circle cx="25" cy="30" r="4" /> */}

      <Rect x="50" y="40" rx="3" ry="3" width="254" height="17" />
      <Rect x="100" y="70" rx="3" ry="3" width="140" height="11" />
    </ContentLoader>
  );

  const WeightCard = props => (
    <ContentLoader
      speed={2}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor="#c2c1c1"
      foregroundColor="#f5f5f5"
      {...props}>
      {/* <Circle cx="25" cy="30" r="4" /> */}
      <Rect x="15" y="20" rx="3" ry="3" width="100" height="13" />
      <Rect x="25" y="60" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="45" rx="3" ry="3" width="66" height="7" />
    </ContentLoader>
  );

  const ChallengeCard = props => (
    <ContentLoader
      speed={2}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor="#c2c1c1"
      foregroundColor="#f5f5f5"
      {...props}>
      {/* <Circle cx="25" cy="30" r="4" /> */}
      <Rect x="15" y="5" rx="3" ry="3" width="100" height="13" />
      <Rect x="25" y="60" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="45" rx="3" ry="3" width="66" height="7" />
    </ContentLoader>
  );

  const StepsCard = props => (
    <ContentLoader
      speed={2}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor="#c2c1c1"
      foregroundColor="#f5f5f5"
      {...props}>
      {/* <Circle cx="25" cy="30" r="4" /> */}
      <Rect x="15" y="10" rx="3" ry="3" width="100" height="13" />
      <Rect x="25" y="100" rx="3" ry="3" width="66" height="7" />
      <Rect x="25" y="120" rx="3" ry="3" width="66" height="7" />
      <Circle cx="60" cy="60" r="29" />
    </ContentLoader>
  );

  return (
    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
      <View style={{flex: 0.5}}>
        <HeaderSkeleton />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View //light bluer box
          style={{
            flex: 1,
            padding: 10,
            margin: 10,
            borderRadius: 20,
            backgroundColor: '#D1E5FF',
          }}>
          <WorkoutCard />
        </View>
        <View
          style={{
            //light green box
            flex: 1,
            backgroundColor: '#CBD2DC',
            //width: '50%',
            padding: 10,
            margin: 10,
            borderRadius: 20,
          }}>
          <StepsCard />
        </View>
      </View>
      <View //
        style={{
          flex: 1,
          backgroundColor: '#38927633',
          margin: 10,
          padding: 10,
          borderRadius: 20,
        }}>
        <NutritionCard />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 10,
            borderRadius: 20,
            backgroundColor: '#FFE2E4',
          }}>
          <WeightCard />
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 10,
            borderRadius: 20,
            backgroundColor: '#D0BEEE',
          }}>
          <ChallengeCard />
        </View>
      </View>
    </View>
  );
};

export default HomeScreenSkeleton;
