import React, { useEffect, useState } from "react";
import CategoryFetchFunction from "./fetch/Fetch.ts";
import ApiPlaceHolder from "./ApiPlaceHolder.tsx";
import CategoryMenu from "./CategoryMenu.tsx";

export default function FetchRender() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      CategoryFetchFunction().then(setData).then;
    }
  }, []);
  console.log(data)
  let categories = [...data]
  if(categories.length !== 0) {
    return (
    <>
      <div>
        <h1>Hello</h1>
        
        <CategoryMenu list={categories}/>
        {/* {data.map((item: any) => {
          return (
            <ApiPlaceHolder
              key={item.idCategory}
              name={item.strCategory}
              imgURL={item.strCategoryThumb}
            />
          );
        })} */}
      </div>
    </>
  );
  }
  else {
    <p>...</p>
  }
  
}
