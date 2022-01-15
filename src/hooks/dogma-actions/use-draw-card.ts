import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setWinningPlayer } from '../../actions/gameActions';
import { cards as cardsById } from '../../data/cardsById';
import { Ages } from '../../enums';
import { drawCardsFromDeck, selectDeck } from '../../state/cardsSlice';
import { addCardToHand } from '../../state/handsSlice';
import { selectSpecificPlayer } from '../../state/playersSlice';
import { recurseDraw } from '../../utils/gameUtils';
import { useAppSelector } from '../use-app-selector';

export const useDrawCard = (playerId: string) => {
  const dispatch = useDispatch();
  const player = useAppSelector(state => selectSpecificPlayer(state, playerId));
  const playerAge = player?.age;
  const deck = useAppSelector(selectDeck);

  const drawCard = useCallback(
    ({
      addCardToPlayerHand = true,
      ageToDraw,
    }: {
      addCardToPlayerHand?: boolean;
      ageToDraw?: Ages;
    } = {}) => {
      if (!deck || !playerAge) {
        return;
      }
      const { ageDrawn, cardDrawn, hasWon } = recurseDraw(deck, ageToDraw ?? playerAge);
      if (hasWon) {
        dispatch(setWinningPlayer(playerId));
        return;
      }
      if (!ageDrawn || cardDrawn === null) {
        throw new Error('something went wrong in recurseDraw');
      }
      const card = cardsById[cardDrawn];
      dispatch(drawCardsFromDeck({ agesToDraw: [{ age: card.age, numCards: 1 }] }));
      if (addCardToPlayerHand) {
        dispatch(addCardToHand({ player: playerId, card: card.id, color: card.color }));
      }
      return card;
    },
    [deck, dispatch, playerAge, playerId]
  );

  return drawCard;
};
