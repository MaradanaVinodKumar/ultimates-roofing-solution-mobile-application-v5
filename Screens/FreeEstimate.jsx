import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import roof from "../assets/AboutPageImages/roof.jpg";
import Footer from "../Components/Footer";
import FormContact from "../Components/FormContact";

export default function FreeEstimate() {
  const navigation = useNavigation();

  const data = [
    { label: "Residential Roofing", value: "ResidentialRoofing" },
    { label: "Commercial Roofing", value: "CommercialRoofing" },
    { label: "Siding", value: "Siding" },
    { label: "Gutters", value: "Gutters" },
    { label: "Windows", value: "Windows" },
    { label: "Others", value: "Others" },
  ];
  const [value, setValue] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gmail, setGmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !address ||
      !gmail ||
      !phoneNumber ||
      !service ||
      !city ||
      !zip ||
      !state ||
      !message === null
    ) {
      Alert.alert("Please fill out all required fields.");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted!");
    // You can access form data using the state variables (firstName, lastName, etc.)
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text style={styles.textAboveImage}>ULTIMATES ROOFING & SIDING</Text>
          <Text style={styles.textAboveImage2}>REQUEST A FREE ESTIMATE</Text>
          <Image source={roof} style={styles.roof} />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.formHead}>Free Estimate</Text>
          </View>
          <FormContact />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  label: {
    color: "white",
  },
  sidePoint: {
    height: 60,
    width: 50,
    backgroundColor: "black",
    top: 380,
    right: 0,
    position: "absolute",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 11,
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
    width: "100%",
  },
  textAboveImage2: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 65,
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 20,
    paddingVertical: 30,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "white",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  formHead: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
    color: "#181818",
  },
});
