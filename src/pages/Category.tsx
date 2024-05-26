import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeFetchFunction } from "../components/fetch/Fetch";
import DishImage from "../components/DishImage";

export default function Category() {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (data.length === 0) {
      RecipeFetchFunction(params.c).then(setData).then;
    }
  }, []);

  function FetchNewRecipe() {
    RecipeFetchFunction(params.c).then(setData).then;
  }

  const recipeEndpoint = "/recipe/" + data.idMeal;

  return (
    <div>
      <h1>Here is your random Recipe! Happy Cooking!</h1>
      <h2>{data.strMeal}</h2>
      <button onClick={FetchNewRecipe}>Generate new Recipe</button>
      <DishImage imgUrl={data.strMealThumb}/>
      <Link to={recipeEndpoint}>Recipe Details</Link>
      <Link to="/">Back to Categories</Link>
    </div>
  );
}
