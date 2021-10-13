import {fontFamilies, Sizes, fontSizes, FontType, lineHeights} from "../../../constants/Typography";
import {FontColor} from "../../../config/theme";
import styled from "styled-components/native";

export interface StyledCustomText {
    size: Sizes;
    fontType: FontType;
    fontColor: FontColor;
}

type FontSizesType = keyof typeof fontSizes;
type FontFamiliesType = keyof typeof fontFamilies;

export const StyledCustomText = styled.Text<StyledCustomText>`
    color: ${(props: { size: FontSizesType }) =>  fontSizes[props.size]};
    font-size: ${(props: { size: FontSizesType }) => fontSizes[props.size]};
    line-height: ${(props: { size: FontSizesType }) => lineHeights[props.size]};
    font-family: ${(props: {fontType: FontFamiliesType}) => fontFamilies[props.fontType]};
`;

export const StyledIconWrapper = styled.View`
  padding: ${({ theme }: any) => theme.icon.wrapper.padding};
  border-radius: ${({ theme }: any) => theme.icon.wrapper.radius};
  background-color: ${({ theme }: any) => theme.colors.secondary};
`;
