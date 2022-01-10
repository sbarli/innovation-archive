import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { Stats } from '.';

test('renders null if no stats exists for player', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Stats player="" />
    </Provider>
  );

  expect(getByTestId('player-stats')).not.toBeInTheDocument();
});
