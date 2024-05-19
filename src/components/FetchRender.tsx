import React, { useEffect, useState } from "react";
import FetchFunction from "./fetch/Fetch.ts";
import ApiPlaceHolder from "./ApiPlaceHolder.tsx";

export default function FetchRender() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      FetchFunction().then(setData);
    }
  }, []);

  return (
    <>
      <div>
        <h1>Hello</h1>
        {data.map((item: any, index: number) => {
          return (
            <ApiPlaceHolder
              key={index}
              fName={item.name.first}
              lName={item.name.last}
              imgURL={item.picture.medium}
            />
          );
        })}
      </div>
    </>
  );
}
