import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet } from "react-native";
import COLORS from "../constant/colors";
import TabIcon from "./../components/TabIcon";
import icons from "./../constant/icons";
import DetailScreen from "./../screens/DetailScreen";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      style={styles.TabContainer}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MovieDetail" component={DetailScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  TabContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: COLORS.black,
    borderTopColor: "transparent",
    height: 100,
  },
});
export default Tabs;
