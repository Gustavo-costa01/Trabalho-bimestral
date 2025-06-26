import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

export default function ImagePickerImproved() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // Android precisa disso (iOS ignora silenciosamente)
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) return Alert.alert('Permissão negada');

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // Só imagens
      allowsEditing: true,
      aspect: [1, 1], // Quadrado
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity 
        onPress={pickImage}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          backgroundColor: image ? 'transparent' : '#eee',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {image ? (
          <Image 
            source={{ uri: image }} 
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <Text>Selecionar foto</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}