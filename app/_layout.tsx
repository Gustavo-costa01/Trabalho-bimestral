import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";


export default function Layout() {
  return(
    <Tabs screenOptions={{tabBarActiveTintColor: 'dark blue'}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({color, size}) => <Ionicons name="cafe-outline" size={size} color={color}></Ionicons>
        }}
      />
        <Tabs.Screen
        name="imc"
        options={{
          title: "IMC",
          tabBarIcon: ({color, size}) => <Ionicons name="calculator-outline" size={size} color={color}></Ionicons>
        }}
      />
        <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" size={size} color={color}></Ionicons>
        }}
      />
    </Tabs>
    
    
  );
}