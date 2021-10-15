import * as React from 'react';
import {ProfileListItem} from "./ProfileListItem";
import {ProfileListItemClear} from "./ProfileListItemClear";
import {SectionListData, SectionListRenderItemInfo} from "react-native";
import {ProfileData, ProfileDataItem} from "../../mock/profileData";
import {StyledItemSeparator, StyledSectionList} from '@app/core/components/SectionList/SectionList.styled';
import {SectionListSectionHeader} from "@components/SectionList/SectionListSectionHeader";

interface ProfileListProps {
    data: ProfileData[];
    inputHandler: (key: string) => (value: string) => void,
    values: Record<string, any>
}

const ProfileList = (props: ProfileListProps) => {

    const {data, inputHandler, values} = props;

    return (
        <StyledSectionList
            sections={data}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={StyledItemSeparator}
            bounces={true}
            onEndReachedThreshold={0.5}
            keyExtractor={(el: { key: string }) => el.key}
            renderItem={(props: SectionListRenderItemInfo<ProfileDataItem>) => {
                const isFirstElement = props.index === 0;
                const isLastElement = props.index === props.section.data.length - 1;

                if (props.item.input.type === 'imagepicker') {
                        return <ProfileListItemClear item={props.item} inputHandler={inputHandler} value={values[props.item.key]} />
                }
                return <ProfileListItem
                    item={props.item}
                    inputHandler={inputHandler}
                    value={values[props.item.key]}
                    isFirstElement={isFirstElement}
                    isLastElement={isLastElement}
                />
            }}
            renderSectionHeader={({ section }: {section: SectionListData<any>}) => {
                const {hidden, title, icon} = section;
                return !hidden ? (
                    <SectionListSectionHeader icon={icon} title={title} />
                ) : null;
            }}
        />
    )
}

export default ProfileList;
