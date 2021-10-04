import {Text, View} from "react-native";
import React from "react";
import {layout} from "../../styles/layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/RootStackParamList";
import {Routes} from "../../constants";
import Button from "../../components/Button";

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