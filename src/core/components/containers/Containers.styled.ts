import styled from 'styled-components/native';
import * as ReactNative from 'react-native';

export const BasePage = styled(ReactNative.Animated.View)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }: any) => theme.general.backgroundColor};
  padding: ${(props: any) => props.padded ? '20px' : 0};
`;

export const StyledBaseScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }: any) => theme.general.backgroundColor};
`;


