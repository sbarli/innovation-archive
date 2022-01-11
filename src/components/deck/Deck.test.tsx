import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { Deck } from '.';

test('renders deck', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Deck />
    </Provider>
  );

  expect(getByTestId('deck')).not.toBeInTheDocument();
});
