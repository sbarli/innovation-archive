import React from 'react';
import { useSelector } from 'react-redux';

import { Collapse } from '../../libs/ui/collapse';
import { RootState } from '../../store';

import { useActionOptions } from './use-action-options';

export function ActionsBar() {
  const currentPlayer = useSelector((state: RootState) => state.players.currentPlayer);
  const currentActionNumber = useSelector(
    (state: RootState) => state.players.currentPlayerActionNumber
  );

  const { canAchieve, canDogma, canDraw, canMeld } = useActionOptions({
    player: currentPlayer ?? '',
  });

  if (!currentPlayer) {
    return null;
  }

  return (
    <div data-testid="actions-bar">
      <Collapse header="Action Details" showCaret={false}>
        <p>Current Action Number: {currentActionNumber}</p>
        <h4>Current Action Options:</h4>
        <ul>
          {canAchieve && <li>Achieve</li>}
          {canDogma && <li>Dogma</li>}
          {canDraw && <li>Draw</li>}
          {canMeld && <li>Meld</li>}
        </ul>
      </Collapse>
    </div>
  );
}