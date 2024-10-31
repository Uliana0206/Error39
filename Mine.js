import { Text, View, TouchableOpacity, Pressable, SafeAreaView, FlatList, Image} from 'react-native';
import React, { useState, useEffect} from "react";
import { firebase } from "../firebase";
import { gStyle } from '../gStyles';

const todoRef = firebase.firestore().collection("Mine");

const Mine = ({navigation}) => {

  return (
    <View style={gStyle.main}>
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
                        <Text style={gStyle.Textpole}>{item.Table}</Text>
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

export default Mine
