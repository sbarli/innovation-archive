import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { CardIds } from '../../enums';
import { store } from '../../store';

import { CardDetails } from '.';

test('renders something', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CardDetails cardId={CardIds.ASTRONOMY} />
    </Provider>
  );

  expect(getByTestId('card-front')).toBeInTheDocument();
});
