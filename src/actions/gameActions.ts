import { cards as allCards } from '../data/cardsById';
import { Ages } from '../enums';
import { initDeck, initHands } from '../state/cardsSlice';
import { initPlayers } from '../state/playersSlice';
import { AppThunk } from '../store';
import { IHands, TAgeAchievementCardIds } from '../types';
import { createInitialHandsForPlayers, sortAndShuffleCards } from '../utils/cardUtils';
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
  console.log('starterDeck: ', starterDeck);
  const { players, playerOrder } = orderAndFormatPlayers(playerValues);
  console.log('players: ', players);
  console.log('playerOrder: ', playerOrder);

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
  const hands = createInitialHandsForPlayers(playerOrder, handStartCards) ?? ({} as IHands);

  dispatch(initDeck({ deck: starterDeck }));
  dispatch(initPlayers({ players, playerOrder }));
  dispatch(initHands({ hands }));
  // dispatch(initAgeAchievements({ achievements }));
};
