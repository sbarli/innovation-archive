import { cards as allCards } from '../data/cardsById';
import { Ages } from '../enums';
import { initBoards } from '../state/boardsSlice';
import { initDeck } from '../state/cardsSlice';
import { initHands } from '../state/handsSlice';
import { initPlayers } from '../state/playersSlice';
import { AppThunk } from '../store';
import { IBoards, TAgeAchievementCardIds } from '../types';
import {
  createBaseBoard,
  createInitialHandsForPlayers,
  sortAndShuffleCards,
} from '../utils/cardUtils';
import { orderAndFormatPlayers } from '../utils/playerUtils';

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
  const starterDeck = sortAndShuffleCards(allCards);
  const { players, playerOrder } = orderAndFormatPlayers(playerValues);

  // pull out age achievement cards
  // NOTE: purposely mutates starterDeck
  const achievements = Object.keys(starterDeck).reduce((acc, key) => {
    const age = Number(key) as Ages;
    acc[age] = starterDeck[age].pop();
    return acc;
  }, {} as TAgeAchievementCardIds);
  console.log('achievements: ', achievements);

  // pull out age 1 cards for player hands
  // NOTE: purposely mutates starterDeck
  const handStartCards = starterDeck[Ages.ONE].splice(0, playerOrder.length * 2);
  // create player hands with starter cards
  const hands = createInitialHandsForPlayers(playerOrder, handStartCards);

  // create empty boards for players
  const boards = playerOrder.reduce((acc, player) => {
    acc[player] = createBaseBoard(player);
    return acc;
  }, {} as IBoards);

  dispatch(initDeck({ deck: starterDeck }));
  dispatch(initPlayers({ players, playerOrder }));
  dispatch(initHands({ hands }));
  dispatch(initBoards({ boards }));
  // dispatch(initAgeAchievements({ achievements }));
};
