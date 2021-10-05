import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../../constants";
import Button, {ButtonType} from "../../Button";
import {StyleSheet} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {RootStackParamList} from "../../../navigation/RootStackParamList";

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
            styles={{icon: styles.icon}}
            type={ButtonType.transparent}
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