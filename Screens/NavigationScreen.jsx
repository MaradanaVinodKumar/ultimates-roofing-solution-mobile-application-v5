import { StyleSheet, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MergeNavigator from "../Navigation/MergeNavigators";

const NavigationScreen = () => {
    // const navigation = useNavigation();
    return (
        <>
            <StatusBar backgroundColor="crimson" />
            <NavigationContainer>
                <MergeNavigator />
            </NavigationContainer>
        </>
    );
};

export default NavigationScreen;

const styles = StyleSheet.create({
    sidePoint: {
        height: 50,
        width: 50,
        backgroundColor: "red",
        top: 900,
        right: 0,
        position: "absolute",
        zIndex: 1,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        padding: 11,
    },
    backButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: 'transparent'
    },
    // "splash": {
    //     "image": "./assets/UltimatesLogo.png",
    //     "resizeMode": "contain",
    //     "backgroundColor": "#ffffff"
    //   },

    //splashBackgroundImage.png
});
