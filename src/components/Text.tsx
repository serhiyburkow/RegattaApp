import React from 'react';

import {
    StyleProp,
    StyleSheet,
    Text as SystemText,
    TextStyle,
} from 'react-native';

interface TextProps {
    styles?: StyleProp<TextStyle>;
    children: string;
}

const Text = (props: TextProps) => {
    const { styles, children } = props;

    return (
        <SystemText style={[defaultStyles.text, styles]}>{children}</SystemText>
    );
};

export const defaultStyles = StyleSheet.create({
    text: {
        fontSize: 14,
    },
});

export default Text;
