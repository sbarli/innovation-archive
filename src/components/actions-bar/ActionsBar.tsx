import React from 'react';

import { ActionNumbers } from '../../enums/game';
import { Collapse } from '../../libs/ui/collapse';

interface IActionsBarProps {
  canAchieve: boolean;
  canDogma: boolean;
  canDraw: boolean;
  canMeld: boolean;
  currentActionNumber: ActionNumbers;
  drawAction(): void;
}
export const ActionsBar = ({
  canAchieve,
  canDogma,
  canDraw,
  canMeld,
  currentActionNumber,
  drawAction,
}: IActionsBarProps) => {
  return (
    <div data-testid="actions-bar">
      <Collapse header="Action Details" showCaret={false}>
        <p>Current Action Number: {currentActionNumber}</p>
        <h4>Current Action Options:</h4>
        <div>
          {canDraw && <button onClick={drawAction}>Draw</button>}
          {canAchieve && <button>Achieve</button>}
          {canDogma && <p>Dogma</p>}
          {canMeld && <p>Meld</p>}
        </div>
      </Collapse>
    </div>
  );
};
