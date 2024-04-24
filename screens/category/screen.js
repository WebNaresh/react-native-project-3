import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryGrid from "../../components/category-grid";
import { CATEGORIES } from "../../utility/dummy-data";

const CategoriesScreen = ({}) => {
  const navigation = useNavigation();
  const pressHandler = (item) => {
    navigation.navigate("MealsOverview", {
      categoryId: item.item.id,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <CategoryGrid item={item} onPress={pressHandler.bind(this, item)} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
});
