import React from 'react';

import { Ages, CardIds } from '../../../enums';

interface IStackProps {
  age: Ages;
  cards: CardIds[];
}

export function Stack({ age, cards }: IStackProps) {
  if (!cards.length) {
    return null;
  }

  return (
    <div data-testid={`stack-${age}`}>
      <h4>Age {age} Cards</h4>
      <p>Remaining: {cards.length}</p>
    </div>
  );
}
