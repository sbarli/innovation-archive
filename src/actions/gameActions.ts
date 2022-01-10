import { cards as allCards } from '../data/cardsById';
import { Ages } from '../enums';
import { initAchievements } from '../state/achievementsSlice';
import { addCardsToBoards, initBoards } from '../state/boardsSlice';
import { initDeck } from '../state/cardsSlice';
import { initHands, removeCardsFromHands } from '../state/handsSlice';
import { initPlayerOrder, initPlayers, updateResources } from '../state/playersSlice';
import { initScores } from '../state/scoresSlice';
import { AppThunk } from '../store';
import {
  IAchievementsByPlayer,
  IBoards,
  ICard,
  IResourcesByPlayer,
  IStarterCardIdsData,
  TAgeAchievements,
} from '../types';
import { createInitialPlayerAchievements } from '../utils/achievementUtils';
import {
  createBaseBoard,
  createInitialHandsForPlayers,
  createInitialResourceTotals,
  sortAndShuffleCards,
} from '../utils/cardUtils';
import { calculatePlayerResources, createBasePlayers, getPlayerOrder } from '../utils/playerUtils';
import { createInitialScoreData } from '../utils/scoreUtils';

const NUM_CARDS_TO_START = 2;

interface IPlayerName {
  name: string;
}

interface ISetupGameProps {
  players: IPlayerName[];
}

interface IStarterCardSetup {
  [key: string]: ICard[];
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const setupGame = ({ players: playerValues }: ISetupGameProps): AppThunk => dispatch => {
  const starterDeck = sortAndShuffleCards(allCards);
  const players = createBasePlayers(playerValues);
  const numPlayers = playerValues.length;
  const playerIds = Object.keys(players);

  // pull out age achievement cards
  // NOTE: purposely mutates starterDeck
  const ageAchievements = Object.keys(starterDeck).reduce((acc, key) => {
    const age = Number(key) as Ages;
    acc[age] = starterDeck[age].pop();
    return acc;
  }, {} as TAgeAchievements);

  // pull out age 1 cards for player hands
  // NOTE: purposely mutates starterDeck
  const handStartCards = starterDeck[Ages.ONE].splice(0, numPlayers * NUM_CARDS_TO_START);
  // create player hands with starter cards
  const hands = createInitialHandsForPlayers(playerIds, handStartCards);

  // create empty board and achievements for players
  const { boards, playerAchievements } = playerIds.reduce(
    (acc, player) => {
      acc.boards[player] = createBaseBoard(player);
      acc.playerAchievements[player] = createInitialPlayerAchievements();
      return acc;
    },
    { boards: {} as IBoards, playerAchievements: {} as IAchievementsByPlayer }
  );

  // create default score and score pile for players
  const { scores, scorePiles } = createInitialScoreData(playerIds);

  // create default resources totals
  const playerResources = playerIds.reduce((acc, player) => {
    acc[player] = createInitialResourceTotals();
    return acc;
  }, {} as IResourcesByPlayer);

  dispatch(initDeck({ deck: starterDeck }));
  dispatch(initPlayers({ players }));
  dispatch(initHands({ hands }));
  dispatch(initBoards({ boards }));
  dispatch(initAchievements({ ageAchievements, playerAchievements }));
  dispatch(initScores({ scores, scorePiles }));
  dispatch(updateResources({ playerResources }));
};

export const setupPlayerOrder = (
  starterCardIdsData: IStarterCardIdsData[]
): AppThunk => dispatch => {
  // get the name of each card to determine player order
  const starterCardNamesData = starterCardIdsData.map(val => {
    const cardName = allCards[val.card].name;
    return {
      card: cardName,
      player: val.player,
    };
  });
  const playerOrder = getPlayerOrder(starterCardNamesData);

  // create a map of the cards to remove from
  // each players hand and add to their board
  const data = starterCardIdsData.reduce((acc, cur) => {
    acc[cur.player] = [allCards[cur.card]];
    return acc;
  }, {} as IStarterCardSetup);

  // update resources totals for players
  const playerResources = playerOrder.reduce((acc, player) => {
    const cardsMovingToBoard = data[player].map(card => card.id);
    const playerResourceTotal = calculatePlayerResources(cardsMovingToBoard);
    acc[player] = playerResourceTotal;
    return acc;
  }, {} as IResourcesByPlayer);

  dispatch(initPlayerOrder({ playerOrder }));
  dispatch(removeCardsFromHands({ data }));
  dispatch(addCardsToBoards({ data }));
  dispatch(updateResources({ playerResources }));
};
