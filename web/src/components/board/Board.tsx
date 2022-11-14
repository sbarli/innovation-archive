import React, { ReactNode } from 'react';

import { Colors } from '../../enums';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Collapse } from '../../libs/ui/collapse';
import { selectPlayerBoard } from '../../state/selectors';
import { CardGrid } from '../../styles/card';

import { BoardPile } from './board-pile';

export function Board({ player }: { player: string }) {
  const playerBoard = useAppSelector(state => selectPlayerBoard(state, player));

  if (!playerBoard) {
    return null;
  }

  const CardPilesByColor = Object.keys(playerBoard).reduce((acc, k) => {
    const pile = playerBoard[k as Colors];
    acc.push(
      <BoardPile key={k} cardIds={pile.cards} color={k as Colors} splayDirection={pile.splayed} />
    );
    return acc;
  }, [] as ReactNode[]);

  return (
    <div data-testid="player-board">
      <Collapse header="Board" showCaret={false} shouldDefaultOpen>
        <CardGrid>{CardPilesByColor}</CardGrid>
      </Collapse>
    </div>
  );
}
