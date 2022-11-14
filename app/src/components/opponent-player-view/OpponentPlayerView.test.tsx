import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { OpponentPlayerView } from '.';

test('renders something', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <OpponentPlayerView player="" />
    </Provider>
  );

  expect(getByTestId('opponent-player-view')).not.toBeInTheDocument();
});
