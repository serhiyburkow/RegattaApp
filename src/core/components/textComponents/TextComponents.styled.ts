import {fontFamilies, Sizes, fontSizes, FontType, lineHeights, indents} from "@constants/Typography";
import styled, {DefaultTheme} from "styled-components/native";
import {Colors} from "@constants/Colors";

export interface StyledCustomText {
    theme: DefaultTheme,
    size: Sizes;
    fontType: FontType;
    fontColor: Colors;
    align: 'start' | 'center' | 'end',
    marginLeft: typeof indents,
    marginRight: typeof indents,
    marginTop: typeof indents,
    marginBottom: typeof indents,
}

export const StyledCustomText = styled.Text((props: StyledCustomText) => ({
    color: props.theme.colors[props.fontColor], // change to fontColor
    fontSize: fontSizes[props.size],
    lineHeight: lineHeights[props.size],
    fontFamily: fontFamilies[props.fontType],
    textAlign: props.align
}));

export const IconWrapper = styled.View.attrs<StyledCustomText>(() => ({
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0'
})) ((props: StyledCustomText) => ({
    padding: props.theme.icon.wrapper.padding,
    borderRadius: props.theme.icon.wrapper.radius,
    backgroundColor: props.theme.colors.secondary,
    textAlign: props.align,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
}))
