import { View, Text, Pressable, Image, Button } from 'react-native'

import banner from '../../../assets/restauranteda.png'
import { StatusBar } from 'expo-status-bar'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import Modal from '../../components/Modal'
import ModalView from '../../components/Modal'

const SiginupClient = () => {
  const [isVisible, setIsVisible] = useState(false)

  const modalIsVisible = () => {
    setIsVisible(true);
  };
  const modalOnClose = () => {
    setIsVisible(false)
  }

  return (
    <View className=" w-full justify-center items-center bg-white ">
      <Image source={banner} className="w-full h-[220px] object-fill z-10 " />

      <View className="mt-[-30px] z-20 bg-white  rounded-t-[40px] items-center relative">
        <Feather
          onPress={() => router.back()}
          name="arrow-left" size={30} color="slate" className="absolute top-4 z-30 left-5 " />
        <View className="w-[125px] h-[125px] rounded-full bg-white/90 top-[-40px]">
          <Text className="text-2xl text-center mt-4 p-4 text-blue-600 font-bold">Cadastrar</Text>

        </View>

        <View className="flex-row flex-wrap gap-4 mb-10 items-center  justify-center px-6 ">
          <Pressable className="px-4 py-2 bg-green-500 rounded-full shadow-slate-900 sha">
            <Text className="text-2xl text-white">Mesa</Text>
          </Pressable>

          <Pressable className="px-4 py-2 bg-blue-500 rounded-full shadow-slate-900 sha">
            <Text className="text-2xl text-white">Comida</Text>
          </Pressable>

          <Pressable className="px-4 py-2 bg-orange-500 rounded-full shadow-slate-900 sha">
            <Text className="text-2xl text-white">Bebida</Text>
          </Pressable>

          <Pressable className="px-4 py-2 bg-yellow-500 rounded-full shadow-slate-900 sha">
            <Text className="text-2xl text-white">Colaborador(a)</Text>
          </Pressable>

          <Pressable className="px-4 py-2 bg-red-500 rounded-full shadow-slate-900 sha">
            <Text className="text-2xl text-white">Empresa</Text>
          </Pressable>
        </View>

        <Button title='Modal' onPress={modalIsVisible} />
        <ModalView isVisible={isVisible} onClose={modalOnClose}></ModalView>
      </View>
      <StatusBar style='light' />
    </View>
  )
}

export default SiginupClient