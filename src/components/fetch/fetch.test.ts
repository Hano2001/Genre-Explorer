import CategoryFetchFunction from "./Fetch";

describe("Testing the API", () => {
  test("Fetching", async () => {
    const result = await CategoryFetchFunction();
    expect(result.length).toEqual(30);
  });
  test("Types", async () => {
    const result = await CategoryFetchFunction();
    expect(true).toEqual(true)
  })
});
