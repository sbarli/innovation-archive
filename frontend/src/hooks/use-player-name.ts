import { selectPlayers } from '../state/playersSlice';

import { useAppSelector } from './use-app-selector';

export const usePlayerName = (playerId: string) => {
  const allPlayers = useAppSelector(selectPlayers);
  if (!playerId) {
    return '';
  }
  return allPlayers[playerId]?.name ?? '';
};
