import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import data from "./Data.json";
//import { Raleway-Black } from "./Assets/Fonts";
import HTMLView from "react-native-htmlview";

function App() {
  //console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.ralewayReg}> Hello </Text>
      <Text style={styles.ralewayMed}> Hello </Text>
      <HTMLView value={data[0].description} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },

  artist: {
    fontSize: 15,
    fontStyle: "bold",
    marginBottom: 10,
  },

  ralewayReg: {
    fontFamily: "Raleway-Regular",
    fontSize: 20,
  },

  ralewayMed: {
    fontFamily: "Raleway",
    fontSize: 20,
  },
});

export default App;
