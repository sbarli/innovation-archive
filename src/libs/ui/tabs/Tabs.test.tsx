import { render } from '@testing-library/react';
import React from 'react';

import { Tabs } from '.';

test('renders tabs', () => {
  const { getByTestId } = render(<Tabs />);

  expect(getByTestId('tabs')).toBeInTheDocument();
});
