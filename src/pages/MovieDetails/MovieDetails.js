import { useState, useEffect, Suspense } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";

import {getMovieDetails} from "services/movieDetailsApi";
import { MovieCard } from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import {GoBack , Link, } from './MovieDetails.styled';


const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { movieId } = useParams();
  const location = useLocation();
  


  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(Number(movieId))
      .then(setMovieDetails)
      .catch(error => {
        Promise.reject(new Error(`${error.message}`))
      })
      .finally(setIsLoading(false))
      }, [movieId]);
    
    
    return (
      <>
        {isLoading && <Loader />}
        {movieDetails && <GoBack to={location?.state?.from ?? '/movies'}>Go Back</GoBack>}
        {movieDetails && <MovieCard movie={movieDetails} />}
        <Link to={`cast`} state={{ from: location.state?.from ?? '/' }}> Cast</Link>
        <Link to={`reviews`} state={{ from: location.state?.from ?? '/' }}>Review</Link>
      
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
  
}

export default MovieDetails;
    