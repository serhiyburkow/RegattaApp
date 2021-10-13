import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import * as ReactNative from 'react-native';

import * as S from './Containers.styled';

interface BaseScrollProps extends ReactNative.ScrollViewProps {
    children: React.ReactNode | React.ReactNode[];
}
export const BaseScroll = (props: BaseScrollProps) => {
    return (
        <S.StyledBaseScroll
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{ padding: 16 }}
            {...props}>
            {props.children}
        </S.StyledBaseScroll>
    );
};
