import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import {Options} from '../components/Options'

const Layout = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/login"} >Login</Link>
      <Options title={"Mesa 1"} cor='#12ad1c'/>
    </View>
  )
}

export default Layout