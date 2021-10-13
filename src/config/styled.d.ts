declare module 'styled-components' {
    import {Colors} from "../constants/Colors";

    export interface DefaultTheme {
        colors: {
            primary: Colors,
            secondary: Colors,
            ternary: Colors,
            additional: Colors,
            contrast: Colors
        }

        general: {
            backgroundColor: Colors,
            textColor: Colors
        }

        listItem: {
            backgroundColor: Colors,
            padding: [number, number]
        }
    }
}
