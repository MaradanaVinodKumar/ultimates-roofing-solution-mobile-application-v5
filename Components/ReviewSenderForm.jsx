//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

// create a component
const ReviewSenderForm = () => {
    return (
        <SafeAreaView>
            <Text style={[styles.formLable, { width: "48%", marginRight: "4%" }]}>
                First Name*
            </Text>
            <TextInput style={styles.input} />
            <Text style={[styles.formLable, { width: "48%", marginRight: "4%" }]}>
                Location*
            </Text>
            <TextInput style={styles.input} />
            <Text style={styles.formLable}>Message*</Text>

            <TextInput
                style={styles.textArea}
                multiline
                numberOfLines={4}
                placeholder="Write your experience here."
            />
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={{ color: "#F9F9F9", fontSize: 14, fontWeight: "400" }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    formLable: {
        fontSize: 15,
        fontWeight: "400",
        marginBottom: 5,
        color: "#181818",
    },
    input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 3,

    },
    textArea: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 3,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: "#B22335",
        width: 175,
        paddingHorizontal: 24,
        paddingTop: 10,
        paddingBottom: 13,
        alignItems: "center",
        marginVertical: '6%'
    },
});

//make this component available to the app
export default ReviewSenderForm;
