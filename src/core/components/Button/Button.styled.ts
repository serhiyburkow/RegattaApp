import styled, {css, DefaultTheme} from "styled-components/native";
import { indents } from "../../../constants/Typography";
import {Dimensions} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface stylesMap {
    [key: string]: any
}

const width = Dimensions.get('window').width;

const buttonVariantStyles = (theme: DefaultTheme, variant = 'primary'): any => {

    const styles: stylesMap = {
        primary: css`
            background-color: ${theme.colors.primary}
        `,
        transparent: css`
            background-color: transparent
            padding: ${indents.sm};
        `,
        disabled: css`
            background-color: transparent
        `
    };
    return styles[variant];
}

const sizeStyles = (theme: DefaultTheme, size = 'md'): any => {
    const styles: stylesMap = {
        sm: css`
            padding: ${indents.xs} ${indents.sm};
        `,
        md: css`
            padding: ${indents.sm} ${indents.md};
        `,
        lg: css`
            padding: ${indents.md} ${indents.lg};
        `,
        xl: css`
            padding: ${indents.lg} ${indents.xl};
        `,
    }
    return styles[size];
}

export const StyledButton = styled.Pressable`
    ${({ theme, size }) => sizeStyles(theme, size)}
    ${({ theme, variant }) => buttonVariantStyles(theme, variant)}
    border-radius: ${({ rounded }) => rounded ? 100 : 0}rem;
`;

const iconVariantStyles = (theme: DefaultTheme, variant = 'primary'): any => {
    const styles: stylesMap = {
        primary: css`
            color: ${theme.colors.monochrome100}
        `,
        transparent: css`
            color: ${theme.colors.primary}
        `,
        disabled: css`
            color: ${theme.colors.monochrome50}
        `
    };
    return styles[variant];
}

export const StyledIcon = styled(Ionicons)`
    ${({ theme, variant }) => iconVariantStyles(theme, variant)}
    font-size: 22px;
`
