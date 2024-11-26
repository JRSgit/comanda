import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Options } from '../components/Options';
import { Section } from '../components/Section';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
// import Header from '../components/Header';
 import { comidas, bebidas } from '../utils/db';


export default function Order() {
  const [car, setCar] = useState([])

  const handleCliclItems = (item) => {
    setCar((prevCar) => [
      ...prevCar, // mantém as propriedades existentes
        item, // adiciona ou substitui propriedades
    ]);
  }

  useEffect(() => {
    console.log(car.length)
  }, [car])

  return (
    <ScrollView style={styles.container}>
      {/* <Header /> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Section title="Comidas" />
      <View style={styles.options}>
        {comidas && comidas.map((comida) =>
          <Options key={comida.id} title={comida.title} cor={comida.cor} func={() => handleCliclItems(comida)} />
        )}
      </View>

      <Section title="Bebidas" />
      <View style={styles.options}>
        {bebidas && bebidas.map((bebida) =>
          <Options key={bebida.id} title={bebida.title} cor={bebida.cor} func={() => handleCliclItems(bebida)} />
        )}

      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
