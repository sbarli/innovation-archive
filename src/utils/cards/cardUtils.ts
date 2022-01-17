import { cards as cardsById } from '../../data/cardsById';
import { Ages, CardIds, TOTAL_CARDS_IN_AGE } from '../../enums';
import { ICard, TCardIdsByAge, TCardsById, THand } from '../../types';
import { shuffleArray } from '../manipulate';

export const getCardById = (cardId: CardIds) => cardsById[cardId];

export const determineCardColor = (cardId: CardIds) => getCardById(cardId)?.color;

export const sortAndShuffleCards = (cards: TCardsById): TCardIdsByAge => {
  return Object.values(cards).reduce(
    (d, c) => {
      // add card to it's age group
      d[c.age].push(c.id);
      // if we've got all cards in age, shuffle them
      // to get final order of cards for this game.
      if (d[c.age].length === TOTAL_CARDS_IN_AGE[c.age]) {
        d[c.age] = shuffleArray(d[c.age]);
      }
      return d;
    },
    {
      [Ages.ONE]: [],
      [Ages.TWO]: [],
      [Ages.THREE]: [],
      [Ages.FOUR]: [],
      [Ages.FIVE]: [],
      [Ages.SIX]: [],
      [Ages.SEVEN]: [],
      [Ages.EIGHT]: [],
      [Ages.NINE]: [],
      [Ages.TEN]: [],
    } as TCardIdsByAge
  );
};

export const sortCardsByColor = (cards: ICard[]) => {
  return cards.reduce((acc, card) => {
    if (!acc[card.color]) {
      acc[card.color] = [];
    }
    acc[card.color].push(card.id);
    return acc;
  }, {} as THand);
};
