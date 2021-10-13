import React from "react";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import {Routes} from "@core/navigators/routes";
import { Button } from "@components/Button/Button";

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
            variant='transparent'
            size='sm'
        />
    )
}

export default SettingsButton;
