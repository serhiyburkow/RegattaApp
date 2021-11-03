import styled, {DefaultTheme} from 'styled-components/native';
import {indents} from "@constants/Typography";

interface Props {
    theme: DefaultTheme
    padded: boolean
}

export const Container = styled.View.attrs<Props>((props: Props) => ({
    padded: props.padded || false,
})) ((props: Props) => ({
    flex: 1,
    width: '100%',
    backgroundColor: props.theme.general.backgroundColor,
    padding: props.padded ? indents.md : 0
}))

export const ContentContainer = styled.View((props: Props) => ({
    zIndex: 2,
    marginTop: `-${indents.sm}px`,
    flex: 1,
    flexGrow: 2,
    borderTopLeftRadius: indents.sm,
    borderTopRightRadius: indents.sm,
    padding: indents.md,
    width: '100%',
    backgroundColor: props.theme.general.backgroundColor,
    alignItems: 'center',
    justifyContent: 'space-between'
}))

export const FormContainer = styled.View(() => ({
    width: '100%',
    maxWidth: 280,
    flex: 1,
    justifyContent: 'center'
}))

export const BackgroundContainer = styled.ImageBackground(() => ({
    flex: 1,
    flexGrow: 1,
    width: '100%'
}))

export const LogoWrapper = styled.View((props: Props) => ({
    zIndex: 3,
    marginTop: -100,
    alignItems: 'center',
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    width: 120,
    height: 120,
    justifyContent: 'center',
    backgroundColor: props.theme.general.backgroundColor
}))
