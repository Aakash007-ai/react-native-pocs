import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
// import {ScrollView} from 'react-native-reanimated/lib/typescript/Animated';

const WorkoutScreenSkeletal = () => {
  const SHIMMER_SPEED = 1.5;
  const BACKGROUND_COLOR = 'grey'; //'black'; //'#c2c1c1';
  const FOREGROUND_COLOR = '#f5f5f5';

  const ex = ['', '', '', ''];

  const WorkoutHeadingSkeleton = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="60" y="29" rx="3" ry="3" width="170" height="20" />
      <Rect x="25" y="29" rx="3" ry="3" width="20" height="20" />
      {/* <Circle cx="50" cy="47" r="29" /> */}
      {/* <Circle //header circle
        cx="50"
        cy="57"
        r="29"
      /> */}
    </ContentLoader>
  );

  const SessionHeadingSkeleton = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="30" y="55" rx="3" ry="3" width="210" height="11" />

      <Rect x="30" y="70" rx="3" ry="3" width="72" height="10" />
      <Rect x="150" y="70" rx="3" ry="3" width="72" height="10" />
      <Rect x="250" y="55" rx="3" ry="3" width="30" height="30" />
      <Rect x="50" y="90" rx="3" ry="3" width="50" height="10" />
      {/* <Circle cx="50" cy="47" r="29" /> */}
      {/* <Circle //header circle
        cx="50"
        cy="57"
        r="29"
      /> */}
    </ContentLoader>
  );

  const ExerciseHeadingSkeleton = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="25" y="29" rx="3" ry="3" width="170" height="20" />
      <Rect x="25" y="60" rx="3" ry="3" width="300" height="15" />
      {/* <Circle cx="50" cy="47" r="29" /> */}
      {/* <Circle //header circle
      cx="50"
      cy="57"
      r="29"
    /> */}
    </ContentLoader>
  );
  const ExerciseImageSkeleton = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="20" y="29" rx="3" ry="3" width="100" height="100" />
      {/* <Rect x="2" y="60" rx="3" ry="3" width="300" height="15" /> */}
      {/* <Circle cx="50" cy="47" r="29" /> */}
      {/* <Circle //header circle
      cx="50"
      cy="57"
      r="29"
    /> */}
    </ContentLoader>
  );
  const LineSkeleton = props => (
    <ContentLoader
      speed={SHIMMER_SPEED}
      width={392}
      height={788}
      viewBox="0 0 392 788"
      backgroundColor={BACKGROUND_COLOR}
      foregroundColor={FOREGROUND_COLOR}
      {...props}>
      <Rect x="10" y="5" rx="3" ry="3" width="15" height="10" />
    </ContentLoader>
  );
  const InfoHeader = () => (
    <View
      style={{
        backgroundColor: '#BCEEDE',
        width: 30,
        height: 20,
        borderRadius: 3,
      }}></View>
  );
  const Info = () => (
    <View
      style={{
        // backgroundColor: 'grey',
        width: 25,
        height: 20,
        borderRadius: 3,
      }}>
      <LineSkeleton />
    </View>
  );

  const SingleExerciseSkeletal = () => (
    <View style={{flexDirection: 'row'}}>
      <View>
        <View //sets,reps,heading
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <FlatList
            data={ex}
            horizontal={true}
            // style={{flexDirection: 'row', padding: 10}}
            renderItem={() => (
              <View style={{padding: 10}}>
                <InfoHeader />
              </View>
            )}
            keyExtractor={index => (index + Math.random() * 20).toString()}
          />
          {/* {ex.map(() => (
            <View style={{padding: 10}}>
              <InfoHeader />
            </View>
          ))} */}
        </View>
        <View //set reps info
        >
          <View //row 1
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FlatList
              data={ex}
              horizontal={true}
              // style={{flexDirection: 'row', padding: 10}}
              renderItem={() => (
                <View style={{padding: 10}}>
                  <Info />
                </View>
              )}
              keyExtractor={index => (index + Math.random() * 30).toString()}
            />
          </View>
          <View //row 2
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FlatList
              data={ex}
              horizontal={true}
              // style={{flexDirection: 'row', padding: 10}}
              renderItem={() => (
                <View style={{padding: 10}}>
                  <Info />
                </View>
              )}
              keyExtractor={index => (index + Math.random() * 40).toString()}
            />
          </View>
          <View //row 3
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FlatList
              data={ex}
              horizontal={true}
              // style={{flexDirection: 'row', padding: 10}}
              renderItem={() => (
                <View style={{padding: 10}}>
                  <Info />
                </View>
              )}
              keyExtractor={index => (index + Math.random() * 100).toString()}
            />
          </View>
        </View>
      </View>
      <View>
        <ExerciseImageSkeleton />
        {/* <View
          style={{
            borderBottomColor: 'black', ///'#BCEEDE',
            borderBottomWidth: StyleSheet.hairlineWidth,
            // width: 100,
            height: 1,
          }}
        /> */}
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'space-evenly',
          height: Dimensions.get('window').height * 0.9,
        }}>
        <View //header
          style={{flex: 0.5}}>
          <WorkoutHeadingSkeleton />
        </View>
        <View //session header
          style={{flex: 1}}>
          <SessionHeadingSkeleton />
        </View>

        <View //exercise container
          style={{flex: 2, paddingHorizontal: 10}}>
          <SingleExerciseSkeletal />
        </View>

        <View //exercise container
          style={{flex: 2, paddingHorizontal: 10, marginTop: -20}}>
          <SingleExerciseSkeletal />
        </View>
      </View>
    </ScrollView>
  );
};

export default WorkoutScreenSkeletal;
