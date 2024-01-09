import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import TabNavigator from "./TabNavigator";
import Loading from "../Components/Loading";

const Stack = createStackNavigator();
const MergeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="loading"
        component={Loading}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MergeNavigator;
const styles = StyleSheet.create({});
