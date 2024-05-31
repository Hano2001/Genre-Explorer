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
  }
}
