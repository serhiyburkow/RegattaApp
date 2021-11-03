import React from 'react';

import {StyleProp, TextProps, ViewProps, ViewStyle} from "react-native";
import {StyledCustomText } from './TextComponents.styled';

interface RegularTextProps
    extends TextProps,
        Partial<StyledCustomText> {
    children: string | string[];
}

export const RegularText = (props: RegularTextProps) => {
    return (
        <StyledCustomText
            fontColor='regular'
            fontType='regular'
            size='md'
            align='left'
            color='primary'
            {...props}
        />
    );
};

export const Title = (props: RegularTextProps) => {
    return (
        <StyledCustomText
            fontColor='regular'
            fontType='bold'
            size='lg'
            align='left'
            {...props}
        />
    );
};

export const SubText = (props: RegularTextProps) => {
    return (
        <StyledCustomText
            fontColor='subtle'
            fontType='regular'
            size='sm'
            align='left'
            {...props}
        />
    );
};
