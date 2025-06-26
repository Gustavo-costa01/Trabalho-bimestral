import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function about(){

    const router = useRouter();

    return (
        <View>
          <Text>
            Apenas um Exemplo de como usar o Sobre

          </Text>
      <Input
        placeholder="teste"
        keyboardType="default"
        value={valor}
        onChangeText={setValor}
      />

      <Button title="Ver mais" onPress={() => router.push('/details')} />
      </View>        
      
    )
}


