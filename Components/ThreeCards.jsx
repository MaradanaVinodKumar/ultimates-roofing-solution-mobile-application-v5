import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";

const ThreeCards = () => {
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });

  const data = [
    {
      title: "Vision",
      icon: <Ionicons name="eye" size={24} color="white" />,
      text: "Guided by our visionary spirit, we propel towards a future where the transformative prowess of roofing excellence not only enhances each property but becomes a catalyst for enduring satisfaction, imprinting a profound and lasting impact on the landscapes we touch.",
    },
    {
      title: "Mission",
      icon: (
        <MaterialCommunityIcons name="bullseye-arrow" size={24} color="white" />
      ),
      text: "Our mission is to empower clients by delivering top-tier roofing solutions, marked by a commitment to durability, continuous innovation, and unwavering dedication to customer-centric service, ensuring not just satisfaction, but lasting trust.",
    },
    {
      title: "Value",
      icon: <FontAwesome name="diamond" size={24} color="white" />,
      text: "Our values stand on the pillars of integrity, unparalleled craftsmanship, and an unwavering dedication to client satisfaction, forming the cornerstone of our roofing commitment and ensuring every project reflects our commitment to excellence.",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.title}</Text>
        {item.icon}
      </View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 0.28,
          fontFamily: "Hauora",
          marginTop: 8,
          color: "#323539",
        }}
      >
        {item.text}
      </Text>
    </View>
  );

  const renderPagination = () => (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeIndex}
      containerStyle={{ marginTop: -20 }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#3D3B6D",
      }}
      inactiveDotStyle={{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#C4C4C4",
      }}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.8}
      carouselRef={carouselRef}
      tappableDots={true}
    />
  );

  const carouselRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout="default"
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      {renderPagination()}
      <View style={{ flexDirection: "row", justifyContent: "center" }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    marginVertical: 8,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3D3B6D",
    padding: 8,
    height: 56,
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#C4C4C4",
    margin: 5,
  },
});

export default ThreeCards;
