import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Button } from "react-native"

export default ({ guardarContacto, oldcontact }) => {

    const [contact, setContact] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })

    const [validated, setValidated] = useState(false)

    useEffect(() => {
        console.log('valido contact')
        //logica de validacion
        const isValid = (
            (contact.nombre && contact.nombre.length > 3)
            && contact.telefono
            // && functionToValidateNumber(contact.telefono)
        )

        setValidated(isValid)

    }, [contact])

    useEffect(() => {
        console.log('Esta visible el componente')

        return () => {
            console.log('Ya no esta visible el formulario')
        }
        
    }, [])
    

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={'Nombre y Apellido'}
                value={contact.nombre}
                onChangeText={(text) => setContact({ ...contact, nombre: text })}

            />
            <TextInput
                style={styles.input}
                keyboardType={'phone-pad'}
                placeholder={'Telefono'}
                value={contact.telefono}
                onChangeText={(text) => setContact({ ...contact, telefono: text })}
            />
            <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                placeholder={'Email'}
                value={contact.email}
                onChangeText={(text) => setContact({ ...contact, email: text.toLowerCase() })}
            />

            <Button
                title={'Guardar Contacto'}
                onPress={() => guardarContacto(contact)}
                disabled={!validated}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 20,
        minWidth: 20

    }
})