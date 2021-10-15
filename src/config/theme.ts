import { DefaultTheme } from 'styled-components/native';

import { ColorsLight } from '@constants/Colors';
import { indents } from '@constants/Typography';

export type FontColor = 'regular' | 'subtle' | 'light' | 'primary';

export const lightTheme: DefaultTheme = {
    colors: {
        primary: ColorsLight.primary,
        secondary: ColorsLight.secondary,
        ternary: ColorsLight.ternary,
        additional: ColorsLight.additional,
        contrast: ColorsLight.contrast,
        monochrome100: ColorsLight.monochrome100,
        monochrome70: ColorsLight.monochrome70,
        monochrome50: ColorsLight.monochrome50,
        monochrome30: ColorsLight.monochrome30,
        monochrome0: ColorsLight.monochrome0,
    },
    general: {
        backgroundColor: ColorsLight.monochrome100,
        textColor: ColorsLight.monochrome0,
    },
    sectionList: {
        common: {
            radius: '5px',
        },
        root: {
            margin: [indents.md, indents.lg],
            backgroundColor: ColorsLight.monochrome70,
        },
        section: {
            margin: [indents.xl, indents.lg],
            backgroundColor: ColorsLight.monochrome70,
        },
        item: {
            backgroundColor: ColorsLight.monochrome70,
            padding: [indents.sm, indents.md],
        },
        sectionHeader: {
            margin: [indents.xl, indents.md],
            backgroundColor: ColorsLight.ternary,
        },
        separator: {
            backgroundColor: ColorsLight.monochrome100,
            height: '1px',
        },
    },
    icon: {
        wrapper: {
            padding: indents.sm,
            radius: '5px',
        },
    },
    socialLogin: {
        colors: {
            socialFb: '#3b5998',
            socialIn: '#0072b1',
            socialInsta: '#C13584',
            socialGoogle: '#db3236',
        }
    }
};
// TODO: ###CF### In a future we will separate them
export const darkTheme = lightTheme;
