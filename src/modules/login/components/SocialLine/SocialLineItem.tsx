import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Button } from '@components/Button/Button';
import {Colors} from "@constants/Colors";
import {DefaultTheme, withTheme} from "styled-components/native";
import { SocialButton } from './SocialButton.styled';

interface SocialLineItemProps {
    color: Colors;
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    theme: DefaultTheme
}

const SocialLineItem = (props: SocialLineItemProps) => {
    const { theme } = props;
    const {
        color = theme.colors.primary,
        icon = 'logo-google',
        onPress = () => {},
    } = props;

    return (
        <SocialButton
            onPress={onPress}
            color={color}
        >
            <Ionicons name={icon} size={20} color={theme.colors.monochrome100} />
        </SocialButton>
    );
};

export default withTheme(SocialLineItem);
