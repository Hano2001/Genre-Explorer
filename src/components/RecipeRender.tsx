import React, { createRef, useEffect, useState } from "react";
import { Imain, Tdata } from "./InterFaces_and_Types";
import YoutubeRender from "./YoutubeRender";
import DishImage from "./DishImage";

export default function RecipeRender(
  this: any,
  props: {
    main: Imain;
    ingredients: Tdata;
    measures: Tdata;
  }
) {
  const [scrollDown, setScrollDown] = useState(false);

  function ScrollDown(props: any) {
    const { scrollTop, offsetHeight, scrollHeight } = props;

    setScrollDown(scrollTop === scrollHeight - offsetHeight);
  }
  const { main, ingredients, measures } = props;
  const vowels = "AEIOU";
  const article = vowels.includes(main.strArea[0]) ? "An" : "A";
  const descriptionString = `${article} ${main.strArea} ${main.strCategory} dish!`;
  const backgroundStyles = {
    backgroundImage: `url('${main.strMealThumb}')`,
  } as React.CSSProperties;
  const youtubeID = main.strYoutube
    ? main.strYoutube.slice(main.strYoutube.indexOf("=") + 1)
    : "";

  return (
    <div
      className="bg-cover bg-no-repeat h-full overflow-hidden"
      style={backgroundStyles}
    >
      <div className="bg-black">
        <h1 className="text-center font-bold">{main.strMeal.toUpperCase()}</h1>
        <h1>{scrollDown ? "True" : "False"}</h1>
        <h1 className="text-center">{descriptionString}</h1>
        {main.strYoutube ? <YoutubeRender id={youtubeID} /> : ""}
      </div>
      <div className="flex flex-row bg-black">
        <h2 className="basis-1/3 text-center">Ingredients and Measures</h2>
        <h2 className="basis-1/3 text-center">Instructions</h2>
        <h2 className="basis-1/3 text-center">Looks good eh?</h2>
      </div>
      <div className="flex flex-row bg-light bg-opacity-50 h-full overflow-hidden">
        <table className="align-center basis-2/6 h-[75%]">
          <thead>
            <tr>
              <th className="text-left" scope="col">
                Ingredients
              </th>
              <th className="text-left" scope="col">
                Measure
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ing: string, index: number) => {
              return (
                <tr key={index} className="border solid black">
                  <td scope="row">{ing}</td>
                  <td scope="row">{measures[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          onScroll={(e) => ScrollDown(e.target)}
          id="scrollDiv"
          className="mt-2 h-[75%] basis-1/3 whitespace-pre-line px-3 mb-5 overflow-scroll no-scrollbar"
        >
          <span>{main.strInstructions}</span>
        </div>

        <DishImage imgUrl={main.strMealThumb} />
      </div>
    </div>
  );
}
