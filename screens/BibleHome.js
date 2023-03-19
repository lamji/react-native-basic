
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const BibleHome = () => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
   padding: 10
  },
});

export default BibleHome;