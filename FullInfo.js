import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Keyboard, TextInput, SafeAreaView, Pressable} from "react-native";
import { firebase } from "../firebase";
import { useRoute } from "@react-navigation/native";
import { gStyle } from "../gStyles";
import { TouchableOpacity } from "react-native";

const todoRef = firebase.firestore().collection("Tables");

export default function FullInfo() {
  const todoRef = firebase.firestore().collection("todos");
  const todoRef2 = firebase.firestore().collection('Mine');
  const item = useRoute().params;

  const [addData, setaddData ] = useState('');
  const [FIO, setFIO] = useState('');
  const [Dolg, setDolg] = useState('');
  const [Komp, setKomp] = useState('');
  const [Sphere, setSphere] = useState('');
  const [Opis, setOpis] = useState('');
  const [Site, setSite] = useState('');
  const [Telephone, setTelephone] = useState('');
  const [TG, setTG] = useState('');
  const [Table, setTable] = useState('');

  const addField = () => {
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
        Table:Table,
        createdAt: timestamp
      };
      todoRef2
        .add(data)
        .then(() => {
          setaddData('');
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);

        })
      }

  return (
    <ScrollView style={gStyle.main}>
      <View style={gStyle.pole}>
        <Text onChangeText={(FIO) => setFIO(FIO)} style={gStyle.Textpole}>{item.FIO}</Text> 
      </View>
      <View onChangeText={(Dolg) => setDolg(Dolg)} style={gStyle.pole}>
        <Text style={gStyle.Textpole}>{item.Dolg}</Text>
      </View>
      <View onChangeText={(Komp) => setKomp(Komp)} style={gStyle.pole}>
        <Text style={gStyle.Textpole}>{item.Komp}</Text>
      </View>
      <View onChangeText={(Sphere) => setSphere(Sphere)} style={gStyle.pole}>
        <Text style={gStyle.Textpole}>{item.Sphere}</Text>
      </View>
      <View onChangeText={(Opis) => setOpis(Opis)} style={gStyle.pole}>
        <Text style={gStyle.Textpole}>{item.Opis}</Text>
      </View>
      <View onChangeText={(Site) => setSite(Site)} style={gStyle.pole}>
        <Text style={gStyle.Textpole}>{item.Site}</Text>
      </View>
      <View onChangeText={(Telephone) => setTelephone(Telephone)} style={gStyle.pole}>
        <Text style={gStyle.Textpole}>{item.Telephone}</Text>
      </View>
      <View onChangeText={(TG) => setTG(TG)} style={gStyle.pole}>
        <Text style={gStyle.Textpole}>{item.TG}</Text>
      </View>
      <View style={gStyle.pole}>
        <Text onChangeText={(addData) => setaddData(addData)} style={gStyle.Textpole}>{item.Time}</Text>
      </View>

      <View>
        <Text onChangeText={(addData) => setaddData(addData)} style={gStyle.Textpole}>{item.Table} {item.time}</Text>
      </View>

      <TextInput style={gStyle.pole}
            placeholder="Выбирите стол и время"
            onChangeText={(Table) => setTable(Table)}
            autoCorrect={false}
            />

<SafeAreaView style={gStyle.main}>
      <View>
        <Pressable>
          <View>
            <Text>{item.Table}</Text>
            <Text>{item.time}</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>

      <TouchableOpacity style={gStyle.button}>
          <Text onPress={addField} style={gStyle.textbutton}>Откликнуться</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
