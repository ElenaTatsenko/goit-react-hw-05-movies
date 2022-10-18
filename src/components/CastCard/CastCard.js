import PropTypes from 'prop-types';

import { CastList, CastItem, CastPoster, CastName, CastCharacter } from './CastCard.styled';

const CastCard = ({ cast }) => {
  return (
     
      <CastList>
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <CastItem key={id}>
                <CastPoster
                  src={
                    profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg"
                  }
                  alt={character}
              />
              <CastName>{name ? name : "There is no information about name"}</CastName>
              <CastName>Character: <CastCharacter>{character}</CastCharacter></CastName>
            </CastItem>
          );
        })}
      </CastList>
  );
}

CastCard.propTypes = {
  cast: PropTypes.arrayOf(
         PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          profile_path: PropTypes.string,
          character: PropTypes.string,
    })
        ),
};

export default CastCard;