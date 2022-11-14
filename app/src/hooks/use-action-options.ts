import { Ages } from '../enums';
import {
  selectAgeAchievements,
  selectPlayer,
  selectPlayerBoard,
  selectPlayerHand,
  selectPlayerScore,
} from '../state/selectors';
import { checkIfPlayerCanAchieve } from '../utils/achievements';
import { calculateTotalTopCardsOnBoard } from '../utils/board';
import noop from '../utils/noop';

import { useDrawCard } from './dogma-actions/use-draw-card';
import { useMeldCard } from './dogma-actions/use-meld-card';
import { useRemoveCardFromHand } from './dogma-actions/use-remove-card-from-hand';
import { useAppSelector } from './use-app-selector';
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
  const playerData = useAppSelector(state => selectPlayer(state, player));
  const playerAge = (playerData?.age as Ages) ?? Ages.ONE;
  const playerScore = useAppSelector(state => selectPlayerScore(state, player));
  const ageAchievements = useAppSelector(selectAgeAchievements);
  const playerHand = useAppSelector(state => selectPlayerHand(state, player));
  const playerBoard = useAppSelector(state => selectPlayerBoard(state, player));
  const playerDrawAction = usePlayerTakesAction(player, useDrawCard);
  const playerMeldAction = usePlayerTakesAction(player, useRemoveCardFromHand, useMeldCard);

  if (!player) {
    return {
      ...BASE_ACTION_OPTIONS,
    };
  }

  const canDogma = calculateTotalTopCardsOnBoard(playerBoard) > 0;

  const canMeld = playerHand.length > 0;

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
