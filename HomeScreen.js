import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const Create = () => {
      navigation.navigate('Create')
  }
  const Account = () => {
    navigation.navigate('Account')
  }
  return (
    <View>
       <TouchableOpacity onPress={Create}>
            <View >
                <Text>Создать встречу</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Account}>
          <View>
            <Text>Профиль</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}
