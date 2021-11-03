import * as React from 'react';

import { ProfileDataItem } from "../../mock/profileData";
import ImagePicker from "../ImagePicker/ImagePicker";

interface Props {
    item: ProfileDataItem;
    inputHandler: (key: string) => (value: string) => void,
    value?: any
}

export const ProfileListItemClear = (props: Props) => {

    const {
        item,
        inputHandler = () => () => null,
        value
    } = props;

    return <ImagePicker imageHandler={inputHandler(item.key)} value={value} />;
};
