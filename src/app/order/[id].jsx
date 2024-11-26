import { Pressable, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Options } from '../../components/Options';
import { Section } from '../../components/Section';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
 import { comidas, bebidas, tables } from '../../utils/db';
import { useLocalSearchParams } from 'expo-router';
import { NextForm } from '../../components/NextForm';


export default function Order() {
  const {id} = useLocalSearchParams() 
  const [car, setCar] = useState([])
  const [table, setTable] = useState()
  const [componentNext, setComponentNext] = useState(true)

  const handleCliclItems = (item) => {
    setCar((prevCar) => [
      ...prevCar, // mantém as propriedades existentes
        item, // adiciona ou substitui propriedades
    ]);
  }

  const handleCliclNext = () => {
    setComponentNext(false)
  }

  useEffect(() => {
    console.log(car.length)
    const findTable = () => {
        const result = tables.find((item) => item.id === parseInt(id))
        if(!result) return
        setTable(result)
    }
    findTable()
  }, [car])

  return (
    <ScrollView style={styles.container}>
      <View className="flex-col flex-1 w-screen gap-1 mt-4 items-center justify-center">
          <Text className="text-2xl font-bold">Maria</Text>
        <View className="flex-row w-full items-center justify-between px-4">
          <View className="" >
            <Text className=" text-lg font-semibold">Pedido:</Text>
            <Text className="px-4 py-2 bg-orange-700 rounded-md text-white font-bold text-lg text-center">{table?.title}</Text>
          </View>
          <View >
            <Text className=" text-lg font-semibold">Produtos:</Text>
            <Text className="px-4 py-2 bg-orange-700 rounded-md text-white font-bold text-lg text-center">{car.length}</Text>
          </View>

        </View>
      </View>
    {
      componentNext ? (
      <>
        <View className="p-4 w-full">
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
        </View>
        <View className='items-center mb-12'>
          <Pressable 
          onPress={handleCliclNext}
          className=" w-40 h-14 bg-blue-500 rounded-lg items-center justify-center">
            <Text className="text-xl text-white">Proximo</Text>
          </Pressable>

        </View>
      </>

      ) : (
        <NextForm />
      )
    }
    <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff',
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textP: {
    fontSize: 20,
    color:"gray",
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 5
  },
  textM: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: "purple",
    fontSize: 18,
    width: "100",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase"
  }
});
