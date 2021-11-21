import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import GlobalContext from '../components/globals/context';

export default function About({ route }) {

    const { AuthData, setAuthData } = useContext(GlobalContext)

    return (
        <View style={styles.container}>
            <View>
                <Text>Nombre: {AuthData.nombre} </Text>
                <Text>Apellido: {AuthData.apellido}</Text>
                <Text>Email: {AuthData.email}</Text>
            </View>
            <StatusBar style="auto" />
            <Button 
                title={'Logout'}
                onPress={()=> {
                    setAuthData({})
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
