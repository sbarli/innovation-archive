import {
  IAchievementsByPlayer,
  IBoards,
  IResourcesByPlayer,
  IScorePilesByPlayer,
  IScoresByPlayer,
} from '../types';

import { createInitialPlayerAchievements } from './achievementUtils';
import { createBaseBoard } from './board';
import { createInitialResourceTotals } from './resources';

export const shuffleArray = (initArray: any[]) => {
  const copiedArray = [...initArray];
  let currentIndex = copiedArray.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = copiedArray[currentIndex];
    copiedArray[currentIndex] = copiedArray[randomIndex];
    copiedArray[randomIndex] = temporaryValue;
  }

  return copiedArray;
};

export const createDefaultGameData = (playerIds: string[]) =>
  playerIds.reduce(
    (acc, player) => {
      acc.boards[player] = createBaseBoard(player);
      acc.playerAchievements[player] = createInitialPlayerAchievements();
      acc.playerResources[player] = createInitialResourceTotals();
      acc.scores[player] = 0;
      acc.scorePiles[player] = [];
      return acc;
    },
    {
      boards: {} as IBoards,
      playerAchievements: {} as IAchievementsByPlayer,
      playerResources: {} as IResourcesByPlayer,
      scores: {} as IScoresByPlayer,
      scorePiles: {} as IScorePilesByPlayer,
    }
  );
