import { View, Text, TextInput, TouchableOpacity, Keyboard, SafeAreaView, ScrollView} from "react-native";
import React, {useState, useEffect} from "react";
import { firebase } from "../firebase";
import { gStyle } from "../gStyles";


const Create = () => {
  const todoRef = firebase.firestore().collection('todos');
  const todoRef1 = firebase.firestore().collection('Mine');
  const [addData, setaddData ] = useState('');
  const [FIO, setFIO] = useState('');
  const [Dolg, setDolg] = useState('');
  const [Komp, setKomp] = useState('');
  const [Sphere, setSphere] = useState('');
  const [Opis, setOpis] = useState('');
  const [Site, setSite] = useState('');
  const [Telephone, setTelephone] = useState('');
  const [TG, setTG] = useState('');



  const addField = () => {
    if (addData && addData.length > 0 ){
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        FIO: FIO,
        Dolg: Dolg,
        Komp: Komp,
        Sphere: Sphere,
        Opis: Opis,
        Site: Site,
        Telephone: Telephone,
        TG: TG,
        Time: addData,
        createdAt: timestamp
      };
      todoRef
        .add(data)
        .then(() => {
          setaddData('');
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);

        })
        todoRef1
        .add(data)
        .then(() => {
          setaddData('');
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);

        })
    }
  }

  return (
    <View style={gStyle.main}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="ФИО"
            onChangeText={(FIO) => setFIO(FIO)}
            autoCorrect={false}
            />
          </View>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="Должность"
            onChangeText={(Dolg) => setDolg(Dolg)}
            autoCorrect={false}
            />
          </View>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="Компания"
            onChangeText={(Komp) => setKomp(Komp)}
            autoCorrect={false}
            />
          </View>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="Сфера"
            onChangeText={(Sphere) => setSphere(Sphere)}
            autoCorrect={false}
            />
          </View>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="Описание"
            onChangeText={(Opis) => setOpis(Opis)}
            autoCorrect={false}
            multiline = {true}
            />
          </View>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="Сайт"
            onChangeText={(Site) => setSite(Site)}
            autoCorrect={false}
            />
          </View>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="Телефон"
            onChangeText={(Telephone) => setTelephone(Telephone)}
            autoCorrect={false}
            />
          </View>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="Телеграм"
            onChangeText={(TG) => setTG(TG)}
            autoCorrect={false}
            />
          </View>
          <View>
            <TextInput style={gStyle.pole}
            placeholder="Дата и время"
            onChangeText={(addData) => setaddData(addData)}
            autoCorrect={false}
            />
          </View>
          <TouchableOpacity onPress={addField} style={gStyle.button}>
            <Text style={gStyle.textbutton}>Создать</Text>
          </TouchableOpacity>
        </ScrollView>
        
      </SafeAreaView>
      
    </View>
  )
}

export default Create
