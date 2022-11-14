import { cloneDeep } from 'lodash-es';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { selectPlayer, selectPlayerBoard, selectPlayerResources } from '../../state/selectors';
import { updatePlayerBoard } from '../../state/slices/boardsSlice';
import { updatePlayerAge, updatePlayerResources } from '../../state/slices/playersSlice';
import { getCardById } from '../../utils/cards';
import { updateResourceTotalsWhenMelding } from '../../utils/resources';
import { useAppSelector } from '../use-app-selector';

export const useMeldCard = (playerId: string) => {
  const dispatch = useDispatch();
  const player = useAppSelector(state => selectPlayer(state, playerId));
  const playerBoard = useAppSelector(state => selectPlayerBoard(state, playerId));
  const playerResources = useAppSelector(state => selectPlayerResources(state, playerId));

  const meldCard = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      // update player age, if melding card is higher
      if (card.age > player.age) {
        dispatch(updatePlayerAge({ playerId, newAge: card.age }));
      }

      // update resource totals
      const cardPile = playerBoard[card.color]?.cards;
      const coveringCardId = cardPile?.length ? cardPile[cardPile.length - 1] : undefined;
      const updatedResourceTotals = updateResourceTotalsWhenMelding({
        coveringCardId,
        meldingCardId: cardId,
        resourceTotals: playerResources,
        splayDirection: playerBoard[card.color]?.splayed,
      });
      dispatch(updatePlayerResources({ playerId, updatedResources: updatedResourceTotals }));

      // update board
      const updatedBoard = cloneDeep(playerBoard);
      updatedBoard[card.color].cards.push(cardId);
      dispatch(updatePlayerBoard({ playerId, board: updatedBoard }));
    },
    [dispatch, player.age, playerBoard, playerId, playerResources]
  );

  return meldCard;
};
