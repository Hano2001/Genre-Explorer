import { Link } from "react-router-dom";

export default function Specs() {
  const appSpecs = [
    {
      dep: "Jest",
      desc: "Function testing",
      link: "https://jestjs.io/",
    },
    {
      dep: "Babel",
      desc: "Parser to make Jest work with TS",
      link: "https://babeljs.io/",
    },
    {
      dep: "Material UI",
      desc: "Used for icons",
      link: "https://mui.com/",
    },
    {
      dep: "React-router-dom",
      desc: "Used for routes, Links and window-location",
      link: "https://reactrouter.com",
    },
    {
      dep: "React-Youtube",
      desc: "Used for enabling youtube videos in the app",
      link: "https://www.npmjs.com/package/react-youtube",
    },
    {
      dep: "TailwindCSS",
      desc: "Cascading Style Sheets Framework",
      link: "https://tailwindcss.com/",
    },
    {
      dep: "TheMealDB",
      desc: "The API I build this app around.",
      Link: "https://www.themealdb.com/api.php",
    },
  ];
  return (
    <div className="flex flex-row justify-between m-3">
      <div className=" text-white basis-1/3">
        <h1 className="bg-white text-black">
          A little about this app and the journey of coding it
        </h1>
        <span className="text-center whitespace-pre-line">
          I made this app using React Vite TypeScript, my initial intention for
          this app, was to make a music app. That also randomized depending on
          chosen category, but in that case, I would be genre, and instead of
          recipe, it would be band or artist. But during this interesting
          process of making this recipe app, I learned something that every
          developer should know; If you plan on coding an app around an API,
          choose the API first, not the idea, I learned that the hard way.
        </span>
      </div>
      <div className="text-white basis-1/3 ">
        <h1 className="bg-white text-black">
          Main Dependecies and Frameworks I used to create this app
        </h1>
        <div>
          <table>
            <thead>
              <tr>
                <th className="text-left" scope="col">
                  Dependency
                </th>
                <th className="text-left" scope="col">
                  Usage
                </th>
                <th className="text-left" scope="col">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {appSpecs.map(
                (spec: { dep: string; desc: string; link: string }) => {
                  return (
                    <tr className="border border-white">
                      <td className="border border-white p-1" scope="row">
                        {spec.dep}:
                      </td>
                      <td className="p-1 border border-white" scope="row">
                        {spec.desc}
                      </td>
                      <td className="p-1 hover:underline" scope="row">
                        <Link className=" " to={spec.link}>
                          {spec.link}
                        </Link>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
