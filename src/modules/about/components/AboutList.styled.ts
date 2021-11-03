import styled, {DefaultTheme} from 'styled-components/native';

interface StyledAboutListItemWrapper {
    isFirstElement?: boolean;
    isLastElement?: boolean;
    theme: DefaultTheme;
}

export const StyledAboutListItemWrapper = styled.TouchableOpacity<StyledAboutListItemWrapper>((props: StyledAboutListItemWrapper) => ({
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: props.theme.sectionList.item.padding[0],
    paddingHorizontal: props.theme.sectionList.item.padding[1],
    backgroundColor: props.theme.sectionList.item.backgroundColor,
    borderTopLeftRadius: props.isFirstElement ? props.theme.sectionList.common.radius : 0,
    borderTopRightRadius: props.isFirstElement ? props.theme.sectionList.common.radius : 0,
    borderBottomLeftRadius: props.isLastElement ? props.theme.sectionList.common.radius : 0,
    borderBottomRightRadius: props.isLastElement ? props.theme.sectionList.common.radius : 0,
}))
