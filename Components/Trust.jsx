import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";

const Trust = () => {
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });

  const images = [
    require("../assets/1.png"),
    require("../assets/2.png"),
    require("../assets/3.png"),
    require("../assets/4.png"),
    require("../assets/5.png"),
    require("../assets/6.png"),
  ];

  const screenWidth = Dimensions.get("window").width;
  const itemsPerRow = 2; // Number of items in each row
  const itemWidth = (screenWidth - 20) / itemsPerRow - 40; // Adjusted for padding and increased gap

  return (
    <SafeAreaView style={{ marginTop: 40, marginBottom: 50 }}>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 21, fontWeight: '600', letterSpacing: 0.32, fontFamily: 'Hauora', marginBottom: 10 }}>
          Trusted By
        </Text>
      </View>
      <View style={styles.container}>
        {images.map((image, index) => (
          <View key={index} style={{ width: itemWidth, height: 120, marginVertical: 5 }}>
            <Image
              source={image}
              style={{ ...styles.image }}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    // marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    // marginHorizontal: 15, // Increase the marginRight value for increased gap
  },
});

export default Trust;