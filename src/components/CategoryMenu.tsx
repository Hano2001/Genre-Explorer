import React, { useState } from "react";

export default function CategoryMenu({ list }: any) {
    const [selected, setSelected] = useState("x");
  return (
    <>
    <label htmlFor="categories">Choose a category:</label>
      <select name="categories" id="categories" onChange={(value) => setSelected(value.target.value)}>
        <option value="x">-</option>

        {list.map((category: any) => {
          return (
            <option value={category.idCategory}>{category.strCategory}</option>
          );
        })}
      </select>
      <button onClick={() => console.log(selected)}>TEST</button>
    </>
  );
}
