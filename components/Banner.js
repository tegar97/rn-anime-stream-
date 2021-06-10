import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground,
  Button,
} from "react-native";
import dummyData from "../constant/dummy";
import { SIZES } from "../constant/theme";
import { Ionicons } from "@expo/vector-icons";

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
              opacity: 0.75,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-end",
              }}
            >
              {" "}
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <View style={styles.bannerInfo}>
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  Kayaharu Gatouge
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "bold",
                    marginTop: 5,
                  }}
                >
                  Demon Slayer : Kimetsu No Yaiba
                </Text>
                <Text style={{ color: "#fff" }}>Demon Slayer</Text>
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
    marginVertical: 10,
    width: "80%",
  },
});

export default Banner;
