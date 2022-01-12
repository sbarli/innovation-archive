import { useSelector } from 'react-redux';

import { selectPlayers } from '../state/playersSlice';

export const usePlayerName = (playerId: string) => {
  const allPlayers = useSelector(selectPlayers);
  if (!playerId) {
    return '';
  }
  return allPlayers[playerId]?.name ?? '';
};
