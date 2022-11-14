import { cloneDeep } from 'lodash-es';

import { Ages, CardIds } from '../../enums';
import {
  IAchievementsByPlayer,
  IBoards,
  IResourcesByPlayer,
  IScorePilesByPlayer,
  IScoresByPlayer,
  TCardIdsByAge,
} from '../../types';
import { createInitialPlayerAchievements } from '../achievements';
import { createBaseBoard } from '../board';
import { createInitialResourceTotals } from '../resources';

/**
 * @name recurseDraw
 * @description recurses through the deck starting
 *  at @age until a card is found to draw or until
 *  the player wins by drawing from age 11 or higher
 * @TODO: this player doesn't necessarily win need to
 *    check highest player score to determine winner
 */
export const recurseDraw = (
  deck: TCardIdsByAge,
  age: Ages
): {
  cardDrawn?: CardIds;
  hasWon: boolean;
} => {
  if (age > 10) {
    return { hasWon: true };
  }
  if (deck[age]?.length) {
    return { cardDrawn: deck[age].pop(), hasWon: false };
  }
  return recurseDraw(deck, Number(age) + 1);
};

/**
 * @name drawFromDeck
 * @description draws cards from the deck
 *  until all n cards are drawn or until
 *  the player wins.
 * @returns
 * {
 *   cardsDrawn: CardIds[];
 *   hasWon: boolean;
 * }
 *
 */
export const drawFromDeck = ({
  age,
  cardsToDraw,
  deck,
}: {
  age: Ages;
  cardsToDraw: number;
  deck: TCardIdsByAge;
}) => {
  const deckCopy = cloneDeep(deck);
  const cardsDrawn: CardIds[] = [];
  let winner = false;
  for (let numDrawn = 0; numDrawn < cardsToDraw; numDrawn += 1) {
    const { cardDrawn, hasWon } = recurseDraw(deckCopy, age);
    if (hasWon) {
      winner = true;
      return { cardsDrawn, hasWon: winner, updatedDeck: deckCopy };
    }
    if (!cardDrawn) {
      throw new Error('Something went wrong drawing card from deck');
    }
    cardsDrawn.push(cardDrawn);
  }
  return { cardsDrawn, hasWon: winner, updatedDeck: deckCopy };
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
