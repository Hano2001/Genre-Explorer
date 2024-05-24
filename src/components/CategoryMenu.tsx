import React from "react";

export default function CategoryMenu({ list }: any) {
  return (
    <>
      <select name="categories" id="categories">
        <option value="x">Select a category</option>

        {list.map((category: any) => {
          return (
            <option value={category.idCategory}>{category.strCategory}</option>
          );
        })}
      </select>
    </>
  );
}
