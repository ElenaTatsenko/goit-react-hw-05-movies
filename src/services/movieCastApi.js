export async function getMovieCast(movieId) {
  const key = 'f637ff1bcaf74a417438f57fb9f0b1d7';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  

  const response = await fetch(`${url}?api_key=${key}&language=en-US`);
  if (response.ok) {
    const movie = await response.json();

  return movie.cast;
  }
  return Promise.reject(new Error(`Someting wrong`))

};

