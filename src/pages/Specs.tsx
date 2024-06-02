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
    <div className="text-white">
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
          <tbody>
            {appSpecs.map((spec: { dep: string; desc: string }) => {
              return (
                <tr>
                  <td scope="row">{spec.dep}:</td>
                  <td scope="row">{spec.desc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}