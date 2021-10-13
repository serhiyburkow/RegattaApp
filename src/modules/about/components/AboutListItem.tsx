import * as React from 'react';

import { StyledAboutListItemWrapper } from './AboutList.styled';
import {RegularText} from "../../../core/components/textComponents/TextComponents";
import {AboutDataItem} from "../constants/constants";

interface Props {
    item: AboutDataItem;
    isFirstElement?: boolean;
    isLastElement?: boolean;
}

export const AboutListItem = (props: Props) => {

    return (
        <StyledAboutListItemWrapper
            {...props}
            activeOpacity={1}
            onPress={props.item.action}
        >
            <RegularText numberOfLines={1} size="m">
                {props.item.title}
            </RegularText>
        </StyledAboutListItemWrapper>
    );
};
