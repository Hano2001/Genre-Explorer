import { useEffect, useState } from "react";
import { Imain } from "./InterFaces_and_Types";

export default function CategoryMenu({ list }: any) {
  const [selected, setSelected] = useState("x");

  useEffect(() => {
    if (selected !== "x") {
      console.log(selected);
      window.location.href = `/${selected}`;
    }
  }, [selected]);
  return (
    <>
      <label className="text-black" htmlFor="categories">Choose a category: </label>
      <select
      className="border border-black mt-1 mr-1 text-black"
        name="categories"
        id="categories"
        onChange={(value) => setSelected(value.target.value)}
      >
        <option value="x"></option>

        {list.map((category: Imain) => {
          return (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          );
        })}
      </select>
    </>
  );
}
