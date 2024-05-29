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
        <table>
          <caption>Recipe for: {main.strMeal}</caption>
          <thead>
            <tr>
              <th scope="col">Ingredient</th>
              <th scope="col">Measure</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ing: string, index: number) => {
              return (
                <tr key={index}>
                  <td scope="row">{ing}</td>
                  <td scope="row">{measures[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3>{main.strInstructions}</h3>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
