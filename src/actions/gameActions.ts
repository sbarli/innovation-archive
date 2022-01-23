import { cards as cardsById } from '../data/cardsById';
import { Ages } from '../enums';
import { initAchievements } from '../state/achievementsSlice';
import { addCardsToBoards, initBoards } from '../state/boardsSlice';
import { updateDeck } from '../state/deckSlice';
import { initHands, removeCardsFromHands } from '../state/handsSlice';
import {
  initPlayerOrder,
  setWinner,
  updateAllPlayersResources,
  updatePlayers,
} from '../state/playersSlice';
import { initScores } from '../state/scoresSlice';
import { AppThunk } from '../store';
import { ICard, IHands, IResourcesByPlayer, IStarterCardIdsData } from '../types';
import {
  createInitialAgeAchievements,
  pullAgeAchievementsFromStarterDeck,
} from '../utils/achievements';
import { sortAndShuffleCards } from '../utils/cards';
import { createDefaultGameData } from '../utils/game';
import { createInitialHandsForPlayers } from '../utils/hand';
import { createBasePlayers, getPlayerOrder, updatePlayersWithOrder } from '../utils/players';
import { calculateTotalResourcesForCards } from '../utils/resources';

const NUM_CARDS_TO_START = 2;

interface IPlayerName {
  name: string;
}

interface ISetupGameProps {
  players: IPlayerName[];
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const setupGame = ({ players: playerValues }: ISetupGameProps): AppThunk => dispatch => {
  const starterDeck = sortAndShuffleCards(cardsById);
  const players = createBasePlayers(playerValues);
  const numPlayers = playerValues.length;
  const playerIds = Object.keys(players);

  // pull out age achievement cards
  const ageAchievementCardIds = pullAgeAchievementsFromStarterDeck(starterDeck);
  const ageAchievements = createInitialAgeAchievements(ageAchievementCardIds);

  // pull out age 1 cards for player hands
  // NOTE: purposely mutates starterDeck
  const handStartCards = starterDeck[Ages.ONE].splice(0, numPlayers * NUM_CARDS_TO_START);
  // create player hands with starter cards
  const hands = createInitialHandsForPlayers(playerIds, handStartCards);

  // create the following for players
  // - empty board
  // - empty achievements
  // - resources
  // - scores
  // - scorePiles
  const { boards, playerAchievements, playerResources, scores, scorePiles } = createDefaultGameData(
    playerIds
  );

  dispatch(updateDeck({ deck: starterDeck }));
  dispatch(updatePlayers({ players }));
  dispatch(initHands({ hands }));
  dispatch(initBoards({ boards }));
  dispatch(initAchievements({ ageAchievements, playerAchievements }));
  dispatch(initScores({ scores, scorePiles }));
  dispatch(updateAllPlayersResources({ playerResources }));
};

export const setupPlayerOrder = (
  starterCardIdsData: IStarterCardIdsData[]
): AppThunk => dispatch => {
  // get the name of each card to determine player order
  const starterCardNamesData = starterCardIdsData.map(val => {
    const cardName = cardsById[val.card].name;
    return {
      card: cardName,
      player: val.player,
    };
  });
  const playerOrder = getPlayerOrder(starterCardNamesData);
  const updatedPlayersWithOrder = updatePlayersWithOrder(playerOrder);

  // create a map of the cards to remove from
  // each players hand and add to their board
  const { boardData, handData } = starterCardIdsData.reduce(
    (acc, cur) => {
      if (!acc.boardData[cur.player]) {
        acc.boardData[cur.player] = [];
        acc.handData[cur.player] = [];
      }
      acc.boardData[cur.player].push(cardsById[cur.card]);
      acc.handData[cur.player].push(cur.card);
      return acc;
    },
    { boardData: {} as { [key: string]: ICard[] }, handData: {} as IHands }
  );

  // update resources totals for players
  const playerResources = playerOrder.reduce((acc, player) => {
    const cardsMovingToBoard = handData[player];
    const playerResourceTotal = calculateTotalResourcesForCards(cardsMovingToBoard);
    acc[player] = playerResourceTotal;
    return acc;
  }, {} as IResourcesByPlayer);

  dispatch(initPlayerOrder({ playerOrder }));
  dispatch(removeCardsFromHands({ data: handData }));
  dispatch(addCardsToBoards({ data: boardData }));
  dispatch(updateAllPlayersResources({ playerResources }));
  dispatch(updatePlayers({ players: updatedPlayersWithOrder }));
};

export const setWinningPlayer = (playerId: string): AppThunk => dispatch => {
  dispatch(setWinner({ playerId }));
};
