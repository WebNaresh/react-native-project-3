import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import List from "../../components/flatListComponent";
import MealDetailsComponent from "../../components/mealDetails";
import SubTitle from "../../components/subTitle";
import { MEALS } from "../../utility/dummy-data";

const MealDetails = () => {
  const { params } = useRoute();
  const { setOptions } = useNavigation();
  const mealId = params.mealId;
  const researchedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    setOptions({ title: researchedMeal.title });
  }, [researchedMeal, setOptions]);
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: researchedMeal?.imageUrl }}
        style={styles.imageStyle}
      />

      <Text style={styles.title}>{researchedMeal?.title}</Text>
      <MealDetailsComponent
        duration={researchedMeal?.duration}
        affordability={researchedMeal?.affordability}
        complexity={researchedMeal?.complexity}
        textStyle={styles.textStyle}
        containerStyle={styles.containerStyle}
      />
      <SubTitle title="Ingredients" />
      <List array={researchedMeal?.ingredients} />
      <SubTitle title="Steps" />
      <List array={researchedMeal?.steps} />
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginHorizontal: 20,
    marginVertical: 16,
  },
  textStyle: {
    color: "#fff",
  },
  containerStyle: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 16,
  },
});
