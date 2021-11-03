import * as React from 'react';
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {Routes} from "@core/navigators/routes";
import Dashboard from "@modules/dashboard";
import {Ionicons} from "@expo/vector-icons";
import {RegattaList} from "@modules/regatta";
import SettingsButton from "@components/header/settingsButton";
import Profile from "@modules/profile";
import About from "@modules/about";

export const BottomNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name={Routes.profile} component={Profile} options={{
                headerRight: SettingsButton,
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'} size={size}
                              color={color}/>),
            }}/>
            <Tab.Screen name={Routes.dashboard} component={Dashboard} options={{
                headerRight: SettingsButton,
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'} size={size}
                              color={color}/>),
            }}/>
            <Tab.Screen name={Routes.regattaList} component={RegattaList} options={{
                headerRight: SettingsButton,
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'} size={size}
                              color={color}/>),
            }}/>
            <Tab.Screen name={Routes.about} component={About} options={{
                headerRight: SettingsButton,
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'} size={size}
                              color={color}/>),
            }}/>

        </Tab.Navigator>
    )
}

