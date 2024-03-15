import { Text, View } from "react-native";

const { LineChart, yAxisSides } = require("react-native-gifted-charts");

const LineCharts = () => {
    return (
        <>
            {/*                 
        <LineChart1/>
        <LineChart2/> */}
            <LineChart3 />
        </>
    )
}

const LineChart1 = () => {
    const data = [{ value: 15 }, { value: 30, label: 1 }, { value: 26, label: 2 }, { value: 40 }];
    return (//just a simple line chart starting with 0 as y axis
        <LineChart data={data} />
    )
}

const LineChart2 = () => {
    const data = [{ value: 15 }, { value: 30, label: 1 }, { value: 26, label: 2 }, { value: 40 }];
    return (//just a simple line chart starting with 0 as y axis
        <LineChart
            data={data}
            color="#177AD5" //MARK COLOR OF GRAPH LINE
            thickness={3} //thickness of line
            dataPointsColor1="red" //color of points
        />
    )
}

const LineChart3 = () => {
    const customDataPoint = () => {
        return (
            <View
                style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'white',
                    borderWidth: 4,
                    borderRadius: 10,
                    borderColor: '#07BAD1',
                }}
            />
        );
    };

    const customLabel = val => {
        return (
            <View style={{ width: 70, marginLeft: 7 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{val}</Text>
            </View>
        );
    };

    const data = [{ value: 63.5, label: 1 }, { value: 64.2, label: 2, hideDataPoints: true }, { value: 67, label: 3 }, { value: 70, label: 4 }];
    const data1 = [{ value: 65.5, label: 1 }, { value: 70.2, label: 2 },
    //      {
    //     value: 65,
    //     labelComponent: () => customLabel('24 Nov'),
    //     customDataPoint: customDataPoint,
    //     showStrip: true,
    //     stripHeight: 100,
    //     stripColor: 'black',
    //     dataPointLabelComponent: () => {
    //     return (
    //         <View
    //         style={{
    //             backgroundColor: 'black',
    //             paddingHorizontal: 8,
    //             paddingVertical: 5,
    //             borderRadius: 4,
    //         }}>
    //         <Text style={{color: 'white'}}>410</Text>
    //         </View>
    //     );
    //     },
    //     dataPointLabelShiftY: -70,
    //     dataPointLabelShiftX: -4,
    // },
    { value: 67, label: 3 }, {
        value: 67, label: 4,
        // customDataPoint : customDataPoint, labelComponent : ()=>customLabel('4') 
    }];

    return (//just a simple line chart starting with 0 as y axis
        <View style={{ backgroundColor: 'white', padding: 5 }}>
            <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', padding: 10 }}><Text style={{}}>Arm Measurement</Text></View>

            <LineChart
                isAnimated={true} //animate for first rendering
                width={800} //width of graph

                data={data}
                data2={data1}

                color="#177AD5" //MARK COLOR OF GRAPH LINE
                color1="green"

                hideDataPoints1={true} //hide points blob on line with its value
                hideDataPoints2={true} //hide points on line

                textColor1="black" //color of text on line
                // dataPointsHeight1={10} //height of points

                thickness={1.7} //thickness of line
                // dataPointsColor1="red" //color of points
                // backgroundColor={"white"} //color of graph inside the line
                spacing={100} //space between points usually not to use
                yAxisColor={"black"} //color of y axis line

                yAxisThickness={0} //thickness of y axis line will remove that line
                initialSpacing={10} //space between first point and y axis

                hideRules={true} //hide horizontal lines
                hideYAxisText={false} //hide y axis labels
                showVerticalLines={true} //show vertical lines
                xAxisThickness={0}
                // verticalLinesColor="rgba(14,164,164,0.5)"
                // yAxisLabelPrefix={"$"} //prefix of y axis labels
                // yAxisLabelSuffix={"kg"} //suffix of y axis labels
                // textShiftY={-10} //shift y axis labels up or down
                // textShiftX={10} //shift x axis labels left or right
                // textFontSize1={12} //font size of text on line
                showValuesAsDataPointsText={true} //show values on points
                //position of y axis
                // height={200} //height of graph
                // focusEnabled={true} //enable focus on points
                // showStripOnFocus
                // showTextOnFocus
                // focusedDataPointRadius={10}
                hideOrigin={true} //hide origin of graph
            />
            {/* 
            <View style={{flexDirection : "row", justifyContent:'space-evenly' ,marginTop:15}}>
                <View style={{flexDirection:'row' , paddingHorizontal:10 ,height :'80%' , justifyContent:'center', }}>
                    <View style={{backgroundColor:'red', width:"18%" ,marginHorizontal:5,borderRadius:8}}></View>
                    <Text>Right Arm</Text>
                </View>
            </View> */}

            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ borderColor: 'pink', borderWidth: 1, width: 25, height: 10, margin: 5, backgroundColor: 'pink', borderRadius: 5 }}></View>
                    <Text>Right Arm</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ borderColor: 'pink', borderWidth: 1, width: 25, height: 10, margin: 5, backgroundColor: 'pink', borderRadius: 5 }}></View>
                    <Text>Right Arm</Text>
                </View>

            </View>
        </View>
    )
}

export default LineCharts;