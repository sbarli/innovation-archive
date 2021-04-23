import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { CardIds } from '../../enums';
import { store } from '../../store';

import { Card } from '.';

test('renders something', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Card cardId={CardIds.ASTRONOMY} />
    </Provider>
  );

  expect(getByTestId('card')).toBeInTheDocument();
});
