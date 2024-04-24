import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ title, containerStyle, textStyle }) => {
  return (
    <View style={[styles.subTitleContainer, containerStyle]}>
      <Text style={[styles.subTitle, textStyle]}>{title}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 10,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
