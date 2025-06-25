import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
 
const ProfileImage = () => {
  const [image, setImage] = useState<string | null>(null);
 
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
 
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
 
  return (
<View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
<Button title="Selecionar Imagem" onPress={pickImage} />
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
});
 
export default ProfileImage;