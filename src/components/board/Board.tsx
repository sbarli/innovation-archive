import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { Colors } from '../../enums';
import { Collapse } from '../../libs/ui/collapse';
import { RootState } from '../../store';
import { Card } from '../card';

export function Board({ player }: { player: string }) {
  const playerBoard = useSelector((state: RootState) => state.boards.boards[player]);

  if (!playerBoard) {
    return null;
  }

  const CardsByColor = Object.keys(playerBoard).reduce((acc, k) => {
    if (k !== 'player') {
      acc.push(playerBoard[k as Colors].cards.map(cardId => <Card key={cardId} cardId={cardId} />));
    }
    return acc;
  }, [] as ReactNode[]);

  return (
    <div data-testid="player-board">
      <Collapse header="Board" showCaret={false}>
        {CardsByColor.map((section, idx) => (
          <div key={idx}>{section}</div>
        ))}
      </Collapse>
    </div>
  );
}
