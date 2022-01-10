import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { Board } from '.';

test('renders null if no board exists for player', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Board player="" />
    </Provider>
  );

  expect(getByTestId('player-board')).not.toBeInTheDocument();
});
