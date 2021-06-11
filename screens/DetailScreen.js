import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import icons from "../constant/icons";
import { SIZES } from "../constant/theme";
import COLORS from "../constant/colors";

function DetailScreen() {
  const [readMore, setReadMore] = useState(false);

  const plot =
    " Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the 'King of Curses.'";
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/MyList/jujutsu_cover.png")}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={icons.left_arrow} style={styles.iconSetting} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.add} style={styles.iconSetting} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["transparent", "#010a1b"]}
          style={{
            position: "absolute",
            width: "100%",
            height: 200,
            justifyContent: "center",
          }}
        >
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.animeTitle}>JUJUTSU KAISEN</Text>
              <Text
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 15,
                  color: "#dcdedc",
                  marginTop: 8,
                }}
              >
                Adventure{" "}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>

      <View style={{ paddingHorizontal: 25 }}>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              paddingVertical: 15,
              alignItems: "center",
              width: 120,
              borderRadius: 40,
            }}
          >
            <Text style={{ color: "#dcdedc" }}>Resume</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: "#dcdedc",
              fontFamily: "Roboto-Bold",
              fontSize: 21,
            }}
          >
            The Plot
          </Text>
          <View>
            <Text
              style={{
                color: "#dcdedc",
                fontFamily: "Roboto-Regular",
                fontSize: 13,
                marginTop: 10,
              }}
            >
              {readMore ? plot : plot.substring(0, 230)}{" "}
              {!readMore && (
                <TouchableOpacity onPress={() => setReadMore(true)}>
                  <Text style={{ color: COLORS.primary, fontSize: 13 }}>
                    read more
                  </Text>
                </TouchableOpacity>
              )}
              {readMore && (
                <TouchableOpacity onPress={() => setReadMore(false)}>
                  <Text style={{ color: COLORS.primary, fontSize: 13 }}>
                    less more
                  </Text>
                </TouchableOpacity>
              )}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010a1b",
    flex: 1,
  },
  image: {
    width: "100%",
    height: SIZES.height * 0.65,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
    marginTop: 25,
    paddingHorizontal: 15,
  },
  iconSetting: {
    width: 30,
    height: 30,
    tintColor: "white",
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 10,
    marginTop: 10,
  },
  animeTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    color: "#ffff",
    letterSpacing: 1.6,
  },
});

export default DetailScreen;
