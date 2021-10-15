import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import {
    StyleProp,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import {StyledButton, Icon} from "./Button.styled";
import {RegularText} from "@components/textComponents/TextComponents";
import {Sizes} from "@constants/Typography";
import {Colors} from "react-native/Libraries/NewAppScreen";

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
        ...rest
    } = props;

    const textColors = {
        primary: 'monochrome100',
        secondary: 'monochrome100',
        disabled: 'monochrome30',
        transparent: 'primary',
        none: 'primary'
    }

    return (
        <StyledButton
            variant={disabled ? 'disabled' : variant}
            disabled={disabled}
            rounded={rounded}
            size={size}
            onPress={onPress}
            // width={width}
            style={style.root}
            {...rest}
        >
            <View>
                {!!icon && (
                    <Icon
                        name={icon}
                        variant={disabled ? 'disabled' : variant}
                        size={22}
                        style={style.icon}
                        fontColor={textColors[variant] as typeof Colors}
                    />
                )}
                {!!children && (
                    <RegularText align='center' fontColor={textColors[variant] as typeof Colors} style={style.text}>{children}</RegularText>
                )}
            </View>
        </StyledButton>
    )
}
