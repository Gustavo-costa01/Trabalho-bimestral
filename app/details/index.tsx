import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function detalhes(){
    const router =  useRouter()
    return(
        <View>

            <Text>
                    APenas um teste maroto, legal
                    
            </Text>
            <Button title="Ir para o TESTE"  onPress={() => {router.push('/details/info/teste')}}/>

            <Button title="Voltar" onPress={() => {router.push('/about')}}/>



        </View>


    )
}