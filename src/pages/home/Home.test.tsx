import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { Home } from '.';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(getByText(/Home/i)).toBeInTheDocument();
});
