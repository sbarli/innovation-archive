import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { ActionsBar } from '.';

test('renders actions bar', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ActionsBar />
    </Provider>
  );

  expect(getByTestId('actions-bar')).toBeInTheDocument();
});
