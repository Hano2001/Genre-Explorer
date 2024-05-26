import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Values } from "../components/InterFaces";
import { RecipeFetchFunction } from "../components/fetch/Fetch";

export default function Category() {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (data.length === 0) {
      RecipeFetchFunction(params.c).then(setData).then;
    }
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Category</h1>
      <h2>{params.c}</h2>
    </div>
  );
}
