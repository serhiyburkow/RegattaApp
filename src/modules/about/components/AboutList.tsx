import * as React from 'react';
import {AboutListItem} from "./AboutListItem";
import {SectionListData, SectionListRenderItemInfo} from "react-native";
import {StyledItemSeparator, StyledSectionList} from '@app/core/components/SectionList/SectionList.styled';
import {SectionListSectionHeader} from "@components/SectionList/SectionListSectionHeader";

interface AboutListProps {
    data: Record<string, any>[];
}

const AboutList = (props: AboutListProps) => {
    const {data} = props;
    return (
        <StyledSectionList
            sections={data}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={StyledItemSeparator}
            bounces={true}
            onEndReachedThreshold={0.5}
            keyExtractor={(el: { key: string }) => el.key}
            renderItem={(props: SectionListRenderItemInfo<any>) => {
                const isFirstElement = props.index === 0;
                const isLastElement = props.index === props.section.data.length - 1;

                return (
                    <AboutListItem
                        item={props.item}
                        isFirstElement={isFirstElement}
                        isLastElement={isLastElement}
                    />
                );
            }}
            renderSectionHeader={({ section }: {section: SectionListData<any>}) => {
                const {hidden, title, icon} = section;
                return !hidden ? (
                    <SectionListSectionHeader icon={icon} title={title} />
                ) : null;
            }}
        />
    );
};

export default AboutList;
