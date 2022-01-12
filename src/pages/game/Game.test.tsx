import { screen } from '@testing-library/react';
import React from 'react';

import { createInitialPlayersStore } from '../../__fixtures__/player';
import { renderWithProviders } from '../../utils/testing/renderWithProviders';

import { Game } from '.';

describe('<Game />', () => {
  it('renders', () => {
    renderWithProviders(<Game />, {
      context: {
        reduxStore: {
          players: createInitialPlayersStore(['foo', 'bar']),
        },
      },
    });

    expect(screen.getByTestId('game')).toBeInTheDocument();
  });
});
