import {fontFamilies, Sizes, fontSizes, FontType, lineHeights} from "@constants/Typography";
import styled, {DefaultTheme} from "styled-components/native";
import {Colors} from "@constants/Colors";

export interface StyledCustomText {
    theme: DefaultTheme,
    size: Sizes;
    fontType: FontType;
    fontColor: Colors;
}

export const StyledCustomText = styled.Text((props: StyledCustomText) => ({
    color: props.theme.general.textColor, // change to fontColor
    fontSize: fontSizes[props.size],
    lineHeight: lineHeights[props.size],
    fontFamily: fontFamilies[props.fontType]
}));

export const StyledIconWrapper = styled.View<StyledCustomText>((props: StyledCustomText) => ({
    padding: props.theme.icon.wrapper.padding,
    borderRadius: props.theme.icon.wrapper.radius,
    backgroundColor: props.theme.colors.secondary
}))
