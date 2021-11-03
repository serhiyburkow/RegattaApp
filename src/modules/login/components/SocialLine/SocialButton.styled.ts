import styled from 'styled-components/native';
import {Colors} from "@constants/Colors";

interface Props {
    color: Colors
}

export const SocialButton = styled.Pressable((props: Props) => ({
    width: 32,
    height: 32,
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: props.color,
    marginHorizontal: 10
}))
