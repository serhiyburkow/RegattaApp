export type Colors = keyof typeof ColorsLight & keyof typeof ColorsDark & string;

type ColorsType = {
    [key: string]: string
}

export const ColorsLight: ColorsType = {
    primary: '#1b335f',
    secondary: '#7292a5',
    ternary: '#a7aeb9',
    additional: '#faed8b',
    contrast: '#cf5816',
    monochrome0: '#000',
    monochrome30: '#444',
    monochrome50: '#999',
    monochrome70:  '#f2f2f2',
    monochrome100: '#fff'
}

export const ColorsDark: ColorsType = {
    primary: '#1b335f',
    secondary: '#7292a5',
    ternary: '#a7aeb9',
    additional: '#faed8b',
    contrast: '#cf5816',
    monochrome100: '#fff',
    monochrome70: '#f2f2f2',
    monochrome50: '#999',
    monochrome30:  '#444',
    monochrome0: '#000'
}
