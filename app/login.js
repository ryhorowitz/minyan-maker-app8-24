import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('https://example.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      await SecureStore.setItemAsync('jwtToken', data.token);
      navigation.replace('/');
    } else {
      alert('Login Failed');
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Sign In" onPress={() => navigation.navigate('signin')} />
    </View>
  );
}
