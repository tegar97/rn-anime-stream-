import React from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import COLORS from "../constant/colors";
import dummyData from "../constant/dummy";
import icons from "../constant/icons";
import { SIZES } from "../constant/theme";
import ProgressBar from "./../components/ProgressBar";
const ContinueWatching = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue Watching</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 20 }}
        data={dummyData.continueWatching}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback>
              <View
                style={{
                  marginLeft: index === 0 ? 0 : 20,
                  marginRight:
                    index == dummyData.continueWatching.length - 1 ? 24 : 0,
                }}
              >
                <View>
                  <View style={styles.animeTitleContainer}>
                    <Text style={styles.animeTitle}>
                      {item.name.length > 30
                        ? item.name.substring(0, 25) + " .."
                        : item.name}
                    </Text>
                    <Text style={styles.currentEpisode}>
                      {item.currentEpisode}
                    </Text>
                  </View>
                  <Image
                    source={item.thumbnail}
                    resizeMode="cover"
                    style={{
                      width: SIZES.width / 2,
                      height: SIZES.width / 3 + 10,
                      borderRadius: 12,
                      opacity: 0.7,
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 20,
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      zIndex: 2,
                      width: "100%",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Image
                      source={icons.play_button}
                      style={{
                        width: 40,
                        height: 40,
                        tintColor: "#fff",
                        backgroundColor: "rgba(93, 173, 222,.5)",
                        overflow: "hidden",
                        borderRadius: 20,
                        marginVertical: 10,
                      }}
                    />
                  </View>
                  <ProgressBar
                    containerStyle={{
                      position: "absolute",
                      bottom: 0,
                      zIndex: 2,
                      width: "100%",
                    }}
                    barStyle={{ height: 3 }}
                    barPercentege={item.progress}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 24,

    color: "#dcdedc",
    letterSpacing: 1.4,
  },
  animeTitleContainer: {
    position: "absolute",
    zIndex: 2,
    padding: 8,
    width: "90%",
  },
  animeTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    color: "#dcdedc",
    letterSpacing: 1.6,
  },
  currentEpisode: {
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    color: "#dcdedc",
    letterSpacing: 1.6,
  },
});
export default ContinueWatching;
