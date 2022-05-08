import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryMealScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryMealScreen;
