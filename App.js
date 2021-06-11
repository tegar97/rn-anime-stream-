// In App.js in a new project

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import Tabs from "./tab/tab";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
const Stack = createStackNavigator();

let customFonts = {
  "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
};

function App() {
  const [fontsLoad, setFontLoad] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync(customFonts);
      setFontLoad(true);
    }
    loadFont();
  }, []);

  if (fontsLoad) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
}

export default App;
