import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../store';

import { AgeAchievements } from '.';

test('renders no age achievements text when no age achievements passed', () => {
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <AgeAchievements ageAchievements={{}} />
    </Provider>
  );

  expect(getByTestId('age-achievements')).toBeInTheDocument();
  expect(getByText('No More Age Achievements')).toBeInTheDocument();
});
