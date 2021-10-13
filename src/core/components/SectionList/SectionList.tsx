import React, {ComponentClass} from "react";
import {SectionListData} from "react-native";
import {StyledItemSeparator, StyledSectionList} from "./SectionList.styled";
import {SectionListSectionHeader} from "./SectionListSectionHeader";

interface SectionListProps {
    data: any;
    ItemSeparator?: ComponentClass;
    itemRenderer?: any;
    headerRenderer?: any;
}

const SectionList = (props: SectionListProps) => {

    const defaultHeaderRenderer = ({ section }: {section: SectionListData<any>}) => {
        const {hidden, title, icon} = section;
        return !hidden ? (
            <SectionListSectionHeader icon={icon} title={title} />
        ) : null;
    }

    const {
        data,
        ItemSeparator = StyledItemSeparator,
        itemRenderer,
        headerRenderer = defaultHeaderRenderer,
    } = props;

    return(
        <StyledSectionList
            sections={data}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
            bounces={true}
            onEndReachedThreshold={0.5}
            keyExtractor={(el: { key: any; }) => el.key}
            renderItem={itemRenderer}
            renderSectionHeader={headerRenderer}
        />
    )
}

export default SectionList;
