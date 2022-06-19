import React from 'react';
import styled from 'styled-components/macro';

import { ActionNumbers } from '../../enums/game';
import { Button, ButtonSizes, ButtonThemes } from '../../libs/ui/button';
import { Collapse } from '../../libs/ui/collapse';

const ActionOptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ActionOption = styled.div`
  flex: 1 1 0px;
`;

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
      <Collapse header="Action Details" showCaret={false} shouldDefaultOpen={true}>
        <p>Action Number: {currentActionNumber}</p>
        <p>Action Options:</p>
        <ActionOptionsWrapper>
          {canDraw && (
            <ActionOption>
              <Button $size={ButtonSizes.SM} $theme={ButtonThemes.FILLED} onClick={drawAction}>
                Draw
              </Button>
            </ActionOption>
          )}
          {canAchieve && (
            <ActionOption>
              <Button $size={ButtonSizes.SM} $theme={ButtonThemes.FILLED}>
                Achieve
              </Button>
            </ActionOption>
          )}
          {canDogma && (
            <ActionOption>
              <p>Dogma</p>
            </ActionOption>
          )}
          {canMeld && (
            <ActionOption>
              <p>Meld</p>
            </ActionOption>
          )}
        </ActionOptionsWrapper>
      </Collapse>
    </div>
  );
};
