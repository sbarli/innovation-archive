import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { Achievements } from '.';

test('renders achievements', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Achievements />
    </Provider>
  );

  expect(getByTestId('achievements')).toBeInTheDocument();
});
