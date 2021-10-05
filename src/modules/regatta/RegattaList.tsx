import {Text, View} from "react-native";
import React from "react";
import {layout} from "../../styles/layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/RootStackParamList";
import {Routes} from "../../constants";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<RootStackParamList, Routes.regattaList>

const RegattaList = ({navigation}: Props) => {
    return (
        <View style={layout.container}>
            <Text>Regatta List!</Text>
            <View>
                <Button onPress={() => navigation.navigate(Routes.regattaItem)} text="Details"/>
            </View>
        </View>
    );
}

export default RegattaList;