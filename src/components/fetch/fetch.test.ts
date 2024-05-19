import FetchFunction from "./Fetch";

describe("Testing the API", () => {
  test("Fetching", async () => {
    const result = await FetchFunction();
    expect(result.length).toEqual(30);
  });
});
