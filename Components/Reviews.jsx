import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { Ionicons } from "@expo/vector-icons";

const Reviews = () => {
  const [accordionStates, setAccordionStates] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
  });

  const toggleAccordion = (accordionKey) => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [accordionKey]: !prevState[accordionKey],
    }));
  };

  const renderAccordion = (accordionKey, title, subHeading, content) => (
    <View key={accordionKey} style={{ marginTop: 20, marginHorizontal: "3%" }}>
      <TouchableOpacity
        onPress={() => toggleAccordion(accordionKey)}
        style={styles.accordionHeader}
      >
        <View>
          <Text style={styles.accordionTitleText}>{title}</Text>
          {subHeading && (
            <Text style={styles.accordionSubheadingText}>{subHeading}</Text>
          )}
        </View>
        <Ionicons
          name={accordionStates[accordionKey] ? "chevron-up" : "chevron-down"}
          size={20}
          color="#333"
        />
      </TouchableOpacity>
      <Collapsible collapsed={!accordionStates[accordionKey]}>
        <View style={styles.accordionContent}>
          <Text>{content}</Text>
        </View>
      </Collapsible>
    </View>
  );

  return (
    <View>
      {/* <Text style={styles.heading}>Reviews</Text>
            <Text style={styles.subHeading}>Hear it from Our Clients</Text>
            <Text style={styles.description}>
                Discover why homeowners love Ultimates Roofing! Read brief testimonials
                highlighting our excellence in processes, materials, and meticulous
                cleanups.
            </Text> */}

      {renderAccordion(
        "accordion1",
        "John T",
        "Denver, Colorado",
        "Content for Accordion 1"
      )}
      {renderAccordion(
        "accordion2",
        "Sarah LT",
        "Austin, Texas",
        "Content for Accordion 2"
      )}
      {renderAccordion(
        "accordion3",
        "John T",
        "Denver, Colorado",
        "Content for Accordion 3"
      )}
      {renderAccordion(
        "accordion4",
        "Sarah LT",
        "Austin, Texas",
        "Content for Accordion 4"
      )}

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity><Text style={{ color: '#B22335', fontSize: 18, alignSelf: 'center' }}>View More</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Hauora",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.36,
    marginHorizontal: "5%",
    marginTop: 50,
    color: "#181818",
  },
  subHeading: {
    fontFamily: "Hauora",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.36,
    marginHorizontal: "5%",
    marginTop: 20,
    color: "#181818",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
    marginHorizontal: "5%",
    fontFamily: "Hauora",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderColor: '#E5E5E7'
  },
  accordionTitleText: {
    fontSize: 15,
    fontWeight: "400",
  },
  accordionSubheadingText: {
    fontSize: 14,
    color: "#555",
  },
  accordionContent: {
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default Reviews;