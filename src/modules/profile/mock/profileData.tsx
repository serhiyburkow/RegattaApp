import * as React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

export interface ListInputType {
    type: 'text' | 'password' | 'checkbox' | 'imagepicker',
    validate?: string,
    requred?: boolean
}

export interface ProfileDataItem {
    key: string;
    title: string;
    input: ListInputType
}

export interface ProfileData  {
    title: string;
    icon?: keyof typeof Ionicons.glyphMap,
    hidden?: boolean,
    data: ProfileDataItem[];
}

const profileData: ProfileData[] = [
    {
        title: 'Avatar',
        hidden: true,
        data: [
            {
                key: 'avatar',
                title: 'Avatar',
                input: {
                    type: 'imagepicker'
                }
            }
        ]
    },
    {
        title: 'Profile',
        icon: 'ios-information-circle',
        data: [
            {
                key: 'name',
                title: 'Name',
                input: {
                    type: 'text'
                }
            },
            {
                key: 'email',
                title: 'Email',
                input: {
                    type: 'text',
                    requred: true
                }
            },
            {
                key: 'phone',
                title: 'Phone',
                input: {
                    type: 'text',
                    requred: true
                }
            },
            {
                key: 'password',
                title: 'Password',
                input: {
                    type: 'text',
                    requred: true
                }
            }
        ],
    },
    {
        title: 'Profile',
        icon: 'ios-information-circle',
        data: [
            {
                key: 'experience',
                title: 'Expericence',
                input: {
                    type: 'text'
                }
            }
        ]
    }
];

export default profileData;
