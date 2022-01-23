import React, { ReactNode } from 'react';

import { Colors } from '../../enums';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Collapse } from '../../libs/ui/collapse';
import { selectPlayerBoard } from '../../state/boardsSlice';
import { CardFront } from '../card-front';

export function Board({ player }: { player: string }) {
  const playerBoard = useAppSelector(state => selectPlayerBoard(state, player));

  if (!playerBoard) {
    return null;
  }

  const CardsByColor = Object.keys(playerBoard).reduce((acc, k) => {
    if (k !== 'player') {
      acc.push(
        playerBoard[k as Colors].cards.map((cardId, idx) => {
          const isTopCardOnBoard = idx === 0;
          return <CardFront key={cardId} cardId={cardId} isTopCardOnBoard={isTopCardOnBoard} />;
        })
      );
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
