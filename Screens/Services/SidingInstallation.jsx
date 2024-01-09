import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { useFonts } from "expo-font";
import HauoraRegular from "../../assets/Fonts/Hauora-Regular.ttf";
import Header from "../Header";
import res1 from "../../assets/ServicePageImages/res1.jpeg";
import res2 from "../../assets/ServicePageImages/res2.jpeg";
import res3 from "../../assets/ServicePageImages/res3.jpeg";
import { useNavigation } from "@react-navigation/native";
import BackNavigation from "../../Components/BackNavigation";

export default function SidingInstallation() {
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header button={true} />
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
            Siding Enhancements
          </Text>
          <Text style={{ color: "#181818",fontFamily:'Hauora',fontSize:14,marginTop:6,fontWeight:'400' }} onPress={() => navigation.navigate("Service")}>Back</Text>
        </View> */}
        <BackNavigation title={"Siding Enhancements"} />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: "5%",
          }}
        >
          <Image
            source={res1}
            style={{ height: 180, width: "100%", resizeMode: "cover" }}
          />
          <Text
            style={{
              fontFamily: "Hauora",
              letterSpacing: 0.28,
              fontWeight: "400",
              marginTop: 10,
              lineHeight: 20,
            }}
          >
            Strengthen home protection with durable, appealing residential
            roofing solutions.
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#B22335",
              paddingVertical: 12,
              paddingHorizontal: 8,
              marginTop: 15,
              marginHorizontal: "5%",
              width: "38%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("FreeEstimate")}
          >
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 12,
                fontFamily: "Hauora",
                fontWeight: "400",
                letterSpacing: 0.24,
              }}
            >
              Get Your Free Estimate
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 25, marginHorizontal: "5%" }}>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 0.36,
            }}
          >
            Your Style with Premium Shingles
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "400",
              letterSpacing: 0.28,
              lineHeight: 23,
            }}
          >
            Discover roofing excellence with our premium shingles—marrying
            durability and aesthetics. Redefine your roof with architectural
            sophistication. Each shingle reflects our commitment to quality,
            ensuring your home stands strong and stylish. Find the perfect blend
            of functionality and elegance.
          </Text>
          <Text style={styles.listItem}>
            • Crafted from a 100% recyclable blend of natural limestone and
            virgin resins.
          </Text>
          <Text style={styles.listItem}>
            • Experience the true beauty of authentic slate with its natural
            textures and edges.
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={res2}
            style={{ width: 291, height: 233, resizeMode: "cover" }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              fontFamily: "Hauora",
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 0.36,
              marginHorizontal: "5%",
            }}
          >
            Your Roofing Experience with Owens Corning Products
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontFamily: "Hauora",
              fontSize: 14,
              fontWeight: "400",
              letterSpacing: 0.28,
              marginHorizontal: "5%",
              lineHeight: 20,
            }}
          >
            Owens Corning, a leader for over 75 years in building materials,
            ensures your new roof enhances and safeguards your home. Discover
            the enduring performance and beauty of Oakridge® Shingles – 'The
            Right Choice®.' Explore exclusive colors and vibrancy with Owens
            Corning TruDefinition® Duration® Designer Colors Collection
            Shingles.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Image
            source={res3}
            style={{ resizeMode: "cover", height: 178, width: 311 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            marginTop: 24,
            marginBottom: 89,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#B22335",
              paddingVertical: 12,
              paddingHorizontal: 8,
              marginHorizontal: "5%",
              width: "38%",
              marginBottom: 12,
              marginTop: 12,
              marginLeft: 14,
              marginRight: 14,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("FreeEstimate")}
          >
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 12,
                fontFamily: "Hauora",
                fontWeight: "400",
                letterSpacing: 0.24,
              }}
            >
              Get Your Free Estimate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
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
    fontSize: 25,
    textAlign: "justify",
    width: "100%",
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 90,
  },
  listItem: {
    fontFamily: "Hauora",
    marginTop: 8,
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
  },
});
