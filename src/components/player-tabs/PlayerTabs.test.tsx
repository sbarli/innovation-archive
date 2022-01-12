import { render } from '@testing-library/react';
import React from 'react';

import { PlayerTabs } from '.';

test('renders player tabs', () => {
  const { getByTestId } = render(<PlayerTabs />);

  expect(getByTestId('player-tabs')).toBeInTheDocument();
});
