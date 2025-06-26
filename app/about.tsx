import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function about() {

  const router = useRouter();

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
    

      <Button title="Ver mais" onPress={() => router.push('/details')} />
    </View>

  )
}


