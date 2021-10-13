import * as React from 'react';
import {StyledSectionHeaderWrapper} from "./SectionList.styled";
import {IconWrapper, Title} from "../textComponents/TextComponents";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
}

export const SectionListSectionHeader = (props: Props) => {
    const { icon, title } = props;

    return (
        <StyledSectionHeaderWrapper>
            {icon && (
                <IconWrapper style={{ marginRight: 16 }}>
                    <Ionicons name={icon} />
                </IconWrapper>
            )}

            <Title size="lg">
                {title}
            </Title>
        </StyledSectionHeaderWrapper>
    );
};
