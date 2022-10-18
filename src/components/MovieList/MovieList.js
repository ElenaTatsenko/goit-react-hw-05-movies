import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import { List, Movie, Link } from "./MovieList.styled"



const MovieList = ({ results  }) => {
    const location = useLocation();
    
    return (
        <>
            <List>
                {results.map(({ id, title }) => (
                    <Movie key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            {title ? title : "There is no title"}
                        </Link>
                    </Movie>
                ))}
            </List>
        </>
    )
}

MovieList.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape(
             {
       id: PropTypes.number,
       title: PropTypes.string,
    }
         )
        )
   
};
export default MovieList;