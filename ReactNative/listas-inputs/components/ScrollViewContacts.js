import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Row from "./Row";


export default ({ contacts }) => (
    <ScrollView>
        {
            contacts.map(contact => <Row key={contact.id} contact={contact} />)
        }
    </ScrollView>
)