import React from 'react';
import * as ReactNative from 'react-native';

import * as S from './TextComponents.styled';
import {StyleProp, ViewStyle} from "react-native";

interface RegularTextProps
    extends ReactNative.TextProps,
        Partial<S.StyledCustomText> {
    children: string | string[];
}
interface IconWrapperProps extends ReactNative.ViewProps {
    children: JSX.Element | JSX.Element[];
    style?: StyleProp<ViewStyle>,
}

export const RegularText = (props: RegularTextProps) => {
    return (
        <S.StyledCustomText
            {...{ fontColor: 'regular', fontType: 'regular', size: 'md', ...props }}
        />
    );
};

export const Title = (props: RegularTextProps) => {
    return (
        <S.StyledCustomText
            {...{ fontColor: 'regular', fontType: 'bold', size: 'lg', ...props }}
        />
    );
};

export const SubText = (props: RegularTextProps) => {
    return (
        <S.StyledCustomText
            {...{ fontColor: 'subtle', fontType: 'regular', size: 'sm', ...props }}
        />
    );
};

export const IconWrapper = (props: IconWrapperProps) => {
    return (
        <S.StyledIconWrapper {...props} />
    )
}
