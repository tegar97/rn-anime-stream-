import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailScreen({ route }) {
  const { Name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Text>{Name}</Text>
    </View>
  );
}

export default DetailScreen;
