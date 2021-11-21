import React from 'react';
import { createStackNavigator  } from "@react-navigation/stack";
import Home from '../../screens/Home';
import Details from '../../screens/Details';
import Vehiculos from '../../screens/Vehiculos';

export default function StackNavigator() {
    
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName={'Vehiculos'}>
            <Stack.Screen name={'Details'} component={Details} />
            <Stack.Screen name={'Home'} component={Home} options={{headerShown: false}} />
            <Stack.Screen name={'Vehiculos'} component={Vehiculos} options={{headerShown: false}} />
            
        </Stack.Navigator>
    )
}