import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGrid = ({ item, onPress }) => {
  return (
    <View style={[styles.outerContainer]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: item?.item?.color },
          ]}
        >
          <Text style={styles.title}>{item?.item?.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  outerContainer: {
    height: 150,
    flex: 1,
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    padding: 16,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
