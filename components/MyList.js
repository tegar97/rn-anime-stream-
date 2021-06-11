import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constant/colors";

const MyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My List</Text>
      <TouchableOpacity>
        <Text style={styles.seeMore}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 24,

    color: "#dcdedc",
    letterSpacing: 1.4,
  },
  seeMore: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: COLORS.primary,
  },
});
export default MyList;
