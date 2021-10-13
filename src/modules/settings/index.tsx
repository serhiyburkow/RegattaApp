import {Text, View} from "react-native";
import React from "react";
import {layout} from "@app/styles/layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button} from "@components/Button/Button";
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import {Routes} from "@core/navigators/routes";

type Props = NativeStackScreenProps<RootStackParamList, Routes.settings>

const Settings = ({navigation}: Props) => {
    return (
        <View style={layout.container}>
            <Text>Dash!</Text>
            <Button onPress={() => navigation.navigate(Routes.login)}>Login</Button>
        </View>
    );
}

export default Settings;
