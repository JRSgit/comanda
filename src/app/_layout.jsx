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

export default function  Layout  () {
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
        
        }}
      />

      <Stack.Screen
        name='order/[id]' options={{
          headerTitle: "Pedido",
          headerTintColor: "blue",
          // headerShown: false
        }}
      />
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