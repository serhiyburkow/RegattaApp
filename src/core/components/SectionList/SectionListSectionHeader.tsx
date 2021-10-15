import * as React from 'react';
import {StyledSectionHeaderWrapper} from "./SectionList.styled";
import {Title} from "../textComponents/TextComponents";
import Ionicons from "@expo/vector-icons/Ionicons";
import {indents} from "@constants/Typography";
import { IconWrapper } from '../textComponents/TextComponents.styled';

interface Props {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
}

export const SectionListSectionHeader = (props: Props) => {
    const { icon, title } = props;

    return (
        <StyledSectionHeaderWrapper>
            {icon && (
                <IconWrapper marginRight={indents.sm}>
                    <Ionicons name={icon} />
                </IconWrapper>
            )}

            <Title size="lg">
                {title}
            </Title>
        </StyledSectionHeaderWrapper>
    );
};
