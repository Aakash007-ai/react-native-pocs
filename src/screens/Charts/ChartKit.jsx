import React from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  BarChart,
  ContributionGraph,
  LineChart,
  PieChart,
  ProgressChart,
  StackedBarChart,
} from 'react-native-chart-kit';
import {SafeAreaView} from 'react-native-safe-area-context';
import LineChartWithTooltips from './ChartWithTooltip';
import LineChartWithTooltips1 from './LineChartWithTooltip1';

const ChartKitScreen = () => {
  //still react-native gifted chart is preferrable as we have more options to data interpolation
  React.useEffect(() => {
    console.log('ChartKitScreen ---------on first render');
  }, []);
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };
  const progressData = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };

  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const stackedBarData = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };

  const pieChartData = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const commitsData = [
    {date: '2017-01-02', count: 1},
    {date: '2017-01-03', count: 2},
    {date: '2017-01-04', count: 3},
    {date: '2017-01-05', count: 4},
    {date: '2017-01-06', count: 5},
    {date: '2017-01-30', count: 2},
    {date: '2017-01-31', count: 3},
    {date: '2017-03-01', count: 2},
    {date: '2017-04-02', count: 4},
    {date: '2017-03-05', count: 2},
    {date: '2017-02-30', count: 4},
  ];

  return (
    <>
      <SafeAreaView>
        <View>
          <ScrollView>
            <Text>ChartKitScreen</Text>
            <Button title="LineChart" onPress={() => null} />
            <View>
              <Text>Bezier Line Chart</Text>
              <LineChart
                data={{
                  labels: [
                    'January',
                    // 'February',
                    // 'March',
                    // 'April',
                    // 'May',
                    'June',
                  ],
                  datasets: [{data: [20, 45, 25, 80, 99, 43]}],
                }}
                width={Dimensions.get('window').width}
                height={220}
                yAxisLabel="$heloo"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  // backgroundGradientFrom: '#1E2923',
                  // backgroundGradientFromOpacity: 0,
                  // backgroundGradientTo: '#08130D',
                  // backgroundGradientToOpacity: 0.5,
                  // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                  // strokeWidth: 2, // optional, default 3
                  // barPercentage: 0.5,
                  // useShadowColorFromDataset: false, // optional
                  //----------------------------`
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#B2C8BA', //'#ffa726',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {borderRadius: 16},
                  propsForDots: {
                    r: '0',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
            <Text style={{color: styles.textHeading}}>Line Chart</Text>
            <LineChart
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
            <Text style={{color: styles.textHeading}}>
              Line Chart with tooltips
            </Text>
            <LineChartWithTooltips
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
            <Text>Line Chart withtooltips 1</Text>
            <LineChartWithTooltips1
              data={lineChartData}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />

            <Text style={{color: styles.textHeading}}>Progress Chart</Text>
            <ProgressChart
              data={progressData}
              width={screenWidth}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={false}
            />
            <Text style={styles.textHeading}>Bar Chart Data</Text>
            <BarChart
              //style={graphStyle}
              data={barChartData}
              width={screenWidth}
              height={220}
              yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
            <StackedBarChart
              //style={graphStyle}
              data={stackedBarData}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
            <Text style={styles.textHeading}>Pie Chart</Text>
            <PieChart
              data={pieChartData}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={'population'}
              backgroundColor={'transparent'}
              paddingLeft={'15'}
              center={[10, 50]}
              absolute
            />

            <Text style={styles.textHeading}>Contribution Graph</Text>
            <ContributionGraph
              values={commitsData}
              endDate={new Date('2017-04-01')}
              numDays={105}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ChartKitScreen;

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
