import styled from 'styled-components/native';
import {indents} from "@constants/Typography";
import {ViewProps} from "react-native";
import React from "react";

interface BaseContainerProps extends ViewProps {
    children: React.ReactNode | React.ReactNode[];
}

export const TextContainer = styled.View((props: BaseContainerProps) => ({
    paddingBottom: indents.sm
}))

export const ButtonsContainer = styled.View((props: BaseContainerProps) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: indents.md
}))
