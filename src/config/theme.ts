import {DefaultTheme} from 'styled-components/native';
import {ColorsDark, ColorsLight} from "../constants/Colors";

export type FontColor = 'regular' | 'subtle' | 'light' | 'primary';

export const lightTheme: DefaultTheme = {
    colors: {
        primary: ColorsLight.primary,
        secondary: ColorsLight.secondary,
        ternary: ColorsLight.ternary,
        additional: ColorsLight.additional,
        contrast: ColorsLight.contrast
    },
    general: {
        backgroundColor: ColorsLight.light,
        textColor: ColorsLight.dark
    },
    listItem: {
        backgroundColor: ColorsLight.semiLight,
        padding: [10, 20]
    }
};

export const darkTheme: DefaultTheme = {
    colors: {
        primary: ColorsDark.primary,
        secondary: ColorsDark.secondary,
        ternary: ColorsDark.ternary,
        additional: ColorsDark.additional,
        contrast: ColorsDark.contrast
    },
    general: {
        backgroundColor: ColorsDark.dark,
        textColor: ColorsDark.light
    },
    listItem: {
        backgroundColor: ColorsDark.secondary,
        padding: [10, 20]
    }
};
