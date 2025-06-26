import Input from "@/components/Input";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function homeScreen(){

    const [valor, setValor] = useState('');
    const router = useRouter();

    return (
        <View>
          <Text>
            Apenas um Exemplo de como usar o input
          </Text>
      <Input
        placeholder="teste"
        keyboardType="default"
        value={valor}
        onChangeText={setValor}
      />


      <Button title="Ver mais" onPress={() => router.push('/')} />
      </View>
        

        
      
    )
}


