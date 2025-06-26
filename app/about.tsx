import { useRouter } from "expo-router";
import React from "react";
import { Button, Image, Text, View } from "react-native";

export default function about() {
  

  const router = useRouter();

  return (
            <View>

          <Image style={{alignSelf: 'center', height: 400, width: 700, maxHeight: '80%', maxWidth: '90%'}} source={require("@/assets/images/IMC.png")}/>
          <Text style={{textAlign: 'center'}}>
            IMC, O índice de massa corporal,
            {"\n"}parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa

          </Text>


      <View style={{width: 500, height: 250, borderRadius: 6, overflow: 'hidden', alignSelf: 'center' }}>
              <Button title="Ver mais" onPress={() => router.push('/details')} />
      </View>
      </View>

  )
}


