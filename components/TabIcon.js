import React from "react";
import { View, Image, StyleSheet } from "react-native";
import COLORS from "./../constant/colors";

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? COLORS.primary : "red",
        }}
      />
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
  },
});

export default TabIcon;
