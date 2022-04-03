import { initialState as achievementsInitialState } from '../achievementsSlice';
import { initialState as boardsInitialState } from '../boardsSlice';
import { initialState as deckInitialState } from '../deckSlice';
import { initialState as handsInitialState } from '../handsSlice';
import { initialState as playersInitialState } from '../playersSlice';
import { initialState as scoresInitialState } from '../scoresSlice';

export const initialStoreState = {
  achievements: achievementsInitialState,
  boards: boardsInitialState,
  deck: deckInitialState,
  hands: handsInitialState,
  players: playersInitialState,
  scores: scoresInitialState,
};
