import { useState, useEffect } from "react";
import Loader from "components/Loader/Loader"; 
import { getTrends } from "services/trendsApi";
import MovieList from "components/MovieList/MovieList";
import { Title } from "./Home.styled";

const Home = () => {
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

       
    useEffect(() => {
        setIsLoading(true)
        
        getTrends()
            .then (setResults)
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
            .finally(setIsLoading(false))
    }, [])
    
    return (
        <>
            <Title> Trandy today</Title>
            {isLoading && <Loader/>}
            {results && <MovieList results={results}/>}
        </>
    )
}


export default Home;