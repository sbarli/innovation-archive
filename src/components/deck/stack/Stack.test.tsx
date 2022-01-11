import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../store';

import { Stack } from '.';

test('renders stack', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Stack age={1} cards={[1]} />
    </Provider>
  );

  expect(getByTestId('stack-1')).toBeInTheDocument();
});
