export async function getMovieCast() {
  const key = 'f637ff1bcaf74a417438f57fb9f0b1d7';
  const url = 'https://api.themoviedb.org/3/movie/{movie_id}/credits';
  

  const response = await fetch(`${url}?api_key=${key}&language=en-US`);
  const data = await response.json();

  return data.results;

};

