import { IRecipeObject, Imain, Tdata } from "./InterFaces_and_Types";

function dataCleaner(obj: IRecipeObject) {
  const checkArr = [undefined, null, "", " "];
  const newRecipeObj: Imain = {} as Imain
  const ingredients: Tdata = [];
  const measures: Tdata = [];

  Object.keys(obj).map((x) => {
    if (!checkArr.includes(obj[x])) {
      if (x.includes("Ingredient") || x.includes("Measure")) {
        x.includes("Measure")
          ? measures.push(obj[x])
          : ingredients.push((obj[x]).charAt(0).toUpperCase() + obj[x].slice(1));
      } else {
        
        newRecipeObj[x] = obj[x]
        
      }
    }
  });
  console.log(newRecipeObj)
  return { main: newRecipeObj, ingredients: ingredients, measures: measures };
}

export default function RecipeDataConverter(obj: any) {
  return dataCleaner(obj);
}
