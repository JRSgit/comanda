import '../styles/global.css'
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const img = require('../../assets/logoWhite.png')

function LogoTitle() {
  return (
    <Image style={styles.image} source={img} />
  )
}

<<<<<<< HEAD
export default function Layout() {
=======
export default function  Layout  () {
>>>>>>> 87629254baf30dde2b8276eb33a5047d2363ecc6
  return (
    <Stack>
      <Stack.Screen
        name='index' options={{
          headerTitle: "Login",
          headerTintColor: "blue",
          headerShown: false
        }}
      />

      <Stack.Screen
        name='home' options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerTintColor: "blue",
<<<<<<< HEAD

        }}
      />

      <Stack.Screen
        name='order/[id]' options={{
          headerTitle: "Pedido",
          headerTintColor: "blue",
          // headerShown: false
        }}
      />

      <Stack.Screen
        name='cadastro/index' options={{
          headerTitle: "Cadastro",
          headerTintColor: "blue",
          headerShown: false
        }}
      />

      <Stack.Screen
        name='modal' options={{
          presentation: 'modal',
        }}
      />

=======
        
        }}
      />

      <Stack.Screen
        name='order/[id]' options={{
          headerTitle: "Pedido",
          headerTintColor: "blue",
          // headerShown: false
        }}
      />
>>>>>>> 87629254baf30dde2b8276eb33a5047d2363ecc6
      <StatusBar style='auto' />
    </Stack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});