import React, {useEffect, useState} from 'react';
import {StyledEyeBtn, StyledInputRowWrapper, StyledInputWrapper, StyledTextInput} from './Inputs.styled';
import {
    Keyboard,
    StyleProp,
    TextStyle,
    ViewStyle
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {TextInput as RNTextInput} from "react-native";
import {RegularText} from "@components/textComponents/TextComponents";

type TextInputProps = React.ComponentProps<typeof RNTextInput> & {
    value: string,
    required?: boolean,
    isEditable?: boolean,
    errorHandler?: (arg0: boolean) => void,
    label?: string,
    onChange: (value: string) => void,
    isPassword?: boolean,
    validation?: { rule: RegExp, message: string }[],
    styles?: {
        wrapper?: StyleProp<ViewStyle>,
        input?: StyleProp<TextStyle>,
        label?: StyleProp<TextStyle>,
        error?: StyleProp<TextStyle>
    }
}

const TextInput: React.FC<TextInputProps> = (props) => {
    const {
        required = false,
        value,
        isEditable = true,
        errorHandler,
        isPassword,
        validation,
        onChange = (value: string) => null,
        styles,
        label,
        ...rest
    } = props;

    const [internalValue, setInternalValue] = useState(value)
    const [error, setError] = useState('')
    const [editable, setEditable] = useState(isEditable)
    const [isFocused, setFocus] = useState(false)
    const [secureText, setSecureText] = useState(isPassword);

    useEffect(() => {
        if (required && !value) {
            errorHandler && errorHandler(true)
        }
    }, [])

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    useEffect(() => {
        setEditable(isEditable);
    }, [isEditable]);

    const handlePasswordVisibilityChange = () => {
        setSecureText(!secureText)
    }

    const handleChangeText = (newValue: string) => {
        setInternalValue(newValue);
        if (validation?.length) {
            const error = validation.find(el => !el.rule.test(newValue));
            setError(!!error ? error.message : '');
            errorHandler && errorHandler(!!error ? true : (required && !newValue));
        } else {
            errorHandler && errorHandler((required && !newValue));
        }
        onChange(newValue);
    }

    const handleFocus = () => {
        setFocus(true);
    }

    const handleBlur = () => {
        setFocus(false);
        Keyboard.dismiss;
    }

    return (
        <StyledInputRowWrapper>
            {!!error && (<RegularText>{error}</RegularText>)}
            {!!label && <RegularText>{label}</RegularText>}
            <StyledInputWrapper>
                {isPassword && (
                    <StyledEyeBtn onPress={handlePasswordVisibilityChange}>
                        <Ionicons name={secureText ? 'ios-eye' : 'ios-eye-off'} />
                    </StyledEyeBtn>
                )}
                <StyledTextInput
                    value={internalValue}
                    onChangeText={handleChangeText}
                    editable={editable}
                    secureTextEntry={secureText}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    underlineColorAndroid="transparent"
                    {...rest}
                />
            </StyledInputWrapper>
        </StyledInputRowWrapper>
    )
}

export default TextInput;
