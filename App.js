import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {

  const [backgroundColor, setBackgroundColor] = useState('#9CF100'); // Cor inicial do background



  const changeBackgroundColor = () => {

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Gera uma cor aleatória em hexadecimal

    setBackgroundColor(randomColor);

  };



  return (

    <View style={[styles.container, { backgroundColor }]}>

      <Text style={styles.text}>Pedro Arthur Pizarro pc 12 armário 02</Text>

      <Text style={styles.text2}>Pedro Arthur Pizarro pc 12 armário 02</Text>

      <StatusBar style="auto" />

      <View style={styles.container2}>

        <Text style={styles.text3}>Clique no botão para personalizar o site:</Text>

        <TouchableOpacity style={styles.button} onPress={changeBackgroundColor}>

          <Text style={styles.buttonText}>Mudar Cor</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    marginTop: 30,

    alignItems: 'left',

    justifyContent: 'left',

  },

  text: {

    border: '5px solid #fff',

    backgroundColor: '#000',

    color: '#fff',

    padding: 10,

    marginBottom: 10,

  },

  text2: {

    marginBottom: 10,

  },

  container2: {

    alignItems: 'center',

  },

  text3: {

    textDecorationLine: 'underline',

    color: '#000',

    fontWeight: '900',

    marginBottom: 10,

  },

  button: {

    backgroundColor: '#3ED500',

    padding: 10,

    borderRadius: 5,

  },

  buttonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

});
