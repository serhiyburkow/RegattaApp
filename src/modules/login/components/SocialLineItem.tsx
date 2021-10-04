import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import { Colors, Indents, Shadows } from '@constants/styles';

import { Button } from '@app/components';

const BORDER_RADIUS = 20;
const BUTTON_SIZE = 32;

interface SocialLineItemProps {
    color: Colors;
    icon?: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
}

const SocialLineItem = (props: SocialLineItemProps) => {
    const {
        color = Colors.primary,
        icon = 'logo-google',
        onPress = () => {},
    } = props;
    const shadowProps = {
        containerViewStyle: styles.buttonWrapper,
        radius: BORDER_RADIUS,
    };
    return (
        <Shadow {...shadowProps} {...Shadows.socialButtons}>
            <Button
                onPress={onPress}
                icon={icon}
                type="none"
                style={{
                    root: [styles.button, { backgroundColor: color }],
                    icon: styles.socialIcn,
                }}
            />
        </Shadow>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        marginHorizontal: Indents.sm,
    },
    button: {
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDER_RADIUS,
        backgroundColor: Colors.primary,
    },
    socialIcn: {
        color: Colors.light,
        fontSize: BUTTON_SIZE * 0.6,
    },
});
export default SocialLineItem;
