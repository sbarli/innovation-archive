import { render } from '@testing-library/react';
import React from 'react';

import { TabContent } from '.';

test('renders tab content', () => {
  const { getByTestId } = render(<TabContent />);

  expect(getByTestId('tab-content')).toBeInTheDocument();
});
