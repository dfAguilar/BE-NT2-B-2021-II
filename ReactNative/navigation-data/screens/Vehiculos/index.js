import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import Constants from "expo-constants";

import obtenerVehiculos, { getVehiculo } from "../../services/Vehiculos";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Vehiculos({ navigation }) {

    const [vehiculos, setVehiculos] = useState([])

    useEffect(() => {
        // effect        
        // Aqui deberiamos de ir a buscar los vehiculos
        console.log('Vamos a buscar los vehiculos')

        obtenerVehiculos().then(res => res.json())
        .then(data => {
            console.log('Data', data)
            setVehiculos(data)
        })
        .catch(err => {
            // 
            console.log('Error', err)
        })


    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de vehiculos! ({vehiculos.length})</Text>
            <FlatList
                data={vehiculos}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity
                        onPress={()=> navigation.navigate('Details', {id: item.id})}
                        >
                            <View style={styles.vehiculo}>
                                <Text> {item.marca} - {item.modelo} </Text>
                            </View>
                        </TouchableOpacity>
                        
                    )
                }}
             />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 25
    },
    vehiculo: {
        padding: 15,
        borderBottomWidth: 1
    }
});
