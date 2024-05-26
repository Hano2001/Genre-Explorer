import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeDetailsFetch } from "../components/fetch/Fetch";

export default function Recipe() {
  const [data, setData] = useState<any>([]);
  const params: any = useParams();
  useEffect(() => {
    if (data.length === 0) {
      RecipeDetailsFetch(params.i).then(setData);
    }
  }, []);

  const { main, ingredients, measures } = data;
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
        {ingredients.map((ing: string, index: number) => {
          return (
            <p key={index}>
              {measures[index]} {ing}
            </p>
          );
        })}
        <h3>{main.strInstructions}</h3>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
