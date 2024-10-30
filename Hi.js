import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Hi({ navigation }) {
    const loadSceneVhod = () => {
        navigation.navigate('Login')
    }

    return (

      <View>
        <TouchableOpacity>
            <View >
                <Text onPress={loadSceneVhod}>Войти</Text>
            </View>
        </TouchableOpacity>
    </View>
    
    );
}