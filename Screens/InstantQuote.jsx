import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Alert, Modal
} from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./Header";
import BackNavigation from "../Components/BackNavigation";
import AssistButton from "../Components/AssistButton";
// const KEY = "b182986efc1242b2a8c2709aa828fb67"; // Replace with your OpenCage API Key
// const defaultRegion = {
//   latitude: 16.757,
//   longitude: 81.6922,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421,
// };

// const handleSearchLocation = (
//   setLoading,
//   setMarkerCoordinates,
//   textInputValue
// ) => {
//   setLoading(true);

//   axios
//     .get(
//       `https://[YOUR_IP_ADDRESS]/geocode/v1/json?q=${textInputValue}&key=${KEY}`
//     )
//     .then((response) => {
//       const firstResult = response.data.results[0];

//       if (firstResult) {
//         setMarkerCoordinates({
//           latitude: firstResult.geometry.lat,
//           longitude: firstResult.geometry.lng,
//         });
//       }
//     })
//     .catch((error) => {
//       // console.error("Error fetching geocoding data", error.message);
//       Alert.alert("Error fetching geocoding data", error.message);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// };

// const Map = (props) => {
//   return (
//     <>
//       <Header />
//       <BackNavigation title={"InstantRoofQuote"}/>
//       <MapView style={styles.map} region={props.region}>
//         <Marker
//           coordinate={props.Coordinates}
//           title="Selected Location"
//           description="Location based on entered text"
//         />
//       </MapView>
//     </>
//   );
// };

export default function InstantQuote() {
  // const [mapRegion, setMapRegion] = useState(defaultRegion);
  // const [textInputValue, setTextInputValue] = useState("");
  // const [markerCoordinates, setMarkerCoordinates] = useState({
  //   latitude: defaultRegion.latitude,
  //   longitude: defaultRegion.longitude,
  // });
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  // useEffect(() => {
  //   // Update the map region when marker coordinates change
  //   setMapRegion({
  //     latitude: markerCoordinates.latitude,
  //     longitude: markerCoordinates.longitude,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   });
  // }, [markerCoordinates]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
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

      <BackNavigation title={"InstantRoofQuote"} />

      <AssistButton />
      {/* <View style={styles.container}>
          <Map region={mapRegion} Coordinates={markerCoordinates} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Location"
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleSearchLocation(
                setLoading,
                setMarkerCoordinates,
                textInputValue
              );
            }}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Search</Text>
            )}
          </TouchableOpacity>
        </View> */}
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
  container: {
    height: 250,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
    marginHorizontal: "10%",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
  },
  map: {
    width: "100%",
    height: 250,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  card_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 100,

    resizeMode: "cover",
  },
  cardContent: {
    padding: 16,
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
