import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import {RootStackParamList} from "./src/navigation/RootStackParamList";
import {Routes} from "./src/constants";
import SettingsButton from "./src/components/header/settingsButton";
import Settings from "./src/modules/settings";
import Dashboard from "./src/modules/dashboard";
import {Ionicons} from "@expo/vector-icons";
import {RegattaItem, RegattaList} from "./src/modules/regatta";
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from "./src/modules/login";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <SafeAreaProvider>
            <Tab.Navigator screenOptions={() => ({
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
            </Tab.Navigator>
            <StatusBar/>
        </SafeAreaProvider>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.login}>
                <Stack.Screen name={Routes.mainStack} component={MainTabs} options={{headerShown: false}} />
                <Stack.Screen name={Routes.regattaItem} component={RegattaItem} options={{headerRight: SettingsButton}} />
                <Stack.Screen name={Routes.settings} component={Settings} options={{headerRight: SettingsButton}} />
                <Stack.Screen name={Routes.login} component={Login} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
