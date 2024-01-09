import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import logo from "../assets/UltimatesLogo.png";

export default function Footer() {
  return (
    <ScrollView
      style={{
        marginHorizontal: 20,
        marginTop: 30,
        backgroundColor: "#e96b363",
        paddingBottom: 20,
      }}
    >
      <Image source={logo} style={{ width: "100%", height: 100 }} />
      <Text style={{ fontSize: 15, marginTop: 10 }}>
        Ultimates Roofing &amp; Siding offers a full range of services including
        the installation of new roofs, roof maintenance, roof repairs, and
        re-roofing services for both Residential and Commercial projects
        including homes, offices, warehouses, and multi-family dwellings.&nbsp;
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        SITE NAVIGATION
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#B22335" }}>
        -----
      </Text>
      <View>
        <Text style={{ fontSize: 15 }}>Home</Text>
        <Text style={{ fontSize: 15 }}>About Us</Text>
        <Text style={{ fontSize: 15 }}>Services</Text>
        <Text style={{ fontSize: 15 }}>Testimonials</Text>
        <Text style={{ fontSize: 15 }}>FAQs</Text>
        <Text style={{ fontSize: 15 }}>Contact Us</Text>
        <Text style={{ fontSize: 15 }}>Free Estimate</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        SERVICES
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#B22335" }}>
        -----
      </Text>
      <View>
        <Text style={{ fontSize: 15 }}>Residential Roofing</Text>
        <Text style={{ fontSize: 15 }}>Commercial Roofing</Text>
        <Text style={{ fontSize: 15 }}>Siding</Text>
        <Text style={{ fontSize: 15 }}>Gutters</Text>
        <Text style={{ fontSize: 15 }}>Windows</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        CONTACT INFO
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#B22335" }}>
        -----
      </Text>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="location-on" size={19} color="black" />
          <Text style={{ fontSize: 15, marginLeft: 5 }}>
            Columbus, OH 43235
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <MaterialIcons name="call" size={18} color="black" />
          <Text style={{ fontSize: 15, marginLeft: 5 }}>(614) 766-8100</Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <MaterialIcons name="info" size={18} color="black" />
          <Text style={{ fontSize: 15, marginLeft: 5 }}>
            Mon - Sun: 8:00 am - 6:00 pm Call Anytime
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
