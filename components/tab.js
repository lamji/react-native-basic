import * as React from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/TabHome";
import SettingsScreen from "../screens/TabSetting";
import CenterScreen from "../screens/TabCenter";
import { globalHeader } from "../styles/global";
import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import MyTabBar from "./myTabBar";
import { MainStackNavigator } from "./navigation";

const Tab = createBottomTabNavigator();
const header = globalHeader();

export default function TabNavigator() {
  const [isSave, setIsSave] = React.useState(false);

  /**
   * fuction that handle go back press
   */
  const handleGoBack = ({ navigation}) => {
    setIsSave(false)
    navigation.goBack()
  }

  /**
   * function that handle navigation
   */
  const handleNavigate = ({ navigation }) => {
    setIsSave(true);
    navigation.navigate("Profile");
  };

  /**
   * Function that handles on Save
   */
  const handleSave = () => {
    alert("save this");
  };

  /**
   * Hadle header button press
   * @param {navigation}
   */
  const handlePress = ({ navigation }) => {
    isSave ? handleSave() : handleNavigate({ navigation });
  };

  return (
    <Tab.Navigator
      // tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#EFEFEF",
          height: 60,
          marginBottom: 6,
          borderRadius: 10,
          marginHorizontal: 20,
        },
        tabBarIcon: ({ focused, size, colour }) => {
          return (
            <View>
              {route.name === "bible" ? (
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      marginTop: -36,
                      backgroundColor: "#f4511e",
                      padding: 20,
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                    }}
                  >
                    <FontAwesome5 name="bible" size={27} color="white" />
                  </View>
                  <Text>Bible</Text>
                </View>
              ) : route.name === "notes" ? (
                <FontAwesome
                  name="pencil-square-o"
                  size={27}
                  color={focused ? "#f4511e" : "black"}
                />
              ) : (
                <AntDesign
                  name={route.name}
                  size={27}
                  color={focused ? "#f4511e" : "black"}
                />
              )}
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={MainStackNavigator}
        options={({ navigation }) => ({
          ...header,
          headerRight: () => {
            return (
              <Button
                onPress={() => handlePress({ navigation })}
                title={isSave ? "Save" : " + "}
                color="#fff"
              />
            );
          },
          headerLeft: () => {
            return (
              <View>
                {isSave ? (
                  <TouchableOpacity onPress={() => handleGoBack({navigation})}>
                    <View
                      style={{
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",

                        paddingHorizontal: 10,
                      }}
                    >
                      <Text style={{ color: "white" }}>Back</Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="bible"
        component={CenterScreen}
        options={{
          ...header,
        }}
      />
      <Tab.Screen
        name="notes"
        component={SettingsScreen}
        options={{
          ...header,
        }}
      />
    </Tab.Navigator>
  );
}
