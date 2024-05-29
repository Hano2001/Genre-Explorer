import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeDetailsFetch } from "../components/fetch/Fetch";
import { Iparams, IrecipeDetails } from "../components/InterFaces_and_Types";

export default function Recipe() {
  const [data, setData] = useState<IrecipeDetails | null>(null);
  const params: Iparams = useParams();
  useEffect(() => {
    if (data === null && params.i) {
      RecipeDetailsFetch(params.i).then(setData);
    }
  }, []);

  if (data === null) {
    return (
      <>
        <h3>Loading Recipe...</h3>
      </>
    );
  } else {
    const { main, ingredients, measures } = data;
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
