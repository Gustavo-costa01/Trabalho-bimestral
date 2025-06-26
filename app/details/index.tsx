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
            <Button title="Mais informações"  onPress={() => {router.push('/details/info')}}/>

            <Button title="Voltar" onPress={() => {router.push('/about')}}/>



        </View>


    )
}