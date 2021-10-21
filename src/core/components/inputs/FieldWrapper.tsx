import React from 'react';

import {indents} from "@constants/Typography";
import {ScrollViewProps} from "react-native";
import { StyledFieldWrapper } from './FieldWrapper.styled';

interface FieldWrapperProps extends ScrollViewProps {
    children: React.ReactNode | React.ReactNode[];
    indent?: keyof typeof indents;
}

export const FieldWrapper = (props: FieldWrapperProps) => {
    const { children, indent = 'md', ...rest } = props;

    return <StyledFieldWrapper indent={indent} {...rest}>{children}</StyledFieldWrapper>;
};
