import { selectPlayers } from '../state/selectors';

import { useAppSelector } from './use-app-selector';

export const usePlayerName = (playerId: string) => {
  const allPlayers = useAppSelector(selectPlayers);
  if (!playerId) {
    return '';
  }
  return allPlayers[playerId]?.name ?? '';
};
