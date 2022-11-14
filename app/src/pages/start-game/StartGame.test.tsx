import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { StartGame } from '.';

describe('<StartGame />', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <StartGame />
      </Provider>
    );

    expect(getByTestId('start-game')).toBeInTheDocument();
  });
});
