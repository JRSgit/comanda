<<<<<<< HEAD
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native'
import { format } from 'date-fns'
=======
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
>>>>>>> 87629254baf30dde2b8276eb33a5047d2363ecc6
import { Link, router } from 'expo-router'

import { Options } from '../components/Options'
import { Section } from '../components/Section'

import { tables } from '../utils/db'
import { StatusBar } from 'expo-status-bar'



const Layout = () => {

<<<<<<< HEAD
  const date = format(new Date(), "dd/MM/yyyy")

  const handleCliclHome = () => {
    router.push('cadastro')
  }


=======
>>>>>>> 87629254baf30dde2b8276eb33a5047d2363ecc6
  const handleCliclTable = (id) => {
    // alert("Mesa " + id)
    router.push(`order/${id}`)
  }
  return (
    <ScrollView>
      <View >
        <Image
          style={styles.image}
          source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Ffood.jpg&f=1&nofb=1&ipt=431c3a58455497a4f8e6b7bf429f49d99897eb2952a0e9e444125e90d5095215&ipo=images" }}
        />
        <Text style={styles.textTitle}>Home</Text>
      </View>
      <View style={styles.information}>
<<<<<<< HEAD
        <Text className="text-lg">Maria José</Text>
        <Text>{date}</Text>
=======
        <Text>Maria José</Text>
        <Text>25/11/24</Text>
>>>>>>> 87629254baf30dde2b8276eb33a5047d2363ecc6
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <Section title="Novo Pedido" />
        <View style={styles.optionContainer}>
          {tables && tables.map((table) =>
            <Options key={table.id} title={table.title} cor={table.cor} func={() => handleCliclTable(table.id)} />

          )}
        </View>

      </View>
<<<<<<< HEAD

      <View className="w-full flex-row items-center justify-center mb-10">
        <Pressable
          onPress={handleCliclHome}
          className=" rounded-xl p-4 mt-4 items-center flex justify-center bg-blue-500">
          <Text className="text-center text-white text-lg">Cadastrar Mesa | Empresa | Comida | Bebida</Text>
        </Pressable>

      </View>
      <StatusBar style='auto' />
=======
    <StatusBar style='auto' />
>>>>>>> 87629254baf30dde2b8276eb33a5047d2363ecc6
    </ScrollView>
  )
}

export default Layout

const styles = StyleSheet.create({
  optionContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 4,
    padding: 4,
    justifyContent: "center",
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
    position: 'relative'

  },
  textTitle: {
    position: 'absolute',
    color: 'white',
    top: '30%',
    left: '35%',
    fontSize: 45,
    fontWeight: 'bold'
  },
  information: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})