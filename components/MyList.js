import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import COLORS from "../constant/colors";
import dummyData from "../constant/dummy";
import { SIZES } from "../constant/theme";
import PosterComponent from "./PosterComponent";

const MyList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>My List</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 20 }}
          data={dummyData.favorite}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return <PosterComponent item={item} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default MyList;
