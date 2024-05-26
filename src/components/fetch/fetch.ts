import RecipeDataConverter from "../RecipeDataConverter";

export default async function CategoryFetchFunction() {
  //const result = "Harald"

  // Recipe api: www.themealdb.com/api/json/v1/1/categories.php
  const result = await fetch(
    //"https://randomuser.me/api/?results=30"
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.categories;
      //element.textContent = data.results.length;
    });

  return await result;
}

export async function RecipeFetchFunction(category:string) {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

  ).then((response) => response.json())
  .then((data) => {
    return data
  });
  const randomIndex = Math.floor(Math.random() * result.meals.length);
  console.log("RandomIndex:",randomIndex);
  return await result.meals[randomIndex];
}

export async function RecipeDetailsFetch(id:string) {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  return await RecipeDataConverter(result.meals[0]);
}

//module.exports = CategoryFetchFunction;
