import { cloneDeep } from 'lodash-es';

import { Ages, CardIds } from '../enums';
import { ICard, TCardIdsByAge } from '../types';

import { getCardById } from './cards';

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
 *
 * @returns
 * {
 *   cardsDrawn: ICard[];
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
  const cardsDrawn: ICard[] = [];
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
    const card = getCardById(cardDrawn);
    cardsDrawn.push(card);
  }
  return { cardsDrawn, hasWon: winner, updatedDeck: deckCopy };
};
