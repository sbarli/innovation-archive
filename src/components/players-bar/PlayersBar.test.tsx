import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { PlayersBar } from '.';

test('renders something', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <PlayersBar />
    </Provider>
  );

  expect(getByTestId('players-bar')).toBeInTheDocument();
});
