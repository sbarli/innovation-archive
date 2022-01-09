import React from 'react';
import { useSelector } from 'react-redux';

import { cards as cardsById } from '../../data/cardsById';
import { Colors } from '../../enums';
import { selectHands } from '../../state/handsSlice';

export const StartFormCards = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const hands = useSelector(selectHands);
  const players = Object.keys(hands);
  const MappedHands = Object.keys(hands).map(pid =>
    Object.keys(hands[pid]).reduce((acc: any, cur: any) => {
      if (hands[pid][cur as Colors].length) {
        hands[pid][cur as Colors].forEach(cardId => {
          acc.push(
            <div key={`${pid}-${cardId}`}>
              {cardId}: {cardsById[cardId].name}
            </div>
          );
        });
      }
      return acc;
    }, [])
  );
  const mappedHandsByPlayer = MappedHands.reduce((acc, hand, idx) => {
    acc[players[idx]] = hand;
    return acc;
  }, {});
  return (
    <div>
      {players.map(pid => (
        <div key={pid}>
          <p>{pid}</p>
          {mappedHandsByPlayer[pid]}
        </div>
      ))}
    </div>
  );
};

export default StartFormCards;
