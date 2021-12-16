import { Wrapper } from './Rating.styles';
import React from 'react';
import { ReactComponent as StarBorder } from 'assets/icons/star_border.svg';
import { ReactComponent as Star } from 'assets/icons/star.svg';

const Rating = ({ rating = 2 }) => {
  return (
    <Wrapper>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return index <= rating ? <Star key={index} /> : <StarBorder key={index} />;
      })}
    </Wrapper>
  );
};

export default Rating;
