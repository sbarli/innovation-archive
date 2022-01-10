import { IScorePilesByPlayer, IScoresByPlayer } from '../types';

// import { getCardById } from './cardUtils';

export const createInitialScoreData = (playerIds: string[]) => {
  const initialScoreData = playerIds.reduce(
    (acc, player) => {
      acc.scores[player] = 0;
      acc.scorePiles[player] = [];
      return acc;
    },
    { scores: {} as IScoresByPlayer, scorePiles: {} as IScorePilesByPlayer }
  );
  return initialScoreData;
};
