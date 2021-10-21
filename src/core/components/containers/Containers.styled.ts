import styled, {DefaultTheme} from 'styled-components/native';
import {Animated, KeyboardAvoidingView} from "react-native";

interface PageProps {
    theme: DefaultTheme,
    padded: boolean
}

export const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)(() => ({
    flex: 1,
    width: '100%',
    height: '100%'
}))

export const StyledBasePage = styled(Animated.View)((props: PageProps) => ({
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: props.theme.general.backgroundColor,
    padding: props.padded ? 20 : 0
}))

export const StyledBaseScroll = styled.ScrollView((props: PageProps) => ({
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: props.theme.general.backgroundColor,
    padding: props.padded ? 20 : 0
}))
