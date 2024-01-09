import { StyleSheet, StatusBar, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InstantQuote from "../Screens/InstantQuote";
import ServicePage from "../Screens/ServicePage";
import AboutPage from "../Screens/AboutPage";
import HomePage from "../Screens/HomePage";
import ResidentialRoofing from "../Screens/Services/ResidentialRoofing";
import CommercialRoofing from "../Screens/Services/CommercialRoofing";
import SidingInstallation from "../Screens/Services/SidingInstallation";
import Gutters from "../Screens/Services/Gutters";
import Windows from "../Screens/Services/Windows";
import FreeEstimate from "../Screens/FreeEstimate";
import ContactPage from "../Screens/ContactPage";

import homeIconActive from "../assets/homeIconActive.png";
import homeIconInactive from "../assets/homeIconInactive.png";
import serviceIconActive from "../assets/servicesIconActive.png";
import serviceIconInactive from "../assets/servicesIconInactive.png"
import contactIconActive from "../assets/contactIconActive.png";
import contactIconInactive from "../assets/contactIconInactive.png";
import aboutActive from "../assets/aboutActive.png";
import aboutInactive from "../assets/aboutInactive.png";
import reviewActive from "../assets/reviewActive.png";
import reviewInactive from "../assets/reviewInactive.png";

import { View } from "react-native";

import ReviewsPage from "../Screens/ReviewsPage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomIcon = (props) => {
  return (<>
    <View style={{ alignItems: 'center', width: '100%' }}>
      <Image source={props.iconImage} style={{ width: 25, height: 25, resizeMode: 'center', }} />
      <Text style={{ fontSize: 15, fontWeight: 500, color: props.focuse ? 'black' : '#6e6e6e' }}>
        {props.iconName}
      </Text>
      {props.focuse ? (
        <View style={{ width: 25, borderTopWidth: 3, borderColor: '#B22335', alignSelf: 'center' }} />
      ) : (<View style={{ width: 25, borderTopWidth: 3, borderColor: '#ffffff' }} />)
      }
    </View>
  </>);
};

const TabNavigator = () => {
  // const navigation = useNavigation();
  return (
    <>
      <StatusBar color="black" />
      {/* <Header button={true} /> */}
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          // tabBarActiveBackgroundColor: "crimson",
          headerShown: false,
          // tabBarActiveTintColor: "white",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#6d6d6d",
          //tabBarLabelStyle: { fontSize: 15, fontWeight: 400, padding: "2%", position: 'relative', top: -15, borderBottomWidth: 3, borderColor: "#ffffff" },
          tabBarItemStyle: { borderRadius: 100, borderWidth: 0 },
          tabBarStyle: { height: 80, },

        }}
      >
        <Tab.Screen
          name="home"
          options={{
            tabBarIcon: ({ focused }) => (

              // <Icon name="home" size={focused ? 35 : 25} color={focused ? "red" : "black"} />
              <BottomIcon iconName="Home" iconImage={focused ? homeIconActive : homeIconInactive} focuse={focused} />
            ),
            // tabBarLabelStyle: { fontSize: 15, fontWeight: 400, padding: "2%", position: 'relative', top: -15, borderBottomWidth: 3, borderColor: "#ff0000" },
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomePage}
                options={{
                  headerShown: false,
                  // tabBarIcon: () => (
                  //     <Icon name="home-sharp" size={25} color="black" />
                  // ),
                }}
              />
              <Stack.Screen
                name="quote"
                component={InstantQuote}
                options={{
                  headerShown: false,
                  // headerLeft: () => (
                  //   <TouchableOpacity
                  //     style={styles.backButton}
                  //     onPress={() => navigation.navigate("HomeScreen")}
                  //   >
                  //     <Icon name="arrow-back" size={25} color="black" />
                  //   </TouchableOpacity>
                  // ),
                }}
              />
              <Stack.Screen
                name="Residential"
                component={ResidentialRoofing}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Commercial"
                component={CommercialRoofing}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Siding"
                component={SidingInstallation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Gutters"
                component={Gutters}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Windows"
                component={Windows}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FreeEstimate"
                component={FreeEstimate}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Services"
          options={{
            tabBarIcon: ({ focused }) => (

              // <View>
              //     <Icon name="briefcase-sharp" size={focused ? 35 : 25} style={{ color: focused ? "red" : "black" }} />

              // </View>
              <BottomIcon iconName="Services" iconImage={focused ? serviceIconActive : serviceIconInactive} focuse={focused} />
            ),
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Service"
                component={ServicePage}
                options={{
                  headerShown: false,
                  tabBarIcon: () => (
                    <Icon name="home-sharp" size={focused ? 35 : 25} color="black" />
                  ),
                }}
              />
              <Stack.Screen
                name="quote"
                component={InstantQuote}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Residential"
                component={ResidentialRoofing}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Commercial"
                component={CommercialRoofing}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Siding"
                component={SidingInstallation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Gutters"
                component={Gutters}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Windows"
                component={Windows}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FreeEstimate"
                component={FreeEstimate}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="About"
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomIcon iconName="About" iconImage={focused ? aboutActive : aboutInactive} focuse={focused} />

            ),
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Abouts"
                component={AboutPage}
                options={{
                  headerShown: false,
                  tabBarIcon: () => (
                    <Icon name="home-sharp" size={focused ? 35 : 25} color="black" />

                  ),
                }}
              />
              <Stack.Screen
                name="quote"
                component={InstantQuote}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Review"
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomIcon iconName="Review" iconImage={focused ? reviewActive : reviewInactive} focuse={focused} />

            ),
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="ReviewPage"
                component={ReviewsPage}
                options={{
                  headerShown: false,
                  tabBarIcon: () => (
                    <Icon name="home-sharp" size={focused ? 35 : 25} color="black" />

                  ),
                }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Contact"
          options={{
            tabBarIcon: ({ focused }) => (
              // <MaterialCommunityIcons
              //     name="contacts"
              //     size={focused ? 35 : 25}
              //     style={{ color: focused ? "red" : "black" }}
              // />
              <BottomIcon iconName="Contact" iconImage={focused ? contactIconActive : contactIconInactive} focuse={focused} />
            ),
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Contacts"
                component={ContactPage}
                options={{
                  headerShown: false,
                  tabBarIcon: () => (
                    <MaterialCommunityIcons
                      name="contacts"
                      size={24}
                      color="black"
                    />
                  ),
                }}
              />
              <Stack.Screen
                name="quote"
                component={InstantQuote}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        {/* <Tab.Screen
                name="FAQ's"
                options={{
                    tabBarIcon: ({ focused }) => (
                        // <Icon name="information-circle" size={focused ? 35 : 25} style={{ color: focused ? "red" : "black" }} />
                        <BottomIcon iconName="Profile" iconImage={focused ? profileIconActive : profileIconInactive} focuse={focused} />
                    ),

                }}
            >
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Infos"
                            component={FAQ}
                            options={{
                                headerShown: false,
                                tabBarIcon: () => (
                                    <Icon
                                        name="information-circle-sharp"
                                        size={25}
                                        color="black"
                                    />
                                ),
                            }}
                        />
                        <Stack.Screen
                            name="quote"
                            component={InstantQuote}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                )}
            </Tab.Screen> */}
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

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
  },
});
