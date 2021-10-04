import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import {tabItem, tabs} from "./src/navigation/navigation";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getIconName = (title: string, focused: boolean) => {
    return tabs.find(el => el.title === title)?.icon[+focused];
}

const tabsElements = (tabs: tabItem[]) => {
    return tabs.map(tab => <Tab.Screen options={tab.options} name={tab.title} key={tab.title}
                                       component={tab.component}/>)
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => <Ionicons name={getIconName(route.name, focused)} size={size}
                                                                  color={color}/>,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            {tabsElements(tabs)}
        </Tab.Navigator>
    )
}

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
