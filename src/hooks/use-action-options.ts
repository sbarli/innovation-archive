import { useSelector } from 'react-redux';

import { Ages } from '../enums';
import { RootState } from '../store';
import { checkIfPlayerCanAchieve } from '../utils/achievementUtils';
import { calculateTotalCardsInHand, calculateTotalTopCardsOnBoard } from '../utils/cardUtils';

import { useDrawCard } from './use-draw-card';

export const useActionOptions = ({ player }: { player: string }) => {
  const playerData = useSelector((state: RootState) => state.players.players[player]);
  const playerAge = (playerData?.age as Ages) ?? Ages.ONE;
  const playerScore = useSelector((state: RootState) => state.scores.scores[player]);
  const ageAchievements = useSelector((state: RootState) => state.achievements.ageAchievements);
  const playerHand = useSelector((state: RootState) => state.hands.hands[player]);
  const playerBoard = useSelector((state: RootState) => state.boards.boards[player]);
  const playerDrawAction = useDrawCard(player);

  if (!player) {
    return {
      canAchieve: false,
      canDogma: false,
      canDraw: false,
      canMeld: false,
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
    canAchieve,
    canDogma,
    canDraw: true,
    canMeld,
    drawAction: playerDrawAction,
  };
};
