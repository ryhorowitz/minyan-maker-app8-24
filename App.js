import 'expo-router/entry';

import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { CookieManager } from '@react-native-cookies/cookies';

import BottomNavBar from './components/BottomNavBar';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const jwtToken = await SecureStore.getItemAsync('jwtToken');
        if (jwtToken) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated && <BottomNavBar />}
    </View>
  );
}
