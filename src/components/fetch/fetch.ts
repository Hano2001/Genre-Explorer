export default async function FetchFunction() {
  //const result = "Harald"
  const result = await fetch(
    "https://randomuser.me/api/?results=30"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results;
      //element.textContent = data.results.length;
    });
  return await result;
}

//module.exports = fetchFunction;
