import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
    background-color: #ffffff;
    padding: 10px 20px;
    width: 100%;
    border-color: #ddd;
    border-width: 1px;
    border-radius: 20px;
    color: #999;
`;

export const StyledInputRowWrapper = styled.View`
    min-height: 50px;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
    width: 100%;
`;

export const StyledInputWrapper = styled.View`
    width: 100%;
`;

export const StyledEyeBtn = styled.TouchableOpacity`
    z-index: 10,
    position: 'absolute',
    right: 5,
    top: 0,
    width: 20,
    justify-content: 'center',
    height: 50px,
`;


