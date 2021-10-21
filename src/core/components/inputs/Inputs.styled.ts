import styled, { DefaultTheme } from 'styled-components/native';

interface Props {
    theme: DefaultTheme
}

export const StyledTextInput = styled.TextInput((props: Props) => ({
    backgroundColor: props.theme.colors.monochrome100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minHeight: 42,
    borderColor: props.theme.colors.monochrome50,
    borderWidth: 1,
    borderRadius: 20,
    color: props.theme.colors.secondary
}))

export const StyledInputRowWrapper = styled.View(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
}))

export const StyledInputWrapper = styled.View(() => ({
    width: '100%'
}))

export const StyledEyeBtn = styled.TouchableOpacity(() => ({
    zIndex: 10,
    position: 'absolute',
    top: 0,
    right: 5,
    bottom: 0,
    width: 20,
    justifyContent: 'center',
}))
