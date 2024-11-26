import { View, Text, TextInput, SectionList, Pressable, Touchable } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

export const NextForm = () => {
    const [selectedValue, setSelectedValue] = useState()

    const formPayment = [
        {
            id: 1,
            label: "Pix",
            value: "pix",
        },
        {
            id: 2,
            label: "Cartão",
            value: "cartao",
        },
        {
            id: 3,
            label: "Ticket",
            value: "ticket",
        },
        {
            id: 4,
            label: "Dinheiro",
            value: "dinheiro",
        },
    ]

  return (
    <View className="gap-4 w-screen px-4">
      <Text className="text-center text-2xl text-gray-400">Finalizar Pedido</Text>
      <TextInput
      multiline={true}
      numberOfLines={10} 
      keyboardType='default'
      className=" w-full h-16 border rounded-md border-gray-400"
      placeholder='Escreva mais informações sobre o pedido!' />
      <Picker 
        style={{borderColor: 'gray'}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        selectedValue={selectedValue}
        >
            {formPayment.map((payment) => (
                <Picker.Item label={payment.label} value={payment.value} />
            ))}
        </Picker>
        
        <View className="items-center justify-center mt-10">
            <Pressable className="w-46 rounded-lg h-12 bg-orange-500 px-4 flex items-center justify-center">
                <Text className=" text-white text-xl font-bold">Finalizar Pedido!</Text>
            </Pressable>
        </View>
    </View>
  )
}
