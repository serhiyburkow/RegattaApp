export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'super' | 'max';

export const fontSizes: { [index in Sizes]: string } = {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    xxl: '24px',
    super: '32px',
    max: '54px',
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

// It's an alias to lineHeights to ma
export const indents: { [index in Sizes]: string} = {
    xs: '5px',
    sm: '10px',
    md: '20px',
    lg: '30px',
    xl: '40px',
    xxl: '50px',
    super: '60px',
    max: '70px',
}

export type FontType = 'regular' | 'bold' | 'italic';

export const fontFamilies: { [index in FontType]: string } = {
    regular: 'RobotoCondensed_400Regular',
    bold: 'RobotoCondensed_700Bold',
    italic: 'RobotoCondensed_400Regular_Italic',
};

