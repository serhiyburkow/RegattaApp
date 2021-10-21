import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import {
    Dimensions,
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';

import { Colors, Indents, TextSize } from '@constants/styles';

const width = Dimensions.get('window').width;

interface ButtonProps {
    children?: React.ReactNode;
    onPress?: () => void;
    disabled?: boolean;
    type?: 'primary' | 'secondary' | 'none' | 'disabled' | 'transparent';
    bordered?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    width?: 'condensed' | 'normal' | 'large' | 'block';
    rounded?: boolean;
    icon?: keyof typeof Ionicons.glyphMap;
    style?: {
        root?: StyleProp<ViewStyle>;
        icon?: StyleProp<TextStyle>;
        text?: StyleProp<TextStyle>;
    };
}

const Button = (props: ButtonProps) => {
    const {
        children,
        onPress = () => {},
        disabled = false,
        type = 'primary',
        bordered = false,
        size = 'md',
        width = 'normal',
        rounded = true,
        icon = '',
        style = {},
    } = props;

    const { root: rootStyle, icon: iconStyle, text: textStyle } = style;

    const containerCommonStyle: StyleProp<ViewStyle>[] = [
        rounded && styles.rounded,
        type !== 'none' && sizeStyles[size],
        type !== 'none' && widthStyles[width],
        icon && styles.buttonIcon,
        typeStyles[type],
        disabled && typeStyles['disabled'],
    ];

    const textCommonStyle: StyleProp<TextStyle>[] = [
        textStyles[type],
        sizeTextStyles[size],
        disabled && textStyles['disabled'],
    ];

    return (
        <Pressable onPress={onPress} disabled={disabled}>
            <View style={[containerCommonStyle, rootStyle]}>
                {!!icon && (
                    <Ionicons name={icon} style={[styles.icon, iconStyle]} />
                )}
                {!!children && (
                    <Text
                        style={[
                            styles.btnTextStyle,
                            textCommonStyle,
                            textStyle,
                        ]}
                    >
                        {children}
                    </Text>
                )}
            </View>
        </Pressable>
    );
};

const typeStyles = StyleSheet.create({
    primary: {
        backgroundColor: Colors.primary,
    },
    secondary: {
        backgroundColor: Colors.secondary,
    },
    none: {
        padding: 0,
        backgroundColor: Colors.lightGray,
    },
    transparent: {
        backgroundColor: 'transparent',
    },
    disabled: {
        backgroundColor: Colors.lightGray,
    },
});

const textStyles = StyleSheet.create({
    primary: {
        color: Colors.light,
    },
    secondary: {
        color: Colors.light,
    },
    none: {
        color: Colors.light,
    },
    transparent: {
        color: Colors.textGeneral,
    },
    disabled: {
        color: Colors.gray,
    },
});

const sizeStyles = StyleSheet.create({
    sm: {
        paddingVertical: Indents.sm,
        paddingHorizontal: Indents.md,
    },
    md: {
        paddingVertical: Indents.sm,
        paddingHorizontal: Indents.md,
    },
    lg: {
        paddingVertical: Indents.sm,
        paddingHorizontal: Indents.md,
    },
    xl: {
        paddingVertical: Indents.sm,
        paddingHorizontal: Indents.md,
    },
});

const sizeTextStyles = StyleSheet.create({
    sm: {
        fontSize: TextSize.md,
    },
    md: {
        fontSize: TextSize.md,
    },
    lg: {
        fontSize: TextSize.md,
    },
    xl: {
        fontSize: TextSize.md,
    },
});

const widthStyles = StyleSheet.create({
    condensed: {},
    normal: {},
    large: {
        width: width / 1.3,
    },
    block: {
        width: '100%',
    },
});

const styles = StyleSheet.create({
    btnTextStyle: {
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    rounded: {
        borderRadius: 500,
    },
    buttonIcon: {},
    icon: {
        fontSize: 20,
        color: Colors.secondary,
    },
});

export default Button;
