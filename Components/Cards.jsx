import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Card = ({ imageSource, title }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const Cards = () => {
  return (
    <View style={styles.container}>
      <Card
        imageSource={require("../assets/card1.jpeg")}
        title="100% Trusted"
      />
      <Card
        imageSource={require("../assets/card2.jpeg")}
        title="15 Years Experience"
      />
      <Card
        imageSource={require("../assets/card3.jpeg")}
        title="Customer Support"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  card: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    margin: 8,
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity as needed
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Cards;
