import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setWinningPlayer } from '../../actions/gameActions';
import { Ages } from '../../enums';
import { selectDeck, updateDeck } from '../../state/cardsSlice';
import { addCardsToHand } from '../../state/handsSlice';
import { selectPlayer } from '../../state/playersSlice';
import { drawFromDeck } from '../../utils/game';
import { useAppSelector } from '../use-app-selector';

export const useDrawCard = (playerId: string) => {
  const dispatch = useDispatch();
  const player = useAppSelector(state => selectPlayer(state, playerId));
  const playerAge = player?.age;
  const deck = useAppSelector(selectDeck);

  const drawCard = useCallback(
    ({
      addCardToPlayerHand = true,
      ageToDraw,
      numCardsToDraw = 1,
    }: {
      addCardToPlayerHand?: boolean;
      ageToDraw?: Ages;
      numCardsToDraw?: number;
    } = {}) => {
      if (!deck || !playerAge) {
        return;
      }
      const { cardsDrawn, hasWon, updatedDeck } = drawFromDeck({
        age: ageToDraw ?? playerAge,
        cardsToDraw: numCardsToDraw,
        deck,
      });
      if (hasWon) {
        dispatch(setWinningPlayer(playerId));
        return;
      }
      dispatch(updateDeck({ deck: updatedDeck }));
      if (addCardToPlayerHand) {
        dispatch(addCardsToHand({ playerId, cardIds: cardsDrawn }));
      }
      return cardsDrawn;
    },
    [deck, dispatch, playerAge, playerId]
  );

  return drawCard;
};
