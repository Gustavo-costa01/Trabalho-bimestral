import Input from "@/components/Input";
import React, { useState } from "react";
import { Text, View } from "react-native";





export default function homeScreen(){

    const [valor, setValor] = useState('');
  
    return (
        <View>
          <Text>
            Apenas um Exemplo de como usar o input
          </Text>
      <Input
        placeholder="Exemplo do Input"
        keyboardType="default"
        value={valor}
        onChangeText={setValor}
      />
      </View>
        

        
      
    )
}


