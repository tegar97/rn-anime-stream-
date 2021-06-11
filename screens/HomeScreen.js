import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Banner from "../components/Banner";
import ContinueWatching from "../components/ContinueWatching";
import COLORS from "../constant/colors";
import MyList from "../components/MyList";
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Banner />
        <ContinueWatching />
        <MyList />
      </ScrollView>
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
