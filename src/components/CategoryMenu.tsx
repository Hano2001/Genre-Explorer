import React from "react";

export default function CategoryMenu({ list }: any) {
  return (
    <>
    <label htmlFor="categories">Choose a category:</label>
      <select name="categories" id="categories">
        <option value="x">-</option>

        {list.map((category: any) => {
          return (
            <option value={category.idCategory}>{category.strCategory}</option>
          );
        })}
      </select>
    </>
  );
}
