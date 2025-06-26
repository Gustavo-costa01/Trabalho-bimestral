import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);

  const pegarImagem = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) return Alert.alert('Permissão negada');

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], 
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity 
        onPress={pegarImagem}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          borderWidth: 2,
          borderColor: '#4a90e@',
          backgroundColor: image ? 'transparent' : '#eee',
          justifyContent: 'center',
          alignItems: 'flex-start',
          overflow: 'hidden',
          
        }}
      >
        {image ? (
          <Image 
            source={{ uri: image }} 
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <Text style={{alignSelf: 'center'}} >Selecionar foto</Text>
          
        )}
      </TouchableOpacity>
    </View>
  );
}