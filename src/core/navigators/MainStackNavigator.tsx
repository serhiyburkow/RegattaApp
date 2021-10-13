import * as React from 'react';
import {
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Routes} from "./routes";
import {BottomNavigator} from "./BottomNavigator";
import {RegattaItem} from "../../modules/regatta";
import SettingsButton from "../../components/header/settingsButton";
import Settings from "../../modules/settings";

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
    animationEnabled: true,
    headerBackTitleVisible: false,
    headerTitle: '',
};

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={Routes.mainStack} component={BottomNavigator} options={{headerShown: false}} />
            <Stack.Screen name={Routes.regattaItem} component={RegattaItem} options={{headerRight: SettingsButton}} />
            <Stack.Screen name={Routes.settings} component={Settings} options={{headerRight: SettingsButton}} />
        </Stack.Navigator>
    );
}

