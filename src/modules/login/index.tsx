import React, { useReducer, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
    Image,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View,
} from 'react-native';

import { Routes } from '@constants/index';

import { Button, FieldWrapper, TextInput } from '@app/components';
import SocialLine from '@app/modules/login/components/SocialLine';
import { RootStackParamList } from '@app/navigation/RootStackParamList';
import { layout } from '@app/styles/layout';
import { handleReducerChange, stateReducer } from '@app/utils/ReactReducer';

type Props = NativeStackScreenProps<RootStackParamList, Routes.settings>;

const Login = ({ navigation }: Props) => {
    const initialState = {
        login: '',
        password: '',
    };

    const [errors, errorsDispatch] = useReducer(stateReducer, {});
    const handleErrorsChange = handleReducerChange(errorsDispatch);

    const [values, valuesDispatch] = useReducer(stateReducer, initialState);
    const handleValuesChange = handleReducerChange(valuesDispatch);

    const handleInputChange = (field: string) => (value: string) => {
        handleValuesChange({ [field]: value });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        Keyboard.dismiss();
        handleErrorsChange({});
        setIsSubmitting(true);
        console.log(values);
        navigation.replace(Routes.mainStack);
    };

    const isNotAbleToSend = Object.keys(errors).some(
        (key: string) => errors[key],
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[layout.container, styles.screenWrapper]}
        >
            <View style={styles.imageWrapper}>
                <ImageBackground
                    source={{ uri: require('@assets/login-background.jpg') }}
                    resizeMode="cover"
                    style={styles.imageWrapper}
                />
            </View>
            <View style={styles.mainWrapper}>
                <View style={styles.logoWrapper}>
                    <Image
                        source={{ uri: require('@assets/logo-img.png') }}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.formWrapper}>
                    <View>
                        <FieldWrapper indent="sm">
                            <TextInput
                                required={true}
                                errorHandler={(value) =>
                                    handleErrorsChange({ login: value })
                                }
                                isEditable={!isSubmitting}
                                onChange={handleInputChange('login')}
                                value={values.login}
                                placeholder="Your login..."
                                // TODO: ###CF### In a real life I will surely use Yup :D
                                validation={[
                                    {
                                        rule: /^[a-zA-Z]*$/,
                                        message:
                                            'You can use only letters and numbers',
                                    },
                                ]}
                            />
                        </FieldWrapper>
                        <FieldWrapper indent="lg">
                            <TextInput
                                required={true}
                                errorHandler={(value) =>
                                    handleErrorsChange({ password: value })
                                }
                                isEditable={!isSubmitting}
                                isPassword={true}
                                onChange={handleInputChange('password')}
                                placeholder="Password..."
                                value={values.password}
                                maxLength={48}
                            />
                        </FieldWrapper>
                        <FieldWrapper indent="sm">
                            <Button
                                onPress={handleSubmit}
                                disabled={isNotAbleToSend || isSubmitting}
                                bordered
                            >
                                Login
                            </Button>
                        </FieldWrapper>
                    </View>
                </View>
                <SocialLine />
            </View>
        </KeyboardAvoidingView>
    );
};

export const styles = StyleSheet.create({
    screenWrapper: {
        backgroundColor: '#f0f0f0',
    },
    /* ====== Screen background ====== */
    imageWrapper: {
        flex: 1,
        flexGrow: 1,
        width: '100%',
    },
    /* ====== Logo ====== */
    logoWrapper: {
        zIndex: 3,
        marginTop: -100,
        alignItems: 'center',
        borderRadius: 500,
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        width: 120,
        height: 120,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 80,
        height: 70,
    },
    /* ====== Main block ====== */
    mainWrapper: {
        zIndex: 2,
        marginTop: -15,
        flex: 1,
        flexGrow: 2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    /* ====== Form ====== */
    formWrapper: {
        width: '100%',
        maxWidth: 280,
        flex: 1,
        justifyContent: 'center',
    },
    wrapper: {
        marginTop: 15,
        marginBottom: 15,
        borderColor: 'black',
    },
});

export default Login;
