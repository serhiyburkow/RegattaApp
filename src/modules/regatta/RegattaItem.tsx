import {Text, View} from "react-native";
import React from "react";
import {layout} from "../../styles/layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import Button from "../../components/Button";
import {RootStackParamList} from "../../core/navigators/RootStackParamList";
import {Routes} from "../../core/navigators/routes";

type Props = NativeStackScreenProps<RootStackParamList, Routes.regattaItem>

const RegattaItem = ({navigation}: Props) => {
    return (
        <View style={layout.container}>
            <Text>Regatta Item!</Text>

            <View>
                <Button onPress={() => navigation.navigate(Routes.mainStack)} text="Dashboard"/>
            </View>
        </View>
    );
}

export default RegattaItem;
