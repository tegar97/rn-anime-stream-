import React from "react";
import { View, Image, StyleSheet } from "react-native";
import COLORS from "./../constant/colors";

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} resizeMode="contain" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 25,
    height: 25,
    tintColor: focused ? COLORS.primary : COLORS.gray,
  },
});

export default TabIcon;
