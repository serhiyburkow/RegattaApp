import { ShadowProps } from 'react-native-shadow-2';

enum Colors {
    primary = '#1b335f',
    secondary = '#7292a5',
    ternary = '#a7aeb9',
    additional = '#faed8b',
    contrast = '#cf5816',
    warning = additional,
    error = '#db3236',
    gray = '#999',
    lightGray = '#ddd',
    light = '#fff',

    socialFb = '#3b5998',
    socialIn = '#0072b1',
    socialInsta = '#C13584',
    socialGoogle = '#db3236',

    textGeneral = secondary,

    textInput = ternary,
    textInputDisabled = lightGray,
    textInputFocused = secondary,
}

enum Indents {
    xs = 5,
    sm = 10,
    md = 20,
    lg = 30,
    xl = 40,
}

enum TextSize {
    xs = 12,
    sm = 13,
    md = 15,
    lg = 16,
    xl = 20,

    h1 = 24,
    h2 = 20,
}

const Shadows = {
    socialButtons: {
        offset: [2, 2],
        distance: 5,
        startColor: '#00000020',
    } as ShadowProps,
};

export { Colors, TextSize, Indents, Shadows };
