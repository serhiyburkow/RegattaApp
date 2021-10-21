import React from 'react';
import {StyledBaseScroll} from "@components/containers/Containers.styled";
import {ScrollViewProps} from "react-native";

interface BaseScrollProps extends ScrollViewProps {
    children: React.ReactNode | React.ReactNode[];
}
export const BaseScroll = (props: BaseScrollProps) => {
    return (
        <StyledBaseScroll
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{ padding: 16 }}
            {...props}>
            {props.children}
        </StyledBaseScroll>
    );
};
