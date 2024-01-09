import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AssistButton() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* <View style={styles.assistContainer}> */}
      <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text style={styles.buttonText}>
          <MaterialCommunityIcons
            name="google-assistant"
            size={24}
            color="white"
          />
        </Text>
      </TouchableOpacity>
      {/* </View> */}

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
    </>
  );
}

const styles = StyleSheet.create({

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

