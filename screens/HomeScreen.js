import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import Banner from "../components/Banner";
import ContinueWatching from "../components/ContinueWatching";
import COLORS from "../constant/colors";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Banner />
      <ContinueWatching />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
export default HomeScreen;
