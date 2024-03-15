import React, { useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import ScrollableGraph from "./ScrollableGraph";

import LineCharts from "./SimpleGraph";


const AdvanceGiftedChart = () => {

    const ref = useRef(null)


    const lineData = [
        { value: 4, label: '1 Jan' },
        { value: 14, label: '10 Jan' },
        { value: 8, label: '20 Jan' },
        { value: 38, label: '30 Jan' },
        { value: 36, label: '1 Feb' },
        { value: 28, label: '10 Feb' },
        { value: 14, label: '20 Feb' },
        { value: 28, label: '28 Feb' },
        { value: 4, label: '1 Mar' },
        { value: 14, label: '10 Mar' },
        { value: 8, label: '20 Mar' },
        { value: 14, label: '30 Mar' },
        { value: 8, label: '1 Apr' },
        { value: 38, label: '10 Apr' },
        { value: 14, label: '20 Apr' },
        { value: 28, label: '30 Apr' },
        { value: 4, label: '1 May' },
        { value: 10, label: '10 May' },
        { value: 8, label: '20 May' },
        { value: 14, label: '30 May' },
        { value: 8, label: '1 Jun' },
        { value: 38, label: '10 Jun' },
        { value: 14, label: '20 Jun' },
        { value: 28, label: '30 Jun' },
        { value: 4, label: '1 Jul' },
        { value: 28, label: '10 Jul' },
        { value: 4, label: '20 Jul' },
        { value: 14, label: '30 Jul' },
    ];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

    const showOrHidePointer = (ind) => {
        ref.current?.scrollTo({
            x: ind * 200 - 25
        }); // adjust as per your UI
    };

    return (
        <ScrollView >
            <LineCharts />
        <ScrollableGraph/>
        </ScrollView>
    );
}

export default AdvanceGiftedChart;