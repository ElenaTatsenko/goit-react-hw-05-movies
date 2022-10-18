export async function getMovieDetails(movieId) {
  const key = 'f637ff1bcaf74a417438f57fb9f0b1d7';
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  

  const response = await fetch(`${url}?api_key=${key}&language=en-US`);
  if (response.ok) {
    return await response.json();
  }
  
  return Promise.reject(new Error(`Someting wrong`))

};
