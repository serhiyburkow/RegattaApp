import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import {Routes} from "@core/navigators/routes";
import {BasePage} from "@components/containers/BaseScreen";
import ProfileList from "./components/ProfileList/ProfileList";
import profileData from "./mock/profileData";

type Props = NativeStackScreenProps<RootStackParamList, Routes.dashboard>

const Profile = ({navigation}: Props) => {

    const values = {
        name: 'My name',
        email: 'email@domain.com',
        phone: '+1040404848482',
        password: '00000',
        experience: 'Twenty years in a row on Optimist'
    }

    const inputHandler = (name: string) => (value: string) => {
        console.log(name, value);
    }
    return (
        <BasePage padded={true}>
            <ProfileList data={profileData} inputHandler={inputHandler} values={values} />
        </BasePage>
    );
}

export default Profile;
