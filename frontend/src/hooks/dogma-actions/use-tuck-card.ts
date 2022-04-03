import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { BoardPlacementOptions, CardIds } from '../../enums';
import { addCardToBoard, selectPlayerBoard } from '../../state/boardsSlice';
import {
  selectPlayer,
  selectPlayerResources,
  updatePlayerAge,
  updatePlayerResources,
} from '../../state/playersSlice';
import { getCardById } from '../../utils/cards';
import { updateResourceTotalsWhenTucking } from '../../utils/resources';
import { useAppSelector } from '../use-app-selector';

export const useTuckCard = (playerId: string) => {
  const dispatch = useDispatch();
  const player = useAppSelector(state => selectPlayer(state, playerId));
  const playerBoard = useAppSelector(state => selectPlayerBoard(state, playerId));
  const playerResources = useAppSelector(state => selectPlayerResources(state, playerId));

  const tuckCard = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      // recalculate resource totals
      const cardPile = playerBoard[card.color]?.cards;
      const cardPileEmpty = !cardPile?.length;
      // if tucking to empty pile
      // update player age if tucked card is higher
      if (cardPileEmpty && card.age > player.age) {
        dispatch(updatePlayerAge({ player: playerId, newAge: card.age }));
      }
      // update resource totals, if applicable
      const updatedResourceTotals = updateResourceTotalsWhenTucking({
        isEmptyPile: cardPileEmpty,
        resourceTotals: playerResources,
        splayDirection: playerBoard[card.color]?.splayed,
        tuckingCardId: cardId,
      });
      if (updatedResourceTotals) {
        dispatch(updatePlayerResources({ playerId, updatedResources: updatedResourceTotals }));
      }
      dispatch(
        addCardToBoard({
          player: playerId,
          color: card.color,
          card: cardId,
          placement: BoardPlacementOptions.TUCK,
        })
      );
    },
    [dispatch, player.age, playerBoard, playerId, playerResources]
  );

  return tuckCard;
};