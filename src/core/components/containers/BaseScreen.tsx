import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import * as ReactNative from 'react-native';

import * as S from './Containers.styled';

export const BasePage = (props: any) => {
    const fadeAnim = React.useRef(new ReactNative.Animated.Value(0)).current;

    const fadeIn = () => {
        ReactNative.Animated.timing(fadeAnim, {
            useNativeDriver: true,
            toValue: 1,
            duration: 200,
        }).start();
    };

    const fadeOut = () => {
        ReactNative.Animated.timing(fadeAnim, {
            useNativeDriver: true,
            toValue: 0,
            duration: 200,
        }).start();
    };

    useFocusEffect(() => {
        fadeIn();
        return fadeOut;
    });

    return (
        <S.BasePage {...props} style={{ opacity: fadeAnim }}>
            {props.children}
        </S.BasePage>
    );
};
