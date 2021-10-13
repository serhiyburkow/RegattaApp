import React from 'react';

import {
    useFonts,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme } from '@config/theme';
import { MainStackNavigator } from '@core/navigators/MainStackNavigator';

export default function App() {
    const [fontsLoaded] = useFonts({
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
