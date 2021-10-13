import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import {
    Dimensions,
    StyleProp,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import * as S from './Button.styled';
import {StyledIcon} from "./Button.styled";
import {RegularText} from "@components/textComponents/TextComponents";
import {Sizes} from "@constants/Typography";

export type ButtonVariant = 'primary' | 'secondary' | 'none' | 'disabled' | 'transparent';
export type ButtonWidth = 'condensed' | 'normal' | 'large' | 'block';

interface ButtonProps {
    children?: string;
    onPress?: () => void;
    disabled?: boolean;
    variant?: ButtonVariant;
    bordered?: boolean;
    size?: Sizes;
    width?: ButtonWidth;
    rounded?: boolean;
    icon?: keyof typeof Ionicons.glyphMap;
    style?: {
        root?: StyleProp<ViewStyle>;
        icon?: StyleProp<TextStyle>;
        text?: StyleProp<TextStyle>;
    };
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        onPress = () => {},
        disabled = false,
        variant = 'primary',
        bordered = false,
        size = 'md',
        width = 'normal',
        rounded = true,
        icon = '',
        style = {},
    } = props;

    return (
        <S.StyledButton
            {...{
                variant: disabled ? 'disabled' : variant,
                rounded,
                size,
                onPress,
                width,
                ...props
            }}
        >
            <View>
                {!!icon && (
                    <StyledIcon
                        name={icon}
                        variant={disabled ? 'disabled' : variant}
                    />
                )}
                {!!children && (
                    <RegularText>{children}</RegularText>
                )}
            </View>
        </S.StyledButton>
    )
}
