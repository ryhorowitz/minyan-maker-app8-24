import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://example.com/api/signup', { email, password });
      Cookies.set('token', response.data.token);
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Sign Up Failed', error.response.data.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 20, padding: 5 }} />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
