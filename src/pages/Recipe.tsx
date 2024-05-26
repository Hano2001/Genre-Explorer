import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  console.log(RecipeDataConverter(data))
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
      </div>
    );
  }
}
