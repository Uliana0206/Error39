import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./scr/Login";
import HomeScreen from "./scr/HomeScreen";
import Hi from "./components/Hi";
import Registration from "./scr/Registration";
import Create from "./scr/Create";
import Account from "./scr/Account";
import Mine from "./scr/Mine";
import FullInfo from "./scr/FullInfo";

const Stack = createNativeStackNavigator();

function App(){
  const [initializing, setInitializing ] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
  }, []);

  if (initializing) return null;

  if (!user){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Hi"
          component={Hi}
          options={{ title: ' '}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: ' '}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: ' '}}
          />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: ' '}}
      />
          <Stack.Screen
          name="Create"
          component={Create}
          options={{ title: ' '}}
      />
      <Stack.Screen
       name="Account"
       component={Account}
       options={{title: ' '}}
      />
      <Stack.Screen
      name="Mine"
      component={Mine}
      options={{title: ' '}}
      />
      <Stack.Screen
      name="FullInfo"
      component={FullInfo}
      options={{title: ''}}
      /> 
    </Stack.Navigator>


  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
