import RecipeDataConverter from "../RecipeDataConverter";

export default async function CategoryFetchFunction() {
  const result = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.categories;
    });

  return await result;
}

export async function RecipeFetchFunction(category: string) {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  const randomIndex = Math.floor(Math.random() * result.meals.length);

  return await result.meals[randomIndex];
}

export async function RecipeDetailsFetch(id: string) {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return RecipeDataConverter(result.meals[0]);
}

export async function RandomRecipeFetch() {
  const result = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return RecipeDataConverter(result.meals[0]);
}
