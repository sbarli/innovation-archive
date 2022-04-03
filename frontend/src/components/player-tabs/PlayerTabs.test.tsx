import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

import { PlayerTabs } from '.';

describe('<PlayerTabs />', () => {
  it('renders null when no current player exists', () => {
    const { container } = render(
      <Provider store={store}>
        <PlayerTabs />
      </Provider>
    );

    expect(container.children).toHaveLength(0);
  });
});
