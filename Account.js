import React, {useEffect, useState} from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import {firebase} from '../firebase';
import { gStyle } from "../gStyles";

export default function Account({ navigation }) {
    const [name, setName] = useState([]);

  const Mine = () => {
      navigation.navigate('Mine')
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
    <View style={gStyle.main}>

         <Text style={{color: '#EB9684', alignSelf: 'center'}}>
                {name.firsName} {name.lastName}</Text>

        <TouchableOpacity onPress={Mine} style={{backgroundColor: '#e35032',
        marginTop:"10%",
        marginHorizontal: '15%',
        paddingVertical: 10,
        borderRadius: 25}}>
            <View>
                <Text style={gStyle.textbutton}>Мои встречи</Text>
            </View>
        </TouchableOpacity>
       <TouchableOpacity onPress={() => {firebase.auth().signOut()}} style={gStyle.button}>
            <View >
                <Text style={gStyle.textbutton}>Выход</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}
