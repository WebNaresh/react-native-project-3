import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MealsOverviewScreen from "./screens/category/MealsOverviewScreen";
import CategoriesScreen from "./screens/category/screen";
import MealDetails from "./screens/meal-detail/screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            options={{ title: "Meal Categories" }}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            // options={({ route }) => {
            //   return {
            //     title: route.params.categoryId,
            //   };
            // }}
            component={MealsOverviewScreen}
          />
          <Stack.Screen name="Meal Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#705050",
  },
});
