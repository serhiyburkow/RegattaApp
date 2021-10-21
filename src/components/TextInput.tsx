import React, { useEffect, useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import {
    Keyboard,
    KeyboardTypeOptions,
    StyleProp,
    StyleSheet,
    Text,
    TextInput as SystemTextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

import { Colors, Indents, TextSize } from '@constants/styles';

const minimumTouchableSize = 40;

interface InputProps {
    value: string;
    required?: boolean;
    keyboardType?: KeyboardTypeOptions;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    isEditable?: boolean;
    multiline?: boolean;
    maxLength?: number;
    onChange: (value: string) => void;
    errorHandler?: (value: boolean) => void;
    label?: string;
    placeholder?: string;
    isPassword?: boolean;
    validation?: { rule: RegExp; message: string }[];
    styles?: {
        wrapper?: StyleProp<ViewStyle>;
        input?: StyleProp<TextStyle>;
        label?: StyleProp<TextStyle>;
        error?: StyleProp<TextStyle>;
    };
}

const TextInput: React.FC<InputProps> = (props) => {
    const {
        required = false,
        value: initialValue,
        keyboardType,
        autoCapitalize = 'none',
        isEditable = true,
        multiline = false,
        maxLength,
        placeholder,
        errorHandler = () => {},
        isPassword,
        validation,
        onChange,
        styles,
        label,
    } = props;

    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const [editable, setEditable] = useState(isEditable);
    const [isFocused, setFocus] = useState(false);
    const [secureText, setSecureText] = useState(isPassword);

    useEffect(() => {
        if (required && !value) {
            errorHandler(true);
        }
    }, []);

    // TODO: ###CF### Will produce extra re-render? Check and create custom useDidUpdate to get rid of it.
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        setEditable(isEditable);
    }, [isEditable]);

    const handlePasswordVisibilityChange = () => {
        setSecureText(!secureText);
    };

    const handleChangeText = (value: string) => {
        setValue(value);
        if (validation?.length) {
            const error = validation.find((el) => !el.rule.test(value));
            setError(error ? error.message : '');
            errorHandler(error ? true : required && !value);
        } else {
            errorHandler(required && !value);
        }
        onChange(value);
    };

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        setFocus(false);
        Keyboard.dismiss;
    };

    const errorCommonStyle: StyleProp<TextStyle> = [
        generalStyles.error,
        styles?.error,
    ];

    const labelCommonStyle: StyleProp<TextStyle> = [
        generalStyles.label,
        isFocused && generalStyles.labelFocused,
    ];

    const inputCommonStyle: StyleProp<TextStyle> = [
        generalStyles.input,
        isFocused && generalStyles.inputFocused,
        !!error && generalStyles.inputError,
    ];

    return (
        <View style={[generalStyles.wrapper, styles?.wrapper]}>
            {!!error && <Text style={errorCommonStyle}>{error}</Text>}
            {!!label && <Text style={labelCommonStyle}>{label}</Text>}
            <View>
                {isPassword && (
                    <TouchableOpacity
                        style={generalStyles.iconButton}
                        onPress={handlePasswordVisibilityChange}
                    >
                        <Ionicons
                            name={secureText ? 'ios-eye' : 'ios-eye-off'}
                            style={generalStyles.iconButtonIcon}
                        />
                    </TouchableOpacity>
                )}
                <SystemTextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={handleChangeText}
                    editable={editable}
                    style={inputCommonStyle}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    secureTextEntry={secureText}
                    autoCapitalize={autoCapitalize}
                    multiline={multiline}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </View>
        </View>
    );
};

const generalStyles = StyleSheet.create({
    wrapper: {},
    error: {
        fontSize: TextSize.sm,
        color: Colors.error,
        paddingHorizontal: Indents.md,
        paddingBottom: Indents.xs,
    },
    label: {
        color: Colors.textInput,
    },
    labelFocused: {
        color: Colors.textInputFocused,
    },
    input: {
        backgroundColor: '#FFF',
        paddingVertical: Indents.sm,
        paddingHorizontal: Indents.lg,
        height: minimumTouchableSize,
        width: '100%',
        borderColor: Colors.textInput,
        borderWidth: 1,
        borderRadius: 20,
        color: Colors.secondary,
    },
    inputFocused: {
        borderColor: Colors.textInputFocused,
    },
    inputError: {
        borderColor: Colors.error,
    },
    iconButton: {
        zIndex: 10,
        position: 'absolute',
        right: 5,
        top: 0,
        width: 20,
        justifyContent: 'center',
        height: minimumTouchableSize,
    },
    iconButtonIcon: {
        fontSize: 16,
        color: Colors.secondary,
    },
});

export default TextInput;
