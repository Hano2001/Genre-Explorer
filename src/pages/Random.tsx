import { useEffect, useState } from "react";
import { IrecipeDetails } from "../components/InterFaces_and_Types";
import RecipeRender from "../components/RecipeRender";
import { RandomRecipeFetch } from "../components/fetch/Fetch";

export default function Random() {
  const [data, setData] = useState<IrecipeDetails | null>(null);
  useEffect(() => {
    if (data === null) {
      RandomRecipeFetch().then(setData);
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
  }
}
