import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { Colors, Indents, TextSize } from '@constants/styles';

import SocialLineItem from '@app/modules/login/components/SocialLineItem';

const SocialLine = () => {
    const handlePress = (url: string) => {
        console.log(url);
    };

    return (
        <>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>or use social login</Text>
            </View>
            <View style={styles.socialWrapper}>
                <SocialLineItem
                    color={Colors.socialGoogle}
                    icon="logo-google"
                    onPress={() => handlePress('https://google.com')}
                />
                <SocialLineItem
                    color={Colors.socialFb}
                    icon="logo-facebook"
                    onPress={() => handlePress('https://google.com')}
                />
                <SocialLineItem
                    color={Colors.socialInsta}
                    icon="logo-instagram"
                    onPress={() => handlePress('https://google.com')}
                />
                <SocialLineItem
                    color={Colors.socialIn}
                    icon="logo-linkedin"
                    onPress={() => handlePress('https://google.com')}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    socialWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: Indents.md,
    },
    textWrapper: {
        paddingBottom: Indents.sm,
    },
    text: {
        fontSize: TextSize.sm,
        color: Colors.gray,
    },
});

export default SocialLine;
