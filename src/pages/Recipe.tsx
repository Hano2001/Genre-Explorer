import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeDetailsFetch } from "../components/fetch/Fetch";

export default function Recipe() {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (data.length === 0) {
      RecipeDetailsFetch(params.i).then(setData).then;
    }
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Recipe for: {data[0].strMeal}</h1>
    </div>
  );
}
