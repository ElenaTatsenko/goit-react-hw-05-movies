import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieReviews} from 'services/movieReviewsApi';
import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';

const Reviews = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState(null);

  useEffect(() => {
    getMovieReviews(Number(movieId))
      .then(setResults)
      .catch(error => {
        Promise.reject(new Error(`${error.message}`))
      })
  }, [movieId]);

  return (
    <>
      {results && results.length > 0 ? (<ReviewsCard results={results} />) :
        (<p>No one has left a review for this movie yet</p>)}
    </>
  )
}

export default Reviews;