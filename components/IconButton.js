import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const IconButton = ({ onPress, icon, color }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
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
    padding: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  pressableContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.5,
  },
});
