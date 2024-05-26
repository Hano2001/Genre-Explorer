import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeDetailsFetch } from "../components/fetch/Fetch";
import RecipeDataConverter from "../components/RecipeDataConverter";

export default function Recipe() {
  const [data, setData] = useState<any>([]);
  const params: any = useParams();
  useEffect(() => {
    if (data.length === 0) {
      RecipeDetailsFetch(params.i)
        .then(setData)
        
    }
  }, []);
  const convertedData = (RecipeDataConverter(data))
  const {main, ingredients, measures} = convertedData;
  if (data.length === 0) {
    return (
      <>
        <h3>Loading Recipe...</h3>
      </>
    );
  } else {
    return (
      <div>
        <h1>Recipe for: {data.strMeal}</h1>
        {ingredients.map((ing, index) => {
            return <p>{measures[index]} {ing}</p>
        })}
        <h3>{main.strInstructions}</h3>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
