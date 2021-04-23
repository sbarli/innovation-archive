import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { Game } from '.';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );

  expect(getByText(/Game/i)).toBeInTheDocument();
});
