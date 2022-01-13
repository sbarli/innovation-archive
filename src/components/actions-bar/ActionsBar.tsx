import React from 'react';
import { useSelector } from 'react-redux';

import { useActionOptions } from '../../hooks/use-action-options';
import { Collapse } from '../../libs/ui/collapse';
import { RootState } from '../../store';

export function ActionsBar() {
  const currentPlayer = useSelector((state: RootState) => state.players.currentPlayer);
  const currentActionNumber = useSelector(
    (state: RootState) => state.players.currentPlayerActionNumber
  );

  const { canAchieve, canDogma, canDraw, canMeld, drawAction } = useActionOptions({
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
        <div>
          {canAchieve && <button>Achieve</button>}
          {canDogma && <button>Dogma</button>}
          {canDraw && <button onClick={drawAction}>Draw</button>}
          {canMeld && <button>Meld</button>}
        </div>
      </Collapse>
    </div>
  );
}
