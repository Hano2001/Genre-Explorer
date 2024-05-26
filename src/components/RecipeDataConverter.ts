import { Imain, Tdata } from "./InterFaces_and_Types";

function dataCleaner(obj: any) {
  const checkArr = [undefined, null, "", " "];
  const newRecipeObj: Imain = {} as Imain
  const ingredients: Tdata = [];
  const measures: Tdata = [];
  // Object.keys(obj[0]).map(item => {
  //     console.log(item)
  // })

  Object.keys(obj).map((x:string) => {
    if (!checkArr.includes(obj[x])) {
      if (x.includes("Ingredient") || x.includes("Measure")) {
        x.includes("Measure")
          ? measures.push(obj[x])
          : ingredients.push(obj[x]);
      } else {
        
        newRecipeObj[x] = obj[x]
        
      }
    }
  });

  return { main: newRecipeObj, ingredients: ingredients, measures: measures };
}

export default function RecipeDataConverter(obj: any) {
  return dataCleaner(obj);
}
