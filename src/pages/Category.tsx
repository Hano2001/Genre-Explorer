import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeFetchFunction } from "../components/fetch/Fetch";
import DishImage from "../components/DishImage";
import { IcategoryMealObject } from "../components/InterFaces_and_Types";

export default function Category() {
  const [data, setData] = useState<IcategoryMealObject | null>(null);
  const params: any = useParams();
  useEffect(() => {
    if (data === null) {
      RecipeFetchFunction(params.c).then(setData).then;
    }
  }, []);

  function FetchNewRecipe() {
    RecipeFetchFunction(params.c).then(setData).then;
  }

  const recipeEndpoint = "/recipe/" + data?.idMeal;

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <DishImage imgUrl={data?.strMealThumb!} />
      <div className="col-span-2">
        <h2>{data?.strMeal}</h2>
        <h1>Here is your random Recipe based on your choice! Happy Cooking!</h1>
      </div>
      <div className="row-span-2 col-span-2">
        <div className="flex flex-row">
        <button onClick={FetchNewRecipe}>Generate new Recipe</button>
        <button>
          <Link to={recipeEndpoint}>Recipe Details</Link>
        </button>
        </div>
      </div>
    </div>
  );
}
