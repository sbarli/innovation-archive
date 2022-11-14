import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { playerTakesAction } from '../state/slices/playersSlice';
import { TPlayerActionClosureFunc } from '../types';

export const usePlayerTakesAction = (playerId: string, ...args: TPlayerActionClosureFunc[]) => {
  const dispatch = useDispatch();
  const actionsForPlayer = args.map(func => func(playerId));
  const initPlayerAction = useCallback(
    (...actionArgs) => {
      dispatch(playerTakesAction());
      actionsForPlayer.forEach(action => action(...actionArgs));
    },
    [actionsForPlayer, dispatch]
  );
  return initPlayerAction;
};
