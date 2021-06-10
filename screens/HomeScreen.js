import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Details "
        onPress={() =>
          navigation.navigate("Detail", {
            Name: "tegar",
          })
        }
      />
    </View>
  );
}

export default HomeScreen;
