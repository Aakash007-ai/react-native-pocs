import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import ContentLoader, {
  Rect,
  Circle,
  Path,
  Facebook,
  Code,
} from 'react-content-loader/native';
const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={400} //customise height
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#e2dada"
    {...props}>
    <Circle cx="10" cy="20" r="8" />
    <Rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="50" r="8" />
    <Rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="80" r="8" />
    <Rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="110" r="8" />
    <Rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
);
// import SkeletonContent from 'react-native-skeleton-content';
// use above package to learn to create basic packgae
const SkeletonLoading = ({navigation}) => {
  const [loading, setLoading] = React.useState(true);
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(prev => !prev);
  //   }, 10000);
  // }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 10000);
  // });

  return (
    <>
      <View>
        <>
          <View style={{width: '100%'}}>
            <MyLoader />
          </View>
        </>
        <ShimmerPlaceholder visible={true}>
          <View style={{width: '50%', backgroundColor: 'pink'}}>
            <Text>Main Heading</Text>
          </View>
          <View>
            <Text style={{color: 'black'}}>
              This is body of content let's see what will going to happen
            </Text>
          </View>

          <View style={{width: '50%', backgroundColor: 'pink'}}>
            <Text>Original Content</Text>
          </View>
          <View>
            <Text>
              This is body of content let's see what will going to happen
            </Text>
          </View>

          <View style={{width: 400}}>
            <Text style={{color: 'black'}}>
              Forgot about packge and get a way to find chilren width and height
            </Text>
            <Text style={{color: 'black'}}>
              Take help from package react-native-skeleton-loading and get help
              how to implement this
            </Text>
          </View>

          <View>
            <Text style={{color: 'black'}}>Loading : </Text>
          </View>
        </ShimmerPlaceholder>
        <View style={{flexDirection: 'row'}}>
          {/* <ShimmerPlaceholder
          width={500}
          height={'10%'}
          visible={false} //shimmmer visible when it is false if data is there retrun true
          LinearGradient={LinearGradient}
        /> */}
        </View>

        {/* <ShimmerPlaceholder
        width={500}
        height={'10%'}
        visible={false} //shimmmer visible when it is false if data is there retrun true
        LinearGradient={LinearGradient}
      /> */}
        <Button
          title="HomeScreenSkeleton"
          onPress={() => {
            navigation.navigate('HomeScreenSkeleton');
          }}
        />
        <Button
          title="WorkoutScreenSkeletal"
          onPress={() => navigation.navigate('WorkoutScreenSkeletal')}
        />
        <Button
          title="TrainerScreenSkletal"
          onPress={() => navigation.navigate('TrainerScreenSkeletal')}
        />

        <Button
          title="ProfileScreenSkeletal"
          onPress={() => navigation.navigate('ProfileScreenSkeletal')}
        />
        {/* <ContentLoader /> */}

        {/* <MyLoader /> */}
      </View>
    </>
  );
};

//react native shimmer placeholder
// npm i react-native-shimmer-placeholder --save

//for each component
// https://github.com/danilowoz/react-content-loader // this is the best one when we have our own design as it require svg design
export default SkeletonLoading;
