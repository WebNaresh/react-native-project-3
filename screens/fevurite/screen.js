import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../../components/meal-list";
import { MEALS } from "../../utility/dummy-data";

const Favorite = () => {
  // const { ids } = useFavorite();
  const { ids } = useSelector((state) => state.favoriteMeals);
  const favoriteMeals = MEALS.filter((meal) => {
    return ids.includes(meal.id);
  });
  return (
    <View style={styles.container}>
      {favoriteMeals?.length === 0 ? (
        <Text style={styles.textStyles}>
          No favorite meals found. Start adding some!
        </Text>
      ) : (
        <MealList displayedMeals={favoriteMeals} />
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
