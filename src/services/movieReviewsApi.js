export async function getMovieReviews(movieId) {
  const key = 'f637ff1bcaf74a417438f57fb9f0b1d7';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  

  const response = await fetch(`${url}?api_key=${key}&language=en-US&page=1`);
  if (response.ok) {
    const movie = await response.json();

  return movie.results;
  }
  return Promise.reject(new Error(`Someting wrong`))

};

