import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Doe Alimentos, Compartilhe Esperança</Text>
      <Image source={require('../../assets/Banes/bane2.jpg')} style={styles.banner} />
      <Image source={require('../../assets/Banes/bane3.jpg')} style={styles.banner} />
      <Image source={require('../../assets/Banes/bane4.jpg')} style={styles.banner} />
      <Image source={require('../../assets/Banes/bane5.jpg')} style={styles.banner} />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Doar')} 
          accessible={true} 
          accessibilityLabel="Doar alimentos"
        >
          <Text style={styles.buttonText}>Doar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Perfil')} 
          accessible={true} 
          accessibilityLabel="Perfil"
        >
          <Text style={styles.buttonText}>Perfil</Text>

        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#141a29',
    paddingVertical: 20,
    paddingTop: 80, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  banner: {
    width: width * 0.9,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

