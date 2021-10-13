export type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'super' | 'max';

export const fontSizes: { [index in FontSize]: string } = {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '24px',
    super: '32px',
    max: '54px',
};

export const lineHeights: { [index in FontSize]: string } = {
    xs: '12px',
    s: '13px',
    m: '21px',
    l: '24px',
    xl: '27px',
    xxl: '36px',
    super: '48px',
    max: '81px',
};

export type FontType = 'regular' | 'bold' | 'italic';

export const fontFamilies: { [index in FontType]: string } = {
    regular: 'RobotoCondensed_400Regular',
    bold: 'RobotoCondensed_700Bold',
    italic: 'RobotoCondensed_400Regular_Italic',
};

