import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, onChangeText] = useState("Write something to hear!");

  const speak = () => {
    const thingToSay = text;
    Speech.speak(thingToSay);
  };


  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button title="Press to hear text" onPress={speak} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
  
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
