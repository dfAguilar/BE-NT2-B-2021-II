import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function Home({ navigation }) {

    const [nombre, setNombre] = useState('')
    // console.log(navigation)
  return (
    <View style={styles.container}>
      <Text>Este es el Home Page!</Text>
      <TextInput
        placeholder={'Cual es tu nombre'}
        value={nombre}
        onChangeText={setNombre}

       />
      <StatusBar style="auto" />

      <Button
        title={'Ir a Detalle'}
        onPress={()=>{
            navigation.navigate('Details', { nombre: nombre })
        }}

      />
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
