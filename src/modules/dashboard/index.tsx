import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import {Routes} from "@core/navigators/routes";
import {BasePage} from "@components/containers/BaseScreen";
import {RegularText} from "@components/textComponents/TextComponents";

type Props = NativeStackScreenProps<RootStackParamList, Routes.dashboard>

const Dashboard = (props: Props) => {
    const {navigation} = props;
    return (
        <BasePage>
            <RegularText>Dash!</RegularText>
        </BasePage>
    );
}

export default Dashboard;
