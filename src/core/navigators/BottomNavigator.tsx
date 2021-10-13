import * as React from 'react';
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {Routes} from "./routes";
import Dashboard from "../../modules/dashboard";
import SettingsButton from "../../components/header/settingsButton";
import {Ionicons} from "@expo/vector-icons";
import {RegattaList} from "../../modules/regatta";
import About from "../../modules/about";

export const BottomNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name={Routes.dashboard} component={Dashboard} options={{
                headerRight: SettingsButton,
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle'} size={size}
                              color={color}/>),
            }}/>
            <Tab.Screen name={Routes.regattaList} component={RegattaList} options={{
                headerRight: SettingsButton,
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle'} size={size}
                              color={color}/>),
            }}/>
            <Tab.Screen name={Routes.about} component={About} options={{
                headerRight: SettingsButton,
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle'} size={size}
                              color={color}/>),
            }}/>

        </Tab.Navigator>
    )
}

