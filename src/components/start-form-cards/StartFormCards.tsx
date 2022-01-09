import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { cards as cardsById } from '../../data/cardsById';
import { CardIds, Colors } from '../../enums';
import { selectHands } from '../../state/handsSlice';
import { IHands, IStarterCardIdsData } from '../../types';

const mapHandForPlayer = ({
  hands,
  onCardClick,
  playerChoosing,
}: {
  hands: IHands;
  onCardClick: (cardId: CardIds) => void;
  playerChoosing: string;
}) =>
  Object.keys(hands[playerChoosing]).reduce((acc: any, cur: any) => {
    if (hands[playerChoosing][cur as Colors].length) {
      hands[playerChoosing][cur as Colors].forEach(cardId => {
        acc.push(
          <button key={`${playerChoosing}-${cardId}`} onClick={() => onCardClick(cardId)}>
            {cardsById[cardId].name}
          </button>
        );
      });
    }
    return acc;
  }, []);

export const StartFormCards = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const hands = useSelector(selectHands);
  const players = Object.keys(hands);

  const [playerChoosingIdx, setPlayerChoosingIdx] = useState(0);
  const [selectedFirstCards, setSelectedFirstCards] = useState<IStarterCardIdsData[]>([]);

  const playerChoosingName = players[playerChoosingIdx];

  const onCardClick = useCallback(
    (cardId: CardIds) => {
      setSelectedFirstCards(state => [...state, { card: cardId, player: playerChoosingName }]);
      if (playerChoosingIdx === players.length - 1) {
        onSubmit(selectedFirstCards);
        return;
      }
      setPlayerChoosingIdx(state => state + 1);
    },
    [onSubmit, playerChoosingIdx, playerChoosingName, players.length, selectedFirstCards]
  );

  const playerChoosingHand = mapHandForPlayer({
    hands,
    onCardClick,
    playerChoosing: playerChoosingName,
  });

  return (
    <div>
      <h2>{playerChoosingName}</h2>
      <h3>Choose your first card</h3>
      {playerChoosingHand}
    </div>
  );
};

export default StartFormCards;
