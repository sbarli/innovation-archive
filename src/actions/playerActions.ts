import { drawCardsFromDeck } from '../state/cardsSlice';
import { addCardToHand } from '../state/handsSlice';
import { AppThunk } from '../store';
import { ICard } from '../types';

export const playerDrawsCard = ({
  playerId,
  card,
}: {
  playerId: string;
  card: ICard;
}): AppThunk => dispatch => {
  // remove card from deck
  dispatch(drawCardsFromDeck({ agesToDraw: [{ age: card.age, numCards: 1 }] }));
  // add card to hand
  dispatch(addCardToHand({ player: playerId, card: card.id, color: card.color }));
};
