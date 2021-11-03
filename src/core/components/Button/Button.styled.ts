import styled, {DefaultTheme} from "styled-components/native";
import { indents } from "@constants/Typography";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Colors} from "@constants/Colors";

const buttonVariantStyles = (theme: DefaultTheme, variant: string ): Record<string, any> => {
    const styles: Record<string, any> = {
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

const sizeStyles = (theme: DefaultTheme, size = 'md'): Record<string, any> => {
    const styles: Record<string, any> = {
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

const iconVariantStyles = (theme: DefaultTheme, variant = 'primary'): Record<string, any> => {
    const styles: Record<string, any> = {
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
    color: Colors,
    name: keyof typeof Ionicons.glyphMap;
}

export const Icon = styled(Ionicons).attrs<IconProps>((props: IconProps) => ({
    size: 22,
    variant: props.variant,
})) ((props: IconProps) => {
    return {
        ...iconVariantStyles(props.theme, props.variant),
        color: props.theme.colors[props.color]
    }
})
