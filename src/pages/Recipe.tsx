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
    // const backGroundClass = `bg-[url(${main.strMealThumb})]`
    const testStyles = {
      "background-image":
        `url('${main.strMealThumb}')`,
    } as React.CSSProperties;
    return (
      // <div className={`bg-cover bg-[url(${main.strMealThumb})]`}>
      <div className="bg-no-repeat h-full"style={testStyles}>
        <h1 className="text-center">Recipe for: {main.strMeal}</h1>
        <div className="flex flex-row mt-6">
          <h2 className="basis-1/2 text-center">Ingredients and Measures</h2>
          <h2 className="basis-1/2 text-center">Instructions</h2>
        </div>

        <div className="flex flex-row">
          {/* <div className={`bg-[url('${main.strMealThumb}')]`}> */}
          <table className="border solid black align-center basis-1/2 px-8">
            <thead>
              <tr>
                <th className="text-left" scope="col">
                  Ingredient
                </th>
                <th className="text-left" scope="col">
                  Measure
                </th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ing: string, index: number) => {
                return (
                  <tr key={index} className="border solid black">
                    <td scope="row">{ing}</td>
                    <td scope="row">{measures[index]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <span className="basis-1/2 whitespace-pre-wrap px-8">
            {main.strInstructions}
          </span>
        </div>
        <Link to="/">Home</Link>

        <div className="bg-orange">
          <p>test area</p>
        </div>
      </div>
    );
  }
}
