import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { globalHeader } from "./styles/global";
import TabNavigator from "./components/tab";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

export default function App() {
  return (
      <NavigationContainer  theme={MyTheme}>
        <StatusBar style="auto" />
        <TabNavigator />
      </NavigationContainer>
  );
}
