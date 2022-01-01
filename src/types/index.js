import PropTypes from 'prop-types';

export const ProductShape = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string,
    promo: PropTypes.bool,
    active: PropTypes.bool,
};
