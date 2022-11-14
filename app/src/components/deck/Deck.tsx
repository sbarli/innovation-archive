import React from 'react';

import { Ages } from '../../enums';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Collapse } from '../../libs/ui/collapse';
import { selectDeck } from '../../state/selectors';

import { Stack } from './stack';

export function Deck() {
  const deck = useAppSelector(selectDeck);

  if (!deck) {
    return null;
  }

  const StacksByAge = Object.keys(deck).map(ageKey => {
    const age = Number(ageKey) as Ages;
    return <Stack key={age} age={age} cards={deck[age]} />;
  });

  return (
    <div data-testid="deck">
      <Collapse header="Deck" showCaret={false}>
        {StacksByAge}
      </Collapse>
    </div>
  );
}
