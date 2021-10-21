import React from 'react';

import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Indents } from '@constants/styles';

interface FieldWrapperProps {
    children: React.ReactNode;
    indent?: 'sm' | 'md' | 'lg' | 'xl';
    style?: StyleProp<ViewStyle>;
}

const FieldWrapper = (props: FieldWrapperProps) => {
    const { children, indent = 'md', style = {} } = props;

    const computedStyle: StyleProp<ViewStyle>[] = [
        styles.common,
        indent === 'sm' && styles.indentSm,
        indent === 'md' && styles.indentMd,
        indent === 'lg' && styles.indentLg,
        indent === 'xl' && styles.indentXl,
    ];

    return <View style={[computedStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    common: {
        width: '100%',
    },
    indentSm: {
        marginBottom: Indents.sm,
    },
    indentMd: {
        marginBottom: Indents.md,
    },
    indentLg: {
        marginBottom: Indents.lg,
    },
    indentXl: {
        marginBottom: Indents.xl,
    },
});

export default FieldWrapper;
