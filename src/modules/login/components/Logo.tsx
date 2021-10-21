import React from 'react';

import {StyledLogo} from "./Logo.styled";
interface LogoProps {
    source: any;
}

export const Logo = (props: LogoProps) => {
    return (
        <StyledLogo source={props.source} />
    )
}
