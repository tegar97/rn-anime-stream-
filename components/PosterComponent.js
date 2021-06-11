import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import COLORS from "../constant/colors";
import dummyData from "../constant/dummy";
import { SIZES } from "../constant/theme";

const PosterComponent = ({ item, index, navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("DetailScreen")}
    >
      <View
        style={{
          marginLeft: index === 0 ? 0 : 20,
          marginRight: index == dummyData.favorite.length - 1 ? 24 : 0,
        }}
      >
        <Image
          source={item.thumbnail}
          resizeMode="cover"
          style={{
            width: SIZES.width / 3,
            height: SIZES.width / 2,
            borderRadius: 20,
            opacity: 1,
          }}
        />

        {item.NewEpisode ? (
          <View
            style={{
              position: "absolute",
              width: "100%",
              bottom: 0,
              backgroundColor: COLORS.primary,
              borderRadius: 2,
              alignItems: "center",
              padding: 4,
            }}
          >
            <Text style={{ color: "#fff", zIndex: 2 }}>
              {item.NewEpisode ? "New Episode" : ""}
            </Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PosterComponent;
