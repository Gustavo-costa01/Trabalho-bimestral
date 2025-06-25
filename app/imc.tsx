import { calcularIMC } from '@/components/calcularIMC';
import Input from '@/components/Input';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const IMC = () => {
    const resultadoIMC = calcularIMC(peso, altura);

    if (resultadoIMC.length === 1) {
      setResultado(resultadoIMC[0]); 
    } else {
      const [valorIMC, classificacao] = resultadoIMC;
      setResultado(`Seu IMC: ${valorIMC.toFixed(2)} (${classificacao})`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      
      <Input
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Input
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={IMC} />

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});