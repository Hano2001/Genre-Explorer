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
    console.log(main.strMealThumb);
    //const background = "bg-gradient-to-t"
    //const background = `bg-[url('${main.strMealthumb}')]`
    return (
      <div className="opacity-50">
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
                <th className="text-left" scope="col">Ingredient</th>
                <th className="text-left" scope="col">Measure</th>
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
          
          <span className="basis-1/2 break-after-column">{main.strInstructions}</span>
        </div>
        <Link to="/">Home</Link>

        <div className="bg-orange">
          <p>test area</p>
        </div>
      </div>
    );
  }
}
