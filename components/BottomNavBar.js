import { View } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function BottomNavBar() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1 }}>
      <Link href="/" asChild>
        <FontAwesome name="home" size={24} />
      </Link>
      <Link href="/settings" asChild>
        <FontAwesome name="cog" size={24} />
      </Link>
    </View>
  );
}
