import styled from 'styled-components/native';
import {indents} from "@constants/Typography";

interface Props {
    indent: keyof typeof indents;
}

export const StyledFieldWrapper = styled.View((props: Props) => ({
    marginTop: indents[props.indent]
}))
