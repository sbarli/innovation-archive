import { cloneDeep } from 'lodash-es';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { selectPlayer, selectPlayerBoard, selectPlayerResources } from '../../state/selectors';
import { updatePlayerBoard } from '../../state/slices/boardsSlice';
import { updatePlayerAge, updatePlayerResources } from '../../state/slices/playersSlice';
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
        dispatch(updatePlayerAge({ playerId, newAge: card.age }));
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

      // update board
      const updatedBoard = cloneDeep(playerBoard);
      updatedBoard[card.color].cards.unshift(cardId);
      dispatch(updatePlayerBoard({ playerId, board: updatedBoard }));
    },
    [dispatch, player.age, playerBoard, playerId, playerResources]
  );

  return tuckCard;
};
