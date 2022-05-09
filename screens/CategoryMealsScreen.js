import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Button
        title="Go to details"
        onPress={() => {
          props.navigation.navigate("MealDetails");
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
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

export default CategoryMealsScreen;
