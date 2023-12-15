import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const QueueRestApi = () => {
  const {type, isConnected} = useNetInfo();
  const [counter, setCounter] = React.useState(0);
  const [apiData, setApiData] = React.useState(null);
  const [online, setOnline] = React.useState(isConnected);

  const handleClick = (method = 'get') => {
    setCounter(api.currentQueue.length + 1);
    let request = api.get;
    if (method === 'post') request = api.post;

    return request('https://62baf8ff573ca8f8328ff37d.mockapi.io/api/v1/users')
      .then(data => setApiData(JSON.stringify(data)))
      .then(() => setCounter(prev => prev - 1))
      .catch(error => console.log(error));
  };

  return (
    <View>
      <Text>Hello Queuing rrest apis</Text>
      <Text>Network Status : {online ? 'Online' : 'Offline'}</Text>
      <Text>Request left in Queue</Text>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="Get request"
          onPress={() => {
            console.log('Make get request');
          }}></Button>
        <Button
          title="Post Request"
          onPress={() => {
            console.log('make post request');
          }}></Button>
      </View>
      <View></View>
    </View>
  );
};

export default QueueRestApi;
