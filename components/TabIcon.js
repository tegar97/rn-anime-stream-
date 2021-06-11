import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import COLORS from "./../constant/colors";

const TabIcon = ({ focused, icon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: focused ? "#0d1625" : "",
        paddingVertical: 10,
        paddingHorizontal: focused ? 10 : 0,
        borderRadius: 10,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 23,
          height: 23,
          tintColor: focused ? COLORS.primary : "#cccc",
        }}
      />
      {focused && (
        <Text style={{ color: COLORS.primary, marginLeft: 20 }}>Home</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default TabIcon;
