import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { StyledBasePage } from './Containers.styled';
import {Animated, ScrollViewProps} from "react-native";

interface BasePageProps extends ScrollViewProps {
    children: React.ReactNode | React.ReactNode[];
    padded?: boolean;
    as?: React.ReactNode;
    behavior?: string;
}
export const BasePage = (props: BasePageProps) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: true,
            toValue: 1,
            duration: 200,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
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
        <StyledBasePage {...props} style={{ opacity: fadeAnim }}>
            {props.children}
        </StyledBasePage>
    );
};
