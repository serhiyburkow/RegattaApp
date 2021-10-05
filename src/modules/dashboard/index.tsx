import {Text, View} from "react-native";
import React from "react";
import {layout} from "../../styles/layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/RootStackParamList";
import {Routes} from "../../constants";

type Props = NativeStackScreenProps<RootStackParamList, Routes.dashboard>

const Dashboard = ({navigation}: Props) => {
    return (
        <View style={layout.container}>
            <Text>Dash!</Text>
        </View>
    );
}

export default Dashboard;