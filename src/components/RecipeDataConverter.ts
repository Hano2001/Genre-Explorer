function dataCleaner(obj: any) {
  const checkArr = [undefined, null, "", " "];
  const newRecipeArr: any = [];
  const ingredients: any = [];
  const measures: any = [];
  // Object.keys(obj[0]).map(item => {
  //     console.log(item)
  // })

  Object.keys(obj).map((x) => {
    if (!checkArr.includes(obj[x])) {
      if (x.includes("Ingredient") || x.includes("Measure")) {
        x.includes("Measure")
          ? measures.push(obj[x])
          : ingredients.push(obj[x]);
      } else {
        const newItem: any = {};
        newItem[x] = obj[x];
        newRecipeArr.push(newItem);
      }
    }
  });

  return { main: newRecipeArr, ingredients: ingredients, measures: measures };
}

export default function RecipeDataConverter(obj: any) {
  return dataCleaner(obj);
}
