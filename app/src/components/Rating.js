import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {

    return (
        <>
            <div className="rating">
                <span>
                    <FontAwesomeIcon color={ color } icon={ value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : farStar } />
                    <FontAwesomeIcon color={ color } icon={ value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : farStar } />
                    <FontAwesomeIcon color={ color } icon={ value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : farStar } />
                    <FontAwesomeIcon color={ color } icon={ value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : farStar } />
                    <FontAwesomeIcon color={ color } icon={ value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : farStar } />
                </span>
                <span>{ text && text }</span>
            </div>
        </>
    );
};

Rating.defaultProps = {
    color: '#ffd700',
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating;
