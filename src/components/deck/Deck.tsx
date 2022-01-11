import React from 'react';
import { useSelector } from 'react-redux';

import { Ages } from '../../enums';
import { RootState } from '../../store';

import { Stack } from './stack';

export function Deck() {
  const deck = useSelector((state: RootState) => state.cards.deck);

  if (!deck) {
    return null;
  }

  const StacksByAge = Object.keys(deck).map(ageKey => {
    const age = Number(ageKey) as Ages;
    return <Stack key={age} age={age} cards={deck[age]} />;
  });

  return (
    <div data-testid="deck">
      <h3>Deck</h3>
      {StacksByAge}
    </div>
  );
}
