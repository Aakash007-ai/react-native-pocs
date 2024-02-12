import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

const GiftedChart = () => {
  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
  ];
  const lineData = [
    {value: 0},
    {value: 20},
    {value: 18},
    {value: 40},
    {value: 36},
    {value: 60},
    {value: 54},
    {value: 85},
  ];
  const pieData = [
    {value: 54, color: '#177AD5', text: '54%'},
    {value: 30, color: '#79D2DE', text: '30%'},
    {value: 26, color: '#ED6665', text: '26%'},
  ];
  const barData1 = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
  const barData2 = [
    {value: 20, label: 'M'},
    {value: 30, label: 'T'},
    {
      value: 50,
      label: 'W',
      topLabelComponent: () => (
        <Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>50</Text>
      ),
    },
    {value: 40, label: 'T'},
    {value: 30, label: 'F'},
  ];
  const barData3 = [
    {
      value: 230,
      label: 'Jan',
      frontColor: '#4ABFF4',
      sideColor: '#23A7F3',
      topColor: '#92e6f6',
    },
    {
      value: 180,
      label: 'Feb',
      frontColor: '#79C3DB',
      sideColor: '#68BCD7',
      topColor: '#9FD4E5',
    },
    {
      value: 195,
      label: 'Mar',
      frontColor: '#28B2B3',
      sideColor: '#0FAAAB',
      topColor: '#66C9C9',
    },
    {
      value: 250,
      label: 'Apr',
      frontColor: '#4ADDBA',
      sideColor: '#36D9B2',
      topColor: '#7DE7CE',
    },
    {
      value: 320,
      label: 'May',
      frontColor: '#91E3E3',
      sideColor: '#85E0E0',
      topColor: '#B0EAEB',
    },
  ];
  return (
    <ScrollView style={{padding: 10, alignContent: 'center'}}>
      <View>
        <Text>Gifted Chart basic</Text>
      </View>
      <View>
        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
      <View>
        <LineChart
          initialSpacing={0}
          data={lineData}
          spacing={30}
          hideDataPoints
          thickness={5}
          hideRules
          hideYAxisText
          yAxisColor="#0BA5A4"
          showVerticalLines
          verticalLinesColor="rgba(14,164,164,0.5)"
          xAxisColor="#0BA5A4"
          color="#0BA5A4"
        />
      </View>
      <View>
        <PieChart
          donut
          showText
          textColor="black"
          innerRadius={70}
          showTextBackground
          textBackgroundColor="white"
          textBackgroundRadius={22}
          data={pieData}
        />
      </View>
      <Text>Detailed Example</Text>
      <BarChart data={barData} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <BarChart width={300} data={barData2} frontColor="#177AD5" />
      </View>
      <View>
        <BarChart
          showFractionalValue
          showYAxisIndices
          hideRules
          noOfSections={4}
          maxValue={400}
          data={barData3}
          barWidth={40}
          sideWidth={15}
          isThreeD
          side="right"
        />
      </View>
    </ScrollView>
  );
};
export default GiftedChart;
