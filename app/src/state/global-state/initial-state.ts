import { initialState as achievementsInitialState } from '../slices/achievementsSlice';
import { initialState as boardsInitialState } from '../slices/boardsSlice';
import { initialState as deckInitialState } from '../slices/deckSlice';
import { initialState as handsInitialState } from '../slices/handsSlice';
import { initialState as playersInitialState } from '../slices/playersSlice';
import { initialState as scoresInitialState } from '../slices/scoresSlice';

export const initialStoreState = {
  achievements: achievementsInitialState,
  boards: boardsInitialState,
  deck: deckInitialState,
  hands: handsInitialState,
  players: playersInitialState,
  scores: scoresInitialState,
};
