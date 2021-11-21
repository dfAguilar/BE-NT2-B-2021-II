import React from 'react';
import { FlatList } from 'react-native';

import Row from "./Row";

const renderItem = ({item})=> {
    return <Row contact={item} />
}

export default ({ contacts }) => (
    <FlatList
        data={contacts}
        renderItem={renderItem}
    />
)