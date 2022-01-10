import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';
import { createInitialResourceTotals } from '../../utils/cardUtils';

import { ResourceTotals } from '.';

test('renders resource totals for player', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ResourceTotals resourceTotals={createInitialResourceTotals()} />
    </Provider>
  );

  expect(getByTestId('player-resource-totals')).toBeInTheDocument();
});
