export async function getSearch(query) {
  const key = 'f637ff1bcaf74a417438f57fb9f0b1d7';
  const url = 'https://api.themoviedb.org/3/search/movie';
  

  const response = await fetch(`${url}?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=fals`);
  if (response.ok) {
    const data = await response.json();

  return data.results;
  }
  return Promise.reject(new Error(`Someting wrong`))

};
  

