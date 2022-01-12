import { render } from '@testing-library/react';
import React from 'react';

import noop from '../utils/noop';

import { TabItem } from '.';

test('renders tab item', () => {
  const { getByTestId, getByText } = render(
    <TabItem id="testId" isActiveTab={true} name="testName" onClick={noop} />
  );

  expect(getByTestId('tab-item-testId')).toBeInTheDocument();
  expect(getByText('testName')).toBeInTheDocument();
});
