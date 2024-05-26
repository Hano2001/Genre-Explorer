import FetchRender from "../components/FetchRender";

export default function Home() {
  return (
    <>
      <h1>Recipes for the uninspired!</h1>
      <div>
        <FetchRender />
      </div>
    </>
  );
}
