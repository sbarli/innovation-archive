import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { Colors } from '../../enums';
import { RootState } from '../../store';
import { Card } from '../card';

export function Hand({ player }: { player: string }) {
  const playerHand = useSelector((state: RootState) => state.hands.hands[player]);

  if (!playerHand) {
    return null;
  }

  const CardsByColor = Object.keys(playerHand).reduce((acc, color) => {
    acc.push(playerHand[color as Colors].map(cardId => <Card key={cardId} cardId={cardId} />));
    return acc;
  }, [] as ReactNode[]);

  return (
    <div data-testid="player-hand">
      <h3>Hand</h3>
      {CardsByColor.map((section, idx) => (
        <div key={idx}>{section}</div>
      ))}
    </div>
  );
}
