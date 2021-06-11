import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import dummyData from "../constant/dummy";
import { SIZES } from "../constant/theme";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constant/colors";
import { TouchableHighlight } from "react-native-gesture-handler";

const Banner = () => {
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  function BannerItem({ item, index }) {
    return (
      <TouchableWithoutFeedback onPress={() => console.log("tetet")}>
        <View
          style={{
            flex: 1,
            width: SIZES.width,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={item.thumbnail}
            resizeMode="cover"
            style={{
              width: SIZES.width * 0.9,
              height: SIZES.width * 0.7,
            }}
            imageStyle={{
              borderRadius: 20,
              opacity: 0.62,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <View style={styles.bannerInfo}>
                <Text style={styles.authorText}>Kayaharu Gatouge</Text>
                <View style={{ marginBottom: 10 }}>
                  <Text style={styles.titleText}>Demon Slayer :</Text>
                  <Text style={styles.JapanName}>Kimetsu No Yaiba</Text>
                </View>
                <Text style={styles.studioName}>Ufotable Studio</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <View style={styles.container}>
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        data={dummyData.newSeason}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: newSeasonScrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        renderItem={BannerItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  bannerInfo: {
    flexDirection: "column",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 18,
    width: "80%",
  },
  authorText: {
    fontSize: 17,
    letterSpacing: 1.2,
    fontFamily: "Roboto-Light",
    color: "#fff",
    marginTop: 10,
  },
  titleText: {
    fontSize: 26,
    fontFamily: "Roboto-Bold",
    color: "#fff",
    marginTop: 5,
    letterSpacing: 1,
  },
  JapanName: {
    fontSize: 26,
    fontFamily: "Roboto-Bold",
    color: "#ffff",
    letterSpacing: 1.5,
  },
  studioName: {
    fontSize: 12,
    fontFamily: "Roboto-Light",
    color: "#ffff",
    letterSpacing: 1.3,
  },
  ButtoonWatchNow: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,

    color: "#ffff",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
  },
});

export default Banner;
