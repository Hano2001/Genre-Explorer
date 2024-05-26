import{ useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryMenu({ list }: any) {
  const [selected, setSelected] = useState("x");

  return (
    <>
      <label htmlFor="categories">Choose a category:</label>
      <select
        name="categories"
        id="categories"
        onChange={(value) => setSelected(value.target.value)}
      >
        <option value="x">-</option>

        {list.map((category: any) => {
          return (
            <option key={category.idCategory} value={category.strCategory}>{category.strCategory}</option>
          );
        })}
      </select>
      <Link to={`/${selected}`}>Enter</Link>
    </>
  );
}
