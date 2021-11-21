import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../../screens/Home';
import Details from '../../screens/Details';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BottomTabNavigator() {

    const BottomTab = createBottomTabNavigator()

    return (
        <BottomTab.Navigator initialRouteName={'Home'}>
            <BottomTab.Screen name={'Home'} component={Home} />
            {/* <BottomTab.Screen name={'Home'} component={Home} /> */}
            <BottomTab.Screen name={'Details'} component={Details} options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
                tabBarBadge: 3,
            }} />
        </BottomTab.Navigator>
    )
}