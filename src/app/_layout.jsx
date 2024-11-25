import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
      name='index' options={{
        headerTitle: "Login",
        headerTintColor: "blue"
      }}
     />

    <Stack.Screen
        name='home' options={{
            headerTitle: "Home",
            headerTintColor: "blue"
        }}
        />
    </Stack>
  )
}

export default _layout