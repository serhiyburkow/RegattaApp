import styled from 'styled-components/native';

export const StyledItemSeparator = styled.View`
    height: ${({ theme }: any) => theme.sectionList.separator.height};
    width: 100%;
    background-color: ${({ theme }: any) => theme.sectionList.separator.backgroundColor};
`;


export const StyledSectionList = styled.SectionList`
    flex: 1;
    width: 100%;
    margin-top: ${({ theme }: any) => theme.sectionList.root.margin[0]};
    margin-bottom: ${({ theme }: any) => theme.sectionList.root.margin[1]};
`;

export const StyledSectionHeaderWrapper = styled.View`
    margin-top: ${({ theme }: any) => theme.sectionList.sectionHeader.margin[0]};
    margin-bottom: ${({ theme }: any) => theme.sectionList.sectionHeader.margin[1]};
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }: any) => theme.sectionList.sectionHeader.backgroundColor};
    border-radius: ${({ theme }: any) => theme.sectionList.common.radius}
`;
