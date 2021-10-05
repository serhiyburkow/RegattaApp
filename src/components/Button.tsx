import {StyleProp, StyleSheet, Text, Pressable, ViewStyle, TextStyle} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

interface ButtonProps {
    onPress?: () => void,
    text?: string,
    icon?: string,
    styles?: {
        button?: StyleProp<ViewStyle>,
        text?: StyleProp<TextStyle>,
        icon?: StyleProp<TextStyle>
    }
    type?: ButtonType,
    size?: ButtonSize
}

export enum ButtonType {
    primary,
    secondary,
    clean,
    transparent
}

export enum ButtonSize {
    sm,
    md,
    xl
}

const Button = (props: ButtonProps) => {
    const {
        onPress = () => {
        },
        text,
        icon,
        styles,
        type,
        size = ButtonSize.md
    } = props;

    const renderIcon = (icon: string, style: StyleProp<TextStyle> ) => <Ionicons name={icon} style={[defaultStyles.icon, defaultStyles[`${size}_icon`], style]}/>
    const renderText = (text: string, style: StyleProp<TextStyle>) => <Text style={[defaultStyles.text, defaultStyles[`${size}_text`], style]}>{text}</Text>

    return (
        <Pressable
            onPress={onPress}
            style={[
                defaultStyles.button,
                type !== ButtonType.transparent && defaultStyles.buttonCommon,
                defaultStyles[`${size}_button`],
                styles?.button
            ]}>
            {icon && renderIcon(icon, styles?.icon)}
            {text && renderText(text, styles?.text)}
        </Pressable>
    )
}

export const defaultStyles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: '#444444',
    },
    buttonCommon: {
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
    },
    text: {
        color: '#999'
    },
    icon: {
        color: '#dadada'
    },
    [`${ButtonSize.sm}_button`]: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    [`${ButtonSize.sm}_text`]: {
        fontSize: 12
    },
    [`${ButtonSize.sm}_icon`]: {
        fontSize: 16
    },
    [`${ButtonSize.md}_button`]: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    [`${ButtonSize.md}_text`]: {
        fontSize: 14
    },
    [`${ButtonSize.md}_icon`]: {
        fontSize: 20
    },
    [`${ButtonSize.xl}_button`]: {
        paddingVertical: 15,
        paddingHorizontal: 40
    },
    [`${ButtonSize.xl}_text`]: {
        fontSize: 20
    },
    [`${ButtonSize.xl}_icon`]: {
        fontSize: 24
    }
})

export default Button;