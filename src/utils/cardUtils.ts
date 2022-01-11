import { cards as cardsById } from '../data/cardsById';
import { Ages, CardIds, Colors, Resources, TOTAL_CARDS_IN_AGE } from '../enums';
import { IBoard, IHands, TCardIdsByAge, TCardsById, THand } from '../types';

import { shuffleArray } from './sharedUtils';

export const getCardById = (cardId: CardIds) => cardsById[cardId];

/**
 * @name baseBoardPile
 * @description
 *  base structure for a board pile
 */
const baseBoardPile = Object.freeze({
  cards: [],
  splayed: null,
});

/**
 * @name createBaseBoard
 * @param player
 *  id for player who owns the board
 * @description
 *  creates an empty board obj for given player
 * @returns {object}
 *  ex. {
 *        player: '1',
 *        red: { cards: [], splayed: null },
 *        blue: { cards: [], splayed: null },
 *        green: { cards: [], splayed: null },
 *        purple: { cards: [], splayed: null },
 *        yellow: { cards: [], splayed: null },
 *      }
 */
export const createBaseBoard = (player: string) => {
  return {
    player,
    [Colors.RED]: Object.assign({}, baseBoardPile),
    [Colors.BLUE]: Object.assign({}, baseBoardPile),
    [Colors.GREEN]: Object.assign({}, baseBoardPile),
    [Colors.PURPLE]: Object.assign({}, baseBoardPile),
    [Colors.YELLOW]: Object.assign({}, baseBoardPile),
  };
};

const determineCardColor = (cardId: CardIds) => cardsById[cardId].color;

/**
 * @name createBaseHand
 * @param starterCards
 *  first two cards for this hand
 * @description
 *  creates a new hand with first two cards populated
 * @returns {object}
 *  ex. {
 *        red: ['card-1'],
 *        blue: [],
 *        green: [],
 *        purple: ['card-2'],
 *        yellow: [],
 *      }
 */
export const createBaseHand = (starterCards: CardIds[]) => {
  // define empty hand
  const hand = {
    [Colors.RED]: [],
    [Colors.BLUE]: [],
    [Colors.GREEN]: [],
    [Colors.PURPLE]: [],
    [Colors.YELLOW]: [],
  } as THand;

  // populate hand with starter cards:
  //  determine color of starter card
  //  and push to hand
  starterCards.forEach(cardId => {
    hand[determineCardColor(cardId)].push(cardId);
  });

  return hand;
};

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

export const createInitialHandsForPlayers = (
  playerOrder: string[],
  starterCards: CardIds[],
  hands: IHands = {} as IHands
): IHands => {
  if (!playerOrder?.length) {
    return hands;
  }
  // select cards for current first player
  hands[playerOrder[0]] = createBaseHand(starterCards.slice(0, 2));
  // recursively call
  return createInitialHandsForPlayers(playerOrder.slice(1), starterCards.slice(2), hands);
};

const baseCardResourceTotals = Object.freeze({
  [Resources.CASTLES]: 0,
  [Resources.CROWNS]: 0,
  [Resources.FACTORIES]: 0,
  [Resources.LEAVES]: 0,
  [Resources.LIGHTBULBS]: 0,
  [Resources.TIMEPIECES]: 0,
});

export const createInitialResourceTotals = () => ({ ...baseCardResourceTotals });

export const calculateCardResources = (cardId: CardIds) => {
  const card = cardsById[cardId];

  const cardResourceTotals = { ...baseCardResourceTotals };

  cardResourceTotals[Resources.CASTLES] = card.numCastles;
  cardResourceTotals[Resources.CROWNS] = card.numCrowns;
  cardResourceTotals[Resources.FACTORIES] = card.numFactories;
  cardResourceTotals[Resources.LEAVES] = card.numLeaves;
  cardResourceTotals[Resources.LIGHTBULBS] = card.numLightbulbs;
  cardResourceTotals[Resources.TIMEPIECES] = card.numTimepieces;

  return cardResourceTotals;
};

export const calculateTotalResourcesForCards = (cardIds: CardIds[]) => {
  const resourcesPerCard = cardIds.map(calculateCardResources);

  const resourceTotals = { ...baseCardResourceTotals };

  resourcesPerCard.forEach(cardResources => {
    resourceTotals[Resources.CASTLES] += cardResources[Resources.CASTLES];
    resourceTotals[Resources.CROWNS] += cardResources[Resources.CROWNS];
    resourceTotals[Resources.FACTORIES] += cardResources[Resources.FACTORIES];
    resourceTotals[Resources.LEAVES] += cardResources[Resources.LEAVES];
    resourceTotals[Resources.LIGHTBULBS] += cardResources[Resources.LIGHTBULBS];
    resourceTotals[Resources.TIMEPIECES] += cardResources[Resources.TIMEPIECES];
  });

  return resourceTotals;
};

export const calculateTotalCardsInHand = (hand: THand) => {
  const total = Object.values(hand).reduce((acc, cards) => (acc += cards.length), 0);
  return total;
};

export const calculateTotalTopCardsOnBoard = (board: IBoard) => {
  const total = Object.keys(board).reduce((acc, key) => {
    if (key !== 'player' && board[key as Colors].cards.length) {
      acc += 1;
    }
    return acc;
  }, 0);
  return total;
};
