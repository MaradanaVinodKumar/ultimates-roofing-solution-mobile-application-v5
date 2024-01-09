//import liraries
import React, { useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Modal } from "react-native";
import Header from "./Header";
import BackNavigation from "../Components/BackNavigation";
import Reviews from "../Components/Reviews";
import Trust from "../Components/Trust";
import ReviewSenderForm from "../Components/ReviewSenderForm";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AssistButton from "../Components/AssistButton";
// create a component
const ReviewsPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
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
      <ScrollView style={styles.ScrollbodyBackground}>
        <BackNavigation title={"Reviews"} />
        <SafeAreaView style={{ paddingHorizontal: "5%" }}>
          <View>
            <Text style={styles.descriptionHeadingText}>
              Hear it from Our Clients
            </Text>
          </View>
          <View>
            <Text style={styles.descriptionText}>
              Discover why homeowners love Ultimates Roofing! Read brief
              testimonials highlighting our excellence in processes, materials,
              and meticulous cleanups.
            </Text>
          </View>
        </SafeAreaView>
        <SafeAreaView style={{ paddingHorizontal: "2%" }}>
          <Reviews />
        </SafeAreaView>
        <SafeAreaView style={{ paddingHorizontal: "5%", marginTop: "6%" }}>
          <View>
            <Text style={styles.descriptionHeadingText}>
              Share Your Experience
            </Text>
          </View>
          <View>
            <Text style={styles.descriptionText}>
              Please take a moment to share your experience with Ultimates
              Roofing LLC. Your feedback helps us continually improve our
              services and assists future customers in making informed
              decisions. Thank you for being a part of our journey.
            </Text>
          </View>
          <View style={{ marginTop: "10%" }}>
            <ReviewSenderForm />
          </View>
          <Trust />
        </SafeAreaView>
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
};

// define your styles
const styles = StyleSheet.create({
  ScrollbodyBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 21,
    letterSpacing: 0.28,
    color: "#323539",
    width: "100%",
  },
  descriptionHeadingText: {
    fontSize: 19,
    fontWeight: "400",
    color: "#323539",
    marginBottom: 10,
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

//make this component available to the app
export default ReviewsPage;
