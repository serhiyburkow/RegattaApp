import * as React from 'react';
import {Linking} from "react-native";

export interface AboutDataItem {
    key: string,
    title: string,
    action: () => any
}

interface AboutData {
    title: string;
    icon?: string;
    data: AboutDataItem[];
}

export const aboutData: AboutData[] = [
    {
        title: 'About Regatta',
        icon: 'ios-information-circle',
        data: [
            {
                key: 'about',
                title: 'About me',
                action: () => Linking.openURL('https://google.com')
            },
            {
                key: 'website',
                title: 'Regatta Website',
                action: () => Linking.openURL('http://regata.org.ua/')
            },
            {
                key: 'theme',
                title: 'Theme',
                action: () => Linking.openURL('https://google.com')
            }
        ],
    },
    {
        title: 'Feedback and Help',
        icon: 'ios-information-circle',
        data: [
            {
                key: 'help',
                title: 'Help',
                action: () => Linking.openURL('https://google.com')
            },
            {
                key: 'review',
                title: 'Review',
                action: () => Linking.openURL('https://google.com')
            }
        ],
    },
];
