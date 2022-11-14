import { render } from '@testing-library/react';
import React from 'react';

import { TabsPanel } from '.';

test('renders tabs panel', () => {
  const { getByTestId } = render(<TabsPanel />);

  expect(getByTestId('tabs-panel')).toBeInTheDocument();
});
