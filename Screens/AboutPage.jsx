import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView, TouchableOpacity, Modal
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";
import A1 from "../assets/AboutPageImages/A1.jpeg";
import A2 from "../assets/AboutPageImages/A2.jpeg";
import Header from "../Screens/Header";
import ThreeCards from "../Components/ThreeCards";
import Trust from "../Components/Trust";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BackNavigation from "../Components/BackNavigation";
import AssistButton from "../Components/AssistButton";

export default function AboutPage() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });
  return (
    <SafeAreaView>
      <Header button={true} />
      {/* <View style={styles.assistContainer}>
        <TouchableOpacity onPress={openModal} style={styles.button}>
          <Text style={styles.buttonText}>
            <MaterialCommunityIcons
              name="google-assistant"
              size={24}
              color="white"
            />
          </Text>
        </TouchableOpacity>
      </View> */}
      <AssistButton />
      {/* <SidePointNavigation /> */}

      <ScrollView>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "5%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#181818",
              fontSize: 20,
              fontWeight: "normal",
              letterSpacing: 0.4,
              fontFamily: "Hauora",
            }}
          >
            About
          </Text>
          <Text style={{ color: "#181818",fontFamily:'Hauora',fontSize:14,marginTop:6,fontWeight:'400' }} onPress={() => navigation.navigate("home")}>Back</Text>
        </View> */}
        <BackNavigation title={"About"} />
        <Text
          style={{
            fontSize: 14,
            marginHorizontal: "5%",
            marginVertical: "4%",
            fontWeight: 400,
            letterSpacing: 0.28,
            fontFamily: "Hauora",
            color: "#323539",
          }}
        >
          Ultimates Roofing LLC, established in [Year], proudly serves
          [Location] and surrounding areas, specializing in top-tier roofing
          solutions. With nearly a decade of dedicated expertise, our seasoned
          roofing contractor ensures excellence in every project, offering
          comprehensive installation, replacement, and meticulous long-term
          repairs. Your peace of mind is our commitment to excellence.
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={A1}
            style={{
              resizeMode: "cover",
              height: 131,
              width: 362,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          />
        </View>

        <ThreeCards />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={A2}
            style={{ marginHorizontal: "1%", height: 312, width: 362 }}
          />
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: 0.28,
              color: "#323539",
              marginTop: 10,
              marginHorizontal: "5%",
            }}
          >
            Ultimates Roofing LLC embodies a decade of passion and expertise in
            redefining roofing. Beyond industry norms, we're not just a business
            but a dedicated team committed to excellence and integrity.
            Synonymous with quality and innovation, Ultimates Roofing strives to
            make a lasting impact on our community with each project.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 70,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "#B22335",
                fontFamily: "Hauora",
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: 0.4,
                textAlign: "center",
              }}
            >
              15+
            </Text>
            <Text
              style={{
                color: "#323539",
                fontSize: 12,
                fontFamily: "Hauora",
                fontWeight: 400,
                letterSpacing: 0.24,
                textAlign: "center",
              }}
            >
              Years of{"\n"}Experience
            </Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "#B22335",
                fontFamily: "Hauora",
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: 0.4,
                textAlign: "center",
              }}
            >
              20 - 25
            </Text>
            <Text
              style={{
                color: "#323539",
                fontSize: 12,
                fontFamily: "Hauora",
                fontWeight: 400,
                letterSpacing: 0.24,
                textAlign: "center",
              }}
            >
              Years of{"\n"}Warranty
            </Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "#B22335",
                fontFamily: "Hauora",
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: 0.4,
                textAlign: "center",
              }}
            >
              100%
            </Text>
            <Text
              style={{
                color: "#323539",
                fontSize: 12,
                fontFamily: "Hauora",
                fontWeight: 400,
                letterSpacing: 0.24,
                textAlign: "center",
              }}
            >
              Quality{"\n"}Products
            </Text>
          </View>
        </View>
        <Trust />
      </ScrollView>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Your modal content goes here */}
            <Text>This is the modal content</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  ourImage: {
    width: "90%",
    height: "23%",
    paddingVertical: "35%",
  },
  roof: {
    height: 200,
    backgroundColor: "rgba(30, 30, 42, 0.57)",
  },
  textAboveImage: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 50,
    marginLeft: 25,
  },
  textAboveImage2: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 105,
  },
  assistContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "60%",
  },
  button: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: [{ translateY: -25 }], // Adjust translateY to center the button vertically
    padding: 10,
    backgroundColor: "crimson",
    borderRadius: 55, // Make it round by setting borderRadius to half of the button's height
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  buttonText: {
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
});
