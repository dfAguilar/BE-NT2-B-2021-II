import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button title={"Hola mundo"} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
