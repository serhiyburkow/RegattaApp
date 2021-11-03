import styled, {DefaultTheme} from 'styled-components/native';

interface Props {
    isFirstElement?: boolean;
    isLastElement?: boolean;
    theme: DefaultTheme;
}

export const ItemWrapper = styled.View((props: Props) => ({
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: props.theme.sectionList.section.backgroundColor,
    paddingVertical: props.theme.sectionList.item.padding[0],
    paddingHorizontal: props.theme.sectionList.item.padding[1],
    marginTop: props.isFirstElement ? props.theme.sectionList.root.margin[0] : 0,
    marginBottom: props.isLastElement ? props.theme.sectionList.root.margin[0] : 0,
}))

export const LabelWrapper = styled.View(() => ({
    flex: 1
}))

export const InputWrapper = styled.View(() => ({
    flex: 1
}))
