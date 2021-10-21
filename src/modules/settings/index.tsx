import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button} from "@components/Button/Button";
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import {Routes} from "@core/navigators/routes";
import {BasePage} from "@components/containers/BaseScreen";
import {RegularText} from "@components/textComponents/TextComponents";

type Props = NativeStackScreenProps<RootStackParamList, Routes.settings>

const Settings = ({navigation}: Props) => {
    return (
        <BasePage>
            <RegularText>Settings!</RegularText>
            <Button onPress={() => navigation.navigate(Routes.login)}>Login</Button>
        </BasePage>
    );
}

export default Settings;
