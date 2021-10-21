import styled, {DefaultTheme} from "styled-components/native";
import { indents } from "@constants/Typography";
import {Dimensions} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface stylesMap {
    [key: string]: any
}

const width = Dimensions.get('window').width;

const buttonVariantStyles = (theme: DefaultTheme, variant: string ): stylesMap => {
    const styles: stylesMap = {
        primary: {
            backgroundColor: theme.colors.primary
        },
        transparent: {
            backgroundColor: 'transparent',
            paddingVertical: indents.sm,
            paddingHorizontal: indents.sm
        },
        disabled: {
            backgroundColor: theme.colors.monochrome50
        }
    };
    return styles[variant];
}

const sizeStyles = (theme: DefaultTheme, size = 'md'): stylesMap => {
    const styles: stylesMap = {
        sm: {
            paddingVertical: indents.xs,
            paddingHorizontal: indents.sm
        },
        md: {
            paddingVertical: indents.sm,
            paddingHorizontal: indents.md
        },
        lg: {
            paddingVertical: indents.md,
            paddingHorizontal: indents.lg
        },
        xl: {
            paddingVertical: indents.lg,
            paddingHorizontal: indents.xl
        },
    }
    return styles[size];
}

interface ButtonProps {
    theme: DefaultTheme,
    size: string,
    variant: string,
    rounded: boolean
}
export const StyledButton = styled.Pressable((props: ButtonProps) => {
        return {
            ...sizeStyles(props.theme, props.size),
            ...buttonVariantStyles(props.theme, props.variant),
            borderRadius: props.rounded ? 100 : 0,
        }
    }
);

const iconVariantStyles = (theme: DefaultTheme, variant = 'primary'): stylesMap => {
    const styles: stylesMap = {
        primary: {
            color: theme.colors.monochrome100
        },
        transparent: {
            color: theme.colors.primary
        },
        disabled: {
            color: theme.colors.monochrome70
        }
    };
    return styles[variant];
}

interface IconProps {
    theme: DefaultTheme;
    variant: string;
    size: string,
    name: keyof typeof Ionicons.glyphMap;
}

export const Icon = styled(Ionicons).attrs<IconProps>((props: IconProps) => ({
    size: 22,
    variant: props.variant
})) ((props: IconProps) => iconVariantStyles(props.theme, props.variant))
