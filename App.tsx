import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  const handleClick = () => {
    alert("Eita! Funcionou!");
  }

  return (
    <View style={styles.container}>
      <Text>Opa, tudo bem?</Text>
      <Button title="Clique aqui" />
      <Pressable onPress={handleClick} style={styles.btn}>
        <Text style={styles.btnText}>Clique aqui</Text>
      </Pressable>
      
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
  btn: {
    width: 200,
    height: 40,
    backgroundColor: '#0000FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});
