import styled from 'styled-components/native';
import {DefaultTheme} from "styled-components";

interface Props {
    theme: DefaultTheme
}

export const StyledItemSeparator = styled.View((props: Props) => ({
    height: props.theme.sectionList.separator.height,
    width: '100%',
    backgroundColor: props.theme.sectionList.separator.backgroundColor
}))

export const StyledSectionList = styled.SectionList((props: Props) => ({
    flex: 1,
    width: '100%',
    marginTop: props.theme.sectionList.root.margin[0],
    marginBottom: props.theme.sectionList.root.margin[1],
}))

export const StyledSectionHeaderWrapper = styled.View((props: Props) => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: props.theme.sectionList.sectionHeader.backgroundColor,
    borderRadius: props.theme.sectionList.common.radius,
    width: '100%',
    marginTop: props.theme.sectionList.root.margin[0],
    marginBottom: props.theme.sectionList.root.margin[1],
}))
