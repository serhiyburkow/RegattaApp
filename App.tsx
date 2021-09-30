import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from "./src/screens/home/home.view";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color}/>;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
