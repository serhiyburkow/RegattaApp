import React from 'react';

import {StyleProp, TextProps, ViewProps, ViewStyle} from "react-native";
import {StyledCustomText, StyledIconWrapper } from './TextComponents.styled';

interface RegularTextProps
    extends TextProps,
        Partial<StyledCustomText> {
    children: string | string[];
}
interface IconWrapperProps extends ViewProps {
    children: JSX.Element | JSX.Element[];
    style?: StyleProp<ViewStyle>,
}

export const RegularText = (props: RegularTextProps) => {
    return (
        <StyledCustomText
            fontColor='regular'
            fontType='regular'
            size='md'
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
            {...props}
        />
    );
};

export const IconWrapper = (props: IconWrapperProps) => {
    return (
        <StyledIconWrapper {...props} />
    )
}
