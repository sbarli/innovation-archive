import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setWinningPlayer } from '../../actions/gameActions';
import { Ages } from '../../enums';
import { selectDeck, selectPlayer, selectPlayerHand } from '../../state/selectors';
import { updateDeck } from '../../state/slices/deckSlice';
import { updatePlayerHand } from '../../state/slices/handsSlice';
import { drawFromDeck } from '../../utils/game';
import { useAppSelector } from '../use-app-selector';

export const useDrawCard = (playerId: string) => {
  const dispatch = useDispatch();
  const player = useAppSelector(state => selectPlayer(state, playerId));
  const playerAge = player?.age;
  const deck = useAppSelector(selectDeck);
  const playerHand = useAppSelector(state => selectPlayerHand(state, playerId));

  const drawCard = useCallback(
    ({
      addCardsToPlayerHand = true,
      ageToDraw,
      numCardsToDraw = 1,
    }: {
      addCardsToPlayerHand?: boolean;
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
      if (playerHand && addCardsToPlayerHand) {
        dispatch(updatePlayerHand({ playerId, hand: [...playerHand, ...cardsDrawn] }));
      }
      return cardsDrawn;
    },
    [deck, dispatch, playerAge, playerHand, playerId]
  );

  return drawCard;
};
