import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {BasePage} from "@components/containers/BaseScreen";
import {Routes} from "@core/navigators/routes";
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import { Button } from "@components/Button/Button";
import {RegularText} from "@components/textComponents/TextComponents";

type Props = NativeStackScreenProps<RootStackParamList, Routes.regattaItem>

const RegattaItem = ({navigation}: Props) => {
    return (
        <BasePage>
            <RegularText>Dash!</RegularText>
            <Button onPress={() => navigation.navigate(Routes.mainStack)}>Dashboard</Button>
        </BasePage>
    );
}

export default RegattaItem;
