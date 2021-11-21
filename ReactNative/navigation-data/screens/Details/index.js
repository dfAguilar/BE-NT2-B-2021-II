import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getVehiculo } from '../../services/Vehiculos';



export default function Details({ navigation, route }) {

    const { id } = route.params || { id: '' }

    const [vehiculo, setVehiculo] = useState(null)

    useEffect(() => {
        getVehiculo(id).then(res => res.json())
            .then(data => {
                setVehiculo(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <View style={styles.container}>
            <Text>Bienvenido a la vista Detalle</Text>
            <StatusBar style="auto" />
            {
                (vehiculo) ?
                    <>
                        <View><Text>Marca: {vehiculo.marca}</Text></View>
                        <View><Text>Modelo: {vehiculo.modelo}</Text></View>
                        <View><Text>Color: {vehiculo.color}</Text></View>
                        <View><Text>Patente: {vehiculo.patente}</Text></View>
                    </>
                    :
                    <View><Text>Cargando...</Text></View>
      }


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
