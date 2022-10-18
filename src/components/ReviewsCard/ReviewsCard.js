import PropTypes from 'prop-types';

import { ReviewAutor, ReviewContent, RewievList } from './RewiewsCard.styled';

export const ReviewsCard = ({ results }) => {
    return (
        <ul>{results.map(({ id, author, content }) => {
            return (
                <RewievList key={id} >
                    <ReviewAutor>{author ? author : "There is no information about name"}</ReviewAutor>
                    <ReviewContent>{content}</ReviewContent>
                </RewievList>
            )
        }
        )}
        </ul>
    );
};

ReviewsCard.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            author: PropTypes.string,
            content: PropTypes.string,
         })
    ),
};