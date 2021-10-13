import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import {Routes} from "@core/navigators/routes";
import {BasePage} from "@components/containers/BaseScreen";
import {Title} from "@components/textComponents/TextComponents";
import AboutList from "./components/AboutList";
import {aboutData} from "./constants/constants";

type Props = NativeStackScreenProps<RootStackParamList, Routes.dashboard>

const About = ({navigation}: Props) => {
    return (
        <BasePage
            padded={true}
        >
            <Title size="super">Settings</Title>
            <AboutList data={aboutData} />
        </BasePage>
    );
}

export default About;
