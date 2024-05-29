import FetchRender from "../components/FetchRender";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold">Recipes for the uninspired!</h1>
      <div className="bg-lightyellow">
        <FetchRender />
      </div>
    </>
  );
}
