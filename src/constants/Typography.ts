export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'super' | 'max';

export const fontSizes: Record<Sizes, number> = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 24,
    super: 32,
    max: 54,
};

export const lineHeights: { [index in Sizes]: string } = {
    xs: '12px',
    sm: '13px',
    md: '21px',
    lg: '24px',
    xl: '27px',
    xxl: '36px',
    super: '48px',
    max: '81px',
};

export const indents: Record<Sizes, number> = {
    xs: 5,
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 50,
    super: 60,
    max: 70,
}

export type FontType = 'regular' | 'bold' | 'italic';

export const fontFamilies: { [index in FontType]: string } = {
    regular: 'RobotoCondensed_400Regular',
    bold: 'RobotoCondensed_700Bold',
    italic: 'RobotoCondensed_400Regular_Italic',
};

