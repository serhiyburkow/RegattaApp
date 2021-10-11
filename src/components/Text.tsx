import {StyleSheet, Text as SystemText} from "react-native";
import React from "react";

interface TextProps {
    styles?: Record<string, any>,
    children: string
}

const Text = (props: TextProps) => {
    const {styles, children} = props;

    return (
        <SystemText style={[defaultStyles.text, styles?.text]}>{children}</SystemText>
    )
}

export const defaultStyles = StyleSheet.create({
    text: {
        fontSize: 14
    },
})

export default Text;