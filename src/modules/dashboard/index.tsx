import {Text} from "react-native";
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../core/navigators/RootStackParamList";
import {Routes} from "../../core/navigators/routes";
import {BasePage} from "../../core/components/containers/BaseScreen";

type Props = NativeStackScreenProps<RootStackParamList, Routes.dashboard>

const Dashboard = (props: Props) => {
    const {navigation} = props;
    return (
        <BasePage>
            <Text>Dash!</Text>
        </BasePage>
    );
}

export default Dashboard;
