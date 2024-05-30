import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeDetailsFetch } from "../components/fetch/Fetch";
import { Iparams, IrecipeDetails } from "../components/InterFaces_and_Types";
import RecipeRender from "../components/RecipeRender";

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
    return (
      <>
        <RecipeRender
          main={data.main}
          ingredients={data.ingredients}
          measures={data.measures}
        />
      </>
    );

    //     const backgroundStyles = {
    //       "backgroundImage": `url('${main.strMealThumb}')`,
    //     } as React.CSSProperties;
    //     return (
    //       <div
    //         className="bg-cover bg-no-repeat h-full overflow-y-auto"
    //         style={backgroundStyles}
    //       >
    //         <h1 className="text-center">Recipe for: {main.strMeal}</h1>
    //         <div className="flex flex-row mt-6 z-1">
    //           <h2 className="basis-1/2 text-center">Ingredients and Measures</h2>
    //           <h2 className="basis-1/2 text-center">Instructions</h2>
    //         </div>

    //         <div className="flex flex-row bg-light bg-opacity-50">
    //           <table className="align-center basis-1/3 h-[90%]">
    //             <thead>
    //               <tr>
    //                 <th className="text-left" scope="col">
    //                   Ingredients
    //                 </th>
    //                 <th className="text-left" scope="col">
    //                   Measure
    //                 </th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {ingredients.map((ing: string, index: number) => {
    //                 return (
    //                   <tr key={index} className="border solid black">
    //                     <td scope="row">{ing}</td>
    //                     <td scope="row">{measures[index]}</td>
    //                   </tr>
    //                 );
    //               })}
    //             </tbody>
    //           </table>

    //           <span className="mt-2 basis-2/3 whitespace-pre-wrap px-3 mb-5">
    //             {main.strInstructions}
    //           </span>
    //         </div>

    //         <div className="bg-orange"></div>
    //       </div>
    //     );
  }
}
