import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { Routes } from '@constants/routes';

import { Button } from '@components/index';

import { RootStackParamList } from '@app/navigation/RootStackParamList';

const SettingsButton = () => {
    type SettingsNavigationProp = StackNavigationProp<
        RootStackParamList,
        Routes.settings
    >;
    const navigation = useNavigation<SettingsNavigationProp>();

    const handleButtonPress = () => {
        navigation.navigate(Routes.settings);
    };
    return (
        <Button
            onPress={handleButtonPress}
            icon="ios-person-circle"
            type="transparent"
            size="sm"
        />
    );
};

const styles = StyleSheet.create({
    icon: {
        fontSize: 24,
        color: '#999',
    },
});

export default SettingsButton;
