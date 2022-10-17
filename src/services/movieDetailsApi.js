export async function getMovieDetails() {
  const key = 'f637ff1bcaf74a417438f57fb9f0b1d7';
  const url = 'https://api.themoviedb.org/3/movie/{movie_id}';
  

  const response = await fetch(`${url}?api_key=${key}&language=en-US`);
  if (response.ok) {
    const data = await response.json();

  return data.results;
  }
  return Promise.reject(new Error(`Someting wrong`))

};
