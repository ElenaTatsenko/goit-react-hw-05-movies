import { useState, useEffect, } from "react";
import {useLocation} from "react-router-dom"
import Loader from "components/Loader/Loader"; 
import { getSearch } from "services/searchApi";
import MovieList from "components/MovieList/MovieList";
import SearchBar from "components/SearchBar/SearchBar";
import { Title } from "./Movies.styled";

const Movies = () => {
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query') ?? '';

       
    useEffect(() => {
        if (query !== '') {
            setIsLoading(true);
        
            getSearch(query)
                .then(setResults)
                .catch(error => {
                    Promise.reject(new Error(`${error.message}`))
                })
                .finally(setIsLoading(false))
        }
         return
    }, [query]);
    
    return (
        <>
           
        {isLoading && <Loader />}

            <SearchBar />
            {results && <Title>Results according to query "{query}"</Title>}
        {results && <MovieList results={results} />}
        </>
    )
}
export default Movies;