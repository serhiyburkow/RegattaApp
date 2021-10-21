import React, { useReducer, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
    Keyboard,
    Platform,
    View,
} from 'react-native';

import SocialLine from '@modules/login/components/SocialLine/SocialLine';
import { handleReducerChange, stateReducer } from '@app/utils/ReactReducer';
import {RootStackParamList} from "@core/navigators/RootStackParamList";
import {Routes} from "@core/navigators/routes";
import { Button } from '@components/Button/Button';
import TextInput from '@components/inputs/TextInput';
import {BasePage} from "@components/containers/BaseScreen";
import {
    FormContainer,
    BackgroundContainer,
    Container, LogoWrapper,
    ContentContainer
} from "@modules/login/components/containers.styled";
import {FieldWrapper} from "@components/inputs/FieldWrapper";
import {Logo} from "@modules/login/components/Logo";
import {StyledKeyboardAvoidingView} from "@components/containers/Containers.styled";

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
        <StyledKeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <BasePage>
                <Container>
                    <BackgroundContainer
                        source={ require('@assets/login-background.jpg') }
                        resizeMode="cover"
                    />
                </Container>
                <ContentContainer>
                    <LogoWrapper>
                        <Logo source={require('@assets/logo-img.png') } />
                    </LogoWrapper>
                    <FormContainer>
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
                                    variant='primary'
                                    disabled={isNotAbleToSend || isSubmitting}
                                    bordered
                                >
                                    Login
                                </Button>
                            </FieldWrapper>
                        </View>
                    </FormContainer>
                    <SocialLine />
                </ContentContainer>
            </BasePage>
        </StyledKeyboardAvoidingView>
    );
};

export default Login;
