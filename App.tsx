import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './src/config/theme';
import {MainStackNavigator} from "./src/core/navigators/MainStackNavigator";
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';
import {
    useFonts,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';


export default function App() {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_400Regular_Italic,
        RobotoCondensed_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <ThemeProvider theme={lightTheme}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <MainStackNavigator />
                </SafeAreaProvider>
            </ThemeProvider>
        </NavigationContainer>
    );
}
