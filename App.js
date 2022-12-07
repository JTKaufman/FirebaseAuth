import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from "react";
import Navigation from './Navigation';
import auth from '@react-native-firebase/auth';



export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user != null) setIsLoggedIn(true);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log(user)
    console.log(isLoggedIn)
    return subscriber; 
  }, []);

  if (initializing) return (
  <View style={styles.container}>
    <ActivityIndicator/>
    <p>test</p>
  </View>
  );

  return (
    <View style={styles.container}>
    <ActivityIndicator/>
    <p>test</p>
  </View>
    // <Navigation isLoggedIn={isLoggedIn} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
  }
});
