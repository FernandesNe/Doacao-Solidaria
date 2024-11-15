import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, Alert } from 'react-native';

export default function ProfileScreen() {
  const [user, setUser] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    donations: 1,
    impact: 2,
    photo: 'https://picsum.photos/120',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  
  const handleSave = () => {
    if (!editedName || !editedEmail) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }
    setUser((prev) => ({
      ...prev,
      name: editedName,
      email: editedEmail,
    }));
    setIsEditing(false);
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  };

  
  const handleEdit = () => {
    setEditedName(user.name);
    setEditedEmail(user.email);
    setIsEditing(true);
  };

  return (
    <View style={styles.container}>
      {}
      <Image source={{ uri: user.photo }} style={styles.profileImage} />

      {isEditing ? (
        <View style={styles.editContainer}>
          {}
          <TextInput
            style={styles.input}
            value={editedName}
            onChangeText={setEditedName}
            placeholder="Nome"
          />
          <TextInput
            style={styles.input}
            value={editedEmail}
            onChangeText={setEditedEmail}
            placeholder="E-mail"
            keyboardType="email-address"
          />
          <Button title="Salvar" onPress={handleSave} />
        </View>
      ) : (
        <>
          {}
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>

          {}
          <View style={styles.donationInfo}>
            <Text style={styles.donationText}>
              Doações realizadas: {user.donations}
            </Text>
            <Text style={styles.donationText}>
              Impacto gerado: {user.impact} refeições
            </Text>
          </View>

          {}
          <View style={styles.actions}>
            <Button title="Editar Perfil" onPress={handleEdit} />
          </View>
        </>
      )}

      {}
      <Text style={styles.footerText}>
        Agradecemos sua contribuição! Você está ajudando a transformar vidas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 55,
  
    backgroundColor: '#141a29',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  donationInfo: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
    elevation: 2,
  },
  donationText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  actions: {
    width: '100%',
    marginBottom: 20,
  },
  editContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  footerText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
});

