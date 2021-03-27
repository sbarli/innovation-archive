import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { StartGame } from '.';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <StartGame />
    </Provider>
  );

  expect(getByText(/Start/i)).toBeInTheDocument();
});
