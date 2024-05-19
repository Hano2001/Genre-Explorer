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

  console.log(data);
  return (
    <>
      <div>
        <h1>Hello</h1>
        {data.map((item: any) => {
          return <ApiPlaceHolder fName={item.name.first} lName={item.name.last} imgURL={item.picture.medium}/>
        })}
      </div>
    </>
  );
}
