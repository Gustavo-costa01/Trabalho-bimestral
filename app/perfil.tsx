import { useState, useRef } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
     
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />

      
      <TouchableOpacity onPress={handleClick}>
        {imagePreview ? (
          <Image
            source={{ uri: imagePreview }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 2,
              borderColor: '#4a90e2',
              resizeMode: 'cover',
            }}
          />
        ) : (
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 2,
              borderColor: '#ccc',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Text style={{ color: '#999' }}>Clique para adicionar</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
