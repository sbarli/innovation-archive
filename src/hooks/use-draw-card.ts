import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setWinningPlayer } from '../actions/gameActions';
import { playerDrawsCard } from '../actions/playerActions';
import { cards as cardsById } from '../data/cardsById';
import { selectDeck } from '../state/cardsSlice';
import { playerTakesAction, selectSpecificPlayer } from '../state/playersSlice';
import { recurseDraw } from '../utils/gameUtils';

import { useAppSelector } from './use-app-selector';

export const useDrawCard = (playerId: string) => {
  const dispatch = useDispatch();
  const player = useAppSelector(state => selectSpecificPlayer(state, playerId));
  const playerAge = player?.age;
  const deck = useAppSelector(selectDeck);

  const drawCard = useCallback(() => {
    if (!deck || !playerAge) {
      return;
    }
    const { ageDrawn, cardDrawn, hasWon } = recurseDraw(deck, playerAge);
    if (hasWon) {
      return dispatch(setWinningPlayer(playerId));
    }
    if (!ageDrawn || cardDrawn === null) {
      throw new Error('something went wrong in recurseDraw');
    }
    const card = cardsById[cardDrawn];
    dispatch(playerDrawsCard({ playerId, card }));
    dispatch(playerTakesAction());
  }, [deck, dispatch, playerAge, playerId]);

  return drawCard;
};
