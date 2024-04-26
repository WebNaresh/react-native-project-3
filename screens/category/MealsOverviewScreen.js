import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import MealList from "../../components/meal-list";
import { CATEGORIES, MEALS } from "../../utility/dummy-data";

const MealsOverviewScreen = () => {
  const { setOptions } = useNavigation();
  const route = useRoute();
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(route.params.categoryId) >= 0
  );
  const categoryTitle = CATEGORIES.find(
    (cat) => cat.id === route.params.categoryId
  ).title;

  useLayoutEffect(() => {
    setOptions({ title: categoryTitle });
  }, [categoryTitle.setOptions]);
  return <MealList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;
