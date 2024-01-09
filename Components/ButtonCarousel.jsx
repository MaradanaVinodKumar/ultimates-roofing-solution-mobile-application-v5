import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Icon from "@expo/vector-icons/Ionicons";
import { Video } from "expo-av";

const ButtonCarousel = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [getVideoIndex, setVideoIndex] = useState(0);
  const openModal = () => {
    setModalVisible(true);

  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const ref = useRef(null);
  const [getValue, setValue] = useState(10);

  const videos = [
    require("../assets/CarouselImages/v1.mp4"),
    require("../assets/CarouselImages/v2.mp4"),
    require("../assets/CarouselImages/v3.mp4"),
  ];

  const toRight = () => {
    if (getValue === 10) {
      setValue(400);
    } else if (getValue === 400) {
      setValue(790);
    } else if (getValue === 790) {
      setValue(10);
    }
    ref.current?.scrollTo({ x: getValue });
  };

  const toLeft = () => {
    if (getValue === 790) {
      setValue(400);
    } else if (getValue === 400) {
      setValue(10);
    } else if (getValue === 10) {
      setValue(790);
    }
    ref.current?.scrollTo({ x: getValue });
  };

  setTimeout(() => {
    ref.current?.scrollTo({ x: getValue });
  }, 1);

  return (
    <View style={{ marginTop: "10%", width: "100%", height: 250 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View>
          <Text
            style={[
              styles.headerText,
              {
                fontFamily: "Hauora",
                color: "black",
                fontWeight: 600,
                fontSize: 20,
                marginTop: 0,
              },
            ]}
          >
            Featured Works
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={toLeft}>
            <Icon
              name="md-arrow-back-circle-outline"
              size={30}
              style={{ color: "#3a3a3a", margin: 0 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toRight}>
            <Icon
              name="md-arrow-forward-circle-outline"
              size={30}
              style={{ color: "#3a3a3a", margin: 0 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        style={{ width: "100%" }}
        ref={ref}
        showsHorizontalScrollIndicator={true}
      >
        {videos.map((video, index) => (
          <TouchableOpacity key={index} onPress={() => { openModal(), setVideoIndex(index) }} >
            <View style={styles.ScrollVideoBackground}>
              <Video
                source={video}
                style={styles.ScrollVideo}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls={false}

              />
              <Image
                source={require("../assets/CarouselImages/play.png")}
                style={styles.playButton}
              />
            </View>
          </TouchableOpacity>
        ))}
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
            <Video
              source={videos[getVideoIndex]}
              style={styles.modelVideo}
              resizeMode="cover"
              shouldPlay
              isLooping
              useNativeControls={false}
            />
            <TouchableOpacity onPress={closeModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  ScrollVideo: {
    flex: 1,
    resizeMode: "cover",
  },
  ScrollVideoBackground: {
    borderWidth: 0,
    height: "100%",
    overflow: "hidden",
    width: 370,
    marginHorizontal: 10,
    position: "relative",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }], // Adjust based on the size of your play button image
    width: 50,
    height: 50,
    zIndex: 1, // Ensure the play button is on top of the video
  },
  headerText: {
    fontSize: 25,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0.4,
    color: "#ffffff",
    width: "100%",
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
  modelVideo: {
    width: 300,
    height: 200,
  }
});

export default ButtonCarousel;
