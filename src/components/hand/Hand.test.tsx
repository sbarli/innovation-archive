import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { Hand } from '.';

test('renders null if no hand exists for player', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Hand player="" />
    </Provider>
  );

  expect(getByTestId('player-hand')).not.toBeInTheDocument();
});
