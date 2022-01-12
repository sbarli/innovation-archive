import { mockDeep } from 'jest-mock-extended';
import { merge } from 'lodash-es';

import { createInitialHands } from '../../__fixtures__/hand';
import { createInitialPlayersStore } from '../../__fixtures__/player';
import { initialStoreState } from '../../state/global-state';
import { RootState } from '../../store';
import { createDefaultGameData } from '../sharedUtils';

export interface IContextDefaults {
  reduxStore: RootState;
}

const DEFAULT_PLAYERS = ['foo', 'bar'];

const { boards, playerAchievements, playerResources, scores, scorePiles } = createDefaultGameData(
  DEFAULT_PLAYERS
);

export const contextDefaults = (): IContextDefaults => ({
  reduxStore: mockDeep<RootState>(
    merge(
      {
        ...JSON.parse(JSON.stringify(initialStoreState)),
      },
      {
        achievements: {
          playerAchievements,
        },
        boards,
        hands: createInitialHands(DEFAULT_PLAYERS),
        players: { ...createInitialPlayersStore(DEFAULT_PLAYERS), resources: playerResources },
        scores: {
          scores,
          scorePiles,
        },
      }
    )
  ),
});
