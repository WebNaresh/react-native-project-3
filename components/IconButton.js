import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const IconButton = ({ onPress, icon, color }) => {
  console.log(`🚀 ~ file: IconButton.js:6 ~ icon:`, icon);
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.pressableContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
        android_ripple={{ color: "#cccc" }}
      >
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
  },
  pressableContainer: {
    flex: 1,
    padding: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
