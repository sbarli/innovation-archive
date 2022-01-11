import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { BASE_SPECIAL_ACHIEVEMENTS } from '../../../enums';
import { store } from '../../../store';

import { SpecialAchievements } from '.';

test('renders special achievements', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SpecialAchievements specialAchievements={{ ...BASE_SPECIAL_ACHIEVEMENTS }} />
    </Provider>
  );

  expect(getByTestId('special-achievements')).toBeInTheDocument();
});
