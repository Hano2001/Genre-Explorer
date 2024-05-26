import { useEffect, useState } from "react";
import CategoryFetchFunction from "./fetch/Fetch.ts";
import CategoryMenu from "./CategoryMenu.tsx";

export default function FetchRender() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      CategoryFetchFunction().then(setData).then;
    }
  }, []);
  let categories = [...data];
  if (categories.length !== 0) {
    return (
      <>
        <div>
          <h1>Hello</h1>
          <CategoryMenu list={categories} />
        </div>
      </>
    );
  } else {
    <p>...</p>;
  }
}
