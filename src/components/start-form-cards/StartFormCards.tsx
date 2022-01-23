import React, { useCallback, useState } from 'react';

import { CardIds } from '../../enums';
import { useAppSelector } from '../../hooks/use-app-selector';
import { usePlayerName } from '../../hooks/use-player-name';
import { selectHands } from '../../state/handsSlice';
import { IHands, IStarterCardIdsData } from '../../types';
import { getCardById } from '../../utils/cards';

const mapHandForPlayer = ({
  hands,
  onCardClick,
  playerChoosing,
}: {
  hands: IHands;
  onCardClick: (cardId: CardIds) => void;
  playerChoosing: string;
}) =>
  (hands[playerChoosing] ?? []).map(cardId => (
    <button key={`${playerChoosing}-${cardId}`} onClick={() => onCardClick(cardId)}>
      {getCardById(cardId)?.name ?? ''}
    </button>
  ));

export const StartFormCards = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const hands = useAppSelector(selectHands);
  const players = Object.keys(hands);

  const [playerChoosingIdx, setPlayerChoosingIdx] = useState(0);
  const [selectedFirstCards, setSelectedFirstCards] = useState<IStarterCardIdsData[]>([]);

  const playerChoosingId = players[playerChoosingIdx];

  const playerChoosingName = usePlayerName(playerChoosingId);

  const onCardClick = useCallback(
    (cardId: CardIds) => {
      if (playerChoosingIdx === players.length - 1) {
        onSubmit([...selectedFirstCards, { card: cardId, player: playerChoosingId }]);
        return;
      }
      setSelectedFirstCards(state => [...state, { card: cardId, player: playerChoosingId }]);
      setPlayerChoosingIdx(state => state + 1);
    },
    [onSubmit, playerChoosingIdx, playerChoosingId, players.length, selectedFirstCards]
  );

  const playerChoosingHand = mapHandForPlayer({
    hands,
    onCardClick,
    playerChoosing: playerChoosingId,
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
