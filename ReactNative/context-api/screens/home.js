import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import GlobalContext from '../components/globals/context';


export default function Home({ navigation }) {

    const { AuthData, setAuthData } = useContext(GlobalContext)
    const [nombre, setNombre] = useState(AuthData.nombre)

    console.log(AuthData)

    return (
        <View style={styles.container}>
            <View>
                <Text>Nombre: {AuthData.nombre} </Text>
                <Text>Apellido: {AuthData.apellido}</Text>
                <Text>Email: {AuthData.email}</Text>
            </View>
            <TextInput
                value={nombre}
                onChangeText={setNombre}
             />
             <Button 
                title={'Cambiar estrado'}
                onPress={()=>{
                    setAuthData({ ...AuthData, nombre: nombre })
                    navigation.navigate('About', { nombre })
                }}
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
