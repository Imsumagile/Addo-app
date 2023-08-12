import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.picContainer}>
        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={() => alert('Back button pressed')}>
          <Image source={require('./backx.png')} style={styles.backImage} />
        </Pressable>

        <View style={styles.titles}>
          <Text style={styles.title}>Programu Ya</Text>
          <Text style={styles.title}>Duka La Dawa</Text>
          <Image source={require('./Doctors.png')} style={styles.image} />
          <View style={styles.sub}>
            <Text style={styles.subtitle}>Fuatilia mauzo, bidhaa, wateja na</Text>
            <Text style={styles.subtitle}>uangalie ripoti kwa urahisi</Text>
            <View style={styles.container}>
              <Pressable style={styles.button} onPress={() => alert('Karibu!')}>
                <Text style={styles.buttonText}>KARIBU </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
