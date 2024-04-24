import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailsComponent = ({
  duration,
  complexity,
  affordability,
  textStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.details, containerStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetailsComponent;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#333",
  },
});
