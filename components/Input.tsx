import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {

}

export default function Input({ style, ...props }: Props) {
  return (
    <TextInput 
      style={[styles.input, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    fontSize: 16,
    maxWidth: '60%',
    color: "#333",
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center'
  },
});