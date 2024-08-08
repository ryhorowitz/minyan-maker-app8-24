import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function SignInPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const response = await fetch('https://example.com/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      await SecureStore.setItemAsync('jwtToken', data.token);
      navigation.replace('/');
    } else {
      alert('Sign In Failed');
    }
  };

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Go to Login" onPress={() => navigation.navigate('login')} />
    </View>
  );
}
