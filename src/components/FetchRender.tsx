import React, { useEffect, useState } from "react";
import FetchFunction from "./fetch/Fetch.ts";
import ApiPlaceHolder from "./ApiPlaceHolder.tsx";

export default function FetchRender() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      FetchFunction().then(setData).then;
    }
  }, []);
  console.log(data)
  return (
    <>
      <div>
        <h1>Hello</h1>
        {data.map((item: any) => {
          return (
            <ApiPlaceHolder
              key={item.idCategory}
              name={item.strCategory}
              imgURL={item.strCategoryThumb}
            />
          );
        })}
      </div>
    </>
  );
}
