import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeFetchFunction } from "../components/fetch/Fetch";
import DishImage from "../components/DishImage";
import { Imain } from "../components/InterFaces_and_Types";

export default function Category() {
  const [data, setData] = useState<Imain | null>(null);
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
        <h1>Random {params.c} dish</h1>
        <h1> Here you go, {data?.strMeal}</h1>
      </div>
      <div className="row-span-2 col-span-2">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <label htmlFor="new">Not happy?</label>
            <button
              className="hover:animate-bounce hover:bg-white hover:text-black m-5"
              id="new"
              onClick={FetchNewRecipe}
            >
              --{">"}Generate new Recipe{"<"}--
            </button>
          </div>
          <div className="basis-1/2">
            <label htmlFor="details">Interested? </label>
            <button
              id="details"
              className="hover:animate-bounce hover:bg-white hover:text-black m-5"
            >
              <Link to={recipeEndpoint}> --{">"}Recipe Details{"<"}--</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
