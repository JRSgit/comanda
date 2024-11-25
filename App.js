import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import Options from './src/components/Options';
import Header from './src/components/Header';
import Section from './src/components/Section';



export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Section title="Comidas" />
      <View style={styles.options}>
        <Options  title="Quentinha" cor="#2825aa" />
        <Options  title="Comercial" cor="#2825aa" />
        <Options  title="Prato Feito" cor="#2825aa" />
        <Options  title="Da Casa" cor="#23456a" />
      </View>

      <Section title="Bebidas" />
      <View style={styles.options}>
        <Options  title="Hinnek" cor="#2825aa" />
        <Options  title="Devaça" cor="#2825aa" />
        <Options  title="Coca Cola" cor="#23456a" />
        <Options  title="Agua" cor="#2825aa" />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  }
});
