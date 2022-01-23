import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import achievementsReducer from '../state/achievementsSlice';
import boardsReducer from '../state/boardsSlice';
import deckReducer from '../state/deckSlice';
import handsReducer from '../state/handsSlice';
import playersReducer from '../state/playersSlice';
import scoresReducer from '../state/scoresSlice';

export const store = configureStore({
  reducer: {
    achievements: achievementsReducer,
    boards: boardsReducer,
    deck: deckReducer,
    hands: handsReducer,
    players: playersReducer,
    scores: scoresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
