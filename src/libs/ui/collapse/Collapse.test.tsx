import { render } from '@testing-library/react';
import React from 'react';

import { Collapse } from '.';

test('renders collapse', () => {
  const { getByText } = render(<Collapse header="TEST HEADER">TESTING CONTENT</Collapse>);

  expect(getByText('TEST HEADER')).toBeInTheDocument();
  expect(getByText('TESTING CONTENT')).toBeInTheDocument();
});
