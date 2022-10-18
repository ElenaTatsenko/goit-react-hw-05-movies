import {
    Container,
    MoviePoster,
    MovieWrapper,
    MovieTitle,
    MovieDetailsTitle,
    MovieGenres,
    MovieOverview,
    MovieAverage,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
const { poster_path, title, genres, overview, vote_average } = movie
    
    return (
        <Container>
            <MoviePoster
                src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "No poster"}
                alt={title}
            />
            <MovieWrapper>
                <MovieTitle>{title}</MovieTitle>
                <MovieDetailsTitle>User score:</MovieDetailsTitle>
                <MovieAverage>{vote_average.toFixed(1)}</MovieAverage>
                <MovieDetailsTitle>Overview</MovieDetailsTitle>
                <MovieOverview>{overview}</MovieOverview>
                <MovieDetailsTitle>Genres</MovieDetailsTitle>
                <MovieGenres>{genres.map(({ name }) => name).join(', ')}</MovieGenres>
          </MovieWrapper>
      </Container>
  );
}
export default MovieCard;