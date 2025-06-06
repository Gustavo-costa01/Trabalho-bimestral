import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props{
    title: string,
    onPress: () => void; 
}

export default function Input(){

    const [value, onChangeText] = useState('');

    return(
        <View>



            <TextInput 
            style={Styles.Input}
            placeholder="Digite seu CPF, só pra eu conferir uma coisinha no teu nome"
            value={value}
            onChangeText={onChangeText}
            />
            
        </View>
        
 

    );
}

const Styles = StyleSheet.create({
    Input: {
        color: 'red',
    }
});

