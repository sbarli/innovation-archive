import { initialState as achievementsInitialState } from '../achievementsSlice';
import { initialState as boardsInitialState } from '../boardsSlice';
import { initialState as cardsInitialState } from '../cardsSlice';
import { initialState as handsInitialState } from '../handsSlice';
import { initialState as playersInitialState } from '../playersSlice';
import { initialState as scoresInitialState } from '../scoresSlice';

export const initialStoreState = {
  achievements: achievementsInitialState,
  boards: boardsInitialState,
  cards: cardsInitialState,
  hands: handsInitialState,
  players: playersInitialState,
  scores: scoresInitialState,
};
