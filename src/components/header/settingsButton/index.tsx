import React from "react";
import {useNavigation} from "@react-navigation/native";
import {StyleSheet} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../../core/navigators/RootStackParamList";
import {Routes} from "../../../core/navigators/routes";
import Button from "../../Button";

const SettingsButton = () => {
    type SettingsNavigationProp = StackNavigationProp<RootStackParamList, Routes.settings>
    const navigation = useNavigation<SettingsNavigationProp>()

    const handleButtonPress = () => {
        navigation.navigate(Routes.settings)
    }
    return (
        <Button
            onPress={handleButtonPress}
            icon='ios-person-circle'
            type='transparent'
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 24,
        color: '#999'
    }
})

export default SettingsButton;
