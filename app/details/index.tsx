import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function detalhes(){
    const router =  useRouter()

    return(

        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                 O IMC, ou Índice de Massa Corporal, é uma medida utilizada para avaliar se uma pessoa está com o peso ideal em relação à sua altura.{"\n"}
                 É calculado dividindo o peso (em quilogramas) pela altura (em metros) ao quadrado. O resultado permite classificar o estado nutricional,{"\n"}
                 indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.{"\n"}
                
            </Text>
        <View style={{width: 400, height: 150, borderRadius: 6, overflow: 'hidden', alignSelf: 'center' }}>

            <Button title="Voltar"  onPress={() => {router.push('/about')}}/>

            <Button title="Sobre nós"  onPress={() => {router.push('/details/info')}}/>         
        </View>
        </View>     

    )

    
};






