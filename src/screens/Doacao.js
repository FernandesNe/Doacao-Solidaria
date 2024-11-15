import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native';

export default function Doacao({ navigation }) {
  
  const [tipoAlimento, setTipoAlimento] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [localEscolhido, setLocalEscolhido] = useState('');
  const [doacoes, setDoacoes] = useState([]); 

  const handleRegistrarDoacao = () => {
    if (tipoAlimento && quantidade && localEscolhido) {
      const novaDoacao = { tipoAlimento, quantidade, localEscolhido };
      setDoacoes([...doacoes, novaDoacao]);
      setTipoAlimento('');
      setQuantidade('');
      setLocalEscolhido('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itens em Alta Demanda</Text>
      <Text style={styles.demandItems}>Arroz, Feijão, Leite</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Tipo de Alimento"
        value={tipoAlimento}
        onChangeText={setTipoAlimento} 
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Local de entrega"
        value={localEscolhido} 
        onChangeText={setLocalEscolhido} 
      />

      <Button title="Registrar Doação" onPress={handleRegistrarDoacao} />

      <Text style={styles.subTitle}>Doações Registradas:</Text>
      <FlatList
        data={doacoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.doacaoItem}>
            <Text style={styles.doacaoText}>
              Tipo: {item.tipoAlimento}, Quantidade: {item.quantidade}, Local: {item.localEscolhido}
            </Text>
          </View>
        )}
      />

      {}
      <Text style={styles.finalMessage}>
        Igreja Adventista do 7º Dia
        Endereço: Rua Antonio Dora, 904, Japatã/SE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 55,
    backgroundColor: '#141a29',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  demandItems: {
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10,
  },
  doacaoItem: {
    backgroundColor: '#1f2633',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  doacaoText: {
    color: '#FFFFFF',
  },
  finalMessage: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

