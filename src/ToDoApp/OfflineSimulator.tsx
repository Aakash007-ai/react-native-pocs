import React from 'react';
import {onlineManager} from '@tanstack/react-query';
import {View, Button, Text, StyleSheet} from 'react-native';

const OffflineSimulator = () => {
  const [isOnline, setIsOnline] = React.useState(onlineManager.isOnline());
  return (
    <View style={styles.container}>
      <View style={styles.butttons}>
        <Button
          title="Online"
          onPress={() => {
            onlineManager.setOnline(true);
            setIsOnline(onlineManager.isOnline());
          }}
        />
        <Button
          title="Offline"
          onPress={() => {
            onlineManager.setOnline(false);
            setIsOnline(onlineManager.isOnline());
          }}
        />
      </View>
      <Text>
        Status is :{' '}
        <Text style={styles.status}>{isOnline ? 'ONLINE' : 'OFFLINE'}</Text>
      </Text>
    </View>
  );
};

export default OffflineSimulator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 20,
    alignItems: 'center',
  },
  butttons: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  status: {
    color: 'red',
  },
});
