import React from 'react';
import { createDrawerNavigator  } from "@react-navigation/drawer";
import Home from '../../screens/Home';
import Details from '../../screens/Details';

export default function DrawerNavigator() {
    
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator initialRouteName={'Home'}>            
            <Drawer.Screen name={'Home'} component={Home}  />
            <Drawer.Screen name={'Details'} component={Details}  />
            
        </Drawer.Navigator>
    )
}