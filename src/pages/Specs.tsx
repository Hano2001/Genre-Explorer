import React from "react";

export default function Specs() {
  //     "@babel/preset-typescript": "^7.24.1",
  //     "@emotion/react": "^11.11.4",
  //     "@emotion/styled": "^11.11.5",
  //     "@mui/icons-material": "^5.15.19",
  //     "@mui/material": "^5.15.19",
  //     "react": "^18.2.0",
  //     "react-dom": "^18.2.0",
  //     "react-router-dom": "^6.23.1",
  //     "react-youtube": "^10.1.0"
  //   },
  const appSpecs = [
    {
      dep: "Babel and Jest",
      desc: "Function testing and TS-parser",
    },
    {
      dep: "Material UI",
      desc: "Used for icons",
    },
    {
      dep: "React-router-dom",
      desc: "Used for routes, Links and window-location",
    },
    {
      dep: "React-Youtube",
      desc: "Used for enabling youtube videos in the app",
    },
    {
      dep: "TailwindCSS",
      desc: "Cascading Style Sheets Framework",
    },
  ];
  return (
    <div className="flex flex-row m-5">
      <div className=" text-white basis-2/3 m-5 ml-0">
        <span className="text-center whitespace-pre-line">
          I made this app using React Vite TypeScript, my initial intention for
          this app, was to make a music app. That also randomized depending on
          catagory, but in that case, I would be genre, and instead of recipe,
          it would be band or artist. But during this interesting process of
          making this recipe app, I learned something that every developer
          should know; If you plan on coding an app around an API, choose the
          API first, not the idea, I learned that the hard way.
        </span>
      </div>
      <div className="text-white basis-1/3 ">
        <h1>Main Dependecies and Frameworks I used to create this app</h1>
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
              </tr>
            </thead>
            <tbody className="w-full">
              {appSpecs.map((spec: { dep: string; desc: string }) => {
                return (
                  <tr className="border border-white">
                    <td className="border border-white p-1" scope="row">
                      {spec.dep}:
                    </td>
                    <td className="p-1" scope="row">
                      {spec.desc}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
