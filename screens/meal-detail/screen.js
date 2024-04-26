import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import IconButton from "../../components/IconButton";
import List from "../../components/flatListComponent";
import MealDetailsComponent from "../../components/mealDetails";
import SubTitle from "../../components/subTitle";
// import { useFavorite } from "../../store/context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/redux/favorites";
import { MEALS } from "../../utility/dummy-data";

const MealDetails = () => {
  const { params } = useRoute();
  // const { removeFavorite, addFavorite, ids } = useFavorite();
  const { ids } = useSelector((state) => state.favoriteMeals);
  const dispatch = useDispatch();

  const { setOptions } = useNavigation();
  const mealId = params.mealId;
  const researchedMeal = MEALS.find((meal) => meal.id === mealId);

  const onPress = () => {
    console.log("onPress");
    if (ids.includes(researchedMeal?.id)) {
      // removeFavorite(researchedMeal?.id);
      dispatch(removeFavorite({ id: researchedMeal?.id }));
    } else {
      dispatch(addFavorite({ id: researchedMeal?.id }));
    }
  };

  useLayoutEffect(() => {
    setOptions({
      title: researchedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            onPress={onPress}
            icon={ids.includes(researchedMeal?.id) ? "star" : "star-outline"}
            color={"white"}
          />
        );
      },
    });
  }, [researchedMeal, setOptions, researchedMeal?.id, ids]);
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
