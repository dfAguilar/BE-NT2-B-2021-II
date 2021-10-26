import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from "expo-constants";


import Contacts from "./utils/contacts";

import { ScrollViewContacts, FlatListContacts } from "./components/ContactComponents";

export default function App() {

  const [contacts, setContacts] = useState(Contacts)

  const [showForm, setShowForm] = useState(false)



  return (
    <View style={styles.container}>

      {
        (showForm) ?
          <View>
            <Text>Mostrar formulario</Text>
          </View>
          :
          <View>
            <TouchableOpacity
              onPress={()=>setShowForm(true)}
            >
              <View style={styles.button}>
                <Text>Agregar Contacto</Text>
              </View>
            </TouchableOpacity>

            <Text>Listado de Contactos ({contacts.length}) elementos</Text>

            {/* <ScrollViewContacts contacts={contacts} /> */}

            <FlatListContacts contacts={contacts} />

            <StatusBar style="auto" />
          </View>
      }



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#8FCFF2'
  }
});
