import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ({ contact }) => {
    return (
        <TouchableOpacity
            onPress={()=>console.log(contact)}
            onLongPress={()=>console.log(`long press`, contact)}            
        >
            <View style={styles.row}>
                <Text style={styles.text}>{contact.nombre}</Text>
                <Text style={styles.text}>{contact.telefono}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    row: {
        padding: 15
    },
    text: {
        fontSize: 20
    }

})