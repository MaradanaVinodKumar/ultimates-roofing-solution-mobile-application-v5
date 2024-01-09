import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/splashBackgroundImage.png")}
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        source={require("../assets/UltimatesLogo.png")}
        style={{ position: "absolute", width: "100%", height: "14%", top: 300 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 60,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: 50, height: 50 }}>
          <Image
            source={require("../assets/Loading.gif")}
            style={{ width: "100%", height: "300%" }}
            resizeMode="center"
          />
        </View>
        <View style={{ marginTop: 100 }}>
          <Text style={{ fontSize: 20, fontWeight: "400" }}>
            Ultimates Roofing LLC
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Loading;
