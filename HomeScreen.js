import { Text, View, TouchableOpacity, Pressable, SafeAreaView, FlatList, Image} from 'react-native';
import React, { useState, useEffect} from "react";
import { firebase } from "../firebase";
import { gStyle } from '../gStyles';

const todoRef = firebase.firestore().collection("todos");

const HomeScreen = ({navigation}) => {

  const [todos, setTodos] = useState([]);

    useEffect(() => {
      const unsubscribe = todoRef.onSnapshot((querySnapshot) => {
        const newTodos = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          newTodos.push(data);
        });
        setTodos(newTodos);
      });

    return () => unsubscribe();
  }, []);

  return (
    <View style={gStyle.main}>
      <View style={gStyle.album}>
        <TouchableOpacity onPress={() => navigation.navigate('Create')} style={gStyle.buttoncreat}>
          <Text style={gStyle.textbutton}>Создать встречу</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={gStyle.album}>
          <Image source={require('../assets/acc.png')} style={{height:'110%', width:'40%'}}/>
        </TouchableOpacity>
      </View>
      <Text style={gStyle.Textpole}>Доступные встречи</Text>
        <SafeAreaView>
          <View>
              <FlatList
              data={todos}
              numColumns={1}
              renderItem={({ item }) => (
                  <Pressable>
                  <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)} style={gStyle.pole}>
                      <View>
                      <Text style={gStyle.Textpole}>{item.FIO} {item.Komp}</Text>
                      <Text style={gStyle.Textpole}>{item.Dolg}</Text>
                      <Text style={gStyle.Textpole}>{item.Sphere}</Text>
                      <Text style={gStyle.Textpole}>{item.Time}</Text>
                      </View>
                  </TouchableOpacity>
                  </Pressable>
              )}
              />
          </View>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen
