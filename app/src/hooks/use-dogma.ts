import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Ages, CardIds, GameStatuses } from '../enums';
import { addLog } from '../state/slices/logSlice';

import { useDrawCard } from './dogma-actions/use-draw-card';

export enum DogmaStatus {
  FAILED,
  IN_PROGRESS,
  SUCCESS,
  WAITING,
}

interface IUseDogmaProps {
  cardId: CardIds | null;
  onComplete?: (...args: any) => void;
  playerId: string | null;
}

export const useDogma = ({ cardId, onComplete, playerId }: IUseDogmaProps) => {
  const [dogmaStatus, setDogmaStatus] = useState<DogmaStatus>(DogmaStatus.WAITING);
  const dispatch = useDispatch();
  const drawAction = useDrawCard(playerId ?? '');

  useEffect(() => {
    const dogma = () => {
      let dogmaFailed = false;
      let dogmaReturnMessage: string = '';
      let dogmaReturnData: any;

      // add all card dogma logic here
      switch (cardId) {
        case CardIds.THE_WHEEL:
          dogmaReturnData = drawAction({ ageToDraw: Ages.ONE, numCardsToDraw: 2 });
          if (dogmaReturnData) {
            dogmaReturnMessage = `${playerId}: Successfully drew ${dogmaReturnData.join(', ')}`;
          }
          break;
        default:
          dogmaReturnMessage = `${playerId}: ERROR: No dogma action configured for ${cardId}`;
          dogmaFailed = true;
      }

      if (dogmaFailed) {
        return dispatch(
          addLog({
            status: GameStatuses.DOGMA_FAILED,
            message:
              dogmaReturnMessage || `${playerId}: ERROR: No dogma action configured for ${cardId}`,
          })
        );
      }
      if (onComplete) {
        onComplete();
      }
      return dispatch(
        addLog({
          status: GameStatuses.DOGMA_SUCCESS,
          message: dogmaReturnMessage || `${playerId}: Dogma action complete for ${cardId}`,
          data: dogmaReturnData,
        })
      );
    };
    if (dogmaStatus === DogmaStatus.WAITING && cardId && playerId) {
      setDogmaStatus(DogmaStatus.IN_PROGRESS);
      dogma();
    }
  }, [cardId, drawAction, onComplete, playerId, dispatch, dogmaStatus]);

  useEffect(() => {
    if (dogmaStatus === DogmaStatus.SUCCESS || dogmaStatus === DogmaStatus.FAILED) {
      setDogmaStatus(DogmaStatus.WAITING);
    }
  }, [dogmaStatus]);

  return {
    dogmaStatus,
  };
};
