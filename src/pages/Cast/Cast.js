import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {getMovieCast} from 'services/movieCastApi';
import  CastCard  from 'components/CastCard/CastCard';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);    

  useEffect(() => {
    getMovieCast(Number(movieId))
      .then(setCast)
      .catch(error => {
        Promise.reject(new Error(`${error.message}`))
      })
  }, [movieId ]);
    
    return (
        <>
        {cast && cast.length > 0 ? (<CastCard cast={cast} />) : (<p>There is no information about cast</p>)}
            </>
    );
}

export default Cast;