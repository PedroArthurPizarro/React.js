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
        <Text style={styles.text4}>
          As cores desempenham um papel fundamental em nossas vidas, influenciando nossas emoções, percepções e até mesmo nossas decisões. Desde os primórdios da humanidade, as cores têm sido utilizadas para expressar significados culturais, transmitir mensagens e criar ambientes específicos. Na psicologia das cores, diferentes tons são associados a diferentes estados de espírito: o azul transmite tranquilidade, o vermelho evoca paixão e energia, o verde representa harmonia e o amarelo sugere otimismo.
        </Text>
        <Text style={styles.text4}>
          Além de seu impacto psicológico, as cores desempenham um papel importante no design gráfico, na publicidade, na moda e até mesmo na arquitetura. A escolha das cores certas pode atrair a atenção, transmitir uma mensagem específica e criar uma identidade visual única. No marketing, por exemplo, as marcas muitas vezes utilizam cores específicas em seus logotipos para criar associações positivas com seus produtos ou serviços.
        </Text>
        <Text style={styles.text4}>
          Na natureza, as cores desempenham um papel vital na sobrevivência e na reprodução de muitas espécies. Animais desenvolveram padrões de cores específicos para camuflagem, comunicação e advertência. Plantas utilizam cores brilhantes para atrair polinizadores e se defender de predadores.
        </Text>
        <Text style={styles.text4}>
          Em resumo, as cores são muito mais do que apenas estímulos visuais; elas são uma parte intrínseca de nossa experiência humana e desempenham um papel multifacetado em nossa vida cotidiana. Seja na arte, na ciência ou na cultura, as cores continuam a inspirar e fascinar, refletindo a riqueza e a diversidade do mundo ao nosso redor.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 10,
    alignItems: 'left',
    justifyContent: 'left',
  },
  text: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#000',
    color: '#fff',
    
  },
  text2: {
    marginBottom: 50,
  },
  container2: {
    alignItems: 'center',
  },
  text3: {
    textDecorationLine: 'underline',
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,

  },
  button: {
    backgroundColor: '#3ED500',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text4: {
    textAlign: 'justify',
    marginHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});
