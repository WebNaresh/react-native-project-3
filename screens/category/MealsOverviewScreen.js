import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../../components/MealItem";
import { CATEGORIES, MEALS } from "../../utility/dummy-data";

const MealsOverviewScreen = ({}) => {
  const { setOptions } = useNavigation();
  const route = useRoute();
  const displayedMeaals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(route.params.categoryId) >= 0
  );
  const categoryTitle = CATEGORIES.find(
    (cat) => cat.id === route.params.categoryId
  ).title;

  useLayoutEffect(() => {
    setOptions({ title: categoryTitle });
  }, [categoryTitle.setOptions]);
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeaals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1a0000",
  },
});
