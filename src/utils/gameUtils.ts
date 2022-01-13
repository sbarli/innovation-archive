import { Ages, CardIds } from '../enums';
import { TCardIdsByAge } from '../types';

export interface IDrawData {
  ageDrawn: Ages | null;
  cardDrawn: CardIds | null;
  hasWon: boolean;
}

export const recurseDraw = (deck: TCardIdsByAge, age: Ages): IDrawData => {
  if (age > 10) {
    return { ageDrawn: null, cardDrawn: null, hasWon: true };
  }
  if (deck[age]?.length) {
    const cardIdxToDraw = deck[age].length - 1;
    return { ageDrawn: Number(age), cardDrawn: deck[age][cardIdxToDraw], hasWon: false };
  }
  return recurseDraw(deck, Number(age) + 1);
};
