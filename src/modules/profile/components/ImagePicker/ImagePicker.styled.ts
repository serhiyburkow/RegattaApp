import styled, {DefaultTheme} from 'styled-components/native';

interface Props {
    theme: DefaultTheme
}

export const StyledImagePickerWrapper = styled.View((props: Props) => ({
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: props.theme.sectionList.item.padding[1]
}))

export const Avatar = styled.Image(() => ({
    borderRadius: 150,
    width: 150,
    height: 150
}))
