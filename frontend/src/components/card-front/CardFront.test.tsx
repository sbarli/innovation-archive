import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { CardIds } from '../../enums';
import { store } from '../../store';

import { CardFront } from '.';

test('renders something', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CardFront cardId={CardIds.ASTRONOMY} />
    </Provider>
  );

  expect(getByTestId('card-front')).toBeInTheDocument();
});
