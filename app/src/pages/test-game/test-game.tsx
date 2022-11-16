import React, { useEffect, useState } from 'react';

import { getAllTestData } from '../../firebase/test/get-test-data';

export function TestGame() {
  const [fetchedData, setFetchedData] = useState(false);
  const [boards, setBoards] = useState<any>();
  const [cards, setCards] = useState<any>();
  const [deck, setDeck] = useState<any>();
  const [game, setGame] = useState<any>();
  const [players, setPlayers] = useState<any>();

  useEffect(() => {
    const retrieveTestData = async () => {
      const {
        boards: boardsDbData,
        cards: cardsDbData,
        deck: deckDbData,
        game: gameDbData,
        players: playersDbData,
      } = await getAllTestData();
      setFetchedData(true);
      setBoards(boardsDbData);
      setCards(cardsDbData);
      setDeck(deckDbData);
      setGame(gameDbData);
      setPlayers(playersDbData);
    };
    if (!fetchedData) {
      retrieveTestData();
    }
  }, [fetchedData]);

  if (!game) {
    return (
      <div>
        <h1>No Game Data Yet...</h1>
      </div>
    );
  }

  // console.log('boards: ', boards);
  // console.log('cards: ', cards);
  // console.log('deck: ', deck);
  // console.log('game: ', game);
  // console.log('players: ', players);

  return (
    <div>
      <h1>Test Game</h1>
    </div>
  );
}
