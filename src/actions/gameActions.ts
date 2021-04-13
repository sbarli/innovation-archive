import { cards as allCards } from '../data/cardsById';
import { initDeck } from '../state/cardsSlice';
import { AppThunk } from '../store';
import { sortAndShuffleCards } from '../utils/cardUtils';

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
export const setupGame = ({ players }: ISetupGameProps): AppThunk => dispatch => {
  const starterDeck = sortAndShuffleCards(allCards);
  console.log('starterDeck: ', starterDeck);
  dispatch(initDeck({ deck: starterDeck }));
};
