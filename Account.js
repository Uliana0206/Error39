import React, {useEffect, useState} from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import {firebase} from '../firebase';

export default function Account({ navigation }) {
    const [name, setName] = useState([]);

  const Mine = () => {
      navigation.navigate('Mine')
  }
  const Scheduled = () => {
    navigation.navigate('Scheduled')
  }

  useEffect(() => {
    firebase.firestore().collection("user")
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
        if(snapshot.exists){
            setName(snapshot.data()) 
        }
    else {
        console.log('does not exist')
    }
    })
}, [])

  return (
    <View>

         <Text>
                {name.firsName} {name.lastName}</Text>

        <TouchableOpacity onPress={Mine}>
            <View>
                <Text>Мои встречи</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Scheduled}>
            <View>
                <Text>Запланированные встречи</Text>
            </View>
        </TouchableOpacity>
       <TouchableOpacity>
            <View >
                <Text onPress={() => {firebase.auth().signOut()}}>Выход</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}
