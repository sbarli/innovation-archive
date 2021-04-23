import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { CurrentPlayerView } from '.';

test('renders something', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CurrentPlayerView />
    </Provider>
  );

  expect(getByTestId('current-player-view')).not.toBeInTheDocument();
});
