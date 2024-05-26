import React from "react";
import FetchRender from "../components/FetchRender";

export default function Home() {
  return (
    <>
      <h1>Genre Explorer!</h1>
      <div>
        <FetchRender />
      </div>
    </>
  );
}
