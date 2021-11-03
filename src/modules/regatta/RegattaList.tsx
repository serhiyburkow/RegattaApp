import React from "react";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {BasePage} from "@components/containers/BaseScreen";
import {Routes} from "@core/navigators/routes";
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import { Button } from "@components/Button/Button";
import {RegularText} from "@components/textComponents/TextComponents";

type Props = NativeStackScreenProps<RootStackParamList, Routes.regattaList>

const RegattaList = ({navigation}: Props) => {
    return (
        <BasePage>
            <RegularText>Dash!</RegularText>
            <Button onPress={() => navigation.navigate(Routes.regattaItem)}>Details</Button>
        </BasePage>
    );
}

export default RegattaList;
