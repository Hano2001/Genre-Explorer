export default async function FetchFunction() {
  //const result = "Harald"
  const result = await fetch(
    "https://randomuser.me/api/?gender=female&results=30"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results;
      //element.textContent = data.results.length;
    });
  console.log(result);
  return await result;
}

//module.exports = fetchFunction;
