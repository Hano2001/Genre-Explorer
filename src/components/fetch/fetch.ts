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
  console.log(category)
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

  ).then((response) => response.json())
  .then((data) => {
    return data
  });
  console.log(result)
  return await result
}

//module.exports = CategoryFetchFunction;
