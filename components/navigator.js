import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { globalHeader } from "../styles/global";


const Stack = createNativeStackNavigator();

export default function Navigator() {
  const header = globalHeader()
  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ itemId: 42 }} // Initial params
            options={{
              ...header,
              title: "Overview",
              /**
               * without interaction to its own screen
               * look on details screen for example of having interaction on it's scren
               * @returns 
               */
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{ itemId: 42 }} // Initial params
            options={({ navigation, route }) => ({
              // headerTitle: (props) => <LogoTitle {...props} />, // ising icons in header
              // Add a placeholder button without the `onPress` to avoid flicker
              headerRight: () => (
                <Button title="+" />
              ),
            })}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ route }) => ({
              title: route.params.name,
              headerBackVisible: false,
              headerShown: false,
            })} // using params as title
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
