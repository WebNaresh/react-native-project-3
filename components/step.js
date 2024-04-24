import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Steps = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 22,
    marginVertical: 8,
    backgroundColor: "#e2b497",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
