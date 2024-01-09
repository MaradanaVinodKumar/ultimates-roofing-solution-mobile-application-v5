import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
 
} from "react-native";
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";
import { Ionicons } from "@expo/vector-icons";

import Header from "../Screens/Header";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
import Cards from "../Components/Cards";
import Trust from "../Components/Trust";
import ButtonCarousel from "../Components/ButtonCarousel";
import AssistButton from "../Components/AssistButton";


export default function HomePage() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });

  const images = [
    require("../assets/c1.jpeg"),
    require("../assets/c2.jpeg"),
    require("../assets/c3.jpeg"),
  ];

  return (
    <SafeAreaView>
      <Header button={true} />
     <AssistButton/>
      <ScrollView style={{ height: "auto" }}>
        <SafeAreaView>
          <View>
            <SliderBox
              images={images}
              sliderBoxHeight={200}
              SliderBoxWidth={"100%"}
              dotColor="white"
              inactiveDotColor="grey"
              style={styles.backgroundVideoContainer}
              paginationBoxHorizontalMargin={40}
              autoplay
              autoplayInterval={2500}
              circleLoop
            />
            <View style={styles.hoverHeadingBackground}>
              <Text style={styles.headerText}>
                Elevate Your Roofing {"\n"}Experience with{"\n"}Ultimates
                Roofing App
              </Text>
              <View style={styles.GYFEButtonBackground}>
                <TouchableOpacity
                  style={styles.GYFEButton}
                  onPress={() => {
                    navigation.navigate("Contact");
                  }}
                >
                  <View>
                    <Text style={styles.GYFEButtonText}>
                      Get Your Free Estimate
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ marginHorizontal: "5%" }}>
            <Text style={styles.descriptionText}>
              At Ultimates Roofing LLC, we believe that every home and business
              deserves the highest quality roofing solutions. Established
              [Year], we have proudly served [Location] and surrounding areas,
              earning a reputation for excellence in the Roofing and Siding
              industry.
            </Text>
          </View>
          <View>
            <Cards />
          </View>
        </SafeAreaView>
        {/*Our Services*/}
        <View style={{ marginHorizontal: "5%" }}>
          {/*Our Services heading*/}
          <View>
            <Text
              style={[
                styles.headerText,
                {
                  fontFamily: "Hauora",
                  color: "black",
                  fontWeight: 600,
                  fontSize: 20,
                  marginTop: 16.5,
                },
              ]}
            >
              Our Services
            </Text>
          </View>
          {/*Our Services descriptionText*/}
          <View>
            <Text style={[styles.descriptionText, { fontFamily: "Hauora" }]}>
              From Home and Commercial Roofing to Siding, Gutters, and Windows,
              our services redefine precision and style. Elevate your property
              with our commitment to unparalleled craftsmanship.
            </Text>
          </View>
        </View>
        {/*Our Services navigations*/}
        <View style={{ marginHorizontal: "5%" }}>
          <TouchableOpacity
            style={[
              styles.services,
              { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
            ]}
            onPress={() => {
              navigation.navigate("Residential");
            }}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={[
                  styles.descriptionText,
                  { fontWeight: "400", fontSize: 16, marginTop: 0 },
                ]}
              >
                Residential Roofing
              </Text>
            </View>
            <View
              style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
            >
              <Ionicons name="arrow-forward" size={24} color="crimson" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.services,
              { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
            ]}
            onPress={() => {
              navigation.navigate("Commercial");
            }}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={[
                  styles.descriptionText,
                  { fontWeight: "400", fontSize: 16, marginTop: 0 },
                ]}
              >
                Commercial Roofing
              </Text>
            </View>
            <View
              style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
            >
              <Ionicons name="arrow-forward" size={24} color="crimson" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.services,
              { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
            ]}
            onPress={() => {
              navigation.navigate("Siding");
            }}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={[
                  styles.descriptionText,
                  { fontWeight: "400", fontSize: 16, marginTop: 0 },
                ]}
              >
                Siding Enhancements
              </Text>
            </View>
            <View
              style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
            >
              <Ionicons name="arrow-forward" size={24} color="crimson" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.services,
              { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
            ]}
            onPress={() => {
              navigation.navigate("Gutters");
            }}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={[
                  styles.descriptionText,
                  { fontWeight: "400", fontSize: 16, marginTop: 0 },
                ]}
              >
                Gutter Systems
              </Text>
            </View>
            <View
              style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
            >
              <Ionicons name="arrow-forward" size={24} color="crimson" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.services,
              { borderBottomWidth: 1, borderBottomColor: "#A1A4AC" },
            ]}
            onPress={() => {
              navigation.navigate("Windows");
            }}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={[
                  styles.descriptionText,
                  { fontWeight: "400", fontSize: 16, marginTop: 0 },
                ]}
              >
                Windows Services
              </Text>
            </View>
            <View
              style={{ width: "20%", alignItems: "flex-end", paddingRight: 10 }}
            >
              <Ionicons name="arrow-forward" size={24} color="crimson" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: "5%" }}>
          <ButtonCarousel />
        </View>

        <Trust />
      </ScrollView>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundVideoContainer: {
    flex: 1,
    height: Platform.OS === "ios" ? 380 : 322,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    resizeMode: "contain",
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "300",
    lineHeight: 21,
    letterSpacing: 0.28,
    color: "#323539",
    width: "100%",
    marginTop: "5%",
    fontFamily: "Hauora",
  },

  ourImageBackground: {
    alignContent: "center",
    width: "100%",
  },
  ourImage: {
    width: "100%",
    // height: 26,
    height: "26%",
    paddingVertical: "26%",
  },
  GYFEButton: {
    width: 185,
    paddingHorizontal: "3%",
    paddingVertical: "3%",
    backgroundColor: "white",
    marginTop: 15,
  },
  GYFEButtonText: {
    color: "#B22335",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0.24,
  },
  hoverHeadingBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingHorizontal: "5%",
    backgroundColor: "#00000033",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0.4,
    color: "#ffffff",
    width: "100%",
    fontFamily: "Hauora",
  },
  buttonContainer: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "6%",
    marginBottom: "20%",
  },
  buttonContainerText: {
    color: "#B22335",
    fontSize: 15,
  },
  buttonText: {
    color: "#B22335",
    fontSize: 16,
    fontWeight: "400",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    padding: 16,
    backgroundColor: "transparent",
    position: "absolute", // Set the desired background color
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(30, 30, 42, 0.27)", // Set the desired transparency here
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontSize: 35,
    textAlign: "justify",
    fontWeight: "bold",
    color: "white",
    width: "84%",
    fontFamily: "Hauora",
  },
  sub_text: {
    fontSize: 18,
    color: "white",
    width: "84%",
    textAlign: "justify",
  },

  servicesCards: {
    marginVertical: "3%",
    marginHorizontal: "5%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 350,
  },
  servicesCardsHeading: {
    fontWeight: "500",
    fontSize: 22,
    paddingHorizontal: "6%",
    marginVertical: 10,
  },
  servicesCardsText: {
    textAlign: "justify",
    width: "100%",
    fontSize: 15,
    paddingHorizontal: "7%",
    marginBottom: "3%",
    fontWeight: "400",
    color: "#323539",
  },
  ourServiceBackground: {
    marginHorizontal: "6%",
    marginVertical: "8%",
  },
  services: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    marginTop: 10,
  },

});
