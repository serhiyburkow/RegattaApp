import React from 'react';

import SocialLineItem from '@modules/login/components/SocialLine/SocialLineItem';
import {RegularText} from "@components/textComponents/TextComponents";
import {DefaultTheme, withTheme} from "styled-components/native";
import { TextContainer, ButtonsContainer } from './containers.styled';

interface SocialLineProps {
    theme:  DefaultTheme
}

const SocialLine = (props: SocialLineProps) => {
    const {theme} = props;
    const handlePress = (url: string) => {
        console.log(url);
    };

    return (
        <>
            <TextContainer>
                <RegularText fontColor={theme.colors.primary} size='sm'>or use social login</RegularText>
            </TextContainer>
            <ButtonsContainer>
                <SocialLineItem
                    color={theme.socialLogin.colors.socialGoogle}
                    icon="logo-google"
                    onPress={() => handlePress('https://google.com')}
                />
                <SocialLineItem
                    color={theme.socialLogin.colors.socialFb}
                    icon="logo-facebook"
                    onPress={() => handlePress('https://google.com')}
                />
                <SocialLineItem
                    color={theme.socialLogin.colors.socialInsta}
                    icon="logo-instagram"
                    onPress={() => handlePress('https://google.com')}
                />
                <SocialLineItem
                    color={theme.socialLogin.colors.socialIn}
                    icon="logo-linkedin"
                    onPress={() => handlePress('https://linkedin.com')}
                />
            </ButtonsContainer>
        </>
    );
};

// const styles = StyleSheet.create({
//     text: {
//         fontSize: TextSize.sm,
//     },
// });

export default withTheme(SocialLine);
