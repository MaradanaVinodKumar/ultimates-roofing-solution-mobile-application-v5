import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Linking,
  TouchableOpacity, Modal
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FormContact from "../Components/FormContact";
import Header from "../Screens/Header";
import BackNavigation from "../Components/BackNavigation";
import AssistButton from "../Components/AssistButton";

const ContactCard = ({ icon, title, subtitle, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.ContactBox}>
      <View style={styles.textContainer}>
        <Icon name={icon} size={24} color="white" />
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.ContactBoxTitle}>{title}</Text>
        {subtitle && <Text style={styles.ContactBoxTitle}>{subtitle}</Text>}
      </View>
    </View>
  </TouchableOpacity>
);
const handleCardClick = () => {
  const phoneUrl = `tel:${"614-602-7980"}`;
  Linking.openURL(phoneUrl).catch((err) =>
    console.error("Error opening dial pad:", err)
  );
};

const ContactPage = () => {
  const navigation = useNavigation();
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
      <ScrollView>
        <BackNavigation title={"Contact Us"} />
        <View style={styles.contactContainer}>
          <ContactCard
            icon="ios-call"
            title="614-602-7980"
            onPress={handleCardClick}
          />
          <ContactCard
            icon="ios-mail"
            title="admin - hrroofs@ultimatesolutionsit.com"
            subtitle="sales - roofs@ultimatesolutionsit.com"
          />
          <ContactCard
            icon="ios-location"
            title="Ultimates Roofing LLC,"
            subtitle="Columbus, Ohio"
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 16, fontWeight: "500", letterSpacing: 0.32 }}
          >
            Business Hours:
          </Text>
          <Text
            style={{ fontSize: 14, fontWeight: "400", letterSpacing: 0.28 }}
          >
            Monday to Friday - 9:00 AM to 5:00 PM
          </Text>
        </View>

        <View>
          <FormContact />
        </View>
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

const styles = StyleSheet.create({
  contactContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "5%",
    paddingHorizontal: "5%",
  },
  ContactBox: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    backgroundColor: "#3D3B6D",
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: "100",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  ContactBoxTitle: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
    color: "#F9F9F9",
  },
  formContainer: {
    paddingHorizontal: "5%",
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

export default ContactPage;
