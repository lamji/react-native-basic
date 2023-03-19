import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "../screens/Home";
// import About from "../screens/About";
// import Contact from "../screens/Contact";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/ProfileScreen";
import BibleHome from "../screens/BibleHome";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={BibleHome}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};


export { MainStackNavigator };
