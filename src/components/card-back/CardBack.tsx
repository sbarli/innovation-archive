import React from 'react';

import { Ages } from '../../enums';

interface ICardBackProps {
  cardAge: Ages;
}
export function CardBack({ cardAge }: ICardBackProps) {
  return (
    <div data-testid="card-back">
      <p>Age: {cardAge}</p>
    </div>
  );
}
