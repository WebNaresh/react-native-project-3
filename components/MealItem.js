import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetailsComponent from "./mealDetails";

const MealItem = ({ item }) => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate("Meal Details", { mealId: item.id });
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#bababa" }}
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed && Platform.OS === "ios" && { opacity: 0.5 },
        ]}
      >
        <View>
          <Image source={{ uri: item?.imageUrl }} style={styles.imageStyle} />
          <Text style={styles.title}>{item?.title}</Text>
        </View>
        <MealDetailsComponent
          duration={item?.duration}
          affordability={item?.affordability}
          complexity={item?.complexity}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
  },
});
