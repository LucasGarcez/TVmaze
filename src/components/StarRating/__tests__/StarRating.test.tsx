import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  it('the component rendered', () => {
    const {debug} = render(<StarRating rating={{average: 7}} />);
    debug();
  });
});
