import { useSelector } from 'react-redux';

import { Ages } from '../enums';
import { RootState } from '../store';
import { checkIfPlayerCanAchieve } from '../utils/achievementUtils';
import { calculateTotalTopCardsOnBoard } from '../utils/board';
import { calculateTotalCardsInHand } from '../utils/hand';
import noop from '../utils/noop';

import { useDrawCard } from './dogma-actions/use-draw-card';
import { useMeldCard } from './dogma-actions/use-meld-card';
import { useRemoveCardFromHand } from './dogma-actions/use-remove-card-from-hand';
import { usePlayerTakesAction } from './use-player-takes-action';

const BASE_ACTION_OPTIONS = {
  canAchieve: false,
  canDogma: false,
  canDraw: false,
  canMeld: false,
  drawAction: noop,
  meldAction: noop,
};

export const useActionOptions = ({ player }: { player: string }) => {
  const playerData = useSelector((state: RootState) => state.players.players[player]);
  const playerAge = (playerData?.age as Ages) ?? Ages.ONE;
  const playerScore = useSelector((state: RootState) => state.scores.scores[player]);
  const ageAchievements = useSelector((state: RootState) => state.achievements.ageAchievements);
  const playerHand = useSelector((state: RootState) => state.hands.hands[player]);
  const playerBoard = useSelector((state: RootState) => state.boards.boards[player]);
  const playerDrawAction = usePlayerTakesAction(player, useDrawCard);
  const playerMeldAction = usePlayerTakesAction(player, useRemoveCardFromHand, useMeldCard);

  if (!player) {
    return {
      ...BASE_ACTION_OPTIONS,
    };
  }

  const canDogma = calculateTotalTopCardsOnBoard(playerBoard) > 0;

  const canMeld = calculateTotalCardsInHand(playerHand) > 0;

  const canAchieve = checkIfPlayerCanAchieve({
    ageAchievements,
    playerAge,
    playerScore,
  });

  return {
    ...BASE_ACTION_OPTIONS,
    canAchieve,
    canDogma,
    canDraw: true,
    canMeld,
    drawAction: playerDrawAction,
    meldAction: playerMeldAction,
  };
};
