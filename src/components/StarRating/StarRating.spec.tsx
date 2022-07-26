// como estamos trabalhando com componenetes precisamos do 'React'
import React from 'react';

// lib que vai rendenrizar o componente
import {render} from '@testing-library/react-native';

// componente importado que vai ser renderizado
import {StarRating} from './StarRating';

// describe - criar um conjunto de teste relacionados
describe('StarRating', () => {
  // forma de criar um teste
  it('the component rendered', () => {
    // forma de renderizar o componente
    const {debug} = render(<StarRating rating={{average: 7}} />);
    debug(); // ver como o componente está escrito
  });
});
