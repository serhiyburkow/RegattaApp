declare module 'styled-components' {
    import { Colors } from '@constants/Colors';

    export interface DefaultTheme {
        colors: {
            primary: Colors;
            secondary: Colors;
            ternary: Colors;
            additional: Colors;
            contrast: Colors;
            monochrome100: Colors;
            monochrome70: Colors;
            monochrome50: Colors;
            monochrome30: Colors;
            monochrome0: Colors;
        };

        general: {
            backgroundColor: Colors;
            textColor: Colors;
        };
        sectionList: {
            common: {
                radius: string;
            };
            root: {
                margin: [string, string];
                backgroundColor: string;
            };
            section: {
                margin: [string, string];
                backgroundColor: string;
            };
            item: {
                backgroundColor: Colors;
                padding: [string, string];
            };
            sectionHeader: {
                margin: [string, string];
                backgroundColor: string;
            };
            separator: {
                backgroundColor: string;
                height: string;
            };
        };
        icon: {
            wrapper: {
                padding: string;
                radius: string;
            };
        };
        socialLogin: {
            colors: {
                socialFb: Colors;
                socialIn: Colors;
                socialInsta: Colors;
                socialGoogle: Colors;
            }
        }
    }
}
