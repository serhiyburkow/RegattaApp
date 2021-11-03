import * as React from 'react';

import { ItemWrapper, LabelWrapper, InputWrapper } from './ProfileList.styled';
import { RegularText } from "@components/textComponents/TextComponents";
import { ProfileDataItem } from "../../mock/profileData";
import TextInput from "@components/inputs/TextInput";

interface Props {
    item: ProfileDataItem;
    inputHandler: (key: string) => (value: string) => void;
    value?: string;
    isFirstElement?: boolean;
    isLastElement?: boolean;
}

const  getInputComponent = (props: Props) => {
    const {item, inputHandler, value = ""} = props;
    switch (item.input.type) {
        default:
            return <TextInput
                onChange={inputHandler(item.key)}
                value={value}
                placeholder={`Enter your ${item.title}...`}
            />
    }
}

export const ProfileListItem = (props: Props) => {

    const {
        item,
        inputHandler = () => () => null,
        value
    } = props;

    return (
        <ItemWrapper {...props}>
            <LabelWrapper>
                <RegularText numberOfLines={1} size="md">
                    {item.title}
                </RegularText>
            </LabelWrapper>
            <InputWrapper>
                { getInputComponent({item, inputHandler, value}) }
            </InputWrapper>
        </ItemWrapper>
    );
};
