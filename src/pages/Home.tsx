export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">
          Recipes for the uninspired!
        </h1>
        <div className="w-[50%] place-content-center text-center sticky ml-[25%] mt-[10%]">
          <p className="text-wrap">
            Tired from working all day and don't know what to cook? We got you!
            This is just a small app with a simple API I found, with this app, I
            will randomize your future dinner! You can either randomize from a
            category, or just give me total freedom and randomize a dish for
            you!
          </p>
        </div>
      </div>
    </>
  );
}
