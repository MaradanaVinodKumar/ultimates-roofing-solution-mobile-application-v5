//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
// create a component
const BackNavigation = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.NavigationBackground}>
      <View style={styles.TitleBackground}>
        <Text style={{ fontSize: 24, fontWeight: "400", fontFamily: "Hauora" }}>
          {props.title}
        </Text>
      </View>
      <View style={styles.ButtonBackground}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Icon
                name="arrow-back-outline"
                size={15}
                style={{ color: "#000000", marginTop: 11 }}
              />
            </View>
            <View>
              <Text
                style={{ fontSize: 15, fontFamily: "Hauora", marginTop: 7 }}
              >
                {" "}
                Back
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  NavigationBackground: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: "5%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  TitleBackground: {},
  ButtonBackground: {
    alignContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default BackNavigation;
